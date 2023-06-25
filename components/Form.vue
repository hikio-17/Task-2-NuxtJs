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
          required
            oninvalid="this.setCustomValidity('Field NIS tidak boleh kosong!')"
            oninput="this.setCustomValidity('')"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Nama Siswa</label>
        <input
          type="text"
          class="form-control"
          placeholder="Masukkan Nama Siswa"
          v-model="addData.nama"
          required
            oninvalid="this.setCustomValidity('Field nama siswa tidak boleh kosong!')"
            oninput="this.setCustomValidity('')"
        />
      </div>

      <div class="mb-3 d-flex">
        <label class="form-label">Jenis Kelamin</label>
        {{ ' : ' }}
        <div class="d-flex ms-2">
          <div class="form-check me-2">
          <input
            class="form-check-input"
            type="radio"
            name="jenisKelamin"
            id="pria"
            value="pria"
            v-model="addData.jenisKelamin"
          />
          <label class="form-check-label" for="pria">
            Pria
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="jenisKelamin"
            id="wanita"
            value="wanita"
            v-model="addData.jenisKelamin"
          />
          <label class="form-check-label" for="wanita">
            Wanita
          </label>
        </div>
        </div>
      </div>

      <div class="row mb-3">
        <label class="form-label">Inputan Nilai Siswa</label>
        <div class="col-sm-3">
          <input
            v-model="addData.arrNilai[0]"
            type="number"
            class="form-control"
            placeholder="input nilai 1"
            min="10"
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
            min="10"
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
            min="10"
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
            min="10"
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
        jenisKelamin: '',
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
        nama: '',
        jenisKelamin: '',
        nilai: null,
      };
    },
  },
};
</script>