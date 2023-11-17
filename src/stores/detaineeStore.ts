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
  }),

  getters: {},

  actions: {
    async getAll() {
      try {
        const response = await axios.get('http://localhost:3001/detainees')
        this.detaineeData = response.data
        this.getUniqueCrimes()
        this.getUniqueCriminalLevels()
        console.log(this.detaineeData)
      } catch (e) {
        console.log(e)
        // getAll()
        alert(e + ',\n\n Please reload the page.')
      }
    },
    async getUniqueCrimes() {
      const allCrimes = await this.detaineeData.reduce((acc, criminal) => {
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
    }
  }
})
