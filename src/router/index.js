import Vue from 'vue'
import VueRouter from 'vue-router'
import Nprogress from 'nprogress'
//一级路由
import Home from '../views/home/index.vue'
import Login from '../views/login.vue'
import Post from '../views/post.vue'
import Regirest from '../views/regirest.vue'
//二级路由
import Timeline from '../views/home/timeline.vue'
import My from '../views/home/my.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect:'/home/timeline'
  },
  {
    path: '/login',
    component:Login
  },
  {
    path: '/regirest',
    component:Regirest
  },{
    path: '/post',
    component:Post
  },
  {
    path: '/home',
    component:Home,
    children:[{
      path:'/home/timeline',
      component:Timeline
    },{
      path:'/home/my',
      component:My
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


//添加导航守卫
const whiteList=['/login','/regirest']
router.beforeEach((to,from,next)=>{
  Nprogress.start();
  let isLogin=window.sessionStorage.getItem('isLogin');
  if(!isLogin)
  {
    if(whiteList.indexOf(to.path)===-1)
    {
      Nprogress.done();
      next('/login');
    }else{
      next();
    }
  }else{
    next();
  }
})
router.afterEach((to,from)=>{
  Nprogress.done();
})

export default router
