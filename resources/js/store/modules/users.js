import axios from "../../axios";

export default {
    namespaced: true,

    state() {
        return {
            users: [
                {
                    bill: 0,
                    email: "",
                    id: 0,
                    is_admin: 0,
                    login: "",
                    name: "",
                },
            ],
        };
    },
    mutations: {
        setUsers(state, value) {
            state.users = value;
        },
        addUsers(state, payload) {
            state.users.data.push(payload);
        },
        removeUser(state, index) {
            delete state.users.data.splice(index, 1);
        },
        updateUser(state, payload) {
            state.users.data = state.users.data.map((item) =>
                item.id === payload.id ? payload : item
            );
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
        async createUser({ commit, dispatch }, user) {
            try {
                await axios.post("api/v1/users", { ...user });
                commit("addUsers", user);
                dispatch(
                    "setMessage",
                    {
                        title: "Поздравляю",
                        text: "Пользователь создан",
                        type: "alert-success",
                        ico: "fa-check",
                    },
                    { root: true }
                );
            } catch (e) {
                dispatch(
                    "setMessage",
                    {
                        title: "Ошибка",
                        text: e,
                        type: "alert-danger",
                        ico: "fa-exclamation-triangle",
                    },
                    { root: true }
                );
            }
        },

        async removeUser({ commit, dispatch }, user) {
            try {
                await axios.post("api/v1/users/" + user.id, {
                    _method: "DELETE",
                });
                commit("removeUser", user.index);
                dispatch(
                    "setMessage",
                    {
                        title: "Поздравляю",
                        text: "Пользователь удален!",
                        type: "alert-success",
                        ico: "fa-check",
                    },
                    { root: true }
                );
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
            }
        },
        async updateUser({ commit, dispatch }, user) {
            try {
                await axios.put("api/v1/users/" + user.id, {
                    _method: "PUT",
                    ...user,
                });
                commit("updateUser", user);
                dispatch(
                    "setMessage",
                    {
                        title: "Поздравляю",
                        text: "Пользователь Обновлен",
                        type: "alert-success",
                        ico: "fa-check",
                    },
                    { root: true }
                );
            } catch (e) {
                /*dispatch(
                    "setMessage",
                    {
                        title: "Ошибка",
                        text: "Сервер не отвечает",
                        type: "alert-danger",
                        ico: "fa-exclamation-triangle",
                    },
                    { root: true }
                );*/
                console.log(e);
            }
        },
    },
};
