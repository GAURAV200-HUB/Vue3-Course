<template>
  <div class="post-list">
      <div v-for="post in posts" :key="post.id">
          <p>{{ post.title }}</p>
      </div>
  </div>
</template>

<script>
export default {
    props: ['posts'],

    setup(props) {
        console.log(props.posts)
    }
}
</script>

<style>

</style>