import { createStore } from "vuex";
import auth from "./modules/auth";
import user from "./modules/user";

export default createStore({
    state() {
        return {
            message: null,
        };
    },

    getters: {},

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
            }, 5000);
        },
    },

    modules: { auth, user },
});
