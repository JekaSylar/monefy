<template>
  <div class="col-lg-3 col-6">
    <div class="small-box" :class="colorBlock">
      <div class="inner">
        <h3 class="сheck__title">{{ title }}</h3>
        <div class="check__block">
          <div class="check__summa">
            <div class="check__summa-result">
              {{ symbol }} {{ formateNumber(summa) }} ₴
            </div>
          </div>
        </div>
      </div>
      <div class="icon">
        <i class="fas fa-solid" :class="icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { formateNumber } from "../../../utils/formateNumber";

export default {
  props: {
    title: {
      require: true,
      type: String,
    },
    summa: {
      require: true,
      type: Number,
    },
    colorBlock: {
      type: String,
      default: "bg-success",
      validator(value) {
        return ["bg-warning", "bg-success", "bg-danger", "bg-info"].includes(
          value
        );
      },
    },
    symbol: {
      type: String,
    },
    icon: {
      type: String,
      default: "fa-money-bill-wave",
      validator(value) {
        return [
          "fa-money-bill-wave",
          "fa-chart-line",
          "fa-cart-arrow-down",
        ].includes(value);
      },
    },
  },

  setup() {
    return {
      formateNumber,
    };
  },
};
</script>

<style>
</style>
