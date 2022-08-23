import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    //SPA에서 HTML 히스토리 생성 아직 무슨뜻인지 잘 모르겠음 #을 지우는 용도로도 이용
    routes:[
    {
        path: '/',
        name: 'OilHome',
        component: () => import ('@/views/OilHome.vue')
    },
    {
        path: '/about',
        name: 'OilAbout',
        component: () => import ('@/views/OilAbout.vue')
    },
    {
        path: '/board/list',
        name: 'BoardList',
        component: () => import ('@/views/OilList.vue')
    },
    {
        path:'/board/detail',
        name: 'BoardDetail',
        component: () => import ('@/views/OilDetail.vue')
    }
]
})

export default router