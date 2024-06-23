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
    name: 'IndonesiaMap',
    props: ['cordinates'],
    data() {
      return {
        center: [117.224915, -0.572695],
        zoomLevel: 4,
        isScrollZoom: false
      }
    },

    mounted() {
      const runtimeConfig = useRuntimeConfig()
      mapboxgl.accessToken = runtimeConfig.public.mapboxKey;

      const start = {
        center: [80, 36],
        zoom: 0.5,
        pitch: 0,
        bearing: 0
      };

      const end = {
        center: this.center,
        zoom:4,
        bearing: 7,
        pitch: 20,
      };

      const map = new mapboxgl.Map({
        container: this.$refs.mapContainer,
        style: 'mapbox://styles/mapbox/navigation-night-v1',
        center: this.center,
        projection: "globe",
        zoom: this.zoomLevel,
        attributionControl: false,
        ...start
      })
        .addControl(
          new mapboxgl.AttributionControl({
            compact: true,
            customAttribution: 'Map design by yosa'
          }),
        )

      map.on('style.load', () => {
        // Custom atmosphere styling
        map.setFog({
            'color': 'rgb(220, 159, 159)', // Pink fog / lower atmosphere
            'high-color': 'rgb(36, 92, 223)', // Blue sky / upper atmosphere
            'horizon-blend': 0.7 // Exaggerate atmosphere (default is .1)
        });

        map.addSource('mapbox-dem', {
            'type': 'raster-dem',
            'url': 'mapbox://mapbox.terrain-rgb'
        });

        map.setTerrain({
            'source': 'mapbox-dem',
            'exaggeration': 1.5
        });

        const target = isAtStart ? end : start;
        isAtStart = !isAtStart;

        map.flyTo({
            ...target, // Fly to the selected target
            duration: 8000, // Animate over 12 seconds
            essential: true // This animation is considered essential with
            //respect to prefers-reduced-motion
        });

    });

    let isAtStart = true;

      map.scrollZoom.disable();

      this.cordinates.forEach(function(marker, i) {

        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = `url(${marker.type === 'plane' ? plane : ship})`;
        el.style.width = `20px`;
        el.style.height = `20px`;
        el.style.backgroundSize = '100%';

        const popup = `
          <div class="w-[250px] bg-white p-4 rounded-md flex shadow-lg relative wanjay" data-popup='${JSON.stringify(marker)}'>
            <div class="w-[60px] h-[60px] bg-gray-600 rounded-lg mr-4 overflow-hidden">
              <img id='${marker.id}' data-img='${JSON.stringify(marker)}' class="object-cover h-[60px] w-[60px]" src="${marker.type === 'plane' ? avatarPesawat : avatarVessel}" />
            </div>
            <div>
              <h2 @click="test" class="font-bold text-base mb-0 pb-0 mb-[5px]">${marker.name}</h2>
              <table class="border-spacing-0">
                <tr class="px-0 py-0">
                  <td class="p-0">Type &nbsp;</td>
                  <td class="p-0">: ${marker.type}</td>
                </tr>
                <tr class="px-0 py-0">
                  <td class="p-0">Spec  &nbsp;</td>
                  <td class="p-0">: unknown</td>
                </tr>
              </table>
            </div>
          </div>
        `

        new mapboxgl.Marker(el)
          .setLngLat(marker.coordinates)
          .setPopup(
            new mapboxgl.Popup({closeOnClick: true, closeButton: false})
            .setHTML(popup)
          )
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