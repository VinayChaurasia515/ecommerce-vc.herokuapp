<template>
  <div>
    <h5>Change Password</h5>
    <div class="dropdown-divider"></div>
    <form>
      <div class="form-group">
        <label>Old Password</label>
        <input type="password" class="form-control" v-model="oldPassword" required/>
      </div>
      <div class="form-group">
        <label>New Password</label>
        <input type="password" class="form-control" v-model="newPassword" required/>
      </div>
      <div class="form-group">
        <label>Confirm Password</label>
        <input type="password" class="form-control" v-model="confirmPassword" required />
      </div>

      <button
        type="button"
        class="btn btn-primary mt-3"
        @click="changePassword"
      >
        Change Password
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
      oldPassword: null,
      newPassword: null,
      confirmPassword: null,
    };
  },
  props: ["baseURL"],
  mounted() {
  
  },
  methods: {
    changePassword() {
      let formData = new FormData();
      formData.append("oldPassword", this.oldPassword);
      formData.append("newPassword", this.newPassword);
      formData.append("confirmPassword", this.confirmPassword);

      axios({
        url: `${this.baseURL}/user/password/update`,
        method: "put",
        data: formData,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          Accept: "application/json",
          token: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          console.log(response);
          swal({
            title: "Password Changed",
          });
          return this.$router.push({ name: "ViewProfile" });
        })
        .catch((err) => {
          console.log(">>>", err.response.data.error);
          if (err.response.data.error === "Old Password is Incorrect") {
            swal({
              title: err.response.data.error,
            });
          } else if (
            err.response.data.error ===
            "Password and Confirm Password not match"
          ) {
            swal({
              title: "Password and Confirm Password not match",
            });
          }
        });
    },
  },
};
</script>

<style scoped></style>
