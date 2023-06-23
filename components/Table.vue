<template>
  <table class="table table-hover text-center">
    <thead>
      <tr>
        <th scope="col">No</th>
        <th scope="col">NIS</th>
        <th scope="col">Nama</th>
        <th scope="col">Nilai rata-rata</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(siswa, i) in data" :key="siswa.nis">
        <th scope="row">{{ i + 1 }}.</th>
        <td>{{ siswa.nis }}</td>
        <td>{{ siswa.nama }}</td>
        <td>{{ countAverage(siswa.arrNilai) }}</td>
        <td>
          <NuxtLink
            :to="'/app/detail/' + siswa.nis"
            class="text-decoration-none hover-white btn btn-outline-primary btn-sm me-2"
          >
            Detail
          </NuxtLink>
          <button
            class="btn btn-outline-danger btn-sm"
            @click="removeData(siswa.nis)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { average } from "../utils/methods.js";

export default {
  props: {
    data: {
      type: Array,
    },
  },
  methods: {
    countAverage(arrNilai) {
      return average(arrNilai);
    },
    removeData(nis) {
      this.$emit("onRemove", nis);
    },
  },
};
</script>