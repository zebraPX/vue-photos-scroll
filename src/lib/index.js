import photosScroll from '../components/photosScroll'
import swipe from '../components/swipe'

const ps = {}


ps.install = function (Vue, options) {
  // const PhotosScrollConstructor = Vue.extend(PhotosScroll)
  Vue.component('photosScroll', photosScroll)
  Vue.component('swipe', swipe)

  // Vue.myGlobalMethod = function () { // 1. 添加全局方法或属性，如: vue-custom-element
  //   // 逻辑...
  // }
  // Vue.directive('my-directive', { // 2. 添加全局资源：指令/过滤器/过渡等，如 vue-touch
  //   bind (el, binding, vnode, oldVnode) {
  //     // 逻辑...
  //   }
  // })
  // Vue.mixin({
  //   created: function () { // 3. 通过全局 mixin方法添加一些组件选项，如: vuex
  //     // 逻辑...
  //   }
  // })
  // Vue.prototype.$myMethod = function (options) { // 4. 添加实例方法，通过把它们添加到 Vue.prototype 上实现
  //   // 逻辑...
  // }
}
// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) { 
    window.Vue.use(ps) 
}

// module default photosScroll
export default ps
export { photosScroll, swipe }
