import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/demo01',
    children: [
      {
        path: 'demo01',
        component: () => import('@/views/demo01/test01'),
        name: '轨迹恢复-01',
        meta: { title: '轨迹恢复-01', icon: 'dashboard', affix: true }
      },
      {
        path: 'demo02',
        component: () => import('@/views/demo01/test02'),
        name: '轨迹恢复-02',
        meta: { title: '轨迹恢复-02', icon: 'dashboard', affix: true }
      },
      {
        path: 'demo03',
        component: () => import('@/views/demo01/test03'),
        name: '轨迹恢复-03',
        meta: { title: '轨迹恢复-03', icon: 'dashboard', affix: true }
      }
    ]
  }
]


export const asyncRoutes = []

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
