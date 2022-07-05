import axios from "axios";

export default {
    namespaced: true,

    state() {
        return {
            users: null,
        };
    },
    mutations: {
        setUsers(state, value) {
            state.users = value;
        },
    },

    getters: {
        getUsers(state) {
            return state.users;
        },
    },
    actions: {
        async loaderUsers({ commit, dispatch }, current) {
            try {
                const { data } = await axios.get(
                    `api/v1/users${current ? `?page=${current}` : ""}`
                );
                commit("setUsers", data);
            } catch (e) {
                dispatch(
                    "setMessage",
                    {
                        title: "Ошибка",
                        text: "Сервер не отвечает",
                        type: "alert-danger",
                        ico: "fa-exclamation-triangle",
                    },
                    { root: true }
                );
                throw new Error();
            }
        },
    },
};
