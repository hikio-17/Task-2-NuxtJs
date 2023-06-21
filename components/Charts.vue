<template>
   <div class="w-100">
      <Pie :data="chartData" :options="chartOptions" />
   </div>
</template>
 
<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
   components: {
      Pie
   },
   data() {
      return {
         chartData: {
            labels: [
               'Red',
               'Blue',
               'Yellow'
            ],
            datasets: [
               {
                  backgroundColor: [
                     'rgb(255, 99, 132)',
                     'rgb(54, 162, 235)',
                     'rgb(255, 205, 86)'
                  ],
                  data: [40, 20, 12]
               }
            ]
         },
         chartOptions: {
            responsive: true
         }
      }
   }
}
</script>
 