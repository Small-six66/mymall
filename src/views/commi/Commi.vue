<template>
  <div>
    <top-title top-title="社区"/>
    <com-top-bar/>
    <com-goods :datalist="recomData.datalist"/>
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
      vlogData: {}
    }
  },
  created () {
    getComalldata().then(res => {
      this.recomData = res.data[0];
      this.pointData = res.data[1];
      this.vlogData = res.data[2];
    })
  },
};
  
</script>

<style scoped>
  
   
</style>>
