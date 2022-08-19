<template>
  <app-modal title="Добавить пользователя" @close="$emit('close')">
    <div class="modal__form">
      <form @submit.prevent="onSubmit">
        <label>Логин:</label>
        <small v-if="lError">{{ lError }}</small>
        <div class="input-group">
          <input
            type="text"
            id="login"
            :class="['form-control', { 'is-invalid': lError }]"
            name="login"
            placeholder="Логин"
            v-model="login"
            @blur="lBlur"
          />
        </div>
        <label>Имя:</label>
        <small v-if="nError">{{ nError }}</small>
        <div class="input-group">
          <input
            type="text"
            id="name"
            :class="['form-control', { 'is-invalid': nError }]"
            name="name"
            placeholder="Имя"
            v-model="name"
            @blur="nBlur"
          />
        </div>
        <label>Пароль: </label>
        <small v-if="pError">{{ pError }}</small>
        <div class="input-group">
          <input
            type="text"
            id="password"
            :class="['form-control', { 'is-invalid': pError }]"
            name="password"
            placeholder="Пароль"
            v-model="password"
            @blur="pBlur"
          />
        </div>
        <label>Роль:</label>
        <div class="form-group">
          <select class="custom-select" id="is_admin">
            <option value="0">Пользватель</option>
            <option value="1">Администратор</option>
          </select>
        </div>
        <app-button
          title="Создать"
          type="btn-success"
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
import { useAddUser } from "../../use/users/add-user.js";
export default {
  emits: ["created", "close"],
  setup(_, { emit }) {
    const store = useStore();

    const onSubmit = async (value) => {
      await store.dispatch("users/createUser", value);
      emit("created");
    };
    return {
      ...useAddUser(onSubmit),
    };
  },
  components: { AppButton, AppModal },
};
</script>

<style>
.modal__form .input-group {
  margin-bottom: 20px;
}
.modal__form small {
  color: brown;
}
</style>
