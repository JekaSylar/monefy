<template>
  <app-page title="Пользователь Евгений">
    <div class="col-lg-4">
      <form>
        <div class="form-group">
          <label for="exampleSelectBorder">Имя:</label>
          <input class="form-control" type="text" value="Евгений" />
        </div>
        <div class="form-group">
          <label for="exampleSelectBorder">Новый пароль:</label>
          <input class="form-control" type="password" />
        </div>
        <div class="form-group">
          <label for="exampleSelectBorder">Повторно пароль:</label>
          <input class="form-control" type="password" />
        </div>
        <button type="button" class="btn btn__created btn-primary">
          Изменить
        </button>
      </form>
    </div>
  </app-page>
</template>

<script>
import AppPage from "../components/ui/AppPage.vue";
export default {
  components: {
    AppPage,
  },
};
</script>

<style>
</style>
