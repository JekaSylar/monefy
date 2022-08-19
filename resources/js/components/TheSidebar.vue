<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <router-link to="/" class="brand-link">
      <img
        src="../assets/img/Logo.png"
        class="brand-image img-circle elevation-3"
        alt="LogoAdmin"
      />
      <span class="brand-text font-weight-light title__logo">Monefy</span>
    </router-link>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex" v-if="currentUser">
        <div class="info">
          <router-link to="/user" class="d-block">
            {{ currentUser.name }}
          </router-link>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item menu-open">
            <router-link to="/" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>Главная</p>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/create" class="nav-link">
              <i class="nav-icon fas fa-plus-circle"></i>
              <p>Добавить</p>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/history" class="nav-link">
              <i class="nav-icon fas fa-history"></i>
              <p>История</p>
            </router-link>
          </li>

          <li
            class="nav-item"
            :class="{ 'menu-is-opening menu-open': childMenu }"
            @click.prevent="childMenu = !childMenu"
          >
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-list"></i>
              <p>
                Категории
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/income" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Доходы</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/expense" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Расходы</p>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <router-link to="/check" class="nav-link">
              <i class="nav-icon fas fa-money-bill"></i>
              <p>Счет</p>
            </router-link>
          </li>

          <li class="nav-item" v-if="currentUser.is_admin === 1">
            <router-link to="/users" class="nav-link">
              <i class="nav-icon fas fa-user"></i>
              <p>Пользователи</p>
            </router-link>
          </li>

          <li class="nav-item">
            <a @click.prevent="logout" class="nav-link">
              <i class="nav-icon fas fa-sign-out-alt"></i>
              <p>Выход</p>
            </a>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const childMenu = ref(false);

    const store = useStore();

    const router = useRouter();

    const currentUser = computed(
      () => store.getters["currentUser/getCurrentUser"]
    );

    const logout = async () => {
      await store.dispatch("auth/logout");
      router.push("/login");
    };

    return {
      childMenu,
      logout,
      currentUser,
    };
  },
};
</script>

<style>
.sidebar a {
  cursor: pointer;
}
.router-link-active .router-link-exact-active {
  background-color: #007bff !important;
  color: #fff !important;
}
.nav-link a:hover {
  background-color: #007bff !important;
  color: #fff !important;
}
</style>
