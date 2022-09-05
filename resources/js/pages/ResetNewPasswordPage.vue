<template>
  <app-auth title="Новый пароль">
    <form @submit.prevent="onSubmit">
      <label>Задайте новый пароль</label>
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
          <app-button
            title="Изменить"
            className="btn-new-password"
            type="btn-warning"
            :disabled="isSubmitting"
          />
        </div>
        <!-- /.col -->
      </div>
    </form>
  </app-auth>
  <app-modal title="Востановления пароля" v-if="isModal" @close="close">
    <div class="newpassword__modal">
      <p>Ваш пароль был сброшен!</p>
      <div class="newpassword__modal-btn">
        <app-button
          title="Войти"
          type="btn-success"
          className="newPasswordGood"
          @click.prevent="close"
        />
      </div>
    </div>
  </app-modal>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { useResetNewPassword } from "../use/auth/reset-new-password";
import AppAuth from "../components/ui/AppAuth.vue";
import AppButton from "../components/ui/AppButton.vue";
import AppModal from "../components/ui/AppModal.vue";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const isModal = ref(false);

    const onSubmit = async (value) => {
      const newPassword = {
        token: route.params.token,
        email: route.query.email,
        password: value.user.password,
      };
      const data = await store.dispatch("auth/resetNewPassword", newPassword);

      if (data) {
        isModal.value = true;
      }
    };

    const close = () => {
      isModal.value = false;
      router.push({ name: "login" });
    };

    return {
      ...useResetNewPassword(onSubmit),
      isModal,
      close,
    };
  },
  components: {
    AppAuth,
    AppButton,
    AppModal,
  },
};
</script>

<style scoped>
label {
  font-size: 14px;
  font-weight: 400;
  width: 100%;
}
.newpassword__modal {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.newpassword__modal p {
  text-align: center;
  font-size: 18px;
  font-weight: 600;
}
.newpassword__modal-btn {
  display: flex;
  justify-content: center;
}
</style>
