import { defineStore } from "pinia";
import {ref, reactive} from "vue";

export const useKnowledgeStore = defineStore('knowledge',{
    state: ()=>{
        return {
            types: reactive([])
        }
    }

})