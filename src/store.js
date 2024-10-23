import Vue from 'vue';
import Vuex from 'vuex';
import modules from "./myNewModules";
Vue.use(Vuex);


const store = new Vuex.Store({ 
  modules:{
    userText:modules,
  },
  state: {
    // Define your state here
    isDarkMode: false,
    count: 0,
    timer:15,
    objectData: [] ,
    fruit:[],
    intervalValue:null,
    title:'This is old title!'
     
    
  
  },
  mutations: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
      if (state.isDarkMode) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
    },
    setDarkMode(state, isDark) {
      state.isDarkMode = isDark;
      if (isDark) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    },
    setTitle(state,payload){
    state.title=payload.title
    },
    setTimer(state){
      state.timer=state.timer -1;
    },
    setTimerTo30(state){
      state.timer=15;
    },
    setIntervalValue(state,payload){
      state.intervalValue=payload
    },
    increment(state) {
      state.count+=2;
    },
    setProduct(state, data) {
      state.objectData = data; 
    },
    setFruit(state, Fruit) {
      state.fruit = Fruit; 
    },
    removeFruit(state,Fruit) {
      let index=state.fruit.indexOf(Fruit);
      state.fruit.splice(index,1); 
    },

    decrement(state) {
  //     if(state.count > 0 )
  // state.count-=2;
  state.count = state.count > 0 ? state.count -2 : state.count;
      
    }
  },    
    getters:{
      getProduct(state){
        return  state.objectData;
      },
      getFruit(state){
        return  state.fruit;
      },
      getTimer(state){
        return state.timer;
      },
      getIntervalValue(state){
        return state.intervalValue;
      }

    },
  actions: {
    initializeDarkMode({ commit }) {
      const isDark = localStorage.getItem('theme') === 'dark';
      commit('setDarkMode', isDark);
    },
    
      showTitle(title ,payload){
       
        title.commit('setTitle',payload)
    
      },
      
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 100);
    },
    decrementAsync({ commit }) {
      setTimeout(() => {
        commit('decrement');
      }, 100);
    },
    timeCounter({ commit, getters }) {
      if(getters.getIntervalValue!=null)
       {
        return 
       }
     let intervalValue = setInterval(() => {
      let timer = getters.getTimer
      console.log('timer',timer )
      if(timer<=0)
      {
        // commit('setTimerTo30');
        clearInterval(getters.getIntervalValue)
      }
      else{
        commit('setTimer');
      }
      }, 1000);
      commit('setIntervalValue',intervalValue)
      
    },
   

    // Define your actions here
    // increment({ commit }) {
    //   commit('increment');
    // },
    // decrement({ commit }) {
    //   commit('decrement');
    // }
  },

});

export default store;
