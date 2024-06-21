<template>
  <div ref="mapContainer" class="h-full relative z-0">
    <div class="absolute z-10 right-[15px] top-[15px] rounded-lg">
      <button
        v-if="isScrollZoom"
        class="btn bg-yellow-400 px-2 py-1 rounded-sm text-black"
        @click="changeScrollZomm"
      >
      Zoom : On
    </button>
    <button
    v-else
    class="btn bg-gray-400 px-2 py-1 rounded-sm text-black"
    @click="changeScrollZomm"
  >
  Zoom : Off
</button>
    </div>
  </div>
</template>

<script>
  import mapboxgl from 'mapbox-gl';
  import plane from '../public/plane-icon.png';
  import ship from '../public/ship-icon.png';
  import avatarPesawat from '../public/avatar-pesawat.jpeg';
  import avatarVessel from '../public/avatar-vessel.png';

  export default {
    name: 'DetailMap',
    props: ['cordinates', 'isMarkerClickable'],
    data() {
      return {
        center: [117.224915, -0.572695],
        zoomLevel: 10,
        isScrollZoom: true
      }
    },

    mounted() {
      const runtimeConfig = useRuntimeConfig()
      mapboxgl.accessToken = runtimeConfig.public.mapboxKey;

      const map = new mapboxgl.Map({
        container: this.$refs.mapContainer,
        style: 'mapbox://styles/mapbox/navigation-night-v1',
        center: this.center,
        projection: "naturalEarth",
        zoom: this.zoomLevel,
        maxZoom: 8,

      });

      map.scrollZoom.disable();

      this.cordinates.forEach(function(marker, i) {
        // console.log(`marker ${i}`, marker);

        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = `url(${marker.type === 'plane' ? plane : ship})`;
        el.style.width = `30px`;
        el.style.height = `30px`;
        el.style.backgroundSize = '100%';
        el.addEventListener('click', () => {
          window.location.href=`/${marker.type}/${marker.id}`
        })

        new mapboxgl.Marker(el)
          .setLngLat(marker.coordinates)
          .addTo(map)

      });

      this.map = map;


    },

    methods: {
      changeScrollZomm: function() {
        if(this.map) {
          if (this.isScrollZoom) {
            this.map.scrollZoom.disable(); // Disable scroll zoom
          } else {
            this.map.scrollZoom.enable(); // Enable scroll zoom
          }
        }

        this.isScrollZoom = !this.isScrollZoom
      },
    },
    
    beforeDestroy() {
      if (this.map) {
        this.map.remove();
      }
    }
  }

</script>

<style>
  .mapboxgl-popup-content {
    margin: 0 !important;
    padding: 0 !important;
  }
  .mapboxgl-popup-close-button {
    position: absolute;
    top: 8px;
    right: 8px;
    color: red;
    font-size: 25px;
  }
</style>