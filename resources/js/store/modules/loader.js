export default {
    namespaced: true,

    state() {
        return {
            loader: false,
        };
    },

    getters: {
        getLoader(state) {
            return state.loader;
        },
    },
    mutations: {
        setLoader(state, payload) {
            state.loader = payload;
        },
    },
};
