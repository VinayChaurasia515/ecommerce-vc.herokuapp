<template>
  <div id="home" style="background-color: #f2f2f2">
    <div id="background-div" class="page-holder bg-cover img-responsive">
      <div class="container py-5">
        <header class="text-left text-white py-5">
          <h3 class="mb-4 rounded" id="heading">
            <a href="#" class="bg-white px-2 py-2 rounded">Start Shopping</a>
            <h2 class="lead mb-0 bg-dark mt-5 p-1 rounded">
              Have money, Don't Stop
            </h2>
          </h3>
        </header>
      </div>
      <hr />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h4 class="mt-3">Top Categories</h4>
        </div>
      </div>
      <div class="row">
        <div
          v-for="index in this.categorySize"
          :key="index"
          class="col-lg-3 col-md-4 col-sm-6 col-12 mt-1 justify-content-around d-flex"
        >
          <CategoryBox :category="categories.Categories[index - 1]" />
        </div>
      </div>
    </div>
    <hr />

    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h4 class="pt-3>">Top Products</h4>
        </div>
      </div>
      <div class="row">
        <div
          v-for="index in this.productSize"
          :key="index"
          class="col-lg-3 col-md-4 col-sm-6 col-12 mt-1 justify-content-around d-flex"
        >
          <ProductBox :product="products.products[index - 1]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryBox from "../components/Category/CategoryBox.vue";
import ProductBox from "../components/ProductBox.vue";
export default {
  name: "HomeA",
  props: ["categories", "products", "baseURL"],
  data() {
    return {
      categorySize: 0,
      productSize: 0,
    };
  },

  mounted() {
    this.categorySize = Math.min(4, this.categories.Categories.length);
    this.productSize = Math.min(8, this.products.products.length);
  },
  components: { CategoryBox, ProductBox },
};
</script>

<style scoped>
.page-holder {
  min-height: 100vh;
}
.bg-cover {
  background-size: cover !important ;
}
#background-div {
  background: url("../assets/home1.png");
  height: 300px;
}
</style>
