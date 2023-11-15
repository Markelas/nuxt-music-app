<script setup lang="ts">

const {data: musics} = await $fetch('/api/music')

</script>

<template>
  <div>
    <div style="margin-top: 150px">
      <MusicCard/>
    </div>
    <div>
      <AuthorsGroup :musics="musics" />
    </div>
  </div>
</template>

<style scoped>

</style>
