<template>
  <div class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
      <the-navbar />
      <the-sidebar />
      <router-view></router-view>
      <the-footer />
    </div>
  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar.vue";
import TheSidebar from "../components/TheSidebar.vue";
import TheFooter from "../components/TheFooter.vue";
export default {
  components: {
    TheNavbar,
    TheSidebar,
    TheFooter,
  },
};
</script>

<style>
</style>
