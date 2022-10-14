<template>
  <div style="background-color: #f2f2f2">
    <Navbar :cartItemCount="cartItemCount" :baseURL="baseURL" />
    <router-view
      v-if="categories && products"
      style="min-height: 60vh"
      :baseURL="baseURL"
      :categories="categories"
      :products="products"
    ></router-view>
    <!-- footer -->
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import axios from "axios";
import Footer from "./components/Footer.vue";

export default {
  data() {
    return {
      //baseURL: "http://localhost:3000",
      //baseURL:"https://ecommerce-backend-project-fynd.herokuapp.com",
      baseURL: "https://ecommerce-backend-project-vc.herokuapp.com",
      categories: null,
      products: null,
      cartItemCount: 0,
    };
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {
    async fetchData() {
      //call api get category of product
      await axios
        .get(`${this.baseURL}/category`)
        .then((res) => {
          console.log("Categories :: ", res.data);
          this.categories = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
      //call api get category of product
      await axios
        .get(`${this.baseURL}/products`)
        .then((res) => {
          console.log("Products :: ", res.data);
          this.products = res.data;
        })
        .catch((err) => {
          console.log(err);
        });

      if (this.token) {
        await axios({
          url: `${this.baseURL}/cart`,
          method: "get",
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
            Accept: "application/json",
            token: localStorage.getItem("token"),
          },
        })
          .then((res) => {
            console.log("Carts :: ", res.data.Carts.cartItems.length);
            this.cartItemCount = res.data.Carts.cartItems.length;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.fetchData();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
