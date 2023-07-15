/** @format */

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { userModule } from "../store/modules/user";
// import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/basket",
    meta: { auth: true },
    name: "Basket",
    component: () => import("../views/Basket.vue"),
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: () => import("../views/Catalog.vue"),
  },
  {
    path: "/product/:id",
    name: "Product",
    component: () => import("../views/Product.vue"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("../views/Contacts.vue"),
  },
  {
    path: "/office",
    meta: { auth: true },
    name: "Office",
    component: () => import("../views/Office.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/registration",
    name: "Registration",
    component: () => import("../views/Registration.vue"),
  },
  {
    path: "/design",
    name: "UploadDesign",
    component: () => import("../views/UploadDesign.vue"),
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: () => import("../views/Blogs.vue"),
  },
  {
    path: "/blog/:id",
    name: "FullBlog",
    component: () => import("../views/FullBlog.vue"),
  },
  {
    path: "/news",
    name: "News",
    component: () => import("../views/News.vue"),
  },
  {
    path: "/news/:id",
    name: "FullNews",
    component: () => import("../views/FullNews.vue"),
  },
  {
    path: "/recovery",
    name: "Recovery",
    component: () => import("../views/Recovery.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/Search.vue"),
  },
  {
    path: "/payment",
    name: "Payment",
    component: () => import("../views/Payment.vue"),
  },
  {
    path: "/confidentially",
    name: "Confidentially",
    component: () => import("../views/Confidentially.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  let isAuth = null;
  if (Vue.cookie.get("token")) {
    isAuth = true;
  }
  const currentUser = userModule.state().isUserAuth;

  const requiredAuth = to.matched.some((record) => record.meta.auth);
  // console.log(currentUser, requiredAuth);
  if (requiredAuth && !currentUser && !isAuth) {
    next("/login");
  } else {
    next();
  }
});

export default router;
