<template>
  <div class="col-lg-4">
    <div class="card card-primary">
      <div class="card-header">
        <h3 class="card-title">Сортировка за период</h3>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="form-group">
            <label>Период:</label>
            <Datepicker
              v-model="date"
              :enable-time-picker="false"
              :max-date="new Date()"
              locale="ru"
              select-text="Выбрать"
              cancel-text="Отмена"
              :format="format"
              @update:modelValue="handleDate"
              placeholder="Выбирете период"
              range
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { formateDate } from "../../../utils/formateDate";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
export default {
  setup() {
    const store = useStore();
    const date = ref(null);

    const format = (date) => {
      const dayStar = formateDate(date[0], "DD");
      const monthStart = formateDate(date[0], "MM");
      const yearStart = formateDate(date[0], "YYYY");

      const dayEnd = formateDate(date[1], "DD");
      const monthEnd = formateDate(date[1], "MM");
      const yearEnd = formateDate(date[1], "YYYY");

      return `${dayStar}.${monthStart}.${yearStart}  - ${dayEnd}.${monthEnd}.${yearEnd}`;
    };

    const handleDate = async (modelData) => {
      date.value = modelData;

      const dateStart = formateDate(date.value[0], "YYYY-MM-DD");
      const dateEnd = formateDate(date.value[1], "YYYY-MM-DD");

      await store.dispatch("check/checksPeriod", { dateStart, dateEnd });
    };

    return { date, handleDate, format };
  },
  components: {
    Datepicker,
  },
};
</script>

<style>
</style>
