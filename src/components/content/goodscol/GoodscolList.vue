<template>
  <div class="goods">
    <div class="goods-wrapper" :style="wrapperStyle">
      <goodscol-list-item v-for="item in goods" 
        :key="item.title" 
        :goodsitem="item"
      />
    </div>
  </div>
</template>

<script>
import GoodscolListItem from './GoodscolListItem.vue'

export default {
  components: { GoodscolListItem },
  name: "GoodsList",
  props:{
    goods:{
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    wrapperStyle() {
      return {
        width: `${this.goods.length * 40}%`
      }
    }
  },
}
</script>

<style>
  .goods {
    overflow-x: scroll;
  }
  .goods::-webkit-scrollbar {
    /*隐藏滚轮*/
    display: none;
  }
  .goods-wrapper{
    display: flex;
    margin: 0;
    padding: 0;
    font-size: 14px;
  }
  .goods-item {
    width: 23%;
    height: 200px;  
  }
  .goods-item:nth-of-type(n+2) {
    margin-left: 10px;
  }
</style>