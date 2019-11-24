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
          redirect: '/main',
        },
        {
          path: '/main',
          name: 'Main',
          meta: {
            title: '主页',
            keepAlive: true
          },
          component: () => import('@/page/Main')
        },
        {
          path: '/system',
          meta: {
            title: '管理页',
            login: true,
          },
          component: () => import('@/page/admin/System'),
          children: [
            {
              path: '',
              redirect: '/system/user',
            },
            {
              path: '/system/user',
              name: 'User',
              meta: {
                title: '用户管理',
              },
             component: () => import('@/page/admin/User'),
            },
            {
              path: '/system/item',
              name: 'Item',
              meta: {
                title: '科研题目管理',
              },
             component: () => import('@/page/admin/Item'),
            },
          ]
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
          path: '/userinfo/:id',
          name: 'UserInfo',
          meta: {
            title: '教师信息',
          },
          component: () => import('@/page/UserInfo')
        },
        {
          path: '/thesis',
          meta: {
            title: '',
          },
          component: () => import('@/page/Thesis'),
          children: [
            {
              path: '/thesis/add',
              name: 'ThesisAdd',
              meta: {
                title: '发布论文',
                login: true,
              },
              component: () => import('@/components/ThesisAdd'),
            },
            {
              path: '/thesis/edit/:id',
              name: 'ThesisEdit',
              meta: {
                title: '编辑论文',
                login: true,
              },
              component: () => import('@/components/ThesisEdit'),
            },
            {
              path: '/thesis/get/:id',
              name: 'ThesisShow',
              meta: {
                title: '查看论文',
              },
              component: () => import('@/components/ThesisShow'),
            },
          ]
        },
        {
          path: '/item',
          meta: {
            title: ''
          },
          component: () => import('@/page/Item'),
          children: [
            {
              path: '/item/add',
              name: 'itemAdd',
              meta: {
                title: '发布新科研题目',
              },
              component: () => import('@/components/ItemAdd'),
            },
            {
              path: '/item/update/:id',
              name: 'itemUpdate',
              meta: {
                title: '编辑科研题目',
              },
              component: () => import('@/components/ItemEdit'),
            },
            {
              path: '/item/get/:id',
              name: 'ItemShow',
              meta: {
                title: '查看科研题目',
              },
              component: () => import('@/components/ItemShow'),
            },
            {
              path: '/item/apply/get/:id',
              name: 'ItemApply',
              meta: {
                title: '申请人',
              },
              component: () => import('@/components/ItemApply'),
            },
          ]
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
