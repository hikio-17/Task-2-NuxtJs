<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <Charts />
      </div>
      <div class="col-md-6 text-center">
        Table Siswa
      </div>
    </div>
  </div>
</template>

<script>
import Charts from './components/Charts.vue'
export default {
  components: {
    Charts
  },
  data() {
    return {
      name: "Hikma Nelda"
    }
  }
}
</script>
