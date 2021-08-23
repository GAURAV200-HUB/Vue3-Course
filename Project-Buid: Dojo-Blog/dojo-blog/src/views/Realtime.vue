<template>
  <div>
    <h1>Real-Time Data</h1>
    <div v-for="post in posts" :key="post">
      <h1>{{post.title}}</h1>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { projectFirestore } from "../firebase/config";
export default {
  setup() {
    const posts = ref([]);

    projectFirestore
      .collection("posts")
      .orderBy("createdOn", "desc")
      .onSnapshot((snap) => {
        let docs = snap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        console.log("documnets:", docs);
        posts.value = docs;
      });

    return { posts };
  },
};
</script>

<style>
</style>