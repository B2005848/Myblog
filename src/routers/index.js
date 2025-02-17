import { createRouter, createWebHashHistory } from "vue-router";
import userRouter from "./userRouter.js";
import PageNotFound from "@/pages/404page_not_found/index.vue";
const routes = [
  ...userRouter,
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: PageNotFound,
    meta: {
      title: "404 - Page Not Found",
    },
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta?.title ?? "No title page!!!";
  next();
});
export default router;
