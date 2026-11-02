<script setup>
import { ref } from 'vue'

// Master System Mode Switch State
const isAutoPilotOn = ref(true)

// Valve & Circulation States
const freshWaterInletClosed = ref(true)
const circulationActive = ref(true)

// Recent Actuator Activity Logs
const actuatorLogs = ref([
  '[11:15 AM] pH Down pump injected 5ml',
  '[09:30 AM] Solution A dosing cycle completed',
  '[08:45 AM] Fresh water inlet valve closed'
])

// Test Dosing Trigger Handlers
const triggerPhTest = () => {
  actuatorLogs.value.unshift(`[${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}] pH test dosing cycle initiated`)
}

const triggerNutrientTest = () => {
  actuatorLogs.value.unshift(`[${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}] Nutrient test dosing cycle initiated`)
}

const toggleFreshWaterInlet = () => {
  freshWaterInletClosed.value = !freshWaterInletClosed.value
  const statusText = freshWaterInletClosed.value ? 'closed' : 'opened'
  actuatorLogs.value.unshift(`[${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}] Fresh water inlet valve ${statusText}`)
}

const toggleCirculation = () => {
  circulationActive.value = !circulationActive.value
  const statusText = circulationActive.value ? 'started' : 'stopped'
  actuatorLogs.value.unshift(`[${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}] Nutrient mixing circulation ${statusText}`)
}
</script>

<template>
  <div class="flex-1 p-8 flex flex-col gap-6 bg-gray-100 font-sans text-gray-800">
    <!-- Master System Mode Card -->
    <div class="bg-white rounded-xl p-5 shadow-sm flex justify-between items-center">
      <div class="flex items-center gap-2">
        <span class="text-sm font-semibold text-gray-800">Master System Mode:</span>
        <span class="text-xs font-bold text-emerald-600 tracking-wide uppercase">
          {{ isAutoPilotOn ? 'ACTIVE' : 'INACTIVE' }}
        </span>
      </div>
      
      <div class="flex items-center gap-3">
        <span class="text-xs font-bold text-emerald-600">
          Auto-Pilot [{{ isAutoPilotOn ? 'ON' : 'OFF' }}]
        </span>
        <!-- Toggle Switch -->
        <button 
          @click="isAutoPilotOn = !isAutoPilotOn"
          type="button"
          class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
          :class="isAutoPilotOn ? 'bg-emerald-600' : 'bg-gray-300'"
        >
          <span 
            class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
            :class="isAutoPilotOn ? 'translate-x-5' : 'translate-x-0'"
          />
        </button>
      </div>
    </div>

    <!-- Top Grid: Dosing Pumps -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <!-- pH Correction Pumps -->
      <div class="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2.5 mb-4">
            <div class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.12a2 2 0 00-1.144.12l-1.07.535A2 2 0 002.267 17.4l.213 1.066A2 2 0 004.442 20h15.116a2 2 0 001.962-1.534l.213-1.066a2 2 0 00-1.305-1.972z" />
              </svg>
            </div>
            <h2 class="text-base font-bold text-gray-900 m-0">pH Correction Pumps</h2>
          </div>

          <div class="space-y-3">
            <div class="flex justify-between items-center text-xs">
              <span class="text-gray-600 font-medium">Pump 1 pH Up</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700">READY</span>
            </div>
            <div class="flex justify-between items-center text-xs">
              <span class="text-gray-600 font-medium">Pump 2 pH Down</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700">READY</span>
            </div>
          </div>
        </div>

        <div class="mt-6 flex justify-end">
          <button 
            @click="triggerPhTest"
            class="border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
          >
            Test Dosing Cycle
          </button>
        </div>
      </div>

      <!-- Nutrient (EC) Dosing -->
      <div class="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2.5 mb-4">
            <div class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.12a2 2 0 00-1.144.12l-1.07.535A2 2 0 002.267 17.4l.213 1.066A2 2 0 004.442 20h15.116a2 2 0 001.962-1.534l.213-1.066a2 2 0 00-1.305-1.972z" />
              </svg>
            </div>
            <h2 class="text-base font-bold text-gray-900 m-0">Nutrient (EC) Dosing</h2>
          </div>

          <div class="space-y-3">
            <div class="flex justify-between items-center text-xs">
              <span class="text-gray-600 font-medium">Pump 3 Solution A</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700">READY</span>
            </div>
            <div class="flex justify-between items-center text-xs">
              <span class="text-gray-600 font-medium">Pump 4 Solution B</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700">READY</span>
            </div>
          </div>
        </div>

        <div class="mt-6 flex justify-end">
          <button 
            @click="triggerNutrientTest"
            class="border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
          >
            Test Dosing Cycle
          </button>
        </div>
      </div>
    </section>

    <!-- Middle Grid: Valves & Circulation -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <!-- Solenoid Valves & Water Flow -->
      <div class="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2.5 mb-4">
            <div class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              </svg>
            </div>
            <h2 class="text-base font-bold text-gray-900 m-0">Solenoid Valves & Water Flow</h2>
          </div>

          <div class="text-xs">
            <span class="text-gray-600 font-medium">Fresh Water Inlet Valve: </span>
            <span class="font-bold text-emerald-600">
              [{{ freshWaterInletClosed ? 'CLOSED' : 'OPEN' }}]
            </span>
          </div>
        </div>

        <div class="mt-6 flex justify-start">
          <button 
            @click="toggleFreshWaterInlet"
            class="border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
          >
            {{ freshWaterInletClosed ? 'Manual Open' : 'Manual Close' }}
          </button>
        </div>
      </div>

      <!-- Water & Nutrient Circulation -->
      <div class="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2.5 mb-4">
            <div class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h2 class="text-base font-bold text-gray-900 m-0">Water & Nutrient Circulation</h2>
          </div>

          <div class="space-y-2 text-xs">
            <div>
              <span class="text-gray-600 font-medium">Fresh Water Inlet Valve: </span>
              <span class="font-bold text-emerald-600">
                [{{ freshWaterInletClosed ? 'CLOSED' : 'OPEN' }}]
              </span>
            </div>
            <div>
              <button 
                @click="toggleFreshWaterInlet"
                class="border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-semibold px-3 py-1 rounded shadow-sm transition-colors my-1"
              >
                {{ freshWaterInletClosed ? 'Manual Open' : 'Manual Close' }}
              </button>
            </div>
            <div class="pt-1">
              <span class="text-gray-600 font-medium">Nutrient Mixing Circulation: </span>
              <span class="font-bold text-emerald-600">
                [{{ circulationActive ? 'ACTIVE' : 'INACTIVE' }}]
              </span>
            </div>
          </div>
        </div>

        <div class="mt-4 flex justify-start">
          <button 
            @click="toggleCirculation"
            class="border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
          >
            {{ circulationActive ? 'Stop Flow' : 'Start Flow' }}
          </button>
        </div>
      </div>
    </section>

    <!-- Bottom Activity Logs -->
    <section class="bg-white rounded-xl p-6 shadow-sm">
      <div class="flex items-center gap-2.5 mb-4">
        <div class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 class="text-base font-bold text-gray-900 m-0">Recent Actuator Activity Logs</h2>
      </div>

      <ul class="list-disc list-inside space-y-2 text-xs text-gray-500 font-medium pl-1">
        <li v-for="(log, idx) in actuatorLogs" :key="idx">
          {{ log }}
        </li>
      </ul>
    </section>
  </div>
</template>