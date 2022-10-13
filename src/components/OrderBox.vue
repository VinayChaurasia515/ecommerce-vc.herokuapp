<template>
  <div class="card overflow-hidden">
    <div class="d-flex justify-content-between">
      <div class="orderdate">Date : {{ order.createdAt }}</div>
      <div class="orderId">Order Id : {{ order._id }}</div>
    </div>
    <div class="dropdown-divider"></div>
    <div class="row">
      <div class="col-12 col-md-9 col-lg-9 col-xl-9">
        <div class="row" v-for="item in order.orderItems" :key="item._id">
          <div class="col-12 col-md-3 col-lg-3 col-xl-3">
            <img
              :src="item.productUrl"
              class="embed-responsive-item"
              alt="img not found"
              style="width: 100px; height: 100px"
            />
          </div>
          <div class="col-12 col-md-9 col-lg-9 col-xl-9">
            <!-- <h5>
              {{ item.productName }}
            </h5> -->
            <router-link
              :to="{ name: 'ShowDetails', params: { id: item.productId } }"
            >
              <h5 class="card-title">{{ item.productName.slice(0, 50) }} ...</h5>
            </router-link>

            <div class="d-flex justify-content-between">
              <p>
                <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>
                {{ item.price }} per unit
              </p>
              <p class="mx-5">Quantity : {{ item.quantity }}</p>
            </div>
            <p>
              Sub Total :<i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>
              {{ item.quantity * item.price }}
            </p>
            <div class="d-flex">
              <p>Delhivery Courier Tracking :</p>
              <p class="text-success">
                <b>{{ item.courierStatus }}</b>
              </p>
            </div>
          </div>
          <div class="dropdown-divider"></div>
        </div>
      </div>

      <div class="col-12 col-md-3 col-lg-3 col-xl-3">
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
export default {
  props: ["order"],
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
</style>
