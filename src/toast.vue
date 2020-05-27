<template>
 <div class="toast" ref="toast">
   <div class="message">
     <slot></slot>
   </div>
   <div class="line" ref="line"></div>
   <span   class="close"  v-if="closeButton" @click="onClickClose">
     {{closeButton.text}}
   </span>
 </div>
</template>

<script>
  import Vue from 'vue'

  export default {
     name:'gulu-toast',
    props:{
       autoClose:{
         type:Boolean,
         default:true
       },
      autoCloseDelay:{
         type:Number,
          default:50
      },
      closeButton:{
         type:Object,
          default:()=>{
          return{
            text:'关闭', undefined
          }
        }
      },
    },

    mounted() {
      this.updateClose()
      this.exacAutoClose()


    },
    methods:{
      updateClose(){
        setTimeout(()=>{
          this.$refs.line.style.height=
            `${this.$refs.toast.getBoundingClientRect().height}px`
        },0)
      },
       exacAutoClose(){
         if(this.autoClose===true){
           setTimeout(()=>{
             this.close();
           },this.autoCloseDelay * 1000)
         }
       },
      onClickClose(){
        this.close()
        if(this.closeButton && typeof this.closeButton.callback === 'function'){
          this.closeButton.callback()
        }
      },
      close(){
        this.$el.remove()
        this.$destroy()
      }
    }
  }
</script>

<style lang="scss" scoped>
  $line-height: 40px;
  $toast-min-height: 40px;
  $toast-bg:rgba(0,0,0,0.75);
  .toast{
    min-height: $toast-min-height;
    line-height: $line-height;
    position: fixed;
    top:0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    display: flex;
    align-items: center;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.75);
    color:white;
    padding:0 16px;
    .message{
      padding-right:16px;
    }
    .line{
      border-left:1px solid #666;
    }
    .close{
      padding-left: 14px;
      flex-shrink: 0;
    }
  }
</style>