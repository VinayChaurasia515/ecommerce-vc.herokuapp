<template>
  <div>
    <h5>View Profile</h5>
    <div class="dropdown-divider"></div>
    <div
      class="card card-columns mx-auto d-flex justify-content-center col-12"
      style="width: 18rem"
    >
      <img
        src="https://cdn.onlinewebfonts.com/svg/img_304500.png"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body text-start">
        <h5 class="card-title">Name :: {{ name }}</h5>
        <p class="card-text">Email :: {{ email }}</p>
        <p class="card-text">Role :: {{ role }}</p>
        <p class="card-text">Id :: {{ id }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ViewProfile",
  data() {
    return {
      id: null,
      name: null,
      email: null,
      role: null,
      url: null,
      //  user:null,
    };
  },
  props: ["baseURL"],
  methods: {},
  mounted() {
    // this.id = localStorage.getItem("_id");
    // this.name = localStorage.getItem("userName");
    // this.email = localStorage.getItem("email");
    // this.role = localStorage.getItem("userRole");
    // this.url = localStorage.getItem("url");

    // this.user=localStorage.getItem('user')

    axios
      .get(`${this.baseURL}/user/me`, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          Accept: "application/json",
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log("Admin ==> ", res.data);
        this.name = res.data.user.name;
        this.email = res.data.user.email;
        this.id = res.data.user._id;
        this.url = res.data.user.avatar.url;
        this.role = res.data.user.role;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped></style>
