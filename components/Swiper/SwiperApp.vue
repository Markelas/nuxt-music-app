<template>
  <swiper
      :slidesPerView="4"
      :spaceBetween="40"
      :freeMode="true"
      :modules="modules"
      class="mySwiper"
  >
    <swiper-slide
      v-for="item in musics"
      class="cards__group__item"
    >
      <div>
          <v-img :src="(musics) ? item[0].imgSource : ''" class="cards__group__avatar"></v-img>
        <div>
          <v-card-title class="item__title">
            {{item[0].authors}}
          </v-card-title>

          <v-card-subtitle class="item__decr">Альбом: {{item[0].album}} </v-card-subtitle>

          <v-card-actions>
            <v-btn
                class="item__btn__play"
                icon="mdi-play"
                variant="text"
                @click="musicStore.changeAlbum(item)"
            ></v-btn>
          </v-card-actions>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '~/components/Swiper/swiperStyle.css';
import {useMusicStore} from "~/stores/store.js";

// import required modules
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { FreeMode } from 'swiper/modules';

export default {
  data: () => ({
    isWidthOK:false
  }),
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    musics: Object
  },
  setup() {
    const musicStore =useMusicStore()
    return {
      musicStore,
      modules: [Pagination,Navigation, FreeMode],
    };
  },

};
</script>

<style>
.mySwiper{
  display: flex;
  justify-content: space-around;
  margin:40px 0;
}
.cards__group__avatar{
  margin: 10px;
  width: 200px;
}
.cards__group__item{
  background-color: rgba(149,33,117, 0.8);
  cursor: grab;
}
.item__title{
  color: white;
}
.item__decr {
  color: white;
}
.item__btn__play{
  background-color: white;
  margin: 0 auto;
  border-radius: 16%;
}
@media (max-width: 970px) {
  .cards__group__avatar{
    width: 150px;
    margin: 10px auto;
  }
  .mySwiper{
  }
}
</style>
