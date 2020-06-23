<template>
  <div class="container1">
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
  }
</script>
<style scoped>
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
  .container1 {
    max-width: 800px;
    margin: 30px auto;
    border-radius: 4px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
    padding: 15px;
  }

</style>