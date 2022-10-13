<template>
  <div>
    <h5>View Product</h5>
    <div class="dropdown-divider"></div>
    <div class="row">
      <!-- display all the products in productbox component -->
      <div
        v-for="product of products.products"
        :key="product._id"
        class="col-md-6 col-xl-4 col-12 pt-3 d-flex"
      >
        <ProductBox :baseURL="baseURL" :product="product"></ProductBox>
      </div>
    </div>
  </div>
</template>

<script>
import ProductBox from "../../components/ProductBox.vue";
export default {
  name: "ViewProduct",
  data() {
    return {};
  },
  props: ["baseURL", "categories", "products"],
  components: {
    ProductBox,
  },
};
</script>

<style scoped></style>
