import axios from "../../axios";

export default {
    namespaced: true,

    state() {
        return {
            incomeСategory: {
                name: "",
                id: 0,
            },
        };
    },
    getters: {
        getIncomeCategory(state) {
            return state.incomeСategory;
        },
    },
    mutations: {
        setIncomeCategory(state, value) {
            state.incomeСategory = value;
        },
        addCategory(state, payload) {
            state.incomeСategory.data.push(payload);
        },
        removeCategory(state, index) {
            delete state.incomeСategory.data.splice(index, 1);
        },
        updateCategory(state, payload) {
            state.incomeСategory.data = state.incomeСategory.data.map((item) =>
                item.id === payload.id ? payload : item
            );
        },
    },

    actions: {
        async loaderCategories({ commit, dispatch }) {
            try {
                const { data } = await axios.get("api/v1/incomes");
                commit("setIncomeCategory", data);
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
        async createdCategory({ commit, dispatch }, category) {
            try {
                await axios.post("api/v1/incomes", { ...category });
                commit("addCategory", category);
                dispatch(
                    "setMessage",
                    {
                        title: "Поздравляю",
                        text: "Категория создана",
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
        async removeCategory({ commit, dispatch }, category) {
            try {
                await axios.post("api/v1/incomes/" + category.id, {
                    _method: "DELETE",
                });
                commit("removeCategory", category.index);
                dispatch(
                    "setMessage",
                    {
                        title: "Поздравляю",
                        text: "Категория удалена!",
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
        async updateUser({ commit, dispatch }, category) {
            try {
                await axios.put("api/v1/incomes/" + category.id, {
                    _method: "PUT",
                    ...category,
                });
                commit("updateCategory", category);
                dispatch(
                    "setMessage",
                    {
                        title: "Поздравляю",
                        text: "Категория обновлена",
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
