<template>
  <div class="container1">
    <g-input v-model="value"></g-input>
    <div>
      value: {{value}}
    </div>
  </div>
</template>
<script>
  import Input from '../../../src/input'
  export default {
    components:{
      'g-input':Input,
    },
    data(){
      return{
        value:'1',
      }
    }
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


