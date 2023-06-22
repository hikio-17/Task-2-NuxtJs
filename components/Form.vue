<template>
  <div class="card container p-3">
    <form @submit.prevent="onSubmitData">
      <div class="mb-3">
        <label class="form-label">Nomor Induk Siswa</label>
        <input
          type="number"
          class="form-control"
          placeholder="Masukkan NIS"
          v-model="addData.nis"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Nama Siswa</label>
        <input
          type="text"
          class="form-control"
          placeholder="Masukkan Nama Siswa"
          v-model="addData.nama"
        />
      </div>

      <div class="row mb-3">
        <label class="form-label">Inputan Nilai Siswa</label>
        <div class="col-sm-3">
          <input
            v-model="addData.arrNilai[0]"
            type="number"
            class="form-control"
            placeholder="input nilai 1"
            min="1"
            max="100"
            required
            oninvalid="this.setCustomValidity('Masukkan nilai dengan range 10 - 100')"
            oninput="this.setCustomValidity('')"
          />
        </div>
        <div class="col-sm-3">
          <input
            v-model="addData.arrNilai[1]"
            type="number"
            class="form-control"
            placeholder="input nilai 2"
            min="1"
            max="100"
            required
            oninvalid="this.setCustomValidity('Masukkan nilai dengan range 10 - 100')"
            oninput="this.setCustomValidity('')"
          />
        </div>
        <div class="col-sm-3">
          <input
            v-model="addData.arrNilai[2]"
            type="number"
            class="form-control"
            placeholder="input nilai 3"
            min="1"
            max="100"
            required
            oninvalid="this.setCustomValidity('Masukkan nilai dengan range 10 - 100')"
            oninput="this.setCustomValidity('')"
          />
        </div>
        <div class="col-sm-3">
          <input
            v-model="addData.arrNilai[3]"
            type="number"
            class="form-control"
            placeholder="input nilai 4"
            min="1"
            max="100"
            required
            oninvalid="this.setCustomValidity('Masukkan nilai dengan range 10 - 100')"
            oninput="this.setCustomValidity('')"
          />
        </div>
      </div>

      <div class="d-flex justify-content-end">
        <button class="btn btn-outline-primary w-25">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addData: {
        nis: null,
        nama: "",
        arrNilai: [],
      },
    };
  },
  methods: {
    onSubmitData() {
      console.log(this.addData);
      this.$emit("onSubmit", this.addData);
      this.addData = {
        nis: null,
        nama: "",
        nilai: null,
      };
    },
  },
};
</script>