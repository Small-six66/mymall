<template>
  <div id="shopcar">
    <main-nav-bar/>
    <car-swiper :list="swiperList"/>
    <car-new :newlist="newproList"/>
    <car-guess :guesslist="guessproList"/>
  </div>
</template>
<script>
import {getCarData} from 'network/car.js'
import {getCarProData,getCarGuessData} from 'network/car.js'

import MainNavBar from 'components/content/navbar/Mainnav.vue';
import CarSwiper from './childrencom/CarSwiper'
import CarNew from './childrencom/CarNew.vue';
import CarGuess from './childrencom/CarGuess.vue';


export default {
  name: "Car",
  components: {
    MainNavBar,
    CarSwiper,
    CarNew,
    CarGuess
  },
  data () {
    return {
      swiperList:[],
      newproList:[],
      guessproList:[]
    }
  },
  created () {
    getCarData().then(res =>{
      this.swiperList = res.data;
    })
    getCarProData().then(res => {
      this.newproList = res.newdata;
    })
    getCarGuessData().then(res => {
      this.guessproList = res.guessdata
    })
  },
  methods: {
    
  },
};
</script>

<style>
  
</style>