<template>
  <div class="jobDetails">
      <div v-if="job">
        <h1>Job Details Page</h1>
        <h3>{{ job.title}}</h3>
        <p>The Job id is {{ id }}</p>
        <i>{{ job.details }}</i>
      </div>
      <div v-else>
        <h1>Loading Job details...</h1>
      </div>
  </div>
</template>

<script>
export default {
    props: ['id'],
    // data() {
    //   return {
    //     id: this.$route.params.id
    //   }
    // }
    data() {
      return {
        job: null
      }
    },

    mounted() {
        fetch('http://localhost:3000/jobs/' + this.id)
        .then(res => res.json())
        .then(data => this.job = data)
        .catch(err => console.log(err.message))
    }
}
</script>

<style>

</style>