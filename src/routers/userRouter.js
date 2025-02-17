const userRouter = [
  // TRANG CHỦ
  {
    path: "/",
    name: "homepage",
    component: () => import("../layouts/homepage.vue"),
    meta: {
      title: "NIGHTMAREDEV",
    },
  },
];

export default userRouter;
