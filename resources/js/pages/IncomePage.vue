<template>
  <app-loader v-if="loader" />
  <app-page title="Категория доходов" v-else>
    <add-income />
    <all-income />
  </app-page>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import AppPage from "../components/ui/AppPage.vue";
import AllIncome from "../components/incomes/AllIncome.vue";
import AddIncome from "../components/incomes/AddIncome.vue";
import AppLoader from "../components/ui/AppLoader.vue";

export default {
  setup() {
    const store = useStore();
    const loader = ref(false);

    onMounted(() => {
      loader.value = true;
      store.dispatch("incomeСategory/loaderCategories");
      loader.value = false;
    });

    return {
      loader,
    };
  },
  components: {
    AppPage,
    AllIncome,
    AppLoader,
    AddIncome,
  },
};
</script>

<style>
</style>
