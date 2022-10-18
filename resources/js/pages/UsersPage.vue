<template>
  <app-page title="Пользователи">
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
import UserTable from "../components/users/UserTable.vue";
import AppButton from "../components/ui/AppButton.vue";
import AddUser from "../components/users/AddUser.vue";

export default {
  setup() {
    const store = useStore();
    const isModal = ref(false);

    const users = computed(() => store.getters["users/getUsers"]);

    onMounted(() => {
      store.dispatch("users/loaderUsers", 1);
    });

    return {
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
