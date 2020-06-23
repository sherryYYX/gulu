<template>
  <div class="container1">
    <g-input></g-input>
    <g-input value="默认"></g-input>
    <g-input value="禁用" disabled></g-input>
    <g-input value="只读" readonly></g-input>
  </div>
</template>
<script>
  import Input from '../../../src/input'
  export default {
    components:{
      'g-input':Input,
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


