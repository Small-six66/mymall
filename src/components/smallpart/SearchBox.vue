<template>
  <div class="search-box">
    <input type="text"><img src="~assets/img/navbar/search.svg" alt="">
  </div>
</template>

<script>

export default {
  name: 'SearchBox'
}
</script>

<style>
  .search-box {
    position: absolute;
    border: 1px solid #666;
    height: 28px;
    width: 90%;
    padding-left: 5px;
    line-height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .search-box input {  
    width: 80%;
    border: none;
 }
 .search-box img {
    position: relative;
    top: 5px;
    width: 20px;
  }
  
  input:focus{
    outline: medium;
  }
</style>