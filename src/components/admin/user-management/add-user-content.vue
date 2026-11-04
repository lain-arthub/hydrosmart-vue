<script setup>
import { ref } from 'vue'

// Form State
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  userRole: 'Farmer',
  accountStatus: 'Active',
  sendEmailInvitation: true
})

// Handlers
const handleSaveUser = () => {
  console.log('Saving User Data:', form.value)
  // Submit logic here
}

const handleCancel = () => {
  console.log('Cancelled Add User form')
}
</script>

<template>
  <div class="flex-1 p-8 flex flex-col gap-6 bg-gray-100 font-sans text-gray-800">
    <!-- Breadcrumbs -->
    <nav class="flex items-center gap-2 text-xs text-gray-500 font-medium">
      <span>Admin</span>
      <svg class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <span>User Management</span>
      <svg class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <span class="text-gray-900 font-semibold">Add User</span>
    </nav>

    <!-- Page Title Header -->
    <div>
      <h1 class="text-xl font-bold text-gray-900 m-0">Add User</h1>
      <p class="text-gray-400 text-xs mt-1">Create an account and assign access to your connected farms.</p>
    </div>

    <!-- Add User Form Container Card -->
    <div class="bg-white rounded-xl p-8 shadow-sm flex flex-col gap-8 max-w-5xl">
      
      <!-- Section 1: User Information -->
      <section class="flex flex-col gap-4">
        <div class="flex justify-between items-center border-b border-gray-100 pb-3">
          <div>
            <h2 class="text-sm font-bold text-gray-900 m-0">User Information</h2>
            <p class="text-gray-400 text-xs mt-0.5">Enter the new user's identity and contact details.</p>
          </div>
          <span class="text-[11px] text-gray-400">* Required fields</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-1">
          <!-- First Name Input -->
          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-semibold text-gray-700">First name *</label>
            <input 
              v-model="form.firstName"
              type="text" 
              placeholder="Enter first name"
              class="border border-gray-200 rounded-lg px-3.5 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
            />
          </div>

          <!-- Last Name Input -->
          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-semibold text-gray-700">Last name *</label>
            <input 
              v-model="form.lastName"
              type="text" 
              placeholder="Enter last name"
              class="border border-gray-200 rounded-lg px-3.5 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
            />
          </div>
        </div>

        <!-- Email Input -->
        <div class="flex flex-col gap-1.5">
          <label class="text-xs font-semibold text-gray-700">Email address *</label>
          <input 
            v-model="form.email"
            type="email" 
            placeholder="name@example.com"
            class="border border-gray-200 rounded-lg px-3.5 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
          />
          <span class="text-[11px] text-gray-400 mt-0.5">The user will receive their account invitation at this email address.</span>
        </div>
      </section>

      <!-- Section 2: Role & Account Access -->
      <section class="flex flex-col gap-4">
        <div class="border-b border-gray-100 pb-3">
          <h2 class="text-sm font-bold text-gray-900 m-0">Role & Access Control</h2>
          <p class="text-gray-400 text-xs mt-0.5">Choose what this user can access in HydroSmart.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-1">
          <!-- User Role Dropdown -->
          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-semibold text-gray-700">User role *</label>
            <div class="relative">
              <select 
                v-model="form.userRole"
                class="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3.5 py-2 pr-8 text-xs font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm cursor-pointer"
              >
                <option value="Farmer">Farmer</option>
                <option value="Super Admin">Super Admin</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-400">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <span class="text-[11px] text-gray-400">Manage and monitor assigned farms.</span>
          </div>

          <!-- Account Status Dropdown -->
          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-semibold text-gray-700">Account status *</label>
            <div class="relative">
              <select 
                v-model="form.accountStatus"
                class="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3.5 py-2 pr-8 text-xs font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm cursor-pointer"
              >
                <option value="Active">Active</option>
                <option value="Disabled">Disabled</option>
                <option value="Suspended">Suspended</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-400">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <span class="text-[11px] text-gray-400">Allow access after account setup.</span>
          </div>
        </div>

        <!-- Role Info Note Box -->
        <div class="bg-gray-50/70 border border-gray-100 rounded-xl p-4 flex items-start gap-3 mt-1">
          <div class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div class="flex flex-col">
            <span class="text-xs font-bold text-gray-900 leading-tight">Farm-level access only</span>
            <span class="text-[11px] text-gray-400 mt-0.5">Farmers cannot manage users or change system configuration.</span>
          </div>
        </div>
      </section>

      <!-- Section 3: Account Setup -->
      <section class="flex flex-col gap-4">
        <div class="border-b border-gray-100 pb-3">
          <h2 class="text-sm font-bold text-gray-900 m-0">Account Setup</h2>
          <p class="text-gray-400 text-xs mt-0.5">Let the user securely set their own password.</p>
        </div>

        <div class="flex items-start gap-3 mt-1">
          <input 
            v-model="form.sendEmailInvitation"
            type="checkbox"
            id="invitation-checkbox"
            class="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-gray-300 mt-0.5 cursor-pointer"
          />
          <label for="invitation-checkbox" class="flex flex-col cursor-pointer">
            <span class="text-xs font-bold text-gray-900 leading-tight">Send account invitation by email</span>
            <span class="text-[11px] text-gray-400 mt-0.5">An invitation link will be sent when you save. No password is shared by email.</span>
          </label>
        </div>
      </section>

      <!-- Bottom Form Actions Footer -->
      <div class="pt-4 border-t border-gray-100 flex justify-between items-center">
        <!-- Audit Log Note -->
        <div class="flex items-center gap-1.5 text-[11px] text-gray-400 font-medium">
          <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span>This action will be recorded in Audit Logs.</span>
        </div>

        <!-- Buttons -->
        <div class="flex items-center gap-3">
          <button 
            type="button"
            @click="handleCancel"
            class="border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
          >
            Cancel
          </button>
          <button 
            type="button"
            @click="handleSaveUser"
            class="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Save User
          </button>
        </div>
      </div>
    </div>
  </div>
</template>