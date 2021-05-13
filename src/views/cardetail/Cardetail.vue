<template>
  <div class="Cardetail">
    <detail-nav/>
    <swiper>
      <swiper-item v-for="(item, index) in imgdata" :key="index">
          <img :src="item.image" alt="">
      </swiper-item>
    </swiper>
    <proshow :mydecdata="decdata"/>
    <proserve/>
    <protext :myprodata="decdata.prodec"/>
    <protabbar/>
  </div>
</template>

<script>

import {getCarDetailData} from 'network/car.js'

import {Swiper, SwiperItem} from 'components/common/swiper'
import DetailNav from '../../components/content/navbar/Detailnav.vue'
import Proshow from './detailcom/Proshow.vue'
import Proserve from './detailcom/Proserve.vue'
import Protext from './detailcom/Protext.vue'
import Protabbar from './detailcom/Protabbar.vue'


export default {
  name: "Cardetail",
  components:{
    Swiper,
    SwiperItem,
    DetailNav,
    Proshow,
    Proserve,
    Protext,
    Protabbar
  },
  data() {
    return {
      imgdata: [],
      decdata: null
    }
  },
  created(){
    getCarDetailData().then(res =>{
      this.imgdata = res.topimage
      this.decdata = res.detail
      console.log(res);
    })
  }
}
</script>

<style>

</style>