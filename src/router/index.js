import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import CreateReview from "../views/CreateReview"
import localStorage from '../services/localStorage';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      isAuth: true,
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/reviews/create",
    name: "create-review",
    component: CreateReview
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


router.beforeEach((to, from, next) => {
  let token = localStorage.getToken()
  const requiresAuth = to.matched.some(record => record.meta.isAuth)

  if (requiresAuth && !token) {
    next({ name: "login" })
  } else {
    next()
  }
})

export default router;
