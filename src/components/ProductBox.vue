<template>
  <!-- <div> {{product._id}}</div> -->
  <!-- <div>----------------</div> -->
  <!-- <h1>{{product[0]}}</h1> -->
  <div class="card">
    <div class="embed-responsive embed-responsive-16by9">
      <img
        :src="product.images.url"
        class="card-img-top embed-responsive-item mt-3"
        alt="img not found"
        style="width: 200px; height: 150px"
      />
    </div>
    <div class="card-body">
      <router-link :to="{ name: 'ShowDetails', params: { id: product._id } }">
        <h5 class="card-title">{{ product.name.slice(0, 50) }} ...</h5>
      </router-link>

      <p class="card-text">
        Price ::
        <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>
        {{ product.price }}
      </p>
      <p class="card-text">
        Rating ::
        {{ product.ratings }}
      </p>
      <!-- <router-link :to="{ name: 'EditProduct', params: { id: product._id } } "
       v-show="$route.name==='AdminProduct'">
        <button class="btn btn-primary">Edit</button>
      </router-link> -->
      <div class="d-flix justify-align">
        <router-link
          :to="{ name: 'EditProduct1', params: { id: product._id } }"
          v-show="$route.name === 'ViewProduct'"
          style="float: left"
        >
          <button class="btn btn-primary">Edit</button>
        </router-link>
        <router-link
          :to="{ name: 'ViewProduct' }"
          v-show="$route.name === 'ViewProduct'"
          style="float: right"
        >
          <button class="btn btn-primary" @click="deleteProduct">Delete</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";
export default {
  name: "ProductBox",
  data() {
    return {
      id: null,
    };
  },
  props: ["baseURL", "product"],
  methods: {
    async deleteProduct() {
      console.log(`${this.baseURL}/admin/product/${this.id}`);
      await axios
        .delete(`${this.baseURL}/admin/product/${this.id}`, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
            Accept: "application/json",
            token: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          // loder.hide();
          console.log(response);
          swal({
            title: "Product Deleted",
          });
          
          return this.$router.push({ name: "ViewProduct" });
        })
        .catch((err) => {
          console.log("#####", err);
        });
    },
  },
  mounted() {
    this.id = this.product._id;
  },
};
</script>

<style scoped></style>
