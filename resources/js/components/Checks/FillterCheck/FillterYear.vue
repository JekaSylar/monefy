<template>
  <div class="col-lg-3">
    <div class="card card-primary">
      <div class="card-header">
        <h3 class="card-title">Сортировка за год</h3>
      </div>
      <div class="card-body">
        <div class="row">
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
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { formateDate } from "../../../utils/formateDate";

export default {
  setup() {
    const store = useStore();
    const currentYear = ref(formateDate(new Date(), "YYYY"));

    const sortYear = async () => {
      await store.dispatch("check/checksYears", currentYear.value);
    };

    return { currentYear, sortYear };
  },
};
</script>

<style>
</style>
