<template>
  <app-page title="История">
    <table-record :records="records" />
  </app-page>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import AppPage from "../components/ui/AppPage.vue";
import TableRecord from "../components/records/TableRecord.vue";

export default {
  setup() {
    const store = useStore();

    const records = computed(() => store.getters["record/getRecords"]);

    onMounted(async () => {
      await store.dispatch("record/loaderRecords", 1);
    });

    return {
      records,
    };
  },

  components: {
    AppPage,
    TableRecord,
  },
};
</script>

<style>
.table__category a {
  color: #28a745;
  font-size: 1.5rem;
  margin-right: 10px;
}
</style>
