<template>
  <div class="popover"  @click="xxx">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
       <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name:'gulu-popover',
    data(){return{visible:false}},
    methods:{
      xxx(){
       this.visible=!this.visible
        console.log('visable 切换')
        if(this.visible===true){
          setTimeout(()=>{
            document.body.appendChild(this.$refs.contentWrapper)
            let {height,width,top,left}=this.$refs.triggerWrapper.getBoundingClientRect()
            this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
            this.$refs.contentWrapper.style.top = top  +window.scrollY + 'px'
            console.log('新增document 监听器')
            let eventHandler = ()=>{
              this.visible=false
              document.removeEventListener('click',eventHandler)
            }
            document.addEventListener('click',eventHandler)
          })
        }
      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>
  .popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper{
    border:1px solid red;
    position: absolute;
    transform: translateY(-100%);
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
  }
</style>