import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import CreateReview from "../views/CreateReview"
import ShowReview from "../views/ShowReview"
import EditReview from "../views/EditReview"
import store from '../store/index'

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
    path: "/reviews/:reviewId/view",
    name: "showReview",
    component: ShowReview,
    props: true,
    meta: {
      isAuth: true,
    }
  },
  {
    path: "/reviews/:reviewId/edit",
    name: "editReview",
    component: EditReview,
    props: true,
    meta: {
      isAuth: true,
    }
  },
  {
    path: "/reviews/create",
    name: "create-review",
    component: CreateReview,
    meta: {
      isAuth: true,
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


router.beforeEach((to, from, next) => {
  let profile = store.state.profile
  const requiresAuth = to.matched.some(record => record.meta.isAuth)

  if (requiresAuth && !profile) {
    store.dispatch('getProfile').then(() => {
      next()
    }).catch(() => {
      next({ name: "login" })
    })
  } else {
    next()
  }
})

export default router;
