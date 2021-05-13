<template>
  <div class="servebox">
    <div class="serve_section">
      <div class="serve_top_content">
        <span>服务 : </span>江浙沪包邮 | 正品保障 | 7天无理由退货
      </div> 
    </div>
    <div class="serve_section">
      <div class="serve_bottom_content">
        <span>尺寸 : </span>
        <ul class="serve_ul">
          <li>S</li>
          <li>M</li>
          <li>L</li>
          <li>XL</li>
          <li>XXL</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Proserve"
}
</script>

<style>
  .servebox {
    border-top: 10px solid #eee;
    border-bottom: 10px solid #eee;
  }

  .serve_top_content,
  .serve_bottom_content {
    margin: 0 15px;
    padding: 10px 0;
    font-size: 14px;
  }

  .serve_top_content {
    border-bottom: 1px solid #ccc;
  }

  .serve_section span{
    font-size: 16px;
  }
  .serve_bottom_content {
    position: relative;
  }
  .serve_ul {
    position: absolute;
    display: inline-block;
    padding: 0;
    margin: 0;
    text-align: center;
    top:11px;
    left: 45px;
  }

  .serve_ul li{
    list-style-type: none;
    float: left;
    margin-right: 10px;
    width: 40px;
    height: 100%;
    background-color: #c0586b;
    color: #fff;
  }
</style>