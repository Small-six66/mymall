<template>
  <div class="swiper-container" ref="slider">
		  <div class="swiper-wrapper">
			  <div class="swiper-slide" v-for="(item,index) in datalist" :key="index">
          <img :src="item.image" :alt="item.ctext">
        </div>
		  </div>
	</div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "CenterSwiper",
  props: {
    datalist: {
      type: Array,
      default(){
        return []
      }
    },
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      direction: "horizontal",
      loop: true,
      slidesPerView: 2,
      centeredSlides: true,
      spaceBetween: 0,
      observer: true,
      observeParents: true,
      slideActiveClass: 'swiper-slide-active'
    });
  }
}
</script>

<style>
@import "../../../../node_modules/swiper/swiper-bundle.min.css";

  .swiper-container {
    width: 85%;
    height: 280px;
    margin-top: 15px;
  }
  .swiper-wrapper {
    border-radius: 40px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;

    transform: scale(0.8);
    opacity: 0.4;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .swiper-slide-active {
    transform: scale(1);
    opacity: 1;
    z-index: 9;
  }
</style>