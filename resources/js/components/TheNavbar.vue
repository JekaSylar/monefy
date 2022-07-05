<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a
          class="nav-link"
          data-widget="pushmenu"
          @click.prevent="$emit('showBar')"
          href="#"
          role="button"
          ><i class="fas fa-bars"></i
        ></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>
