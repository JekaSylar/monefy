<template>
  <div
    class="hold-transition sidebar-mini layout-fixed"
    :class="{ 'sidebar-collapse': bars }"
  >
    <div class="wrapper">
      <the-navbar @showBar="bars = !bars" />
      <the-sidebar />
      <router-view></router-view>
      <the-footer />
      <the-create />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import TheNavbar from "../components/TheNavbar.vue";
import TheSidebar from "../components/TheSidebar.vue";
import TheFooter from "../components/TheFooter.vue";
import TheCreate from "../components/TheCreate.vue";

export default {
  setup() {
    const bars = ref(false);

    return {
      bars,
    };
  },

  components: {
    TheNavbar,
    TheSidebar,
    TheFooter,
    TheCreate,
  },
};
</script>

<style>
</style>
