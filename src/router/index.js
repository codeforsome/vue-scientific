import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      meta: {
        title: '主页'
      },
      component: () => import('@/page/Home'),
      children: [
        {
          path: '',
          redirect: '/main'
        },
        {
          path: '/my',
          name: 'My',
          meta: {
            title: '我的个人',
            login: true,
          },
          component: () => import('@/page/My')
        },
        {
          path: '/main',
          name: 'Main',
          meta: {
            title: '主页'
          },
          component: () => import('@/page/Main')
        },
        {
          path: '/api/login/out',
          name: 'Out',
          meta: {
            title: '退出',
            login: true,
          },
          component: () => import('@/page/Main')
        }
      ]
    },
    {
      path: '/register',
      name: 'Register',
      meta: {
        title: '注册'
      },
      component: () => import('@/page/Register')
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        title: '登陆'
      },
      component: () => import('@/page/Login')
    },

  ],
  mode: 'history',
})
