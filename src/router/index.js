import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//搭建路由
const router = new VueRouter({
    mode: 'hash',
    routes: [{
            path: '/',
            redirect: '/pagehome' //默认跳转路径

        },
        {
            path: '/pagehome', //路由级组件
            component: () => import('../views/pagehome/index.vue')

        },
        {
            path: '/plan', //路由级组件
            component: () => import('../views/plan/index.vue')

        },
        {
            path: '/motion', //路由级组件
            component: () => import('../views/motion/index.vue')

        },
        {
            path: '/shopping', //路由级组件
            component: () => import('../views/shopping/index.vue'),
        },
        {
            path: '/child/:id',
            component: () => import('../views/shopping/child.vue'),
        },
        {
            path: '/my', //路由级组件
            component: () => import('../views/my/index.vue')

        },
    ],
    linkActiveClass: 'active'
})

export default router