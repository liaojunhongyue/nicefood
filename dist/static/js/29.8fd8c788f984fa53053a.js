webpackJsonp([29],{ENh8:function(t,a){},K2ga:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s={components:{"f-normal-header":e("TC6A").a},data:function(){return{hotData:"",hotDetails:"",hotId:"",hotIndex:""}},mounted:function(){var t=this;this.http.get(this.api.query.hotData.url).then(function(a){var e=a.data,s=e.code,i=e.data;0===s?(t.hotData=i,t.hotId=t.$route.params.id,t.hotIndex=t.hotId-1,t.hotDetails=t.hotData[t.hotIndex]):t.Toast.fail("数据异常")})}},i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hot-details-wrapper"},[e("f-normal-header",{attrs:{message:"热门专题",historyurl:""}}),t._v(" "),e("div",{staticClass:"hot-details"},[e("div",{staticClass:"pic"},[e("img",{attrs:{src:t.hotDetails.image}}),t._v(" "),e("p",{staticClass:"pic-title"},[t._v(t._s(t.hotDetails.imageTitle))]),t._v(" "),e("p",{staticClass:"pic-desc"},[t._v(t._s(t.hotDetails.imageDesc))])]),t._v(" "),e("p",{staticClass:"title"},[t._v(t._s(t.hotDetails.title))]),t._v(" "),e("p",{staticClass:"details"},[t._v(t._s(t.hotDetails.details))])])],1)},staticRenderFns:[]};var o=e("C7Lr")(s,i,!1,function(t){e("ENh8")},null,null);a.default=o.exports}});
//# sourceMappingURL=29.8fd8c788f984fa53053a.js.map