<script setup lang="ts">

const {data: musics} = await $fetch('/api/music')

</script>

<template>
  <div>
    <div>
      <div style="margin-top: 150px">
        <MusicCard :musics="musics"/>
      </div>
      <div>
        <AuthorsGroup :musics="musics" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
