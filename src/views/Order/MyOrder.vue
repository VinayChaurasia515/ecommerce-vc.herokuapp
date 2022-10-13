<template>
  <div class="container">
    <div class="row" v-if="token">
      <div class="col-12 text-center">
        <h5 class="mt-0">My Order</h5>
        <div class="dropdown-divider"></div>
      </div>
      <div v-if="orders.length > 0">
        <div v-for="order in orders" :key="order._id">
          <OrderBox class="mt-2" :order="order" />
        </div>
      </div>
      <div v-else>
        <p class="mt-5 text-danger">Order not found</p>
      </div>
    </div>
    <div v-else>
      <p class="mt-5 text-danger">login to access Order</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import OrderBox from "../../components/OrderBox.vue";

export default {
  name: "ViewOrder",
  props: ["baseURL"],
  components: {
    OrderBox,
  },
  data() {
    return {
      orders: [],
      token: null,
    };
  },
  methods: {
    myOrder() {
      axios({
        url: `${this.baseURL}/orders/me`,
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
          console.log("order  ", res.data.order);
          this.orders = res.data.order;
        })
        .catch((err) => {
          console.log("Error =", err);
        });
    },
  },
  mounted() {
    this.myOrder();
    this.token = localStorage.getItem("token");
  },
};
</script>

<style scoped></style>
