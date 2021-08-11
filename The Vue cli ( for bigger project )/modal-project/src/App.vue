<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Welcome...</p>
    <teleport to=".newModal" v-if="showModel">
      <Modal :header="header" :msg="text" @close="toggleModel">
        <i>{{subTitle}}</i>
        <template v-slot:links>
          <a href="#">Sign Up</a>
          <a href="#">Register</a>
        </template>
      </Modal>
    </teleport>

    <div v-if="showModelTwo">
      <Modal @close="toggleModelTwo">
        <h1>Sign up to the newsletter</h1>
        <p>For updates and promo codes!</p>
      </Modal>
    </div>
    <button @click="toggleModel">Show Model (alt)</button>
    <button @click="toggleModelTwo">Open Model</button>
  </div>
</template>

<script>
import Modal from './components/Modal'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My First Vue App!',
      subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      header: 'Sign up for the Giveaway!',
      text: 'Grab this products for halp Prise...',
      showModel: false,
      showModelTwo: false
    }
  },

  methods: {
    toggleModelTwo() {
      this.showModelTwo = !this.showModelTwo
    },

    toggleModel() {
      this.showModel = !this.showModel
    }
  }
}
</script>

<style>
#app, .newModal {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
