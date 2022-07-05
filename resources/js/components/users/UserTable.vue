<template>
  <div class="table-responsive-md" v-if="users">
    <table class="table table__category">
      <thead class="table-light">
        <tr>
          <th>Логин</th>
          <th>Имя</th>
          <th>Email</th>
          <th style="width: 40px">Действие</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users.data" :key="user.id">
          <td>{{ user.login }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <a href="#"><i class="fas fa-edit"></i></a>
            <a href="#"><i class="fas fa-trash"></i></a>
          </td>
        </tr>
      </tbody>
    </table>
    <app-pagination :data="users" @pagination-change-page="getResults" />
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import LaravelVuePagination from "laravel-vue-pagination";
export default {
  props: ["users"],
  setup() {
    const store = useStore();

    const number = ref(1);

    const getResults = (page = 1) => {
      store.dispatch("user/loaderUsers", page);
    };

    return {
      getResults,
      number,
    };
  },
  components: {
    "app-pagination": LaravelVuePagination,
  },
};
</script>

<style>
</style>
