<template>
  <div class="container">
    <!-- <h1>{{user}}</h1> -->
    <div class="card" h-100 w-100>
      <div class="embed-responsive embed-responsive-">
        <!-- <img
          :src="user.avatar.url"
          class="card-img-top embed-responsive-item"
          alt="img not found"
        /> -->
      </div>
      <div class="card-body">
        <router-link
          :baseURL="baseURL"
          :user="user"
          :to="{ name: 'UserDetails', params: { id: user._id } }"
        >
        <!-- <UserDetails :baseURL="baseURL" :user="user" /> -->

          <h5 class="card-title">{{ user.name }}</h5>
        </router-link>

        <p class="card-text">
          role ::
          {{ user.role }}
        </p>
        <p class="card-text">
          email ::
          {{ user.email }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "UserBox",
  props: ["user"],
  components:{

  }
};
</script>

<style scoped></style>
