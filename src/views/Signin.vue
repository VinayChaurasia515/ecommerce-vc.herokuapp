<template>
  <div class="container" style="background-color: #f2f2f2">
    <div class="row">
      <div class="col-12 text-center pt-3"></div>
    </div>
    <div class="row">
      <div class="col-12 col-md-2 col-lg-3 col-xl-3 text-center pt-3"></div>
      <div class="col-12 col-md-8 col-lg-6 col-xl-6 text-center pt-3">
        <div id="signup-div" class="flex-item-border">
          <h4 class="pt-4 pl-4">Sign-In</h4>
          <form
            @submit="signin"
            class="p-4 bg-light"
            style="border: solid #ffffff"
          >
            <div class="form-group">
              <label for="Email"> Email</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                required
              />
            </div>
            <div class="form-group">
              <label for="password"> Password</label>
              <input
                type="password"
                v-model="password"
                class="form-control"
                required
              />
            </div>

            <div @click="signin()" class="btn btn-primary mt-2">Login</div>
            <div class="dropdown-divider"></div>
            <div class="d-flex justify-content-between">
              <router-link :to="{ name: 'ForgetPassword' }"
                >Forget password</router-link
              >
              <router-link :to="{ name: 'Signup' }">Sign up</router-link>
            </div>
          </form>
        </div>
      </div>
      <div class="col-12 col-md-2 col-lg-3 col-xl-3 pt-3"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";

export default {
  name: "SignIn",
  props: ["baseURL", "user"],
  data() {
    return {
      name: null,
      email: null,
      password: null,
      conformPassword: null,
    };
  },
  methods: {
    async signin() {
      console.log("clicked");

      if (this.email === null || this.password === null) {
        swal({
          title: "Fill your Details",
        });
      }
      const user = {
        email: this.email,
        password: this.password,
      };

      console.log("USer ::", user);
      await axios
        .post(`${this.baseURL}/user/login`, user)
        .then((res) => {
          if (res.data.success == true) {
            localStorage.setItem("token", res.data.token);

            localStorage.setItem("_id", res.data.user._id);
            localStorage.setItem("userName", res.data.user.name);
            localStorage.setItem("email", res.data.user.email);
            localStorage.setItem("userRole", res.data.user.role);
            localStorage.setItem("url", res.data.user.avatar.url);

            console.log("User Data ", res.data.user);

            setTimeout(() => {
              window.location.reload();
            }, 100);

            this.$router.replace("/");
          } else {
            swal({
              title: res.data.error,
            });
          }
        })
        .catch((err) => {
          console.log("Error ::", err);
          swal({
            title: err.response.data.error,
          });
        });
    },
  },
};
</script>

<style scoped>
.btn-primary {
  background-color: #047597;
  color: rgb(255, 255, 255);
}
</style>
