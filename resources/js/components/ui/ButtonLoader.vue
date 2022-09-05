<template>
  <button :class="['btn btn-loader', type, className]" type="button" disabled>
    {{ text }}
    <span
      class="spinner-border spinner-border-sm"
      role="status"
      aria-hidden="true"
    ></span>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "btn-primary",
      validator(value) {
        return [
          "btn-primary",
          "btn-success",
          "btn-danger",
          "btn-warning",
          "btn-info",
        ].includes(value);
      },
    },
    className: {
      type: String,
    },
  },
};
</script>

<style>
.spinner-border {
  margin-top: 0;
}
</style>
