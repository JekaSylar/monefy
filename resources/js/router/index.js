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
const RegisterPage = () => import("../pages/RegisterPage.vue");
const ResetPasswordPage = () => import("../pages/ResetPasswordPage.vue");
const ResetNewPasswordPage = () => import("../pages/ResetNewPasswordPage.vue");
const CategoryIncomePage = () => import("../pages/CategoryIncomePage.vue");
const CategoryExpensePage = () => import("../pages/CategoryExpensePage.vue");
const RecordPage = () => import("../pages/RecordPage.vue");

const routes = [
    {
        path: "/login",
        name: "login",
        meta: { layout: "auth", auth: false },
        component: LoginPage,
    },
    {
        path: "/register",
        name: "register",
        meta: { layout: "auth", auth: false },
        component: RegisterPage,
    },

    {
        path: "/resetpassword",
        name: "resetpassword",
        meta: { layout: "auth", auth: false },
        component: ResetPasswordPage,
    },

    {
        path: "/password/reset/:token",
        name: "newpassword",
        meta: { layout: "auth", auth: false },
        component: ResetNewPasswordPage,
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
        path: "/records",
        name: "history",
        meta: { layout: "main", auth: true },
        component: HistoryPage,
    },

    {
        path: "/records/:id",
        name: "record",
        meta: { layout: "main", auth: true },
        component: RecordPage,
    },
    //Доходы
    {
        path: "/incomes",
        name: "incomes",
        meta: { layout: "main", auth: true },
        component: IncomePage,
    },

    //Категория дохов
    {
        path: "/incomes/:id",
        name: "category_incomes",
        meta: { layout: "main", auth: true },
        component: CategoryIncomePage,
    },

    //Расходы
    {
        path: "/expenses",
        name: "expenses",
        meta: { layout: "main", auth: true },
        component: ExpensePage,
    },
    //Категория расходов
    {
        path: "/expenses/:id",
        name: "category_expenses",
        meta: { layout: "main", auth: true },
        component: CategoryExpensePage,
    },

    {
        path: "/checks",
        name: "checks",
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
