<template>
  <nav-bar class="car_nav_box">
      <div slot="left" class="car_nav_left" >
        <img src="~assets/img/navbar/location.svg" alt="">
        <span class="nav-left-main">杭州 |</span>
        <span class="nav-left-else">
          <div> 阴</div>
          <div> 20℃</div>
        </span>
      </div>
      <div slot="center" class="car_nav_center">
        <search-box></search-box>
      </div>
      <div slot="right" class="car_nav_right">
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

<style scoped>

  .car_nav_box{
    color: #666;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
    background-color: #fff;
  }

/* navLeft相关样式 */
  

  .car_nav_left img{
    position: relative;
    width: 30px;
    height: 30px;
    top: 8px;
  }
  .car_nav_left .nav-left-main{
    font-size: 20px;
  }

  .car_nav_left .nav-left-else{
    position: relative;
    top: 6px;
    padding-left: 4px;
    display: inline-block;
    font-size: 12px;
    width: auto;
  }

  .car_nav_left .nav-left-else div{
    transform:scale(0.85);
    line-height: 120%;
  }

/* navCenter相关样式 */

  .car_nav_center{
    position: relative;
    top:24px;
  }

/* navRight相关样式 */

  .car_nav_right{
    position: relative;
  }

  .car_nav_right img {
    width: 70%;
    position: absolute; /*相对定位或绝对定位均可*/
    top: 8px;
  }




</style>