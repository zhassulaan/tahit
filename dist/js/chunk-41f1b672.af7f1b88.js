(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41f1b672"],{"1b05":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"favorites"},[e("div",{staticClass:"favorites__container"},[e("div",{staticClass:"catalog-content_products"},t._l(t.products,(function(r){return e("ProductCard",{key:r.id,attrs:{item:r.print[0],favoriteId:r.id},on:{refresh:t.refresh}})})),1)])])},n=[],i=r("4ec3"),a={data(){return{products:[]}},methods:{refresh(){i["a"].getFavorites().then(t=>this.products=t.favorite_items)}},created(){i["a"].getFavorites().then(t=>this.products=t.favorite_items)},components:{ProductCard:()=>r.e("chunk-19eca15d").then(r.bind(null,"e915"))}},o=a,c=(r("f41b"),r("2877")),d=Object(c["a"])(o,s,n,!1,null,null,null);e["default"]=d.exports},"7d28":function(t,e,r){},f41b:function(t,e,r){"use strict";r("7d28")}}]);
//# sourceMappingURL=chunk-41f1b672.af7f1b88.js.map