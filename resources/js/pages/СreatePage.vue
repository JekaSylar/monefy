<template>
  <app-page title="Добавить запись">
    <add-record
      v-if="
        userCategory.incomesCategories.length !== 0 &&
        userCategory.expensesCategories.length !== 0
      "
      :category="userCategory"
    />
    <div v-else class="row">
      <div class="alert alert-danger" role="alert">
        Вы не можете добавить запись, так как у вас не нету категорий
      </div>
      <div class="add_block_btn_link_cat">
        <app-button
          type="btn-warning"
          title="Добавить категорию доходов"
          className="add_button_link_cat"
          @click.prevent="link_cat_incomes"
          v-if="userCategory.incomesCategories.length <= 0"
        />
        <app-button
          type="btn-warning"
          title="Добавить категорию расходов"
          className="add_button_link_cat"
          @click.prevent="link_cat_expenses"
          v-if="userCategory.expensesCategories.length <= 0"
        />
      </div>
    </div>
  </app-page>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import AppPage from "../components/ui/AppPage.vue";
import AddRecord from "../components/records/AddRecord.vue";
import AppButton from "../components/ui/AppButton.vue";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    onMounted(async () => {
      await store.dispatch("currentUser/loaderUser");
    });

    const userCategory = computed(
      () => store.getters["currentUser/getCurrentUser"]
    );

    const link_cat_incomes = () => {
      router.push({ name: "incomes" });
    };

    const link_cat_expenses = () => {
      router.push({ name: "expenses" });
    };

    return {
      userCategory,
      link_cat_incomes,
      link_cat_expenses,
    };
  },
  components: {
    AppPage,
    AddRecord,
    AppButton,
  },
};
</script>

<style>
.add_block_btn_link_cat {
  display: flex;
  justify-content: center;
}
.add_button_link_cat {
  margin-left: 30px;
}
</style>
