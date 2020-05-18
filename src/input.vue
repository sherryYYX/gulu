<template>
  <div class="wrapper" :class="{'error':error}">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
    @change="$emit('change',$event.target.value)"
    @input="$emit('input',$event.target.value)"
           @focus="$emit('focus',$event.target.value)"
           @blur="$emit('blur',$event.target.value)">
    <template v-if="error">
      <icon name="error" class="error-icon"></icon>
      <span class="error-massage">{{error}}</span>
    </template>
  </div>
</template>

<script>
  import icon from "./icon"
  export default {
    components:{
     icon
    },
    name:'gulu-input',
    props:{
      value:{
        type:String
      },
      disabled:{
        type:Boolean,
        default:false
      },
      readonly:{
        type:Boolean,
        default: false
      },
      error:{
        type:String
      }
    }
  }
</script>

<style lang="scss" scoped>
  $font-size:14px;
  $height:32px;
  $border-color:#999;
  $border-color-hover:#666;
  $border-radius:4px;
  $box-shadow-color:rgb(0,0,0,0.5);
  $red:#f1453d;
.wrapper{display: inline-flex;align-items: center;
  font-size: $font-size;
  > :not(:last-child){
      margin-right: .5em;
    }
  &.error{ > input{border-color: $red;} }
  .error-icon{fill:$red;}
  .error-massage{color: $red;}
  > input{height: $height;border-radius: $border-radius;border:1px solid $border-color;padding: 0 8px;
    &:hover{border-color: $border-color-hover;}
    &:focus{box-shadow: inset 0 1px 3px $box-shadow-color;outline: none;}
    &[disabled], &[readonly]{border-color: #bbb;color: #bbb;cursor: not-allowed;} } }
</style>










