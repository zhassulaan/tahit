(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cbb962f"],{"0649":function(t,s,i){"use strict";i("f837")},c9f5:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"blog"},[s("div",{staticClass:"container"},[s("div",{staticClass:"blog-title"},[t._v(" "+t._s(t.blogs.name)+" ")]),s("div",{staticClass:"blog-header"},[s("div",{staticClass:"blog-header_info"},[s("div",{staticClass:"blog-header_info-title"},[t._v(" "+t._s(t.blogs.title)+" ")]),s("div",{staticClass:"blog-header_info-text"},[t._v(" "+t._s(t.blogs.text)+" ")])]),s("div",{staticClass:"blog-header_img"},[s("img",{attrs:{src:t.blogs.image,alt:""}})])]),s("div",{staticClass:"blog-row"},[s("div",{staticClass:"blog-contents"},t._l(t.blogs.blogs,(function(i){return s("div",{key:i.id,staticClass:"blog-content"},[s("div",{staticClass:"blog-content_title"},[t._v(" "+t._s(i.title)+" ")]),s("div",{staticClass:"blog-content_gallery"},[s("blog-slider",{attrs:{items:i.images}})],1),s("div",{staticClass:"blog-content_text"},[t._v(" "+t._s(i.text)+" ")])])})),0),s("div",{staticClass:"blog-content_sitebar"},t._l(t.news,(function(i,a){return s("div",{key:a,staticClass:"blog-sitebar"},[a<3?s("router-link",{staticClass:"blog-sitebar_info",attrs:{to:{name:"FullNews",params:{id:i.id}}}},[s("div",{staticClass:"blog-sitebar_info-title"},[t._v(" "+t._s(i.name)+" ")]),s("div",{staticClass:"blog-sitebar_info-text"},[t._v(" "+t._s(i.text)+" ")]),s("div",{staticClass:"blog-sitebar_info-row"},[s("div",{staticClass:"blog-sitebar_info-data"},[t._v(" "+t._s(i.updated_at.split("T")[0])+" ")]),s("router-link",{attrs:{to:{name:"FullNews",params:{id:i.id}}}},[s("div",{staticClass:"blog-sitebar_info-btn"},[t._v(" "+t._s("Ru"===t.$cookie.get("lang")?"Узнать больше":"See more")+" ")])])],1)]):t._e(),a<3?s("router-link",{staticClass:"blog-sitebar_img",attrs:{to:{name:"FullNews",params:{id:i.id}}}},[s("img",{attrs:{src:i.image,alt:""}})]):t._e()],1)})),0)])])])},e=[],l=i("4ec3"),o={name:"FullBlog",components:{BlogSlider:()=>i.e("chunk-b04f55d4").then(i.bind(null,"4964"))},data(){return{blogs:"",news:"",lang:this.$cookie.get("lang")}},created(){l["a"].getMainNews().then(t=>{this.news=t}),l["a"].getBlogById(this.$route.params.id).then(t=>{this.blogs=t,console.log(t,"blogs")})}},n=o,r=(i("0649"),i("2877")),c=Object(r["a"])(n,a,e,!1,null,"2341ef96",null);s["default"]=c.exports},f837:function(t,s,i){}}]);
//# sourceMappingURL=chunk-1cbb962f.c15057be.js.map