// 导入组件，组件必须声明 name
import TimeAxis from './src/TimeAxis.vue'

// 为组件提供 install 安装方法，供按需引入 有歧义暂时不用
TimeAxis.install = function (Vue) {
  Vue.component(TimeAxis.name, TimeAxis)
}

// 默认导出组件
export default TimeAxis