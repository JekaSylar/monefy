<template>
  <div
    class="row"
    v-if="
      category.expensesCategories.length != 0 ||
      category.incomesCategories.length != 0
    "
  >
    <form @submit.prevent="onSubmit">
      <div class="row">
        <div class="col-lg-2">
          <div class="form-group">
            <label for="exampleSelectBorder">Сумма:</label>

            <input
              type="number"
              min="1"
              id="summa"
              :class="['form-control', { 'is-invalid': sError }]"
              name="summa"
              v-model="summa"
              @blur="sBlur"
            />
            <small v-if="sError">{{ sError }}</small>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="input-group input-date">
            <label>Дата:</label>
            <small v-if="dateError">{{ dateError }}</small>
            <input
              id="date"
              :class="['form-control', { 'is-invalid': dateError }]"
              type="date"
              v-model="date"
              @blur="dateBlur"
            />
          </div>
        </div>
        <div class="col-lg-3">
          <div class="form-group">
            <label for="exampleSelectBorder">Описание:</label>
            <small v-if="dError">{{ dError }}</small>
            <input
              type="text"
              id="description"
              :class="['form-control', { 'is-invalid': dError }]"
              name="description"
              v-model="description"
              @blur="dBlur"
            />
          </div>
        </div>
        <div class="col-lg-2">
          <div class="input-group">
            <label>Вид записи:</label>

            <select
              :class="['form-control', { 'is-invalid': tError }]"
              id="type"
              v-model="type"
              @blur="tBlur"
            >
              <option selected value="income">Доход</option>
              <option value="expense">Расход</option>
            </select>
            <small v-if="tError">{{ tError }}</small>
          </div>
        </div>
        <div class="col-lg-3" v-if="type === 'income'">
          <div class="form-group">
            <label for="exampleSelectBorder">Категория доходов:</label>
            <select
              class="custom-select form-control-border"
              v-model="incomeCategory"
              id="incomeCategory"
            >
              <option
                v-for="income in category.incomesCategories"
                :key="income.id"
                :value="income.id"
              >
                {{ income.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="col-lg-3" v-if="type === 'expense'">
          <div class="form-group">
            <label for="exampleSelectBorder">Категория расходов:</label>
            <select
              class="custom-select form-control-border"
              v-model="expenseCategory"
              id="expenseCategory"
            >
              <option
                v-for="expense in category.expensesCategories"
                :key="expense.id"
                :value="expense.id"
              >
                {{ expense.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="add_btn_record d-flex flex-row-reverse">
        <button-loader
          v-if="isButtonLoader"
          type="btn-success"
          className="btn__created"
          text="Добавить"
        />
        <app-button
          v-else
          title="Добавить"
          type="btn-success"
          className="btn__created"
          :disabled="isSubmitting"
        />
      </div>
    </form>
  </div>
  <div class="row" v-else>
    <div class="categories__none">
      <p>
        Вы не можете добавить запись, так как не создали категории доходов и
        расходов
      </p>
      <p>Пожалуйста создайте категории по ссылкам ниже:</p>
      <div class="categories__none-link">
        <ul>
          <li>
            <router-link to="/incomes">Добавить категорию доходов</router-link>
          </li>
          <li>
            <router-link to="/expenses"
              >Добавить категорию расходов</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useAddRecord } from "../../use/records/add-record";
import AppButton from "../ui/AppButton.vue";
import ButtonLoader from "../ui/ButtonLoader.vue";

export default {
  props: {
    category: {
      require: true,
    },
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const isButtonLoader = ref(false);

    const createRecord = async (value) => {
      isButtonLoader.value = true;
      const record = ref(null);

      if (value.type === "income") {
        record.value = {
          summa: value.summa,
          date: value.date,
          type: "income",
          incomeCategory: value.incomeCategory,
          expenseCategory: null,
          description: value.description,
        };
      }

      if (value.type === "expense") {
        record.value = {
          summa: value.summa,
          date: value.date,
          type: "expense",
          incomeCategory: null,
          expenseCategory: value.expenseCategory,
          description: value.description,
        };
      }

      await store.dispatch("record/createdRecord", record.value);
      isButtonLoader.value = false;
      setTimeout(() => {
        router.push("/records");
      }, 1000);
    };

    return {
      ...useAddRecord(createRecord, props.category),
      isButtonLoader,
    };
  },
  components: {
    AppButton,
    ButtonLoader,
  },
};
</script>

<style>
label {
  width: 100%;
}
.categories__none {
  flex-direction: column;
  justify-content: center;
  display: flex;
}
.categories__none p {
  font-size: 18px;
  font-weight: 600;
  line-height: 0.75;
}
.categories__none-link {
  display: flex;
  flex-direction: column;
}
.categories__none-link a {
  margin: 10px 30px;
  font-size: 18px;
  text-transform: uppercase;
}
</style>
