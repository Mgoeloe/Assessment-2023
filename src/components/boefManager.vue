<script setup lang="ts">
import { useDetaineeStore, type Detainee } from '@/stores/detaineeStore'
import { storeToRefs } from 'pinia'

const detaineeStore = useDetaineeStore()

const { getAll, updateUniqueCrimes, getCriminalsByCrime } = detaineeStore

const {
  uniqueCrimes,
  uniqueCriminalLevels,
  selectedCriminalLevel,
  selectedCrime,
  filteredDetaineesByCrime
} = storeToRefs(detaineeStore)

// Functie om alle invoerbare waardes te wissen
const clearInput = () => {
  selectedCriminalLevel.value = null
  filteredDetaineesByCrime.value = undefined
}

// Haalt alle data van mock server
getAll()
</script>

<template>
  <row class="d-flex justify-space-evenly mt-10">
    <v-btn variant="outlined" @click="clearInput"> Clear all input </v-btn>
  </row>
  <v-row class="mt-6">
    <v-col cols="12" md="6">
      <v-select
        v-model="selectedCriminalLevel"
        v-on:update:model-value="updateUniqueCrimes(selectedCriminalLevel)"
        label="Select criminal level"
        :items="uniqueCriminalLevels"
        clearable
        clear-icon="mdi-close"
        variant="outlined"
      ></v-select>
    </v-col>
    <v-col cols="12" md="6">
      <v-card class="mx-auto" max-width="300">
        <v-list>
          <v-list-item
            v-model="selectedCrime"
            v-for="(item, index) in uniqueCrimes"
            :key="index"
            :value="item"
            @click="getCriminalsByCrime(item)"
          >
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-data-table :items="filteredDetaineesByCrime" v-show="filteredDetaineesByCrime">
        <template v-slot:item.photo="{ item }">
          <img :src="item.photo" style="width: 50px; height: 50px" v-show="item.photo" />
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>


