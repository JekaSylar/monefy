<template>
  <app-page title="Категория доходов">
    <div class="col-lg-5">
      <h4 class="title__block-name">Создать Доходов</h4>
      <form>
        <input class="form-control" type="text" placeholder="Названия" />
        <button type="button" class="btn btn__created btn-primary">
          Создать
        </button>
      </form>
    </div>
    <div class="col-lg-7">
      <h4 class="title__block-name">Категории</h4>
      <div class="card-body p-0">
        <table class="table table-sm table__category">
          <thead>
            <tr>
              <th style="width: 10px">№</th>
              <th>Названия</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Зарплата</td>
              <td>
                <a href="#"><i class="fas fa-edit"></i></a>
                <a href="#"><i class="fas fa-trash"></i></a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Зарплата</td>
              <td>
                <a href="#"><i class="fas fa-edit"></i></a>
                <a href="#"><i class="fas fa-trash"></i></a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Зарплата</td>
              <td>
                <a href="#"><i class="fas fa-edit"></i></a>
                <a href="#"><i class="fas fa-trash"></i></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
