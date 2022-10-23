import { createRouter as createVueRouter, createWebHashHistory, Router } from "vue-router";
import Home from "@/views/Home.vue";
import Profile from "../views/Profile.vue";
import About from "../views/AboutOwner.vue";
import SellerHome from "../views/SellerHomePage.vue";
import { createAuthGuard } from "@auth0/auth0-vue";
import { App } from 'vue';

export function createRouter(app: App): Router {
  return createVueRouter({
    routes: [
      {
        path: "/",
        name: "home",
        component: Home
      },
      {
        path: "/profile",
        name: "profile",
        component: Profile,
        beforeEnter: createAuthGuard(app)
      },
      {
        path: "/about",
        name: "about",
        component: About
      },
      {
        path: "/sellerPage/:SId",
        name: "sellerPage",
        component: SellerHome
      }
    ],
    history: createWebHashHistory()
  })
}
