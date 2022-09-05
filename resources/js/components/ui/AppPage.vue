<template>
  <modal-message />
  <div class="content-wrapper">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">{{ title }}</h1>
          </div>
          <!-- /.col -->
          <div class="col-sm-6">
            <app-breadcrumb :title="title" />
          </div>
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </div>
    <section class="content">
      <div class="container-fluid">
        <!-- Small boxes (Stat box) -->
        <!-- Main row -->
        <div class="row">
          <slot />
        </div>
        <!-- /.row (main row) -->
      </div>
      <!-- /.container-fluid -->
    </section>
  </div>
</template>

<script>
import AppBreadcrumb from "../ui/AppBreadcrumb.vue";
import ModalMessage from "../ui/ModalMessage.vue";
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    document.title = `${props.title} | Monefy`;
  },
  components: {
    AppBreadcrumb,
    ModalMessage,
  },
};
</script>

<style scoped>
.app-messager {
  padding-top: 30px;
}
</style>
