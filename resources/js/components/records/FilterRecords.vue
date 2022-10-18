<template>
  <div class="btn__filter-block">
    <div class="row">
      <div class="col-lg-2">
        <div class="bnt-fillter">
          <app-button
            :title="isFilter ? 'Закрыть' : 'Сортировка'"
            type="btn-warning"
            @click.prevent="isFilter = !isFilter"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="filter__records" v-if="isFilter">
    <h3 class="title__filter">Сортировка</h3>
    <div class="filter__forms">
      <div class="row">
        <div class="col-lg-3">
          <div class="input-group">
            <label>Описание:</label>
            <input
              class="form-control"
              type="text"
              placeholder="Поиск..."
              v-model="search"
            />
          </div>
        </div>
        <div class="col-lg-2">
          <div class="input-group input-date">
            <label>Дата:</label>
            <input id="date" class="form-select" type="date" v-model="date" />
          </div>
        </div>
        <div class="col-lg-2">
          <div class="input-group input-date">
            <label>Cумма:</label>
            <input
              id="summa"
              class="form-select"
              type="summa"
              v-model="summa"
            />
          </div>
        </div>
        <div class="col-lg-2">
          <div class="input-group">
            <label for="">Вид записи:</label>
            <select class="form-select" v-model="type">
              <option value="income">Доход</option>
              <option value="expense">Расход</option>
            </select>
          </div>
        </div>
        <div class="col-lg-3" v-if="type === 'income'">
          <div class="input-group">
            <label>Категория доходов:</label>
            <select
              class="form-select"
              v-if="categories.incomes.length"
              v-model="incomeCategory"
            >
              <option
                :value="incomes.id"
                v-for="incomes in categories.incomes"
                :key="incomes.id"
              >
                {{ incomes.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="col-lg-3" v-if="type === 'expense'">
          <div class="input-group">
            <label>Категория расходов:</label>
            <select
              class="form-select"
              v-if="categories.expenses.length"
              v-model="expenseCategory"
            >
              <option
                :value="expenses.id"
                v-for="expenses in categories.expenses"
                :key="expenses.id"
              >
                {{ expenses.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-2">
          <div class="input-group">
            <button-loader
              className="bnt-sort"
              type="btn-primary"
              text="Сортировать"
              v-if="status"
            />
            <app-button
              title="Сортировать"
              type="btn-primary"
              className="bnt-sort"
              @click.prevent="sortFilter"
              v-else
            />
          </div>
        </div>
        <div class="col-lg-2" v-if="isBtnSort">
          <div class="input-group">
            <button-loader
              className="bnt-sort"
              type="btn-danger"
              text="Сброс"
              v-if="status"
            />
            <app-button
              title="Сброс"
              type="btn-danger"
              className="bnt-sort"
              @click.prevent="resetFilter"
              v-else
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import AppButton from "../ui/AppButton.vue";
import ButtonLoader from "../ui/ButtonLoader.vue";
export default {
  props: {
    categories: {
      required: true,
    },
    status: {
      default: false,
      type: Boolean,
    },
  },
  emits: ["sort", "reset"],
  setup(_, { emit }) {
    const isFilter = ref(false);
    const isBtnSort = ref(false);
    const search = ref(null);
    const summa = ref(null);
    const type = ref(null);
    const incomeCategory = ref(null);
    const expenseCategory = ref(null);
    const date = ref(null);

    const sortFilter = () => {
      isBtnSort.value = true;
      const obj = {
        current: 1,
        filter: {
          ...(search.value !== null && { description: search.value }),
          ...(type.value !== null && { type: type.value }),
          ...(summa.value !== null && { summa: summa.value }),
          ...(date.value !== null && { date: date.value }),
          ...(incomeCategory.value !== null && {
            incomeCategory: incomeCategory.value,
          }),
          ...(expenseCategory.value !== null && {
            expenseCategory: expenseCategory.value,
          }),
        },
      };
      emit("sort", obj);
    };

    const resetFilter = () => {
      search.value = null;
      type.value = null;
      expenseCategory.value = null;
      incomeCategory.value = null;
      date.value = null;
      summa.value = null;
      isBtnSort.value = false;
      emit("reset");
    };

    return {
      isFilter,
      isBtnSort,
      sortFilter,
      resetFilter,
      type,
      search,
      expenseCategory,
      incomeCategory,
      date,
      summa,
    };
  },

  components: {
    AppButton,
    ButtonLoader,
  },
};
</script>

<style scoped>
.input-date .form-select {
  background-image: initial;
}
.bnt-sort {
  width: 100%;
}
.filter__records {
  margin: 10px 0;
}
.btn__filter-block {
  display: flex;
  justify-content: end;
  margin: 10px 0;
}
.bnt-fillter {
  width: 100%;
}
label {
  width: 100%;
  font-size: 14px;
}
.input-group .btn {
  margin-top: 30px;
}
.filter__records {
  padding: 20px 30px;
  border: 2px solid #000;
  border-radius: 10px;
  margin: 20px 0;
}
.title__filter {
  text-align: center;
  margin: 20px 0 40px 0;
  text-transform: uppercase;
}
</style>
