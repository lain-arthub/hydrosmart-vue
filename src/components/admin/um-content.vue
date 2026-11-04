<script setup>
import { ref, computed } from 'vue'

// Search and Filter State
const searchQuery = ref('')
const selectedRole = ref('All roles')
const sortBy = ref('name')
const currentPage = ref(1)

// Users Data
const users = ref([
  {
    id: 1,
    name: 'Eullaine P.',
    email: 'eullaine@hydrosmart.com',
    initials: 'EP',
    role: 'Farmer',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Super Admin',
    email: 'admin@hydrosmart.com',
    initials: 'SA',
    role: 'Super Admin',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Caraga Nursery',
    email: 'caraga@hydrosmart.com',
    initials: 'CN',
    role: 'Farmer',
    status: 'Suspended'
  },
  {
    id: 4,
    name: 'Farm Setup',
    email: 'farmsetup@hydrosmart.com',
    initials: 'FS',
    role: 'Farmer',
    status: 'Active'
  }
])

// Computed Filtered Users List
const filteredUsers = computed(() => {
  return users.value.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                          user.email.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesRole = selectedRole.value === 'All roles' || user.role === selectedRole.value
    return matchesSearch && matchesRole
  })
})

// Action Handlers
const handleEdit = (user) => {
  console.log('Edit user:', user)
}

const handleAction = (user) => {
  if (user.status === 'Active') {
    user.status = 'Disabled'
  } else if (user.status === 'Suspended') {
    console.log('Open permissions for:', user)
  }
}

const addUser = () => {
  console.log('Add user clicked')
}
</script>

<template>
  <div class="flex-1 p-8 flex flex-col bg-gray-100 font-sans text-gray-800">
    <div class="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-6">
      <!-- Title & Add User Header -->
      <div class="flex justify-between items-start">
        <div>
          <h1 class="text-xl font-bold text-gray-900 m-0">User Management</h1>
          <p class="text-gray-400 text-xs mt-1">Manage accounts, roles and access permissions</p>
        </div>
        <button 
          @click="addUser"
          class="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-colors"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          <RouterLink to="/admin/user-management/add-user-content">Add User</RouterLink>

        </button>
      </div>

      <!-- Filters & Search Bar Controls -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
        <!-- Search Input -->
        <div class="relative w-full sm:w-80">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input 
            v-model="searchQuery"
            type="text"
            placeholder="Search name or email"
            class="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
          />
        </div>

        <!-- Filter Dropdowns -->
        <div class="flex items-center gap-3 w-full sm:w-auto justify-end">
          <!-- Role Selector -->
          <div class="relative">
            <select 
              v-model="selectedRole"
              class="appearance-none bg-white border border-gray-200 rounded-lg pl-3.5 pr-8 py-2 text-xs font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            >
              <option>All roles</option>
              <option>Farmer</option>
              <option>Super Admin</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-400">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <!-- Sort Selector -->
          <button class="flex items-center gap-1.5 bg-white border border-gray-200 rounded-lg px-3.5 py-2 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
            <svg class="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
            Sort by User
          </button>
        </div>
      </div>

      <!-- Users Table -->
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-gray-50/70 text-gray-500 text-xs font-semibold border-b border-gray-100">
              <th class="py-3 px-4">Name</th>
              <th class="py-3 px-4">Role</th>
              <th class="py-3 px-4">Status</th>
              <th class="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 text-xs">
            <tr v-for="user in filteredUsers" :key="user.id" class="hover:bg-gray-50/50">
              <!-- Name Column with Avatar -->
              <td class="py-4 px-4">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs flex-shrink-0">
                    {{ user.initials }}
                  </div>
                  <div class="flex flex-col">
                    <span class="font-bold text-gray-900 leading-tight">{{ user.name }}</span>
                    <span class="text-gray-400 text-[11px] mt-0.5">{{ user.email }}</span>
                  </div>
                </div>
              </td>

              <!-- Role Column -->
              <td class="py-4 px-4 text-gray-700 font-medium">
                {{ user.role }}
              </td>

              <!-- Status Badge Column -->
              <td class="py-4 px-4">
                <span 
                  class="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium"
                  :class="user.status === 'Active' 
                    ? 'bg-emerald-100 text-emerald-700' 
                    : 'bg-red-100 text-red-600'"
                >
                  {{ user.status }}
                </span>
              </td>

              <!-- Actions Column -->
              <td class="py-4 px-4">
                <div class="flex items-center gap-2">
                  <button 
                    @click="handleEdit(user)"
                    class="border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-medium px-3 py-1 rounded-md shadow-sm transition-colors"
                  >
                    Edit
                  </button>
                  <button 
                    @click="handleAction(user)"
                    class="border border-transparent font-medium px-3 py-1 rounded-md transition-colors"
                    :class="user.status === 'Active' 
                      ? 'bg-red-100/70 hover:bg-red-100 text-red-600' 
                      : 'border-gray-200 bg-white hover:bg-gray-50 text-emerald-700'"
                  >
                    {{ user.status === 'Active' ? 'Disable' : 'Permissions' }}
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination Footer -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 pt-2 text-xs text-gray-500">
        <div>Showing 1–4 of 12 users</div>
        
        <div class="flex items-center gap-2">
          <span class="mr-2">Page 1 of 3</span>
          
          <button class="border border-gray-200 rounded px-2 py-1 hover:bg-gray-50 disabled:opacity-50">
            &laquo;
          </button>
          <button class="border border-gray-200 rounded px-2 py-1 hover:bg-gray-50 disabled:opacity-50">
            &lt;
          </button>
          
          <button class="bg-emerald-600 text-white font-semibold rounded px-2.5 py-1">1</button>
          <button class="border border-gray-200 rounded px-2.5 py-1 hover:bg-gray-50">2</button>
          <button class="border border-gray-200 rounded px-2.5 py-1 hover:bg-gray-50">3</button>
          
          <button class="border border-gray-200 rounded px-3 py-1 hover:bg-gray-50 flex items-center gap-1 font-medium text-gray-700">
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>