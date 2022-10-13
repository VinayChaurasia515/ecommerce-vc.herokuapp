<template>
  <div class="container">
    <div class="row" v-if="token">
      <div class="col-12 text-center">
        <h5 class="mt-0">
          All Orders - ( <b class="text-primary">{{ orders.length }}</b> )
        </h5>
        <div class="dropdown-divider"></div>
      </div>
      <div v-for="order in orders" :key="order._id">
        <OrderBoxAdmin class="mt-2" :baseURL="baseURL" :order="order" />
      </div>
    </div>
    <div v-else>
      <p class="bg-danger mt-5">login to access Order</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import OrderBoxAdmin from "../../components/OrderBoxAdmin.vue";

export default {
  name: "ViewOrder",
  props: ["baseURL"],
  components: {
    OrderBoxAdmin,
  },
  data() {
    return {
      orders: [],
      token: null,
    };
  },
  methods: {
    adminAllOrder() {
      axios({
        url: `${this.baseURL}/admin/orders`,
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
          console.log("orders  ", res.data.orders);
          console.log("total price  ", res.data.totalAmount);
          this.orders = res.data.orders;
        })
        .catch((err) => {
          console.log("Error =", err);
        });
    },
  },
  mounted() {
    this.adminAllOrder();
    this.token = localStorage.getItem("token");
  },
};
</script>

<style scoped></style>
