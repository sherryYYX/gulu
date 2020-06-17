<template>
  <div>
    <h2>简单用法</h2>
    <p>预览</p>
    <g-tab :selected="selected">
      <g-tabs-head>
        <g-tabs-item name="1">1</g-tabs-item>
        <g-tabs-item name="2">2</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="1">content 1</g-tabs-pane>
        <g-tabs-pane name="2">content 2</g-tabs-pane>
      </g-tabs-body>
    </g-tab>
    <pre><code>{{content}}</code></pre>
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
       selected:'1',
       content:`<g-tab :selected="selected">
      <g-tabs-head>
        <g-tabs-item name="1">1</g-tabs-item>
        <g-tabs-item name="2">2</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="1">content 1</g-tabs-pane>
        <g-tabs-pane name="2">content 2</g-tabs-pane>
      </g-tabs-body>
    </g-tab>
`.replace(/\t+| +/g, '')
     }
    }
  }
</script>