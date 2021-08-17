<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>
      Loading...
      <!-- <Spinner /> -->
    </div>
  </div>
</template>

<script>
// component imports
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts.js'
// import Spinner from '../components/Spinner.vue'

export default {
  name: 'Home',
  components: { PostList },
  setup() {
    const { posts, error, load } = getPosts()

    load()
    
    return { posts, error }
  },
}
</script>

<style>
    .home {
      max-width: 1200px;
      margin: 0 auto;
      padding: 10px;
    }
</style>