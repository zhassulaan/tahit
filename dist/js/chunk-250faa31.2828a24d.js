(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-250faa31"],{"716d":function(i,e,t){"use strict";t("7fd3")},"7fd3":function(i,e,t){},"966d":function(i,e,t){i.exports=t.p+"img/arrow-right.49e3e1ef.svg"},"9ba7":function(i,e,t){i.exports=t.p+"img/arrow-left.ab20499a.svg"},a3c3:function(i,e,t){"use strict";t.r(e);var s=function(){var i=this,e=i._self._c;return e("div",{staticClass:"may-like"},[e("div",{staticClass:"container"},[e("h3",{staticClass:"may-like__title"},[i._v(" "+i._s("Ru"===i.lang?"Вам также может понравиться":"May also like")+" ")]),e("div",{staticClass:"may-like__slider"},[e("swiper",{ref:"swiperSlider",attrs:{options:i.sliderOptions}},i._l(i.print.prints,(function(t){return e("swiper-slide",{key:t.id},[e("router-link",{attrs:{to:{name:"Product",params:{id:t.id}}},nativeOn:{click:function(e){return i.$router.go()}}},i._l(t.images,(function(s){return e("div",{key:s.id,staticClass:"may-like__item"},[s.is_main?e("img",{staticClass:"may-like__img",class:{active:i.index===i.slideIndex},attrs:{src:s.image,alt:""},on:{click:function(e){return e.preventDefault(),i.getSlideFromPagination(i.index)}}}):i._e(),s.is_main?e("p",{staticClass:"may-like__text"},[i._v(" "+i._s(t.name)+" ")]):i._e()])})),0)],1)})),1),e("div",{staticClass:"may-like__arrows"},[e("button",{staticClass:"may-like__arrow may-like__arrow-prev",on:{click:i.prevSlide}},[e("img",{attrs:{src:t("9ba7"),alt:""}})]),e("button",{staticClass:"may-like__arrow may-like__arrow-next",on:{click:i.nextSlide}},[e("img",{attrs:{src:t("966d"),alt:""}})])])],1)])])},a=[],r={name:"MayAlsoLike",props:["print"],data(){return{lang:this.$cookie.get("lang"),sliderOptions:{slidesPerView:6,breakpoints:{320:{slidesPerView:2,spaceBetween:0},1023:{slidesPerView:6,spaceBetween:30}}},items:[]}},computed:{swiper(){var i;return null===(i=this.$refs)||void 0===i?void 0:i.swiperSlider}},methods:{prevSlide(){var i;null===(i=this.swiper)||void 0===i||i.swiperInstance.slidePrev()},nextSlide(){this.swiper.swiperInstance.slideNext()}}},n=r,l=(t("716d"),t("2877")),o=Object(l["a"])(n,s,a,!1,null,"a1d229a8",null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-250faa31.2828a24d.js.map