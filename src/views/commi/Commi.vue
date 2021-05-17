<template>
  <div>
    <top-title top-title="社区"/>
    <com-top-bar/>
    <com-goods :datalist="currentType.datalist"/>
  </div>
</template>

<script>
import TopTitle from 'components/content/navbar/TopTitle.vue';
import ComTopBar from './childrencom/ComTopBar.vue';
import ComGoods from './childrencom/ComGoods.vue';

import { getComalldata } from 'network/commi.js'

export default {
  name: "Commi",
  components: {
    TopTitle,
    ComTopBar,
    ComGoods,
  },
  data() {
    return {
      recomData: {},
      pointData: {},
      vlogData: {},
      currentType:{},
    }
  },
  created () {
    getComalldata().then(res => {
      this.currentType = res.data[0]
      this.recomData = res.data[0];
      this.pointData = res.data[1];
      this.vlogData = res.data[2];
    })
    this.$bus.$on('dataChange',(index) => {
      switch(index){
        case 0:
          this.currentType = this.recomData
          break
        case 1:
          this.currentType = this.pointData
          break
        case 2:
          this.currentType = this.vlogData
      }
    })
  },
};
  
</script>

<style scoped>
  
   
</style>>
