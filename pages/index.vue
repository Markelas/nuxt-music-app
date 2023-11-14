<template>
  <div>
    <h1 class="text-h2">Nice to see you, click on the button to start listening to music</h1>
    <v-btn class="d-flex justify-center align-items mt-5">listen to music</v-btn>
  </div>
</template>

<script setup>
import {useCounterStore} from "~/stores/store.js";
const store = useCounterStore();

const {data: music, pending} = await useFetch('/api/music', {
  transform: (_music)=> _music.data,
})
console.log(music)
</script>

<style scoped lang="scss">
 * {
   margin: auto auto
 }
</style>
