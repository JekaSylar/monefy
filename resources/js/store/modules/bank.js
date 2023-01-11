import axios from "axios";

export default {
    namespaced: true,

    state() {
        return {
            currency: [
                {
                    ccy: null,
                    base_ccy: null,
                    buy: null,
                    sale: null,
                },
            ],
        };
    },

    getters: {
        getCurrency(state) {
            return state.currency;
        },
    },

    mutations: {
        setCurrency(state, payload) {
            state.currency = payload;
        },
    },

    actions: {
        async loaderCurrency({ commit, dispatch }) {
            try {
                const data = await axios.get("api/v1/currency");
                commit("setCurrency", data.data);
            } catch (e) {
                dispatch(
                    "setMessage",
                    {
                        title: "Ошибка",
                        text: "Не удается подключиться к серверу банка",
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
