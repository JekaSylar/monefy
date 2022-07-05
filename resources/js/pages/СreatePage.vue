<template>
  <app-page title="Создать">
    <div class="col-lg-6">
      <h4 class="title__block-name">Добавить расход</h4>
      <form>
        <label for="exampleSelectBorder">Сумма:</label>
        <input class="form-control" type="text" />
        <div class="form-group">
          <label for="exampleSelectBorder">Категория:</label>
          <select
            class="custom-select form-control-border"
            id="exampleSelectBorder"
          >
            <option>Зарплата</option>
            <option>Фриланс</option>
          </select>
        </div>
        <div class="form-group">
          <label>Дата:</label>
          <input
            type="text"
            class="form-control datetimepicker-input"
            data-target="#reservationdate"
          />
        </div>
        <button type="button" class="btn btn__created btn-primary">
          Добавить
        </button>
      </form>
    </div>
    <div class="col-lg-6">
      <h4 class="title__block-name">Добавить расход</h4>
      <form>
        <label for="exampleSelectBorder">Сумма:</label>
        <input class="form-control" type="text" />
        <div class="form-group">
          <label for="exampleSelectBorder">Категория:</label>
          <select
            class="custom-select form-control-border"
            id="exampleSelectBorder"
          >
            <option>Еда</option>
            <option>ПК</option>
          </select>
        </div>
        <div class="form-group">
          <label>Дата:</label>
          <input
            type="text"
            class="form-control datetimepicker-input"
            data-target="#reservationdate"
          />
        </div>
        <button type="button" class="btn btn__created btn-primary">
          Добавить
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
