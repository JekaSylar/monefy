<template>
  <div class="card card-outline card-primary">
    <div class="card-header text-center">
      <div class="login__title h1">Monefy</div>
    </div>
    <div class="card-body login__card">
      <form @submit.prevent="onSubmit">
        <div class="input-group">
          <input
            type="text"
            id="login"
            name="login"
            :class="['form-control', { 'is-invalid': lError }]"
            placeholder="Логин"
            @blur="lBlur"
            v-model="login"
          />
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-user"></span>
            </div>
          </div>
          <small v-if="lError">{{ lError }}</small>
        </div>

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
          <small v-if="pError">{{ pError }}</small>
        </div>

        <div class="row">
          <div class="col-6">
            <app-button
              @click.prevent="isModal = true"
              title="Регистрация"
              className="btn-block"
              type="btn-success"
            />
          </div>
          <!-- /.col -->
          <div class="col-6">
            <app-button
              :disabled="isSubmitting"
              className="btn-block"
              title="Войти"
              type="btn-primary"
            />
          </div>
          <!-- /.col -->
        </div>
      </form>
    </div>
    <!-- /.card-body -->
  </div>
  <app-modal v-if="isModal" title="Регистрация" @close="isModal = false">
    <p>
      Напишите нам на почту мы вам создадим аккаунт для работы в системе.
      Спасибо вам за то что выбрали наш продукт
    </p>
  </app-modal>
</template>

<script>
import { ref } from "vue";
import { useLoginForm } from "../use/login-form";
import AppModal from "../components/ui/AppModal.vue";
import AppButton from "../components/ui/AppButton.vue";

export default {
  setup() {
    const isModal = ref(false);

    document.title = "Войти | Monefy";

    return { ...useLoginForm(), isModal };
  },
  components: {
    AppModal,
    AppButton,
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
</style>
