export default{
  namespaced:true,
            state:{
                text:'This is  modules text ',
            },
            mutations:{
              setModule(state,payload){
                state.text=payload.text_1
              },
            }
       
}