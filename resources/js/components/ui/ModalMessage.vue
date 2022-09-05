<template>
  <app-modal :title="message.title" @close="close" v-if="message">
    <div class="modal__messager">
      <div class="modal__messager-text">
        <i :class="['icon fas', message.ico, message.type]"></i>
        <p>{{ message.text }}</p>
      </div>

      <div class="btn-modal__block">
        <app-button title="Ок" type="btn-primary" @click.prevent="close" />
      </div>
    </div>
  </app-modal>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import AppModal from "./AppModal.vue";
import AppButton from "./AppButton.vue";

export default {
  emits: ["close"],
  setup(_, { emit }) {
    const store = useStore();
    const message = computed(() => store.state.message);

    const close = () => {
      store.commit("clearMessage");
      emit("close");
    };

    return {
      message,
      close,
    };
  },
  components: {
    AppModal,
    AppButton,
  },
};
</script>

<style scoped>
.modal__messager {
  display: flex;
  flex-direction: column;
}
.modal__messager-text {
  display: flex;
}
.icon {
  margin-right: 10px;
  padding: 10px;
  border-radius: 50%;
}
.modal__messager p {
  font-size: 18px;
  font-weight: 400;
  margin: 10px 0;
}

.btn-modal__block {
  display: flex;
  justify-content: center;
  margin: 15px 0;
}
</style>
