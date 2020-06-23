<template>
  <div style="padding-top: 16px;" class="container1">
    <h2>this.$toast</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div class="gulu-toast">
      <g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
      <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
      <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
    </div>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
<script>
  import plugin from '../../../src/plugin'
  import GButton from '../../../src/button'
  import Vue from 'vue'
  Vue.use(plugin)

  export default {
    components: {GButton},
  }
</script>
<style scoped>
  .container1 {
    max-width: 800px;
    margin: 30px auto;
    border-radius: 4px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
    padding: 15px;
  }
</style>