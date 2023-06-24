<template>
  <header>
    <Navbar />
  </header>
  <br />
  <main>
    <div class="container mt-2">
      <div class="row mt-1 d-flex justify-content-center">
        <div class="col-md-5">
          <h4>Grafik Data Siswa</h4>
          <Charts :arr-data="data" />
        </div>
        <div class="col-md-7">
          <div class="d-flex border-bottom p-1">
            <input
              class="form-control me-2 w-75"
              type="text"
              placeholder="Cari siswa ..."
              aria-label="Search"
              v-model="searchQuery"
            />
            <button
              :class="[
                'btn btn-outline-success btn-sm w-25',
                isCreating ? 'btn-outline-danger' : '',
              ]"
              @click="isCreating = !isCreating"
            >
              {{ isCreating ? "Cancel" : "Add" }}
            </button>
          </div>
          <br />
          <div v-if="resultQuery.length && !isCreating">
            <DaftarSiswa
              @on-remove="handleRemoveDataSiswa"
              class="border"
              :data="resultQuery"
            />
          </div>
          <div v-else-if="isCreating">
            <Form @on-submit="handleSubmitData" />
          </div>
          <p v-else>
            Tidak ditemukan siswa dengan nama
            <strong>' {{ searchQuery }} '</strong>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
 
 <script>
import Charts from "../../components/Charts.vue";
import Navbar from "../../components/Navbar.vue";
import DaftarSiswa from "../../components/Table.vue";
import { data } from "../../utils/data";
import Form from "../../components/Form.vue";

export default {
  components: {
    Charts,
    Navbar,
    DaftarSiswa,
    Form,
  },
  data() {
    return {
      data: data(),
      searchQuery: "",
      isCreating: false,
    };
  },
  methods: {
    handleSubmitData({ nis, nama, arrNilai }) {
      let found = false;
      this.data.forEach((siswa) => {
        if (siswa.nis === nis) {
          found = true;
          alert(`Siswa dengan NIS '${nis}' sudah ada.`);
          return false; // Menghentikan iterasi forEach
        }
      });

      if (!found) {
        this.data.push({
          nis,
          nama,
          arrNilai,
        });
      }

      this.isCreating = false;
    },

    handleRemoveDataSiswa(nis) {
      const confirmDelete = window.confirm(
        `Apakah anda yakin ingin menghapus data siswa dengan nis '${nis}' ? `
      );
      if (confirmDelete) {
        this.data = this.data.filter((siswa) => siswa.nis !== nis);
      }
    },
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.data.filter((d) =>
          this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => d.nama.toLowerCase().includes(v))
        );
      } else {
        return this.data;
      }
    },
  },
};
</script>
 