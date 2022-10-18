<template>
  <teleport to="body">
    <div class="monefy__modal">
      <div class="monefy__content">
        <div class="modal-header">
          <h4 class="modal-title text-center">{{ title }}</h4>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click.prevent="$emit('close')"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot />
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  emits: ["close"],
};
</script>

<style>
.monefy__modal {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  background-color: rgba(52, 49, 49, 0.86);
  height: 100%;
}
.monefy__content {
  background: #fff;
  width: 500px;
  display: block;
  margin: 0 auto;
  margin-top: 100px;
  border-radius: 8px;
}
</style>
