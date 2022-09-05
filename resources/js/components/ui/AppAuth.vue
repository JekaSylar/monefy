<template>
  <div class="card card-outline card-primary">
    <div class="card-header text-center">
      <div class="login__title h1">
        <router-link to="/login" class="logo_link">Monefy</router-link>
      </div>
    </div>
    <div class="card-body login__card">
      <slot />
    </div>
    <!-- /.card-body -->
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    document.title = `${props.title} | Monefy`;
  },
};
</script>

<style>
</style>
