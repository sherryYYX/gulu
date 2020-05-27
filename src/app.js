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
    loading1: true,
    loading2: true,
    loading3: true,
    message: 'hi',
  },
  created(){
    this.$toast('我知道了')
  },
  methods:{
   showToast(){
     this.$toast("我是toast")
   }
  }
})

