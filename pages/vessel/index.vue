<template>
  <div>
    <div class="bg-slate-800 w-[100%] h-[600px] shadow-md rounded-lg table overflow-hidden">
      <TransportationMap :cordinates="cordinates" />
    </div>
  </div>
</template>

<script>
import TransportationMap from '../../components/maps/transportation-map.vue';

export default {
  components: {
    TransportationMap
  },
  data() {
    return {
      cordinates: [
        { id: "001", coordinates: [104.13574858724009, 0.7168093965547221], name: 'Vessel 1', type: 'vessel' },
        { id: "004", coordinates: [117.224915, -0.572695], name: 'IMEI00002', type: 'vessel' },
        { id: "005", coordinates: [106.29293639509646, -3.456012446241142], name: 'Vessel 2', type: 'vessel' },
        { id: "006", coordinates: [120.98975223977902, -3.151023358342327], name: 'Vessel 3', type: 'vessel' },
        { id: "008", coordinates: [127.36898885625314, 0.9872728610667384], name: 'Vessel 4', type: 'vessel' },
        { id: "009", coordinates: [131.19585556927635, -0.8369716332725647], name: 'Vessel 5', type: 'vessel' },
        { id: "011", coordinates: [137.32889583477922, -5.102171372058664], name: 'Vessel 6', type: 'vessel' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>

</style>