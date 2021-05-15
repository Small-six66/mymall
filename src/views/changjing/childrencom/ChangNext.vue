<template>
  <div class="chang_next">
    <p>场景 ：{{mytext.ctext}}</p>
    <p>指南 ：{{mytext.cdec}}</p>
    <img src="~assets/img/common/next.png" alt="">
  </div>
</template>

<script>
export default {
  name: "ChangNext",
  props: {
    mytext: {
      type: Object,
      default(){
        return {}
      } 
    },
  },
}
</script>

<style scoped>
  .chang_next {
    width: 85%;
    height: 80px;
    position: relative;
    box-sizing: border-box;
    margin: 40px auto;
    padding-left: 30px;
    padding-top: 4px;
    background-color: #eb93a2;
    border-radius: 40px;
    color: #fff;
  }
  .chang_next p {
    margin: 10px 0;
  }
  .chang_next img {
    position: absolute;
    width: 40px;
    right: 15px;
    top: 22px;
  }
</style>