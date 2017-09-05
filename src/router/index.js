import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from '@/components/home'
import content from '@/components/content'
import login from '@/components/login'
import personal from '@/components/personal'
import publish from '@/components/publish'
import message from '@/components/message'
import user from '@/components/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:'/content',
      name:'content',
      component:content
    },
    {
      path:'/user',
      name:'user',
      component:user
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/message',
      name:'message',
      component:message
    },
    {
      path:'/publish',
      name:'publish',
      component:publish
    },
    {
      path:'/personal',
      name:'personal',
      component:personal
    }
  ]
})
