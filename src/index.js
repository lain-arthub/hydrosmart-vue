import { createRouter, createWebHistory } from 'vue-router'
import CreateAccount from './pages/CreateAccount.vue';
import Login from './pages/Login.vue';
import ForgotPassword from './pages/ForgotPassword.vue';

import HomeDashboard from './pages/HomeDashboard.vue';
// 1. Define your route rules
const routes = [
  {
    path: '/',
    name: 'login-page',
    component: Login,
  },
  {
    path: '/create-acc',
    name: 'create-acc',
    component: CreateAccount,
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPassword,
  },

  {
    path: '/home-dashboard',
    name: 'home-dashboard',
    component: HomeDashboard,
  },

]

// 3. Create the router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
