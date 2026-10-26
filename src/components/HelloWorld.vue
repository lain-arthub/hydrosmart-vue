<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  
  <div class="bg-gray-200 flex flex-row justify-center h-100 py-10 my-20">

    <div class="rounded-2xl bg-gray-100 px-10 py-2 shadow">

      
      
      <p class="font-bold text-md">
        Sign in to your fucking account
      </p>

      <form>
        <div class="flex flex-col justify-evenly">

          <div class="flex flex-col mb-2 mt-10">
            <label class="font-bold text-sm">Email Address</label>
            <input class="rounded-sm border border-gray-200 py-1 px-1">
          </div>

          <div class="flex flex-col mb-2">

            <div class="flex flex-row justify-between">

              <label class="font-bold text-sm">Password</label>
              <a class="text-sm text-green-700">Forgot Password?</a>
            </div>
            <input type="password" class="rounded-sm border border-gray-200 py-1 px-1">
          </div>


          <button class="rounded-sm bg-green-700 py-2 text-white text-xs">
            Sign-In
          </button>

          <a href="" class="text-green-700 text-xs text-center mt-5">
            Create Account
          </a>

        </div>
        

      </form>




    </div>

  </div>
  



</template>
