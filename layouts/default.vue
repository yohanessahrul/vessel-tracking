<template>
  <div>
    <header class="shadow-sm bg-gray-200">
      <nav class="container mx-auto p-4 flex justify-between">
        <h2 class="font-bold">Netra Technologies</h2>
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/">
              Dashboard
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/vessel/6786">
              Vessel
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
  <div>
    <slot />
  </div>
</template>

<style scoped>
  .router-link-exact-active {
    color: #289772;
  }
</style>