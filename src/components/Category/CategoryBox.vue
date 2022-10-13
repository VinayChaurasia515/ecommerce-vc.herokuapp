<template>
  <div>
    <!-- <h1>{{category[0]}}</h1>
    <h1>{{category.categoryName}}</h1> -->

    <div class="card w-100 h-100">
      <div class="embed-responsive embed-responsive-16by9">
        <img
          :src="category.categoryImages.url"
          class="card-img-top embed-responsive-item"
          alt="img not found"
          style="width: 200px; height: 150px"
        />
      </div>
      <div class="card-body">
        <router-link
          :to="{ name: 'ListProducts1', params: { id: category._id } }"
        >
          <h5 class="card-title">{{ category.categoryName }}</h5>
        </router-link>

        <p class="card-text">
          {{ category.categoryDescription.substring(0, 100) }}...
        </p>

        <div>
          <router-link
            :to="{ name: 'EditCategory1', params: { id: category._id } }"
            v-show="$route.name === 'ViewCategory'"
            style="float: left"
          >
            <button class="btn btn-primary">Edit</button>
          </router-link>

          <router-link
            :to="{ name: 'ViewCategory' }"
            v-show="$route.name === 'ViewCategory'"
            style="float: right"
          >
            <button class="btn btn-primary" @click="deleteCategory">
              Delete
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";
export default {
  name: "CategoryBox",
  data() {
    return {
      id: null,
    };
  },
  props: ["baseURL", "category"],
  methods: {
    async deleteCategory() {
      console.log(`${this.baseURL}/admin/category/${this.id}`);
      await axios
        .delete(`${this.baseURL}/admin/category/${this.id}`, {
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
            title: "Category Deleted",
          });
          setTimeout(() => {
            this.$router.go(0);
          }, 1000);
          return this.$router.push({ name: "ViewCategory" });
        })
        .catch((err) => {
          console.log("#####", err);
        });
    },
  },
  mounted() {
    this.id = this.category._id;
  },
};
</script>

<style scoped>
card-img-top {
  object-fit: cover;
}
</style>
