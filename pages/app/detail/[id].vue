<template>
  <Navbar />
  <br />
  <div v-for="siswa in data" :key="siswa.nis" class="container">
    <div
      v-if="siswa.nis == params"
      class="card mb-3 shadow-lg p-3 mb-5 bg-body rounded"
    >
      <div class="row w-100">
        <div class="col-md-4">
          <img
            src="../../../assets/img/student.png"
            class="img-fluid rounded-start w-75"
            alt="..."
          />
        </div>
        <div class="col-md-8 border-start">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div>
                <h1 class="card-title">{{ siswa.nama }}</h1>
                <p class="card-text">NIS: {{ siswa.nis }}</p>
              </div>
              <div
                :class="[
                  'd-flex align-items-center justify-content-center rounded-circle',
                  countAverage(siswa.arrNilai) > 90 ? 'bg-success' : '',
                  countAverage(siswa.arrNilai) > 80 && countAverage(siswa.arrNilai) <= 90 ? 'bg-primary' : '',
                  countAverage(siswa.arrNilai) > 75 && countAverage(siswa.arrNilai) <= 80 ? 'bg-warning' : '',
                  countAverage(siswa.arrNilai) < 75 ? 'bg-danger' : '',
                ]"
              >
                <h3 class="p-4 text-white font-bold">{{ countAverage(siswa.arrNilai) }}</h3>
              </div>
            </div>
            <br>
            <table class="table table-hover text-center">
              <thead class="table-secondary">
                <tr>
                  <th colspan="2">Nilai Ulangan</th>
                </tr>
                <tr>
                  <th>Ulangan</th>
                  <th>Nilai</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(nilai, i) in siswa.arrNilai" :key="i">
                  <td>Ke - {{ i + 1 }}</td>
                  <td>{{ nilai }}</td>
                </tr>
                <tr>
                  <th>Total Nilai</th>
                  <th>20</th>
                </tr>
              </tbody>
            </table>
            <div class="float-end">
               <button class="btn btn-outline-primary" @click="$router.go(-1)">Kembali</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../../../components/Navbar.vue";
import { data } from "../../../utils/data";
import { average } from "../../../utils/methods";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      params: Number(this.$route.params.id),
      data: data(),
    };
  },
  methods: {
   countAverage(arrNilai) {
      return average(arrNilai)
   }
  }
};
</script>