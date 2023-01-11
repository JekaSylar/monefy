<template>
  <app-page title="Запись">
    <show-record :record="record" />
  </app-page>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import AppPage from "../components/ui/AppPage.vue";
import ShowRecord from "../components/records/ShowRecord.vue";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();

    const record = computed(() => store.getters["record/getRecord"]);

    onMounted(async () => {
      await store.dispatch("record/showRecord", route.params.id);

      await store.dispatch("currentUser/loaderUser");
    });

    return { record };
  },
  components: {
    ShowRecord,
    AppPage,
  },
};
</script>

<style>
</style>
