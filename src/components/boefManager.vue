<script setup lang="ts">
import { VDataTable, VAutocomplete, VBtn, VRow } from 'vuetify/components'
import { ref, unref } from 'vue'
import { useDetaineeStore } from '@/stores/detaineeStore';
import { storeToRefs } from 'pinia';

const detaineeStore = useDetaineeStore();

const { getAll} = detaineeStore;

const { detaineeData } = storeToRefs(detaineeStore)


// const detaineeData = ref()
// const detaineeData2 = new Set()
// let detaineeData3 = []
const uniqueCrimes = new Set()

// const getAll = async () => {
//   try {
//   const result = await axios.get('http://localhost:3001/detainees')
//   detaineeData.value = result.data
//   detaineeData2.add(result.data)
//   detaineeData3 = result.data
//   console.log(result.data[1])
//   }catch (e) {
//     console.log(e);
//     alert(e + ',\n\n Please reload the page.')
//   }
//   return result.data
// }

getAll()

const getUniqueCrimes = async () => {
  const iteratedDetaineeData = detaineeData.value
  // const itteratedCriminals = unref(detaineeData).values()
  console.log('got here');
  console.log(detaineeData);
  
  for (const criminal in detaineeData) {
    console.log('hoi');
    console.log(JSON.stringify(criminal));
    
    criminal.crimes.array.forEach(crime => {
      uniqueCrimes.add(crime)
    });
    console.log(criminal);
    
  }
  // console.log(itteratedCriminals);

}

getUniqueCrimes()

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
