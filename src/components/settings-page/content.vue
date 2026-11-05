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
    <div v-else-if="activeTab === 'Sensor Calibration'" class="flex flex-col gap-6">
      <!-- Top Grid: Calibration Forms -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <!-- pH Sensor Calibration Card -->
        <div class="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between gap-4">
          <div>
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-sm font-bold text-gray-900 m-0">pH Sensor Calibration</h2>
              <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                SENSORS OK
              </span>
            </div>

            <div class="grid grid-cols-3 gap-3 mb-3">
              <!-- Current Raw Voltage -->
              <div class="flex flex-col gap-1">
                <label class="text-[11px] font-medium text-gray-500">Current Raw Voltage</label>
                <div class="relative">
                  <input 
                    type="text" 
                    value="412.8" 
                    readonly 
                    class="w-full border border-gray-200 bg-gray-50/50 rounded-lg pl-3 pr-8 py-1.5 text-xs font-semibold text-gray-700 focus:outline-none"
                  />
                  <span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 font-medium">mV</span>
                </div>
              </div>

              <!-- Live pH Value -->
              <div class="flex flex-col gap-1">
                <label class="text-[11px] font-medium text-gray-500">Live pH Value</label>
                <div class="relative">
                  <input 
                    type="text" 
                    value="6.82" 
                    readonly 
                    class="w-full border border-gray-200 bg-gray-50/50 rounded-lg pl-3 pr-8 py-1.5 text-xs font-semibold text-gray-700 focus:outline-none"
                  />
                  <span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 font-medium">pH</span>
                </div>
              </div>

              <!-- Calibration Buffer Point -->
              <div class="flex flex-col gap-1">
                <label class="text-[11px] font-medium text-gray-500">Calibration Buffer Point</label>
                <div class="relative">
                  <select class="w-full appearance-none border border-gray-200 bg-white rounded-lg pl-3 pr-7 py-1.5 text-xs font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer">
                    <option>pH 7.00 (Neutral)</option>
                    <option>pH 4.01 (Acidic)</option>
                    <option>pH 10.01 (Alkaline)</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <p class="text-[11px] text-gray-400 leading-tight">
              Ensure the electrode is fully submerged in the selected reference buffer fluid before starting.
            </p>
          </div>

          <div class="flex justify-end pt-2">
            <button class="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors">
              Calibrate pH Point
            </button>
          </div>
        </div>

        <!-- EC Sensor Calibration Card -->
        <div class="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between gap-4">
          <div>
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-sm font-bold text-gray-900 m-0">EC Sensor Calibration</h2>
              <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                SENSORS OK
              </span>
            </div>

            <div class="grid grid-cols-3 gap-3 mb-3">
              <!-- K-Factor Constant -->
              <div class="flex flex-col gap-1">
                <label class="text-[11px] font-medium text-gray-500">K-Factor Constant</label>
                <input 
                  type="text" 
                  value="1.024" 
                  class="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <!-- Current EC Reading -->
              <div class="flex flex-col gap-1">
                <label class="text-[11px] font-medium text-gray-500">Current EC Reading</label>
                <div class="relative">
                  <input 
                    type="text" 
                    value="1.42" 
                    readonly 
                    class="w-full border border-gray-200 bg-gray-50/50 rounded-lg pl-3 pr-11 py-1.5 text-xs font-semibold text-gray-700 focus:outline-none"
                  />
                  <span class="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 font-medium">mS/cm</span>
                </div>
              </div>

              <!-- Reference Solution -->
              <div class="flex flex-col gap-1">
                <label class="text-[11px] font-medium text-gray-500">Reference Solution</label>
                <div class="relative">
                  <select class="w-full appearance-none border border-gray-200 bg-white rounded-lg pl-3 pr-7 py-1.5 text-xs font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer">
                    <option>1.413 mS/cm</option>
                    <option>12.88 mS/cm</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <p class="text-[11px] text-gray-400 leading-tight">
              K-Factor represents the physical geometry constant of the probe electrodes.
            </p>
          </div>

          <div class="flex justify-end pt-2">
            <button class="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors">
              Calibrate EC Probe
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom Table: Recent Calibration History -->
      <div class="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-4">
        <div class="flex justify-between items-center">
          <h2 class="text-sm font-bold text-gray-900 m-0">Recent Calibration History</h2>
          <button class="text-emerald-600 hover:underline text-xs font-semibold">
            Export Calibration Log (CSV)
          </button>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-gray-50/70 text-gray-400 text-[11px] font-semibold border-b border-gray-100">
                <th class="py-2.5 px-4">Calibration Target</th>
                <th class="py-2.5 px-4">Reference Fluid</th>
                <th class="py-2.5 px-4">Measured Value</th>
                <th class="py-2.5 px-4">Adjusted Offset</th>
                <th class="py-2.5 px-4">Date & Operator</th>
                <th class="py-2.5 px-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 text-xs">
              <!-- Row 1 -->
              <tr class="hover:bg-gray-50/50">
                <td class="py-3 px-4 font-bold text-gray-900">pH Electrode (Probe A1)</td>
                <td class="py-3 px-4 text-gray-600 font-medium">pH 7.00 Buffer</td>
                <td class="py-3 px-4 text-gray-600 font-medium">6.91 pH</td>
                <td class="py-3 px-4 font-semibold text-emerald-600">+0.09 pH</td>
                <td class="py-3 px-4 text-gray-400">Today, 08:32 AM · Eullaine P.</td>
                <td class="py-3 px-4 text-right">
                  <span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700">SUCCESS</span>
                </td>
              </tr>

              <!-- Row 2 -->
              <tr class="hover:bg-gray-50/50">
                <td class="py-3 px-4 font-bold text-gray-900">pH Electrode (Probe A1)</td>
                <td class="py-3 px-4 text-gray-600 font-medium">pH 4.01 Buffer</td>
                <td class="py-3 px-4 text-gray-600 font-medium">4.06 pH</td>
                <td class="py-3 px-4 font-semibold text-red-500">-0.05 pH</td>
                <td class="py-3 px-4 text-gray-400">Today, 08:24 AM · Eullaine P.</td>
                <td class="py-3 px-4 text-right">
                  <span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700">SUCCESS</span>
                </td>
              </tr>

              <!-- Row 3 -->
              <tr class="hover:bg-gray-50/50">
                <td class="py-3 px-4 font-bold text-gray-900">EC Sensor (TDS Probe)</td>
                <td class="py-3 px-4 text-gray-600 font-medium">1.413 mS/cm Solution</td>
                <td class="py-3 px-4 text-gray-600 font-medium">1.401 mS/cm</td>
                <td class="py-3 px-4 font-semibold text-emerald-600">+0.012 mS/cm</td>
                <td class="py-3 px-4 text-gray-400">Jan 12, 2026 · Eullaine P.</td>
                <td class="py-3 px-4 text-right">
                  <span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700">SUCCESS</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    



    <div v-else-if="activeTab === 'Notifications'" class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <!-- Left Card: Alert Delivery Channels (Spans 2 columns on medium screens+) -->
      <div class="md:col-span-2 bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between gap-6">
        <div>
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-sm font-bold text-gray-900 m-0">Alert Delivery Channels</h2>
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              CHANNELS CONFIGURABLE
            </span>
          </div>

          <div class="divide-y divide-gray-100">
            <!-- Channel 1 -->
            <div class="py-4 flex justify-between items-center gap-4 first:pt-0">
              <div class="flex flex-col gap-0.5">
                <span class="text-xs font-bold text-gray-900">System Outage & Hardware Offline</span>
                <span class="text-[11px] text-gray-400">Receive instant alerts if any telemetry controllers lose connection for more than 5 minutes.</span>
              </div>
              <button 
                type="button"
                class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out bg-emerald-600 focus:outline-none"
              >
                <span class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-5" />
              </button>
            </div>

            <!-- Channel 2 -->
            <div class="py-4 flex justify-between items-center gap-4">
              <div class="flex flex-col gap-0.5">
                <span class="text-xs font-bold text-gray-900">pH Critical Deviation</span>
                <span class="text-[11px] text-gray-400">Notify operator immediately when pH parameters drift outside recommended crop thresholds.</span>
              </div>
              <button 
                type="button"
                class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out bg-emerald-600 focus:outline-none"
              >
                <span class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-5" />
              </button>
            </div>

            <!-- Channel 3 -->
            <div class="py-4 flex justify-between items-center gap-4">
              <div class="flex flex-col gap-0.5">
                <span class="text-xs font-bold text-gray-900">EC Level Tolerance Alert</span>
                <span class="text-[11px] text-gray-400">Send warnings if Electrical Conductivity values stray below ideal nutrient levels.</span>
              </div>
              <button 
                type="button"
                class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out bg-gray-200 focus:outline-none"
              >
                <span class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-0" />
              </button>
            </div>

            <!-- Channel 4 -->
            <div class="py-4 flex justify-between items-center gap-4 last:pb-0">
              <div class="flex flex-col gap-0.5">
                <span class="text-xs font-bold text-gray-900">Weekly Digest Reports</span>
                <span class="text-[11px] text-gray-400">Weekly summary of telemetry sensor charts, trends, and diagnostic logs delivered every Sunday.</span>
              </div>
              <button 
                type="button"
                class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out bg-emerald-600 focus:outline-none"
              >
                <span class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-5" />
              </button>
            </div>
          </div>
        </div>

        <div class="flex justify-end">
          <button class="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors">
            Save Preferences
          </button>
        </div>
      </div>

      <!-- Right Card: Trigger Threshold Rules -->
      <div class="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between gap-6">
        <div class="flex flex-col gap-4">
          <h2 class="text-sm font-bold text-gray-900 m-0">Trigger Threshold Rules</h2>

          <!-- pH Critical Deviation Alert Input -->
          <div class="flex flex-col gap-1">
            <label class="text-[11px] font-medium text-gray-500">pH Critical Deviation Alert</label>
            <div class="relative">
              <input 
                type="text" 
                value="0.5" 
                class="w-full border border-gray-200 rounded-lg pl-3 pr-24 py-1.5 text-xs font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <span class="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 font-medium">pH Unit Drift</span>
            </div>
          </div>

          <!-- Dual EC Warning Inputs -->
          <div class="grid grid-cols-2 gap-3">
            <div class="flex flex-col gap-1">
              <label class="text-[11px] font-medium text-gray-500">EC Warning Min</label>
              <div class="relative">
                <input 
                  type="text" 
                  value="1.0" 
                  class="w-full border border-gray-200 rounded-lg pl-3 pr-11 py-1.5 text-xs font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 font-medium">mS/cm</span>
              </div>
            </div>

            <div class="flex flex-col gap-1">
              <label class="text-[11px] font-medium text-gray-500">EC Warning Max</label>
              <div class="relative">
                <input 
                  type="text" 
                  value="2.0" 
                  class="w-full border border-gray-200 rounded-lg pl-3 pr-11 py-1.5 text-xs font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 font-medium">mS/cm</span>
              </div>
            </div>
          </div>

          <!-- Temperature Warning Window Input -->
          <div class="flex flex-col gap-1">
            <label class="text-[11px] font-medium text-gray-500">Temperature Warning Window</label>
            <div class="relative">
              <input 
                type="text" 
                value="3.0" 
                class="w-full border border-gray-200 rounded-lg pl-3 pr-24 py-1.5 text-xs font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <span class="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 font-medium">°C Deviation</span>
            </div>
          </div>

          <!-- Alert Delivery Quiet Hours Dropdown -->
          <div class="flex flex-col gap-1">
            <label class="text-[11px] font-medium text-gray-500">Alert Delivery Quiet Hours</label>
            <div class="relative">
              <select class="w-full appearance-none border border-gray-200 bg-white rounded-lg pl-3 pr-8 py-1.5 text-xs font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer">
                <option>10:00 PM – 06:00 AM (PST)</option>
                <option>11:00 PM – 07:00 AM (PST)</option>
                <option>Disabled</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-400">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-end">
          <button class="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors">
            Save Trigger Rules
          </button>
        </div>
      </div>
    </div>


  </div>
</template>