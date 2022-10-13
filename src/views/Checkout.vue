<template>
  <div class="container" style="background-color: #f2f2f2">
    <div v-if="token">
      <div v-if="token && cartItems.totalPrice > 0">
        <form>
          <div class="row">
            <div class="col-12 text-center">
              <h4 class="pt-3">Checkout page</h4>
              <div class="dropdown-divider"></div>
            </div>

            <div
              class="col-12 col-md-12 col-lg-12 text-start"
              style="background-color: #0039e6"
            >
              <h4 style="color: white">Deliver Address</h4>
            </div>

            <div class="col-md-1 col-lg-2"></div>

            <div class="col-12 col-md-5 col-lg-4">
              <div class="mb-3">
                <label for="fname" class="form-label">Full name</label>
                <input
                  type="text"
                  class="form-control"
                  id="fname"
                  v-model="fullName"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="flat" class="form-label"
                  >Flat, House no., Building</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="flat"
                  v-model="flat"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="landmark" class="form-label">Landmark</label>
                <input
                  type="text"
                  class="form-control"
                  id="landmark"
                  v-model="landmark"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="district" class="form-label">District</label>
                <input
                  type="text"
                  class="form-control"
                  id="district"
                  v-model="district"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="inputState">State</label>
                <select
                  id="inputState"
                  v-model="state"
                  required
                  class="form-control mt-2"
                >
                  <option selected>Choose...</option>
                  <option value="AN">Andaman and Nicobar Islands</option>
                  <option value="AP">Andhra Pradesh</option>
                  <option value="AR">Arunachal Pradesh</option>
                  <option value="AS">Assam</option>
                  <option value="BR">Bihar</option>
                  <option value="CH">Chandigarh</option>
                  <option value="CT">Chhattisgarh</option>
                  <option value="DN">Dadra and Nagar Haveli</option>
                  <option value="DD">Daman and Diu</option>
                  <option value="DL">Delhi</option>
                  <option value="GA">Goa</option>
                  <option value="GJ">Gujarat</option>
                  <option value="HR">Haryana</option>
                  <option value="HP">Himachal Pradesh</option>
                  <option value="JK">Jammu and Kashmir</option>
                  <option value="JH">Jharkhand</option>
                  <option value="KA">Karnataka</option>
                  <option value="KL">Kerala</option>
                  <option value="LA">Ladakh</option>
                  <option value="LD">Lakshadweep</option>
                  <option value="MP">Madhya Pradesh</option>
                  <option value="MH">Maharashtra</option>
                  <option value="MN">Manipur</option>
                  <option value="ML">Meghalaya</option>
                  <option value="MZ">Mizoram</option>
                  <option value="NL">Nagaland</option>
                  <option value="OR">Odisha</option>
                  <option value="PY">Puducherry</option>
                  <option value="PB">Punjab</option>
                  <option value="RJ">Rajasthan</option>
                  <option value="SK">Sikkim</option>
                  <option value="TN">Tamil Nadu</option>
                  <option value="TG">Telangana</option>
                  <option value="TR">Tripura</option>
                  <option value="UP">Uttar Pradesh</option>
                  <option value="UT">Uttarakhand</option>
                  <option value="WB">West Bengal</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-md-5 col-lg-4">
              <div class="mb-3">
                <label for="mobile" class="form-label">Mobile number</label>
                <input
                  type="number"
                  class="form-control"
                  id="mobile"
                  v-model="mobileNo"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="area" class="form-label"
                  >Area, Street, Sector, Village</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="area"
                  v-model="area"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="city" class="form-label">Town/City/Post</label>
                <input
                  type="text"
                  class="form-control"
                  id="city"
                  v-model="city"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="pincode" class="form-label">Pin code</label>
                <input
                  type="number"
                  class="form-control"
                  id="pincode"
                  v-model="pinCode"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="country" class="form-label">Country</label>
                <input
                  type="text"
                  class="form-control"
                  id="country"
                  v-model="country"
                />
              </div>
            </div>

            <div class="dropdown-divider"></div>
            <div class="col-md-1 col-lg-2"></div>

            <div
              class="col-12 col-md-12 col-lg-12 text-start"
              style="background-color: #0039e6"
            >
              <h4 style="color: white">Order Summary</h4>
            </div>

            <div v-for="item in cartItems.cartItems" :key="item._id">
              <div class="row">
                <div class="col-md-1 col-lg-1"></div>
                <div
                  class="col-4 col-md-3 col-lg-3"
                  style="background-color: white"
                >
                  <img
                    :src="item.productUrl"
                    style="width: 110px; height: 100px"
                    alt="img not found"
                  />
                  <h6 class="fw-bold text-success text-justify">
                    Quantity {{ item.quantity }}
                  </h6>
                </div>
                <div
                  class="col-8 col-md-7 col-lg-7 p-0"
                  style="background-color: white"
                >
                  <h6 class="fs-6 fw-bold text-primary p-0" style="float: left">
                    {{ item.productName.slice(0, 70) }}...
                  </h6>
                  <p class="fw-bold" style="color: #a6a6a6">
                    <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>
                    {{ item.price }} <small>per item</small>
                  </p>
                  <br />
                  <p class="fw-bold text-success" style="float: left">
                    <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i
                    >{{ item.quantity * item.price }}
                  </p>
                </div>
                <div class="col-md-1 col-lg-1"></div>
              </div>
              <div class="dropdown-divider"></div>
            </div>

            <div
              class="col-12 col-md-12 col-lg-12 text-start"
              style="background-color: #0039e6"
            >
              <h4 style="color: white">Payment Option</h4>
            </div>

            <div class="methodofpayment text-start">
              <div class="radio">
                <label
                  ><input
                    type="radio"
                    v-model="paymentOption"
                    value="card"
                  />Credit/Debit/ATM Card</label
                >
                <div v-if="paymentOption === 'card'" class="cardATM">
                  <div class="row">
                    <div class="col-lg-6 mx-auto">
                      <div class="card">
                        <div class="card-header">
                          <div class="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                            <div class="tab-content">
                              <div
                                id="credit-card"
                                class="tab-pane fade show active pt-3"
                              >
                                <form
                                  role="form"
                                  onsubmit="event.preventDefault()"
                                >
                                  <div class="form-group">
                                    <label for="username">
                                      <h6>Card Owner</h6>
                                    </label>
                                    <input
                                      type="text"
                                      name="username"
                                      placeholder="Card Owner Name"
                                      required
                                      class="form-control"
                                    />
                                  </div>
                                  <div class="form-group">
                                    <label for="cardNumber">
                                      <h6>Card number</h6>
                                    </label>
                                    <div class="input-group">
                                      <input
                                        type="text"
                                        name="cardNumber"
                                        placeholder="Valid card number"
                                        class="form-control"
                                        required
                                      />
                                      <div class="input-group-append">
                                        <span
                                          class="input-group-text text-muted"
                                        >
                                          <i class="fab fa-cc-visa mx-1"></i>
                                          <i
                                            class="fab fa-cc-mastercard mx-1"
                                          ></i>
                                          <i class="fab fa-cc-amex mx-1"></i>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-sm-8">
                                      <div class="form-group">
                                        <label
                                          ><span class="hidden-xs">
                                            <h6>Expiration Date</h6>
                                          </span></label
                                        >
                                        <div class="input-group">
                                          <input
                                            type="number"
                                            placeholder="MM"
                                            name=""
                                            class="form-control"
                                            required
                                          />
                                          <input
                                            type="number"
                                            placeholder="YY"
                                            name=""
                                            class="form-control"
                                            required
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-sm-4">
                                      <div class="form-group mb-4">
                                        <label
                                          data-toggle="tooltip"
                                          title="Three digit CV code on the back of your card"
                                        >
                                          <h6>
                                            CVV
                                            <i
                                              class="fa fa-question-circle d-inline"
                                            ></i>
                                          </h6>
                                        </label>
                                        <input
                                          type="text"
                                          required
                                          class="form-control"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="radio">
                <label
                  ><input
                    type="radio"
                    v-model="paymentOption"
                    value="cod"
                  />Cash on Delivery</label
                >
              </div>
            </div>

            <nav class="navbar fixed-bottom navbar-light bg-dark">
              <div class="container-fluid">
                <h4 class="text-success">
                  Total Price : {{ cartItems.totalPrice }}
                </h4>
                <button
                  type="submit"
                  class="btn btn-success col-12 col-md-6 col-lg-4"
                  @click="placeOrder"
                >
                  Place Order
                </button>
              </div>
            </nav>
          </div>
        </form>
      </div>
      <div v-else>
        <p class="mt-5 text-danger">
          Cart is empty, So not able to access checkout
        </p>
      </div>
    </div>

    <div v-else>
      <h1>login to access it</h1>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  name: "CheckOut",
  components: {},
  data() {
    return {
      token: null,
      cart: null,
      cartItems: [],
      totalPrice: 0,
      paymentOption: null,

      fullName: "",
      flat: null,
      landmark: null,
      pinCode: null,
      mobileNo: null,
      area: null,
      city: null,
      district: null,
      state: null,
      country: null,
    };
  },
  props: ["baseURL"],
  methods: {
    getCartItems() {
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
          console.log("Ordering Product===== ", res.data.Carts.cartItems);
          this.cartItems = result;
          this.totalPrice = result.totalPrice;
        })
        .catch((err) => {
          console.log("Error :: ", err);
        });
    },
    placeOrder(e) {
      e.preventDefault();

      let shippingInfo = {
        fullName: this.fullName,
        mobileNo: this.mobileNo,
        flat: this.flat,
        area: this.area,
        landmark: this.landmark,
        city: this.city,
        district: this.district,
        state: this.state,
        country: this.country,
        pinCode: this.pinCode,
      };
      let orderItems = this.cartItems.cartItems;
      let paymentOption = this.paymentOption;

      let formObject = {
        shippingInfo,
        orderItems,
        paymentOption,
        totalPrice: this.cartItems.totalPrice,
        paymentInfo: {
          paymentOption,
          id: "Sample Payment Id",
          status: "Succeeded",
        },
      };
      if (
        shippingInfo.fullName === null ||
        shippingInfo.mobileNo === null ||
        shippingInfo.flat === null ||
        shippingInfo.area === null ||
        shippingInfo.landmark === null ||
        shippingInfo.city === null ||
        shippingInfo.district === null ||
        shippingInfo.state === null ||
        shippingInfo.country === null ||
        shippingInfo.pinCode === null
      ) {
        swal({
          title: "Fill all Details!",
        });
        return;
      }

      axios({
        url: `${this.baseURL}/order/new`,
        method: "post",
        data: formObject,
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          Accept: "application/json",
          token: localStorage.getItem("token"),
        },
      })
        .then((res) => {
          const result = res.data.order;
          console.log("Order Done ", result);
          setTimeout(() => {
            swal({
              title: "Order Placed",
            });
          }, 1000);
          return this.$router.push({ name: "MyOrder" });
        })
        .catch((err) => {
          console.log("Error :: ", err);
          swal({
            title: err.response.data.error,
          });
        });
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.getCartItems();
  },
};
</script>

<style scoped>
body {
  background: #f5f5f5;
}
.rounded {
  border-radius: 1rem;
}
.nav-pills .nav-link {
  color: #555;
}
.nav-pills .nav-link.active {
  color: white;
}
input[type="radio"] {
  margin-right: 5px;
}
.bold {
  font-weight: bold;
}
</style>
