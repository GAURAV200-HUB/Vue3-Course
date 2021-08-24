<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="Enter Email" v-model="email" />
    <input
      type="password"
      required
      placeholder="Enter Password"
      v-model="password"
    />
    <button>Log In</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    // refs
    const email = ref("");
    const password = ref("");

    // events
    const handleSubmit = () => {
      console.log(email.value, password.value);
    };

    return { email, password, handleSubmit };
  },
};
</script>

<style>
</style>