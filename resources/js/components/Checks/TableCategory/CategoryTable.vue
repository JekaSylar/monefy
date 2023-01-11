<template>
  <div class="col-lg-6">
    <div class="check__table-title">{{ title }}</div>
    <table class="table table__category table-striped table-bordered">
      <thead class="table-dark">
        <tr>
          <th style="width: 10px">№</th>
          <th>Категория</th>
          <th>Сумма</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(category, idx) in categories" :key="category.id">
          <td>{{ idx }}</td>
          <td>
            <router-link
              :to="{ name: 'category_incomes', params: { id: category.id } }"
            >
              {{ category.name }}
            </router-link>
          </td>
          <td class="check__category-summa" :class="color">
            {{ symbol }}
            {{ formateNumber(category.sum) }} ₴
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { formateNumber } from "../../../utils/formateNumber";

export default {
  props: {
    categories: {
      require: true,
    },
    title: {
      require: true,
      type: String,
    },
    color: {
      type: String,
      default: "green",
      validator(value) {
        return ["green", "red"].includes(value);
      },
    },
    symbol: {
      type: String,
    },
  },
  setup(props) {
    return { formateNumber };
  },
};
</script>

<style scoped>
.green {
  color: #28a745 !important;
  font-weight: 900;
}
.red {
  color: #dc3545 !important;
  font-weight: 900;
}

.check__table-title {
  text-align: center;
  font-size: 22px;
  font-family: cursive;
  margin-bottom: 25px;
}

.check__category-table {
  margin-top: 25px;
}

.check__category-table a {
  color: black;
  text-align: center;
}
.check__category-table a:hover {
  text-decoration: underline;
}

.check__category-summa {
  text-align: center;
  display: block;
  font-weight: 600;
}

.check__category-table thead {
  text-align: center;
}

.table__category tr a {
  font-size: 16px;
}
</style>
