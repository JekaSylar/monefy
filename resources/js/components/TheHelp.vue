<template>
  <div class="help__messager">
    <a href="#" @click.prevent="isModal = true">
      <i class="fas fa-solid fa-circle-question"></i>
    </a>
  </div>
  <app-modal title="Справка" @close="close" v-if="isModal">
    <div class="help__text">
      <p>Приложение для введние домашнего бюжета</p>
      <p>
        Если у вас возникли проблемы или ошибки в работе приложения напишите нам
        на почту: <a href="malito:inbox@bestsoft.info">inbox@bestsoft.info</a>
      </p>

      <div class="bnt__help">
        <app-button title="Ок" type="btn-primary" @click.prevent="close" />
      </div>
    </div>
  </app-modal>
</template>

<script>
import { ref } from "vue";
import AppModal from "../components/ui/AppModal.vue";
import AppButton from "../components/ui/AppButton.vue";
export default {
  setup() {
    const isModal = ref(false);

    const close = () => {
      isModal.value = false;
    };

    return {
      isModal,
      close,
    };
  },
  components: {
    AppModal,
    AppButton,
  },
};
</script>

<style>
.help__messager {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 2.5rem;
  z-index: 9;
  position: fixed;
  right: 30px;
  bottom: 30px;
  color: #fff;
  background-color: #007bff;
  border: 3px solid #fff;
}

.help__messager .fa-circle-question {
  margin-left: 8px;
  margin-bottom: 1px;
  color: #fff;
}
.help__text {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.bnt__help {
  display: flex;
  justify-content: center;
}
</style>
