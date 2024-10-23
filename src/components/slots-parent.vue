<template>
    <div>
      <b-button v-b-modal.modal-1>Open User Info Modal</b-button>
  
      <data-list  size="lg">
        <template v-slot:header>
          <h2>User Info</h2>
        </template>
        <template v-slot:userInput>
          <div class="row ">
            <div class="col-md-6">
              <label for="Name">Name</label>
              <b-form-input id="Name" type="text" placeholder="Enter your name"></b-form-input>
            </div>
            <div class="col-md-6">
              <label for="Email">Email</label>
              <b-form-input id="Email" type="email" placeholder="Enter your email"></b-form-input>
            </div>
            <div class="col-md-6">
              <label for="Password">Password</label>
              <b-form-input id="Password" type="password" placeholder="Enter your Password"></b-form-input>
            </div>
           
          </div>
        </template>
        <template v-slot:Footer>
        <b-button variant="secondary" @click="$bvModal.hide('modal-1')">Closex</b-button>
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
    data(){
return{
  
}
    },
  };
  </script>
  