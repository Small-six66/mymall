<template>
  <div class="navbar">
    <div class="navleft"><slot name="left"></slot></div>
    <div class="navcenter"><slot name="center"></slot></div>
    <div class="navright"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style>
  .navbar{
    display: flex;
    height: 45px;
    line-height: 45px;
  }

  .navleft{
    flex: 0 0 120px;
  }
  .navright{
    flex: 0 0 45px;
  }

  .navcenter{
    flex: auto;
  }
</style>