export default {
  data() {
    return {
        counter:0,
    }
   

  },
  methods:{
    decrementFive(){
        if(this.counter>0)
        this.counter -=5
    },
    incrementFive(){
        this.counter +=5
     }
  }



}