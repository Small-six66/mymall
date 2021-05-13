<template>
  <div class="topbar_box">
    <div class="chang_topbar_top">
      <h3>场景</h3>
    </div>
    <div class="chang_topbar_bottom">
      <nav-bar :left-width="80">
        <div slot="left" class="chang_nav_left" >
          <img src="~assets/img/common/upic.png" alt="user_phone">
        </div>
        <div slot="center" class="chang_nav_center">
          <search-box-2 input-text="搜索需要的场景"/>
        </div>
        <div slot="right" class="chang_nav_right">
          <img src="~assets/img/navbar/love.png" alt="">
        </div>
      </nav-bar>
    </div>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar.vue'
import SearchBox2 from '../../../components/smallpart/SearchBox2.vue'
export default {
  name: "ChangTopBar",
  components: {
    NavBar,
    SearchBox2
  }, 
}
</script>

<style scoped>
  .chang_topbar_top {
    width: 80%;
    margin: 10px auto;
    text-align: center;
  }
  .chang_topbar_top h3{
    margin: 0;
    font-weight: 400;
    letter-spacing: 5px;
  }

  /* left相关样式 */

  .chang_nav_left {
    height: 100%;
  }
  
  .chang_nav_left img{
    margin-left: 18px;
    width: 40px;
  }

  .chang_nav_right img {
    width: 30px;
  }

  /* center相关样式 */
  .chang_nav_center {
    position: relative;
  }

  /* right相关样式 */
  .chang_nav_right {
    position: relative;
    top:5px;
  }
</style>