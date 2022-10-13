<template>
  <div class="container mt-4">
    <h3>Category Type - {{ category.categoryName }}</h3>
    <div class="dropdown-divider"></div>
    <div class="row" v-if="productList.length > 0">
        <div
          v-for="product of productList"
          :key="product._id"
          class="col-12 col-xl-3 col-md-6 col-lg-4 pt-3"
        >
          <div class="card">
            <img
              class="card-img-top"
              :src="product.images.url"
              alt="Card image cap"
              height="300"
            />
            <div class="card-body">
              <router-link
                :to="{ name: 'ShowDetails', params: { id: product._id } }"
              >
                <h5 class="card-title">{{ product.name.slice(0, 30) }} ...</h5>
              </router-link>
              <p class="card-text">
                <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>

                {{ product.price }}
              </p>
              <p class="card-text">
                {{ product.ratings }}
              </p>
              <p class="card-text">
                {{ product.Stock }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h6 class="mt-5 text-danger">Product not found</h6>
      </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: null,
      category: {},
      productList: [],
    };
  },
  props: ["baseURL", "categories", "products"],
  mounted() {
    this.id = this.$route.params.id;
    this.category = this.categories.Categories.find(
      (category) => category._id === this.id
    );
    this.listProducts();
  },
  methods: {
    listProducts() {
      axios.get(`${this.baseURL}/category/products/${this.id}`).then((res) => {
        console.log(res.data.Products);
        this.productList = res.data.Products;
      });
    },
  },
};
</script>

<style scoped></style>
