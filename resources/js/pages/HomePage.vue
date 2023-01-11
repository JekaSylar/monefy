<template>
  <app-page title="Главная">
    <section class="content">
      <div class="container-fluid">
        <h3 class="title__block-name title__date">
          <p>{{ currentDate }} года</p>
        </h3>
        <div class="row">
          <info-home />
        </div>
        <div class="row">
          <table-category />
        </div>
        <div class="row">
          <table-record />
        </div>
      </div>
    </section>
  </app-page>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { formateDate } from "../utils/formateDate";
import AppPage from "../components/ui/AppPage.vue";
import InfoHome from "../components/homes/InfoHome.vue";
import TableCategory from "../components/homes/TableCategory.vue";
import TableRecord from "../components/homes/TableRecord.vue";

export default {
  setup() {
    const store = useStore();
    const currentDate = ref(formateDate(new Date(), "MMMM YYYY"));

    onMounted(async () => {
      await store.dispatch("home/currentAccount");
    });
    return {
      currentDate,
    };
  },
  components: {
    AppPage,
    InfoHome,
    TableCategory,
    TableRecord,
  },
};
</script>

<style>
.title__date {
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  font-family: cursive;
}
.title__block-name {
  margin-bottom: 30px;
}
</style>
