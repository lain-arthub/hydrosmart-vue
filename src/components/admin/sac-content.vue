<script setup>
import { ref } from 'vue'

// System Alert Notifications Toggle State
const systemAlertNotifications = ref(true)

// System Alerts Data
const systemAlerts = ref([
  {
    id: 1,
    title: 'Cloud Sync Delayed',
    description: 'Madrid Setup 1 · Sync delayed by 5 minutes',
    time: '10:42 AM',
    type: 'sync'
  },
  {
    id: 2,
    title: 'Database Full',
    description: 'Caraga Nursery · Storage at 95% capacity',
    time: '10:30 AM',
    type: 'database'
  },
  {
    id: 3,
    title: 'Database Full',
    description: 'Madrid Setup 1 · Archive older sensor data',
    time: '09:48 AM',
    type: 'database'
  },
  {
    id: 4,
    title: 'Cloud Sync Delayed',
    description: 'Caraga Nursery · Check gateway connection',
    time: '09:15 AM',
    type: 'sync'
  }
])

// Action Handlers
const viewAllAlerts = () => {
  console.log('Navigating to all alerts...')
}

const openSystemConfiguration = () => {
  console.log('Opening system configuration modal/settings...')
}
</script>

<template>
  <div class="flex-1 p-8 flex flex-col bg-gray-100 font-sans text-gray-800">
    <!-- System Alerts & Configuration Card -->
    <div class="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-5 max-w-5xl">
      <!-- Card Header -->
      <div class="flex justify-between items-start">
        <div>
          <h2 class="text-base font-bold text-gray-900 m-0">System Alerts & Configuration</h2>
          <p class="text-gray-400 text-xs mt-0.5">Monitor issues across all connected farms</p>
        </div>
        
        <!-- Alert Count Badge -->
        <span class="w-6 h-6 rounded-full bg-red-100 text-red-500 font-bold text-xs flex items-center justify-center flex-shrink-0">
          {{ systemAlerts.length }}
        </span>
      </div>

      <!-- Alerts Itemized List -->
      <div class="divide-y divide-gray-100">
        <div 
          v-for="alert in systemAlerts" 
          :key="alert.id"
          class="py-3 flex items-center justify-between first:pt-0 last:pb-0"
        >
          <!-- Left Icon & Details -->
          <div class="flex items-center gap-3">
            <!-- Icon Bubble -->
            <div class="w-9 h-9 rounded-lg bg-orange-50 text-orange-400 flex items-center justify-center flex-shrink-0">
              <!-- Sync Icon -->
              <svg v-if="alert.type === 'sync'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636a9 9 0 010 12.728m-12.728 0a9 9 0 010-12.728m12.728 0L17 7m1.364-1.364l-1.414 1.414M5.636 5.636L7 7m-1.364-1.364L7 7" />
              </svg>

              <!-- Database Storage Icon -->
              <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>

            <!-- Title & Description -->
            <div class="flex flex-col">
              <span class="text-xs font-bold text-gray-900 leading-tight">{{ alert.title }}</span>
              <span class="text-[11px] text-gray-400 mt-0.5">{{ alert.description }}</span>
            </div>
          </div>

          <!-- Timestamp -->
          <span class="text-[11px] text-gray-400 font-medium flex-shrink-0 ml-4">
            {{ alert.time }}
          </span>
        </div>
      </div>

      <!-- System Alert Notifications Toggle Box -->
      <div class="bg-gray-50 rounded-xl p-4 flex justify-between items-center mt-1">
        <div class="flex flex-col">
          <span class="text-xs font-bold text-gray-900 leading-tight">System alert notifications</span>
          <span class="text-[11px] text-gray-400 mt-0.5">Email administrators when an issue occurs</span>
        </div>

        <!-- Toggle Switch -->
        <button 
          @click="systemAlertNotifications = !systemAlertNotifications"
          type="button"
          class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
          :class="systemAlertNotifications ? 'bg-emerald-600' : 'bg-gray-300'"
        >
          <span 
            class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
            :class="systemAlertNotifications ? 'translate-x-5' : 'translate-x-0'"
          />
        </button>
      </div>

      <!-- Card Footer Actions -->
      <div class="flex justify-between items-center pt-2">
        <button 
          @click="viewAllAlerts"
          class="text-xs font-semibold text-emerald-600 hover:underline"
        >
          View all alerts
        </button>

        <button 
          @click="openSystemConfiguration"
          class="flex items-center gap-1.5 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm transition-colors"
        >
          <svg class="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          System Configuration
        </button>
      </div>
    </div>
  </div>
</template>