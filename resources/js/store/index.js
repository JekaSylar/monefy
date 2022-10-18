import { createStore } from "vuex";
import auth from "./modules/auth";
import users from "./modules/users";
import currentUser from "./modules/currentUser";
import incomeСategory from "./modules/incomeСategory";
import expensesCategory from "./modules/expensesCategory";
import record from "./modules/record";
import loader from "./modules/loader";

export default createStore({
    state() {
        return {
            message: null,
        };
    },

    getters: {
        getMessage(state) {
            return state.message;
        },
    },

    mutations: {
        setMessage(state, value) {
            return (state.message = value);
        },
        clearMessage(state) {
            state.message = "";
        },
    },

    actions: {
        setMessage({ commit }, message) {
            commit("setMessage", message);
            setTimeout(() => {
                commit("clearMessage");
            }, 15000);
        },
    },

    modules: {
        auth,
        users,
        currentUser,
        incomeСategory,
        expensesCategory,
        record,
        loader,
    },
});
