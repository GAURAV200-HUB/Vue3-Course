<template>
  <div class="projectDisplay" :class="{ complete: project.complete }">
      <div class="actions">
          <h3 @click="showDetails = !showDetails">{{ project.title }}</h3>
          <div class="icons">
            <router-link :to="{ name: 'EditProject', params: { id: project.id }}">
              <span class="material-icons">edit</span>
            </router-link>
              <span @click="deleteProjects" class="material-icons">delete</span>
              <span @click="toggleComplete" class="material-icons tick">done</span>
          </div>
      </div>
      <div v-if="showDetails" class="details">
          <p>{{ project.details }}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'SigleProject',

    props: ['project'],

    data() {
        return {
            showDetails: false,
            uri: 'http://localhost:3000/projects/' + this.project.id
        }
    },

    methods: {
        deleteProjects() {
            fetch(this.uri, { method: 'DELETE' })
                .then(() => this.$emit('delete', this.project.id))
                .catch(err => console.log(err.message))
        },

        toggleComplete() {
            fetch(this.uri, { 
                method: 'PATCH',
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify({ complete: ! this.project.complete})
            })
                .then(() => this.$emit('complete', this.project.id))
                .catch(err => console.log(err.message))
        }
    }
}
</script>

<style>
    .projectDisplay {
        margin: 20px auto;
        background: white;
        padding: 10px 20px;
        border-radius: 4px;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
        border-left: 6px solid #FA7D09;
    }

    .projectDisplay.complete {
        border-left: 6px solid #17B794;
    }

    .projectDisplay.complete .tick {
        color: #17B794;
    }

    .actions {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .actions h3{
        cursor: pointer;
    }

    .material-icons {
        font-size: 24px;
        margin-left: 10px;
        color: #bbb;
        cursor: pointer;
    }

    .material-icons:hover {
        color: #777;
    }
</style>