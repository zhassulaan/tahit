(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2aca8b9e"],{"3e30":function(t,i,s){},a36f:function(t,i,s){t.exports=s.p+"img/heart.d406940d.svg"},d2f1:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t._self._c;return i("div",{staticClass:"product"},[i("div",{staticClass:"container"},[i("div",{staticClass:"product-top"},[i("product-slider",{attrs:{bazis:t.inputValue.template,prints:t.prints}}),i("div",{staticClass:"product-top_info"},[i("div",{staticClass:"product-top_info-title"},[t._v(t._s(t.print.name))]),i("div",{staticClass:"product-top_info-price"},[t._v(" "+t._s(t.cost.cost)+" "+t._s(t.cost.currency)+" ")]),i("form",{staticClass:"product-form",attrs:{action:""}},[i("div",{staticClass:"product-form_one"},[i("app-select",{attrs:{title:t.inputValue.name,label:t.inputValue.name,items:t.basises},on:{input:t.changeInput}})],1),t.cost.cost?i("div",{staticClass:"product-form_two"},[i("div",{staticClass:"product-form_two-col"},[i("app-input",{attrs:{disabled:!0,title:"Ru"===t.lang?"Ширина":"Width",placeholder:t.inputValue.width,isUnit:!0,unit:t.inputValue.width_unit}})],1),i("div",{staticClass:"product-form_two-col"},[i("app-input",{attrs:{type:"number",title:"Ru"===t.lang?"Длина":"Length",placeholder:t.length1?t.length1:"Длина",isUnit:!0,unit:t.inputValue.width_unit},model:{value:t.length1,callback:function(i){t.length1=i},expression:"length1"}})],1)]):t._e(),t.cost.cost?i("div",{staticClass:"product-form_two"},[i("div",{staticClass:"product-form_two-col"},[i("count-input",{attrs:{itemCount:t.quantity},model:{value:t.quantity,callback:function(i){t.quantity=i},expression:"quantity"}})],1),i("div",{staticClass:"product-form_two-col"},[i("app-input",{attrs:{disabled:!0,title:"Ru"===t.lang?"Вес":"Weight",placeholder:t.inputValue.weight,isUnit:!0,unit:t.inputValue.weight_unit}})],1)]):t._e(),t.err?i("p",{staticStyle:{color:"red"}},[t._v(" "+t._s("Ru"===t.lang?"Вы не заполнили поля":"You have not filled in the fields")+" ")]):t._e(),i("div",{staticClass:"product-form_btn"},[t.$route.query.basis?i("div",{staticClass:"product-form_btn-dark",on:{click:t.handleChange}},[i("img",{attrs:{src:s("fd8a"),alt:""}}),t._v(" "+t._s("Ru"===t.lang?"Сохранить":"Save")+" ")]):t.cost.cost?i("div",{staticClass:"product-form_btn-dark",on:{click:t.handleCart}},[i("img",{attrs:{src:s("fd8a"),alt:""}}),t._v(" "+t._s("Ru"===t.lang?"Добавить в корзину":"Add to Basket")+" ")]):t._e(),t.cost.cost?i("div",{staticClass:"product-form_btn-white",on:{click:t.handleFavorite}},[i("img",{attrs:{src:s("a36f"),alt:""}}),t._v(" "+t._s("Ru"===t.lang?"Добавить в избранное":"Add to favorites")+" ")]):t._e(),t.cartFalse?i("span",{staticStyle:{color:"green",display:"block","text-align":"start","font-size":"15px"}},[t._v(" "+t._s("Ru"===t.lang?"Добавлено в Корзину":"Added to Cart")+" ")]):t._e(),t.favoriteFalse?i("span",{staticStyle:{color:"green",display:"block","text-align":"start","font-size":"15px"}},[t._v(" "+t._s("Ru"===t.lang?"Добавлено в Избранные":"Added to Favorites")+" ")]):t._e(),t.token?t._e():i("span",{staticStyle:{color:"gray",display:"block","text-align":"start"}},[t._v(" "+t._s("Ru"===t.lang?"Вы не авторизованы":"You are not authorized")+" ")])])])])],1),i("div",{staticClass:"product-info"},[i("div",{staticClass:"product-info_description"},[i("div",{staticClass:"product-info_title"},[t._v(" "+t._s("Ru"===t.lang?"Описание товара":"Product description")+" ")]),t.inputValue.description?i("p",{staticClass:"product-info_text"},[t._v(" "+t._s(t.inputValue.description.split("\r\n")[0])+" ")]):t._e(),t._l(t.description,(function(s,e){return i("ul",{key:e},[e>0?i("li",[t._v(" "+t._s(s)+" ")]):t._e()])}))],2),i("div",{staticClass:"product-info_delivery"},[i("div",{staticClass:"product-info_title"},[t._v(" "+t._s("Ru"===t.lang?"Доставка":"Delivery")+" ")]),i("p",{staticClass:"product-info_text"},[t._v(" "+t._s("Ru"===t.lang?"Продукция изготавливается на заказ, то есть у нас нет склада готовых к отправке товаров. Это позволяет нам предлагать огромную библиотеку дизайнов от независимых дизайнеров, доступных для более чем 50 различных продуктов. И мы подкрепляем каждую покупку нашей гарантией счастья. Посетите нашу справочную страницу для получения информации.":"Products are made to order, that is, we do not have a warehouse ready to send goods. This allows us to offer a huge library designs from independent designers available to over 50 various products. And we back every purchase with our guarantee. happiness. Visit our help page for information.")+" ")])])]),i("div",{staticClass:"product-recommendation"},[i("may-also-like",{attrs:{print:t.print.attached_prints}})],1)])])},a=[],n=(s("14d9"),s("4ec3")),r={name:"Product",components:{AppSelect:()=>s.e("chunk-bc03a616").then(s.bind(null,"6785")),AppInput:()=>s.e("chunk-093fc662").then(s.bind(null,"007f")),ProductSlider:()=>s.e("chunk-97e30786").then(s.bind(null,"919f")),MayAlsoLike:()=>s.e("chunk-250faa31").then(s.bind(null,"a3c3")),CountInput:()=>s.e("chunk-6958341e").then(s.bind(null,"aa48"))},data(){return{cartFalse:!1,favoriteFalse:!1,timer:0,lang:this.$cookie.get("lang"),items:[],printsId:this.$route.params.id,inputValue:"",prints:[],basises:[],currentCart:{},cartitems:[],err:!1,quantity:0,length1:"",favorite_items:[{basis:[],print:[]}],cost:"",print:"",description:"",token:this.$cookie.get("token")}},watch:{length1:{handler(){this.err=!1}},quantity:{handler(){this.err=!1}},timer:{handler(){this.timer>0?setTimeout(()=>{this.timer--,localStorage.setItem("123",this.timer)},1e3):0===this.timer&&(this.favoriteFalse=!1,this.cartFalse=!1)}}},created(){this.token=this.$cookie.get("token");let t=new FormData;if(t.append("id",this.printsId),n["a"].getPrintsById(this.printsId).then(t=>{this.prints=t[0].images,this.currentCart.print_item=t[0].id,this.favorite_items[0].print[0]=t[0].id,this.print=t[0],console.log(t,"product")}),this.$route.query.basis){let t=JSON.parse(this.$route.query.basis);this.inputValue=t.basis,this.description=this.inputValue.description.split("\r\n"),this.length1=t.length,this.quantity=t.quantity,console.log(t,"ieretrbgibetrgietrbgietrg"),n["a"].getBasisesCost(t.basis.id).then(t=>this.cost=t)}else n["a"].getBasises().then(t=>{this.basises=t,this.inputValue=this.basises[0],this.description=this.inputValue.description.split("\r\n"),console.log(this.inputValue.description),n["a"].getBasisesCost(this.basises[0].id).then(t=>{this.cost=t})})},methods:{changeInput(t){this.inputValue=t,this.description=this.inputValue.description.split("\r\n"),n["a"].getBasisesCost(this.inputValue.id).then(t=>{this.cost=t})},handleChange(){let t=JSON.parse(this.$route.query.basis);n["a"].changeCart(t.id,{length:this.length1,quantity:this.quantity}).then(this.$router.push("/basket"))},handleCart(){this.currentCart.quantity=parseInt(this.quantity),this.currentCart.length=parseInt(this.length1),this.currentCart.basis=this.inputValue.id,this.currentCart.quantity>=1||this.currentCart.length>0?(this.cartitems.push(this.currentCart),n["a"].createCart({cartitems:this.cartitems}).then(()=>{this.cartFalse=!0,this.timer=5,this.$store.dispatch("getCount")}),this.cartitems=[]):this.err=!0},handleFavorite(){this.favorite_items[0].basis[0]=this.inputValue.id,n["a"].addFavorite({basis:this.favorite_items[0].basis[0],print:this.favorite_items[0].print[0]}).then(()=>{this.favoriteFalse=!0,this.timer=5}).catch("Не удалось Добавить :(")},errFalse(){console.log("err changed"),this.err=!1}}},o=r,l=(s("d7c6"),s("2877")),c=Object(l["a"])(o,e,a,!1,null,"79ffb861",null);i["default"]=c.exports},d7c6:function(t,i,s){"use strict";s("3e30")},fd8a:function(t,i,s){t.exports=s.p+"img/buy.f1171807.svg"}}]);
//# sourceMappingURL=chunk-2aca8b9e.5fe61d0e.js.map