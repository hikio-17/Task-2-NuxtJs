<template>
   <nav class="navbar navbar-light"  style="background-color: #e3f2fd;">
      <div class="container-fluid d-flex flex-column justify-content-center">
         <NuxtLink class="navbar-brand font-monospace" to="/app">
            <img src="../assets/img/student.png" alt="logo" width="35" height="35" class="d-inline-block align-text-top me-2">
         </NuxtLink>
         <h4>Pangkalan Data Siswa</h4>
      </div>
   </nav>
</template>

<script>
export default {
   data() {
      return {
         searchQuery: ''
      }
   },
   methods: {
      onQuery() {
         this.$emit('on-query', this.searchQuery)
      }
   }
}
</script>