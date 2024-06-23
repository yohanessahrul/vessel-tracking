<template>
  <div class="flex flex-row relative">
    
    <header class="shadow-sm bg-gray-950 w-[120px] h-screen flex flex-col fixed">
      <nav class="container mx-auto p-4 flex flex-col justify-center">
        <!-- <h2 class="font-bold text-center mt-10 mb-10 text-white">VesselHub</h2> -->
        <div class="w-[90px] h-[90px] flex justify-center items-center mb-10">
          <img src="../public/logo.png"/>
        </div>
        <ul class="flex flex-col gap-4 items-center">
          <li>
            <NuxtLink
              class="w-[60px] h-[60px] flex justify-center items-center text-gray-800 bg-gray-700 hover:bg-gray-600 hover:text-green-200 rounded-lg transition-all duration-100"
              to="/"
            >
              <img class="w-[35px] h-[35px]" src="../public/dashboard.png"/>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="w-[60px] h-[60px] flex justify-center items-center text-gray-800 bg-gray-700 hover:bg-gray-600 hover:text-green-200 rounded-lg transition-all duration-100"
              to="/plane"
            >
            <img class="w-[35px] h-[35px]" src="../public/plane.png"/>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="w-[60px] h-[60px] flex justify-center items-center text-gray-800 bg-gray-700 hover:bg-gray-600 hover:text-green-200 rounded-lg transition-all duration-100"
              to="/vessel"
            >
            <img class="w-[35px] h-[35px]" src="../public/shield.png"/>
            </NuxtLink>
          </li>
        </ul>
        
      </nav>
      <div class="h-svh flex justify-center items-end mb-6">
        <ul class="flex flex-col gap-4 items-center">
          <li>
            <NuxtLink
              class="w-[60px] h-[60px] flex justify-center items-center text-gray-100 hover:text-gray-800 bg-yellow-600 hover:bg-yellow-500 hover:text-green-200 rounded-full transition-all duration-100"
              to="/profile"
            >
            <img class="w-[35px] h-[35px]" src="../public/avatar.png"/>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </header>
  <div class="w-screen min-h-screen p-6 bg-sky-100 ml-[120px]">
    <slot />
  </div>
  </div>
</template>

<style scoped>
.router-link-active {
  border: 2px solid #d1b01bc8;
}
</style>