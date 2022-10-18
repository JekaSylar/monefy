<template>
  <app-modal title="Редактировать пользователя" @close="$emit('close')">
    <div class="modal__form">
      <form @submit.prevent="onSubmit">
        <div class="input-group">
          <label>Названия:</label>
          <small v-if="nError">{{ nError }}</small>
          <input
            type="text"
            id="name"
            :class="['form-control', { 'is-invalid': nError }]"
            name="name"
            v-model="name"
            @blur="nBlur"
          />
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
import { useStore } from "vuex";
import AppModal from "../ui/AppModal.vue";
import AppButton from "../ui/AppButton.vue";
import { useEditExpense } from "../../use/expenses/edit-expenses";

export default {
  props: {
    category: {
      required: true,
    },
  },
  emits: ["close"],
  setup(props, { emit }) {
    const store = useStore();

    const updateCategory = async (value) => {
      const category = {
        id: props.category.id,
        name: value.name,
      };
      await store.dispatch("expensesCategory/updateExpenses", category);
      emit("close");
    };

    const { isSubmitting, name, nError, nBlur, onSubmit } =
      useEditExpense(updateCategory);

    name.value = props.category.name;

    return {
      updateCategory,
      isSubmitting,
      name,
      nError,
      nBlur,
      onSubmit,
    };
  },
  components: {
    AppModal,
    AppButton,
  },
};
</script>

<style scoped>
.btn-edit-category {
  margin-top: 20px;
}
</style>
