<template>
  <div class="com_goods_box">
    <div class="com_goods_warpper" v-for="(item, index) in datalist" :key="index">
      <div class="com_address">{{item.address}}</div>
      <thumbnail-col class="com-goods-item">
        <img slot="item-image" :src="item.image"/>
        <div slot="item-context" class="com_goods_context">{{item.text}}</div>
        <span slot="item-foot-left" class="com_foots_left">
          <img :src="item.userimg" alt="user" id="user-img">
          {{item.name}}
          </span>
        <span slot="item-foot-right" class="com_star">{{item.amount}}</span>
      </thumbnail-col>
    </div>
  </div>
</template>

<script>
import ThumbnailCol from 'components/common/thumbnail/ThumbnailCol.vue'

export default {
  name: "ComGoods",
  components: {
    ThumbnailCol,
  },
  props: {
    datalist: {
      type: Array,
      default(){
        return []
      }
    },
  },
}
</script>

<style>
  .com_goods_box {
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
    margin-bottom: 45px;
    justify-content: space-evenly;
  }

  .com_goods_warpper{
    position: relative;
    width: 45%;
    margin-bottom: 10px;
  }

  /* 地标 */
  .com_address {
    position: absolute;
    top: 145px;
    left: 5px;
    height: 25px;
    line-height: 25px;
    padding: 0 10px 0 20px;
    color: #333;
    font-size: 14px;
    background-color: #fff;
    opacity: 0.8;
    border-radius: 10px;
  }

  .com_address::before{
    display: inline-block;
    position: absolute;
    left: 2px;
    top:2px;
    content: '';
    width: 18px;
    height: 18px;
    background: url("~assets/img/common/location.png");
    background-size: 18px;
    background-repeat:no-repeat;
  }


  .com-goods-item {
    height: 245px;
  }
  .com-goods-item img{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  
  .com_goods_context {
    padding-left: 4px;
    color: #666;
  }
  
  .thumbc-foot {
    height: 26px;
    margin-top: 8px;
    line-height: 26px;
    font-size: 15px;
  }
  .itemc-foot-left {
    overflow: hidden;
    text-overflow: ellipsis;
  }

/* 用户头像 */
  #user-img {
    width: 23px;
    border-radius: 23px;
    vertical-align: middle;;
  }

/* 爱心小图标 */

  .itemc-foot-right {
    position: relative;
  }
  .com_star {
    position: absolute;
    right: 4px;
  }
  .com_star::before {
    display: inline-block;
    content: '';
    position: absolute;
    top: 4px;
    left: -20px;
    width: 18px;
    height: 18px;
    background: url("~assets/img/common/heart.png");
    background-size: 18px;
    background-repeat:no-repeat;
  }
</style>