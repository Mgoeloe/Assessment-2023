<script setup lang="ts">
import { ref, unref } from 'vue'
import { useDetaineeStore, type Detainee } from '@/stores/detaineeStore'
import { storeToRefs } from 'pinia'

const detaineeStore = useDetaineeStore()

const { getAll, getUniqueCrimes } = detaineeStore

const { detaineeData, uniqueCrimes, uniqueCriminalLevels } = storeToRefs(detaineeStore)


const test = () => {
  getUniqueCrimes(3)
  console.log(uniqueCrimes)
  console.log(uniqueCriminalLevels)
}

getAll()


</script>

<template>
  <row>
    <v-btn @click="getAll" class="mb-2"> Reload </v-btn>
    <v-btn @click="test" class="mb-2 ml-5"> Log </v-btn>
  </row>
  <v-row>
    <v-col cols="12" md="6">
      <v-select
        label="Select criminal level"
        :items="uniqueCriminalLevels"
        variant="outlined"
        clearable
      ></v-select>
    </v-col>
    <v-col cols="12" md="6">
      <v-card class="mx-auto" max-width="300">
        <v-list :items="uniqueCrimes"></v-list>
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-data-table :items="detaineeData"> </v-data-table>
    </v-col>
  </v-row>
</template>
