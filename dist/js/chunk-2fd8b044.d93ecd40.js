(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fd8b044"],{"20c5":function(t,s,i){},"8cca":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"projects"},[s("div",{staticClass:"projects__container"},[s("h2",{staticClass:"projects__header"},[t._v(" "+t._s("Ru"===t.lang?"Наши продукты":"Our products")+" ")]),s("h2",{staticClass:"projects__subHeader comfort"},[t._v(" "+t._s("Ru"===t.lang?"Эксклюзивный дизайн":"Exclusive Design")+" ")]),s("div",t._l(t.projectImages,(function(e){return s("div",{key:e.id},[e.is_main?s("div",{staticClass:"projects__list"},t._l(e.prints,(function(a){return s("div",{key:a.id,staticClass:"projects__item"},t._l(a.images,(function(r){return s("div",{key:r.id},[r.is_main?s("router-link",{attrs:{to:{name:"Product",params:{id:a.id}}}},[s("img",{attrs:{src:a.images[0].image,alt:""}}),s("img",{staticStyle:{"z-index":"5"},attrs:{src:i("deec"),alt:""}}),s("p",{staticClass:"item__name",staticStyle:{"z-index":"5"}},[t._v(t._s(a.name))])]):t._e(),s("router-link",{attrs:{to:{name:"Product",params:{id:e.prints[0].id}}}},[s("div",{staticClass:"background-print"})])],1)})),0)})),0):t._e()])})),0),s("div",t._l(t.projectImages,(function(e){return s("div",{key:e.id,staticClass:"overlow-sm"},[e.is_main?s("div",{staticClass:"swiperSlider_mob"},t._l(e.prints,(function(a){return s("div",{key:a.id},t._l(a.images,(function(r){return s("li",{key:r.id,staticClass:"projects__item",staticStyle:{position:"relative"}},[r.is_main?s("router-link",{attrs:{to:{name:"Product",params:{id:e.prints[0].id}}}},[s("img",{attrs:{src:a.images[0].image,alt:""}}),s("img",{attrs:{src:i("deec"),alt:""}}),s("p",{staticClass:"item__name"},[t._v(t._s(a.name))])]):t._e(),s("router-link",{staticClass:"background-print",attrs:{to:{name:"Product",params:{id:e.prints[0].id}}}})],1)})),0)})),0):t._e()])})),0)])])},a=[],r=i("4ec3"),n=i("4360"),c={components:{},data(){return{routeParams:n["b"],project:"",lang:this.$cookie.get("lang"),projectImages:[],hooperSettings:{itemsToShow:1,breakpoints:{800:{centerMode:!1,itemsToShow:2},900:{itemsToShow:4,pagination:"fraction"}}}}},created(){r["a"].getMainOffer().then(t=>{this.projectImages=t,console.log(t,"projImages")})}},o=c,d=(i("a674"),i("2877")),l=Object(d["a"])(o,e,a,!1,null,"a9cbec0a",null);s["default"]=l.exports},a674:function(t,s,i){"use strict";i("20c5")},deec:function(t,s,i){t.exports=i.p+"img/arrow.71500173.svg"}}]);
//# sourceMappingURL=chunk-2fd8b044.d93ecd40.js.map