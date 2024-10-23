<template>
  <div>
    <b-modal id="modal-1" :size="size" title="Product Information">
    
      <template v-slot:modal-header >
        <slot name="header">
         
        </slot>
        <div> <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            style="cursor: pointer;" 
            @click="$bvModal.hide('modal-1')"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg></div>
      </template>

      <!-- Modal Body -->
      <template v-slot:default>
        <slot name="userInput"></slot>
      </template>

      <!-- Modal Footer with Buttons -->
      <template v-slot:modal-footer>
        <slot name="Footer"></slot>
      
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'lg', // Default modal size
    },
  },
};
</script>

<style >
#modal-1 {
  color: black !important;
}

</style>
