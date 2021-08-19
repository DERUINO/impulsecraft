import Vue from 'vue'
import VueRouter from 'vue-router'
import Servers from '@/views/Servers.vue'
import News from '@/views/News.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'News',
    component: News
  },
  {
    path: '/servers',
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
