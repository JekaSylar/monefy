<template>
  <div v-if="message" class="app-messager">
    <div :class="['alert alert-dismissible', message.type]">
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-hidden="true"
        @click.prevent="close"
      >
        &times;
      </button>
      <h5><i class="icon fas fa-ban"></i> {{ message.title }}</h5>
      {{ message.text }}
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const message = computed(() => store.state.message);

    const close = () => {
      store.commit("clearMessage");
    };

    return {
      message,
      close,
    };
  },
};
</script>

<style>
.alert {
  width: 500px;
}
.app-messager {
  display: flex;
  justify-content: center;
}
</style>
