<template>
  <div class="card-body p-0">
    <div class="row justify-content-center">
      <div class="col-lg-12">
        <table
          class="table table__category table-striped"
          v-if="records.length != 0"
        >
          <thead class="table-dark">
            <tr>
              <th style="width: 10px">№</th>
              <th>Описание</th>
              <th>Сумма</th>
              <th>Дата</th>
              <th style="width: 40px">Действие</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(record, idx) in records" :key="record.id">
              <td>{{ idx + 1 }}</td>
              <td>{{ record.description }}</td>

              <td>{{ record.summa }} ₴</td>
              <td>{{ formateDate(record.date) }}</td>
              <td>
                <router-link :to="{ name: 'record', params: { id: record.id } }"
                  ><i class="fa-solid fa-file-pen"></i
                ></router-link>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="recods__noresult" v-if="records.length === 0">
          <p>Категория пустая</p>
          <router-link to="/incomes">Вернуться в категорию доходов</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { formateDate } from "../../utils/formateDate";

export default {
  props: {
    records: {
      required: true,
    },
  },
  setup() {
    const store = useStore();

    return {
      formateDate,
    };
  },
  components: {},
};
</script>

<style scoped>
.table__category a {
  color: #28a745;
  font-size: 1.5rem;
  margin-right: 10px;
}
</style>
