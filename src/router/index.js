import Vue from 'vue'
import VueRouter from 'vue-router'
import Servers from '@/views/Servers.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Servers',
    component: Servers
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
