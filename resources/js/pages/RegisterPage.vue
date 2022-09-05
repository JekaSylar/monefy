<template>
  <app-auth title="Регистрация">
    <h4 class="title__register">Регистрация</h4>
    <form @submit.prevent="onSubmit">
      <small v-if="eError">{{ eError }}</small>
      <div class="input-group">
        <input
          type="email"
          id="email"
          name="email"
          :class="['form-control', { 'is-invalid': eError }]"
          placeholder="Email"
          v-model="email"
          @blur="eBlur"
        />
        <div class="input-group-append">
          <div class="input-group-text">
            <span class="fas fa-solid fa-envelope"></span>
          </div>
        </div>
      </div>
      <small v-if="nError">{{ nError }}</small>
      <div class="input-group">
        <input
          type="text"
          id="name"
          name="name"
          :class="['form-control', { 'is-invalid': nError }]"
          placeholder="Имя"
          v-model="name"
          @blur="nBlur"
        />
        <div class="input-group-append">
          <div class="input-group-text">
            <span class="fas fa-passport"></span>
          </div>
        </div>
      </div>
      <small v-if="pError">{{ pError }}</small>
      <div class="input-group">
        <input
          type="password"
          id="password"
          name="password"
          :class="['form-control', { 'is-invalid': pError }]"
          placeholder="Пароль"
          v-model="password"
          @blur="pBlur"
        />
        <div class="input-group-append">
          <div class="input-group-text">
            <span class="fas fa-key"></span>
          </div>
        </div>
      </div>
      <small v-if="pcError">{{ pcError }}</small>
      <div class="input-group">
        <input
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          :class="['form-control', { 'is-invalid': pcError }]"
          placeholder="Повторно пароль"
          v-model="password_confirmation"
          @blur="pcBlur"
        />
        <div class="input-group-append">
          <div class="input-group-text">
            <span class="fas fa-key"></span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <div class="btn-login_block">
            <router-link to="login" class="btn-register btn-primary"
              >Войти</router-link
            >
          </div>
        </div>
        <div class="col-6">
          <button-loader
            className="btn-register"
            type="btn-success"
            text="Регистрация"
            v-if="isLoader"
          />
          <app-button
            title="Регистрация"
            className="btn-register"
            type="btn-success"
            :disabled="isSubmitting"
            v-else
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
import { useRouter } from "vue-router";
import { useRegisterUser } from "../use/auth/register-user";
import AppAuth from "../components/ui/AppAuth.vue";
import AppButton from "../components/ui/AppButton.vue";
import AppLoader from "../components/ui/AppLoader.vue";
import ButtonLoader from "../components/ui/ButtonLoader.vue";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const isLoader = ref(false);

    const onSubmit = async (value) => {
      const newUser = {
        login: value.user.login,
        email: value.user.email,
        name: value.user.name,
        password: value.user.password,
      };
      isLoader.value = true;
      const data = await store.dispatch("auth/registerUser", newUser);
      isLoader.value = false;
      if (data) router.push({ name: "home" });
    };

    return { isLoader, ...useRegisterUser(onSubmit) };
  },
  components: {
    AppButton,
    AppAuth,
    ButtonLoader,
  },
};
</script>

<style scoped>
label {
  width: 100%;
}
.input-group {
  margin-bottom: 15px;
}
.register__block {
  margin-top: 10px;
}

.btn-register {
  width: 100%;
}
small {
  color: red;
}
.logo_link {
  color: black;
}
.btn-login_block {
  width: 100%;
  height: auto;
  display: flex;
}
.btn-login_block a {
  padding: 7px;
  text-align: center;
  border-radius: 5px;
}

.title__register {
  text-align: center;
  margin-bottom: 25px;
  font-weight: 500;
  font-family: cursive;
}
</style>
