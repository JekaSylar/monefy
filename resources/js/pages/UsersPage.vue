<template>
  <app-loader v-if="loader" />
  <app-page title="Пользователи" v-else>
    <div class="col-lg-12">
      <div class="add__user">
        <app-button title="Добавить" @click.prevent="isModal = true" />
        <add-user
          v-if="isModal"
          @created="isModal = false"
          @close="isModal = false"
        />
      </div>

      <div class="card-body p-0">
        <user-table :users="users" />
      </div>
    </div>
  </app-page>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import AppPage from "../components/ui/AppPage.vue";
import AppLoader from "../components/ui/AppLoader.vue";
import UserTable from "../components/users/UserTable.vue";
import AppButton from "../components/ui/AppButton.vue";
import AddUser from "../components/users/AddUser.vue";

export default {
  setup() {
    const store = useStore();
    const loader = ref(false);
    const isModal = ref(false);

    const users = computed(() => store.getters["users/getUsers"]);

    onMounted(() => {
      loader.value = true;
      store.dispatch("users/loaderUsers", 1);
      loader.value = false;
    });

    return {
      loader,
      users,
      isModal,
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (!vm.$store.getters["currentUser/getCurrentUser"].is_admin) {
        vm.$router.replace({ name: "home" });
      }
    });
  },

  components: {
    AppPage,
    UserTable,
    AppLoader,
    AppButton,
    AddUser,
  },
};
</script>

<style>
.add__user {
  width: 100px;
}
</style>
