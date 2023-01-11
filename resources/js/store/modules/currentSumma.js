import axios from "../../axios";

export default {
    namespaced: true,

    state() {
        return {
            incomeCurrentSumma: 0,
            expenseCurrentSumma: 0,
            currentTotal: 0,
        };
    },
    getters: {
        getIncomeCurrentSumma(state) {
            return state.incomeCurrentSumma;
        },
        getExpenseCurrentSumma(state) {
            return state.expenseCurrentSumma;
        },
        getCurrentTotal(state) {
            return state.incomeCurrentSumma - state.expenseCurrentSumma;
        },
    },
    mutations: {
        setIncomeCurrentSumma(state, value) {
            let result = 0;
            for (let i = 0; i < value.length; i++) {
                result = result + value[i].summa;
            }
            state.incomeCurrentSumma = result;
        },

        setExpenseCurrentSumma(state, value) {
            let result = 0;
            for (let i = 0; i < value.length; i++) {
                result = result + value[i].summa;
            }
            state.expenseCurrentSumma = result;
        },
    },

    actions: {
        async сurrentMonthIncomes({ commit, dispatch }) {
            try {
                const { data } = await axios.get("api/v1/currentmonthincomes");

                commit("setIncomeCurrentSumma", data.data);
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

        async сurrentMonthExpenses({ commit, dispatch }) {
            try {
                const { data } = await axios.get("api/v1/currentmonthexpenses");

                commit("setExpenseCurrentSumma", data.data);
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
