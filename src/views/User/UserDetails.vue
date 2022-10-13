<template>
  <div>
    <h5>User Details</h5>
    <div class="dropdown-divider"></div>
    <div class="row">
      <div class="col-12 cl-sm-12 col-md-6 col-lg-6" style="text-align: left">
        <p>Name</p>
        <p>Email</p>
        <p>Role</p>
        <p>User Id</p>
        <p>SignUp Date</p>
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6" style="text-align: left">
        <p>{{ userDetails.name }}</p>
        <p>{{ userDetails.email }}</p>
        <p>{{ userDetails.role }}</p>
        <p>{{ userDetails._id }}</p>
        <p>{{ userDetails.createdAt }}</p>
      </div>
    </div>

    <h5 class="mt-5">User Orders - (<b class="text-primary">{{userOrders.length}}</b>)</h5>
    <div class="dropdown-divider"></div>

    <div class="row">
      <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
        {{ userOrders }}
      </div>
      <!-- <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
        Address
        <div class="dropdown-divider"></div>
        
        </div> -->

      
    </div>
  
    
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "UserDetails",
  props: ["baseURL"],
  data() {
    return {
      userId: null,
      userDetails: {},
      userOrders: [],
    };
  },
  methods: {
    getUserDetails() {

      axios({
        url: `${this.baseURL}/user/admin/user/${this.userId}`,
        method: "get",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          Accept: "application/json",
          token: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          console.log(response.data.user);
          this.userDetails = response.data.user;
        })
        .catch((err) => {
          console.log("Error to fatch userDetails", err);
        });
    },
    getUserOrders() {
      console.log(`${this.baseURL}/userorders/${this.userId}`);
      axios({
        url: `${this.baseURL}/userorders/${this.userId}`,
        method: "get",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          Accept: "application/json",
          token: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          console.log(response.data);
          this.userOrders = response.data.order;
        })
        .catch((err) => {
          console.log("Error to fatch userDetails", err);
        });
    },
  },
  mounted() {
    this.userId = this.$route.params.id;
    this.getUserDetails();
    this.getUserOrders();
  },
};
</script>

<style scoped></style>
