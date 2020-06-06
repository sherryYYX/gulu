<template>
  <div class="tabs-item" @click="xxx" :class="classes">
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
          active:this.active
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
      xxx(){
        this.eventBus.$emit('update:selected',this.name,this)
      }
    }
  }
</script>

<style scoped lang="scss">
  $color:blue;
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
  }
</style>