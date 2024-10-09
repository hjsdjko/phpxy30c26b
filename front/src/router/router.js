import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import Storeup from '../pages/storeup/list'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import chahuafenleiList from '../pages/chahuafenlei/list'
import chahuafenleiDetail from '../pages/chahuafenlei/detail'
import chahuafenleiAdd from '../pages/chahuafenlei/add'
import chahuazuopinList from '../pages/chahuazuopin/list'
import chahuazuopinDetail from '../pages/chahuazuopin/detail'
import chahuazuopinAdd from '../pages/chahuazuopin/add'
import xiaoxitixingList from '../pages/xiaoxitixing/list'
import xiaoxitixingDetail from '../pages/xiaoxitixing/detail'
import xiaoxitixingAdd from '../pages/xiaoxitixing/add'
import jubaoxinxiList from '../pages/jubaoxinxi/list'
import jubaoxinxiDetail from '../pages/jubaoxinxi/detail'
import jubaoxinxiAdd from '../pages/jubaoxinxi/add'
import sixinList from '../pages/sixin/list'
import sixinDetail from '../pages/sixin/detail'
import sixinAdd from '../pages/sixin/add'
import chatmessageList from '../pages/chatmessage/list'
import chatmessageDetail from '../pages/chatmessage/detail'
import chatmessageAdd from '../pages/chatmessage/add'
import friendList from '../pages/friend/list'
import friendDetail from '../pages/friend/detail'
import friendAdd from '../pages/friend/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import discusschahuazuopinList from '../pages/discusschahuazuopin/list'
import discusschahuazuopinDetail from '../pages/discusschahuazuopin/detail'
import discusschahuazuopinAdd from '../pages/discusschahuazuopin/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'chahuafenlei',
					component: chahuafenleiList
				},
				{
					path: 'chahuafenleiDetail',
					component: chahuafenleiDetail
				},
				{
					path: 'chahuafenleiAdd',
					component: chahuafenleiAdd
				},
				{
					path: 'chahuazuopin',
					component: chahuazuopinList
				},
				{
					path: 'chahuazuopinDetail',
					component: chahuazuopinDetail
				},
				{
					path: 'chahuazuopinAdd',
					component: chahuazuopinAdd
				},
				{
					path: 'xiaoxitixing',
					component: xiaoxitixingList
				},
				{
					path: 'xiaoxitixingDetail',
					component: xiaoxitixingDetail
				},
				{
					path: 'xiaoxitixingAdd',
					component: xiaoxitixingAdd
				},
				{
					path: 'jubaoxinxi',
					component: jubaoxinxiList
				},
				{
					path: 'jubaoxinxiDetail',
					component: jubaoxinxiDetail
				},
				{
					path: 'jubaoxinxiAdd',
					component: jubaoxinxiAdd
				},
				{
					path: 'sixin',
					component: sixinList
				},
				{
					path: 'sixinDetail',
					component: sixinDetail
				},
				{
					path: 'sixinAdd',
					component: sixinAdd
				},
				{
					path: 'chatmessage',
					component: chatmessageList
				},
				{
					path: 'chatmessageDetail',
					component: chatmessageDetail
				},
				{
					path: 'chatmessageAdd',
					component: chatmessageAdd
				},
				{
					path: 'friend',
					component: friendList
				},
				{
					path: 'friendDetail',
					component: friendDetail
				},
				{
					path: 'friendAdd',
					component: friendAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'discusschahuazuopin',
					component: discusschahuazuopinList
				},
				{
					path: 'discusschahuazuopinDetail',
					component: discusschahuazuopinDetail
				},
				{
					path: 'discusschahuazuopinAdd',
					component: discusschahuazuopinAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
