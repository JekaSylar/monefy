<template>
  <app-page title="Редактирования личных данных">
    <form-user :user="user" />
  </app-page>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import AppPage from "../components/ui/AppPage.vue";
import FormUser from "../components/user/FormUser.vue";

export default {
  setup() {
    const store = useStore();
    const user = computed(() => store.getters["currentUser/getCurrentUser"]);

    onMounted(async () => {
      if (Object.keys(user.value.name) === "") {
        await store.dispatch("currentUser/loaderUser");
      }
      //await store.dispatch("currentUser/loaderUser");
    });

    return {
      user,
    };
  },
  components: {
    AppPage,
    FormUser,
  },
};
</script>

<style scoped>
.password__edit {
  flex-direction: column;
}
.password__edit .form-control {
  width: 100%;
}
.form-group {
  display: flex;
  flex-direction: column;
}
.form-group small {
  color: brown;
}
</style>
