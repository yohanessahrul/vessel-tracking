<template>
  <div class="w-[500px]">
    <h3>Konfirmasi</h3>
    <p>Anda yakin ingin menghapus data ini ?</p>
    <p class="bg-gray-400 mt-4 mb-4 p-4 rounded-lg text-sm">{{ JSON.stringify(this.currentData) }}</p>
    <div class="w-full">
      <button
        class="btn bg-gray-700 px-4 py-2 text-white mt-4 mr-4"
        @click="closeBackdropFunction"
      >
        Tidak
      </button>
      <button
        class="btn bg-red-700 px-4 py-2 text-white mt-4"
        @click="deletedDataFunction(currentData.id)"
      >
        Ya
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmationDelete",
  props: ['currentData', 'closeBackdropFunction', 'deletedDataFunction'],
}
</script>

<style lang="scss" scoped>

</style>