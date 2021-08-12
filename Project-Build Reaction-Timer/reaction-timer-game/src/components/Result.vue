<template>
  <div>
      <p>Your Reaction Time is: {{score}} ms</p>
      <h1 class="rank">{{rank}}</h1>
  </div>
</template>

<script>
export default {
    props: ['score'],

    data() {
        return {
            rank: null
        }
    },

    mounted() {
        if (this.score <= 300) {
            this.rank = 'Ninja Finger'
        } else if (this.score <= 450){
            this.rank = 'You are doing great job!'
        }
        else {
            this.rank = 'Keep Practicing!'
        }
    }
}
</script>

<style>
    .rank {
        font-size: 1.4rem;
        color: #0faf87;
        font-weight: bold;
    }
</style>