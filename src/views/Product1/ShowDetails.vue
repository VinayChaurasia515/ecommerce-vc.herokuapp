<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col-md-1 col-lg-1"></div>
      <div class="col-12 col-md-4">
        <img :src="productUrl" class="img-fluid" />
      </div>
      <div class="col-12 col-md-6 col-12 pt-3 pt-md-0">
        <h4>{{ product.name }}</h4>
        <h6 class="category font-italic">
          Category : {{ category.categoryName }}
        </h6>
        <h6 class="font-weight-bold">
          Price :
          <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>
          {{ product.price }}
        </h6>
        <p>{{ product.description }}</p>

        <div class="d-flex flex-row justify-content-between">
          <div class="input-group col-md-3 col-4 p-0">
            <div class="input-group-prepend">
              <span class="input-group-text">Quantity</span>
            </div>
            <input
              type="number"
              class="form-control"
              min="1"
              step="1"
              max="5"
              v-model="quantity"
            />
            <button class="btn" @click="addToCart" id="add-to-cart-button">
              Add to cart
            </button>
          </div>
        </div>

        <div class="features pt-3">
          <h5><strong>Features</strong></h5>
          <ul>
            <li>
              a distinct section of a piece of writing, usually dealing with a
              single theme and indicated by a new line, indentation, or
              numbering:
            </li>
            <li>
              a distinct section of a piece of writing, usually dealing with a
              single theme and indicated by a new line, indentation, or
              numbering:
            </li>

            <li>
              a distinct section of a piece of writing, usually dealing with a
              single theme and indicated by a new line, indentation, or
              numbering:
            </li>
            <li>
              a distinct section of a piece of writing, usually dealing with a
              single theme and indicated by a new line, indentation, or
              numbering:
            </li>
            <li>
              a distinct section of a piece of writing, usually dealing with a
              single theme and indicated by a new line, indentation, or
              numbering:
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-1 col-lg-1"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  data() {
    return {
      product: {},
      productUrl: null,
      quantity: 1,
      id: null,
      category: {},
      wishListString: "Add to wishlist",
    };
  },
  props: ["baseURL", "products", "categories"],
  methods: {
    addToCart() {
      if (!this.token) {
        swal({
          title: "Please login to add item to cart",
          icon: "error",
        });
        this.$router.push({ name: "Signin" });
        return;
      }
      console.log("===========");
      console.log("this.token", this.token);
      console.log("User ID", localStorage.getItem("_id"));
      console.log("Product ID", this.product._id);

      let cartData = {
        cartItems: {
          productId: this.product._id,
          productName: this.product.name,
          quantity: this.quantity,
          price: this.product.price,
          productUrl: this.product.images.url,
        },
      };

      axios({
        url: `${this.baseURL}/cart/addtocart`,
        method: "post",
        data: cartData,
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          Accept: "application/json",
          token: localStorage.getItem("token"),
        },
      })
        .then((res) => {
          if (res.status == 200) {
            swal({
              title: "Added to Cart",
              icon: "success",
            });

            setTimeout(() => {
              this.$router.go(0);
            }, 1000);

            this.$router.push({ name: "Cart" });
          }
        })
        .catch((err) => {
          console.log("Error :: ", err);
          swal({
            title: err.response.data.error,
          });
        });
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.products.find(
      (product) => product._id === this.id
    );
    this.productUrl = this.product.images.url;
    this.category = this.categories.Categories.find(
      (category) => category._id === this.product.category
    );
    this.token = localStorage.getItem("token");

    console.log("this.quantity ", this.quantity);
  },
};
</script>

<style scoped>
.category {
  font-weight: 400;
}
#wishlist-button {
  background-color: #b9b9b9;
}
#add-to-cart-button {
  background-color: #febd69;
}
.bigimg {
  width: 500px;
  height: 500px;
}
</style>
