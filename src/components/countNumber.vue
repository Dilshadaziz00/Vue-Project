<template>
  <div>
    <div class="d-flex justify-content-between">
      <div>


        <!-- <button class="btn btn-secondary" @click="getUser(userName)">User Name</button> -->
        <div class="font-weight-bold"> Counter From Mixins </div>
        <p><strong> Counter: </strong> {{ counter }}</p>
        <div class=" d-flex ">
          <button class="btn btn-info mr-3" @click="incrementFive">+Five</button>
          <button class="btn btn-info" @click="decrementFive">-Five</button>
        </div>

        <div class="" v-html=tag> </div>
        <!-- <p>Action after 1 second</p> -->

        <div><strong> Filtered Text </strong></div>
        <p><strong> Title: </strong> {{ $store.state.title | upcase }}</p>
        <p :class="applyStyle"><strong> Modules: </strong> {{ $store.state.userText.text }}</p>
        <button class="btn btn-dark" @click="show = !show"> Toggle </button>
        <div class="d-flex gap-2 mb-2">
          <button class="btn btn-danger" @click="modules">Module</button>
          <button class="btn btn-primary" @click="titleIS">Title</button>
        </div>
        <p><strong> Count: </strong> {{ count }}</p>
        <p><strong> Text: </strong> <span ref="text">change text </span> </p>
        <div class="d-flex gap-2 my-5">
          <button class="btn btn-primary " @click="increment">Increment</button>
          <button class="btn btn-primary " @click="decrement">Decrement</button>
        </div>
      </div>
      <div>


        <p v-if="message" class="text-success">{{ message | upcase }} </p>
        <form @submit.prevent="submitForm">
          <input class="input_box" v-model="name" required placeholder="Type.....">
          <button class="btn btn-success " type="submit">Submit</button>
          <p>Data:{{ data }}</p>
          <input class="input_box" v-model="data" required placeholder="type here">
          <span v-if="!name">
            <p>Name is required</p>
          </span>
        </form>
        <div>Selected: {{ selected }}</div>

        <select class="input_box" v-model="selected">
          <option disabled value="">Please select one</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <div class="mt-4">
          <span>Radio button</span>
          <div>Picked: {{ picked }}</div>

          <input type="radio" id="one" value="One" v-model="picked" />
          <label for="one">One</label>

          <input type="radio" id="two" value="Two" v-model="picked" />
          <label for="two">Two</label>
        </div>
        <div>
          <span>Options:</span>
          <select v-model="selected2">
            <!-- inline object literal -->

            <option :value="{ number: 123 }">123</option>
            <option :value="{ number: 222 }">222</option>
            <option :value="{ number: 444 }">444</option>
          </select>
        </div>
        <div>
          <input ref="input" placeholder="ref" />
          <button class="btn btn-dark" @click="focusInput">Focus the Input</button>

        </div>
        <div class="typed-wrapper">
          <div> <span>Typing .Js</span></div>
          <div>
            <span id="typed"></span>
          </div>
        </div>

        <span v-show="isTrue">status is true</span>
        <div class="mt-3">Switch</div>
        <label class="switch">
          <input type="checkbox" checked v-model="isTrue">
          <span class="slider"></span>
        </label>
      </div>

      <div class=" ">
        <p><strong> Timer: </strong> {{ getTimer }}s</p>
        <div class="d-flex gap-2">
          <input class="mr-2 input_box" type="text" v-model="itsText" placeholder="Enter item" required>
          <button class="btn btn-primary" @click="addItems"> Add item</button>
        </div>
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
      <!-- <b-form-group class="col-12 col-md-1" label="Auth">
                                        <label class="switch s-icons s-outline s-outline-success mr-2 ">
                                            <input type="checkbox" checked v-model=convertOauth>
                                            <span class="slider round"></span>
                                        </label>
                                    </b-form-group> -->
      <!-- <div>
    <slot name="card"></slot>
    <slot name="noCard"></slot>
  </div> -->
    </div>
  </div>

</template>

<script>
import Typed from 'typed.js';
import CountFive from '../Mixins/mixin'
// import ButtonComp  from './ButtonComponent.vue'

import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  components: {
    // ButtonComp
  },
  props: {
    getUser: Function
  },
  mixins: [CountFive],
  data() {
    return {
      isTrue: false,
      hasAddedItem: false,
      data: '',
      addedItemCount: 0,
      itsText: '',
      errorMessage: '',
      selected: '',
      selected2: null,
      picked: '',
      show: false,
      name: '',
      message: '',
      userName: 'Ali Khan',
      tag: '<div class="my-4"> <h1>Hello form  tag </h1> </div>'


    }
  },


  computed: {


    applyStyle() {
      return {
        yesShow: this.show,
        noShow: false,
        showMe: false
      }

    },
    count() {
      return this.$store.state.count;

    },
    ...mapState(['fruit', 'isDarkMode']),
    ...mapGetters(['getTimer']),

  },
  //   filter:('upcase' ,function(val){
  //   return val.toUpperCase();

  // }),
  // local filters ///
  
  filters: {
    upcase(val) {
      return val.toUpperCase();
    }
  },
  // beforeDestroy() {
  //   // Destroy the instance to prevent memory leaks
  //   if (this.typed) {
  //     this.typed.destroy();
  //   }
  // },
  methods: {



    focusInput() {
      // Access the input element using this.$refs
      this.$refs.input.focus();
    },
    submitForm() {

      this.$emit('reload')
      this.name = '',
        this.message = 'Your data is  Submit '
      setTimeout(() => {
        this.message = ''
      }, 2000);

    },

    increment() {
      this.$store.dispatch('incrementAsync');
      this.$refs.text.textContent = " New text"
    },
    decrement() {
      this.$store.dispatch('decrementAsync');
      this.$refs.text.textContent = "old text"

    },
    ...mapActions(['timeCounter', 'showTitle']),
    // ...mapMutations(['setFruit', 'removeFruit','setTitle','userText/setModule']),


    //  For using namespaced 
    ...mapMutations({
      setFruit: 'setFruit',
      removeFruit: 'removeFruit',
      setTitle: 'setTitle',
      setModule: 'userText/setModule' // Accessing mutation in namespaced module
    }),
    modules() {
      this.setModule(
        { text_1: 'New module text' }
      )
    },
    titleIS() {

      this.$store.dispatch({ type: 'showTitle', title: 'New title is hehehe' })
      // this.showTitle()
    },


    removeItems() {
      this.addedItemCount--;
      //  console.log('--',this.addedItemCount--)
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
      if (this.getTimer > 0 && this.addedItemCount < 3) {
        this.fruit.push(this.itsText);
        this.itsText = '';
        this.setFruit(this.fruit);
        this.errorMessage = '';
        this.addedItemCount++;
        // console.log('++',this.addedItemCount++)

      } else if (this.getTimer > 0 && this.addedItemCount >= 3) {
        this.errorMessage = 'You can only add three items during the timer period.';
      } else {
        this.errorMessage = 'Timer expired, cannot add items.';
      }

      // const  x ='1' -1 +"1"
      // console.log('X', x)


    },
    typingText() {
      //   const options = {
      //   strings: ['Hello, welcome to Vue.js!', 'This is a typing effect.'],
      //   typeSpeed: 50,
      //   backSpeed: 25,
      //   loop: true,
      // };
      // new Typed('#typed', options); 
      // this.typed = new Typed('#typed', options);
      const options = {
        strings: ['npm install<br> `installing components...`<br> `Fetching from source...`'],
        typeSpeed: 50,
        backSpeed: 0,
        loop: true
      };
      new Typed('#typed', options);
    },

  },
  mounted() {
    // this.typingText(),
    this.timeCounter()
  },

};
</script>
<style scoped>
/* From Uiverse.io by gharsh11032000 */
/* The switch - the box around the slider */
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border: 2px solid #414141;
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  left: 0.2em;
  bottom: 0.2em;
  background-color: rgb(49, 26, 223);
  border-radius: inherit;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
}

.switch input:checked+.slider {
  box-shadow: 0 0 20px rgba(9, 117, 241, 0.8);
  border: 2px solid #0974f1;
}

.switch input:checked+.slider:before {
  transform: translateX(1.5em);
}

.dark-mode .input_box {
  background-color: #121212;
  color: white;
  border: 1px solid #223242;
}

.dark-mode {
  background-color: #121212;
  color: white;
}

.yesShow {
  color: red;
}

.noShow {
  background-color: blue;
}

.showMe {
  font-size: 22px;
}
</style>