<script setup lang="ts">
import { ref, unref } from 'vue'
import { useDetaineeStore, type Detainee } from '@/stores/detaineeStore'
import { storeToRefs } from 'pinia'

const detaineeStore = useDetaineeStore()

const { getAll, getUniqueCrimes, getUniqueCriminalLevels } = detaineeStore

const { detaineeData } = storeToRefs(detaineeStore)

const uniqueCriminalLevels = getUniqueCriminalLevels();
const uniqueCrimes = getUniqueCrimes();




const test = () => {
  console.log(uniqueCrimes)
  // console.log(uniqueCriminalLevels)

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
      <v-autocomplete
        label="Select criminal level"
        :items="['1', '2', '3']"
        variant="outlined"
        clearable
      ></v-autocomplete>
    </v-col>
    <v-col cols="12" md="6">
      <v-data-table :items="detaineeData"> </v-data-table>
    </v-col>
  </v-row>
</template>
