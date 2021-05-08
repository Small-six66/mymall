<template>
  <div class="goods">
    <div>
      <goodsrow-list-item v-for="item in goodsrow" 
        :key="item.title" 
        :goodsitem="item"
      />
    </div>
  </div>
</template>

<script>
import GoodsrowListItem from './GoodsrowListItem.vue'

export default {
  components: { GoodsrowListItem },
  name: "GoodsrowList",
  props:{
    goodsrow:{
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>