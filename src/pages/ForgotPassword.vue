<script setup>
import { ref } from 'vue'

const email = ref('')
</script>

<template>
  <div class="min-h-screen bg-slate-100 flex items-center justify-center p-4">
    <div class="bg-white rounded-xl p-8 shadow-md w-full max-w-sm flex flex-col items-center">
      <!-- Logo Header -->
      <div class="flex items-center space-x-2 mb-6">
        <div class="w-12 h-12 rounded-full border border-gray-200 p-1 flex items-center justify-center">
          <svg class="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v12m-4-8c0 4.418 3.582 8 8 8m-8-8a8 8 0 008 8" />
            <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5" />
          </svg>
        </div>
        <span class="font-bold text-xl text-gray-900 tracking-tight">HydroSmart</span>
      </div>

      <!-- Title & Subtitle -->
      <h1 class="font-bold text-xl text-gray-900 mb-1 text-center">
        Forgot password?
      </h1>
      <p class="text-xs text-gray-400 text-center mb-6 leading-relaxed px-2">
        Enter the email address for your HydroSmart account. We'll send you a link to reset your password.
      </p>

      <!-- Form -->
      <form @submit.prevent class="w-full space-y-4">
        <!-- Email Address Input -->
        <div class="flex flex-col space-y-1">
          <label class="font-bold text-xs text-gray-700">Email Address</label>
          <input 
            v-model="email"
            type="email" 
            placeholder="name@example.com" 
            class="w-full rounded-md border border-gray-200 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600 placeholder-gray-400"
          />
        </div>

        <!-- Submit Button -->
        <button 
          type="submit" 
          class="w-full rounded-md bg-emerald-600 hover:bg-emerald-700 py-2.5 text-white font-medium text-xs transition duration-150 ease-in-out mt-2"
        >
          Send reset link
        </button>

        <!-- Back to Sign In Link -->
        <div class="text-center pt-2">
          <RouterLink to="/" class="text-xs text-emerald-600 hover:underline font-medium">
            Back to sign in
          </RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>