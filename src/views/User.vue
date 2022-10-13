<template>
  <div style="background-color: #f2f2f2">
    <h1></h1>
    <div class="container">
      <div class="row">
        <div class="text-center col-12">
          <h5 class="pt-3">Our User List</h5>
        </div>
      </div>
      <div class="row">
        <div
          v-for="user of users"
          :key="user._id"
          class="col-12 col-xl-4 col-md-6 d-flex pt-3"
        >
          <UserBox :user="user" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";
import UserBox from "../components/UserBox.vue";
export default {
  name: "UserAll",
  data() {
    return {
      users: null,
    };
  },
  components: {
    UserBox,
  },
  props: ["baseURL"],
  mounted() {
    console.log(`${this.baseURL}`);
    axios
      .get(`${this.baseURL}/user/admin/users`, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          Accept: "application/json",
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log("LLLL ", res.data.users);

        this.users = res.data.users;
      })
      .catch((err) => {
        console.log(">>>", err.response.data);
        swal({
          title: err.response.data.error,
        });
        this.$router.push({ name: "Home" });
      });
  },
};
</script>

<style scoped></style>
