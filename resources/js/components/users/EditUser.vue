<template>
  <app-modal title="Редактировать пользователя" @close="$emit('close')">
    <div class="modal__form">
      <form @submit.prevent="onSubmit">
        <div class="input-group">
          <label>Имя:</label>
          <small v-if="nError">{{ nError }}</small>
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

        <div class="input-group">
          <label>Счет:</label>
          <small v-if="bError">{{ bError }}</small>
          <input
            type="text"
            id="bill"
            :class="['form-control', { 'is-invalid': bError }]"
            name="bill"
            placeholder="Счет"
            v-model="bill"
            @blur="bBlur"
          />
        </div>

        <div class="form-group">
          <label>Роль:</label>
          <select class="custom-select" v-model="is_admin" id="is_admin">
            <option value="0">Пользователь</option>
            <option value="1">Администратор</option>
          </select>
        </div>

        <div class="input-group password__edit" v-if="isEditPassword">
          <label>Пароль:</label>
          <small v-if="pError">{{ pError }}</small>
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
        <app-button
          v-else
          title="Изменить пароль"
          type="btn-warning"
          className="edit__password"
          @click.prevent="editPassword"
        />

        <app-button
          title="Изменить"
          type="btn-success"
          :disabled="isSubmitting"
        />
      </form>
    </div>
  </app-modal>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useEditUser } from "../../use/users/edit-user";
import { generatorPassword } from "../../utils/generatorpassword.js";
import AppModal from "../ui/AppModal.vue";
import AppButton from "../ui/AppButton.vue";
export default {
  props: {
    user: {
      required: true,
    },
  },
  emits: ["close"],
  setup(props, { emit }) {
    const store = useStore();
    const isEditPassword = ref(false);
    const newPassword = ref(null);
    const is_admin = ref(null);

    const updateUser = async (value) => {
      const user = {
        id: props.user.id,
        login: props.user.login,
        name: value.name,
        bill: value.bill,
        is_admin: is_admin.value,
      };

      if (value.password != null && typeof value.password !== "undefined") {
        user.password = value.password;
      }
      await store.dispatch("users/updateUser", user);
      emit("close");
    };

    const {
      isSubmitting,
      name,
      nError,
      nBlur,
      password,
      pError,
      pBlur,
      bill,
      bError,
      bBlur,
      onSubmit,
    } = useEditUser(updateUser);

    const editPassword = () => {
      isEditPassword.value = true;
      newPassword.value = generatorPassword(14);
      password.value = newPassword.value;
    };

    name.value = props.user.name;
    bill.value = props.user.bill;
    is_admin.value = props.user.is_admin;

    return {
      isSubmitting,
      name,
      nError,
      nBlur,
      password,
      pError,
      pBlur,
      bill,
      bError,
      bBlur,
      onSubmit,
      updateUser,
      isEditPassword,
      editPassword,
      is_admin,
    };
  },

  components: {
    AppModal,
    AppButton,
  },
};
</script>

<style scoped>
.edit__password {
  width: 100%;
  margin-bottom: 20px;
}
label {
  width: 100%;
}
small {
  width: 100%;
}
</style>
