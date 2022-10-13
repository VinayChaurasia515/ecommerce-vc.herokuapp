<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h5>Edit Category</h5>
        <div class="dropdown-divider"></div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <form v-if="category">
          <div class="form-group mt-3">
            <label>Category Name</label>
            <input
              type="text"
              class="form-control"
              v-model="category.categoryName"
              required
            />
          </div>
          <div class="form-group mt-3">
            <label>Category Description</label>
            <textarea
              type="text"
              class="form-control"
              v-model="category.categoryDescription"
              required
            ></textarea>
          </div>
          <div class="form-group mt-3">
            <label>Images </label>
            <input
              type="text"
              class="form-control"
              v-model="category.categoryImages.url"
              required
            />
          </div>
          <button
            type="button"
            class="btn btn-primary mt-3"
            @click="editCategory"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  data() {
    return {
      category: null,
      id: null,
    };
  },
  props: ["baseURL", "categories"],
  mounted() {
    this.id = this.$route.params.id;
    this.category = this.categories.Categories.find(
      (res) => res._id === this.id
    );
  },
  methods: {
    async editCategory() {
      console.log("click");
      console.log(this.category);
      await axios
        .post(`${this.baseURL}/admin/category/${this.id}`, this.category, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
            Accept: "application/json",
            token: localStorage.getItem("token"),
          },
        })
        .then(() => {
          console.log("updated");
          swal({
            title: "Updated",
          });
          this.$router.push({ name: "ViewCategory" });
        })
        .catch((err) => {
          console.log("Error :: ", err);
        });
    },
  },
};
</script>

<style scoped></style>
