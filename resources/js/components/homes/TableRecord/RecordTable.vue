<template>
  <div class="col-lg-6">
    <div class="check__table-title">{{ title }}</div>
    <table
      class="table table__category table-striped table-bordered"
      v-if="records.length"
    >
      <thead class="table-dark">
        <tr>
          <th style="width: 10px">№</th>
          <th>Описание</th>
          <th>Категория</th>
          <th>Сумма</th>
          <th>Дата</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(record, index) in records" :key="record.id">
          <td>{{ index + 1 }}</td>
          <td class="description" v-if="record.description">
            <router-link :to="{ name: 'record', params: { id: record.id } }">
              {{ record.description }}
            </router-link>
          </td>
          <td v-else></td>
          <td v-if="typeCategory === 'income'">
            <router-link
              :to="{
                name: 'category_incomes',
                params: { id: record.incomeCategory.id },
              }"
              >{{ record.incomeCategory.name }}
            </router-link>
          </td>
          <td v-if="typeCategory === 'expense'">
            <router-link
              :to="{
                name: 'category_expenses',
                params: { id: record.expenseCategory.id },
              }"
              >{{ record.expenseCategory.name }}
            </router-link>
          </td>
          <td :class="color" class="summa">
            {{ symbol }} {{ formateNumber(record.summa) }} ₴
          </td>
          <td>{{ formateDate(record.date) }}</td>
        </tr>
      </tbody>
    </table>
    <div v-else>
      <p class="last__record-table">Записей не найдено...</p>
    </div>
  </div>
</template>

<script>
import { formateNumber } from "../../../utils/formateNumber";
import { formateDate } from "../../../utils/formateDate";

export default {
  props: {
    title: {
      require: true,
      type: String,
    },
    records: {
      require: true,
    },
    symbol: {
      type: String,
    },
    color: {
      type: String,
      default: "green",
      validator(value) {
        return ["green", "red"].includes(value);
      },
    },
    typeCategory: {
      type: String,
      default: "income",
      validator(value) {
        return ["income", "expense"].includes(value);
      },
    },
  },
  setup() {
    return { formateNumber, formateDate };
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

.records__length {
  display: block;
  text-align: right;
  color: #007bff;
}
.records__length a:hover {
  text-decoration: underline;
}

table a {
  color: black !important;
  text-align: center;
  display: block;
}

table a:hover {
  text-decoration: underline;
}
.description {
  display: block;
  text-align: left;
}
.summa {
  display: block;
  text-align: center;
}

.last__record-table {
  text-align: center;
  font-weight: 600;
  font-size: 18px;
}
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
