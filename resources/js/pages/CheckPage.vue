<template>
  <app-page title="Счет">
    <h3 class="title__block-name title__date"><p>Всего:</p></h3>
    <fillter-check />
    <info-check />
    <table-category />
    <table-record />
  </app-page>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import AppPage from "../components/ui/AppPage.vue";
import FillterCheck from "../components/Checks/FillterCheck.vue";
import InfoCheck from "../components/Checks/InfoCheck.vue";
import TableCategory from "../components/Checks/TableCategory.vue";
import TableRecord from "../components/Checks/TableRecord.vue";

export default {
  setup() {
    const store = useStore();

    onMounted(async () => {
      await store.dispatch("check/checks");
    });

    return {};
  },
  components: {
    AppPage,
    FillterCheck,
    InfoCheck,
    TableCategory,
    TableRecord,
  },
};
</script>

