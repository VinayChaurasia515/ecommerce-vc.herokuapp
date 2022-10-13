<template>
  <div class="container" style="background-color: #f2f2f2">
    <div class="row">
      <div class="col-12 col-md-2 col-lg-3 col-xl-3 text-center pt-3"></div>
      <div class="col-12 col-md-8 col-lg-6 col-xl-6 text-center pt-3">
        <div id="signup-div" class="flex-item-border">
          <h4 class="pt-4 pl-4">Create Account</h4>
          <form class="p-4 bg-light" style="border: solid #ffffff">
            <div class="form-group">
              <label for="name"> Name</label>
              <input type="text" v-model="name" class="form-control" required />
            </div>
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
            <div class="form-group">
              <label for="password">Conform Password</label>
              <input
                type="password"
                v-model="conformPassword"
                class="form-control"
                required
              />
            </div>
            <button @click.prevent="signup" class="btn btn-primary mt-4">
              Create Account
            </button>
            <div class="dropdown-divider"></div>
            <div class="" style="float: right">
              <router-link :to="{ name: 'Signin' }">Sign in</router-link>
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
  name: "SignUp",
  props: ["baseURL"],
  data() {
    return {
      name: null,
      email: null,
      password: null,
      conformPassword: null,
    };
  },
  methods: {
    signup() {
      console.log("clicked");

      if (this.name === null || this.email === null || this.password === null) {
        swal({
          title: "Fill your Details",
        });
      }
      if (this.password === this.conformPassword) {
        const user = {
          name: this.name,
          email: this.email,
          password: this.password,
        };
        console.log("USer ::", user);
        console.log(`${this.baseURL}/user/register)`);
        axios
          .post(`${this.baseURL}/user/register`, user)
          .then(() => {
            this.$router.push({ name: "Signin" });
            swal({
              title: "Register Successfully",
            });
          })
          .catch((err) => {
            console.log("Error ::", err);
            swal({
              title: err.response.data.error,
            });
          });
      } else {
        swal({
          title: "Password & Conform Password don't match",
        });
      }
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
