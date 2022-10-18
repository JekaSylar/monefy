<template>
  <app-modal title="Редактировать запись" @close="$emit('close')">
    <div class="modal__form form__record">
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
            <option
              v-for="income in incomes"
              :key="income.id"
              :value="income.id"
            >
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

        <app-button
          title="Изменить"
          type="btn-success"
          className="btn-edit-category"
          :disabled="isSubmitting"
        />
      </form>
    </div>
  </app-modal>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useEditRecord } from "../../use/records/edit-record";
import AppModal from "../ui/AppModal.vue";
import AppButton from "../ui/AppButton.vue";

export default {
  props: {
    record: {
      required: true,
    },
  },
  setup(props, { emit }) {
    const store = useStore();
    const user = computed(() => store.getters["currentUser/getCurrentUser"]);

    const updateRecord = async (value) => {
      const record = {
        ...value,
        id: props.record.id,
      };
      await store.dispatch("record/updateRecord", record);
      emit("close");
    };

    return {
      ...useEditRecord(updateRecord, props.record),
      incomes: user.value.incomesCategories,
      expenses: user.value.expensesCategories,
    };
  },
  components: {
    AppModal,
    AppButton,
  },
};
</script>

<style>
.form__record {
  display: flex;
  flex-direction: column;
}
label {
  width: 100%;
}
small {
  width: 100%;
}
</style>
