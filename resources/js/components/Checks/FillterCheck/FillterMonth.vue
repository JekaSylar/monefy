<template>
  <div class="col-lg-3">
    <div class="card card-primary">
      <div class="card-header">
        <h3 class="card-title">Сортировка за месяц</h3>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-lg-6">
            <div class="form-group">
              <label for="exampleSelectBorder">Месяц:</label>
              <select
                class="custom-select form-control-border"
                id="exampleSelectBorder"
                v-model="currentMonth"
                @change="sortMonth"
              >
                <option value="01">Январь</option>
                <option value="02">Февраль</option>
                <option value="03">Март</option>
                <option value="04">Апрель</option>
                <option value="05">Май</option>
                <option value="06">Июнь</option>
                <option value="07">Июль</option>
                <option value="08">Август</option>
                <option value="09">Сентябрь</option>
                <option value="10">Октябрь</option>
                <option value="11">Ноябрь</option>
                <option value="12">Декабрь</option>
              </select>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <label>Год</label>
              <input
                type="number"
                id="tentacles"
                class="form-control"
                name="tentacles"
                v-model="currentYear"
                @change="sortYear"
              />
            </div>
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

export default {
  setup() {
    const store = useStore();
    const currentMonth = ref(formateDate(new Date(), "MM"));
    const currentYear = ref(formateDate(new Date(), "YYYY"));

    const fillter = async () => {
      const dataFilter = {
        month: currentMonth.value,
        year: currentYear.value,
      };
      await store.dispatch("check/checksMonth", dataFilter);
    };

    const sortMonth = async () => {
      await fillter();
    };

    const sortYear = async () => {
      await fillter();
    };

    return { currentYear, currentMonth, sortMonth, sortYear };
  },
};
</script>

<style>
.block__fillter_month {
  display: flex;
  justify-content: center;
}
</style>
