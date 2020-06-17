<template>
  <div>
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-button :loading="true">默认按钮</g-button>
    <g-button icon="settings">设置按钮</g-button>
    <g-button :loading="true">加载中</g-button>

    <p>
      <strong>代码</strong>
    </p>

    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Button from '../../../src/button'
  export default {
    components:{
      'g-button':Button,
    },
    data(){
      return{
        content:`
              <g-button :loading="true">默认按钮</g-button>
              <g-button icon="settings">设置按钮</g-button>
              <g-button :loading="true">加载中</g-button>
`.replace(/\t+| +/g, '').trim()
      }
    }
  }
</script>