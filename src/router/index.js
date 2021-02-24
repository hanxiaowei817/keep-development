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
        component: () => import('../views/pagehome/index.vue'),
        redirect: '/pagehome/recommend', //默认跳转路径
        children: [
            //二级路由 推荐
            {
                path: 'recommend',
                component: () => import('../views/pagehome/recommend/index.vue')
            },
            //二级路由 会员
            {
                path: 'member',
                component: () => import('../views/pagehome/member/index.vue')
            }
        ]

    },
    {
        path: '/plan', //路由级组件
        component: () => import('../views/plan/index.vue')

    },{
        path: '/information', //路由级组件
        component: () => import('../views/plan/information.vue')

    },
    
     // 社区
     {
        path: '/motion', //路由级组件
        component: () =>
            import ('../views/motion/motionone/index.vue'),
        // 运动二级路由
        children: []
    },
    // 好友搜索
    {
        path: '/appfriends',
        // redirect: '/motion',
        component: () =>
            import ('../views/motion/appfriends/index.vue')
    },
    // 搜索框
    {
        path: '/searchBox',
        // redirect: '/motion',
        component: () =>
            import ('../views/motion/searchBox/index.vue')
    },

    {
        path: '/shopping', //路由级组件
        component: () => import('../views/shopping/index.vue'),
    },
    {
        path: '/cart1', //路由级组件
        component: () => import('../views/shopping/cart1.vue'),
    },
    {
        path: '/child/:id',
        component: () => import('../views/shopping/child.vue'),
    },
    {
        path: '/my', //路由级组件
        component: () => import('../views/my/index.vue'),
    },
    {
        path: '/register', //路由级组件
        component: () => import('../views/my/register.vue'),
    },
    ],
    linkActiveClass: 'active'
})

export default router