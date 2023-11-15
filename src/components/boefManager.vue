<script setup lang="ts">
import axios from 'axios'
import { VDataTable, VAutocomplete, VBtn } from 'vuetify/components'
import { ref } from 'vue'

const detaineeData = ref()
const uniqueCrimes = ref()

const getAll = async () => {
  try {
  const result = await axios.get('http://localhost:3001/detainees')
  detaineeData.value = result.data
  console.log(result.data)
  }catch (e) {
    console.log(e);
    alert(e + ',\n\n Please reload the page.')
  }
}

getAll()

const getUniqueCrimes = async () => {
  try {
    
  }catch (e) {
    console.log(e);
  }
}

</script>

<template>
    <v-btn @click="getAll"> test </v-btn>
    <v-row>
      <v-col cols="6">
        <v-autocomplete
          label="Select criminal level"
          :items="['1', '2', '3']"
          variant="outlined"
          clearable
          clear-icon="X"
        ></v-autocomplete>
      </v-col>
      <v-col cols="6">
        <v-data-table
        :items="detaineeData">

        </v-data-table>
      </v-col>
    </v-row>
</template>
