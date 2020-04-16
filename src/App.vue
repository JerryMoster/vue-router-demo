<template>
  <div id="app">
    <!-- 设置路由导航 -->
    <div id="nav">
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于我们</router-link>
    </div>
    <!-- 写对应的路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  padding: 30px;

}
#nav a {
  margin: 0 30px;
  text-decoration: none;
}
#nav a.router-link-exact-active {
  color: red;
  
}
</style>
