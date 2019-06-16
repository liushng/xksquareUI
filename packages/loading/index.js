// 导入组件，组件必须声明 name
import Loading from './src/Loading.vue'

// 为组件提供 install 安装方法，供按需引入 有歧义暂时不用
Loading.install = function (Vue) {
  Vue.component(Loading.name, Loading)
}

// 默认导出组件
export default Loading