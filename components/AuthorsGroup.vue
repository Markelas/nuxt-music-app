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
  <div class="d-flex">
    <v-card
        color="#952175"
        theme="dark"
        v-for="item in props.musics"
        :key="item"
        style="width: 20%"
    >
      <div class="">
        <v-avatar
            class="ma-3"
            rounded="0"
        >
          <v-img :src="item[0].imgSource"></v-img>
        </v-avatar>
        <div>
          <v-card-title class="text-h5">
            {{item[0].authors}}
          </v-card-title>

          <v-card-subtitle>Ellie Goulding</v-card-subtitle>

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
</template>

<style scoped>

</style>
