<template>
  <div class="simnav">
    <div  v-for="(item , index) in tabtitle" 
      class="simnav_item"
      :class="{active: index === currentIndex}"
      :key="index"
      @click="intemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"Simplenav",
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    tabtitle: {
      type: Array,
      default() {
        return []
      }
    },
  },
  methods: {
    intemClick(index) {
      this.currentIndex = index
      this.$emit('tabClick',index)
      this.$bus.$emit('dataChange',index)
    }
  },
}
</script>

<style scoped>
  .simnav{
    display: flex;
    line-height: 45px;
  }
  .simnav_item {
    flex: 1;
    height: 45px;
    text-align: center;
    font-size: 18px;
    color: #666;
  }
  .active {
    color: #000;
    font-size: 20px;
  }
</style>