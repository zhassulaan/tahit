(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-076c28d7"],{"35d3":function(s,t,e){"use strict";e("8b8b")},"5a9b":function(s,t,e){"use strict";e.r(t);var i=function(){var s=this,t=s._self._c;return t("div",{staticClass:"news"},[t("div",{staticClass:"news__container"},[t("div",{staticClass:"news__main"},[t("h3",{staticClass:"news__main-title"},[s._v(" "+s._s(s.news.name)+" ")]),t("img",{staticClass:"news__main-img",attrs:{src:s.news.image,alt:""}})]),t("div",{staticClass:"news__info"},s._l(s.news.news,(function(e){return t("div",{key:e.id,staticClass:"news__item"},[t("div",{staticClass:"news__item-content"},[t("div",{staticClass:"news__item-text"},[t("h6",{staticClass:"news__item-title"},[s._v(" "+s._s(e.title)+" ")]),t("p",[s._v(" "+s._s(e.text)+" ")])]),t("img",{staticClass:"news__item-img",attrs:{src:e.image,alt:""}})])])})),0)])])},n=[],a=e("4ec3"),c={name:"FullNews",data(){return{news:""}},created(){a["a"].getNewsById(this.$route.params.id).then(s=>this.news=s)}},_=c,l=(e("35d3"),e("2877")),w=Object(l["a"])(_,i,n,!1,null,"3858b496",null);t["default"]=w.exports},"8b8b":function(s,t,e){}}]);
//# sourceMappingURL=chunk-076c28d7.204c2dbd.js.map