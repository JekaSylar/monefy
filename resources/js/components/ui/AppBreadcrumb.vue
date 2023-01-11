<template>
  <ol class="breadcrumb float-sm-right">
    <li class="breadcrumb-item"><router-link to="/">Главная</router-link></li>
    <li class="breadcrumb-item" v-if="links">
      <router-link :to="{ name: links.url }">{{ links.title }}</router-link>
    </li>
    <li class="breadcrumb-item active">{{ title }}</li>
  </ol>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    links: {
      type: Object,
    },
  },
};
</script>

<style>
</style>
