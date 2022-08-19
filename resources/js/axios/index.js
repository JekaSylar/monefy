import axios from "axios";
import router from "../router";
import store from "../store";

const requestAxios = axios.create({
    baseURL: "http://127.0.0.1:8000/",
});

requestAxios.interceptors.response.use(null, (err) => {
    if (err.response.status === 401 || err.response.status === 419) {
        store.commit("auth/logout");
        router.push("/login?message=auth");
    }
    return Promise.reject(error);
});

export default requestAxios;
