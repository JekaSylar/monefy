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
                        text: "Неверный логин или пароль!",
                        type: "alert-danger",
                        ico: "fa-exclamation-triangle",
                    },
                    { root: true }
                );
                throw new Error();
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
            } catch (e) {}
        },
    },
};
