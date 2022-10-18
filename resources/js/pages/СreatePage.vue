<template>
  <app-page title="Добавить запись">
    <add-record :category="userCategory" />
  </app-page>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import AppPage from "../components/ui/AppPage.vue";
import AddRecord from "../components/records/AddRecord.vue";

export default {
  setup() {
    const store = useStore();
    const incomes = ref(null);
    const expenses = ref(null);

    onMounted(async () => {
      await store.dispatch("currentUser/loaderUser");
    });

    const userCategory = computed(
      () => store.getters["currentUser/getCurrentUser"]
    );

    return {
      userCategory,
    };
  },
  components: {
    AppPage,
    AddRecord,
  },
};
</script>

<style>
</style>
