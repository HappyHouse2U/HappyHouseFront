import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AptListView from "../views/AptListView.vue";
import RegListView from "../views/RegListView.vue";
import NewsListView from "../views/NewsListView.vue";
import BoardView from "../views/BoardView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/board",
    name: "board",
    component: BoardView,
  },
  {
    path: "/history/reg",
    name: "reg",
    component: RegListView,
  },
  {
    path: "/history/apt",
    name: "apt",
    component: AptListView,
  },
  {
    path: "/news",
    name: "news",
    component: NewsListView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
