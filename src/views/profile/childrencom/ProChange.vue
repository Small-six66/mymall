<template>
  <div class="pro-wrapper">
    <div class="pro-sm-tab">
      <span class="pro-sm-left" @click="tabClick" :class="{'current-style':currentStyle}">日常动态</span>
      <span class="pro-sm-right" @click="tabClick2" :class="{'current-style': !currentStyle}">我的收藏</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProChange",
  data() {
    return {
      currentStyle: true
    }
  },
  methods: {
    tabClick() {
      this.currentStyle = true;
    },
    tabClick2(){
      this.currentStyle = false;
    }
  },
}
</script>

<style scoped>
  .pro-wrapper {
    background-color: #fff;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  .pro-sm-tab {
    padding-left: 15px;
  }
  .pro-sm-left,
  .pro-sm-right {
    display: inline-block;
    margin: 10px 0;
    width: 90px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 16px;
    color: #999;
  }
  .current-style {
    background-color: rgb(245, 240, 240);
    border-radius: 30px;
    color: #333;
  }
</style>>
