<template>
  <div class="container">
    <div v-if="token && role == 'admin'">
      <h4 class="mt-4">Admin Dashboard</h4>
      <div class="dropdown-divider"></div>
      <div class="row">
        <div class="col-12 col-md-4 col-lg-4 text-center">
          <AdminSidebar />
        </div>
        <div class="col-12 col-md-8 col-lg-8 text-center pt-3 bg-light">
          <router-view
            style="min-height: 60vh"
            :baseURL="baseURL"
            :categories="categories"
            :products="products"
          ></router-view>
        </div>
      </div>
    </div>

    <div v-else>
      <p class="text-danger mt-5">page not found</p>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "./AdminSidebar.vue";
export default {
  data() {
    return {
      token: null,
      name: null,
      role: null,
    };
  },
  props: ["baseURL", "products", "categories"],
  mounted() {
    this.token = localStorage.getItem("token");
    this.name = localStorage.getItem("userName");
    this.role = localStorage.getItem("userRole");
  },
  components: { AdminSidebar },
};
</script>

<style scoped></style>
