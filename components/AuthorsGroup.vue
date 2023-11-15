<template>
  <div>
    <h3 class="cards__group__title text-h4">Слушать песни этих исполнителей:</h3>
    <div class="cards__group__wrapper d-flex">
      <swiper-app :musics="musics"/>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    musics: Object
  }
}

</script>


<style scoped>
.cards__group__wrapper{
  margin: 0 auto;
  justify-content: space-around;
  width: 100%
}
.cards__group__title{
  text-align: center;
  margin-top: 100px
}
</style>
