<template>
  <div class="container1">
    <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <g-header style="height: 50px; background:#81e2ac;">
        header
      </g-header>
      <g-layout>
        <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">
          sider
        </g-sider>
        <g-content style="height: 100px; background:#3fc48c;">
          content
        </g-content>
      </g-layout>
      <g-footer style="height: 50px; background:#81e2ac;">
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
  import GSider from '../../../src//sider'
  export default {
    components:{
      'g-layout':Layout,
      'g-header':Header,
      'g-footer':Footer,
      'g-content':Content,
      'g-sider':GSider

    },
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
  .container1 {
    max-width: 800px;
    margin: 30px auto;
    border-radius: 4px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
    padding: 15px;
  }
</style>
