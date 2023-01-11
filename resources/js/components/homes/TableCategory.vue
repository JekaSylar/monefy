<template>
  <div class="check__category-table">
    <div class="row">
      <category-table
        v-if="Object.keys(incomeCategory).length"
        :categories="incomeCategory"
        title="Доходы по категориям"
        color="green"
        symbol="+"
      />
      <category-table
        v-if="Object.keys(expenseCategory).length"
        :categories="expenseCategory"
        title="Расходы по категориям"
        color="red"
        symbol="-"
      />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import CategoryTable from "./TableCategory/CategoryTable.vue";

export default {
  setup() {
    const store = useStore();
    const incomeCategory = computed(
      () => store.getters["home/getIncomeCategory"]
    );

    const expenseCategory = computed(
      () => store.getters["home/getExpenseCategory"]
    );

    return {
      incomeCategory,
      expenseCategory,
    };
  },
  components: {
    CategoryTable,
  },
};
</script>

<style>
</style>
