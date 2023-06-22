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
            <td>{{ average(siswa.arrNilai) }}</td>
            <td>
               <button class="btn btn-info btn-sm me-2">Detail</button>
               <button class="btn btn-danger btn-sm" @click="removeData(siswa.nis)">Delete</button>
            </td>
         </tr>
      </tbody>
   </table>
</template>

<script>
export default {
   props: {
      data: {
         type: Array
      }
   },
   methods: {
      average(arrNilai) {
         if (arrNilai.length === 0) {
            return 0;
         }

         let total = arrNilai.reduce((acc, curr) => acc + curr, 0);

         return total / arrNilai.length;

      },

      removeData(nis) {
         this.$emit('onRemove', nis);
      }
   },

}
</script>