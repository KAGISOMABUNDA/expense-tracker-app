import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import UserRegister from '../views/UserRegister.vue';
import UserLogin from '../views/UserLogin.vue';
const routes: Array<RouteRecordRaw> = [
 
  {
    path: '/',
    redirect: '/register'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/register',
    name: 'Register',
    component: UserRegister
  },
  {
    path: '/login',
    name: 'Login',
    component: UserLogin
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
