import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "redirect",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import('@views/Home/index.vue')
  }
]

// 在 Vue-router新版本中，需要使用createRouter来创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;