<template>
  <div style="padding-top: 16px;" class="container1">
    <div>
      <g-button @click="onClickButton">上方弹出</g-button>
    </div>
  </div>
</template>
<style>
  .gulu-toast {
    z-index: 30 !important;
  }
</style>
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
    methods: {
      onClickButton () {
        this.$toast('你需要充话费了', {
          closeButton: {
            text: '知道了',
            callback: () => {
              console.log('知道了')
            }
          }
        })
      }
    },
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