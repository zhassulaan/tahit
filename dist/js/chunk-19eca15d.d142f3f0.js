(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19eca15d"],{"2d08":function(t,e,i){"use strict";i("8916")},8916:function(t,e,i){},e915:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;return t.item?e("div",{staticClass:"product"},[t.isFavorite?e("div",{staticClass:"product__closeIcon",on:{click:t.handleDelete}},[e("CloseIcon")],1):t._e(),e("router-link",{attrs:{to:{name:"Product",params:{id:t.item.id}}}},[e("div",{staticClass:"product_image"},[e("img",{attrs:{src:t.item.images[0],alt:""}})]),e("div",{staticClass:"product_info"},[e("div",{staticClass:"product_info-title"},[t._v(t._s(t.item.name))])])])],1):t._e()},o=[],r=i("4ec3"),a={name:"ProductCard",props:{item:{type:Object,required:!0},favoriteId:{type:Number,required:!1}},components:{CloseIcon:()=>i.e("chunk-2d0ba0e0").then(i.bind(null,"3629"))},data(){return{isFavorite:!1}},mounted(){console.log(this.item),"/office"===this.$router.currentRoute.path?this.isFavorite=!0:this.isFavorite=!1},methods:{handleDelete(){confirm("Точно хотите удалить из избранных?")&&r["a"].deleteFavorite(this.favoriteId).then(()=>{this.$emit("refresh")})}}},n=a,c=(i("2d08"),i("2877")),d=Object(c["a"])(n,s,o,!1,null,"6d1b009e",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-19eca15d.d142f3f0.js.map