<template>
  <div class="container" style="background-color: #f2f2f2">
    <div class="row">
      <div class="col-12 text-center pt-3"></div>
    </div>
    <div class="row">
      <div class="col-12 col-md-2 col-lg-3 col-xl-3 text-center pt-3"></div>
      <div class="col-12 col-md-8 col-lg-6 col-xl-6 text-center pt-3">
        <div id="signup-div" class="flex-item-border">
          <h2 class="pt-4 pl-4">Reset Password</h2>
          <form
            @submit="signin"
            class="p-4 bg-light"
            style="border: solid #ffffff"
          >
            <div class="form-group">
              <label for="Password"> Password</label>
              <input
                type="password"
                v-model="password"
                class="form-control"
                id="Password"
                required
              />
            </div>
            <div class="form-group">
              <label for="ConfirmPassword">Confirm Password</label>
              <input
                type="password"
                v-model="confirmPassword"
                class="form-control"
                id="ConfirmPassword"
                required
              />
            </div>
            <div @click="reset()" class="btn btn-primary mt-2">
              Reset Password
            </div>
            <div class="dropdown-divider"></div>
            <div class="d-flex justify-content-between">
              <router-link :to="{ name: 'Signin' }">Sign in</router-link>
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
  name: "ResetPassword",
  props: ["baseURL", "user"],
  data() {
    return {
      password: null,
      confirmPassword: null,
      newToken: null,
    };
  },
  methods: {
    async reset() {
      console.log("clicked");
      if (this.password === null || this.confirmPassword === null) {
        swal({
          title: "Enter All Details",
        });
        return;
      }
      if (this.password !== this.confirmPassword) {
        swal({
          title: "Password and Confirm not matched",
        });
        return;
      }

      const password = {
        password: this.password,
        confirmPassword: this.confirmPassword,
      };

      console.log("Password Obj ::", password);
      await axios
        .put(`${this.baseURL}/user/password/reset/:${this.newToken}`, password)
        .then((res) => {
          if (res.data.success == true) {
            console.log(res.data);

            swal({
              title: res.data.message,
            });

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
  mounted() {
    this.newToken = this.$route.params.token;
  },
};
</script>

<style scoped>
.btn-primary {
  background-color: #047597;
  color: rgb(255, 255, 255);
}
</style>
