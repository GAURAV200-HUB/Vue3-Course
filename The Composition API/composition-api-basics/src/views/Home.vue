<template>
  <div class="home">
    <h1>home Page</h1>
    <h3>Refs</h3>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update Ninja One</button>                                                                                                                                                  @click="age--">Decrease Age</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'Home',

  setup() {
    const ninjaOne = ref({ name: 'Mario', age: 30})

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40
    }
    return { ninjaOne, updateNinjaOne }
  }
}
</script>
