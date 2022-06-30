import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
const HomePage = () => import("../pages/HomePage.vue");
const LoginPage = () => import("../pages/LoginPage.vue");

const routes = [
    {
        path: "/",
        name: "home",
        meta: { layout: "main", auth: true },
        component: HomePage,
    },
    {
        path: "/login",
        name: "login",
        meta: { layout: "auth", auth: false },
        component: LoginPage,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    const requireAuth = to.meta.auth;

    if (requireAuth && store.getters["auth/isAuthenticated"]) {
        next();
    } else if (requireAuth && !store.getters["auth/isAuthenticated"]) {
        next("/login?message=auth");
    } else {
        next();
    }
});

export default router;
