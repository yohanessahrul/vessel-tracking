<template>
  <div>
    <div class="absolute left-0 top-0 w-full h-full bg-black opacity-50 z-10 flex justify-center items-center"></div>
    <div class="fixed left-0 top-0 w-full h-full z-20 bottom-3 flex justify-center items-center">
      <div class=" relative bg-white px-6 py-6 text-black rounded-lg">
        <button class="btn bg-gray-900 text-white px-3 py-1 absolute top-4 right-4" @click="closeBackdropFunction">x</button>
        <div class="my-4">
          <!-- dynamic children rendered by props -->
          <component
            :is="children"
            :action="action"
            :currentData="currentData"
            :submitDataFunction="submitDataFunction"
            :closeBackdropFunction="closeBackdropFunction"
            :deletedDataFunction="deletedDataFunction"
          ></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormAdd from '../form/add.vue'
import FormEdit from '../form/edit.vue'
import ConfirmationDelete from '../modal/confirmation-delete.vue'
import SuccessModal from '../modal/success.vue'

export default {
  name: "BackdropScreen",
  props: [ 'action', 'childrenModal', 'closeBackdropFunction', 'currentData', 'submitDataFunction', 'deletedDataFunction' ],
  components: {
    'create-asset': FormAdd,
    'edit-asset': FormEdit,
    'confirmation-delete-asset': ConfirmationDelete, 
    'success': SuccessModal,
  },
  data() {
    return {
      children: this.childrenModal // mention di parent ex. 'edit-asset'
    }
  }
}
</script>
