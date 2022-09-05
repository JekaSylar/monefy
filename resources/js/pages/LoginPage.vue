<template>
  <app-auth title="Войти">
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
            <span class="fas fa-lock"></span>
          </div>
        </div>
      </div>
      <div class="reset__password">
        <router-link to="resetpassword">Забыли пароль ?</router-link>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="btn-register">
            <router-link
              to="register"
              class="btn-success btn-block btn-register"
            >
              Регистрация
            </router-link>
          </div>
        </div>
        <!-- /.col -->
        <div class="col-6">
          <button-loader
            className="btn-block"
            type="btn-primary"
            text="Войти"
            v-if="isLoader"
          />
          <app-button
            :disabled="isSubmitting"
            className="btn-block"
            title="Войти"
            type="btn-primary"
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
import AppAuth from "../components/ui/AppAuth.vue";
import { useLoginForm } from "../use/auth/login-form";
import AppButton from "../components/ui/AppButton.vue";
import ButtonLoader from "../components/ui/ButtonLoader.vue";

export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const isLoader = ref(false);

    const onSubmit = async (value) => {
      isLoader.value = true;
      await store.dispatch("auth/login", value);
      isLoader.value = false;
      router.push("/");
    };

    return { ...useLoginForm(onSubmit), isLoader };
  },
  components: {
    AppButton,
    AppAuth,
    ButtonLoader,
  },
};
</script>

<style>
.login__card small {
  color: #dc3545;
  padding: 0px 0;
  width: 100%;
}
.input-group {
  margin-bottom: 15px;
}
.reset__password {
  margin-bottom: 10px;
}
.reset__password a {
  font-size: 14px;
}
.reset__password a:hover {
  text-decoration: underline;
}

.btn-register {
  width: 100%;
  height: auto;
}

.btn-register a {
  padding: 7px;
  text-align: center;
  border-radius: 5px;
}
</style>
