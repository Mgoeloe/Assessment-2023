import { defineStore } from "pinia"
import axios from 'axios'

export interface Detainee {
    id: number
    jailtime: string
    name: string
    crimes: string[]
    criminalLevel: number
    photo?: string
}

export interface State {
    detaineeData: Detainee[]
}

export const useDetaineeStore = defineStore('DetaineeStore', {
    state: () => ({ 
        detaineeData: [],
     }),

    getters: {},

    actions: {
        async getAll() {
            try {
            const response = await axios.get('http://localhost:3001/detainees')
            this.detaineeData = response.data
            console.log(response.data)
            }catch (e) {
              console.log(e);
              alert(e + ',\n\n Please reload the page.')
            }
          }
      },
    },
)