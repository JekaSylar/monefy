<template>
  <app-page title="Редактирования личных данных">
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
          <input
            class="form-control"
            type="email"
            :value="user.email"
            disabled
          />
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
  </app-page>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import AppPage from "../components/ui/AppPage.vue";
import AppButton from "../components/ui/AppButton.vue";
import { useEditOneUser } from "../use/users/edit-one-user.js";
import { generatorPassword } from "../utils/generatorpassword.js";

export default {
  setup() {
    const store = useStore();
    const user = computed(() => store.getters["currentUser/getCurrentUser"]);
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

    name.value = user.value.name;

    const editPassword = () => {
      isEditPassword.value = true;
      newPassword.value = generatorPassword(14);
      password.value = newPassword.value;
    };

    return {
      user,
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
    AppPage,
    AppButton,
  },
};
</script>

<style scoped>
.password__edit {
  flex-direction: column;
}
.password__edit .form-control {
  width: 100%;
}
.form-group {
  display: flex;
  flex-direction: column;
}
.form-group small {
  color: brown;
}
</style>
