<template>
  <app-page title="История">
    <div class="card-body p-0">
      <table class="table table__category">
        <thead>
          <tr>
            <th style="width: 10px">№</th>
            <th>Категории</th>
            <th>Тип</th>
            <th>Сумма</th>
            <th>Дата</th>
            <th style="width: 40px">Действие</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Зарплата</td>
            <td><span class="badge bg-success"> Доходы</span></td>
            <td>15 000 грн.</td>
            <td>27.06.2022</td>
            <td>
              <a href="#"><i class="fas fa-edit"></i></a>
              <a href="#"><i class="fas fa-trash"></i></a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Зарплата</td>
            <td><span class="badge bg-success"> Доходы</span></td>
            <td>15 000 грн.</td>
            <td>27.06.2022</td>
            <td>
              <a href="#"><i class="fas fa-edit"></i></a>
              <a href="#"><i class="fas fa-trash"></i></a>
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>Зарплата</td>
            <td><span class="badge bg-success"> Доходы</span></td>
            <td>15 000 грн.</td>
            <td>27.06.2022</td>
            <td>
              <a href="#"><i class="fas fa-edit"></i></a>
              <a href="#"><i class="fas fa-trash"></i></a>
            </td>
          </tr>

          <tr>
            <td>4</td>
            <td>Спорт</td>
            <td><span class="badge bg-danger"> Расходы</span></td>
            <td>1 000 грн.</td>
            <td>27.06.2022</td>
            <td>
              <a href="#"><i class="fas fa-edit"></i></a>
              <a href="#"><i class="fas fa-trash"></i></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-lg-12">
      <div class="card-tools">
        <ul class="pagination pagination-sm float-right">
          <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
        </ul>
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
