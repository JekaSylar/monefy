<template>
  <div class="check__last-table">
    <div class="row">
      <record-table
        :records="incomeRecord"
        title="Последних записей доходов"
        symbol="+"
        color="green"
        typeCategory="income"
      />
      <record-table
        :records="expenseRecord"
        title="Последних записей расходов"
        symbol="-"
        color="red"
        typeCategory="expense"
      />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import RecordTable from "./TableRecord/RecordTable.vue";

export default {
  setup() {
    const store = useStore();

    const incomeRecord = computed(() => store.getters["check/getIncomeRecord"]);
    const expenseRecord = computed(
      () => store.getters["check/getExpenseRecord"]
    );

    return {
      incomeRecord,
      expenseRecord,
    };
  },
  components: {
    RecordTable,
  },
};
</script>

<style>
</style>
