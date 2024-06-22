<template>
  <div ref="mapContainer" class="h-full relative z-0">
    <div class="absolute z-10 right-[15px] top-[15px] rounded-lg">
      <h3
        v-if="isPolylineLoading"
        class="btn bg-white text-black px-3 py-1 font-bold"
      >
        Loading Polylines...
      </h3>
      <button
        v-if="isPolylineRendered"
        @click="addShapedArea"
        class="btn bg-yellow-400 text-black px-3 py-1 font-bold"
      >
        Show Shape Area
      </button>
    </div>
  </div>
</template>

<script>
  import mapboxgl from 'mapbox-gl';

  export default {
    name: 'DetailMap',
    props: {
      tracks: {
        type: Array
      }
    },

    data() {
      return {
        map: null,
        center: [117.224915, -0.572695],
        zoomLevel: 5,
        isPolylineLoading: false,
        isPolylineRendered: false,
      }
    },

    mounted() {
      try {
        this.initializeMap();
      } catch (error) {
        console.log('error', error)        
      }
    },

    methods: {
      initializeMap: function() {

        const runtimeConfig = useRuntimeConfig()
        mapboxgl.accessToken = runtimeConfig.public.mapboxKey;

        this.map = new mapboxgl.Map({
          container: this.$refs.mapContainer,
          style: 'mapbox://styles/mapbox/navigation-night-v1',
          center: this.center,
          projection: "naturalEarth",
          zoom: this.zoomLevel,
        });

        this.isPolylineLoading = true

        this.map.on("load", () => {
          this.addPolylines();
        });

      },

      getColor: function (speed) {
        if (speed > 4) {
          return 'red';
        } else if (speed > 3) {
          return 'orange';
        } else if (speed > 2) {
          return 'yellow';
        } else if (speed > 1) {
          return 'green';
        } else {
          return 'gray';
        }
      },

      addPolylines: function() {
        this.tracks.map((track, i) => {
          const color = this.getColor(track.speed);
          const polyline = {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  this.tracks[i].longitude,
                  this.tracks[i].latitude
                ],
                [
                  this.tracks.length == i+1 ? this.tracks[i].longitude : this.tracks[i+1].longitude,
                  this.tracks.length == i+1 ? this.tracks[i].latitude : this.tracks[i+1].latitude
                ]
              ]
            },
          }
          
          this.map.addLayer({
            id: 'route' + i,
            type: 'line',
            source: {
              type: 'geojson',
              data: polyline
            },
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': color,
              'line-width': 8
            }
          })
        });

        this.isPolylineLoading = false
        this.isPolylineRendered = true
      },

      addShapedArea: function() {
        this.map.addSource('shaped-area-nih', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Polygon',
                  coordinates: [
                    this.tracks.map((track) => {
                      return [track.longitude, track.latitude]
                    })
                  ]
                }
              },
            ]
          }
        });

        this.map.addLayer({
          id: 'park-boundary',
          type: 'fill',
          source: 'shaped-area-nih',
          layout: {},
          paint: {
            'fill-color': 'pink',
            'fill-opacity': 0.4
          }
        });
      },
    },

    beforeDestroy() {
      if (this.map) {
        this.map.remove();
        mapboxgl.clearStorage();
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