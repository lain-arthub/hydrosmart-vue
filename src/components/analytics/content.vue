<script setup>
import { ref } from 'vue'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line, Bar } from 'vue-chartjs'

// Register Chart.js elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

// Selected time filter state
const selectedRange = ref('Past 7 Days')

// 1. Multi-Parameter Trend Line Chart
const trendData = ref({
  labels: ['Oct 18', 'Oct 19', 'Oct 20', 'Oct 21', 'Oct 22', 'Oct 23', 'Oct 24', 'Oct 25'],
  datasets: [
    {
      label: 'pH',
      borderColor: '#2DD4BF', // Teal
      backgroundColor: 'transparent',
      borderWidth: 2,
      tension: 0.4,
      pointRadius: 0,
      data: [6.2, 6.3, 6.8, 6.7, 6.4, 6.5, 6.8, 7.2]
    },
    {
      label: 'EC',
      borderColor: '#4ADE80', // Green
      backgroundColor: 'transparent',
      borderWidth: 2,
      tension: 0.4,
      pointRadius: 0,
      data: [6.0, 6.2, 6.4, 6.3, 6.1, 6.2, 6.5, 6.6]
    },
    {
      label: 'Temperature',
      borderColor: '#F87171', // Coral/Red
      backgroundColor: 'transparent',
      borderWidth: 2,
      tension: 0.4,
      pointRadius: 0,
      data: [6.1, 6.1, 6.3, 6.2, 6.0, 6.1, 6.3, 6.4]
    }
  ]
})

const trendOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      align: 'end',
      labels: {
        usePointStyle: true,
        boxWidth: 6,
        font: { size: 12 },
        color: '#64748B'
      }
    },
    tooltip: { mode: 'index', intersect: false }
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: '#94A3B8', font: { size: 11 } }
    },
    y: {
      grid: { color: '#F1F5F9' },
      ticks: { display: false }, // Borderless look matching design
      border: { display: false }
    }
  }
})

// 2. Nutrient (EC) Concentration Summary Bar Chart
const nutrientData = ref({
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  datasets: [
    {
      label: 'EC Level',
      borderRadius: 4,
      data: [1.2, 1.5, 1.3, 1.7, 1.5, 1.8, 1.6, 1.5, 1.9, 1.4, 1.3, 1.5],
      backgroundColor: [
        '#3B82F6', '#3B82F6', '#3B82F6', '#3B82F6', '#3B82F6', '#3B82F6', '#3B82F6', '#3B82F6', '#3B82F6',
        '#4ADE80', '#4ADE80', '#4ADE80' // Green bars on the right
      ]
    }
  ]
})

const summaryOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    x: { display: false },
    y: { display: false }
  }
})

// 3. pH Level Distribution Bar Chart
const phDistributionData = ref({
  labels: ['<5.5', '5.5-5.8', '5.8-6.0', '6.0-6.5', '6.5-6.8', '6.8-7.0', '7.0-7.2', '>7.2'],
  datasets: [
    {
      label: 'Readings',
      borderRadius: 4,
      data: [2, 3, 7, 11, 8, 6, 2, 1],
      backgroundColor: [
        '#DCFCE7', '#DCFCE7', '#14B8A6', '#14B8A6', '#14B8A6', '#14B8A6', '#DCFCE7', '#DCFCE7'
      ]
    }
  ]
})

// Recent Historical Log Table Data
const historyLogs = ref([
  { timestamp: 'Oct 25, 09:30 AM', ph: '6.3', ec: '1.4', temperature: '24.6 °C', status: 'Optimal' },
  { timestamp: 'Oct 25, 09:00 AM', ph: '6.2', ec: '1.4', temperature: '24.4 °C', status: 'Optimal' },
  { timestamp: 'Oct 25, 08:30 AM', ph: '6.2', ec: '1.3', temperature: '24.1 °C', status: 'Optimal' },
  { timestamp: 'Oct 25, 08:00 AM', ph: '6.1', ec: '1.4', temperature: '23.9 °C', status: 'Optimal' }
])
</script>

<template>
  <div class="flex-1 p-8 flex flex-col gap-6 bg-gray-100 font-sans text-gray-800">
    <!-- Top Action Control Bar -->
    <div class="flex justify-between items-center">
      <span class="text-sm text-gray-500 font-medium">System performance history</span>
      <div class="flex items-center gap-3">
        <!-- Date Selector Dropdown -->
        <div class="relative">
          <select 
            v-model="selectedRange"
            class="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
          >
            <option>Past 7 Days</option>
            <option>Past 30 Days</option>
            <option>Past 90 Days</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <!-- Export Report Button -->
        <button class="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Export Report
        </button>
      </div>
    </div>

    <!-- Multi-Parameter Trend Line Chart -->
    <section class="bg-white rounded-xl p-6 shadow-sm flex flex-col">
      <div class="mb-4">
        <h2 class="text-base font-bold m-0">Multi-Parameter Trend Over Time</h2>
        <p class="text-gray-400 text-xs mt-0.5">pH, EC and water temperature · Oct 18-25, 2026</p>
      </div>
      <div class="h-64 relative">
        <Line :data="trendData" :options="trendOptions" />
      </div>
      <div class="text-center text-xs text-gray-400 mt-2">
        Oct 18 Oct 19 Oct 20 Oct 21 Oct 22 Oct 23 Oct 24 Oct 25
      </div>
    </section>

    <!-- Middle Dual Bar Charts Grid -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <!-- Nutrient (EC) Concentration Summary -->
      <div class="bg-white rounded-xl p-6 shadow-sm flex flex-col">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="text-base font-bold m-0">Nutrient (EC) Concentration Summary</h3>
            <p class="text-gray-400 text-xs mt-0.5">Daily average · mS/cm</p>
          </div>
          <span class="text-xs font-semibold text-emerald-600">Avg 1.42</span>
        </div>
        <div class="h-36 relative">
          <Bar :data="nutrientData" :options="summaryOptions" />
        </div>
      </div>

      <!-- pH Level Distribution -->
      <div class="bg-white rounded-xl p-6 shadow-sm flex flex-col">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="text-base font-bold m-0">pH Level Distribution</h3>
            <p class="text-gray-400 text-xs mt-0.5">Readings grouped by range</p>
          </div>
          <span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
            82% optimal
          </span>
        </div>
        <div class="h-36 relative">
          <Bar :data="phDistributionData" :options="summaryOptions" />
        </div>
      </div>
    </section>

    <!-- Recent Historical Log Table -->
    <section class="bg-white rounded-xl p-6 shadow-sm">
      <div class="flex justify-between items-center mb-4">
        <div>
          <h2 class="text-base font-bold m-0">Recent Historical Log</h2>
          <p class="text-gray-400 text-xs mt-0.5">Latest archived sensor readings</p>
        </div>
        <a href="#" class="text-emerald-600 text-xs font-semibold flex items-center gap-1 hover:underline">
          View full history
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-gray-50 text-gray-400 text-xs font-medium uppercase border-b border-gray-100">
              <th class="py-3 px-4">Timestamp</th>
              <th class="py-3 px-4">pH</th>
              <th class="py-3 px-4">EC</th>
              <th class="py-3 px-4">Temperature</th>
              <th class="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 text-sm">
            <tr v-for="(log, index) in historyLogs" :key="index" class="hover:bg-gray-50/50">
              <td class="py-3.5 px-4 text-gray-700">{{ log.timestamp }}</td>
              <td class="py-3.5 px-4 text-gray-600 font-medium">{{ log.ph }}</td>
              <td class="py-3.5 px-4 text-gray-600 font-medium">{{ log.ec }}</td>
              <td class="py-3.5 px-4 text-gray-600">{{ log.temperature }}</td>
              <td class="py-3.5 px-4">
                <span class="text-emerald-600 font-medium text-xs">{{ log.status }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>