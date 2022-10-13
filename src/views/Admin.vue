<template>
  <div class="container py-10" style="background-color: #f2f2f2">
    <router-link :to="{ name: 'Category' }">
      <button class="btn btn-primary btn-lg">Admin Category</button>
    </router-link>
    <br />

    <router-link :to="{ name: 'AdminProduct' }">
      <button class="btn btn-primary btn-lg">Admin Product</button>
    </router-link>
    <br />

    <router-link :to="{ name: 'ShowUsers' }">
      <button :users="users" class="btn btn-primary btn-lg">User List</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "AD",
  data() {
    return {
      users: null,
    };
  },
  props: ["baseURL"],
};
</script>

<style scoped>
.btn {
  margin-bottom: 20px;
}
</style>
