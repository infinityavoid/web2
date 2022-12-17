import { createRouter,createWebHistory } from 'vue-router'
import Main from '../components/auto-wrapper.vue'
import Orders from '../components/auto-orders.vue'

 const router = createRouter({
    history: createWebHistory(),
    routes:[
    {
        path:'/',
        component: Main
    },
    {
        path:'/Orders',
        component: Orders
    }
]

    }
)
export default router