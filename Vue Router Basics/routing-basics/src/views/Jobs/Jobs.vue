<template>
    <div class="jobs">
        <h1>This is an Jobs Page</h1>
        <div v-if="jobs.length">
            <div v-for="job in jobs" :key="job.id" class="job">
                <router-link :to="{ name: 'JobDetails', params: { id: job.id }}">
                    <h2>{{ job.title }}</h2>
                </router-link>
            </div>
        </div>
        <div v-else>
            <p>No Jobs are Available!</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // jobs: [
            //     { id: 1, title: 'UX Designer', details: 'User experience design' },
            //     { id: 2, title: 'Web Developer', details: 'Creates and Maintains Websites' },
            //     { id: 3, title: 'Vue Developer', details: 'Creates and Maintains Websites using Vue.js' }
            // ]
            jobs: []
        }
    },

    mounted() {
        fetch('http://localhost:3000/jobs')
        .then(res => res.json())
        .then(data => this.jobs = data)
        .catch(err => console.log(err.message))
    }
}
</script>

<style>
    .job h2 {
        background: #f4f4f4;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 500px;
        cursor: pointer;
        color: #444;
    }

    .job h2:hover {
        background: #ddd;
    }

    .job a{
        text-decoration: none;
    }
</style>