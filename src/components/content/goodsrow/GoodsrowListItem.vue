<template>
   <div class="goods_item">
      <div class="goods_image">
        <img :src="goodsitem.image" alt="">
      </div>
      <div class="goods_context">
        <p>{{goodsitem.title}}</p>
        <div class="goods_footer">
          <span>{{goodsitem.money}}</span>
          <svg t="1619263834214" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3197" width="200" height="200"><path d="M512 901.746939c-13.583673 0-26.122449-4.179592-37.093878-13.061225-8.881633-7.314286-225.697959-175.020408-312.424489-311.379592C133.746939 532.37551 94.040816 471.24898 94.040816 384.522449c0-144.718367 108.146939-262.269388 240.326531-262.269388 67.395918 0 131.657143 30.82449 177.632653 84.636735 45.453061-54.334694 109.191837-84.636735 177.110204-84.636735 132.702041 0 240.326531 117.55102 240.326531 262.269388 0 85.159184-37.093878 143.673469-67.395919 191.216327l-1.044898 1.567346c-86.726531 136.359184-303.542857 304.587755-312.424489 311.379592-10.44898 8.359184-22.987755 13.061224-36.571429 13.061225z" fill="#dc6c61" p-id="3198"></path></svg>
        </div>
      </div>
   </div>
</template>

<script>
export default {
  name: "GoodsrowListItem",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  
  .goods_item {
    display: flex;
    height: 90px;
    border-bottom: 10px solid #fff;
  }
  
  .goods_image {
    width: 90px;
  }
  .goods_image img {
    width: 100%;
  }
  .goods_context {
    position: relative;
    flex: 1;
    padding-left: 10px;
  }
  .goods_content:last-child {
    margin-bottom: 50px;
  }
  .goods_context p {
    margin-top: 0;
    color: #555;
  }
  .goods_footer {
    position: absolute;
    color: #ce445e;
    width: 95%;
    bottom: 0;
  }
  .goods_footer svg {
    position: absolute;
    right: 4px;
    width: 23px;
    height: 23px;
  }
</style>