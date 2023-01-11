<template>
  <div class="row">
    <form @submit.prevent="onSubmit">
      <div class="input-group">
        <label>Описание:</label>
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

      <div class="input-group">
        <label>Сумма:</label>
        <small v-if="sError">{{ sError }}</small>
        <input
          type="text"
          id="summa"
          :class="['form-control', { 'is-invalid': sError }]"
          name="summa"
          v-model="summa"
          @blur="sBlur"
        />
      </div>

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

      <div class="input-group">
        <label>Вид записи:</label>
        <select class="form-select" id="type" v-model="type">
          <option value="income">Доход</option>
          <option value="expense">Расход</option>
        </select>
      </div>

      <div class="input-group" v-if="type === 'income'">
        <label>Категория доходов:</label>
        <select
          class="form-select"
          v-if="incomes.length"
          v-model="incomeCategory"
          id="incomeCategory"
        >
          <option v-for="income in incomes" :key="income.id" :value="income.id">
            {{ income.name }}
          </option>
        </select>
      </div>

      <div class="input-group" v-if="type === 'expense'">
        <label>Категория расходов:</label>
        <select
          class="form-select"
          v-if="expenses.length"
          v-model="expenseCategory"
          id="expenseCategory"
        >
          <option
            v-for="expense in expenses"
            :key="expense.id"
            :value="expense.id"
          >
            {{ expense.name }}
          </option>
        </select>
      </div>

      <div class="row btn-block">
        <div class="col-lg-4">
          <app-button
            title="Назад"
            type="btn-primary"
            className="btn-show-record"
            @click.prevent="returnLink"
          />
        </div>
        <div class="col-lg-4">
          <app-button
            title="Изменить"
            type="btn-success"
            className="btn-show-record"
            :disabled="isSubmitting"
          />
        </div>
        <div class="col-lg-4">
          <app-button
            title="Удалить"
            type="btn-danger"
            className="btn-show-record"
            @click.prevent="isModalRemove = true"
          />
        </div>
      </div>
    </form>
    <app-delete
      v-if="isModalRemove"
      @close="isModalRemove = false"
      @deleteYes="removeRecord()"
    />
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useEditRecord } from "../../use/records/edit-record";
import AppButton from "../../components/ui/AppButton.vue";
import AppDelete from "../../components/ui/AppDelete.vue";

export default {
  props: {
    record: {
      require: true,
    },
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();

    const user = computed(() => store.getters["currentUser/getCurrentUser"]);

    const isModalRemove = ref(false);

    const returnLink = () => {
      router.go(-1);
    };

    const updateRecord = async (value) => {
      const newRecord = {
        ...value,
        id: props.record.id,
      };

      await store.dispatch("record/updateRecord", newRecord);
      returnLink();
    };

    const removeRecord = async () => {
      await store.dispatch("record/removeRecord", {
        id: props.record.id,
        index: 0,
      });
      isModalRemove.value = false;
      returnLink();
    };

    return {
      ...useEditRecord(updateRecord, props.record),
      incomes: user.value.incomesCategories,
      expenses: user.value.expensesCategories,
      returnLink,
      removeRecord,
      isModalRemove,
    };
  },
  components: {
    AppButton,
    AppDelete,
  },
};
</script>

<style scoped>
label {
  width: 100%;
}
.btn-show-record {
  display: block;
  margin: 0 auto;
  width: 35%;
}
.btn-block {
  margin-top: 20px;
  display: flex;
}
</style>
