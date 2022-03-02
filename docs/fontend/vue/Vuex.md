# Vuex 

## Vuex 是什么
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式 + 库。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

## Vuex 属性

*有五种，分别是 State、 Getter、Mutation 、Action、 Module。*

### State
State属性是Vuex的单一状态树

### Getter
Getter类似于Vue的 computed 对象。是根据业务逻辑来处理State，使得生成业务所需的属性。

### Mutation
Mutation是唯一用来更改State数据的方法。

### Action
Action是用来解决异步操作而产生的，它提交的是Mutation。

### Module
Module是将Vuex模块化的对象，目的是更好的维护。


## Vuex 使用周期
![Image text](https://vuex.vuejs.org/vuex.png)
页面通过Dispatch来触发Actions，Actions通过Commit来触发Mutation，然后Mutation直接修改State数据,数据改变视图也会改变


## Vuex官网
具体文档看官网[Vuex](https://vuex.vuejs.org/zh/)






