<template>
    <div>
      <b-button v-b-modal.modal-1>Open Product Info Modal</b-button>
  
      <data-list size="xl">
        <template v-slot:header>
          <h2>Product Info</h2>
        </template>
        <template v-slot:userInput>
          <div class="row ">
            <div class="col-md-6">
        
        <!-- <p>Product Name: {{ productName }}</p> -->

              <label for="ProductName">Product Name</label>
              <b-form-input v-model="productName" id="ProductName" type="text" placeholder="Enter product name"></b-form-input>
            </div>
            <div class="col-md-6">
                <!-- <p>Product Price: {{ productPrice }}</p> -->
              <label for="ProductPrice">Price</label>
              <b-form-input v-model="productPrice" id="ProductPrice" type="number" placeholder="Enter product price"></b-form-input>
            </div>
          </div>
        </template>
        <template v-slot:Footer>
        <b-button variant="secondary" @click="$bvModal.hide('modal-1')">Close2</b-button>
        <b-button variant="primary" @click="$bvModal.hide('modal-1')">Save changes</b-button>
      </template>
      </data-list>
  
      
    </div>
  </template>
  
  <script>
  import DataList from './slots-child.vue';
  
  export default {
    components: {
      DataList,
    },
    data() {
      return {
        productName: '',
        productPrice: null,
      };
    },
    watch: {
      productName(newName) {
        console.log('Product Name changed:', newName);
      },
      productPrice(newPrice) {
        console.log('Product Price changed:', newPrice);
      },
    },
  };
  </script>
  