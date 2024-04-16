/*
 * @Author: Ada J
 * @Date: 2023-07-11 14:11:00
 * @LastEditTime: 2023-09-22 21:20:07
 * @Description: 
 */
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ListPage from '../views/common-layout/listPage.vue';
import DetailPage from '../views/common-layout/detailPage.vue';
import ProjectPage from '../views/common-layout/projectPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/me',
      name: 'Me',
      component: ListPage
    },
    {
      path: '/project',
      name: 'Project',
      component: ListPage
    },
    {
      path: '/blog',
      name: 'Blog',
      component: ListPage
    },
    {
      path: '/projectTemplate',
      name: 'ProjectTemplate',
      component: ProjectPage
    },
    {
      path: '/detail',
      name: 'Detail',
      component: DetailPage
    },
     
  ]
})

export default router
