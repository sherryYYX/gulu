<template>
  <div>
    <g-button :loading="true">默认按钮</g-button>
    <g-button icon="settings">设置按钮</g-button>
    <g-button :loading="true">加载中</g-button>
    <g-button >禁用按钮</g-button>

    <pre>
      <code>
        {{content}}
      </code>
    </pre>
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
    <g-button >禁用按钮</g-button>`.trim()
     }
    }
  }
</script>