<template>
  <!-- {{order._id}} -->
  <div class="card overflow-hidden" style="border: solid 2px #0075ff">
    <div class="d-flex justify-content-between">
      <div class="orderdate">Date : {{ order.createdAt }}</div>
      <div class="orderId">Order Id : {{ order._id }}</div>
    </div>
    <div class="dropdown-divider"></div>
    <div class="row">
      <div class="col-12 col-sm-12 col-md-11 col-lg-9 col-xl-9">
        <div class="row" v-for="item in order.orderItems" :key="item._id">
          <!-- {{item}} -->
          <div class="col-12 col-md-12 col-lg-3 col-xl-3">
            <img
              :src="item.productUrl"
              class="embed-responsive-item"
              alt="img not found"
              style="width: 100px; height: 100px"
            />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
            <h6 style="font-weight: 600" class="text-primary">
              {{ item.productName }}
            </h6>

            <!-- <router-link
              :to="{ name: 'ShowDetails', params: { id: item._id } }"
            >
              <h5 class="card-title">
                {{ item.productName.slice(0, 50) }} ...
              </h5>
            </router-link> -->

            <div class="d-flex justify-content-between">
              <p>
                <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>
                {{ item.price }} per unit
              </p>
              <p class="mx-5">Quantity : {{ item.quantity }}</p>
            </div>
            <div class="d-flex justify-content-between">
              <p>
                Sub Total :<i
                  class="fa-sharp fa-solid fa-indian-rupee-sign"
                ></i>
                {{ item.quantity * item.price }}
              </p>
              
            </div>
            <!-- <p>
              Sub Total :<i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>
              {{ item.quantity * item.price }}
            </p> -->
          </div>
          <p>Product Id : <b>{{item._id}}</b></p>
          <small
            class="bg-success col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 text-light m-2"
            >Current Tracking Status : {{ item.courierStatus }}</small
          >
          <div>
            <form class="d-flex mt-2" style="background-color: #a9bbbd">
              <div class="form-group d-flex justify-content-between">
                <label for="tracking" class="m-2 text-light"
                  >Change Status
                </label>
                <select
                  style="width: 55%"
                  class="form-control m-1"
                  id="tracking"
                  v-model="courierStatus"
                  ref="input"
                >
                  <option selected>Selected...</option>
                  <option>Seller has processed your order.</option>
                  <option>
                    Item has been dispatched from the seller warehouse.
                  </option>
                  <option>
                    Your item has been received in the hub nearest to you Ekart
                    Logistics.
                  </option>
                  <option>Your item is out for delivery.</option>
                  <option>Your item has Delivered.</option>
                </select>
              </div>
              <div>
                <button
                  type="button"
                  class="btn btn-primary m-1"
                  @click="changeOrderStatus(item)"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div class="dropdown-divider"></div>
        </div>
      </div>

      <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
        Address :
        <div class="dropdown-divider"></div>
        <p>
          {{ order.shippingInfo.fullName }}, flat-{{ order.shippingInfo.flat }},
          area-{{ order.shippingInfo.area }}, near-{{
            order.shippingInfo.landmark
          }}, city-{{ order.shippingInfo.city }}, district-
          {{ order.shippingInfo.district }},state-{{
            order.shippingInfo.state
          }},country-{{ order.shippingInfo.country }}, pin code-{{
            order.shippingInfo.pinCode
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";

export default {
  props: ["order", "baseURL"],
  data() {
    return {
      courierStatus: null,
    };
  },
  mounted() {
    this.$refs.input.focus();
  },

  methods: {
    changeOrderStatus(item) {
      console.log(item.productId);

      let d = {
        productId: item.productId,
        courierStatus: this.courierStatus,
      };
      console.log(`${this.baseURL}/admin/order/${this.order._id}`);
      axios({
        url: `${this.baseURL}/admin/order/${this.order._id}`,
        method: "patch",
        data: d,

        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          Accept: "application/json",
          token: localStorage.getItem("token"),
        },
      })
        .then((res) => {
          console.log(res.data);
          swal({
            title: "Status updated",
          });
          //this.$router.push({ name: "ViewCategory" });
        })
        .catch((err) => {
          console.log(err);
          swal({
            title: "Status not updated",
          });
        });
    },
  },
};
</script>

<style scoped>
p {
  margin: 1px;
  text-align: left;
  display: block;
}
.orderId {
  margin-right: 20px;
}
.orderdate {
  margin-left: 20px;
}
option {
  font-size: small;
}
</style>
