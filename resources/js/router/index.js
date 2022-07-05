import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
const HomePage = () => import("../pages/HomePage.vue");
const LoginPage = () => import("../pages/LoginPage.vue");
const СreatePage = () => import("../pages/СreatePage.vue");
const HistoryPage = () => import("../pages/HistoryPage.vue");
const IncomePage = () => import("../pages/IncomePage.vue");
const ExpensePage = () => import("../pages/ExpensePage.vue");
const CheckPage = () => import("../pages/CheckPage.vue");
const UsersPage = () => import("../pages/UsersPage.vue");
const UserPage = () => import("../pages/UserPage.vue");

const routes = [
    {
        path: "/login",
        name: "login",
        meta: { layout: "auth", auth: false },
        component: LoginPage,
    },
    {
        path: "/",
        name: "home",
        meta: { layout: "main", auth: true },
        component: HomePage,
    },
    {
        path: "/create",
        name: "create",
        meta: { layout: "main", auth: true },
        component: СreatePage,
    },
    {
        path: "/history",
        name: "history",
        meta: { layout: "main", auth: true },
        component: HistoryPage,
    },
    //Доходы
    {
        path: "/income",
        name: "income",
        meta: { layout: "main", auth: true },
        component: IncomePage,
    },
    //Расходы
    {
        path: "/expense",
        name: "expense",
        meta: { layout: "main", auth: true },
        component: ExpensePage,
    },
    {
        path: "/check",
        name: "check",
        meta: { layout: "main", auth: true },
        component: CheckPage,
    },
    {
        path: "/users",
        name: "users",
        meta: { layout: "main", auth: true },
        component: UsersPage,
    },

    {
        path: "/user",
        name: "user",
        meta: { layout: "main", auth: true },
        component: UserPage,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "active",
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
