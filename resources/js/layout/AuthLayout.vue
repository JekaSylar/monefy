<template>
  <div class="hold-transition login-page">
    <app-message />
    <div class="login-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppMessage from "../components/ui/AppMessage.vue";

export default {
  components: { AppMessage },
};
</script>

<style>
</style>
