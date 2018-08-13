import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/home',
    component: Layout,
    redirct: './home/index',
    meta: { title: '首页', icon: 'home' },
    name: 'home',
    alwaysShow: true,
    children: [
      {
        path: 'index',
        name: '主页',
        meta: { title: '主页' },
        component: () => import('@/views/home/index')
      },
      {
        path: 'calendar',
        name: 'calendar',
        meta: { title: '跟进日历' },
        component: () => import('@/views/home/calendar')
      },
      {
        path: 'selfPerformance',
        name: 'selfPerformance',
        meta: { title: '个人业绩' },
        component: () => import('@/views/home/selfPerformance')
      },
      {
        path: 'groupPerformance',
        name: 'groupPerformance',
        meta: { title: '组内业绩' },
        component: () => import('@/views/home/groupPerformance')
      }
    ]
  },

  {
    path: '/remind',
    component: Layout,
    redirct: './remind/repository',
    meta: { title: '提醒', icon: 'knowledge' },
    name: 'remind',
    alwaysShow: true,
    children: [
      {
        path: 'config',
        name: 'config',
        meta: { title: '配置表' },
        component: () => import('@/views/remind/config')
      },
      {
        path: 'emailList',
        name: 'emailList',
        meta: { title: '邮件模板列表' },
        component: () => import('@/views/remind/emailList')
      },
      {
        path: 'emailTemplate',
        name: 'emailTemplate',
        meta: { title: '邮件模板' },
        component: () => import('@/views/remind/emailTemplate')
      },
      {
        path: 'emailSend',
        name: 'emailSend',
        meta: { title: '编写邮件' },
        component: () => import('@/views/remind/emailSend')
      },
      {
        path: 'draftBox',
        name: 'draftBox',
        meta: { title: '草稿箱' },
        component: () => import('@/views/remind/draftBox')
      }
    ]
  },

  {
    path: '/work',
    component: Layout,
    redirct: './work/order',
    meta: { title: '工单管理', icon: 'worker' },
    name: 'work',
    alwaysShow: true,
    children: [
      {
        path: 'order',
        name: 'order',
        meta: { title: '工单管理' },
        component: () => import('@/views/work-order/index')
      }
    ]
  },

  {
    path: '/count',
    component: Layout,
    redirct: './count/index',
    meta: { title: '统计报表', icon: 'count' },
    name: 'count',
    alwaysShow: true,
    children: [
      {
        path: 'index',
        name: 'index',
        meta: { title: '统计报表' },
        component: () => import('@/views/count/index')
      }
    ]
  },

  {
    path: '/contract',
    component: Layout,
    redirct: './contract/index',
    meta: { title: '客户合同', icon: 'contract' },
    name: 'contract',
    alwaysShow: true,
    children: [
      {
        path: 'index',
        name: 'contract',
        meta: { title: '客户合同' },
        component: () => import('@/views/contract/index')
      }
    ]
  },

  {
    path: '/produce',
    component: Layout,
    redirct: './produce/service',
    meta: { title: '产品服务', icon: 'produce' },
    name: 'service',
    alwaysShow: true,
    children: [
      {
        path: 'service',
        name: 'service',
        meta: { title: '产品服务' },
        component: () => import('@/views/produce/service')
      }
    ]
  },

  {
    path: '/setting',
    component: Layout,
    redirct: './setting/IM',
    meta: { title: '系统设置', icon: 'setting' },
    name: 'setting',
    alwaysShow: true,
    children: [
      {
        path: 'IM',
        name: 'IM',
        meta: { title: '在线客服' },
        component: () => import('@/views/setting/IM')
      },
      {
        path: 'index',
        name: 'userIM',
        meta: { title: '用户聊天' },
        component: () => import('@/views/setting/index')
      },
      {
        path: 'serviceInfor',
        name: 'serviceInfor',
        meta: { title: '服务信息' },
        component: () => import('@/views/setting/serviceInfor')
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

