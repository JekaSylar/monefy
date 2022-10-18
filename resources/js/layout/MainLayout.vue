<template>
  <div
    class="hold-transition sidebar-mini layout-fixed"
    :class="{ 'sidebar-collapse': bars }"
  >
    <div class="wrapper">
      <the-navbar @showBar="bars = !bars" />
      <the-sidebar />
      <router-view />
      <the-footer />
      <the-create v-if="activePageCreate" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import TheNavbar from "../components/TheNavbar.vue";
import TheSidebar from "../components/TheSidebar.vue";
import TheFooter from "../components/TheFooter.vue";
import TheCreate from "../components/TheCreate.vue";

export default {
  setup() {
    const bars = ref(false);
    const store = useStore();
    const route = useRoute();

    const activePageCreate = computed(() => {
      if (route.name === "create") {
        return false;
      }
      return true;
    });

    onMounted(async () => {
      await store.dispatch("currentUser/loaderUser");
    });

    return {
      bars,
      activePageCreate,
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
