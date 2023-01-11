<template>
  <div class="card-body p-0">
    <filter-records
      :categories="categories"
      @sort="searchFilter"
      @reset="resetFilter"
      :status="isStatus"
    />

    <table
      class="table table__category table-striped table-bordered"
      v-if="records.data?.length"
    >
      <thead class="table-dark">
        <tr>
          <th style="width: 10px">№</th>
          <th>Описание</th>
          <th>Тип</th>
          <th>Категории</th>
          <th>Сумма</th>
          <th>Дата</th>
          <th style="width: 40px">Действие</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(record, idx) in records.data" :key="record.id">
          <td>{{ idx + 1 }}</td>
          <td>{{ record.description }}</td>
          <td><type-record :type="record.type" /></td>
          <td v-if="record.type === 'income'">
            {{ record.incomeСategory.name }}
          </td>
          <td v-else>
            {{ record.expenseCategory.name }}
          </td>
          <td>{{ record.summa }} ₴</td>
          <td>{{ formateDate(record.date) }}</td>
          <td>
            <a href="#" @click.prevent="infoRecordEdit(record)"
              ><i class="fas fa-edit"></i
            ></a>
            <a href="#" @click.prevent="infoRecordRemove(record.id, idx)"
              ><i class="fas fa-trash"></i
            ></a>
          </td>
        </tr>
      </tbody>
    </table>
    <edit-record
      v-if="isModalEdit"
      @close="isModalEdit = false"
      :record="recordInfo"
    />
    <app-delete
      v-if="isModalRemove"
      @close="isModalRemove = false"
      @deleteYes="removeRecord()"
    />
    <div class="recods__noresult" v-if="records.data?.length === 0">
      <p>Данных не найденно</p>
    </div>
    <app-pagination :data="records" @pagination-change-page="getResults" />
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { formateDate } from "../../utils/formateDate";
import TypeRecord from "./TypeRecord.vue";
import LaravelVuePagination from "laravel-vue-pagination";
import FilterRecords from "./FilterRecords.vue";
import AppDelete from "../ui/AppDelete.vue";
import EditRecord from "./EditRecord.vue";

export default {
  props: ["records"],
  setup() {
    const store = useStore();
    const user = computed(() => store.getters["currentUser/getCurrentUser"]);

    const isStatus = ref(false);
    const categories = ref({
      incomes: user.value.incomesCategories,
      expenses: user.value.expensesCategories,
    });

    const isModalRemove = ref(false);
    const recordId = ref(null);
    const recordIndex = ref(null);
    const recordInfo = ref(null);
    const isModalEdit = ref(false);

    onMounted(async () => {
      if (Object.keys(user.value.expensesCategories).length == 0) {
        await store.dispatch("currentUser/currentUser");
      }
    });

    const getResults = async (page = 1) => {
      await store.dispatch("record/loaderRecords", page);
    };

    const searchFilter = async (value) => {
      await store.dispatch("record/filter", value);
    };

    const resetFilter = async (page = 1) => {
      await store.dispatch("record/loaderRecords", page);
    };

    const infoRecordRemove = (id, index) => {
      isModalRemove.value = true;
      recordId.value = id;
      recordIndex.value = index;
    };

    const removeRecord = async () => {
      await store.dispatch("record/removeRecord", {
        id: recordId.value,
        index: recordIndex.value,
      });
      isModalRemove.value = false;
    };

    const infoRecordEdit = (record) => {
      recordInfo.value = record;
      isModalEdit.value = true;
    };

    return {
      getResults,
      formateDate,
      searchFilter,
      resetFilter,
      categories,
      isStatus,
      isModalRemove,
      recordId,
      recordIndex,
      removeRecord,
      infoRecordRemove,
      recordInfo,
      isModalEdit,
      infoRecordEdit,
    };
  },
  components: {
    "app-pagination": LaravelVuePagination,
    TypeRecord,
    FilterRecords,
    AppDelete,
    EditRecord,
  },
};
</script>

<style>
.recods__noresult {
  text-align: center;
  font-size: 24px;
  padding: 20px 0;
}
</style>
