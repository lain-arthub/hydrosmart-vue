<script setup>
import { ref } from 'vue'

// Active Tab State
const activeTab = ref('General')

// Tab Navigation Options
const tabs = ['General', 'Sensor Calibration', 'Notifications']

// Farm Information Form Data
const farmInfo = ref({
  farmName: 'Madrid Setup 1',
  location: 'Madrid, Surigao del Sur',
  operatorName: 'Eullaine P. Caballero'
})

// System Preferences Form Data
const preferences = ref({
  timezone: 'PST, UTC+8',
  tempUnit: '°C',
  ecUnit: 'mS/cm'
})

// Save Handlers
const saveFarmInfo = () => {
  console.log('Saving Farm Information:', farmInfo.value)
  // Add API call or notification logic here
}

const savePreferences = () => {
  console.log('Saving Preferences:', preferences.value)
  // Add API call or notification logic here
}
</script>

<template>
  <div class="flex-1 p-8 flex flex-col gap-6 bg-gray-100 font-sans text-gray-800">
    <!-- Top Tab Navigation Controls -->
    <div class="flex items-center gap-2">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="activeTab = tab"
        class="px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors"
        :class="activeTab === tab 
          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
          : 'bg-white text-gray-600 hover:bg-gray-50 border border-transparent shadow-sm'"
      >
        {{ tab }}
      </button>
    </div>

    <!-- General Tab Content -->
    <template v-if="activeTab === 'General'">
      <!-- Farm Information Section -->
      <section class="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-5">
        <h2 class="text-sm font-bold text-gray-900 m-0">Farm Information</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <!-- Farm Name Input -->
          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-medium text-gray-500">Farm Name</label>
            <input 
              v-model="farmInfo.farmName"
              type="text" 
              class="border border-gray-200 rounded-lg px-3.5 py-2 text-sm text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
            />
          </div>

          <!-- Location Input -->
          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-medium text-gray-500">Location</label>
            <input 
              v-model="farmInfo.location"
              type="text" 
              class="border border-gray-200 rounded-lg px-3.5 py-2 text-sm text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
            />
          </div>

          <!-- Operator Name Input -->
          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-medium text-gray-500">Operator Name</label>
            <input 
              v-model="farmInfo.operatorName"
              type="text" 
              class="border border-gray-200 rounded-lg px-3.5 py-2 text-sm text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
            />
          </div>
        </div>

        <div class="flex justify-end mt-1">
          <button 
            @click="saveFarmInfo"
            class="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
          >
            Save Farm Info
          </button>
        </div>
      </section>

      <!-- System Preferences Section -->
      <section class="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-5">
        <h2 class="text-sm font-bold text-gray-900 m-0">System Preferences</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <!-- Timezone Dropdown -->
          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-medium text-gray-500">Timezone</label>
            <div class="relative">
              <select 
                v-model="preferences.timezone"
                class="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3.5 py-2 pr-8 text-sm text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm cursor-pointer"
              >
                <option value="PST, UTC+8">PST, UTC+8</option>
                <option value="EST, UTC-5">EST, UTC-5</option>
                <option value="UTC">UTC</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-400">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Temperature Unit Dropdown -->
          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-medium text-gray-500">Temperature Unit</label>
            <div class="relative">
              <select 
                v-model="preferences.tempUnit"
                class="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3.5 py-2 pr-8 text-sm text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm cursor-pointer"
              >
                <option value="°C">°C</option>
                <option value="°F">°F</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-400">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <!-- EC/TDS Unit Dropdown -->
          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-medium text-gray-500">EC/TDS Unit</label>
            <div class="relative">
              <select 
                v-model="preferences.ecUnit"
                class="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3.5 py-2 pr-8 text-sm text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm cursor-pointer"
              >
                <option value="mS/cm">mS/cm</option>
                <option value="PPM">PPM</option>
                <option value="µS/cm">µS/cm</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-400">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-end mt-1">
          <button 
            @click="savePreferences"
            class="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
          >
            Save Preferences
          </button>
        </div>
      </section>
    </template>

    <!-- Placeholder Content for Other Tabs -->
    <div v-else-if="activeTab === 'Sensor Calibration'" class="bg-white rounded-xl p-6 shadow-sm text-sm text-gray-500">
      Sensor Calibration Settings & Controls
    </div>
    <div v-else-if="activeTab === 'Notifications'" class="bg-white rounded-xl p-6 shadow-sm text-sm text-gray-500">
      Notification Channels & Alerts Settings
    </div>
  </div>
</template>