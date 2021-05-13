<template>
  <div class="dec_tabbar">
    <div class="dec_barbox">
      <div class="dec_bar_left">
        <img src="~assets/img/tabbar/shopbug.svg" alt="">
      </div>
      <div class="dec_bar_right">
        <div class="bar_btn">加入购物车</div>
        <div class="bar_btn">立即购买</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Protabbar"
}
</script>

<style>
  .dec_tabbar {
    padding: 10px 15px 0;
    height: 45px;
    position: fixed;
    bottom: 0;
    left:0;
    right:0;
    z-index: 10;
    background-color: #fff;
  }
  .dec_barbox{
    display: flex;
    height: 100%;
  }
  .dec_bar_left {
    padding-left: 5px;
    width: 55px;
  }
  .dec_bar_right {
    flex: 1;
  }
  .dec_bar_left img{
    width: 35px;
  }
  .bar_btn {
    display: inline-block;
    width: 120px;
    height: 40px;
    margin: 0 10px;
    background-color: #c0586b;
    color: #fff;
    text-align: center;
    line-height: 40px;
  }
</style>