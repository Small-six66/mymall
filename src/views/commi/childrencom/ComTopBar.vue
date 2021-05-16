<template>
  <div class="com_topbar">
    <simplenav :tabtitle="['推荐','关注','VOLG']" class="com_topbar_left"/>
    <div class="com_topbar_right">
      <img src="~assets/img/common/add.png" alt="">
    </div>
  </div>
</template>

<script>
import Simplenav from 'components/content/navbar/Simplenav.vue'
export default {
  components: { Simplenav },
  name: "ComTopBar",

}
</script>

<style>
  .com_topbar {
    display: flex;
  }
  .com_topbar_left {
    flex:1;
  }
  .com_topbar_right {
    position: relative;
    width: 160px;
  }
  .com_topbar_right img{
    position: absolute;
    top: 50%;
    right: 10px;
    width: 26px;
    margin: -13px 0;
  }
</style>