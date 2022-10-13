<template>
  <div class="container" style="background-color: #f2f2f2">
    <h5>Our Products</h5>

    <div class="dropdown-divider"></div>
    <div class="row" v-if="products.length > 0">
      <div
        v-for="product of products"
        :key="product._id"
        class="col-md-6 col-xl-3 col-12 pt-3 d-flex"
      >
        <ProductBox :product="product"></ProductBox>
      </div>
    </div>
    <div v-else>
      <p class="mt-5 text-danger">No Product found</p>
    </div>
  </div>
</template>

<script>
import ProductBox from "@/components/ProductBox.vue";
import axios from "axios";
export default {
  name: "ProductAll",
  data() {
    return {
      products: [],
    };
  },

  props: ["productss", "baseURL"],
  components: { ProductBox },
  mounted() {
    axios
      .get(`${this.baseURL}/products?keyword=${this.$route.query.keyword}`)
      .then((res) => {
        console.log(res.data.products);
        this.products = res.data.products;
      });
  },
};
</script>

<style scoped></style>
