import { defineStore } from 'pinia'
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
  uniqueCrimes: string[]
  uniqueCriminalLevels: string[]
  selectedCriminalLevel: string |null
  selectedCrime: string | null
  filteredDetaineesByCrime: Detainee[] | undefined
}

export const useDetaineeStore = defineStore('DetaineeStore', {
  state: () => ({
    detaineeData: [],
    uniqueCrimes: [],
    uniqueCriminalLevels: [],
    selectedCriminalLevel: null,
    selectedCrime: null,
    filteredDetaineesByCrime: undefined
  }),

  getters: {},

  actions: {
    // Haalt alle data op van de gedetineerden en slaat deze op in deze store 
    // en geeft een error als de call mislukt
    async getAll() {
      try {
        const response = await axios.get('http://localhost:3001/detainees')
        this.detaineeData = response.data
        this.updateUniqueCrimes()
        this.getUniqueCriminalLevels()
      } catch (e) {
        console.log(e)
        alert('Something went wrong, please reload the page.')
      }
    },


    // Haalt alle unieke misdaden op, als er een parameter wordt doorgegeven
    // dan worden de misdaden gefilterd op criminaliteitsniveau 
    async updateUniqueCrimes(criminalLevel = null) {
      let filteredCriminals = this.detaineeData

      if (criminalLevel !== null) {
        filteredCriminals = this.detaineeData.filter(
          (criminal) => criminal['criminalLevel'] === criminalLevel
        )
      }

      // Verzameld alle misdaden en pusht ze in een array
      const allCrimes = await filteredCriminals.reduce((acc, criminal: string) => {
        //@ts-ignore
        acc.push(...criminal.crimes)
        return acc
      }, [])

      // Set() wordt gebruikt om alleen unieke midaden aan de array toe te voegen
      const uniqueCrimes = [...new Set(allCrimes)]
      this.uniqueCrimes = uniqueCrimes
    },


    // Haalt alle criminal levels op, plaatst de unieke waardes in een array en slaat ze op in de store
    async getUniqueCriminalLevels() {
      const criminalLevels = await this.detaineeData.map((criminals) => criminals['criminalLevel'])
      const uniqueCriminalLevels = [...new Set(criminalLevels)]
      this.uniqueCriminalLevels = uniqueCriminalLevels
    },


    // Haalt de gedetineerden op, gefilterd op de gepleegde misdaad 
    //@ts-ignore
    async getCriminalsByCrime(selectedCrime: string) {
      const criminals = this.detaineeData

      const matchingCriminals = criminals.filter((criminal) => {
        //@ts-ignore
        return criminal.crimes.includes(selectedCrime)
      })
      //@ts-ignore
      this.filteredDetaineesByCrime = matchingCriminals
    }
  }
})
