# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).


### vite安装项目
##### npm create vite@latest


### vue.draggable.next 中文文档
##### https://www.itxst.com/vue-draggable-next/tutorial.html

## 思路
### 左侧为组件区  有所有可拖拽的组件列表
### 中间为布局容器  需要监控到数据的变化
##### 中间容器需要贾昂数据的变化渲染出来  无论怎么拖动  始终都是中间部分渲染数据 
###### 1.中间的组件也可以拖动
###### 2.中间组件的数据组成，要包含右侧的配置  transformToAvueOptions

