<script setup>
import { ref } from 'vue'

// Farms Data
const farms = ref([
  {
    id: 1,
    name: 'Madrid Setup 1',
    location: 'Madrid',
    connectedDevices: 4
  },
  {
    id: 2,
    name: 'Caraga Nursery',
    location: 'Caraga',
    connectedDevices: 8
  }
])

// Handlers
const openFarmConfig = (farm) => {
  console.log('Opening config for farm:', farm.name)
}

const toggleMapView = () => {
  console.log('Toggling Map View')
}
</script>

<template>
  <div class="flex-1 p-8 flex flex-col bg-gray-100 font-sans text-gray-800">
    <!-- Farm Management Card -->
    <div class="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-5 max-w-5xl">
      <!-- Card Header -->
      <div class="flex justify-between items-start">
        <div>
          <h2 class="text-base font-bold text-gray-900 m-0">Farm Management</h2>
          <p class="text-gray-400 text-xs mt-0.5">Connected farms and device settings</p>
        </div>
        <button class="text-emerald-600 hover:text-emerald-700 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Subheader Status Badge & Map Link -->
      <div class="flex justify-between items-center">
        <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
          {{ farms.length }} farms connected
        </span>

        <button 
          @click="toggleMapView" 
          class="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:underline"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Map view
        </button>
      </div>

      <!-- Farms List -->
      <div class="divide-y divide-gray-100">
        <div 
          v-for="farm in farms" 
          :key="farm.id" 
          class="py-3.5 flex items-center justify-between first:pt-0 last:pb-0"
        >
          <!-- Left Icon & Farm Info -->
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-lg bg-emerald-100/70 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <div class="flex flex-col">
              <span class="text-xs font-bold text-gray-900 leading-tight">{{ farm.name }}</span>
              <span class="text-[11px] text-gray-400 mt-0.5">
                {{ farm.location }} · {{ farm.connectedDevices }} connected devices
              </span>
            </div>
          </div>

          <!-- Farm Config Action Button -->
          <button 
            @click="openFarmConfig(farm)"
            class="flex items-center gap-1.5 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm transition-colors"
          >
            <svg class="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            Farm Config
          </button>
        </div>
      </div>

      <!-- Card Footer -->
      <div class="pt-2 border-t border-gray-100 text-[11px] text-gray-400">
        All devices synced · Last checked just now
      </div>
    </div>
  </div>
</template>