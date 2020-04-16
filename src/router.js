import Vue from 'vue'
import Router from 'vue-router'

// 引入页面
import Home from './views/Home'
import About from './views/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // 路由重定向的三种方式【用第一种方式的人多】
    { path: '/', redirect: '/home' },
    // { path: '/', redirect: { name: 'home' } },
    // { path: '/', redirect: to => { return '/home' } },
    { path: '/home', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About }
  ]
})
