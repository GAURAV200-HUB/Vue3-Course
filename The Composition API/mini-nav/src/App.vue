<template>
  <div class="main">
    <router-link :to="{name: 'Home'}">Home</router-link> |
    <router-link :to="{name: 'Home2'}">Home 2</router-link>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
