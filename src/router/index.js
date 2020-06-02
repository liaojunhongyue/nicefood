import Vue from 'vue'
import Router from 'vue-router'

const Home = r => require.ensure([], () => r(require('@/components/home/home')))
const foodGroup = r => require.ensure([], () => r(require('@/components/home/category/foodgroup/foodgroup')))
const currentSeason = r => require.ensure([], () => r(require('@/components/home/category/currentseason/currentseason')))
const myFooter = r => require.ensure([], () => r(require('@/components/home/category/myfooter/myfooter')))
const foodCategory = r => require.ensure([], () => r(require('@/components/home/category/foodcategory/foodcategory')))
const menuMore = r => require.ensure([], () => r(require('@/components/home/menu/menumore/menumore')))
const menuList = r => require.ensure([], () => r(require('@/components/home/menu/menumore/menulist')))
const hotMore = r => require.ensure([], () => r(require('@/components/home/hot/hotmore/hotmore')))
const hotDetails = r => require.ensure([], () => r(require('@/components/details/hotdetails')))
const Find = r => require.ensure([], () => r(require('@/components/find/find')))
const findTalk = r => require.ensure([], () => r(require('@/components/find/tab/talk')))
const findTalkTab = r => require.ensure([], () => r(require('@/components/find/tab/talktab')))
const findTrends = r => require.ensure([], () => r(require('@/components/find/tab/trends')))
const findActivity = r => require.ensure([], () => r(require('@/components/find/tab/activity')))
const findVideo = r => require.ensure([], () => r(require('@/components/find/tab/video')))
const findCarte = r => require.ensure([], () => r(require('@/components/find/tab/carte')))
const findTopic = r => require.ensure([], () => r(require('@/components/find/tab/topic')))
const Challenge = r => require.ensure([], () => r(require('@/components/challenge/challenge')))
const User = r => require.ensure([], () => r(require('@/components/user/user')))
const userCollect = r => require.ensure([], () => r(require('@/components/user/collect/collect')))
const userCollectMenu = r => require.ensure([], () => r(require('@/components/user/collect/menutemplate')))
const userPublish = r => require.ensure([], () => r(require('@/components/user/publish/publish')))
const userPublishCont = r => require.ensure([], () => r(require('@/components/user/publish/publishtemplate')))
const userCreateMenu = r => require.ensure([], () => r(require('@/components/user/publish/create/menu')))
const userCreateArticle = r => require.ensure([], () => r(require('@/components/user/publish/create/article')))
const userCreateWorks = r => require.ensure([], () => r(require('@/components/user/publish/create/works')))
const userCreateTalks = r => require.ensure([], () => r(require('@/components/user/publish/create/talks')))
const userTask = r => require.ensure([], () => r(require('@/components/user/task/task')))
const userTaskList = r => require.ensure([], () => r(require('@/components/user/task/tasktemplate')))
const userPoint = r => require.ensure([], () => r(require('@/components/user/point/point')))
const userDraft = r => require.ensure([], () => r(require('@/components/user/draft/draft')))
const userBasket = r => require.ensure([], () => r(require('@/components/user/basket/basket')))
const userComment = r => require.ensure([], () => r(require('@/components/user/comment/comment')))
const userCommentList = r => require.ensure([], () => r(require('@/components/user/comment/commenttemplate')))
const userCallback = r => require.ensure([], () => r(require('@/components/user/callback/callback')))
const foodDetails = r => require.ensure([], () => r(require('@/components/details/fooddetails')))
const videoDetails = r => require.ensure([], () => r(require('@/components/details/videodetails')))
const Message = r => require.ensure([], () => r(require('@/components/message/message')))
const messageNews = r => require.ensure([], () => r(require('@/components/message/news/news')))
const messageActivity = r => require.ensure([], () => r(require('@/components/message/activity/activity')))
const messageComment = r => require.ensure([], () => r(require('@/components/message/comment/comment')))
const messageLike = r => require.ensure([], () => r(require('@/components/message/like/like')))
const messageCollect = r => require.ensure([], () => r(require('@/components/message/collect/collect')))
const menuComment = r => require.ensure([], () => r(require('@/components/comment/menucomment')))
const Login = r => require.ensure([], () => r(require('@/components/user/login/login')))
Vue.use(Router)

export default new Router({
  base: '/dist/',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home', // 首页
      component: Home,
    },
    {
    	path: '/find',
      redirect: '/find/talk/newtab',
    	name: 'find', // 发现 > 食话
    	component: Find,
      children: [
        {
          path: 'talk',
          redirect: '/find/talk/newtab',
          name: 'findTalk', // 发现 > 食话
          component: findTalk,
          children: [
            {
              path: 'newtab',
              name: 'findNewTab',
              component: findTalkTab
            },
            {
              path: 'hottab',
              name: 'findHotTab',
              component: findTalkTab
            }
          ]
        },
        {
          path: 'trends',
          name: 'findTrends', // 发现 > 动态
          component: findTrends
        },
        {
          path: 'activity',
          name: 'findActivity', // 发现 > 活动
          component: findActivity
        },
        {
          path: 'video',
          name: 'findVideo', // 发现 > 视频
          component: findVideo
        },
        {
          path: 'carte',
          name: 'findCarte', // 发现 > 菜单
          component: findCarte
        },
        {
          path: 'topic',
          name: 'findTopic', // 发现 > 专题
          component: findTopic
        }
      ]
    },
    {
    	path: '/challenge',
    	name: 'challenge', // 挑战
    	component: Challenge
    },
    {
    	path: '/user',
    	name: 'user', // 我的
    	component: User
    },
    {
      path: '/user/collect',
      name: 'usercollect', // 我的 > 收藏
      component: userCollect,
      children: [
        {
          path: 'all',
          name: 'usercollectall',
          component: userCollectMenu
        },
        {
          path: 'my',
          name: 'usercollectmy',
          component: userCollectMenu
        },
        {
          path: 'menu',
          name: 'usercollectmenu',
          component: userCollectMenu
        }
      ]
    },
    {
      path: '/user/publish',
      name: 'userpublish', // 我的 > 发布
      component: userPublish,
      children: [
        {
          path: 'menu',
          name: 'userpublishmenu', // 我的 > 发布 > 菜谱
          component: userPublishCont
        },
        {
          path: 'article',
          name: 'userpublisharticle', // 我的 > 发布 > 文章
          component: userPublishCont
        },
        {
          path: 'works',
          name: 'userpublishworks', // 我的 > 发布 > 作品
          component: userPublishCont
        },
        {
          path: 'talks',
          name: 'userpublishtalks', // 我的 > 发布 > 食话
          component: userPublishCont
        }
      ]
    },
    {
      path: '/user/create/menu',
      name: 'usercreatemenu',
      component: userCreateMenu
    },
    {
      path: '/user/create/article',
      name: 'usercreatearticle',
      component: userCreateArticle
    },
    {
      path: '/user/create/works',
      name: 'usercreateworks',
      component: userCreateWorks
    },
    {
      path: '/user/create/talks',
      name: 'usercreateTalks',
      component: userCreateTalks
    },
    {
      path: '/user/task',
      name: 'usertask',
      component: userTask,
      children: [
        {
          path: 'unfinished',
          name: 'taskunfinished',
          component: userTaskList
        },
        {
          path: 'finished',
          name: 'taskfinished',
          component: userTaskList
        }
      ]
    },
    {
      path: '/user/point',
      name: 'userpoint',
      component: userPoint
    },
    {
      path: '/user/draft',
      name: 'userdraft',
      component: userDraft
    },
    {
      path: '/user/basket',
      name: 'userbasket',
      component: userBasket
    },
    {
      path: '/user/comment',
      name: 'usercomment',
      component: userComment,
      children: [
        {
          path: 'menu',
          name: 'commentmenu',
          component: userCommentList
        },
        {
          path: 'works',
          name: 'commentworks',
          component: userCommentList
        },
        {
          path: 'talks',
          name: 'commenttalks',
          component: userCommentList
        }
      ]
    },
    {
      path: '/user/callback',
      name: 'usercallback',
      component: userCallback
    },
    {
      path: '/fooddetails/:id',
      name: 'fooddetails',
      component: foodDetails
    },
    {
      path: '/videodetails/:id',
      name: 'videodetails',
      component: videoDetails
    },
    {
      path: '/comment/menu/:id',
      name: 'menucomment',
      component: menuComment
    },
    {
      path: '/foodgroup',
      name: 'foodgroup', // 智能组菜
      component: foodGroup
    },
    {
      path: '/currentseason',
      name: 'currentseason', // 当季食材
      component: currentSeason
    },
    {
      path: '/myfooter',
      name: 'myfooter', // 我的足迹
      component: myFooter
    },
    {
      path: '/foodcategory',
      name: 'foodcategory', // 菜谱分类
      component: foodCategory
    },
    {
      path: '/menumore',
      name: 'menumore', // 每日三餐更多
      component: menuMore,
      children: [
        {
          path: 'breakfast',
          name: 'menubreakfast',
          component: menuList
        },
        {
          path: 'lunch',
          name: 'menulunch',
          component: menuList
        },
        {
          path: 'afternoontea',
          name: 'menuafternoontea',
          component: menuList
        },
        {
          path: 'dinner',
          name: 'menudinner',
          component: menuList
        },
        {
          path: 'midnight',
          name: 'menumidnight',
          component: menuList
        }
      ]
    },
    {
      path: '/hotmore',
      name: 'hotmore', // 热门专题更多
      component: hotMore
    },
    {
      path: '/hotdetails/:id',
      name: 'hotdetails',
      component: hotDetails
    },
    {
      path: '/message',
      name: 'message', // 消息
      component: Message
    },
    {
      path: '/message/news',
      name: 'messagenews',
      component: messageNews
    },
    {
      path: '/message/activity',
      name: 'messageactivity',
      component: messageActivity
    },
    {
      path: '/message/comment',
      name: 'messagecomment',
      component: messageComment
    },
    {
      path: '/message/like',
      name: 'messagelike',
      component: messageLike
    },
    {
      path: '/message/collect',
      name: 'messagecollect',
      component: messageCollect
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
