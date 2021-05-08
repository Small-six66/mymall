<template>
  <nav-bar>
      <div slot="left" >
        <img src="~assets/img/navbar/location.svg" alt="">
        <span class="nav-left-main">杭州 |</span>
        <span class="nav-left-else">
          <div> 阴</div>
          <div> 20℃</div>
        </span>
      </div>
      <div slot="center">
        <search-box></search-box>
      </div>
      <div slot="right">
        <img src="~assets/img/navbar/erweima.svg" alt="">
      </div>
  </nav-bar>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'
import SearchBox from '../../smallpart/SearchBox.vue'

export default {
  name: 'MainNavBar',
  components: {
    NavBar,
    SearchBox
  }
}
</script>

<style>

  .navbar{
    color: #666;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
    background-color: #fff;
  }

/* navLeft相关样式 */
  

  .navleft img{
    position: relative;
    width: 30px;
    height: 30px;
    top: 8px;
  }
  .navleft .nav-left-main{
    font-size: 20px;
  }

  .navleft .nav-left-else{
    position: relative;
    top: 6px;
    padding-left: 4px;
    display: inline-block;
    font-size: 12px;
    width: auto;
  }

  .navleft .nav-left-else div{
    transform:scale(0.85);
    line-height: 120%;
  }

/* navCenter相关样式 */

  .navcenter{
    position: relative;
  }

/* navRight相关样式 */

  .navright{
    position: relative;
  }

  .navright img {
    width: 70%;
    position: absolute; /*相对定位或绝对定位均可*/
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }




</style>