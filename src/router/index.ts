import { createRouter, createWebHistory } from 'vue-router'
import { isMicroApp } from '@/helper'
import { createRouterGuards } from './guards'
import Home from '@/views/main/Home.vue'

const BASE_URL = isMicroApp() ? '/app/new-icu' : '/micro/app-iwb-ccis-nurse'

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/home',
      component: Home,
      name: 'home',
      redirect: '/home/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/views/main/dashboard/Dashboard.vue'),
          meta: {
            group: 'dashboard',
            groupTitle: '仪表盘',
            title: '仪表盘',
          },
        },
        {
          path: 'business-opportunities',
          name: 'business-opportunities',
          component: () =>
            import(
              '@/views/main/business-opportunities/BusinessOpportunities.vue'
            ),
          meta: {
            group: 'business-opportunities',
            groupTitle: '商机',
            title: '商机',
          },
        },
        {
          path: 'contract',
          name: 'contract',
          component: () => import('@/views/main/contract/Contract.vue'),
          meta: {
            group: 'contract',
            groupTitle: '合同',
            title: '合同',
          },
        },
        {
          path: 'customer',
          name: 'customer',
          component: () => import('@/views/main/customer/Customer.vue'),
          meta: {
            group: 'customer',
            groupTitle: '客户',
            title: '客户',
          },
        },
        {
          path: 'contact', // 联系人
          name: 'contact',
          component: () => import('@/views/main/contact/Contact.vue'),
          meta: {
            group: 'contact',
            groupTitle: '联系人',
            title: '联系人',
          },
        },
        {
          path: 'purchase',
          name: 'purchase',
          component: () => import('@/views/main/purchase/Purchase.vue'),
          meta: {
            group: 'purchase',
            groupTitle: '采购',
            title: '采购',
          },
        },
        {
          path: 'clue',
          name: 'clue',
          component: () => import('@/views/main/clue/Clue.vue'),
          meta: {
            group: 'clue',
            groupTitle: '线索',
            title: '线索',
          },
        },
        {
          path: 'todo-list',
          name: 'todo-list',
          component: () => import('@/views/main/todo-list/TodoList.vue'),
          meta: {
            group: 'todo-list',
            groupTitle: '待办事项',
            title: '待办事项',
          },
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/Login.vue'),
      meta: {
        excludeAuth: false,
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/not-found/NotFound.vue'),
    },
  ],
})

createRouterGuards(router)

export default router
