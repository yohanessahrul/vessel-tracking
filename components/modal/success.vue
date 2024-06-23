<template>
  <div class="w-[500px] h-[400px] bg-yellow-300">
    <h3>Sukses</h3>
    <p v-if="action =='edit'">Anda berhasil mengubah data!</p>
    <p v-if="action =='delete'">Anda berhasil menghapus data!</p>
  </div>
</template>

<script>
export default {
  name: 'SuccessModal',
  props: ['action'],
}
</script>