<template>
  <app-modal title="Удаление" @close="$emit('close')">
    <p>Вы уверены что хотите удалить ?</p>
    <div class="modal__delete">
      <app-button
        title="Нет"
        type="btn-success"
        @click.prevent="$emit('close')"
      />
      <app-button
        title="Да"
        type="btn-danger"
        @click.prevent="$emit('deleteYes')"
      />
    </div>
  </app-modal>
</template>

<script>
import AppModal from "../ui/AppModal.vue";
import AppButton from "../ui/AppButton.vue";
export default {
  emits: ["close", "deleteYes"],
  components: {
    AppModal,
    AppButton,
  },
};
</script>

<style scoped>
p {
  text-align: center;
  margin-top: 20px;
}

.modal__delete {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.modal__delete button {
  width: 120px;
  margin-right: 20px;
}
</style>
