<template>
  <div class="popover"  @click="onClick" ref="popover">
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