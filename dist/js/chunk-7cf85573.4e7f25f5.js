(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cf85573"],{"3dbc":function(t,o,s){"use strict";s("b4d4")},b4d4:function(t,o,s){},b6b4:function(t,o,s){"use strict";s.r(o);var a=function(){var t=this,o=t._self._c;return o("div",{staticClass:"ourBlog",attrs:{id:"blog"}},[o("div",{staticClass:"mobile-ourBlog__container"},[o("h2",{staticClass:"ourBlog__header"},[t._v(" "+t._s("Ru"===t.lang?"Наш блог":"Біздің блог")+" ")]),o("h1",{staticClass:"ourBlog__interestng"},[t._v(" "+t._s("Ru"===t.lang?"Интересное для вас":"Сізге қызық")+" ")]),o("div",{staticClass:"ourBlog__slider"},t._l(t.blogs,(function(s){return o("router-link",{key:s.id,staticClass:"ourBlog__slider__one",attrs:{to:{name:"FullBlog",params:{id:s.id}}}},[o("img",{attrs:{src:s.image,alt:""}}),o("p",[t._v(t._s(s.name))])])})),1)]),o("div",{staticClass:"ourBlog__container"},[o("h2",{staticClass:"ourBlog__header"},[t._v(" "+t._s("Ru"===t.lang?"Наш блог":"Біздің блог")+" ")]),o("h1",{staticClass:"ourBlog__interestng"},[t._v(" "+t._s("Ru"===t.lang?"Интересное для вас":"Сізге қызық")+" ")]),o("div",{staticClass:"ourBlog__slider"},[o("hooper",{attrs:{settings:t.hooperSettings}},[t._l(t.blogs,(function(s){return o("slide",{key:s.id},[o("router-link",{attrs:{to:{name:"FullBlog",params:{id:s.id}}}},[o("img",{attrs:{src:s.image,alt:""}}),o("p",[t._v(t._s(s.title))]),o("router-link",{attrs:{to:{name:"FullBlog",params:{id:s.id}}}},[t._v(" "+t._s("Ru"===t.lang?"Узнать больше":"Көбірек көру")+" ")])],1)],1)})),o("hooper-navigation",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"})],2)],1)])])},i=[],l=s("4ec3"),e=s("7e04"),n={components:{Hooper:e["a"],Slide:e["d"],HooperNavigation:e["b"]},data(){return{lang:this.$cookie.get("lang"),blogs:"",hooperSettings:{itemsToShow:1,infiniteScroll:!0,breakpoints:{600:{centerMode:!1,itemsToShow:2},900:{itemsToShow:4,pagination:"fraction"}}}}},created(){l["a"].getMainBlog().then(t=>{this.blogs=t,console.log(t,"MainBlog")})}},r=n,g=(s("3dbc"),s("2877")),u=Object(g["a"])(r,a,i,!1,null,null,null);o["default"]=u.exports}}]);
//# sourceMappingURL=chunk-7cf85573.4e7f25f5.js.map