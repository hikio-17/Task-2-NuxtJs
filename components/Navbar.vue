<template>
   <nav class="navbar navbar-light bg-primary-subtle">
      <div class="container-fluid">
         <a class="navbar-brand font-monospace" href="#">
            <img src="../assets/img/student.png" alt="" width="30" height="24" class="d-inline-block align-text-top me-2">
            Bootstrap
         </a>
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