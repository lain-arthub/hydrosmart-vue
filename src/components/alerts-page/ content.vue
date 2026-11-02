<script setup>
import { ref, computed } from 'vue'

// Filters state
const selectedSeverity = ref('All')
const selectedStatus = ref('All')
const selectedDateRange = ref('All')

// Alerts list state
const alerts = ref([
  {
    id: 1,
    timestamp: 'Oct 25, 11:15 AM',
    title: 'Critical pH Level Drift: 5.5',
    details: 'Details: Root zone acidity has dropped below safe margin (Target: 6.0 - 6.5)',
    severity: 'CRITICAL',
    status: 'unacknowledged'
  },
  {
    id: 2,
    timestamp: 'Oct 25, 11:08 AM',
    title: 'Nutrient Concentration Low: 1.2 EC',
    details: 'Details: EC content detected below threshold. Dosing solution formulation scheduled.',
    severity: 'WARNING',
    status: 'unacknowledged'
  },
  {
    id: 3,
    timestamp: 'Oct 25, 10:45 AM',
    title: 'High Temperature Warning: 28.5 °C',
    details: 'Details: Water temp exceeds maximum safe threshold in secondary tank reservoir.',
    severity: 'WARNING',
    status: 'unacknowledged'
  },
  {
    id: 4,
    timestamp: 'Oct 25, 08:30 AM',
    title: 'Water Level Low: Chamber 3',
    details: 'Details: Liquid sensors registered level drop. Sump cycle automation triggered.',
    severity: 'WARNING',
    status: 'unacknowledged'
  }
])

// Acknowledge handler
const acknowledgeAlert = (id) => {
  const alert = alerts.value.find(item => item.id === id)
  if (alert) {
    alert.status = 'acknowledged'
  }
}

// Filtered alerts computed property
const filteredAlerts = computed(() => {
  return alerts.value.filter(alert => {
    const matchesSeverity = selectedSeverity.value === 'All' || alert.severity === selectedSeverity.value
    const matchesStatus = selectedStatus.value === 'All' || alert.status === selectedStatus.value.toLowerCase()
    return matchesSeverity && matchesStatus
  })
})
</script>

<template>
  <div class="flex-1 p-8 flex flex-col gap-6 bg-gray-100 font-sans text-gray-800">
    <!-- Action Controls Bar -->
    <div class="flex justify-between items-center">
      <!-- Filter Controls Group -->
      <div class="flex items-center gap-3">
        <!-- Severity Filter -->
        <div class="relative">
          <select 
            v-model="selectedSeverity"
            class="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
          >
            <option value="All">Severity</option>
            <option value="CRITICAL">Critical</option>
            <option value="WARNING">Warning</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <!-- Status Filter -->
        <div class="relative">
          <select 
            v-model="selectedStatus"
            class="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
          >
            <option value="All">Status</option>
            <option value="Unacknowledged">Unacknowledged</option>
            <option value="Acknowledged">Acknowledged</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <!-- Date Range Filter -->
        <div class="relative">
          <select 
            v-model="selectedDateRange"
            class="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
          >
            <option value="All">Date Range</option>
            <option value="Today">Today</option>
            <option value="7days">Past 7 Days</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Alert Configuration Button -->
      <button class="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Alert Configuration
      </button>
    </div>

    <!-- Alerts List -->
    <div class="flex flex-col gap-4">
      <div 
        v-for="alert in filteredAlerts" 
        :key="alert.id"
        class="bg-white rounded-xl p-5 shadow-sm flex items-center justify-between transition-opacity"
        :class="{ 'opacity-60': alert.status === 'acknowledged' }"
      >
        <!-- Left Item Details -->
        <div class="flex items-center gap-6">
          <span class="text-xs text-gray-400 font-medium w-28 flex-shrink-0">{{ alert.timestamp }}</span>
          
          <!-- Icon Bubble -->
          <div 
            class="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
            :class="alert.severity === 'CRITICAL' ? 'bg-red-100 text-red-500' : 'bg-amber-100 text-amber-500'"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>

          <!-- Alert Text content -->
          <div class="flex flex-col gap-0.5">
            <h3 class="text-sm font-bold text-gray-900 m-0 leading-tight">{{ alert.title }}</h3>
            <div class="flex items-center gap-1 text-xs text-emerald-600 font-medium">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
              <span>{{ alert.details }}</span>
            </div>
          </div>
        </div>

        <!-- Right Controls -->
        <div class="flex items-center gap-4 flex-shrink-0">
          <!-- Severity Badge -->
          <span 
            class="px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide"
            :class="alert.severity === 'CRITICAL' 
              ? 'bg-red-100 text-red-500' 
              : 'bg-amber-100 text-amber-600'"
          >
            • {{ alert.severity }}
          </span>

          <!-- Acknowledge Action Button -->
          <button 
            @click="acknowledgeAlert(alert.id)"
            :disabled="alert.status === 'acknowledged'"
            class="border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-semibold px-3.5 py-1.5 rounded-lg shadow-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ alert.status === 'acknowledged' ? 'Acknowledged' : 'Acknowledge' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>