import Vue from 'vue';
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Col from './col'
import Row from './row'
import Header from './header'
import Layout from './layout'
import Sider from './sider'
import  Content from './content'
import Footer from './footer'
import Toast from './toast'
import Plugin from './plugin'
import plugin from "./plugin"
import Tab from './tabs'
import TabHead from './tabs-head'
import TabItem from './tabs-item'
import TabBody from './tabs-body'
import TabPane from './tabs-pane'


Vue.component('g-tab-pane',TabPane)
Vue.component('g-tab-item',TabItem)
Vue.component('g-tab-body',TabBody)
Vue.component('g-tab-head',TabHead)
Vue.component('g-tab',Tab)
Vue.component('g-header',Header)
Vue.component('g-layout',Layout)
Vue.component('g-sider',Sider)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)
Vue.component('g-col',Col)
Vue.component('g-row',Row)
Vue.component('g-input',Input)
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.use(plugin)

new Vue({
  el:'#app',
  data: {
    selectedTab:'car',
  },
  created(){

  },
  methods:{
    showToast1(){
      this.showToast('top')
    },
    showToast2(){
      this.showToast('middle')
    },
    showToast3(){
      this.showToast('bottom')
    },
    showToast(position){
      this.$toast(`要充值智商税${parseInt(Math.random()*100)}`,{
        position,
        closeButton:{
          text:'已充值',
          callback(){
            console.log('已充值智商税')
          },
        },
        autoClose:true,
        autoCloseDelay: 1000
      })
    }
  }
})

