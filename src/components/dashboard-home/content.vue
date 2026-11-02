Here is the component with the header and sidebar removed, styled entirely with Tailwind CSS classes:

```vue
<script setup>
import { ref } from 'vue'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { Line } from 'vue-chartjs'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

// Metric Cards Data
const metrics = ref([
  { title: 'pH Level', value: '6.2', unit: 'pH', status: 'Optimal' },
  { title: 'Nutrient (EC/TDS)', value: '1.4', unit: 'mS/cm', status: 'Optimal' },
  { title: 'Temperature', value: '26.5', unit: '°C', status: 'Normal' }
])

// Recent Alerts Log
const alerts = ref([
  { time: '10:42 AM', text: 'pH stable at 6.2' },
  { time: '08:15 AM', text: 'Temp peaked at 27°C' },
  { time: '06:30 AM', text: 'EC dropped to 1.2' }
])

// Chart Data Config
const chartData = ref({
  labels: ['15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
  datasets: [
    {
      label: 'pH',
      borderColor: '#38bdf8', // Cyan
      backgroundColor: 'transparent',
      borderWidth: 2,
      tension: 0.45,
      pointRadius: 0,
      data: [6.0, 6.4, 6.7, 6.1, 6.5, 6.6, 6.3]
    },
    {
      label: 'EC',
      borderColor: '#34d399', // Emerald
      backgroundColor: 'transparent',
      borderWidth: 2,
      tension: 0.45,
      pointRadius: 0,
      data: [6.2, 5.9, 6.1, 6.4, 6.2, 6.6, 6.5]
    },
    {
      label: 'Temp',
      borderColor: '#f87171', // Coral
      backgroundColor: 'transparent',
      borderWidth: 2,
      tension: 0.45,
      pointRadius: 0,
      data: [6.0, 6.0, 6.0, 6.2, 6.5, 6.6, 6.7]
    }
  ]
})

// Chart Options Config
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      align: 'end',
      labels: {
        usePointStyle: true,
        boxWidth: 8,
        font: { size: 12 },
        color: '#64748b'
      }
    },
    tooltip: {
      mode: 'index',
      intersect: false
    }
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: '#94a3b8', font: { size: 11 } }
    },
    y: {
      display: false,
      grid: { display: true, color: '#f1f5f9' },
      min: 5.5,
      max: 7.0
    }
  }
})
</script>

<template>
  <div class="flex-1 p-8 flex flex-col gap-6 bg-gray-100 font-sans text-gray-800">
    <!-- Metric Cards Grid -->
    <section class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div 
        v-for="metric in metrics" 
        :key="metric.title" 
        class="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between"
      >
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2">
            <span class="text-gray-500 text-sm font-medium">{{ metric.title }}</span>
          </div>
          <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
        </div>
        <div>
          <div class="flex items-baseline gap-1.5 mt-3 mb-2">
            <span class="text-3xl font-bold leading-none">{{ metric.value }}</span>
            <span class="text-gray-500 text-sm">{{ metric.unit }}</span>
          </div>
          <span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
            {{ metric.status }}
          </span>
        </div>
      </div>
    </section>

    <!-- Live Parameter Trends Chart Section -->
    <section class="bg-white rounded-xl p-6 shadow-sm flex flex-col">
      <div class="mb-4">
        <h2 class="text-base font-bold m-0">Live Parameter Trends</h2>
        <p class="text-gray-400 text-xs mt-0.5">Last 6 hours · Updated just now</p>
      </div>
      <div class="h-56 relative">
        <Line :data="chartData" :options="chartOptions" />
      </div>
    </section>

    <!-- Bottom Grid Section -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <!-- Recent Alerts Log -->
      <div class="bg-white rounded-xl p-6 shadow-sm">
        <div class="flex justify-between items-center">
          <h2 class="text-base font-bold m-0">Recent Alerts Log</h2>
          <a href="#" class="text-emerald-500 text-sm font-medium hover:underline">View all</a>
        </div>
        <ul class="list-none p-0 mt-4 mb-0 flex flex-col gap-3">
          <li v-for="(alert, i) in alerts" :key="i" class="flex items-center gap-2.5 text-sm">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
            <span class="text-gray-400 text-xs w-16 flex-shrink-0">{{ alert.time }}</span>
            <span class="text-gray-700 font-medium">{{ alert.text }}</span>
          </li>
        </ul>
      </div>

      <!-- Automated Dosing Status -->
      <div class="bg-white rounded-xl p-6 shadow-sm">
        <div class="flex justify-between items-center">
          <h2 class="text-base font-bold m-0">Automated Dosing System Status</h2>
          <span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
            Enabled
          </span>
        </div>
        <div class="mt-4">
          <p class="text-gray-400 text-xs m-0">Pumps Inactive</p>
          <p class="text-sm font-semibold mt-0.5 mb-3">Next check 3:00 PM</p>
          <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div class="h-full bg-emerald-500 rounded-full w-[45%]"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

```