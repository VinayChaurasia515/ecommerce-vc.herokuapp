<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h5>Edit Product</h5>
        <div class="dropdown-divider"></div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <form v-if="product">
          <div class="form-group mt-3">
            <label>Product Name</label>
            <input
              type="text"
              class="form-control"
              v-model="product.name"
              required
            />
          </div>
          <div class="form-group mt-3">
            <label>Product Price</label>
            <input
              type="text"
              class="form-control"
              v-model="product.price"
              required
            />
          </div>
          <div class="form-group mt-3">
            <label>Product Stock</label>
            <input
              type="text"
              class="form-control"
              v-model="product.Stock"
              required
            />
          </div>
          <div class="form-group mt-3">
            <label>product Description</label>
            <textarea
              type="text"
              class="form-control"
              v-model="product.description"
              required
            ></textarea>
          </div>
          <div class="form-group mt-3">
            <label>Images </label>
            <input
              type="text"
              class="form-control"
              v-model="product.images.url"
              required
            />
          </div>
          <button
            type="button"
            class="btn btn-primary m-3"
            @click="editProduct"
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
  name: "EditProduct",
  props: ["baseURL", "products"],
  data() {
    return {
      product: null,
      id: null,
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.products.find((res) => res._id === this.id);
  },
  methods: {
    async editProduct() {
      console.log("click");
      console.log(this.product);
      await axios
        .post(`${this.baseURL}/admin/product/${this.id}`, this.product)
        .then(() => {
          console.log("Product Updated");
          swal({
            title: "Product Updated",
          });
          this.$router.push({ name: "ViewProduct" });
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
