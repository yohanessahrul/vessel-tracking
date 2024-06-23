<template>
  <div class="w-[300px]">
    <h1 class="text-center font-bold pt-6 mb-8">Sukses</h1>
    <div class="w-full h-[100px] mb-6 flex items-center justify-center">
      <img class="h-[100px]" src="../../public/success-icon.png" alt="success" />
    </div>
    <p v-if="action =='edit'" class="text-center">Anda berhasil mengubah data!</p>
    <p v-else-if="action =='delete'" class="text-center">Anda berhasil menghapus data!</p>
    <p v-else class="text-center">Anda berhasil membuat data!</p>
  </div>
</template>

<script>
export default {
  name: 'SuccessModal',
  props: ['action'],
}
</script>