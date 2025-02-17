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
      // intro
      {
        path: "intro",
        name: "intro",
        component: () => import("../pages/introduction/index.vue"),
        meta: {
          title: "Nightmare - Introduction",
        },
      },

      // about me
      {
        path: "about_me",
        name: "aboutme",
        component: () => import("../pages/about_me/index.vue"),
        meta: {
          title: "Nightmare - About me",
        },
      },

      // Articles
      {
        path: "articles",
        name: "articles",
        component: () => import("../pages/articles/index.vue"),
        meta: {
          title: "Nightmare - Articles",
        },
      },
    ],
  },
];

export default userRouter;
