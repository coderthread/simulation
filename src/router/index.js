import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Simulation from '../views/simulation/Simulation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/simulation',
    name: 'Simulation',
    component: Simulation
  }
]

const router = new VueRouter({
  routes
})

export default router
