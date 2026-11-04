import { createRouter, createWebHistory } from 'vue-router'
import CreateAccount from './pages/CreateAccount.vue';
import Login from './pages/Login.vue';
import ForgotPassword from './pages/ForgotPassword.vue';

import HomeDashboard from './pages/HomeDashboard.vue';
import Analytics from './pages/Analytics.vue';
import AlertsPage from './pages/AlertsPage.vue';
import ControlPage from './pages/ControlPage.vue';
import SettingsPage from './pages/SettingsPage.vue';

import UserManagement from './pages/Admin/UserManagement.vue';
import FarmManagement from './pages/Admin/FarmManagement.vue';
import AuditLogs from './pages/Admin/AuditLogs.vue';
import SystemAlerts from './pages/Admin/SystemAlerts.vue';
import AddUserContent from './components/admin/user-management/add-user-content.vue';
import AddUser from './pages/Admin/UserManagementCont/AddUser.vue';

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

  {
    path: '/analytics',
    name: 'analytics',
    component: Analytics,
  },
  
  {
    path: '/alerts-page',
    name: 'alerts-page',
    component: AlertsPage,
  },
  
  {
    path: '/control-page',
    name: 'control-page',
    component: ControlPage,
  },

  {
    path: '/settings-page',
    name: 'settings-page',
    component: SettingsPage,
  },

  {
    path: '/admin/um-content',
    name: 'um-content',
    component: UserManagement,
  },

  {
    path: '/admin/fm-content',
    name: 'fm-content',
    component: FarmManagement,
  },

  {
    path: '/admin/audit-content',
    name: 'audit-content',
    component: AuditLogs,
  },

  {
    path: '/admin/sac-content',
    name: 'sac-content',
    component: SystemAlerts,
  },

  {
    path: '/admin/user-management/add-user-content',
    name: 'add-user-content',
    component: AddUser,
  },



]

// 3. Create the router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
