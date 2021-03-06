<template>
  <div class="wrapper" :class="toastClasses">
    <div class="toast" ref="toast">
      <div class="message">
        <slot></slot>
      </div>
      <div class="line" ref="line"></div>
      <span   class="close"  v-if="closeButton" @click="onClickClose">
     {{closeButton.text}}
   </span>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name:'gulu-toast',
    props:{
      position: {
        type: String,
        default: 'top',
        validator (value) {
          return ['top', 'bottom', 'middle'].indexOf(value) >= 0
        }
      },
      autoClose:{
        type:Boolean,
        default:true
      },
      autoCloseDelay:{
        type:Number,
        default:8
      },
      closeButton:{
        type:Object,
        default:()=>{
          return{
            text:'关闭', undefined
          }
        }
      }
    },
    mounted() {
      this.updateClose()
      this.exacAutoClose()
    },
    computed: {
      toastClasses () {
        return `position-${this.position}`
      }
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
        this.$emit('close')
        this.$destroy()
      }
    }
  }
</script>

<style lang="scss" scoped>
  $line-height: 40px;
  $toast-min-height: 40px;
  $toast-bg:rgba(0,0,0,0.75);
  $animation-duration:0.5s;
  @keyframes slide-up {
    0%{opacity: 0; transform: translateY(100%);}
    100%{opacity: 1; transform: translateY(0%);}
  }
  @keyframes slide-down {
    0%{opacity: 0; transform: translateY(-100%);}
    100%{opacity: 1; transform: translateY(0%);}
  }
  @keyframes fade-in {
    0%{opacity: 0; }
    100%{opacity: 1;}
  }
  .wrapper{
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    &.position-top{
      z-index: 30 !important;
      top:0;
      .toast{
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        animation: slide-down $animation-duration;
      }
    }
    &.position-bottom{
      bottom:0;
      .toast{
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        animation: slide-up $animation-duration;
      }
    }
    &.position-middle{
      top:50%;
      transform: translate(-50%,-50%);
      .toast{
        animation: fade-in $animation-duration;
      }
    }
  }
  .toast{
    min-height: $toast-min-height;
    line-height: $line-height;
    font-size: 14px;
    display: flex;
    align-items: center;
    background: #33b47a;
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