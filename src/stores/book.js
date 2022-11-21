import {defineStore} from 'pinia' 
export const useBook=defineStore('book',{
    state:()=>{
      return{
        sum:10
      }
    },
    actions:{
      decrement(){
        this.sum--
      }
    }
  })
  