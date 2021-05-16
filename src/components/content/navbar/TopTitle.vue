<template>
  <div class="top_box">
    <h3 class="top_title">{{topTitle}}</h3>
  </div>
</template>

<script>
export default {
  name: "TopTitle",
  props: {
    topTitle: {
      type: String,
      default: ''
    },
  },
}
</script>

<style>
  .top_box {
    width: 80%;
    margin: 10px auto;
    text-align: center;
  }
  .top_title{
    margin: 0;
    font-weight: 400;
    letter-spacing: 5px;
  }
</style>