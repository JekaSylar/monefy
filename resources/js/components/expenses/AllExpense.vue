<template>
  <div class="col-lg-7" v-if="expensesСategories.data?.length">
    <h4 class="title__block-name">Категории</h4>
    <div class="card-body p-0">
      <table class="table table-sm table__category">
        <thead>
          <tr>
            <th style="width: 10px">№</th>
            <th>Названия</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(category, idx) in expensesСategories.data"
            :key="category.id"
          >
            <td>{{ idx + 1 }}</td>
            <td>{{ category.name }}</td>
            <td>
              <a href="#" @click.prevent="infoCategoryEdit(category)"
                ><i class="fas fa-edit"></i
              ></a>
              <a href="#" @click.prevent="infoCategoryRemove(category.id, idx)"
                ><i class="fas fa-trash"></i
              ></a>
            </td>
          </tr>
        </tbody>
      </table>
      <edit-expenses
        v-if="isModalEdit"
        @close="isModalEdit = false"
        :category="categoryInfo"
      />
      <app-delete
        v-if="isModalRemove"
        @close="isModalRemove = false"
        @deleteYes="removeCategory()"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import AppDelete from "../ui/AppDelete.vue";
import EditExpenses from "../expenses/EditExpense.vue";
export default {
  setup() {
    const store = useStore();

    const isModalRemove = ref(false);
    const categoryId = ref(null);
    const categoryIndex = ref(null);
    const categoryInfo = ref(null);
    const isModalEdit = ref(false);

    const expensesСategories = computed(
      () => store.getters["expensesCategory/getExpensesCategory"]
    );

    const infoCategoryRemove = (id, index) => {
      isModalRemove.value = true;
      categoryId.value = id;
      categoryIndex.value = index;
    };

    const removeCategory = async () => {
      await store.dispatch("expensesCategory/removeCategory", {
        id: categoryId.value,
        index: categoryIndex.value,
      });
      isModalRemove.value = false;
    };

    const infoCategoryEdit = (category) => {
      categoryInfo.value = category;
      isModalEdit.value = true;
    };

    return {
      expensesСategories,
      isModalRemove,
      removeCategory,
      infoCategoryRemove,
      infoCategoryEdit,
      isModalEdit,
      categoryInfo,
    };
  },
  components: {
    AppDelete,
    EditExpenses,
  },
};
</script>

<style scoped>
.table__category a {
  color: #28a745;
  font-size: 1.5rem;
  margin-right: 10px;
}
.table__category {
  text-align: center;
}
</style>
