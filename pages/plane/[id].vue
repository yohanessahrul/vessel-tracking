<template>
  <div>
    <h1 class="mt-10 font-bold text-4xl">Plane xxx</h1>
    <p class="font-light text-md mb-6 mt-0 pt-0">Last position : [-6.45435.454, 117.45345.3454]</p>
    <div class="bg-slate-800 w-[100%] h-[600px] shadow-md rounded-lg table overflow-hidden">
      <DetailMap :tracks="tracks"  />
    </div>
  </div>
</template>

<script>
  import DetailMap from "../../components/maps/detail-map.vue"
  import data from "../../static/vessel/netrasmall.json";
  
  export default {
    data() {
      return {
        profileTransportation: '',
        tracks: data,
      }
    },
    components: {
      DetailMap
    },
  }
</script>

<style scoped>
</style>