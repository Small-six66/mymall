<template>
  <div>
    <chang-top-bar/>
    <simplenav :tabtitle="['推荐','流行','小众']" @tabClick="tabClick"/>
    <center-swiper :datalist="currentType.imagelist"/>
    <chang-next :mytext="currentType"/>
  </div>
</template>

<script>
import CenterSwiper from '../../components/common/swiper/CenterSwiper.vue';
import Simplenav from '../../components/content/navbar/Simplenav.vue';
import ChangTopBar from './childrencom/ChangTopBar.vue';

import {getchangOptdata} from 'network/chang.js'
import ChangNext from './childrencom/ChangNext.vue';



export default {
  name: "Chang",
  components: {
    ChangTopBar,
    Simplenav,
    CenterSwiper,
    ChangNext
  },
  data() {
    return {
      recomList:{},
      popList:{},
      smallList:{},
      currentType:[]
    }
  },
  created () {
    getchangOptdata().then(res =>{
      this.currentType = res.optdata[0];
      this.recomList = res.optdata[0];
      this.popList = res.optdata[1];
      this.smallList = res.optdata[2];
      console.log(this.currentType);
    })
  },
  methods: {
    tabClick(index) {
      switch(index){
        case 0:
          this.currentType = this.recomList
          break
        case 1:
          this.currentType = this.popList
          break
        case 2:
          this.currentType = this.smallList
      }
    }
  },
  
};
</script>

<style>
</style>