# Vue组件通讯

## 1. props、emit(最常用的父子通讯方式)

#### 父组件传入属性，子组件通过`props`接收，就可以在内部this.XXX的方式使用 子组件`$emit`(事件名，传递的参数)向外弹出一个自定义事件, 在父组件中的属性监听事件，同时也能获取子组件传出来的参数
```vue
//	父组件
<template>
    <div>
        <hello-world msg="hello world!" @confirm="handleConfirm"><hello-world>
    </div>
</template>
<script>
export default {
//	子组件
 props: {
    msg: {
      type: String,
      default: ''
    }
  },
  methods:{
  	handleEmitParent(){
  		this.$emit('confirm', list)
  	}
  }
  }
</script>
```
## 2. 事件总线 EventBus (常用任意两个组件之间通讯)
#### 原理： 开发订阅者模式 ,注册的事件存起来，等触发事件时再调用。定义一个类去处理事件，并挂载到Vue实例的this上即可注册和触发事件，也可拓展一些事件管理

```js
class Bus {
  constructor () {
    this.callbackList = {}
  }

  $on (name, callback) {
    // 注册事件
    this.callbackList[name] ? this.callbackList[name].push(callback) : (this.callbackList[name] = [callback])
  }

  $emit (name, args) {
    // 触发事件
    if (this.callbackList[name]) {
      this.callbackList[name].forEach(cb => cb(args))
    }
  }
}

Vue.prototype.$bus = new Bus()

// 任意两个组件中
// 组件一：在组件的 mounted() 去注册事件
this.$bus.$on('confirm', handleConfirm)

// 组件二：触发事件(如：点击事件后执行触发事件即可)
this.$bus.$emit('confirm', list)


```

## 3. Vuex 状态管理

## 4.  $ref （引用的方式获取子节点）
#### 常用于父组件调用子组件的方法（如：列表数据变化通知子组件重新渲染列表等）,Vue提供了 refs来存储当前所有设置了ref属性的组件PS：因为需要渲染完才能获取到ref属性，所以建议在mounted后去调用，否则有可能会获取不到PS：如果定义了两个相同名字的ref则会this.refs 来存储当前所有设置了 ref 属性的组件 PS：因为需要渲染完才能获取到 ref 属性，所以建议在mounted后去调用，否则有可能会获取不到 PS：如果定义了两个相同名字的ref则会 this. refs来存储当前所有设置了ref属性的组件PS：因为需要渲染完才能获取到ref属性，所以建议在mounted后去调用，否则有可能会获取不到PS：如果定义了两个相同名字的ref则会this.refs.XXX将会是一个数组
```vue

<template>
<hello-world ref="hello"></hello-world>
</template>

<script>
export default {
  mounted(){
    // 调用引用的子组件的方法
    this.$refs.hello.handleRef()
  }
}
</script>

```     

## 5.  attrs /attrs/listeners（常用于对原生组件的封装）

#### $attrs 可以获取父组件传进来但没有通过props接收的属性
```js
// 父组件
<Child :title="title" :desc="desc" >/>

//  子组件内
<template>
<div>
  <h2>{{title}}</h2>
  <p>{{$attrs.desc}}</p>
</div>
</template>	
<script>
export default {
  props: ['title']
  // ...
}
<script>


```
#### $listeners 会展开父组件的所有监听的事件（click事件等）常用于更高层级的封装 举个例子（需求）：一个页面中有两个组件的点击事件触发方法是一样的"

```js
//  父组件
<div>
  <child-first @click="handleClick"></child-first>
  <child-second @click="handleClick"></child-second>
</div>
export default {
  methods: {
    handleClick: (){
      alert('hello')
    }
  }
}

// child-first
<div v-on="$listeners"></div>

// child-second
<div v-on="$listeners"></div>

```

## 6.  provide / inject （祖先及其后代传值）
#### provide / inject （祖先及其后代传值）
```js
//  顶层组件
export default {
  provide(){
    return {
      msg: 'hello world!'
    }
  }
}

//  后代组件
export default {
  inject: ['msg']
}


```





