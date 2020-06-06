<template>
  <div class="tabs-item" @click="onClick" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'gulu-tabs-item',
    inject:['eventBus'],
    props:{
      disabled:{
        type:Boolean,
        default:false
      },
      name:{
        type: String | Number,
        required:true
      }
    },
    data(){
      return{
        active:false
      }
    },
    computed:{
      classes(){
        return{
          active:this.active,
          disabled: this.disabled
        }
      }
    },
    created() {
      this.eventBus.$on('update:selected',(name)=>{
        if(name===this.name){
          this.active=true
        }else{
          this.active=false
        }
      })
    },
    methods:{
      onClick(){
        if(this.disabled){return}
        this.eventBus.$emit('update:selected',this.name,this)
      }
    }
  }
</script>

<style scoped lang="scss">
  $color:blue;
  $disabled-color:#ccc;
  .tabs-item{
    display: flex;
    flex-shrink: 0;
    padding: 0 2em;
    height: 100%;
    align-items: center;
    &.active{
      color:$color;
      font-weight: bold;
      cursor: pointer;
    }
    &.disabled{
       color: $disabled-color;
      cursor: not-allowed;
    }
  }
</style>