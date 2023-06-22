<template>
   <nav class="navbar navbar-light bg-primary-subtle">
      <div class="container-fluid">
         <a class="navbar-brand font-monospace" href="#">
            <img src="../assets/img/student.png" alt="" width="30" height="24" class="d-inline-block align-text-top me-2">
            Bootstrap
         </a>
         <form class="d-flex">
            <input class="form-control me-2" type="text" placeholder="Cara siswa ..." aria-label="Search" v-model="searchQuery" @change.prevent="onQuery">
            <!-- <button class="btn btn-outline-success" type="submit" @click.prevent="onQuery">Search</button> -->
         </form>
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