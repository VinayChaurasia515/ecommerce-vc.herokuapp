<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!-- Navbar content -->
    <!--    Logo-->
    <router-link class="navbar-brand" :to="{ name: 'Home' }">
      <img id="logo" src="../assets/icon.png" />
    </router-link>
    <!--    Burger Button-->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!--      Search Bar-->
      <form class="form-inline mt-2 mt-md-0 ml-3">
        <div class="input-group">
          <input
            class="form-control navbar-form-searchbox"
            type="text"
            size="80"
            placeholder="Search..."
            aria-label="Search"
            v-model="keyword"
          />
          <button
            class="btn btn-outline-primary my-lg-0 navbar-form-searchbutton"
            @click="searchProducts"
            type="button"
          >
            Search
          </button>
        </div>
      </form>

      <!-- dropdown for account -->
      <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown" @click="checkingLoginOrNot">
          <a
            class="nav-link dropdown-toggle text-light"
            href="#"
            id="navbarAccount"
            data-toggle="dropdown"
          >
            Accounts
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarAccount">
            <router-link
              class="dropdown-item"
              v-if="!token"
              :to="{ name: 'Signup' }"
              >Sign up</router-link
            >
            <router-link
              class="dropdown-item"
              v-if="!token"
              :to="{ name: 'Signin' }"
              >Sign in</router-link
            >
            <a class="dropdown-item">
              <router-link
                :to="{ name: 'AdminDashboard' }"
                v-if="token && role == 'admin'"
                >Dashboard</router-link
              >
            </a>
            <a class="dropdown-item">
              <router-link
                :to="{ name: 'UserDashboard' }"
                v-if="token && role == 'user'"
                >Dashboard</router-link
              >
            </a>

            <a class="dropdown-item" v-if="token" href="#" @click="signOut"
              >Signout
            </a>
          </div>
        </li>
        <li class="nav-item mt-2 mx-3" style="color: blue">{{ name }}</li>

        <li class="nav-item mx-2" v-if="token">
          <div id="cart" style="position: relative">
            <!-- <span class="nav-cart-count">{{ cartItemCount }}</span> -->
            <router-link class="text-light" :to="{ name: 'Cart' }">
              <span class="nav-cart-count">{{ cartItemCount }}</span>
              <i class="fa fa-shopping-cart" style="font-size: 30px"></i>
            </router-link>
          </div>
        </li>
        <li class="nav-item m-2" v-if="token" style="color: white">
          <router-link class="text-light" :to="{ name: 'MyOrder' }">
            Order
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import axios from "axios";
export default {
  name: "NavbarA",
  data() {
    return {
      token: null,
      name: null,
      role: null,
      email: null,
      url: null,
      id: null,
      keyword: null,
    };
  },
  props: ["user", "baseURL", "cartItemCount"],
  methods: {
    signOut() {
      console.log("signout start");
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      localStorage.removeItem("userRole");
      localStorage.removeItem("url");
      localStorage.removeItem("email");
      localStorage.removeItem("_id");

      setTimeout(() => {
        window.location.reload();
      }, 1000);
      this.$router.push({ name: "Home" });
    },
    searchProducts() {
      console.log(`${this.baseURL}/products`);
      if (this.keyword === null) {
        axios
          .get(`${this.baseURL}/products`, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Access-Control-Allow-Origin": "*",
              "Content-type": "application/json",
              Accept: "application/json",
              token: localStorage.getItem("token"),
            },
          })
          .then((res) => {
            console.log("if ", res);

            this.$router.push({
              name: "SearchProduct",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log(`${this.baseURL}/products?keyword=${this.keyword}`);
        axios
          .get(`${this.baseURL}/products?keyword=${this.keyword}`, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Access-Control-Allow-Origin": "*",
              "Content-type": "application/json",
              Accept: "application/json",
              token: localStorage.getItem("token"),
            },
          })
          .then((res) => {
            console.log("else ", res);

            this.$router.push({
              name: "SearchProduct",
              query: { keyword: this.keyword },
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
      //console.log(this.$route.);
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.name = localStorage.getItem("userName");
    this.role = localStorage.getItem("userRole");
  },
};
</script>
<style scoped>
#logo {
  width: 150px;
  margin-left: 20px;
  margin-right: 20px;
}
.nav-link {
  color: rgba(255, 255, 255);
}
.nav-cart-count {
  background-color: rgb(255, 0, 0);
  color: white;
  border-radius: 50%;
  height: 15px;
  width: 15px;
  font-size: 15px;
  align-items: center;

  display: flex;
  justify-content: center;
  position: absolute;
  margin-left: 10px;
}
</style>
