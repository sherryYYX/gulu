<template>
 <div class="toast">
    <slot></slot>
   <div class="line"></div>
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
          default:5
      },
      closeButton:{
         type:Object,
          default:()=>{
          return{
            text:'关闭',callback(toast){
              toast.close()
            }
          }
        }
      },
      mounted() {
        console.log(hhh)
        console.log(this.onClickClose)
      },
    },

    mounted() {
      if(this.autoClose===true){
        setTimeout(()=>{
          this.close();
        },this.autoCloseDelay * 1000)
      }
    },
    methods:{
      onClickClose(){
        this.close()
        this.closeButton.callback()
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
  $toast-height: 40px;
  $toast-bg:rgba(0,0,0,0.75);
  .toast{
    height: $line-height;
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
    .line{
      border-left:1px solid #666;
      height:100%;
    }
    .close{
      padding-left: 16px;

    }
  }
</style>