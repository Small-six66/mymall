<template>
  <nav-bar class="decnav">
    <div slot="left" class="decnav-left">
      <img src="~assets/img/denav/shangyige.svg" alt="" @click="backCar">
    </div>
    <div slot="right" class="decnav-right">
      <img src="~assets/img/denav/icon_share.svg" alt="">
    </div>
  </nav-bar>
</template>

<script>
import NavBar from '../../common/navbar/NavBar.vue'
export default {
  name: 'DetailNav',
  components: { NavBar },
  methods: {
    backCar() {
      this.$router.back()
    }
  },
}
</script>

<style scoped>
  .decnav {
    position: fixed;
    width: 100%;
    top:8px;
    left: 0;
    z-index: 6;
  }

  .decnav-left img{
    width: 32px;
  }

  .decnav-right {
    /* position: absolute; */
    right: 4px;
  }
  .decnav-right img{
    width: 35px;
  }
</style>>
