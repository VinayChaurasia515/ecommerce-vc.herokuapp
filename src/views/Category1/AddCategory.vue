<template>
  <div>
    <h5>Add Category</h5>
    <div class="dropdown-divider"></div>
    <div class="row">
      <div class="col-12">
        <form>
          <div class="form-group mt-3">
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              v-model="categoryName"
              required
            />
          </div>
          <div class="form-group mt-3">
            <label>Description</label>
            <textarea
              type="text"
              class="form-control"
              v-model="categoryDescription"
              required
            ></textarea>
          </div>
          <div class="form-group mt-3">
            <label>Image</label>
            <input
              type="file"
              @change="handlerFileUpload()"
              ref="file"
              class="form-control"
              required
            />
          </div>
          <button
            type="button"
            @click="addCategory"
            class="btn btn-primary mt-3"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
import swal from "sweetalert";

export default {
  name: "AddCategory",
  props: ["baseURL"],
  data() {
    return {
      categoryName: null,
      categoryDescription: null,
      file: null,
    };
  },
  methods: {
    addCategory() {
      console.log("clicked");
      if (
        this.categoryName === null ||
        this.categoryDescription === null ||
        this.file === null
      ) {
        swal({
          title: "Fill all category details",
        });
        return;
      }

      let formData = new FormData();
      formData.append("categoryName", this.categoryName);
      formData.append("categoryDescription", this.categoryDescription);
      formData.append("file", this.file);

      console.log("formData ", formData);

      axios({
        url: `${this.baseURL}/admin/category/add`,
        method: "post",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          Accept: "application/json",
          token: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          console.log(response);
          swal({
            title: "Uploaded",
          });
          return this.$router.push({ name: "ViewCategory" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handlerFileUpload() {
      this.file = this.$refs.file.files[0];
    },
  },
};
</script>

<style scoped></style>