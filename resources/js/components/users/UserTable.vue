<template>
  <div class="table-responsive-md" v-if="users.data?.length">
    <table class="table table__category">
      <thead class="table-light">
        <tr>
          <th>Email</th>
          <th>Имя</th>
          <th>Роль</th>
          <th style="width: 40px">Действие</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, idx) in users.data" :key="user.id">
          <td>{{ user.email }}</td>
          <td>{{ user.name }}</td>
          <td>{{ roules(user.is_admin) }}</td>
          <td class="action__edit_users">
            <a href="#" @click.prevent="infoUserEdit(user)"
              ><i class="fas fa-edit"></i
            ></a>
            <a href="#" @click.prevent="infoUserRemove(user.id, idx)"
              ><i class="fas fa-trash"></i
            ></a>
          </td>
        </tr>
      </tbody>
    </table>

    <edit-user
      v-if="isModalEdit"
      @close="isModalEdit = false"
      :user="userInfo"
    />

    <app-delete
      v-if="isModalRemove"
      @close="isModalRemove = false"
      @deleteYes="removeUser()"
    />

    <app-pagination :data="users" @pagination-change-page="getResults" />
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import LaravelVuePagination from "laravel-vue-pagination";
import AppDelete from "../ui/AppDelete.vue";
import EditUser from "../users/EditUser.vue";
export default {
  props: ["users"],
  setup() {
    const store = useStore();
    const isModalRemove = ref(false);
    const isModalEdit = ref(false);
    const userId = ref(null);
    const userIndex = ref(null);
    const userInfo = ref(null);

    const getResults = async (page = 1) => {
      await store.dispatch("users/loaderUsers", page);
    };

    const roules = (value) => {
      return value ? "Администратор" : "Пользователь";
    };

    const infoUserRemove = (id, index) => {
      isModalRemove.value = true;
      userId.value = id;
      userIndex.value = index;
    };

    const infoUserEdit = (user) => {
      userInfo.value = user;
      isModalEdit.value = true;
    };

    const removeUser = async () => {
      await store.dispatch("users/removeUser", {
        id: userId.value,
        index: userIndex.value,
      });
      isModalRemove.value = false;
    };

    return {
      getResults,
      roules,
      infoUserRemove,
      removeUser,
      isModalRemove,
      isModalEdit,
      infoUserEdit,
      userInfo,
    };
  },
  components: {
    "app-pagination": LaravelVuePagination,
    AppDelete,
    EditUser,
  },
};
</script>

<style>
.table__category a {
  color: #28a745;
  font-size: 1.5rem;
  margin-right: 10px;
}
.action__edit_users {
  display: flex;
  flex-direction: row;
}
</style>
