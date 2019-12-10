import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'

Vue.use(Router)

let router = new Router({
  routes: [{
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index,
      children: [{
        path: '/',
        name: '首页',
        component: resolve => require(['../components/menus/HomePage.vue'], resolve)
      }]
    },
    {
      name: '登录',
      path: '/login',
      component: resolve => require(['../components/menus/Login.vue'], resolve)
    },
  ],

})
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (sessionStorage.getItem('author_id')) {
      next()
    } else {
      next({
        path: '/login'
      });
    }
  } else {
    next()
  }
});


export default router
