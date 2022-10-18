<template>
  <app-page title="Категория доходов">
    <add-income />
    <all-income />
  </app-page>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import AppPage from "../components/ui/AppPage.vue";
import AllIncome from "../components/incomes/AllIncome.vue";
import AddIncome from "../components/incomes/AddIncome.vue";

export default {
  setup() {
    const store = useStore();

    onMounted(async () => {
      await store.dispatch("incomeСategory/loaderCategories");
    });

    return {};
  },
  components: {
    AppPage,
    AllIncome,
    AddIncome,
  },
};
</script>

<style>
</style>
