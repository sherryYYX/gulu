<template>
  <div>
    <h2>布局</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-layout style="color: white; margin-bottom:50px;">
      <g-header cla="header">
        header
      </g-header>
      <g-content class="content">
        content
      </g-content>
      <g-footer class="footer">
        footer
      </g-footer>
    </g-layout>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Layout from '../../../src/layout'
  import Header from '../../../src/header'
  import Footer from '../../../src/footer'
  import Content from '../../../src/content'
  export default {
    components:{
      'g-layout':Layout,
      'g-header':Header,
      'g-footer':Footer,
      'g-content':Content,

    },
    data(){
      return{
        content:`
             <g-layout style="color: white; margin-bottom:50px;">
      <g-header cla="header">
        header
      </g-header>
      <g-content class="content">
        content
      </g-content>
      <g-footer class="footer">
        footer
      </g-footer>
    </g-layout>
`.replace(/\t+| +/g, '').trim()
      }
    }
  }
</script>
<style scoped lang="scss">
  .header{
    height: 50px;
    background: #81e2ac;
  }
  .content{
      height: 100px;
    background: #3fc48c;
  }
  .footer{
    height: 50px;
    background:#81e2ac;
  }

</style>