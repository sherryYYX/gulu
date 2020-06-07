<template>
  <div class="popover"  @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block;">
       <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name:'gulu-popover',
    data(){return{visible:false}},
    methods:{
      positionContent(){
        document.body.appendChild(this.$refs.contentWrapper)
        let {height,width,top,left}=this.$refs.triggerWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
        this.$refs.contentWrapper.style.top = top  +window.scrollY + 'px'
      },
      onClickDocument (event){
        if(this.$refs.contentWrapper.contains(event.target)){return}else{
          this.close()
        }
      },
      close(){
        this.visible=false
        document.removeEventListener('click',this.onClickDocument)
      },
      open(){
        this.visible=true
        setTimeout(()=>{
          this.positionContent()
          document.addEventListener('click',this.onClickDocument)
        })
      },
      onClick (e){
        if(this.$refs.triggerWrapper.contains(e.target)){
           if(this.visible===true){
             this.close()
           }else {
             this.open()
           }
        }
      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>
  $border-color:#333;
  $border-radius:4px;
  .popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper{
    word-break: break-all;
    max-width:20em;
    border:1px solid $border-color;
    border-radius: $border-radius;
    padding:.5em 1em;
    margin-top: -10px;
    position: absolute;
    transform: translateY(-100%);
    filter:drop-shadow(0 1px 1px rgba(0,0,0,0.5));
    background: white;
    /*box-shadow: ;*/
    &::before,&::after{
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0px;
      height:0px;
      position: absolute;
      left:10px
    }
    &::before{
      border-top-color: black;
      top:100%;
    }
    &::after{
      border-top-color: white;
      top:calc(100% - 1px);
    }
  }
</style>