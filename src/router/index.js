import Vue from 'vue';
import VueRouter from 'vue-router';
import { DefaultLayout, NoSidebarLayout } from '@/lib/config';
import { mainPage, homePage, authPage, catalogPage } from '@/lib/routing';

Vue.use(VueRouter);

const routes = [
  {
    path: homePage(),
    name: 'Home',
    meta: { layout: NoSidebarLayout },
    component: () => import(/* webpackChunkName: "home" */ '../views/HomePage')
  },
  {
    path: authPage(),
    name: 'Auth',
    meta: { layout: NoSidebarLayout },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "auth" */ '../views/AuthPage')
  },
  {
    path: mainPage(),
    name: 'MainPage',
    meta: { layout: DefaultLayout },
    component: () => import(/* webpackChunkName: "main" */ '../views/MainPage')
  },
  {
    path: catalogPage(),
    name: 'CatalogPage',
    meta: { layout: DefaultLayout },
    component: () =>
      import(/* webpackChunkName: "catalog" */ '../views/CatalogPage')
  },
  {
    path: '*',
    name: 'NotPage',
    meta: { layout: NoSidebarLayout },
    component: () => import(/* webpackChunkName: "404" */ '../views/NotPage')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
