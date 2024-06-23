<template>
  <div class="w-[400px]">
    <h3 class="mb-4 font-bold">Add Asset</h3>
    <div class="w-full h-[30px]  mb-8">
      <input v-model="id" class="w-full h-full bg-yellow-100 py-6 px-4 rounded-md border-spacing-0" type="text" placeholder="ID" />
    </div>
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
      Create
    </button>
  </div>
</template>

<script>
export default {
  name: "FormAdd",
  props: ['submitDataFunction'],
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