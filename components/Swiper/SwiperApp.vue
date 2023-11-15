<template>
  <swiper
      :slidesPerView="3"
      :spaceBetween="30"
      :pagination="{
      clickable: true,
    }"
      :modules="modules"
      class="mySwiper"
  >
    <swiper-slide
      v-for="item in musics"
      class="cards__group__item"
    >
      <div>
          <v-img :src="item[0].imgSource" class="cards__group__avatar"></v-img>
        <div>
          <v-card-title class="item__title">
            {{item[0].authors}}
          </v-card-title>

          <v-card-subtitle class="item__decr">Альбом: {{item[0].album}} </v-card-subtitle>

          <v-card-actions>
            <v-btn
                class="ms-2"
                icon="mdi-play"
                variant="text"
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

// import required modules
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    musics: Object
  },
  setup() {
    return {
      modules: [Pagination,Navigation],
    };
  },

};
</script>

<style>
.mySwiper{
  display: flex;
  justify-content: space-around;
}
.cards__group__avatar{
  width:300px;
}
.cards__group__item{
  background-color: #952175;
  cursor: pointer;
  max-width: 300px
}
.item__title{
  color: white;
}
.item__decr {
  color: white;
}
</style>
