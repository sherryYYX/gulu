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
    <pre style="height: 77%;padding-left: 0;">
      	//此处class：
      	//language-xml指的是基于xml语言进行高亮设置
        //line-numbers指的是使用显示行号
        <code class="language-xml line-numbers" v-text="html"></code>
      </pre>


    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Prism from 'prismjs';
import prismCss from './prism.css'
  Prism.highlightAll();
  import Button from '../../../src/button'
  export default {
    components:{
      'g-button':Button,
      'prism':Prism
    },
    data(){
      return{
        html:`
              <g-button :loading="true">默认按钮</g-button>
              <g-button icon="settings">设置按钮</g-button>
              <g-button :loading="true">加载中</g-button>
`.replace(/\t+| +/g, '').trim()
      }
    }
  }
</script>