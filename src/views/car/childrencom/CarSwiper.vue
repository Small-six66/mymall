<template>
  <swiper>
      <swiper-item v-for="(item, index) in list" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name: 'CarSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    list: Array
  }
}
</script>

<style>
  #hy-swiper {
    margin: 56px auto 10px;
    width: 94%;
    height: 170px;
    border-radius: 10px ;
  }
</style>