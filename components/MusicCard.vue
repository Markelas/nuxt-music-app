<template>
  <v-card
      color="#952175"
      theme="dark"
      class="card__box"
  >
    <div class="d-flex flex-no-wrap justify-space-between" v-if="musicStore.activeMusic">
      <div>
        <v-card-title class="text-h5">
          {{musicStore.activeMusic.name}}
        </v-card-title>

        <v-card-subtitle>{{musicStore.activeMusic.album}}</v-card-subtitle>
        <v-card-subtitle>{{musicStore.activeMusic.authors}}</v-card-subtitle>

        <v-card-actions>
          <aduio-comp  :activeMusicSource="activeMusicSource" :key="activeMusicSource+hackHtml"/>
        </v-card-actions>
      </div>

      <v-avatar
          class="ma-3"
          size="125"
          rounded="0"
      >
        <v-img :src="activeMusicImg"></v-img>
      </v-avatar>
    </div>
    <div v-else class="text-h5 card__empty-music"><h3>Выберите музыку из списка ниже</h3></div>
  </v-card>
</template>

<script setup>
import {useMusicStore} from "~/stores/store";

const musicStore = useMusicStore()

const activeMusicSource = computed(()=> {
  return (musicStore.activeMusic) ? musicStore.activeMusic.audioSource : null
})
const activeMusicImg = computed(()=> {
  return (musicStore.activeMusic) ? musicStore.activeMusic.imgSource : null
})
let hackHtml = ""; //Хакаем vue, чтобы компонент перерисовался после обновления
</script>

<style scoped>
.card__box{
  max-width: 600px;
  margin: 0 auto;
}
.card__empty-music{
  height: 150px;
  display: flex;
  align-items: center;
  padding: 40px;
}
</style>
