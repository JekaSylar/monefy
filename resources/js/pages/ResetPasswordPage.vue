<template>
  <app-auth title="Востановления пароля">
    <h4 class="title__register">Востановления пароля</h4>
    <form @submit.prevent="onSubmit">
      <label for="">Введите Email для востановления пароля</label>
      <div class="input-group">
        <small v-if="eError">{{ eError }}</small>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          :class="['form-control', { 'is-invalid': eError }]"
          v-model="email"
          @blur="eBlur"
        />
        <div class="input-group-append">
          <div class="input-group-text">
            <span class="fas fa-solid fa-envelope"></span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-5 link__login">
          <router-link to="/login"
            ><i class="fa-solid fa-left-long"></i>Авторизация
          </router-link>
        </div>
        <div class="col-7 btn-reset-block">
          <button-loader
            className="btn-reset-loader"
            type="btn-danger"
            text="Востановления"
            v-if="isLoader"
          />
          <app-button
            v-else
            title="Востановить"
            className="btn-reset"
            type="btn-danger"
            :disabled="isSubmitting"
          />
        </div>

        <!-- /.col -->
      </div>
    </form>
  </app-auth>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useResetPassword } from "../use/auth/reset-password";
import AppAuth from "../components/ui/AppAuth.vue";
import AppButton from "../components/ui/AppButton.vue";
import ButtonLoader from "../components/ui/ButtonLoader.vue";

export default {
  setup() {
    const store = useStore();
    const isLoader = ref(false);

    const resetPassword = async (value) => {
      isLoader.value = true;
      const data = await store.dispatch("auth/resetPassword", value);
      if (data) {
        email.value = "";
        resetForm();
      }
      isLoader.value = false;
    };

    const { isSubmitting, email, eError, eBlur, onSubmit, resetForm } =
      useResetPassword(resetPassword);

    return {
      isSubmitting,
      email,
      eError,
      eBlur,
      onSubmit,
      isLoader,
    };
  },
  components: {
    AppButton,
    AppAuth,
    ButtonLoader,
  },
};
</script>

<style scoped>
.btn-reset {
  margin-top: 15px;
}
label {
  font-size: 14px;
  font-weight: 400;
  width: 100%;
}
small {
  color: red;
}

.link__login {
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 14px;
}
.link__login .fa-left-long {
  margin-right: 5px;
}
.btn-reset-block {
  display: flex;
  justify-content: end;
}
</style>
