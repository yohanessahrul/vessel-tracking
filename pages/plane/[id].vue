<template>
  <div>
    <h1 class="mt-10 font-bold text-4xl">Plane {{ id }}</h1>
    <p class="font-light text-md mb-6 mt-0 pt-0">Last position : [-6.45435.454, 117.45345.3454]</p>
    <div class="bg-slate-800 w-[100%] h-[600px] shadow-md rounded-lg table">
      <!-- <DetailMap  /> -->
    </div>
  </div>
</template>

<script setup>
import DetailMap from "../../components/maps/detail-map.vue"

  const { id } = useRoute().params
  components: {
    DetailMap
  }
</script>

<style scoped>
</style>