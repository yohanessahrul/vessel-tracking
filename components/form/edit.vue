<template>
  <div class="w-[400px]">
    <h3 class="mb-4 font-bold">Form Edit</h3>
    <div class="w-full h-[30px]  mb-8">
      <input v-model="name" class="w-full h-full bg-yellow-100 py-6 px-4 rounded-md border-spacing-0" type="text" placeholder="Name" />
    </div>
    <div class="w-full h-[30px]  mb-8">
      <input v-model="longitude" class="w-full h-full bg-yellow-100 py-6 px-4 rounded-md border-spacing-0" type="text" placeholder="Longitude" />
    </div>
    <div class="w-full h-[30px]  mb-8">
      <input v-model="latitude" class="w-full h-full bg-yellow-100 py-6 px-4 rounded-md border-spacing-0" type="text" placeholder="Latitude" />
    </div>
    <div class="w-full h-[30px]  mb-8">
      <input v-model="type" class="w-full h-full bg-yellow-100 py-6 px-4 rounded-md border-spacing-0" type="text" placeholder="Type" />
    </div>
    
    <button
      @click="submitDataFunction({id, name, longitude, latitude, type})"
      class="btn bg-green-700 px-4 py-2 text-white mt-4"
    >
      Update
    </button>
  </div>
</template>

<script>
export default {
  name: "FormEdit",
  props: ['currentData', 'submitDataFunction'],
  created() {
    this.id= this.currentData.id
    this.name= this.currentData.name
    this.longitude= this.currentData.longitude
    this.latitude= this.currentData.latitude
    this.type= this.currentData.type
  },
  data() {
    return {
      id: '',
      name: '',
      longitude: '',
      latitude: '',
      type: '',
    }
  },
}
</script>

<style lang="scss" scoped>

</style>