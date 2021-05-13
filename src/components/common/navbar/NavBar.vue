<template>
  <div class="navbar">
    <div class="navleft" :style="navLeftWidth"><slot name="left"></slot></div>
    <div class="navcenter"><slot name="center"></slot></div>
    <div class="navright"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      
    }
  },
  props: {
    leftWidth: {
      type: Number,
      default: 120
    },
  },
  computed: {
    navLeftWidth() {
      return  {
        flex: `0 0 ${this.leftWidth}px`
      }
    }
  },
}
</script>

<style>
  .navbar{
    display: flex;
    height: 45px;
    line-height: 45px;
  }

  /* .navleft{
    
  } */
  .navright{
    flex: 0 0 45px;
  }

  .navcenter{
    flex: auto;
  }
</style>