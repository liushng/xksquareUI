// 导入组件，组件必须声明 name
import chatScroll from './src/ChatScroll.vue'

// 为组件提供 install 安装方法，供按需引入 有歧义暂时不用
chatScroll.install = function (Vue) {
  Vue.component(chatScroll.name, chatScroll)
}

// 默认导出组件
export default chatScroll