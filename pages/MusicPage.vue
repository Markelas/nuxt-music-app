<script setup lang="ts">
import {useCounterStore} from "~/stores/store.js";
const store = useCounterStore();

const {data: musics} = await $fetch('/api/music')
console.log(musics)

</script>

<template>
  <div>
    <div style="margin-top: 200px">
      <MusicCard/>
    </div>
    <div>
      <AuthorsGroup :musics="musics" />
    </div>
  </div>
</template>

<style scoped>

</style>
