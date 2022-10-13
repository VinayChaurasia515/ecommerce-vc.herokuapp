<template>
  <div>
    <div class="bg-light sticky-top">
      <!-- Profile -->
      <div class="mt-2">
        <div class="card">
          <div class="card-body" style="padding: 1px; margin: 0px">
            <label
              style="margin: 0px"
              id="dropfun"
              class="d-flex justify-content-between"
              data-toggle="collapse"
              href="#collapseProfile"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Profile
              <span>
                <i
                  id="dropfun"
                  class="fa fa-caret-down mx-2"
                  aria-hidden="true"
                ></i>
              </span>
            </label>

            <div class="collapse" id="collapseProfile">
              <div class="dropdown-divider"></div>
              <div class="mt-2">
                <router-link :to="{ name: 'ViewProfile' }"
                  >View Profile</router-link
                >
                <div class="dropdown-divider"></div>
                <router-link :to="{ name: 'UserUpdateProfile' }"
                  >Update Profile</router-link
                >
                <div class="dropdown-divider"></div>
                <router-link :to="{ name: 'UserChangePassword' }"
                  >Change Password</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["baseURL"],
};
</script>

<style scoped></style>
