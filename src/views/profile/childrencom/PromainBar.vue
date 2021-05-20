<template>
  <div class="pro-bar">
    <div class="bar-left">
      <div class="bar-lf-top"><span>{{mydata.point}}</span><span>{{mydata.fans}}</span></div>
      <div class="bar-lf-bottom"><span>关 注</span><span>粉 丝</span></div>
    </div>
    <div class="bar-right">
      <div class="bar-btn">
        编辑资料
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PromainBar",
  props: {
    mydata: {
      type: Object,
      default(){
        return {}
      }
    },
  },
}
</script>

<style>
  .pro-bar {
    color: #999;
    margin: 60px 0 10px;
    display: flex;
  }
  .bar-left {
    width: 160px;
  }
  .bar-lf-top ,
  .bar-lf-bottom{
    margin-left: 8px;
  }
   
  .bar-lf-top span {
    display: inline-block;
    color: #333;
    margin: 2px 20px;
  }
  .bar-lf-bottom span {
    display: inline-block;
    font-size: 16px;
    margin: 2px 17px;
  }
  
  .bar-right {
    flex: 1;
    position: relative;
  }
  .bar-btn {
    position: absolute;
    width: 140px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    border: 1px solid #999;
    border-radius: 40px;
    right: 10px;
  }
</style>