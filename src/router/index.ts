import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import TinymceTemp from '../views/temp/tinymcetemp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    }, 
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          meta: {
            title: '系统首页',
            permiss: 1
          },
          component: () => import("../views/dashboard.vue")
        },{
          path: '/addknowledge',
          name: 'addknowledge',
          meta: {
            title: '添加知识点',
            permiss: 1
          },
          component: () => import("../views/addKnowledge.vue")
        },{
          path: '/knowledgeList',
          name:'knowledgeList',
          meta: {
            title: '所有知识点',
            permission: 1
          },
          component: () => import('../views/knowledgeList.vue')
        }
      ]
    },
    {
      path:'/tinymcetemp',
      name:'tinymcetemp',
      component: TinymceTemp
    }
  ]
})

export default router
