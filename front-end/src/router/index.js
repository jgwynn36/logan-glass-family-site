import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import News from '@/components/News'
import Contact from '@/components/Contact'
import Members from '@/components/Members'
import Photos from '@/components/Photos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/members',
      name: 'Reunion Committee',
      component: Members
    },
    {
      path: '/photos',
      name: 'Photos',
      component: Photos
    },
    {
      path: '/contact',
      name: 'Contact Us',
      component: Contact
    }
  ]
})
