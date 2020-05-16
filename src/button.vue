<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
  <g-icon v-if="icon" :name="icon"></g-icon>
    <div class="content"><slot></slot></div>
  </button>
</template>

<script>
  import Vue from 'vue';
  import Icon from "./icon"

 export default {
   components: {Icon},
// props:['icon','iconPosition']
   props:{
     icon:{},
     iconPosition:{
       type:String,
       default:'left',
       validator(value){
        return value === 'left' || value === 'right'
       }
     }
   }
 }

</script>

<style lang="scss" scoped>
  .g-button{
    font-size:var(--font-size);height:var(--button-height);padding:0 1em;
    border-radius:var(--border-radius);border:1px solid var(--border-color);background:var(--button-bg);
    display: inline-flex;justify-content: center;align-items: center;vertical-align: middle;
    &:hover{border-color:var(--border-color-hover);}
    &:active{background:var(--button-active-bg);}
    &:focus{outline: none;} > .g-icon{order:1;margin-right: .2em;} > .content{order:2}
    &.icon-right{ > .g-icon{order:2;margin-left: .2em; margin-right: 0;} > .content{order:1;} }
  }

</style>