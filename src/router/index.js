import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import ShowDetails from "../views/Product1/ShowDetails";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import ResetPassword from "../views/ResetPassword";
import ForgetPassword from "../views/ForgetPassword";

import AdminDashboard from "../views/dashboard/AdminDashboard.vue";
import AdminAllOrder from "../views/dashboard/AdminAllOrder";

import ShowUsers from "../views/User.vue";
import UserDashboard from "../views/dashboard/UserDashboard.vue";
import ViewProfile from "../views/Profile/ViewProfile.vue";
import ViewProfileAdmin from "../views/Profile/ViewProfile.vue";
import UpdateProfile from "../views/Profile/UpdateProfile.vue";
import ChangePassword from "../views/Profile/ChangePassword.vue";

import ViewProduct from "../views/Product1/ViewProduct";
import EditProduct1 from "../views/Product1/EditProduct";
import AddProduct1 from "../views/Product1/AddProduct";

import ViewCategory from "../views/Category1/ViewCategory.vue";
import EditCategory1 from "../views/Category1/EditCategory";
import AddCategory1 from "../views/Category1/AddCategory";
import ListProducts1 from "../views/Category1/ListProducts";

import ViewUser from "../views/User/ViewUser";
import UserDetails from "../views/User/UserDetails";

import MyOrder from "../views/Order/MyOrder";

import SearchProduct from "../views/SearchProduct";

import Cart from "../views/Cart";

import Checkout from "../views/Checkout";

import NotFound from "../views/NotFound";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "SearchProduct",
    component: SearchProduct,
    props: (route) => ({ query: route.query.keyword }),
  },

  //admin home page
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },

  //show details
  {
    path: "/product/show/:id",
    name: "ShowDetails",
    component: ShowDetails,
  },
  //admin view user list
  {
    path: "/user/admin/user",
    name: "ShowUsers",
    component: ShowUsers,
  },
  //category wise products details page
  {
    path: "/category1/show/:id",
    name: "ListProducts1",
    component: ListProducts1,
  },
  //signup and sigin details
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/forgetpassword",
    name: "ForgetPassword",
    component: ForgetPassword,
  },
  {
    path: "/resetpassword/:token",
    name: "ResetPassword",
    component: ResetPassword,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },

  {
    path: "/admin/dashboard",
    name: "AdminDashboard",
    component: AdminDashboard,
    children: [
      {
        path: "/admin/dashboard/viewprofile",
        name: "ViewProfileAdmin",
        component: ViewProfileAdmin,
      },
      {
        path: "/admin/dashboard/updateprofile",
        name: "UpdateProfile",
        component: UpdateProfile,
      },
      {
        path: "/admin/dashboard/changepassword",
        name: "ChangePassword",
        component: ChangePassword,
      },
      {
        path: "/admin/dashboard/viewproduct",
        name: "ViewProduct",
        component: ViewProduct,
      },
      {
        path: "/admin/dashboard/viewproduct/edit/:id",
        name: "EditProduct1",
        component: EditProduct1,
      },
      {
        path: "/admin/dashboard/addproduct",
        name: "AddProduct1",
        component: AddProduct1,
      },

      {
        path: "/admin/dashboard/viewcategory",
        name: "ViewCategory",
        component: ViewCategory,
      },
      {
        path: "/admin/dashboard/viewcategory/edit/:id",
        name: "EditCategory1",
        component: EditCategory1,
      },
      {
        path: "/admin/dashboard/addcategory",
        name: "AddCategory1",
        component: AddCategory1,
      },
      {
        path: "/admin/dashboard/viewuser",
        name: "ViewUser",
        component: ViewUser,
      },
      {
        path: "/admin/dashboard/viewuser/userdetails/:id",
        name: "UserDetails",
        component: UserDetails,
        props: true,
      },
      {
        path: "/admin/dashboard/vieworder",
        name: "AdminAllOrder",
        component: AdminAllOrder,
      },
    ],
  },
  {
    path: "/user/dashboard",
    name: "UserDashboard",
    component: UserDashboard,
    children: [
      {
        path: "/user/dashboard/viewprofile",
        name: "ViewProfile",
        component: ViewProfile,
      },
      {
        path: "/user/dashboard/updateprofile",
        name: "UserUpdateProfile",
        component: UpdateProfile,
      },
      {
        path: "/user/dashboard/changepassword",
        name: "UserChangePassword",
        component: ChangePassword,
      },
    ],
  },
  //my order
  {
    path: "/user/dashboard/order/my",
    name: "MyOrder",
    component: MyOrder,
  },

  //wrong url
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
