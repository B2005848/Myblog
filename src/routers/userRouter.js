const userRouter = [
  // TRANG CHỦ
  {
    path: "/",
    name: "homepage",
    component: () => import("../layouts/homepage.vue"),
    meta: {
      title: "Nightmare - my blog",
    },
    redirect: "/intro",
    children: [
      {
        path: "intro",
        name: "intro",
        component: () => import("../pages/introduction/index.vue"),
        meta: {
          title: "Nightmare - introduction",
        },
      },
    ],
  },
];

export default userRouter;
