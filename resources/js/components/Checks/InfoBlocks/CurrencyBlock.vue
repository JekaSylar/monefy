<template>
  <div class="col-lg-3 col-6">
    <!-- small box -->
    <div class="small-box bg-info" v-if="currencyBank.length > 1">
      <div class="inner">
        <h3 class="сheck__title">Валюта</h3>

        <div class="сheck__info currency__info">
          <div class="currency__val currency__subtitle">Валюта:</div>
          <div class="currency__price currency__subtitle">Курс:</div>
          <div class="currency__chek currency__subtitle">На счету:</div>
        </div>
        <div
          class="сheck__info currency__info"
          v-for="(currency, index) in currencyBank"
          :key="index"
        >
          <div class="currency__val">{{ currency.ccy }}:</div>
          <div class="currency__price">
            {{ formateCurrency(currency.sale) }}
          </div>
          <div class="currency__chek">
            {{ formateCurrency(totalSumma / currency.sale) }}
          </div>
        </div>

        <div class="icon">
          <i class="fas fa-money-bill"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { formateCurrency } from "../../../utils/formateCurrency";

export default {
  props: {
    totalSumma: {
      require: true,
    },
  },
  setup() {
    const store = useStore();

    const currencyBank = computed(() => store.getters["bank/getCurrency"]);

    const currentTotal = computed(
      () => store.getters["currentSumma/getCurrentTotal"]
    );

    onMounted(async () => {
      await store.dispatch("bank/loaderCurrency");
    });

    return {
      currencyBank,
      currentTotal,
      formateCurrency,
    };
  },
};
</script>

<style>
</style>
