<template>
  <div class="showbox">
    <div class="dectop">
      <span>{{mydecdata.title|titleUpshow}}</span>
      <div class="wishbtn"> + 愿 望 单</div>
    </div>
    <p>{{mydecdata.titledec}}</p>
    <p>{{mydecdata.money}}</p>
  </div>
</template>

<script>
export default {
  name: "Proshow",
  props: {
    mydecdata: {
      type: Object,
      default(){
        return {}
      } 
    }
  },
  filters: {
    titleUpshow: function(value) {
      return value.toUpperCase();
    }
  }
}
</script>

<style scoped>
  .showbox {
    padding: 15px;
  }
  .dectop {
    position: relative;
    height: 35px;
    line-height: 35px;
  }
  .dectop span{
    font-size: 20px;
    color: #999;
  }
  .wishbtn{
    position: absolute;
    right: 0;
    display: inline-block;
    width: 100px;
    height: 100%;
    text-align: center;
    background-color: #c0586b;
    color: #fff;
  }

  .showbox p{
    margin: 10px 0 0px;
    font-size: 18px;
    color: #333;
  }
  .showbox p:first-of-type{
    margin: 0;
  }
</style>