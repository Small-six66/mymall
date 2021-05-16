<template>
   <div class="thumbr_item">
      <div class="thumbr_image">
        <slot name="item-image"></slot>
      </div>
      <div class="itemr_context">
        <slot name="item-title" ></slot>
        <div class="itemr_footer">
          <div class="itemr-foot-left">
            <slot name="item-foot-left" ></slot>
          </div>
          <div class="itemr-foot-right">
            <slot name="item-foot-right" ></slot>
          </div>
        </div>
      </div>
   </div>
</template>

<script>
export default {
  name: "GoodsrowListItem"
}
</script>

<style scoped>
  
  .thumbr_item {
    display: flex;
    height: 90px;
    border-bottom: 10px solid #fff;
  }
  
  .thumbr_image {
    width: 90px;
  }
  .thumbr_image img {
    width: 100%;
  }
  .itemr_context {
    position: relative;
    flex: 1;
    padding-left: 10px;
  }
  .itemr_footer {
    position: absolute;
    display: flex;
    width: 95%;
    bottom: 0;
  }

  .itemr-foot-left {
    flex: 8;
  }
  .itemr-foot-right {
    flex: 2;
  }
</style>