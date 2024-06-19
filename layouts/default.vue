<template>
  <div class="flex flex-row">
    <header class="shadow-sm bg-gray-200 w-[120px] h-screen flex-col">
      <nav class="container mx-auto p-4 flex flex-col justify-center">
        <h2 class="font-bold text-center mt-10 mb-10">Netra</h2>
        <ul class="flex flex-col gap-4 items-center">
          <li>
            <NuxtLink
              class="w-[60px] h-[60px] flex justify-center items-center text-gray-800 bg-gray-300 hover:bg-black hover:text-green-200 rounded-lg transition-all duration-100"
              to="/"
            >
              Das
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="w-[60px] h-[60px] flex justify-center items-center text-gray-800 bg-gray-300 hover:bg-black hover:text-green-200 rounded-lg transition-all duration-100"
              to="/about"
            >
              Abo
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="w-[60px] h-[60px] flex justify-center items-center text-gray-800 bg-gray-300 hover:bg-black hover:text-green-200 rounded-lg transition-all duration-100"
              to="/vessel/6786"
            >
              Ves
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  <div>
    <slot />
  </div>
  </div>
</template>

<style scoped>
</style>