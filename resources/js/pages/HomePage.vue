<template>
  <div class="content-wrapper">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Главная</h1>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </div>

    <section class="content">
      <div class="container-fluid">
        <!-- Small boxes (Stat box) -->
        <h3 class="title__block-name">Июль 2022</h3>
        <div class="row">
          <div class="col-lg-4 col-6">
            <!-- small box -->
            <div class="small-box bg-success">
              <div class="inner">
                <h3 class="сheck__title">Доход</h3>
                <div class="check__block">
                  <div class="сheck__info">
                    <p><span>Работа:</span> 15 000 грн.</p>
                  </div>
                  <div class="сheck__info">
                    <p><span>Фриланс: </span>25 000 грн.</p>
                  </div>
                  <div class="check__total">
                    Всего: <span> + 40 000 грн. </span>
                  </div>
                </div>
              </div>
              <div class="icon">
                <i class="fas fa-chart-line"></i>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-6">
            <!-- small box -->
            <div class="small-box bg-danger">
              <div class="inner">
                <h3 class="сheck__title">Расходы</h3>
                <div class="check__block">
                  <div class="сheck__info">
                    <p><span>Еда:</span> 4 000 грн.</p>
                  </div>
                  <div class="сheck__info">
                    <p><span>Спорт: </span>1 000 грн.</p>
                  </div>
                  <div class="check__total">
                    Всего: <span> - 5 000 грн. </span>
                  </div>
                </div>
              </div>
              <div class="icon">
                <i class="fas fa-cart-arrow-down"></i>
              </div>
            </div>
          </div>
          <!-- ./col -->

          <!-- ./col -->
          <div class="col-lg-4 col-6">
            <!-- small box -->
            <div class="small-box bg-info">
              <div class="inner">
                <h3 class="сheck__title">Валюта</h3>

                <div class="сheck__info currency__info">
                  <div class="currency__val currency__subtitle">Валюта:</div>
                  <div class="currency__price currency__subtitle">Курс:</div>
                  <div class="currency__chek currency__subtitle">На счету:</div>
                </div>
                <div class="сheck__info currency__info">
                  <div class="currency__val">US:</div>
                  <div class="currency__price">41.32</div>
                  <div class="currency__chek">500</div>
                </div>

                <div class="сheck__info currency__info">
                  <div class="currency__val">US:</div>
                  <div class="currency__price">41.32</div>
                  <div class="currency__chek">500</div>
                </div>

                <div class="сheck__info currency__info">
                  <div class="currency__val">US:</div>
                  <div class="currency__price">41.32</div>
                  <div class="currency__chek">500</div>
                </div>
                <div class="icon">
                  <i class="fas fa-money-bill"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ./col -->
      </div>

      <div class="row">
        <div class="col-lg-6">
          <div class="card-header">
            <h3 class="card-title title__block-name">Последние доходы</h3>
          </div>

          <div class="card-body">
            <table class="table table-bordered table__icome">
              <thead>
                <tr>
                  <th style="width: 10px">#</th>
                  <th>Описание</th>
                  <th>Сумма</th>
                  <th>Дата</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Зарплата</td>
                  <td>15 000 грн.</td>
                  <td>15.06.2022</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Зарплата</td>
                  <td>15 000 грн.</td>
                  <td>15.06.2022</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Зарплата</td>
                  <td>15 000 грн.</td>
                  <td>15.06.2022</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card-header">
            <h3 class="card-title title__block-name">Последние расходы</h3>
          </div>

          <div class="card-body">
            <table class="table table-bordered table__icome">
              <thead>
                <tr>
                  <th style="width: 10px">#</th>
                  <th>Описание</th>
                  <th>Сумма</th>
                  <th>Дата</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Зарплата</td>
                  <td>15 000 грн.</td>
                  <td>15.06.2022</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Зарплата</td>
                  <td>15 000 грн.</td>
                  <td>15.06.2022</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Зарплата</td>
                  <td>15 000 грн.</td>
                  <td>15.06.2022</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
