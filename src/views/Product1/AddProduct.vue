<template>
  <div>
    <h5>Add New Product</h5>
    <div class="dropdown-divider"></div>
    <div class="row">
      <div class="col-12">
        <form>
          <div class="form-group mt-3">
            <label>Category</label>
            <select class="form-control" v-model="categoryId">
              <option
                v-for="category in categories.Categories"
                :key="category._id"
                :value="category._id"
              >
                {{ category.categoryName }}
              </option>
            </select>
          </div>
          <div class="form-group mt-3">
            <label>Name</label>
            <input type="text" class="form-control" v-model="name" />
          </div>
          <div class="form-group mt-3">
            <label>Price</label>
            <input type="number" class="form-control" v-model="price" />
          </div>
          <div class="form-group mt-3">
            <label>Stock</label>
            <input type="number" class="form-control" v-model="stock" />
          </div>
          <div class="form-group mt-3">
            <label>Description</label>
            <textarea
              type="text"
              class="form-control"
              v-model="description"
            ></textarea>
          </div>
          <div class="form-group mt-3">
            <label>Image</label>
            <input
              type="file"
              ref="file"
              @change="handlerFileUpload()"
              class="form-control"
            />
          </div>
          <button type="button" class="btn btn-primary m-3" @click="addProduct">
            Add Product
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
  name: "AddProduct",
  props: ["baseURL", "categories"],
  data() {
    return {
      categoryId: null,
      name: null,
      price: null,
      stock: null,
      description: null,
      file: null,
    };
  },
  methods: {
    addProduct() {
      if (
        this.categoryId === null ||
        this.name === null ||
        this.name === null ||
        this.price === null ||
        this.stock === null ||
        this.description === null ||
        this.file === null
      ) {
        swal({
          title: "Fill all product details",
        });
        return;
      }
      let formData = new FormData();
      formData.append("category", this.categoryId);
      formData.append("name", this.name);
      formData.append("price", this.price);
      formData.append("Stock", this.stock);
      formData.append("description", this.description);
      formData.append("file", this.file);
      console.log(Object.keys(formData).length);

      axios({
        url: `${this.baseURL}/admin/product/new`,
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
            title: "Product Uploaded",
          });
          return this.$router.push({ name: "ViewProduct" });
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
