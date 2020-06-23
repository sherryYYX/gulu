<template>
  <div class="container1">
    <g-tab :selected="selected">
      <g-tabs-head>
        <g-tabs-item name="longOne">这是一个长长长长的 tab1 </g-tabs-item>
        <g-tabs-item name="short">这是一个短 tab</g-tabs-item>
        <g-tabs-item name="long2" disabled>这是一个禁用的长长的 tab2 </g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="longOne">这是一个长长的 tab1 的内容</g-tabs-pane>
        <g-tabs-pane name="short">这是一个短 tab 的内容</g-tabs-pane>
        <g-tabs-pane name="long2">这是一个禁用的长长 tab2 的内容</g-tabs-pane>
      </g-tabs-body>
    </g-tab>
  </div>
</template>
<script>
  import Tabs from '../../../src/tabs'
  import TabsHead from '../../../src/tabs-head'
  import TabsItem from '../../../src/tabs-item'
  import TabsBody from '../../../src/tabs-body'
  import TabsPane from '../../../src/tabs-pane'
  export default {
    components:{
      'g-tab':Tabs,
      'g-tabs-head':TabsHead,
      'g-tabs-item':TabsItem,
      'g-tabs-body':TabsBody,
      'g-tabs-pane':TabsPane,
    },
    data(){
     return{
       selected:'longOne',
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