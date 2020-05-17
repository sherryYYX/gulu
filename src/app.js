import Vue from 'vue';
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)

new Vue({
  el:'#app',
  data:{
    loading1:true,
    loading2:true,
    loading3:true
  }
})

import chai from 'chai';
import spies from 'chai-spies'
chai.use(spies)
// //单元测试
// const expect =chai.expect;
// {
//   let Constructor = Vue.extend(Button)
// const button = new Constructor({
//   propsData:{
//     icon:'up'
//   },
// })
// button.$mount('#test')
// let useElement= button.$el.querySelector('use')
// expect(useElement.getAttribute('xlink:href')).to.eq('#i-up')
//   button.$el.remove()
//   button.$destroy()
// }
//
// {
//   let Constructor = Vue.extend(Button)
//   const button = new Constructor({
//     propsData:{
//       icon:'up',
//       loading:true
//     },
//   })
//   button.$mount()
//   let useElement= button.$el.querySelector('use')
//   expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
//   button.$el.remove()
//   button.$destroy()
// }
// {
//   let Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData:{
//       icon:'up',
//     },
//   })
//   vm.$mount()
//   let spy = chai.spy(function () {})
//   vm.$on('click',spy)
//   let button= vm.$el
//   button.click()
//   expect(spy).to.have.been.called()
// }