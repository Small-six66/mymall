<template>
  <div class="new_section">
    <section class="new_title">
      <span class="new_title_left">新品上线</span>
      <span class="new_title_right">SEE ALL</span>
    </section>
    <section class="new_content">
      <goodscol-list :goods="newlist"/>
    </section>
  </div>
</template>

<script>

import GoodscolList from 'components/content/goodscol/GoodscolList.vue'

export default {
  components: { 
    GoodscolList 
  },
  name: 'CarNew',
  props: {
    newlist :{
      type: Array,
      default() {
        return []
      }
    }
  }
  
}
</script>

<style>
  .new_section {
    position: relative;
    width: 94%;
    margin: 15px auto 0;
  }
  .new_title {
    color: #333;
    font-size: 18px;
  }
  .new_title_right {
    position: absolute;
    right: 0;
    font-size: 15px;
    color: #666;
  }
  .new_content {
    margin-top: 10px;
  }

</style>