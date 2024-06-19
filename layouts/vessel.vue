<template>
  <div>
    <header class="shadow-sm bg-slate-200">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/">Vessel Tracking</NuxtLink>
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/satu">Satu</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/dua">Dua</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/tiga">Tiga</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <slot />
  </div>
</template>

<style scoped>
  .router-link-exact-active {
    color: #289772;
  }
</style>