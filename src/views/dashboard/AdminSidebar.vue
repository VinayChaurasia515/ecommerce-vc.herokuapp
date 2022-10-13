<template>
  <div>
    <div class="product-left bg-light sticky-top">
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
              <div class="dropdown-divider dd"></div>
              <div class="mt-2">
                <router-link :to="{ name: 'ViewProfileAdmin' }"
                  >View Profile</router-link
                >
                <div class="dropdown-divider dd"></div>
                <router-link :to="{ name: 'UpdateProfile' }"
                  >Update Profile</router-link
                >
                <div class="dropdown-divider dd"></div>
                <router-link :to="{ name: 'ChangePassword' }"
                  >Change Password</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Product -->
      <div class="mt-2">
        <div class="card">
          <div class="card-body" style="padding: 1px; margin: 0px">
            <label
              style="margin: 0px"
              id="dropfun"
              class="d-flex justify-content-between"
              data-toggle="collapse"
              href="#collapseProduct"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Product
              <span>
                <i
                  id="dropfun"
                  class="fa fa-caret-down mx-2"
                  aria-hidden="true"
                ></i>
              </span>
            </label>

            <div class="collapse" id="collapseProduct">
              <div class="dropdown-divider dd"></div>
              <div class="mt-2">
                <router-link :to="{ name: 'ViewProduct' }"
                  >View Product</router-link
                >
                <div class="dropdown-divider dd"></div>
                <router-link :to="{ name: 'AddProduct1' }"
                  >Add Product</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Category -->
      <div class="mt-2">
        <div class="card">
          <div class="card-body" style="padding: 1px; margin: 0px">
            <label
              style="margin: 0px"
              id="dropfun"
              class="d-flex justify-content-between"
              data-toggle="collapse"
              href="#collapseCategory"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Category
              <span>
                <i
                  id="dropfun"
                  class="fa fa-caret-down mx-2"
                  aria-hidden="true"
                ></i>
              </span>
            </label>

            <div class="collapse" id="collapseCategory">
              <div class="dropdown-divider dd"></div>
              <div class="mt-2">
                <router-link :to="{ name: 'ViewCategory' }"
                  >View Category</router-link
                >
                <div class="dropdown-divider dd"></div>
                <router-link :to="{ name: 'AddCategory1' }"
                  >Add Category</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- User -->
      <div class="mt-2">
        <div class="card">
          <div class="card-body" style="padding: 1px; margin: 0px">
            <label
              style="margin: 0px"
              id="dropfun"
              class="d-flex justify-content-between"
              data-toggle="collapse"
              href="#collapseUser"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              User
              <span>
                <i
                  id="dropfun"
                  class="fa fa-caret-down mx-2"
                  aria-hidden="true"
                ></i>
              </span>
            </label>

            <div class="collapse" id="collapseUser">
              <div class="dropdown-divider dd"></div>
              <div class="mt-2">
                <router-link :to="{ name: 'ViewUser' }">View Users</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Admin Order Work -->
      <div class="mt-2">
        <div class="card">
          <div class="card-body" style="padding: 1px; margin: 0px">
            <label
              style="margin: 0px"
              id="dropfun"
              class="d-flex justify-content-between"
              data-toggle="collapse"
              href="#collapseAdminOrder"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Order Activity
              <span>
                <i
                  id="dropfun"
                  class="fa fa-caret-down mx-2"
                  aria-hidden="true"
                ></i>
              </span>
            </label>

            <div class="collapse" id="collapseAdminOrder">
              <div class="dropdown-divider dd"></div>
              <div class="mt-2">
                <router-link :to="{ name: 'AdminAllOrder' }"
                  >View Orders</router-link
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
