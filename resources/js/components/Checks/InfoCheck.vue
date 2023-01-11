<template>
  <div class="check__info">
    <div class="row">
      <finance-block
        title="Баланас:"
        :summa="totalSumma"
        colorBlock="bg-warning"
        icon="fa-money-bill-wave"
      />
      <finance-block
        title="Доход:"
        :summa="incomeSumma"
        colorBlock="bg-success"
        symbol="+"
        icon="fa-chart-line"
      />
      <finance-block
        title="Расходы:"
        :summa="expenseSumma"
        colorBlock="bg-danger"
        symbol="-"
        icon="fa-cart-arrow-down"
      />

      <currency-block :totalSumma="totalSumma" />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import FinanceBlock from "./InfoBlocks/FinanceBlock.vue";
import CurrencyBlock from "./InfoBlocks/CurrencyBlock.vue";

export default {
  setup() {
    const store = useStore();

    const incomeSumma = computed(() => store.getters["check/getIncomeSumma"]);
    const expenseSumma = computed(() => store.getters["check/getExpenseSumma"]);
    const totalSumma = computed(() => store.getters["check/getTotal"]);

    return {
      incomeSumma,
      expenseSumma,
      totalSumma,
    };
  },

  components: {
    CurrencyBlock,
    FinanceBlock,
  },
};
</script>

<style>
</style>
