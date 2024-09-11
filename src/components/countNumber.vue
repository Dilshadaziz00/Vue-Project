<template>
  <div class="d-flex justify-content-between">
    <div>
      <p>Count: {{ count }}</p>
      <!-- <p>Action after 1 second</p> -->
      <p>Timer: {{ getTimer }}s</p>
      <p>{{ $store.state.title }}</p>
       <p ref="text"> change text</p>
      <button class="btn btn-primary" @click="titleIS">Title</button>
      <div class="d-flex gap-2">
        <button class="btn btn-primary " @click="increment">Increment</button>
        <button class="btn btn-primary " @click="decrement">Decrement</button>
      </div>
    </div>


    <div class="">
      <input type="text" v-model="itsText" placeholder="Enter item" required>
      <button class="btn btn-primary ml-3" @click="addItems"> Add item</button>
      <p v-if="errorMessage" class="text-danger">{{ errorMessage }} </p>

      <!-- <h2>Items  list</h2>      -->
      <div v-if="fruit.length > 0">
        <h1>.Items list</h1>

        <div class="">

          <ul>
            <li class="my-3" v-for="x in fruit" :key="x"> {{ x }}
              <button class="btn btn-primary ml-3" @click="removeItems"> Remove item</button>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- <p>Count: {{ count }}</p> -->
  <!-- <button class="btn btn-primary" @click="increment">Increment</button>
      <button class="btn btn-primary" @click="decrement">decrement</button> -->
  <!-- <slot name="card"></slot>
      <slot name="noCard"></slot> -->
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      itsText: '',
      errorMessage: ''

    }
  },
  mounted() {
    this.timeCounter()
  },
  computed: {
    count() {
      return this.$store.state.count;
      
    },
    ...mapState(['fruit']),
    ...mapGetters(['getTimer']),

  },
  methods: {
    increment() {
      this.$store.dispatch('incrementAsync');
      this.$refs.text.textContent="New  text"
    },
    decrement() {
      this.$store.dispatch('decrementAsync');
      this.$refs.text.textContent="old text"

    },
    ...mapActions(['timeCounter', 'showTitle']),
    ...mapMutations(['setFruit', 'removeFruit','setTitle']),
    titleIS(){

      this.$store.dispatch({ type:'showTitle', title:'New title is hehehe'})
      // this.showTitle()
    },
  
    removeItems() {
      this.removeFruit();

    //   if (this.getTimer > 0) {
    //     this.removeFruit();

    //   }
    //   else {
    //     this.errorMessage = "Sorry you can't remove it."
    //   }

    },
    
    addItems() {
      if (!this.itsText) {
        this.errorMessage = 'This field is required.';
        return;
      }
      // if (this.getTimer > 0) {
        this.fruit.push(this.itsText);
        this.itsText = '';
        this.setFruit(this.fruit);
        this.errorMessage = '';
      // }

      // else {
      //   this.errorMessage = "Sorry you can't add item."
      // }




    },
 
  },

};
</script>
<style scoped></style>