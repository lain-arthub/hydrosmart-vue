<script setup>
import { ref } from 'vue'
import logo from "../assets/HydroSmart.png"

const props = defineProps({
  title: {
    type: String,
    default: 'Dashboard Overview'
  },
  subtitle: {
    type: String,
    default: 'Monitor your hydroponic system in real time'
  },
  userName: {
    type: String,
    default: 'Eullaine C.'
  },
  userInitials: {
    type: String,
    default: 'EC'
  }
})

const activeTab = ref('Dashboard')

const navigation = [
  { 
    name: 'User Management', 
    icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z', 
    route: "/admin/um-content" 
  },
  { 
    name: 'Farm Management', 
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', 
    route: "/admin/fm-content" 
  },
  { 
    name: 'Audit Logs', 
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9', 
    route: "/admin/audit-content" 
  },
  { 
    name: 'System Alerts & Configuration', 
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 010 4m-6 8a2 2 0 100-4m0 4a2 2 0 010-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 010-4m0 4v2m0-6V4', 
    route: "/admin/sac-content"
  },
 
]
</script>

<template>
  <div class="flex h-screen bg-[#f3f4f6]">
    <!-- Dark Green Sidebar -->
    <aside class="w-56 bg-[#09412f] text-white flex flex-col justify-between p-4 flex-shrink-0">
      <div>
        <!-- HydroSmart Brand Logo -->
        <div class="flex items-center space-x-2.5 px-2 py-3 mb-6">
            <div class="w-9 h-9 rounded-full bg-[#136148] flex items-center justify-center p-1.5">
                <img :src="logo" /> 
            </div>
          <span class="font-bold text-lg tracking-tight text-white">HydroSmart</span>
        </div>

        <!-- Navigation Menu Links -->
        <nav class="space-y-1.5">
          <RouterLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.route"
            @click.prevent="activeTab = item.name"
            :class="[
              activeTab === item.name
                ? 'bg-white text-[#09412f] font-semibold'
                : 'text-gray-300 hover:bg-[#136148]/60 hover:text-white',
              'flex items-center space-x-3 px-3 py-2.5 rounded-lg text-xs transition-colors duration-150'
            ]"
          >
            <svg class="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon" />
            </svg>
            <span>{{ item.name }}</span>
          </RouterLink>
        </nav>
      </div>

      <!-- Logout Option -->
      <div class="pt-4 border-t border-[#136148]">
        <RouterLink
          to="/"
          class="flex items-center space-x-3 px-3 py-2 rounded-lg text-xs text-gray-300 hover:bg-[#136148]/60 hover:text-white transition-colors duration-150"
        > 
    
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span>Logout</span>
         </RouterLink>
      </div>
    </aside>

    <!-- Main Content Container -->
    <div class="flex-1 flex flex-col overflow-y-auto">
      <!-- Top Bar Header -->
      <header class="bg-white border-b border-gray-100 px-8 py-5 flex items-center justify-between">
        <div>
          <h1 class="text-xl font-bold text-gray-900 leading-tight">{{ title }}</h1>
          <p class="text-xs text-gray-400 mt-0.5">{{ subtitle }}</p>
        </div>

        <!-- User Profile Pill -->
        <div class="flex items-center space-x-2">
          <div class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold flex items-center justify-center">
            {{ userInitials }}
          </div>
          <span class="text-xs font-semibold text-gray-800">{{ userName }}</span>
        </div>
      </header>

      <!-- Page Content Slot -->
      <main class="flex-1 p-8">
        <slot />
      </main>
    </div>
  </div>
</template>