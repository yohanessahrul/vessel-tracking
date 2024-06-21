<template>
  <div ref="mapContainer" class="h-full relative z-0">
    <div class="absolute z-10 right-[15px] top-[15px] rounded-lg">
      <button
        v-if="isScrollZoom"
        class="btn bg-yellow-400 px-2 py-1 rounded-sm text-black"
        @click="changeScrollZoom"
      >
        Zoom : On
      </button>
      <button
        v-else
        class="btn bg-gray-400 px-2 py-1 rounded-sm text-black"
        @click="changeScrollZoom"
      >
        Zoom : Off
      </button>
      <button
        class="btn bg-white px-2 py-2 rounded-sm text-black ml-2"
        @click="closeFromZoom"
      >
        <img class="w-[12px] h-[12px]" src="../../public/crosshair.png"/>
      </button>
    </div>
  </div>
</template>

<script>
  import mapboxgl from 'mapbox-gl';
  import plane from '../public/plane-icon.png';
  import ship from '../public/ship-icon.png';
  

  export default {
    name: 'TransportationMap',
    props: ['cordinates', 'isMarkerClickable'],
    data() {
      return {
        center: [117.224915, -0.572695],
        zoomLevel: 4,
        isScrollZoom: false,
      }
    },

    mounted() {
      try {
        const runtimeConfig = useRuntimeConfig()
        mapboxgl.accessToken = runtimeConfig.public.mapboxKey;

        const map = new mapboxgl.Map({
          container: this.$refs.mapContainer,
          style: 'mapbox://styles/mapbox/navigation-night-v1',
          center: this.center,
          projection: "naturalEarth",
          zoom: this.zoomLevel,
          bearing: 10,
          pitch: 0,
          attributionControl: false
        })
          .addControl(
            new mapboxgl.AttributionControl({
              compact: true,
              customAttribution: 'Map design by yosa'
            }),
          )

        map.scrollZoom.disable();

        this.cordinates.forEach(function(marker, i) {

          const newIcon = document.createElement('div');
            newIcon.className = 'marker';
            newIcon.style.backgroundImage = `url(${marker.type === 'plane' ? plane : ship})`;
            newIcon.style.width = `30px`;
            newIcon.style.height = `30px`;
            newIcon.style.backgroundSize = '100%';

          const markerEl = new mapboxgl.Marker(newIcon)
            .setLngLat(marker.coordinates)
            .setPopup(new mapboxgl.Popup().setHTML(`
              <div>
                <a
                  class="btn bg-yellow-100"
                  href="/${marker.type}/${marker.id}"
                >
                  <h1 class="px-2 py-1 font-bold text-blue-800" id="${marker.id}">${marker.name}</h1>
                </a>
              </div>
            `))
            .addTo(map)

            markerEl
              .togglePopup()
              .getRotationAlignment()

            markerEl.getElement().addEventListener('click', () => {
              map.flyTo({
                center: marker.coordinates,
                zoom: 12,
              })
            })
        });

        this.map = map;
        
      } catch (error) {
        console.log('error', error)
      }
    },

    methods: {
      changeScrollZoom: function() {
        if(this.map) {
          if (this.isScrollZoom) {
            this.map.scrollZoom.disable(); // Disable scroll zoom
          } else {
            this.map.scrollZoom.enable(); // Enable scroll zoom
          }
        }

        this.isScrollZoom = !this.isScrollZoom
      },
      closeFromZoom: function() {
        if(this.map) {
          this.map.flyTo({
            center: [117.224915, -0.572695],
            zoom: 4
          })
        }
      }

    },


    beforeUpdate() {
      console.log('before update hooks')
    },

    updated() {
      console.log('updated hooks')
    },
    
    beforeDestroy() {
      if (map) {
        map.remove();
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
    display: none;
    position: absolute;
    top: 8px;
    right: 8px;
    color: red;
    font-size: 25px;
  }
  .mapboxgl-popup-anchor-bottom {
    margin-top: -15px;
  }
</style>