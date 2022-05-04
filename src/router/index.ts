/*
 * @Author: your name
 * @Date: 2022-03-04 16:30:15
 * @LastEditTime: 2022-04-27 16:26:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /viteVue3Demo/src/router/index.ts
 */
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "redirect",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import('@views/home/index.vue')
  },
  {
    path: "/catchPage",
    name: "catchPage",
    component: () => import('@views/catchPage/index.vue')
  },
  {
    path: "/elementUiPages",
    name: "elementUiPages",
    redirect: "button",
    component: () => import('@views/elementUiPages/index.vue'),
    meta: {title: "element"},
    //  子路由path不用写  /
    children: [
      {
        path: "button",
        name: "button",
        component: () => import('@views/elementUiPages/button.vue')
      },
      {
        path: "table",
        name: "table",
        component: () => import('@views/elementUiPages/table.vue')
      }
    ]
  },
  { path: '/:pathMatch(.*)', component: () => import('@views/404/index.vue')  }
  // { // 4.0 之前的语法
  //   path: '*',
  //   component: () => import('@views/404/index.vue') 
  // }
]

// 在 Vue-router新版本中，需要使用createRouter来创建路由
console.log(createWebHashHistory('history'), "createWebHashHistory('history')");

const router = createRouter({
  // createWebHistory
  // history: createWebHashHistory(),
  // history 模式下要写 base 属性
  history: createWebHistory('historypage'),
  routes
})

export default router;