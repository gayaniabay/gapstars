import Vue from 'vue'
import Router from 'vue-router'

import MainContent from './views/MainContent.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main-content',
      component: MainContent
    }
    // {
    //   path: '/event/:id',
    //   name: 'event-show',
    //   component: EventShow,
    //   props: true
    // },
    // {
    //   path: '/event/create',
    //   name: 'event-create',
    //   component: EventCreate
    // }
  ]
})
