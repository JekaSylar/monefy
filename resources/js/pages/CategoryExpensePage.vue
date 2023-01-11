<template>
  <app-page :title="category.name" :links="link">
    <record-catgory :records="category.records" />
  </app-page>
</template>

<script>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import AppPage from "../components/ui/AppPage.vue";
import RecordCatgory from "../components/Category/RecordCategory.vue";

export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    const link = ref({
      title: "Категория раходов",
      url: "expenses",
    });
    const category = computed(
      () => store.getters["expensesCategory/getRecordCategory"]
    );

    onMounted(async () => {
      await store.dispatch(
        "expensesCategory/showCategoryExpenses",
        route.params.id
      );
    });

    return {
      link,
      category,
    };
  },
  components: {
    AppPage,
    RecordCatgory,
  },
};
</script>

<style>
</style>
