<template>
  <h2>我的</h2>
</template>

<script>

import { getProdata } from 'network/profile.js'

export default {
  name: "Profile",
  data() {
    return {
      mydata: {}
    }
  },
  created () {
    getProdata().then( res => {
      this.mydata = res.data
    })
  },
};
</script>

<style>
</style>