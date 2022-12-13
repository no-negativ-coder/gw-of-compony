import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'

Vue.use(VueRouter)

const routes = [
    {
        name: 'Layout',
        path: '/',
        component: Layout,
        childrens: []
    }
]

const router = new VueRouter({
    routes
})

export default router
