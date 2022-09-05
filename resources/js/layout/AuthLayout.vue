<template>
  <div class="hold-transition login-page">
    <app-message />
    <div class="login-box">
      <router-view></router-view>
    </div>
  </div>
  <the-help />
</template>

<script>
import AppMessage from "../components/ui/AppMessage.vue";
import TheHelp from "../components/TheHelp.vue";

export default {
  components: { AppMessage, TheHelp },
};
</script>

<style>
</style>
