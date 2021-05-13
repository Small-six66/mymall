<template>
  <div class="protext_box">
    <h4>商品详情</h4>
    <p>{{myprodata}}</p>
  </div>
</template>

<script>
export default {
  name: "Protext",
  props: {
    myprodata: {
      type: String,
      default: ''
    }
  },
}
</script>

<style>
  .protext_box{
    position: relative;
    padding: 15px;
    z-index: 6;
    background-color: #fff;
  }
  .protext_box h4{
    margin: 10px 0;
    font-weight: 400;
  }
  .protext_box p {
    line-height: 24px;
  }
</style>