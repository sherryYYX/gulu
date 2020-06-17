<template>
  <div>
    <h2>24 网格</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-input v-model="value"></g-input>
    <div>
      value: {{value}}
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
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
        content:`
    <g-input v-model="value"></g-input>
    <div>
      value: {{value}}
    </div>
`.replace(/\t+| +/g, '').trim()
      }
    }
  }
</script>



