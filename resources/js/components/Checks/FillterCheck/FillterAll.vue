<template>
  <div class="col-lg-2">
    <div class="card card-primary">
      <div class="card-header">
        <h3 class="card-title">Общие</h3>
      </div>
      <div class="card-body">
        <div class="block__all">
          <app-button title="Сброс" type="btn-danger" @click.prevent="reset" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import AppButton from "../../ui/AppButton.vue";

export default {
  emits: ["resetAll"],
  setup() {
    const store = useStore();

    const reset = async () => {
      await store.dispatch("check/checks");
    };

    return { reset };
  },
  components: {
    AppButton,
  },
};
</script>

<style>
</style>
