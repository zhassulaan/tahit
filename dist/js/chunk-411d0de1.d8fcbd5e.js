(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-411d0de1"],{"07d3":function(e,i,t){},"966d":function(e,i,t){e.exports=t.p+"img/arrow-right.49e3e1ef.svg"},"9ba7":function(e,i,t){e.exports=t.p+"img/arrow-left.ab20499a.svg"},a3c3:function(e,i,t){"use strict";t.r(i);var s=function(){var e=this,i=e._self._c;return i("div",{staticClass:"may-like"},[i("div",{staticClass:"container"},[i("h3",{staticClass:"may-like__title"},[e._v(" "+e._s("Ru"===e.lang?"Вам также может понравиться":"Сізге ұнауы мүмкін")+" ")]),i("div",{staticClass:"may-like__slider"},[i("swiper",{ref:"swiperSlider",attrs:{options:e.sliderOptions}},e._l(e.print.prints,(function(t){return i("swiper-slide",{key:t.id},[i("router-link",{attrs:{to:{name:"Product",params:{id:t.id}}},nativeOn:{click:function(i){return e.$router.go()}}},e._l(t.images,(function(s){return i("div",{key:s.id,staticClass:"may-like__item"},[s.is_main?i("img",{staticClass:"may-like__img",class:{active:e.index===e.slideIndex},attrs:{src:s.image,alt:""},on:{click:function(i){return i.preventDefault(),e.getSlideFromPagination(e.index)}}}):e._e(),s.is_main?i("p",{staticClass:"may-like__text"},[e._v(" "+e._s(t.name)+" ")]):e._e()])})),0)],1)})),1),i("div",{staticClass:"may-like__arrows"},[i("button",{staticClass:"may-like__arrow may-like__arrow-prev",on:{click:e.prevSlide}},[i("img",{attrs:{src:t("9ba7"),alt:""}})]),i("button",{staticClass:"may-like__arrow may-like__arrow-next",on:{click:e.nextSlide}},[i("img",{attrs:{src:t("966d"),alt:""}})])])],1)])])},a=[],r={name:"MayAlsoLike",props:["print"],data(){return{lang:this.$cookie.get("lang"),sliderOptions:{slidesPerView:6,breakpoints:{320:{slidesPerView:2,spaceBetween:0},1023:{slidesPerView:6,spaceBetween:30}}},items:[]}},computed:{swiper(){var e;return null===(e=this.$refs)||void 0===e?void 0:e.swiperSlider}},methods:{prevSlide(){var e;null===(e=this.swiper)||void 0===e||e.swiperInstance.slidePrev()},nextSlide(){this.swiper.swiperInstance.slideNext()}}},n=r,l=(t("ee6f"),t("2877")),o=Object(l["a"])(n,s,a,!1,null,"60266d6b",null);i["default"]=o.exports},ee6f:function(e,i,t){"use strict";t("07d3")}}]);
//# sourceMappingURL=chunk-411d0de1.d8fcbd5e.js.map