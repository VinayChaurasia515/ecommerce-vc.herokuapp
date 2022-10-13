<template>
  <div>
    <h5>Our Categories</h5>
    <div class="dropdown-divider"></div>

    <div class="row">
      <div
        v-for="category of categories.Categories"
        :key="category.id"
        class="col-12 col-xl-4 col-md-6 d-flex pt-3"
      >
        <CategoryBox :baseURL="baseURL" :category="category" />
      </div>
    </div>
  </div>
</template>

<script>
import CategoryBox from "../../components/Category/CategoryBox.vue";

export default {
  name: "ViewCategory",
  props: ["baseURL", "categories", "products"],
  components: { CategoryBox },
  data() {
    return {};
  },

  methods: {},
  mounted() {},
};
</script>

<style scoped></style>
