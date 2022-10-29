import Home from "@/views/Home.vue";
import { createAuthGuard } from "@auth0/auth0-vue";
import { App } from 'vue';
import { createRouter as createVueRouter, createWebHashHistory, Router } from "vue-router";
import About from "../views/AboutOwner.vue";
import createSeller from "../views/createSeller.vue";
import Profile from "../views/Profile.vue";
import SellerHome from "../views/SellerHomePage.vue";

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
      },
      {
        path: "/profile/createSellerPage",
        name: "createSeller",
        component: createSeller
      }
    ],
    history: createWebHashHistory()
  })
}
