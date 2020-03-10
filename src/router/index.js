import Vue from 'vue';
import VueRouter from 'vue-router';
import { DefaultLayout, NoSidebarLayout } from '@/config';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: DefaultLayout },
    component: () => import(/* webpackChunkName: "home" */ '../views/HomePage')
  },
  {
    path: '/auth',
    name: 'Auth',
    meta: { layout: NoSidebarLayout },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "auth" */ '../views/AuthPage')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
