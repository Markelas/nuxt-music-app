<script setup lang="ts">
const props = defineProps({
  musics: Object,
})
// const a = props.musics
// const albumsItems = computed(()=> {
//   return a.filter((e)=> {
//     console.log(e)
//     return e
//   })
// })
</script>

<template>
  <div>
    <h3 class="cards__group__title text-h4">Слушать песни этих исполнителей:</h3>
    <div class="cards__group__wrapper d-flex">
      <v-card
          color="#952175"
          theme="dark"
          v-for="item in props.musics"
          :key="item"
          style="width: 20%"
          class="cards__group__item"
      >
        <div>
          <v-avatar
              rounded="0"
              class="cards__group__avatar"
              size="max"
          >
            <v-img :src="item[0].imgSource"></v-img>
          </v-avatar>
          <div>
            <v-card-title class="text-h5">
              {{item[0].authors}}
            </v-card-title>

            <v-card-subtitle>Альбом: {{item[0].album}} </v-card-subtitle>

            <v-card-actions>
              <v-btn
                  class="ms-2"
                  icon="mdi-play"
                  variant="text"
              ></v-btn>
            </v-card-actions>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<style scoped>
.cards__group__wrapper{
  margin: 40px;
  justify-content: space-around
}
.cards__group__avatar{
  width:100%;
}
.cards__group__item{
  cursor: pointer;
  max-width: 300px
}
.cards__group__title{
  text-align: center;
  margin-top: 100px
}
</style>
