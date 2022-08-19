<template>
  <app-loader v-if="isLoader" />
  <div
    v-else
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
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import TheNavbar from "../components/TheNavbar.vue";
import TheSidebar from "../components/TheSidebar.vue";
import TheFooter from "../components/TheFooter.vue";
import TheCreate from "../components/TheCreate.vue";
import AppLoader from "../components/ui/AppLoader.vue";

export default {
  setup() {
    const bars = ref(false);
    const store = useStore();
    const isLoader = ref(false);

    onMounted(async () => {
      isLoader.value = true;
      await store.dispatch("currentUser/currentUser");
      isLoader.value = false;
    });

    return {
      bars,
      isLoader,
    };
  },

  components: {
    TheNavbar,
    TheSidebar,
    TheFooter,
    TheCreate,
    AppLoader,
  },
};
</script>

<style>
</style>
