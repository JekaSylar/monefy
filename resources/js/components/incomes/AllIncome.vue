<template>
  <div class="col-lg-7" v-if="incomeСategories.data?.length">
    <h4 class="title__block-name">Категории</h4>
    <div class="card-body p-0">
      <table
        class="table table-sm table__category table-striped table-bordered"
      >
        <thead class="table-dark">
          <tr>
            <th style="width: 10px">№</th>
            <th>Названия</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(category, idx) in incomeСategories.data"
            :key="category.id"
          >
            <td>{{ idx + 1 }}</td>
            <td class="category__name">
              <router-link
                :to="{ name: 'category_incomes', params: { id: category.id } }"
              >
                {{ category.name }}
              </router-link>
            </td>
            <td>
              <router-link
                :to="{ name: 'category_incomes', params: { id: category.id } }"
                ><i class="fa-solid fa-eye"></i
              ></router-link>
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
      <edit-income
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
import EditIncome from "../incomes/EditIncome.vue";
export default {
  setup() {
    const store = useStore();

    const isModalRemove = ref(false);
    const categoryId = ref(null);
    const categoryIndex = ref(null);
    const categoryInfo = ref(null);
    const isModalEdit = ref(false);

    const incomeСategories = computed(
      () => store.getters["incomeСategory/getIncomeCategory"]
    );

    const infoCategoryRemove = (id, index) => {
      isModalRemove.value = true;
      categoryId.value = id;
      categoryIndex.value = index;
    };

    const removeCategory = async () => {
      await store.dispatch("incomeСategory/removeCategory", {
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
      incomeСategories,
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
    EditIncome,
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

.category__name a {
  font-size: 16px;
  color: #000;
}
.category__name a:hover {
  text-decoration: underline;
}

.fa-eye {
  color: #007bff !important;
}
</style>
