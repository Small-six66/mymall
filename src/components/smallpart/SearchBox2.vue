<template>
  <div class="search2-box">
    <img src="~assets/img/navbar/search.svg" alt=""><input type="text" :placeholder="inputText">
  </div>
</template>

<script>

export default {
  name: 'SearchBox2',
  props: {
    inputText: {
      type: String,
      default: ""
    },
  },
}
</script>

<style scoped>
  .search2-box {
    position: absolute;
    border: 1px solid #666;
    height: 38px;
    width: 90%;
    padding-left: 10px;
    line-height: 38px;
    border-radius: 10px;
  }
  .search2-box input {  
    margin-left: 10px;
    width: 80%;
    height: 90%;
    border: none;
 }
 .search2-box img {
    position: relative;
    top: 5px;
    width: 20px;
  }
  
  input:focus{
    outline: medium;
  }
</style>