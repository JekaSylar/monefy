<template>
  <app-page title="Категория расходов">
    <add-expense />
    <all-expense />
  </app-page>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import AppPage from "../components/ui/AppPage.vue";
import AddExpense from "../components/expenses/AddExpense.vue";
import AllExpense from "../components/expenses/AllExpense.vue";

export default {
  setup() {
    const store = useStore();

    onMounted(async () => {
      await store.dispatch("expensesCategory/loaderCategories");
    });

    return {};
  },
  components: {
    AppPage,
    AllExpense,
    AddExpense,
  },
};
</script>

<style>
</style>
