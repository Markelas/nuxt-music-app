<script lang="ts">
export default {
  props: ['activeMusicSource']
};
</script>

<template>
  <div>
    <audio controls="controls">
      <source :src="activeMusicSource">
    </audio>
  </div>
</template>

<style scoped>

</style>
