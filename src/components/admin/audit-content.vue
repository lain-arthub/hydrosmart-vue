<script setup>
import { ref } from 'vue'

// Audit Logs Data
const auditLogs = ref([
  {
    id: 1,
    title: 'Administrative Action (entered)',
    description: 'Eullaine P. signed in to the administration portal',
    timeAgo: '7 hours ago',
    type: 'login'
  },
  {
    id: 2,
    title: 'Administrative Action (disabled)',
    description: 'Super Admin suspended access for Caraga Nursery',
    timeAgo: '7 hours ago',
    type: 'user'
  },
  {
    id: 3,
    title: 'Farm Configuration (updated)',
    description: 'Super Admin updated Madrid Setup 1 device settings',
    timeAgo: '8 hours ago',
    type: 'config'
  }
])

// Handlers
const exportLogs = () => {
  console.log('Exporting audit logs...')
}

const viewAllHistory = () => {
  console.log('Viewing all history...')
}
</script>

<template>
  <div class="flex-1 p-8 flex flex-col bg-gray-100 font-sans text-gray-800">
    <!-- Audit Logs Card -->
    <div class="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-5 max-w-5xl">
      <!-- Card Header -->
      <div class="flex justify-between items-start">
        <div>
          <h2 class="text-base font-bold text-gray-900 m-0">Audit Logs</h2>
          <p class="text-gray-400 text-xs mt-0.5">Recent history of administrative activity</p>
        </div>
        
        <!-- Export Logs Button -->
        <button 
          @click="exportLogs"
          class="flex items-center gap-1.5 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm transition-colors"
        >
          <svg class="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Export Logs
        </button>
      </div>

      <!-- Audit Logs List -->
      <div class="divide-y divide-gray-100">
        <div 
          v-for="log in auditLogs" 
          :key="log.id" 
          class="py-3.5 flex items-center justify-between first:pt-0 last:pb-0"
        >
          <!-- Left Icon & Activity Details -->
          <div class="flex items-center gap-3">
            <!-- Dynamic Icon Container -->
            <div class="w-9 h-9 rounded-lg bg-emerald-100/70 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <!-- Login Icon -->
              <svg v-if="log.type === 'login'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>

              <!-- User Action Icon -->
              <svg v-else-if="log.type === 'user'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>

              <!-- Configuration Icon -->
              <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>

            <!-- Title & Description -->
            <div class="flex flex-col">
              <span class="text-xs font-bold text-gray-900 leading-tight">{{ log.title }}</span>
              <span class="text-[11px] text-gray-400 mt-0.5">{{ log.description }}</span>
            </div>
          </div>

          <!-- Time Ago -->
          <span class="text-[11px] text-gray-400 font-medium flex-shrink-0 ml-4">
            {{ log.timeAgo }}
          </span>
        </div>
      </div>

      <!-- Card Footer -->
      <div class="pt-3 border-t border-gray-100 flex justify-between items-center text-[11px]">
        <span class="text-gray-400">Activity retained for the last 30 days</span>
        <button 
          @click="viewAllHistory" 
          class="font-semibold text-emerald-600 hover:underline"
        >
          View all history
        </button>
      </div>
    </div>
  </div>
</template>