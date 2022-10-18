<template>
  <span class="badge bg-success" v-if="type === 'income'"> Доходы</span>
  <span class="badge bg-danger" v-else> Расходы</span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      validator(value) {
        return ["income", "expense"].includes(value);
      },
    },
  },
};
</script>

<style>
</style>
