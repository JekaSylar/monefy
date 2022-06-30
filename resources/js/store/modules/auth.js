import axios from "axios";

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
                const { data } = await axios.post("/api/login/", {
                    ...payload,
                });
                console.log(data.access_token);
                commit("setToken", data.access_token);
            } catch (e) {
                dispatch(
                    "setMessage",
                    {
                        title: "Ошибка",
                        text: "Неверный логин или пароль!",
                        type: "alert-danger",
                    },
                    { root: true }
                );
                throw new Error();
            }
        },
    },
};
