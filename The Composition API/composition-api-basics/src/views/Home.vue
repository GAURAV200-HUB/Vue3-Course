<template>
  <div class="home">
    <h1>home Page</h1>
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click Me!</button>
    <input type="text" v-model="name">
    <br /><br/>
    <button @click="age++">Increase Age</button>
    <button                                                                                                                                                      @click="age--">Decrease Age</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home',

  setup() {
    // const p = ref(null)

    const name = ref('Mario')
    const age = ref(30)

    const handleClick = () => {
      name.value = 'luigi'
      age.value = 40
    }

    return { name, age, handleClick}
  }
}
</script>
