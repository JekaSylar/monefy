import axios from "../../axios";

export default {
    namespaced: true,

    state() {
        return {
            records: [
                {
                    id: 0,
                    description: "",
                    summa: 0,
                    type: "",
                    date: "",
                    incomeСategory: {
                        id: 0,
                        name: "",
                    },
                    expenseCategory: {
                        id: 0,
                        name: "",
                    },
                },
            ],

            record: {
                id: 0,
                description: "",
                summa: 0,
                type: "",
                date: "",
                incomeСategory: {
                    id: 0,
                    name: "",
                },
                expenseCategory: {
                    id: 0,
                    name: "",
                },
            },
        };
    },
    mutations: {
        setRecords(state, value) {
            state.records = value;
        },
        setRecord(state, value) {
            state.record = value;
        },

        removeRecord(state, index) {
            delete state.records.data.splice(index, 1);
        },
        updateRecord(state, payload) {
            state.records.data = state.records.data.map((item) =>
                item.id === payload.id ? payload : item
            );
        },
    },

    getters: {
        getRecords(state) {
            return state.records;
        },

        getRecord(state) {
            return state.record;
        },
    },
    actions: {
        async loaderRecords({ commit, dispatch }, current) {
            try {
                commit("loader/setLoader", true, { root: true });
                const { data } = await axios.get(
                    `api/v1/records${current ? `?page=${current}` : ""}`
                );

                commit("setRecords", data);
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
            } finally {
                commit("loader/setLoader", false, { root: true });
            }
        },

        async filter({ commit, dispatch }, filters) {
            try {
                commit("loader/setLoader", true, { root: true });
                const { data } = await axios.post(
                    `api/v1/records/filter${
                        filters.current ? `?page=${filters.current}` : ""
                    }`,
                    {
                        ...filters.filter,
                    }
                );
                commit("setRecords", data);
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
            } finally {
                commit("loader/setLoader", false, { root: true });
            }
        },
        async removeRecord({ commit, dispatch }, record) {
            try {
                await axios.post("api/v1/records/" + record.id, {
                    _method: "DELETE",
                });
                commit("removeRecord", record.index);
                dispatch("currentUser/loaderUser", false, { root: true });
                dispatch(
                    "setMessage",
                    {
                        title: "Поздравляю",
                        text: "Запись удалена!",
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
            }
        },
        async updateRecord({ commit, dispatch }, record) {
            try {
                commit("loader/setLoader", true, { root: true });
                const updateRecord = {
                    description: record.description,
                    date: record.date,
                    id: record.id,
                    summa: record.summa,
                    type: record.type,
                    ...(record.incomeCategory !== undefined && {
                        income_сategory_id: record.incomeCategory,
                    }),
                    ...(record.expenseCategory !== undefined && {
                        expenses_category_id: record.expenseCategory,
                    }),
                };

                await axios.post("api/v1/records/" + record.id, {
                    _method: "PUT",
                    ...updateRecord,
                });
                dispatch("currentUser/loaderUser", false, { root: true });
                dispatch("loaderRecords", 1);
                dispatch(
                    "setMessage",
                    {
                        title: "Поздравляю",
                        text: "Запись обновлена",
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
            } finally {
                commit("loader/setLoader", false, { root: true });
            }
        },

        async createdRecord({ commit, dispatch }, record) {
            try {
                await axios.post("api/v1/records", {
                    ...record,
                });
                dispatch("currentUser/loaderUser", false, { root: true });
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
            }
        },

        async lastIncomes({ commit, dispatch }) {
            try {
                const { data } = await axios.get("api/v1/lastincomes");

                return data.data;
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
            }
        },

        async lastExpenses({ commit, dispatch }) {
            try {
                const { data } = await axios.get("api/v1/lastexpenses");

                return data.data;
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
            }
        },

        async showRecord({ commit, dispatch }, $id) {
            try {
                commit("loader/setLoader", true, { root: true });
                const { data } = await axios.get("api/v1/records/" + $id);
                commit("setRecord", data.data);
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
