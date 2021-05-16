<template>
  <div class="thumbc-item">
    <slot name="item-image"></slot>
    <div class="thumbc-context">
      <slot name="item-context" ></slot>
    </div>
    <div class="thumbc-foot">
      <div class="itemc-foot-left">
        <slot name="item-foot-left" ></slot>
      </div>
      <div class="itemc-foot-right">
        <slot name="item-foot-right" ></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Thumbnail",
}
</script>

<style>
  .thumbc-item img{
    width: 100%;
  }
  .thumbc-context {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    /* 将元素设为盒子伸缩模型显示 */
    display: -webkit-box;
    /* 控制行数 */
    -webkit-line-clamp: 2; 
    /* 伸缩方向设为垂直方向 */
    -webkit-box-orient: vertical;
  }

  .thumbc-foot {
    margin-top: 12px;
    display: flex;
  }

  .itemc-foot-left {
    flex: 6;
  }
  .itemc-foot-right {
    flex: 4;
  }
</style>