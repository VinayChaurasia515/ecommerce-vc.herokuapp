<template>
  <div>
    <h5>Update Profile</h5>
    <div class="dropdown-divider"></div>
    <form>
      <div class="form-group mt-3">
        <label>Name</label>
        <input type="text" class="form-control" v-model="name" />
      </div>
      <div class="form-group mt-3">
        <label>Email</label>
        <input type="email" class="form-control" v-model="email" />
      </div>
      <div class="form-group mt-3">
        <label>Role</label>
        <input type="text" class="form-control" v-model="role" disabled />
      </div>
      <div class="form-group mt-3">
        <label>Id</label>
        <input type="text" class="form-control" v-model="id" disabled />
      </div>
      <div class="form-group mt-3">
        <label>Image Url</label>
        <input
          type="text"
          @change="handlerFileUpload()"
          class="form-control"
          v-model="url"
          disabled
        />
      </div>
      <button type="button" class="btn btn-primary mt-3" @click="updateProfile">
        Update Profile
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  name: "UpdateProfile",
  data() {
    return {
      name: null,
      email: null,
      role: null,
      id: null,
      url: null,
    };
  },
  props: ["baseURL"],
  mounted() {
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
        console.log(res);
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
  methods: {
    updateProfile() {
      console.log("updateProfile");
      let newData = {
        name: this.name,
        email: this.email,
      };
      axios
        .put(`${this.baseURL}/user/me/update`, newData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
            Accept: "application/json",
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log("updated :: ", res);
          swal({
            title: "Profile Updated",
          });
          localStorage.setItem("userName", res.data.newUserData.name);
        //  this.$router.push({ name: "ViewProfileAdmin" });
        this.$router.push({ name: "Home" });
        })
        .catch((err) => {
          console.log("Error :: ", err);
          swal({
            title: err.response.data.error,
          });
        });
    },
  },
};
</script>

<style scoped></style>
