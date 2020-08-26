import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/Layout'
import Home from '@/views/Home'
import Menu1 from '@/views/Menu1'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      hidden: true,
      component: Layout,
      redirect: "/menu1",
    },
    {
      path: '/menu1',
      name: "menu1",
      component: Layout,
      leafThree: true,
      meta: {
        title: "menu1",
        icon: 'el-icon-phone'
      },
      children: [{
          path: "/menu1-1",
          name: "menu1-1",
          meta: {
            title: "menu1-1",
            icon: 'el-icon-phone'
          },
          component: Home,
          leaf: true,
          children: [{
              path: "/menu1-1-1",
              name: "menu1-1-1",
              meta: {
                title: "menu1-1-1",
                icon: 'el-icon-phone',
                component: resolve => require(['@/views/menu1/menu1-1-1.vue'], resolve)
              }
            },
            {
              path: "/menu1-1-2",
              name: "menu1-1-2",
              meta: {
                title: "menu1-1-2",
                icon: 'el-icon-phone',
                component: resolve => require(['@/views/menu1/menu1-1-2.vue'], resolve)
              }
            },
          ]
        },
        {
          path: "/menu1-2",
          name: "menu1-2",
          meta: {
            title: "menu1-2",
            icon: 'el-icon-phone',
            component: resolve => require(['@/views/menu1/menu1-2.vue'], resolve)
          }
        }
      ]
    },
  ]
})
