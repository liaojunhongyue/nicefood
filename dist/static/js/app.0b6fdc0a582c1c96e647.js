webpackJsonp([49],{"3ij6":function(t,e){},Ila5:function(t,e){},Kg7K:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("ZLEe"),o=a.n(n),i=a("Wo84"),c=a("cmAM"),u=a("p9L2"),r=a("kV13"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var d=a("C7Lr")({name:"App"},s,!1,function(t){a("3ij6")},null,null).exports,l=a("wUgx"),p=function(t){return a.e(19).then(function(){return t(a("N4pK"))}.bind(null,a)).catch(a.oe)},m=function(t){return a.e(44).then(function(){return t(a("z9Y3"))}.bind(null,a)).catch(a.oe)},g=function(t){return a.e(28).then(function(){return t(a("M4+h"))}.bind(null,a)).catch(a.oe)},h=function(t){return a.e(45).then(function(){return t(a("BR21"))}.bind(null,a)).catch(a.oe)},f=function(t){return a.e(11).then(function(){return t(a("PwVW"))}.bind(null,a)).catch(a.oe)},j=function(t){return a.e(17).then(function(){return t(a("yE+q"))}.bind(null,a)).catch(a.oe)};r.a.use(l.a);var T=new l.a({base:"/dist/",scrollBehavior:function(t,e,a){return{x:0,y:0}},routes:[{path:"/",name:"main",redirect:"/home",component:function(t){return a.e(6).then(function(){return t(a("S8xU"))}.bind(null,a)).catch(a.oe)},children:[{path:"/home",name:"home",component:function(t){return a.e(1).then(function(){return t(a("zKIK"))}.bind(null,a)).catch(a.oe)}},{path:"/find",redirect:"/find/talk/newtab",name:"find",component:function(t){return a.e(3).then(function(){return t(a("RjfV"))}.bind(null,a)).catch(a.oe)},children:[{path:"talk",redirect:"/find/talk/newtab",name:"findTalk",component:function(t){return a.e(15).then(function(){return t(a("FXQD"))}.bind(null,a)).catch(a.oe)},children:[{path:"newtab",name:"findNewTab",component:m},{path:"hottab",name:"findHotTab",component:m}]},{path:"trends",name:"findTrends",component:function(t){return a.e(40).then(function(){return t(a("6WCQ"))}.bind(null,a)).catch(a.oe)}},{path:"activity",name:"findActivity",component:function(t){return a.e(26).then(function(){return t(a("POR7"))}.bind(null,a)).catch(a.oe)}},{path:"video",name:"findVideo",component:function(t){return a.e(47).then(function(){return t(a("h49A"))}.bind(null,a)).catch(a.oe)}},{path:"carte",name:"findCarte",component:function(t){return a.e(42).then(function(){return t(a("mAZa"))}.bind(null,a)).catch(a.oe)}},{path:"topic",name:"findTopic",component:function(t){return a.e(18).then(function(){return t(a("3cd7"))}.bind(null,a)).catch(a.oe)}}]},{path:"/challenge",name:"challenge",component:function(t){return a.e(2).then(function(){return t(a("LY3h"))}.bind(null,a)).catch(a.oe)}},{path:"/user",name:"user",component:function(t){return a.e(8).then(function(){return t(a("+L4n"))}.bind(null,a)).catch(a.oe)},meta:{requireLogin:!0}}]},{path:"/user/collect",name:"usercollect",component:function(t){return a.e(38).then(function(){return t(a("3UKk"))}.bind(null,a)).catch(a.oe)},meta:{requireLogin:!0},children:[{path:"all",name:"usercollectall",component:g,meta:{requireLogin:!0}},{path:"my",name:"usercollectmy",component:g,meta:{requireLogin:!0}},{path:"menu",name:"usercollectmenu",component:g,meta:{requireLogin:!0}}]},{path:"/user/publish",name:"userpublish",component:function(t){return Promise.all([a.e(0),a.e(35)]).then(function(){return t(a("+1JJ"))}.bind(null,a)).catch(a.oe)},meta:{requireLogin:!0},children:[{path:"menu",name:"userpublishmenu",component:h,meta:{requireLogin:!0}},{path:"article",name:"userpublisharticle",component:h,meta:{requireLogin:!0}},{path:"works",name:"userpublishworks",component:h,meta:{requireLogin:!0}},{path:"talks",name:"userpublishtalks",component:h,meta:{requireLogin:!0}}]},{path:"/user/create/menu",name:"usercreatemenu",component:function(t){return a.e(5).then(function(){return t(a("k9of"))}.bind(null,a)).catch(a.oe)},meta:{requireLogin:!0}},{path:"/user/create/article",name:"usercreatearticle",component:function(t){return Promise.all([a.e(0),a.e(4)]).then(function(){return t(a("qv5Z"))}.bind(null,a)).catch(a.oe)},meta:{requireLogin:!0}},{path:"/user/create/works",name:"usercreateworks",component:function(t){return Promise.all([a.e(0),a.e(12)]).then(function(){return t(a("oky9"))}.bind(null,a)).catch(a.oe)},meta:{requireLogin:!0}},{path:"/user/create/talks",name:"usercreateTalks",component:function(t){return a.e(20).then(function(){return t(a("t0sH"))}.bind(null,a)).catch(a.oe)},meta:{requireLogin:!0}},{path:"/user/task",name:"usertask",component:function(t){return Promise.all([a.e(0),a.e(37)]).then(function(){return t(a("HGtA"))}.bind(null,a)).catch(a.oe)},meta:{requireLogin:!0},children:[{path:"unfinished",name:"taskunfinished",component:f,meta:{requireLogin:!0}},{path:"finished",name:"taskfinished",component:f,meta:{requireLogin:!0}}]},{path:"/user/point",name:"userpoint",component:function(t){return Promise.all([a.e(0),a.e(13)]).then(function(){return t(a("czuM"))}.bind(null,a)).catch(a.oe)},meta:{requireLogin:!0}},{path:"/user/draft",name:"userdraft",component:function(t){return a.e(27).then(function(){return t(a("enWd"))}.bind(null,a)).catch(a.oe)},meta:{requireLogin:!0}},{path:"/user/basket",name:"userbasket",component:function(t){return a.e(9).then(function(){return t(a("Bqhy"))}.bind(null,a)).catch(a.oe)},meta:{requireLogin:!0}},{path:"/user/comment",name:"usercomment",component:function(t){return Promise.all([a.e(0),a.e(22)]).then(function(){return t(a("zs4z"))}.bind(null,a)).catch(a.oe)},meta:{requireLogin:!0},children:[{path:"menu",name:"commentmenu",component:j,meta:{requireLogin:!0}},{path:"works",name:"commentworks",component:j,meta:{requireLogin:!0}},{path:"talks",name:"commenttalks",component:j,meta:{requireLogin:!0}}]},{path:"/user/callback",name:"usercallback",component:function(t){return Promise.all([a.e(0),a.e(10)]).then(function(){return t(a("DGZ7"))}.bind(null,a)).catch(a.oe)},meta:{requireLogin:!0}},{path:"/fooddetails/:id",name:"fooddetails",component:function(t){return Promise.all([a.e(0),a.e(41)]).then(function(){return t(a("BAnq"))}.bind(null,a)).catch(a.oe)}},{path:"/videodetails/:id",name:"videodetails",component:function(t){return a.e(30).then(function(){return t(a("fQqW"))}.bind(null,a)).catch(a.oe)}},{path:"/comment/menu/:id",name:"menucomment",component:function(t){return Promise.all([a.e(0),a.e(32)]).then(function(){return t(a("tPWA"))}.bind(null,a)).catch(a.oe)},meta:{requireLogin:!0}},{path:"/foodgroup",name:"foodgroup",component:function(t){return Promise.all([a.e(0),a.e(24)]).then(function(){return t(a("aW9r"))}.bind(null,a)).catch(a.oe)}},{path:"/currentseason",name:"currentseason",component:function(t){return Promise.all([a.e(0),a.e(43)]).then(function(){return t(a("/JGQ"))}.bind(null,a)).catch(a.oe)}},{path:"/myfooter",name:"myfooter",component:function(t){return Promise.all([a.e(0),a.e(33)]).then(function(){return t(a("US8C"))}.bind(null,a)).catch(a.oe)}},{path:"/foodcategory",name:"foodcategory",component:function(t){return Promise.all([a.e(0),a.e(39)]).then(function(){return t(a("cm0O"))}.bind(null,a)).catch(a.oe)}},{path:"/menumore",name:"menumore",component:function(t){return Promise.all([a.e(0),a.e(23)]).then(function(){return t(a("j2LW"))}.bind(null,a)).catch(a.oe)},children:[{path:"breakfast",name:"menubreakfast",component:p},{path:"lunch",name:"menulunch",component:p},{path:"afternoontea",name:"menuafternoontea",component:p},{path:"dinner",name:"menudinner",component:p},{path:"midnight",name:"menumidnight",component:p}]},{path:"/hotmore",name:"hotmore",component:function(t){return Promise.all([a.e(0),a.e(36)]).then(function(){return t(a("Kf+6"))}.bind(null,a)).catch(a.oe)}},{path:"/hotdetails/:id",name:"hotdetails",component:function(t){return Promise.all([a.e(0),a.e(29)]).then(function(){return t(a("K2ga"))}.bind(null,a)).catch(a.oe)}},{path:"/message",name:"message",component:function(t){return a.e(7).then(function(){return t(a("fgdu"))}.bind(null,a)).catch(a.oe)},meta:{requireLogin:!0}},{path:"/message/news",name:"messagenews",component:function(t){return Promise.all([a.e(0),a.e(21)]).then(function(){return t(a("/r75"))}.bind(null,a)).catch(a.oe)},meta:{requireLogin:!0}},{path:"/message/activity",name:"messageactivity",component:function(t){return Promise.all([a.e(0),a.e(31)]).then(function(){return t(a("/QS9"))}.bind(null,a)).catch(a.oe)},meta:{requireLogin:!0}},{path:"/message/comment",name:"messagecomment",component:function(t){return Promise.all([a.e(0),a.e(16)]).then(function(){return t(a("4bww"))}.bind(null,a)).catch(a.oe)},meta:{requireLogin:!0}},{path:"/message/like",name:"messagelike",component:function(t){return Promise.all([a.e(0),a.e(14)]).then(function(){return t(a("1a+c"))}.bind(null,a)).catch(a.oe)},meta:{requireLogin:!0}},{path:"/message/collect",name:"messagecollect",component:function(t){return Promise.all([a.e(0),a.e(46)]).then(function(){return t(a("F6fx"))}.bind(null,a)).catch(a.oe)},meta:{requireLogin:!0}},{path:"/settings",name:"settings",component:function(t){return Promise.all([a.e(0),a.e(34)]).then(function(){return t(a("WxOQ"))}.bind(null,a)).catch(a.oe)},meta:{requireLogin:!0}},{path:"/login",name:"Login",component:function(t){return a.e(25).then(function(){return t(a("TTJT"))}.bind(null,a)).catch(a.oe)}}]}),v=a("84iU"),b=a.n(v),k=a("kciL"),C={state:{add:{showadd:!1,addrotate:""}},getters:{showaddGetters:function(t){return t.add.showadd},addrotateGetters:function(t){return t.add.addrotate}},mutations:{setShowadd:function(t,e){t.add.showadd=e},setAddrotate:function(t,e){t.add.addrotate=e}},actions:{}},x={state:{set userToken(t){t?window.sessionStorage.setItem("userToken",t):window.sessionStorage.removeItem("userToken")},get userToken(){return window.sessionStorage.getItem("userToken")}},getters:{userTokenGetter:function(t){return t.userToken}},mutations:{setUserToken:function(t,e){t.userToken=e}},actions:{}};r.a.use(k.a);var w=new k.a.Store({modules:{common:C,user:x},strict:!1}),L=(a("Kg7K"),a("uxEr"),a("rVsN")),D=a.n(L);b.a.defaults.timeout=1e4,b.a.interceptors.request.use(function(t){return t},function(t){return D.a.reject(t)}),b.a.interceptors.response.use(function(t){return 200===t.status?D.a.resolve(t):D.a.reject(t)},function(t){return D.a.reject(t.response)});var S={get:function(t,e){return new D.a(function(a,n){b()({method:"get",url:t,params:e}).then(function(t){a(t)}).catch(function(t){n(t)})})},post:function(t,e){return new D.a(function(a,n){b()({method:"post",url:t,data:e}).then(function(t){a(t)}).catch(function(t){n(t)})})}},q={query:{menuData:{url:"/api/menuData",data:{}},hotData:{url:"/api/hotData",data:{}},currentSeasonData:{url:"/api/currentSeasonData",data:{}},foodCategoryData:{url:"/api/foodCategoryData",data:{}},findData:{url:"/api/findData",data:{}},challengeData:{url:"/api/challengeData",data:{}},userData:{url:"/api/userData",data:{}}},user:{login:{url:"/api/login",data:{account:"",password:""}},logout:{url:"/api/logout",data:{}}}},y=(a("Ila5"),a("KH7x")),P=a.n(y),A={dateFormatToSecond:function(t){var e=new Date(t),a=e.getFullYear(),n=e.getMonth()+1,o=e.getDate(),i=e.getHours(),c=e.getMinutes(),u=e.getSeconds(),r=[a,n,o,i,c,u].map(function(t){return t<10?"0"+t:t}),s=P()(r,6);return(a=s[0])+"-"+(n=s[1])+"-"+(o=s[2])+" "+(i=s[3])+":"+(c=s[4])+":"+(u=s[5])},dateFormatToDay:function(t){var e=new Date(t),a=e.getFullYear(),n=e.getMonth()+1,o=e.getDate(),i=[a,n,o].map(function(t){return t<10?"0"+t:t}),c=P()(i,3);return(a=c[0])+"-"+(n=c[1])+"-"+(o=c[2])}};a("qs/E"),r.a.prototype.http=S,r.a.prototype.api=q,r.a.use(i.a).use(c.a).use(u.a),r.a.prototype.Toast=u.a,r.a.prototype.$http=b.a,r.a.config.productionTip=!1,o()(A).forEach(function(t){r.a.filter(t,A[t])}),T.beforeEach(function(t,e,a){window.sessionStorage.getItem("userToken")?a():t.meta.requireLogin?a({path:"/login",query:{redirect:t.fullPath}}):a()}),new r.a({el:"#app",router:T,store:w,components:{App:d},template:"<App/>"})},"qs/E":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("v4dE"),o=a("wAIJ"),i=o.menuData,c=o.hotData,u=o.currentSeasonData,r=o.foodCategoryData,s=o.findData,d=o.challengeData,l=o.userData;n.mock("/api/menuData","get",function(){return{code:0,message:"success",data:i}}),n.mock("/api/hotData","get",function(){return{code:0,message:"success",data:c}}),n.mock("/api/currentSeasonData","get",function(){return{code:0,message:"success",data:u}}),n.mock("/api/foodCategoryData","get",function(){return{code:0,message:"success",data:r}}),n.mock("/api/findData","get",function(){return{code:0,message:"success",data:s}}),n.mock("/api/challengeData","get",function(){return{code:0,message:"success",data:d}}),n.mock("/api/userData","get",function(){return{code:0,message:"success",data:l}}),n.mock("/api/login","post",function(){return{code:0,message:"success",data:"testToken"}}),n.mock("/api/logout","post",function(){return{code:0,message:"success",data:null}}),e.default=n},uxEr:function(t,e){},wAIJ:function(t,e){t.exports={menuData:[{id:1,title:"小蒸包",image:"../static/upload/food1.jpg",star:5,like:"36",browse:"610",author:{avatar:"./static/upload/avatar.jpg",name:"凝儿",desc:"共发布636篇菜谱"}},{id:2,title:"小米炖辽参",image:"./static/upload/food2.jpg",star:5,like:"32",browse:"510",author:{avatar:"./static/upload/avatar.jpg",name:"小颖",desc:"共发布36篇菜谱"}},{id:3,title:"巧克力慕斯",image:"./static/upload/food3.jpg",star:4,like:"26",browse:"320",author:{avatar:"./static/upload/avatar.jpg",name:"秋儿",desc:"共发布32篇菜谱"}},{id:4,title:"虾饺",image:"./static/upload/food4.jpg",star:4,like:"31",browse:"310",author:{avatar:"./static/upload/avatar.jpg",name:"凝儿",desc:"共发布636篇菜谱"}},{id:5,title:"三文鱼",image:"./static/upload/food5.jpg",star:4,like:"29",browse:"306",author:{avatar:"./static/upload/avatar.jpg",name:"秋儿",desc:"共发布32篇菜谱"}},{id:6,title:"草莓布丁",image:"./static/upload/food6.jpg",star:4,like:"21",browse:"263",author:{avatar:"./static/upload/avatar.jpg",name:"凝儿",desc:"共发布636篇菜谱"}},{id:7,title:"烤牛排",image:"./static/upload/food7.jpg",star:4,like:"19",browse:"236",author:{avatar:"./static/upload/avatar.jpg",name:"秋儿",desc:"共发布32篇菜谱"}},{id:8,title:"香煎牛排",image:"./static/upload/food8.jpg",star:4,like:"16",browse:"226",author:{avatar:"./static/upload/avatar.jpg",name:"凝儿",desc:"共发布636篇菜谱"}},{id:9,title:"千层巧克力",image:"./static/upload/food9.jpg",star:4,like:"12",browse:"196",author:{avatar:"./static/upload/avatar.jpg",name:"秋儿",desc:"共发布32篇菜谱"}},{id:10,title:"芒果班戟",image:"./static/upload/food10.jpg",star:4,like:"9",browse:"136",author:{avatar:"./static/upload/avatar.jpg",name:"凝儿",desc:"共发布636篇菜谱"}}],hotData:[{id:1,image:"./static/upload/hot1.jpg",title:"享受全麦早餐",imageTitle:"早餐 · 从全麦面包开始",imageDesc:"告诉大家如何制作全麦面包",details:"全麦面包是指用没有去掉外面麸皮和麦胚的全麦面粉制作的面包，它区别于用精粉（即麦粒去掉麸皮及富含营养的皮下有色部分后磨制的面粉）制作的一般面包。全麦面包特点是颜色微褐，肉眼能看到很多麦麸的小粒，质地比较粗糙，但有香气。由于它的营养价值比白面包高，含有丰富粗纤维、维生素E以及锌、钾等矿物质，在国外很流行，B族维生素丰富，微生物特别喜欢它，所以比普通面包更容易生霉变质。有些饼屋店为降低成本，通常会制作假全麦面包，一是“加色”，在白面粉里加入焦糖或糖浆，利用烘制高温下发生的“炭化”现象，使出炉的面包有着很自然的浅褐色，看上去很像“全麦面包”。具体的识别方法是，这种面包的切口较紧密，尝一口就会露出破绽。另一种是在白面粉里添加胚芽、麸皮，加工出来的面包外表、口感像全麦面包，不过吃起来虽然有粗糙感，但麸皮在嘴中的感觉，没有小麦颗粒的饱满。"},{id:2,image:"./static/upload/hot2.jpg",title:"享受宁静的下午茶时光",imageTitle:"下午茶 · 感受精致生活",imageDesc:"介绍各类小点心",details:"在我国人民饮食中，面点具有广泛的内容。因地理环境、风俗习惯、原料物产等因素的影响，对面点概念的理解也有所不同。从“面点”二字的字意来看，一般认为是利用粉状的粮食（主要是面粉、米粉等）为原料调制而成的用以暂时充饥的食品。在南方习惯称之谓“点心”，而在北方则习惯称之谓“面食”，这类食品通常以手工作坊制作，一般不作下餐主食，而以早晨、午后或夜晚食用为多。从其供应的形式看，是特指饮食业供应的方便食品（包括早点、小吃和筵席点心等）。随着人们就餐形式的改变，原料种类的增多，机械设备的运用，面点技术的提高，使得我国面点的范畴日益广泛，面点成为一类以粮食、果品、鱼虾及根茎类蔬菜等为主要原料，以包捏技法等为主要手段，并利用馅及调味料另以组配，再经过熟制而成的色、香、味、形俱佳的食品。这类食品除了传统饮食业供应的品种外，还包括了糕点食品厂生产的糕点，它既可作为正餐食品供给人们享用，又可作为小吃、点心食品用来调剂口味；不仅作为食品提供人们物质上的满足，还可作为艺术品给人们以精神上的享受。总之，面点即是用各种粮食（米、麦、豆、杂粮），肉类、蛋、乳、蔬菜、果品、鱼虾等为原料，并配以多种调料与辅料，将其调制成坯及馅，经成形、熟制而成的具有一定营养价值且色、香、味、形俱佳的方便食品。"},{id:3,image:"./static/upload/hot3.jpg",title:"享受暖暖的汤",imageTitle:"煲汤 · 感受到暖暖的爱",imageDesc:"介绍各种靓汤",details:"餐桌上有碗热气腾腾的鲜汤，常使人垂涎欲滴，特别是在冬春季，汤既能助人取暖，又能使人的胃口大开。 煲汤往往选择富含蛋白质的动物原料，最好用牛、羊、猪骨和鸡、鸭骨等。其做法是：先把原料洗净，入锅后一次加足冷水，用旺火煮沸，再改用小火，持续20分钟，撇沫，加姜和料酒等调料，待水再沸后用中火保持沸腾3～4小时，使原料里的蛋白质更多地溶解， 浓汤呈乳白色，冷却后能凝固可视为汤熬到家了。"}],currentSeasonData:[{id:1,image:"./static/upload/currentSeason1.jpg",title:"藕",heat:"较低热量",tags:["强健胃黏膜","预防贫血","改善肠胃"]},{id:2,image:"./static/upload/currentSeason2.jpg",title:"白萝卜",heat:"较低热量",tags:["促进消化","保护肠胃","预防富贵病"]},{id:3,image:"./static/upload/currentSeason3.jpg",title:"土豆",heat:"中等热量",tags:["瘦身","美容","吃出好性格"]},{id:4,image:"./static/upload/currentSeason4.jpg",title:"南瓜",heat:"较低热量",tags:["预防癌症","保护胃黏膜"]},{id:5,image:"./static/upload/currentSeason5.jpg",title:"四季豆",heat:"较低热量",tags:["增进食欲","养胃下气","利水消肿"]},{id:6,image:"./static/upload/currentSeason6.jpg",title:"山药",heat:"较低热量",tags:["滋肾益精","降低血糖","延年益寿"]}],foodCategoryData:[{id:1,mainCate:"热门标签",hasSecondCate:!1,list:[{id:1,secondTitle:null,listText:["家常菜","下饭菜","快手菜","早餐","蔬菜","汤羹","烘焙","素食","甜","咸鲜","咖喱","鱼香","蒜香","酸甜","香辣"]}]},{id:2,mainCate:"家常菜谱",hasSecondCate:!1,list:[{id:1,secondTitle:null,listText:["热菜","凉菜","素菜","靓汤","粥品","主食","点心","卤味","微波炉","海鲜","火锅","酱料蘸料","干果零食","饮品","美容","瘦身"]}]},{id:3,mainCate:"每日三餐",hasSecondCate:!1,list:[{id:1,secondTitle:null,listText:["早餐","午餐","晚餐","下午茶","夜宵"]}]},{id:4,mainCate:"主食",hasSecondCate:!1,list:[{id:1,secondTitle:null,listText:["炒饭","焖饭","烩饭","饭","方便面","焖面","拌面","面","饼","包子","饺子","馄饨","粥"]}]},{id:5,mainCate:"场景",hasSecondCate:!1,list:[{id:1,secondTitle:null,listText:["早餐","中晚餐","宵夜","下午茶","宿舍","野餐","宴客","零食小吃","减肥","懒人","便当","单身食谱","大姨妈","健身"]}]},{id:6,mainCate:"人群",hasSecondCate:!1,list:[{id:1,secondTitle:null,listText:["接触电离","高温环境","运动员","接触化学","低温环境","学龄期儿","学龄前儿","围孕期","青少年","老人","婴儿","哺乳期","幼儿","产妇","孕妇","小白"]}]},{id:7,mainCate:"烘焙",hasSecondCate:!1,list:[{id:1,secondTitle:null,listText:["蛋糕面包","饼干偏方","甜品点心","蛋糕","面包","翻糖","烘焙原材","烘焙工具","烘焙常识","烘焙原料"]}]},{id:8,mainCate:"功能性调理",hasSecondCate:!1,list:[{id:1,secondTitle:null,listText:["美容","减肥","乌发","明目","防暑","脚气","祛痰","通乳","头痛","解酒","增肥","夜尿多","延缓衰老","消化不良","神经衰弱","补虚养身","补阳壮阳","滋阴补肾","壮腰健肾","清热解毒","产后调理","不孕不育","健脾开胃","营养不良","益智补脑","肢寒畏冷","清热去火"]}]},{id:9,mainCate:"外国菜谱",hasSecondCate:!1,list:[{id:1,secondTitle:null,listText:["日本料理","韩国料理","意大利餐","法国菜","墨西哥菜","澳大利亚","东南亚菜","西餐面点","餐前小吃","汤品","主菜","主食","甜点","饮品","其他国家"]}]},{id:10,mainCate:"疾病调理",hasSecondCate:!1,list:[{id:1,secondTitle:null,listText:["中风","肠炎","胃炎","痛风","麻疹","肝炎","胃炎","贫血","痔疮","痛经","咽炎","耳鸣","术后","前列腺","糖尿病","高血压","高血脂","冠心病","胆结石","肝硬化","结核病","甲状腺","更年期","关节炎","肺气肿","防癌抗癌","动脉硬化","月经不调","子宫脱垂","小儿遗尿","营养不良","骨质疏松","口腔溃疡","尿路结石","支气管炎","消化性溃","跌打骨折"]}]},{id:11,mainCate:"畜类",hasSecondCate:!0,list:[{id:1,secondTitle:"猪",listText:["猪小排","猪肉","猪蹄","香肠","五花肉","腊肉","猪肝","火腿","猪肚","猪血","猪腰","猪皮"]},{id:2,secondTitle:"牛",listText:["牛肉","牛排","肥牛","牛肚","牛尾","牛柳","牛筋","牛骨","牛蹄筋","牛仔骨"]},{id:3,secondTitle:"羊",listText:["羊肉","羊排","羊腿","羊蝎子","羊肝","羊肚"]},{id:4,secondTitle:"其他畜类",listText:["牛蛙","兔肉"]}]},{id:12,mainCate:"水产",hasSecondCate:!0,list:[{id:1,secondTitle:"鱼",listText:["带鱼","鲫鱼","鲤鱼","鱼头","鳕鱼","三文鱼","草鱼","鲈鱼","黄花鱼","鲅鱼","鲳鱼","鲢鱼","银鱼","武昌鱼","青鱼","鳝鱼","罗非鱼","龙利鱼"]},{id:2,secondTitle:"虾",listText:["虾","对虾","明虾","河虾","海虾","基围虾","皮皮虾","龙虾","北极虾","虾仁","虾皮","海米"]},{id:3,secondTitle:"蟹",listText:["螃蟹","河蟹","海蟹","青蟹","梭子蟹","大闸蟹"]},{id:4,secondTitle:"贝",listText:["鲍鱼","蛤蜊","文蛤","蛏子","海螺","田螺","干贝","鲜贝","扇贝","贻贝","青口","河蚌","北极贝","牡蛎","花螺"]},{id:5,secondTitle:"其他水产",listText:["海参","鱿鱼","墨鱼","田鸡","甲鱼","海胆","海蜇皮","海带"]}]},{id:13,mainCate:"中华菜系",hasSecondCate:!1,list:[{id:1,secondTitle:null,listText:["港台菜","清真菜","湖北菜","徽菜","湘菜","粤菜","鲁菜","川菜","其他菜","广西菜","江西菜","山西菜","云贵菜","西北菜","东北菜","豫菜","沪菜","京菜","苏菜","浙菜","闽菜"]}]},{id:14,mainCate:"蔬菜",hasSecondCate:!0,list:[{id:1,secondTitle:"茎、叶、花菜类",listText:["白菜","芹菜","菠菜","菜花","西兰花","酸白菜","小白菜","卷心菜","莴笋","娃娃菜","油菜","百合","芥菜","西芹","冬笋","茼蒿","竹笋","紫甘蓝","梅菜","芦笋","荠菜","茴香","梅干菜","芹菜叶","苦菊","芦荟","芥兰","春笋","空心菜","橄榄菜","木耳菜","豌豆尖","油麦菜","萝卜苗","圆生菜","芥蓝","香芹","苋菜"]},{id:2,secondTitle:"茄果、瓜菜类",listText:["茄子","南瓜","西红柿","黄瓜","冬瓜","柿子椒","彩椒","西葫芦","苦瓜","丝瓜","尖椒","红椒"]},{id:3,secondTitle:"薯芋淀粉类",listText:["土豆","山药","芋头","紫薯","红薯","西米露","魔芋"]},{id:4,secondTitle:"鲜豆类",listText:["豆角","四季豆","荷兰豆","绿豆芽","黄豆芽","毛豆","扁豆","豌豆苗","豇豆","刀豆","芸豆","豆荚"]},{id:5,secondTitle:"葱蒜类",listText:["洋葱","韭菜","蒜苔","韭黄","大葱","蒜"]},{id:6,secondTitle:"水生蔬菜",listText:["荸荠","藕","茭白"]}]},{id:15,mainCate:"禽类",hasSecondCate:!0,list:[{id:1,secondTitle:"鸡",listText:["鸡翅","鸡腿","鸡肉","鸡爪","鸡胗","鸡翅根","鸡心","鸡肝","鸡脖","童子鸡","乌骨鸡","三黄鸡","柴鸡"]},{id:2,secondTitle:"鸭",listText:["鸭肉","鸭腿","鸭血","鸭胗","鸭翅","鸭舌","鸭掌","鸭头","鸭肠","鸭肝"]},{id:3,secondTitle:"鹅",listText:["鹅肉","鹅肝","鹅蛋"]},{id:4,secondTitle:"",listText:["鹌鹑","鸽子","火鸡"]}]},{id:16,mainCate:"各地小吃",hasSecondCate:!1,list:[{id:1,secondTitle:null,listText:["黑龙江小吃","特色小吃","成都小吃","香港小吃","福建小吃","云南小吃","江西小吃","青海小吃","陕西小吃","安徽小吃","山东小吃","山西小吃","北京小吃","台湾小吃","海南小吃","广西小吃","广东小吃","西藏小吃","贵州小吃","四川小吃","重庆小吃","河南小吃","湖南小吃","湖北小吃","甘肃小吃","宁夏小吃","新疆小吃","辽宁小吃","吉林小吃","浙江小吃","江苏小吃","上海小吃","蒙古小吃","河北小吃","天津小吃"]}]},{id:17,mainCate:"口味",hasSecondCate:!1,list:[{id:1,secondTitle:null,listText:["家常味","香辣味","咸鲜味","甜味","酸甜味","酸辣味","麻辣味","酱香味","奶香味","蒜香味","鱼香味","葱香味","果味","五香味","咖喱味","椒麻味","茄汁味","酸味","苦香味","姜汁味","怪味","芥末味","红油味","豆瓣味","麻将味","黑椒味","胡辣味","其他"]}]},{id:18,mainCate:"脏腑调理",hasSecondCate:!1,list:[{id:1,secondTitle:null,listText:["补心","养肝","补脾","养肺","补肾","补气","补血","哮喘","感冒","腹泻","癫痫","水肿","便秘","失眠","健忘","利尿","心悸","痢疾","呕吐","胃调养","咳嗽","气血双补","活血化淤","止血调理","疏肝理气","阳痿早泄","自汗盗汗"]}]},{id:19,mainCate:"工艺",hasSecondCate:!1,list:[{id:1,secondTitle:null,listText:["糖蘸","腊","泡","灼","榨汁","拔丝","汆","熏","熘","炝","爆","扒","烩","酱","卤","腌","微波","烘焙","炸","煎","烧","拌","炖","煮","蒸","火锅","干锅","烤","砂锅","烙","冻","焖","煲","焗","干煸","煨","其他"]}]},{id:20,mainCate:"厨具",hasSecondCate:!1,list:[{id:1,secondTitle:null,listText:["料理机","榨汁机","面条机","面包机","电饼铛","烧烤炉","微波炉","冰箱","烤箱","炖盅","煎锅","空气炸锅","高压锅","塔吉锅","炖锅","砂锅","汤锅","蒸锅","炒锅","平底锅","电炖锅"]}]},{id:21,mainCate:"水果",hasSecondCate:!1,list:[{id:1,secondTitle:null,listText:["柚子","猕猴桃","梨","柿子","甘蔗","火龙果","橘子","山楂","香蕉","木瓜","苹果","葡萄","橙","榴莲","芒果","枣","菠萝","柠檬","草莓","桂圆","蓝莓","葡萄干","樱桃","西瓜","椰汁","荔枝","桃","百香果","金桔","牛油果","桑葚"]}]},{id:22,mainCate:"菌藻类",hasSecondCate:!0,list:[{id:1,secondTitle:"菌类",listText:["香菇","金针菇","杏鲍菇","平菇","草菇","口蘑","茶树菇","木耳","银耳","猴头菇","白蘑菇","蟹味菇"]},{id:2,secondTitle:"藻类",listText:["海带","海藻","紫菜","海肠","苔菜","裙带菜"]}]},{id:23,mainCate:"豆类",hasSecondCate:!0,list:[{id:1,secondTitle:"豆类",listText:["红豆","绿豆","黄豆","黑豆","蚕豆","青豆","红芸豆","白芸豆","豌豆"]},{id:2,secondTitle:"豆制品类",listText:["豆腐","腐竹","豆腐干","千张","豆腐皮","豆豉","豆浆","油豆腐","冻豆腐","豆渣","素鸡","红豆沙","豆腐丝","烤麸","北豆腐","豆腐渣","豆腐卷","鸡蛋豆腐","内酯豆腐","南豆腐"]}]},{id:24,mainCate:"五谷",hasSecondCate:!1,list:[{id:1,secondTitle:null,listText:["糯米","大米","小米","黑米","红米","紫米","面粉","低筋面粉","高筋面粉","芝麻","薏米","荞麦"]}]}],findData:{talk:{banner:"./static/upload/findTalkBanner.jpg",new:[{id:1,author:{avatar:"./static/upload/avatar.jpg",name:"小C"},text:"我的早餐日记～小米粥，烤鸡翅，千层饼，香菇丁。",images:["./static/upload/food1.jpg","./static/upload/food2.jpg","./static/upload/food3.jpg","./static/upload/food4.jpg","./static/upload/food5.jpg","./static/upload/food6.jpg","./static/upload/food7.jpg","./static/upload/food8.jpg","./static/upload/food9.jpg"],time:151128e7,origin:"餐桌时光",like:889,comment:4565},{id:2,author:{avatar:"./static/upload/avatar.jpg",name:"家和万事兴顺顺顺"},text:"一缕晨光，移动的树影，新鲜的味道、漂亮的造型，寿司满足了味蕾的一切想象。",images:["./static/upload/food1.jpg","./static/upload/food2.jpg","./static/upload/food3.jpg","./static/upload/food4.jpg","./static/upload/food5.jpg","./static/upload/food6.jpg","./static/upload/food7.jpg","./static/upload/food8.jpg","./static/upload/food9.jpg"],time:151128e7,origin:"餐桌时光",like:538,comment:1598},{id:3,author:{avatar:"./static/upload/avatar.jpg",name:"小C"},text:"我的早餐日记～大阪烧，奶茶，橙子，每天为自己而活。",images:["./static/upload/food1.jpg","./static/upload/food2.jpg","./static/upload/food3.jpg","./static/upload/food4.jpg","./static/upload/food5.jpg","./static/upload/food6.jpg","./static/upload/food7.jpg","./static/upload/food8.jpg","./static/upload/food9.jpg"],time:151128e7,origin:"餐桌时光",like:473,comment:1252}],hot:[{id:1,author:{avatar:"./static/upload/avatar.jpg",name:"雨夕之家"},text:"保留一颗感恩的心，它不仅让你怜惜一沙一石、一草一枝，它会让你淡漠某种无形的压力。",images:["./static/upload/food1.jpg","./static/upload/food2.jpg","./static/upload/food3.jpg","./static/upload/food4.jpg","./static/upload/food5.jpg","./static/upload/food6.jpg","./static/upload/food7.jpg","./static/upload/food8.jpg","./static/upload/food9.jpg"],time:151128e7,origin:"餐桌时光",like:889,comment:3393},{id:2,author:{avatar:"./static/upload/avatar.jpg",name:"七十二变小菊子"},text:"美好的生活从吃开始",images:["./static/upload/food1.jpg","./static/upload/food2.jpg","./static/upload/food3.jpg","./static/upload/food4.jpg","./static/upload/food5.jpg","./static/upload/food6.jpg","./static/upload/food7.jpg","./static/upload/food8.jpg","./static/upload/food9.jpg"],time:151128e7,origin:"餐桌时光",like:880,comment:2327},{id:3,author:{avatar:"./static/upload/avatar.jpg",name:"荷风竹路"},text:"最近一周的早餐。认真做早餐，也是对家人的一种爱。",images:["./static/upload/food1.jpg","./static/upload/food2.jpg","./static/upload/food3.jpg","./static/upload/food4.jpg","./static/upload/food5.jpg","./static/upload/food6.jpg","./static/upload/food7.jpg","./static/upload/food8.jpg","./static/upload/food9.jpg"],time:151128e7,origin:"餐桌时光",like:710,comment:1036}]},trends:[{id:1,title:"粥",image:"./static/upload/trends1.jpg",time:"05月16日",author:{avatar:"./static/upload/avatar.jpg",name:"HumiL"}},{id:2,title:"寿司",image:"./static/upload/trends2.jpg",time:"05月06日",author:{avatar:"./static/upload/avatar.jpg",name:"HumiL"}}],activity:[{id:1,image:"./static/upload/activity1.jpg"},{id:2,image:"./static/upload/activity2.jpg"}],video:[{id:1,title:"黑椒牛排的制作过程",video:"./static/upload/video/video1.mp4",cover:"./static/upload/video/video1.jpg",time:"2018-02-06",author:{avatar:"./static/upload/avatar.jpg",name:"Freesiaa Made"}},{id:2,title:"面条的制作过程",video:"./static/upload/video/video2.mp4",cover:"./static/upload/video/video2.jpg",time:"2018-01-06",author:{avatar:"./static/upload/avatar.jpg",name:"Freesiaa Made"}}],carte:[{id:1,title:"我的菜单",desc:"9篇菜谱",avatar:"./static/upload/avatar.jpg",images:["./static/upload/food1.jpg","./static/upload/food2.jpg","./static/upload/food3.jpg","./static/upload/food4.jpg","./static/upload/food5.jpg","./static/upload/food6.jpg","./static/upload/food7.jpg","./static/upload/food8.jpg","./static/upload/food9.jpg"]},{id:2,title:"我的菜单",desc:"9篇菜谱",avatar:"./static/upload/avatar.jpg",images:["./static/upload/food1.jpg","./static/upload/food2.jpg","./static/upload/food3.jpg","./static/upload/food4.jpg","./static/upload/food5.jpg","./static/upload/food6.jpg","./static/upload/food7.jpg","./static/upload/food8.jpg","./static/upload/food9.jpg"]}],topic:[{id:1,title:"关于品茶的所有问题，一篇文章告诉你",image:"./static/upload/topic1.jpg",imageTitle:"关于品茶的所有问题",imageDesc:"一篇文章告诉你"},{id:2,title:"关于粗粮的所有问题，一篇文章告诉你",image:"./static/upload/topic2.jpg",imageTitle:"关于粗粮的所有问题",imageDesc:"一篇文章告诉你"}]},challengeData:{banner:[{id:1,title:"推荐理由：美好的晚餐，这篇文章来介绍",image:"./static/upload/challenge1.jpg"},{id:2,title:"推荐理由：谷物对身体很好",image:"./static/upload/challenge2.jpg"}],task:[{id:1,title:"绑定手机号",image:"./static/upload/task1.jpg",imageTitle:"PHONE",points:100,isFinished:1,isReceived:0},{id:2,title:"上传头像",image:"./static/upload/task2.jpg",imageTitle:"AVATAR",points:100,isFinished:1,isReceived:0},{id:3,title:"关注一位好友",image:"./static/upload/task3.jpg",imageTitle:"FOLLOW",points:100,isFinished:1,isReceived:0},{id:4,title:"收藏3篇喜欢的菜谱",image:"./static/upload/task4.jpg",imageTitle:"COLLECT",points:100,isFinished:1,isReceived:0},{id:5,title:"给喜欢的菜谱评论",image:"./static/upload/task5.jpg",imageTitle:"COMMENT",points:100,isFinished:1,isReceived:0}]},userData:{publish:{menu:{technology:["糖蘸","腊","泡","灼","榨汁","拔丝","汆","熏","熘","炝","爆","扒","烩","酱","卤","腌","微波","烘焙","炸","煎","烧","拌","炖","煮","蒸","火锅","干锅","烤","砂锅","烙","冻","焖","煲","焗","干煸","煨","其他"],taste:["家常味","香辣味","咸鲜味","甜味","酸甜味","酸辣味","麻辣味","酱香味","奶香味","蒜香味","鱼香味","葱香味","果味","五香味","咖喱味","椒麻味","茄汁味","酸味","苦香味","姜汁味","怪味","芥末味","红油味","豆瓣味","麻将味","黑椒味","胡辣味","其他"],time:["<5分钟","<10分钟","<15分钟","<30分钟","<60分钟","<90分钟","<2小时","<数小时","<一天","<数天","2小时以上",">2小时"]}}}}}},["NHnr"]);
//# sourceMappingURL=app.0b6fdc0a582c1c96e647.js.map