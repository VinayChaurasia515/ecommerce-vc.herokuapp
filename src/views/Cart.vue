<template>
  <div class="container" style="background-color: #f2f2f2">
    <div class="row" v-if="token">
      <div class="col-12 text-center">
        <h4 class="pt-3">Shopping Cart</h4>
        <div class="dropdown-divider"></div>
      </div>
      <div class="mt-2" v-if="cartItems.cartItems.length > 0">
        <div
          v-for="cartItem in cartItems.cartItems"
          :key="cartItem.Id"
          class="row"
        >
          <div class="col-1"></div>

          <div
            class="col-md-3 embed-responsive embed-responsive-16by9"
            style="background-color: white"
          >
            <img
              :src="cartItem.productUrl"
              alt="img not found"
              class="card-image-top embeded-responsive-item"
              style="width: 130px; height: 100px"
            />
          </div>

          <div class="col-md-7 px-3" style="background-color: white">
            <div class="card-block px-3">
              <h6 class="card-title text-primary">
                <b>
                  {{ cartItem.productName }}
                </b>
              </h6>
              <p class="mb-0 perunit" id="item-price">
                <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>
                {{ cartItem.price }} per unit
              </p>
              <p class="mb-0" style="float: left">
                Quantity ::

                <button
                  class="btn"
                  @click="removeItem(cartItem.productId)"
                  id="add-to-cart-button"
                >
                  <i class="fa-solid fa-arrow-left"></i>
                </button>

                <b class="text-success">{{ cartItem.quantity }}</b>
                <button
                  class="btn"
                  @click="addToCart(cartItem, quantity)"
                  id="add-to-cart-button"
                  v-if="cartItem.quantity > 0 && cartItem.quantity < 5"
                >
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
              </p>
            </div>
            <p class="my-2">
              SubTotal::
              <span class="font-weight-bold text-success">
                <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>
                <b>{{ cartItem.price * cartItem.quantity }}</b>
              </span>
            </p>
          </div>

          <div class="col-2"></div>
          <div class="col-12"><hr /></div>
        </div>
        <nav class="navbar fixed-bottom navbar-light bg-dark">
          <div class="container-fluid">
            <h4 class="text-success">
              Total Price : {{ cartItems.totalPrice }}
            </h4>
            <button
              type="submit"
              class="btn btn-success col-12 col-md-6 col-lg-4"
              @click="checkOut()"
            >
              Checkout
            </button>
          </div>
        </nav>
      </div>
      <div v-else>
        <p class="mt-5 text-danger">Cart is empty</p>
      </div>
    </div>
    <div v-else>
      <p class="mt-5 text-danger">login to access cart</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  name: "CartDetails",
  data() {
    return {
      cartItems: [],
      token: null,
      totalPrice: 0,
      quantity: 1,
    };
  },
  props: ["baseURL", ""],
  methods: {
    listCartProducts() {
      axios({
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
          const result = res.data.Carts;
          console.log("##### ", res.data.Carts);
          this.cartItems = result;
          this.totalPrice = result.totalPrice;
        })
        .catch((err) => {
          console.log("Error :: ", err);
        });
    },
    addToCart(product, quantity) {
      if (!this.token) {
        swal({
          title: "Please login to add item to cart",
          icon: "error",
        });
        return;
      }
      console.log("product ::", product);
      console.log("quantity ::", quantity);
      console.log("this.token==", this.token);
      console.log("User ID", localStorage.getItem("_id"));
      console.log("Product ID", product.productId);

      let cartData = {
        cartItems: {
          productId: product.productId,
          productName: product.productName,
          quantity: this.quantity,
          price: product.price,
          productUrl: product.productUrl,
        },
      };

      axios({
        url: `${this.baseURL}/cart/addtocart`,
        method: "post",
        data: cartData,
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          Accept: "application/json",
          token: localStorage.getItem("token"),
        },
      })
        .then((res) => {
          if (res.status == 200) {
            this.$router.go(0);
          }
        })
        .catch((err) => {
          console.log("Error :: ", err);
          swal({
            title: err.response.data.error,
          });
        });
    },
    removeItem(productId) {
      console.log("clicked productId", productId);
      axios({
        url: `${this.baseURL}/cart/product/${productId}`,
        method: "put",
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          Accept: "application/json",
          token: localStorage.getItem("token"),
        },
      })
        .then((result) => {
          if (result.status == 200) {
            this.$router.go(0);
          }
        })
        .catch((err) => {
          console.log("Error :: ", err);
        });
    },
    checkOut() {
      this.$router.push({ name: "Checkout" });
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.listCartProducts();
  },
};
</script>

<style scoped>
h6 {
  text-decoration: none;
  text-align: left;
}
.perunit {
  text-align: left;
}
a:link {
  text-decoration: none;
}
</style>
