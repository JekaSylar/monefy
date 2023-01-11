<template>
  <div class="check___fillter">
    <div class="row">
      <div class="col-lg-12">
        <div class="card card-warning">
          <div class="card-header">
            <h3 class="card-title">Сортировка доходов</h3>
            <div class="card-tools">
              <button
                @click.prevent="isFilter = !isFilter"
                type="button"
                class="btn btn-tool"
              >
                <i class="fas" :class="filterIcon"></i>
              </button>
            </div>
          </div>

          <div class="card-body" :class="filterClass">
            <div class="fillter__block">
              <div class="row">
                <fillter-month />
                <fillter-year />
                <fillter-period />
                <fillter-all />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import FillterMonth from "../Checks/FillterCheck/FillterMonth.vue";
import FillterYear from "../Checks/FillterCheck/FillterYear.vue";
import FillterPeriod from "../Checks/FillterCheck/FillterPeriod.vue";
import FillterAll from "../Checks/FillterCheck/FillterAll.vue";

export default {
  setup() {
    const isFilter = ref(false);

    const filterClass = computed(() => {
      return isFilter.value ? "show" : "hide";
    });

    const filterIcon = computed(() => {
      return isFilter.value ? "fa-minus" : "fa-plus";
    });

    return { isFilter, filterClass, filterIcon };
  },
  components: {
    FillterMonth,
    FillterYear,
    FillterPeriod,
    FillterAll,
  },
};
</script>

<style scoped>
.show {
  display: block;
}
.hide {
  display: none;
}

.card {
  margin-bottom: 0px;
}
</style>
