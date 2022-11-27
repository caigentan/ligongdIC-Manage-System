import { defineStore } from "pinia";

export const useComState = defineStore('comStore', {
    state: ()=>{
        return {
            name: 'Ligongd',
            age: 22,
        }
    },
    getters: {},
    actions: {
        
    }
})