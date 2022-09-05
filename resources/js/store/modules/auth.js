import axios from "../../axios";

const TOKEN_KEY = "jwt-token";

export default {
    namespaced: true,

    state() {
        return {
            token: localStorage.getItem(TOKEN_KEY),
        };
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            localStorage.setItem(TOKEN_KEY, token);
        },

        logout(state) {
            state.token = null;
            localStorage.removeItem(TOKEN_KEY);
        },
    },

    getters: {
        token(state) {
            return state.token;
        },
        isAuthenticated(_, getters) {
            return !!getters.token;
        },
    },
    actions: {
        async login({ commit, dispatch }, payload) {
            try {
                const res = await axios.get("/sanctum/csrf-cookie");
                const token = res.config.headers["X-XSRF-TOKEN"];
                await axios.post("/login/", {
                    ...payload,
                    "X-XSRF-TOKEN": token,
                });
                commit("setToken", token);
            } catch (e) {
                dispatch(
                    "setMessage",
                    {
                        title: "Ошибка",
                        text: e.response.data.message,
                        type: "alert-danger",
                        ico: "fa-exclamation-triangle",
                    },
                    { root: true }
                );
                throw new Error();
            }
        },

        async registerUser({ dispatch }, payload) {
            try {
                const res = await axios.get("/sanctum/csrf-cookie");
                const token = res.config.headers["X-XSRF-TOKEN"];
                await axios.post("/register/", {
                    ...payload,
                    "X-XSRF-TOKEN": token,
                });
                await dispatch("login", {
                    email: payload.email,
                    password: payload.password,
                });
                return true;
            } catch (e) {
                dispatch(
                    "setMessage",
                    {
                        title: "Ошибка",
                        text: e.response.data.message,
                        type: "alert-danger",
                        ico: "fa-exclamation-triangle",
                    },
                    { root: true }
                );
                console.log(e.response.data.message);
            }
        },

        async resetPassword({ dispatch }, payload) {
            try {
                const res = await axios.get("/sanctum/csrf-cookie");
                const token = res.config.headers["X-XSRF-TOKEN"];
                await axios.post("/password/email/", {
                    ...payload,
                    "X-XSRF-TOKEN": token,
                });
                dispatch(
                    "setMessage",
                    {
                        title: "Востановления пароля",
                        text: "Мы отправили ссылку для сброса пароля по электронной почте!",
                        type: "alert-success",
                        ico: "fa-check",
                    },
                    { root: true }
                );
                return true;
            } catch (e) {
                dispatch(
                    "setMessage",
                    {
                        title: "Востановления пароля",
                        text: e.response.data.message,
                        type: "alert-danger",
                        ico: "fa-exclamation-triangle",
                    },
                    { root: true }
                );
                console.log(e.response.data.message);
            }
        },

        async resetNewPassword({ dispatch }, payload) {
            try {
                const res = await axios.get("/sanctum/csrf-cookie");
                const token = res.config.headers["X-XSRF-TOKEN"];
                await axios.post("/password/reset/", {
                    ...payload,
                    "X-XSRF-TOKEN": token,
                });
                return true;
            } catch (e) {
                console.log(e.response.data.message);
            }
        },

        async logout({ commit, dispatch }) {
            try {
                await axios.post("logout");
                commit("logout");
                dispatch(
                    "setMessage",
                    {
                        title: "Внимания!",
                        text: "Вы вышли из системы",
                        type: "alert-info",
                        ico: "fa-info",
                    },
                    { root: true }
                );
            } catch (e) {
                dispatch(
                    "setMessage",
                    {
                        title: "Ошибка",
                        text: e.response.data.message,
                        type: "alert-danger",
                        ico: "fa-exclamation-triangle",
                    },
                    { root: true }
                );
                console.log(e.response.data.message);
            }
        },
    },
};
