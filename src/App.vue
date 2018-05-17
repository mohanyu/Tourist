<!--**.vue 单文件组件-->
<template>
    <div id="app">
      <!--使用keep-alive标签包裹router-view标签
此标签是vue自带的一个标签，它的意思是路由的内容被加载过之后，我就把路由中的内容加载到内存之中，下次再进此路由就不需要重新渲染组件和执行钩子函数，直接去内存中提取数据
-->
      <!--除去Detail组件，每次进Detail都重新获取数据，数据不被缓存-->
      <keep-alive  exclude="Detail">
      <!--<img src="./assets/logo.png">-->
      <!--下面标签显示的是当前路由地址所对应的内容-->
        <router-view/>
      </keep-alive>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
