<template>
  <div>
    <g-row class="demoRow" gutter="10">
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
    </g-row>

    <g-row class="demoRow" gutter="10">
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
    </g-row>
  </div>
</template>
<script>
  import Col from '../../../src/col'
  import Row from '../../../src/row'

  export default {
    components:{
      'g-col':Col,
      'g-row':Row,
    },
  }
</script>
<style scoped>
  * {
    box-sizing: border-box;
  }
  .demoCol{
    color: white;
    height: 50px;
    border: 1px solid #00C05F;
    background: #3eaf7c;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .demoRow{
    margin: 10px 0;
  }
</style>