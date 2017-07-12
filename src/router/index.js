import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import pos from '@/components/page/pos'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: pos
    }
  ]
})
