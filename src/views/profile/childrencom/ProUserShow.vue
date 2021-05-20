<template>
  <div class="user">
    <div class="user_left">
      <img :src="mydata.image" alt="用户头像">
    </div>
    <div class="user_right">
      <p class="name_top">{{mydata.username|titleUpshow}}</p>
      <p>{{mydata.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserShow",
  props: {
    mydata: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  filters: {
    titleUpshow: function(value) {
      return value?value.toUpperCase():value;
    }
  }
}
</script>

<style scoped>
  /* 用户头像、昵称等部分 */
  .user {
    display: flex;
    margin-left: 20px;
  }
  .user_left {
    width:100px
  }
  .user_left img{
    width:80%;
    border: 4px solid #fff;
    border-radius: 50px;
  }
  .user_right {
    flex: auto;
    color: #999;
  }
  .name_top {
    color: #333;
    margin-top: 10px;
  }
</style>