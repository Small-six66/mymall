<template>
  <div class="profile_box">
    <div class="top_set">
      <img src="~assets/img/common/set.png" alt="">
    </div>
    <pro-user-show :mydata="mydata"/>
    <promain-bar :mydata="mydata"/>
    <pro-change/>
  </div>
</template>

<script>

import { getProdata } from 'network/profile.js'

import ProUserShow from './childrencom/ProUserShow.vue';
import PromainBar from './childrencom/PromainBar.vue';
import ProChange from './childrencom/ProChange.vue';

export default {
  components: { ProUserShow, PromainBar, ProChange },
  name: "Profile",
  data() {
    return {
      mydata: {}
    }
  },
  created () {
    getProdata().then( res => {
      this.mydata = res.data
      console.log(res)
    })
  }
};
</script>

<style scoped>
  .profile_box {
    background-color: #fbf9f9;
  }
  /* 头部 设置部分 */
  .top_set {
    position: relative;
    height: 60px;
  }
  .top_set img {
    position: absolute;
    width: 30px;
    top: 50%;
    right:10px;
    margin-top: -15px;
  }


</style>