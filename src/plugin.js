import Toast from './toast'
import toast from "./toast"

let currentToast
export default {
  install(Vue,options){
    Vue.prototype.$toast=(message,toastOptions)=>{
      if(currentToast){
        currentToast.close()
      }
      currentToast=createToast({
        Vue,
        message,
        propsData:toastOptions,
        onClose:()=>{
          currentToast=null
        }
      })
    }
  }
}












function createToast ({Vue,message, propsData,onClose}){
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({
    propsData:propsData
  })
  toast.$slots.default=[message] //将message加到插槽
  toast.$mount()
  toast.$on('close',onClose)
  console.log(toast.$el)
  document.body.appendChild(toast.$el)
  return toast
}
