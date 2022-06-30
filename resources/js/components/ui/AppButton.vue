<template>
  <button type="submit" :class="['btn btn-block', type]">{{ title }}</button>
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
        ].includes(value);
      },
    },
  },
};
</script>

<style>
</style>
