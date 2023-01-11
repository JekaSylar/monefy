import axios from "../../axios";

export default {
    namespaced: true,

    state() {
        return {
            incomeSumma: 0,
            expenseSumma: 0,
            Total: 0,
            incomeCategory: [],
            expenseCategory: [],
            incomeRecord: [],
            expenseRecord: [],
        };
    },

    getters: {
        getIncomeSumma(state) {
            return state.incomeSumma;
        },
        getExpenseSumma(state) {
            return state.expenseSumma;
        },
        getTotal(state) {
            return state.incomeSumma - state.expenseSumma;
        },
        getIncomeCategory(state) {
            return state.incomeCategory;
        },
        getExpenseCategory(state) {
            return state.expenseCategory;
        },
        getIncomeRecord(state) {
            return state.incomeRecord;
        },
        getExpenseRecord(state) {
            return state.expenseRecord;
        },
    },

    mutations: {
        setIncomeSumma(state, value) {
            let summa = 0;

            for (let i = 0; i < value.length; i++) {
                if (value[i].type == "income") {
                    summa += value[i].summa;
                }
            }
            state.incomeSumma = summa;
        },

        setExpenseSumma(state, value) {
            let summa = 0;

            for (let i = 0; i < value.length; i++) {
                if (value[i].type == "expense") {
                    summa += value[i].summa;
                }
            }

            state.expenseSumma = summa;
        },

        setIncomeCategory(state, value) {
            const res = value
                .filter((e) => e.type == "income")
                .reduce((sum, { incomeCategory: e, summa }) => {
                    sum[e.id] = sum[e.id] || {
                        id: e.id,
                        name: e.name,
                        sum: 0,
                    };
                    sum[e.id].sum += summa;
                    return sum;
                }, {});

            state.incomeCategory = res;
        },

        setExpenseCategory(state, value) {
            const res = value
                .filter((e) => e.type == "expense")
                .reduce((sum, { expenseCategory: e, summa }) => {
                    sum[e.id] = sum[e.id] || {
                        id: e.id,
                        name: e.name,
                        sum: 0,
                    };
                    sum[e.id].sum += summa;
                    return sum;
                }, {});

            state.expenseCategory = res;
        },

        setIncomeRecord(state, value) {
            let records = [];

            for (let i = 0; i < value.length; i++) {
                if (value[i].type == "income") {
                    records.push(value[i]);
                }
            }

            state.incomeRecord = records;
        },
        setExpenseRecord(state, value) {
            let records = [];

            for (let i = 0; i < value.length; i++) {
                if (value[i].type == "expense") {
                    records.push(value[i]);
                }
            }

            state.expenseRecord = records;
        },
    },

    actions: {
        async checks({ commit, dispatch }) {
            try {
                commit("loader/setLoader", true, { root: true });
                const { data } = await axios.get("api/v1/checks/check");
                commit("setIncomeSumma", data.data);
                commit("setExpenseSumma", data.data);
                commit("setIncomeRecord", data.data);
                commit("setExpenseRecord", data.data);
                commit("setIncomeCategory", data.data);
                commit("setExpenseCategory", data.data);
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

        async checksYears({ commit, dispatch }, year) {
            try {
                const { data } = await axios.get(`api/v1/checks/years/${year}`);

                commit("setIncomeSumma", data.data);
                commit("setExpenseSumma", data.data);
                commit("setIncomeRecord", data.data);
                commit("setExpenseRecord", data.data);
                commit("setIncomeCategory", data.data);
                commit("setExpenseCategory", data.data);
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

        async checksMonth({ commit, dispatch }, date) {
            try {
                const { data } = await axios.get(
                    `api/v1/checks/month/${date.month}/${date.year}`
                );

                commit("setIncomeSumma", data.data);
                commit("setExpenseSumma", data.data);
                commit("setIncomeRecord", data.data);
                commit("setExpenseRecord", data.data);
                commit("setIncomeCategory", data.data);
                commit("setExpenseCategory", data.data);
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

        async checksPeriod({ commit, dispatch }, date) {
            try {
                const { data } = await axios.get(
                    `api/v1/checks/date/${date.dateStart}/${date.dateEnd}/`
                );

                commit("setIncomeSumma", data.data);
                commit("setExpenseSumma", data.data);
                commit("setIncomeRecord", data.data);
                commit("setExpenseRecord", data.data);
                commit("setIncomeCategory", data.data);
                commit("setExpenseCategory", data.data);
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
    },
};
