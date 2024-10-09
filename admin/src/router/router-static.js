import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import forum from '@/views/modules/forum/list'
    import sixin from '@/views/modules/sixin/list'
    import aboutus from '@/views/modules/aboutus/list'
    import systemintro from '@/views/modules/systemintro/list'
    import yonghu from '@/views/modules/yonghu/list'
    import chahuafenlei from '@/views/modules/chahuafenlei/list'
    import jubaoxinxi from '@/views/modules/jubaoxinxi/list'
    import config from '@/views/modules/config/list'
    import discusschahuazuopin from '@/views/modules/discusschahuazuopin/list'
    import chahuazuopin from '@/views/modules/chahuazuopin/list'
    import xiaoxitixing from '@/views/modules/xiaoxitixing/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/forum',
        name: '社交论坛',
        component: forum
      }
      ,{
	path: '/sixin',
        name: '私信',
        component: sixin
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/chahuafenlei',
        name: '插画分类',
        component: chahuafenlei
      }
      ,{
	path: '/jubaoxinxi',
        name: '举报信息',
        component: jubaoxinxi
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/discusschahuazuopin',
        name: '插画作品评论',
        component: discusschahuazuopin
      }
      ,{
	path: '/chahuazuopin',
        name: '插画作品',
        component: chahuazuopin
      }
      ,{
	path: '/xiaoxitixing',
        name: '消息提醒',
        component: xiaoxitixing
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
