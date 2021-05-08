<template>
  <div class="guess_section">
    <section class="guess_title">
      <span class="title_content">猜你喜欢</span>
    </section>
    <section class="guess_content">
      <goodsrow-list :goodsrow="guesslist"/>
    </section>
  </div>
</template>

<script>
import GoodsrowList from 'components/content/goodsrow/GoodsrowList.vue'

export default {
  components: { GoodsrowList },
  name: 'CarGuess',
  props: {
    guesslist: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .guess_section {
    position: relative;
    width: 94%;
    margin: 20px auto 0;
  }
  .guess_title {
    color: #333;
    font-size: 18px;
    margin-bottom: 10px;
  }
</style>