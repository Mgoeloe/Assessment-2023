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
}

export const useDetaineeStore = defineStore('DetaineeStore', {
  state: () => ({
    detaineeData: [],
    uniqueCrimes: [],
    uniqueCriminalLevels: [],
    selectedCriminalLevel: null,
    selectedCrime: null,
    filteredDetaineesByCrime: undefined,
  }),

  getters: {},

  actions: {
    async getAll() {
      try {
        const response = await axios.get('http://localhost:3001/detainees')
        this.detaineeData = response.data
        this.updateUniqueCrimes()
        this.getUniqueCriminalLevels()
        console.log(this.detaineeData)
      } catch (e) {
        console.log(e)
        // getAll()
        alert(e + ',\n\n Please reload the page.')
      }
    },
    async updateUniqueCrimes(criminalLevel = null) {
      let filteredCriminals = this.detaineeData;

      if (criminalLevel !== null) {
        filteredCriminals = this.detaineeData.filter(
          criminal => criminal.criminalLevel === criminalLevel
        );
      }

      const allCrimes = await filteredCriminals.reduce((acc, criminal) => {
        acc.push(...criminal.crimes)
        return acc
      }, [])

      // Filter out duplicates by converting to Set and back to Array
      const uniqueCrimes = [...new Set(allCrimes)]
      this.uniqueCrimes = uniqueCrimes
    },
    async getUniqueCriminalLevels() {
        const criminalLevels = await this.detaineeData.map((criminals) => criminals.criminalLevel)
        const uniqueCriminalLevels = [...new Set(criminalLevels)]
        this.uniqueCriminalLevels = uniqueCriminalLevels
    },

    async getCriminalsByCrime(selectedCrime) {
      const criminals = this.detaineeData;

      const matchingCriminals = criminals.filter(criminal => {
        return criminal.crimes.includes(selectedCrime);
      });

      this.filteredDetaineesByCrime = matchingCriminals;
    }

  }
})
