<template>
  <div class="Home2">
      <h1>Home 2</h1>
      <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { ref } from 'vue'

export default {
    name: "Home",

    components: {
        PostList
    },

    setup() {
        const posts = ref([
            { title: "Welcome to the blog", body: "Lorem ipsum", id: 1 },
            { title: "Top 5 css tips", body: "Lorem ipsum", id: 2 }
        ])

        return { posts }
    }
}
</script>

<style>

</style>