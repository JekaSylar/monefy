<template>
  <div class="col-lg-4" v-if="user">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="exampleSelectBorder">Имя:</label>
        <small v-if="nError">{{ nError }}</small>
        <input
          :class="['form-control', { 'is-invalid': nError }]"
          type="text"
          v-model="name"
          @blur="nBlur"
        />
      </div>
      <div class="form-group">
        <label for="exampleSelectBorder">Email:</label>
        <input class="form-control" type="email" :value="user.email" disabled />
      </div>
      <div class="form-group">
        <div class="input-group password__edit" v-if="isEditPassword">
          <label for="exampleSelectBorder">Новый пароль:</label>
          <small v-if="pError">{{ pError }}</small>
          <input
            type="text"
            id="password"
            class="form-control"
            name="password"
            :class="['form-control', { 'is-invalid': pError }]"
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
      </div>
      <app-button
        title="Изменить"
        type="btn-success"
        :disabled="isSubmitting"
      />
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useEditOneUser } from "../../use/users/edit-one-user";
import { generatorPassword } from "../../utils/generatorpassword";
import AppButton from "../../components/ui/AppButton.vue";

export default {
  props: {
    user: {
      require: true,
    },
  },
  setup(props) {
    const isEditPassword = ref(false);
    const newPassword = ref(null);

    const {
      isSubmitting,
      name,
      nError,
      nBlur,
      password,
      pError,
      pBlur,
      onSubmit,
    } = useEditOneUser();

    name.value = props.user.name;

    const editPassword = () => {
      isEditPassword.value = true;
      newPassword.value = generatorPassword(14);
      password.value = newPassword.value;
    };

    return {
      isEditPassword,
      editPassword,
      isSubmitting,
      name,
      nError,
      nBlur,
      password,
      pError,
      pBlur,
      onSubmit,
    };
  },
  components: {
    AppButton,
  },
};
</script>

<style>
</style>
