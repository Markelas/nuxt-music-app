<template>
  <v-card
      color="#952175"
      theme="dark"
      class="card__box"
  >
    <v-avatar
        class="active__music__card--small-img"
        size="125"
        rounded="0"
    >
      <v-img :src="activeMusicImg"></v-img>
    </v-avatar>
    <div class="active__music__card d-flex flex-no-wrap justify-space-between" v-if="musicStore.activeMusic">
      <div>
        <v-card-title class="text-h5">
          {{musicStore.activeMusic.name}}
        </v-card-title>

        <v-card-subtitle>{{activeMusic.album}}</v-card-subtitle>
        <v-card-subtitle>{{activeMusic.authors}}</v-card-subtitle>

        <v-card-actions>
          <v-btn :class="{ disabled : disableArrowsLeft}" @click="musicStore.backTrack"><MiArrowLeft/></v-btn>
          <aduio-comp  :activeMusicSource="activeMusicSource" :key="activeMusicSource+hackHtml"/>
          <v-btn :class="{disabled : disableArrowsRight}" @click="musicStore.nextTrack"><MiArrowRight/></v-btn>
        </v-card-actions>
      </div>

      <v-avatar
          class="ma-3 active__music__card--big-img"
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
import MiArrowRight from "~/components/icons/ArrowRight.vue";
import MiArrowLeft from "~/components/icons/ArrowLeft.vue";

const musicStore = useMusicStore()

const props = defineProps(['musics'])
const musics = props.musics
const disableArrowsLeft = computed(()=> {
  return musicStore.activeMusic === musicStore.activeAlbum[0]
})
const disableArrowsRight = computed(()=> {
  return musicStore.activeMusic === musicStore.activeAlbum[length-1]
})
const activeMusic = computed(() => {
  return musicStore.activeMusic
})

const activeMusicSource = computed(()=> {
  return (musicStore.activeMusic) ? musicStore.activeMusic.audioSource : null
})
const activeMusicImg = computed(()=> {
  return (musicStore.activeMusic) ? musicStore.activeMusic.imgSource : null
})
let hackHtml = ""; //Хакаем vue, чтобы компонент перерисовался после обновления
</script>

<style scoped>
.active__music__card--small-img{
  display: none;
}
.disabled{
  cursor: default;
  color: rgba(121, 119, 119, 0.98);
  opacity: 1;
}
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
@media (max-width: 670px) {
  .active__music__card{
    display: flex !important;
    align-items: center;
    flex-direction: column;
  }
  .active__music__card--small-img{
    display: block;
    margin: 0 auto;
  }
  .active__music__card--big-img{
    display: none;
  }
  .v-card{
    max-width: 450px;
  }
}
</style>
