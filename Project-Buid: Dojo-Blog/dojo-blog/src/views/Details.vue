<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
      <button @click="handleDelete" class="delete">Delete Post</button>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import getPost from "../composables/getPost.js";
import { useRoute, useRouter } from "vue-router";
import { projectFirestore } from '../firebase/config.js';
export default {
  props: ["id"],
  setup(props) {
    const route = useRoute();
    const router = useRouter()
    // console.log(router)
    //console.log(route.params)
    const { post, error, load } = getPost(route.params.id);

    const handleDelete = async () => {
      await projectFirestore.collection('posts').doc(props.id).delete()

      router.push({name: 'Home'})
    }

    load();

    return { post, error, handleDelete };
  },
};
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}

.post p {
  color: #444;
  line-height: 1.5rem;
  margin-top: 40px;
}

.pre {
  white-space: pre-wrap;
}

button.delete {
  margin: 10px auto;
}
</style>