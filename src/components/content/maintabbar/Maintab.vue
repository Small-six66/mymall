<template>
  <tab-bar> 
    <tab-bar-item path="/car">
      <img slot="item-icon" src="~assets/img/tabbar/buybe.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/buyed.png" alt="">
      <div slot="item-text">商城</div>
    </tab-bar-item>

    <tab-bar-item path="/chang" >
      <img slot="item-icon" src="~assets/img/tabbar/applibe.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/applied.png" alt="">
      <div slot="item-text">场景</div>
    </tab-bar-item>

    <tab-bar-item path="/commi" >
      <img slot="item-icon" src="~assets/img/tabbar/combe.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/comed.png" alt="">
      <div slot="item-text">社区</div>
    </tab-bar-item>

    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/mybe.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/myed.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
 
</template>

<script>
import TabBar from '../../common/tabbar/TabBar'
import TabBarItem from '../../common/tabbar/TabBarItem'
export default {
 name:'Maintab',
 components: {
  TabBarItem,
  TabBar  
 }

}
</script>

<style>
  #tab-bar {
    background-color: #fff;
  }
</style>