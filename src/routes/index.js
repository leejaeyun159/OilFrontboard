import { createRouter, createWebHistory } from 'vue-router'
import OilHome from '@/views/OilHome.vue'
import OilAbout from '@/views/OilAbout.vue';
import OilList from '@/views/OilList.vue'
import OilDetail from '@/views/OilDetail.vue';
import OilWrite from '@/views/OilWrite.vue';
import OilLogin from '@/views/OilLogin.vue';

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes:[
    {
        path: '/',
        name: 'OilHome',
        component: OilHome
    },
    {
        path: '/about',
        name: 'OilAbout',
        component: OilAbout
    },
    {
        path: '/board/list',
        name: 'BoardList',
        component: OilList
    },
    {
        path:'/board/detail',
        name: 'BoardDetail',
        component: OilDetail
    },
    {
        path:'/board/write',
        name: 'BoardWrite',
        component: OilWrite
    },
    {
        path:'/login',
        name:'Login',
        component: OilLogin
    }
]
})

export default router