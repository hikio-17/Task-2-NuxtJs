<template>
  <div class="w-75">
    <Pie :data="chartData" :options="chartOptions" />
  </div>
</template>
 
<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Title, Legend);

export default {
  components: {
    Pie,
  },
  props: {
    arrData: {
      type: Array,
      default: () => [
        {
          nis: null,
          nama: "",
          arrNilai: [],
        },
      ],
    },
  },
  data() {
    return {
      siswaCategorySangatBaik: 0,
      siswaCategoryBaik: 0,
      siswaCategoryCukup: 0,
      siswaCategoryKurang: 0,
      dat: [],
    };
  },
  methods: {
    calculateCategoryCounts() {
      // Menghitung jumlah siswa dalam setiap kategori
      this.arrData.forEach((siswa) => {
        let total = siswa.arrNilai.reduce((acc, curr) => acc + curr, 0);
        const average = total / siswa.arrNilai.length;

        if (average > 90) {
          ++this.siswaCategorySangatBaik;
        } else if (average > 80) {
          ++this.siswaCategoryBaik;
        } else if (average > 70) {
          ++this.siswaCategoryCukup;
        } else {
          ++this.siswaCategoryKurang;
        }
      });

      // Memperbarui data pada objek chartData
      this.data = [
        this.siswaCategorySangatBaik,
        this.siswaCategoryBaik,
        this.siswaCategoryCukup,
        this.siswaCategoryKurang,
      ];
    },

    clearData() {
      this.data = [];
      this.siswaCategoryBaik = 0;
      this.siswaCategorySangatBaik = 0;
      this.siswaCategoryCukup = 0;
      this.siswaCategoryKurang = 0;
    },
  },
  computed: {
    chartData() {
      this.clearData();

      this.calculateCategoryCounts();
      return {
        labels: ["Sangat Baik", "Baik", "Cukup", "Kurang"],
        datasets: [
          {
            backgroundColor: ["green", "blue", "orange", "red"],
            data: this.data,
          },
        ],
      };
    },

    chartOptions() {
      return {
        layout: {
          padding: 20,
        },
        plugins: {
          title: {
            display: true,
            text: "Grafik Data Siswa Berdasarkan Nilai",
            font: {
              size: 24
            }
          },
        }
      };
    },
  },
};
</script>
 