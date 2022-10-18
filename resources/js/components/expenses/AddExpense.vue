<template>
  <div class="col-lg-5">
    <h4 class="title__block-name">Добавить категории</h4>
    <form @submit.prevent="onSubmit">
      <label>Название:</label>
      <small v-if="nError">{{ nError }}</small>
      <input
        type="text"
        placeholder="Названия"
        id="name"
        :class="['form-control', { 'is-invalid': nError }]"
        v-model="name"
        @blur="nBlur"
      />
      <app-button
        title="Добавить"
        type="btn-primary"
        className="btn__created"
        :disabled="isSubmitting"
      />
    </form>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useAddExpense } from "../../use/expenses/add-expenses.js";
import AppButton from "../ui/AppButton.vue";
export default {
  setup() {
    const store = useStore();

    const onSubmit = async (value) => {
      await store.dispatch("expensesCategory/createdCategory", value);
    };
    return {
      ...useAddExpense(onSubmit),
    };
  },
  components: {
    AppButton,
  },
};
</script>

<style>
small {
  color: brown;
}
label {
  width: 100%;
}
</style>
