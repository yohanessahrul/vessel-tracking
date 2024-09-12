<template>
  <div>
    <BackdropScreen
      v-if="isBackdropActive"
      :action="action"
      :childrenModal="childrenModal"
      :currentData="currentData"
      :closeBackdropFunction="closeBackdrop"
      :submitDataFunction="submitData"
      :deletedDataFunction="deletedData"
    />
    <h1 class="mt-10 font-bold text-4xl">Device Monitoring</h1>
    <p class="font-light text-md mb-6 mt-0 pt-0">Transportation monitoring asset entire Indonesia</p>
    <div class="bg-slate-800 w-[100%] h-[450px] shadow-md rounded-lg table overflow-hidden">
      <IndonesiaMap :cordinates="cordinates" />
    </div>
    <div class="w-[100%]  bg-white shadow-md rounded-lg mt-6">
      <div class="container p-6 relative overflow-x-auto">
        <div class="w-full h-[40px] mb-6 flex justify-between">
          <h3 class="font-bold">Asset Data</h3>
          <button
            class="btn bg-green-600 text-white py-2 px-6 rounded-lg"
            @click="clickedToCreate('create', '', {})"
          >Add</button>
        </div>

        <table class="border-slate-300 border-spacing-0 w-full ">
          <thead class="bg-slate-800 text-white">
            <tr>
              <th class=" border-slate-100 text-left px-3 py-2">Brand Name</th>
              <th class=" border-slate-100 text-left px-3 py-2">Transport</th>
              <th class=" border-slate-100 text-left px-3 py-2">Last Position</th>
              <th class=" border-slate-100 text-left px-3 py-2">History</th>
              <th class=" border-slate-100 text-left px-3 py-2">Edit</th>
              <th class=" border-slate-100 text-left px-3 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            
            <tr v-for="item in cordinates" :key="item.id"
              class="odd:bg-white odd:dark:bg-gray-100 even:bg-gray-50 even:dark:bg-gray-200"
            >
              <td class="px-2 py-2">{{ item.name }}</td>
              <td class="px-2 py-2 capitalize">{{ item.type }}</td>
              <td class="px-2 py-2">{{ JSON.stringify(item.coordinates.join()) }}</td>
              <td class="px-2 py-2">5 mile</td>
              <td class="px-2 py-2">
                <button
                  @click="clickedDataToEdit('edit', item.id, item)"  
                  class="btn bg-blue-900 py-1 px-4 text-white"
                >
                  Edit
                </button>
              </td>
              <td class="px-2 py-2">
                <button
                  @click="clickedDataToDelete('delete', item.id, item)"  
                  class="btn bg-orange-900 py-1 px-4 text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import BackdropScreen from '../components/modal/backdrop.vue';
import IndonesiaMap from '../components/maps/indonesia-map.vue';

export default {
  components: {
    IndonesiaMap,
    BackdropScreen,
  },
  data() {
    return {
      cordinates: [
        { id: "001", coordinates: [104.13574858724009, 0.7168093965547221], name: 'Vessel 1', type: 'vessel' },
        { id: "002", coordinates: [106.70387019353444, -6.295122093207836], name: 'Pesawat 1', type: 'plane' }, 
        { id: "003", coordinates: [98.87509245186857, 3.631458971433959], name: 'Pesawat 2', type: 'plane' }, 
        { id: "004", coordinates: [117.224915, -0.572695], name: 'IMEI00002', type: 'vessel' },
        { id: "005", coordinates: [106.29293639509646, -3.456012446241142], name: 'Vessel 2', type: 'vessel' },
        { id: "006", coordinates: [120.98975223977902, -3.151023358342327], name: 'Vessel 3', type: 'vessel' },
        { id: "007", coordinates: [115.16817622313957, -8.746781210150695], name: 'Pesawat 3', type: 'plane' },
        { id: "008", coordinates: [127.36898885625314, 0.9872728610667384], name: 'Vessel 4', type: 'vessel' },
        { id: "009", coordinates: [131.19585556927635, -0.8369716332725647], name: 'Vessel 5', type: 'vessel' },
        { id: "010", coordinates: [111.67419584407263, -2.624698540782821], name: 'Pesawat 4', type: 'plane' },
        { id: "011", coordinates: [137.32889583477922, -5.102171372058664], name: 'Vessel 6', type: 'vessel' },
        { id: "012", coordinates: [140.51818926723098, -2.5770067657578624], name: 'Pesawat 5', type: 'plane' },
        { id: "013", coordinates: [119.5493144, -5.07750919543936], name: 'Pesawat 6', type: 'plane' },
      ],
      isBackdropActive: false,
      childrenModal: '',
      action: '', // create, edit
      currentData: {},
      isSuccess: false,
    }
  },
  methods: {
    showBackdrop: function () {
      this.isBackdropActive = true
    },

    closeBackdrop: function() {
      this.isBackdropActive = false
    },

    clickedToCreate: function(action) {
      this.childrenModal = 'create-asset'
      this.showBackdrop()
      this.action = action
    },

    clickedDataToEdit: function(action, id, currentData) {
      this.childrenModal = 'edit-asset'
      this.showBackdrop()
      let payload = {
        id: currentData.id,
        name: currentData.name,
        longitude: currentData.coordinates[0],
        latitude: currentData.coordinates[1],
        type: currentData.type
      }
      this.currentData = payload
      this.action = action
    },

    clickedDataToDelete: function(action, id, currentData) {
      this.childrenModal = 'confirmation-delete-asset'
      this.showBackdrop()
      this.currentData = currentData
      this.action = action
    },

    submitData: function (newValue) {
      let submitData = [...this.cordinates];

      let payload = {
        id: newValue.id,
        name: newValue.name,
        coordinates: [newValue.longitude, newValue.latitude],
        type: newValue.type
      }
      
      if (this.action == 'create') {
        submitData.push(payload)
      } else if (this.action == 'edit') {
        let tmp = submitData.filter((t) => t.id !== newValue.id)

        tmp.push(payload)
        submitData = tmp
      }
      this.cordinates = submitData
      this.successSubmit()
    },

    deletedData: function(id) {
      let tmp = this.cordinates.filter((t) => t.id !== id)
      this.cordinates = tmp
      this.successSubmit()
    },

    successSubmit: function () {
      this.childrenModal ='success'
      this.closeBackdrop()
      setTimeout(() => {
        this.showBackdrop()
      }, 1000);
      setTimeout(() => {
        this.childrenModal =''
        this.closeBackdrop()
      }, 5000);
    },
  },
};

</script>
