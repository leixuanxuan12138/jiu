import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import buy from '@/components/buy/buy'
import classify from '@/components/classify/classify'
import hot from '@/components/hot/hot'
import mine from '@/components/mine/mine'
import search from '@/components/home/children/search'
import main from '@/components/main/main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
      children: [
        {
          name: 'search',
          path: 'search',
          component: search
        }
      ]
    },
    {
      path: '/classify',
      component: classify
    },
    {
      path: '/buy',
      component: buy
    },
    {
      path: '/hot',
      component: hot
    },
    {
      path: '/mine',
      component: mine
    },
    {
      path: '/main',
      component: main
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
