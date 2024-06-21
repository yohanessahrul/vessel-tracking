<template>
  <div>
    <div class="bg-slate-800 w-[100%] h-[600px] shadow-md rounded-lg table overflow-hidden">
      <TransportationMap :cordinates="cordinates" />
    </div>
  </div>
</template>

<script>
import TransportationMap from '../components/maps/transportation-map.vue'

export default {
  components: {
    TransportationMap
  },
  data() {
    return {
      cordinates: [
        { id: "002", coordinates: [106.70387019353444, -6.295122093207836], name: 'Pesawat 1', type: 'plane' }, 
        { id: "003", coordinates: [98.87509245186857, 3.631458971433959], name: 'Pesawat 2', type: 'plane' }, 
        { id: "007", coordinates: [115.16817622313957, -8.746781210150695], name: 'Pesawat 3', type: 'plane' },
        { id: "010", coordinates: [111.67419584407263, -2.624698540782821], name: 'Pesawat 4', type: 'plane' },
        { id: "012", coordinates: [140.51818926723098, -2.5770067657578624], name: 'Pesawat 5', type: 'plane' },
        { id: "013", coordinates: [119.5493144, -5.07750919543936], name: 'Pesawat 6', type: 'plane' },
      ],
    }
  },
}
</script>

<style scoped>

</style>