webpackJsonp([30],{fQqW:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"video-details"},[i("div",{staticClass:"video-close",on:{click:this.goHistory}},[i("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),this._v(" "),i("div",{staticClass:"video-content"},[i("div",{staticClass:"video"},[i("video",{attrs:{poster:this.videoDetails.cover,src:this.videoDetails.video,controls:"controls",autoplay:"autoplay"}})])])])},staticRenderFns:[]};var o=e("C7Lr")({data:function(){return{videoData:"",videoId:"",videoDetails:""}},mounted:function(){var t=this;this.http.get(this.api.query.findData.url).then(function(i){var e=i.data,a=e.code,o=e.data;0===a?(t.videoData=o.video,t.videoId=t.$route.params.id,t.videoDetails=t.videoData[t.videoId-1]):t.Toast.fail("数据异常")})},methods:{goHistory:function(){this.$router.go(-1)}}},a,!1,function(t){e("jn+8")},null,null);i.default=o.exports},"jn+8":function(t,i){}});
//# sourceMappingURL=30.72177b7f441bbfd5b893.js.map