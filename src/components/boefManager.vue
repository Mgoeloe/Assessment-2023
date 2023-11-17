<script setup lang="ts">
import { ref, unref } from 'vue'
import { useDetaineeStore, type Detainee } from '@/stores/detaineeStore'
import { storeToRefs } from 'pinia'

const detaineeStore = useDetaineeStore()

const { getAll, updateUniqueCrimes, getCriminalsByCrime } = detaineeStore

const {
  detaineeData,
  uniqueCrimes,
  uniqueCriminalLevels,
  selectedCriminalLevel,
  selectedCrime,
  filteredDetaineesByCrime
} = storeToRefs(detaineeStore)

const test = () => {
  updateUniqueCrimes(3)
  console.log(uniqueCrimes)
  console.log(uniqueCriminalLevels)
}
const clearInput = () => {
  selectedCriminalLevel.value = null
  filteredDetaineesByCrime.value = undefined
}

getAll()
</script>

<template>
  <row class="d-flex justify-space-evenly mt-10">
    <v-btn variant="outlined" @click="clearInput"> Clear all input </v-btn>

    <!-- <v-btn @click="test" class="mb-2 ml-5"> Log </v-btn> -->
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
          <img :src="item.photo" style="width: 50px; height: 50px" v-show="item.photo"/>
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>

<style scoped>
.v-select .dropdown-toggle .clear {
  z-index: 99;
}
</style>
