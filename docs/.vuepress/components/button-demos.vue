<template>
  <div class="container1">
    <g-button :loading="true">默认按钮</g-button>
    <g-button icon="settings" >设置按钮</g-button>
    <g-button :loading="true">加载中</g-button>
  </div>
</template>
<script>
  import Button from '../../../src/button'
  export default {
    components:{
      'g-button':Button,
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