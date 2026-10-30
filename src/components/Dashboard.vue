<script setup>
import { ref } from 'vue'

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
    default: 'Eulaine C.'
  },
  userInitials: {
    type: String,
    default: 'EC'
  }
})

const activeTab = ref('Dashboard')

const navigation = [
  { name: 'Dashboard', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
  { name: 'Analytics', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
  { name: 'Alerts', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' },
  { name: 'System Control', icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 010 4m-6 8a2 2 0 100-4m0 4a2 2 0 010-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 010-4m0 4v2m0-6V4' },
  { name: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
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
            <svg class="w-full h-full text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v12m-4-8c0 4.418 3.582 8 8 8m-8-8a8 8 0 008 8" />
            </svg>
          </div>
          <span class="font-bold text-lg tracking-tight text-white">HydroSmart</span>
        </div>

        <!-- Navigation Menu Links -->
        <nav class="space-y-1.5">
          <a
            v-for="item in navigation"
            :key="item.name"
            href="#"
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
          </a>
        </nav>
      </div>

      <!-- Logout Option -->
      <div class="pt-4 border-t border-[#136148]">
        <a
          href="#"
          class="flex items-center space-x-3 px-3 py-2 rounded-lg text-xs text-gray-300 hover:bg-[#136148]/60 hover:text-white transition-colors duration-150"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span>Logout</span>
        </a>
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