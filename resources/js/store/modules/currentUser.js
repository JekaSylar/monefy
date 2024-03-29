import axios from "../../axios";

export default {
    namespaced: true,

    state() {
        return {
            сurrentUser: {
                bill: 0,
                email: "",
                id: 0,
                is_admin: 0,
                name: "",
                expensesCategories: [
                    {
                        id: 0,
                        name: "",
                    },
                ],
                incomesCategories: [
                    {
                        id: 0,
                        name: "",
                    },
                ],
            },
        };
    },
    mutations: {
        setCurrentUser(state, value) {
            state.сurrentUser = value;
        },
        updateCurrentUser(state, value) {
            state.currentUser = Object.assign(state.сurrentUser, value);
        },
    },

    getters: {
        getCurrentUser(state) {
            return state.сurrentUser;
        },
    },
    actions: {
        async updateUser({ commit, dispatch }, user) {
            try {
                await axios.put("api/v1/user/" + user.id, {
                    _method: "PUT",
                    ...user,
                });
                commit("updateCurrentUser", user);
                dispatch(
                    "setMessage",
                    {
                        title: "Поздравляю",
                        text: "Ваши личная информация обновлен",
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
                        text: e.response.data.message,
                        type: "alert-danger",
                        ico: "fa-exclamation-triangle",
                    },
                    { root: true }
                );
                console.log(e.response.data.message);
            }
        },

        async loaderUser({ commit }) {
            try {
                commit("loader/setLoader", true, { root: true });
                const { data } = await axios.get("api/v1/user");
                commit("setCurrentUser", data.data);
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
            } finally {
                commit("loader/setLoader", false, { root: true });
            }
        },
    },
};
