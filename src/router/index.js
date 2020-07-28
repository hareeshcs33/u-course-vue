import Vue from 'vue'
import Router from 'vue-router'
import UCourse from '@/components/u-course'
import myCart from '@/components/my-cart'
import Home from '@/components/home'
import Categories from '@/components/categories'
import MyCourses from '@/components/my-courses'
import Notifications from '@/components/notifications'
import Likes from '@/components/likes'
import MyCourses2 from '@/components/my-courses2'
import Profile from '@/components/profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/u-course',
      name: 'UCourse',
      component: UCourse
    },
    {
      path: '/my-cart',
      name: 'myCart',
      component: myCart
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/my-courses',
      name: 'MyCourses',
      component: MyCourses
    },
    {
      path: '/notifications',
      name: 'Notifications',
      component: Notifications
    },
    {
      path: '/likes',
      name: 'Likes',
      component: Likes
    },
    {
      path: '/my-courses2',
      name: 'MyCourses2',
      component: MyCourses2
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
