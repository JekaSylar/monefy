<template>
  <button :class="['btn ', type, className]">{{ title }}</button>
</template>

<script>
export default {
  props: {
    title: {
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
</style>
