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

    <div class="time">{{ date }}</div>
  </nav>
</template>

<script>
import { ref, onMounted, onDeactivated } from "vue";
import { formateDate } from "../utils/formateDate";
export default {
  setup() {
    const date = ref(formateDate(new Date()));
    const interval = ref(null);

    onMounted(async () => {
      interval.value = setInterval(() => {
        date.value = formateDate(new Date());
      }, 1000);
    });

    return {
      date,
    };
  },
};
</script>

<style>
.navbar-expand {
  display: flex !important;
  justify-content: space-between !important;
}
.time {
  font-weight: 600;
}
</style>
