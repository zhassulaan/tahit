(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d4c10f2"],{"8ad3":function(a,e,t){},"8cb2":function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a._self._c;return e("div",{staticClass:"officeContent"},[e("div",{staticClass:"officeContent__container"},[e("div",{staticClass:"officeContent__form"},[e("validation-observer",{ref:"userData"},[e("form",{on:{submit:function(e){return e.preventDefault(),a.change()}}},[e("div",{staticClass:"form__inner"},[e("div",{staticClass:"officeContent__left"},[e("div",{staticClass:"officeContent__input"},[e("validation-provider",{attrs:{rules:"required"},scopedSlots:a._u([{key:"default",fn:function({errors:t}){return[e("app-input",{attrs:{title:"Ru"===a.lang?"Имя":"Name",placeholder:a.changeData.first_name},model:{value:a.changeData.first_name,callback:function(e){a.$set(a.changeData,"first_name",e)},expression:"changeData.first_name"}}),e("label",{attrs:{for:"first_name"}},[e("span",{staticStyle:{color:"red"}},[a._v(a._s(t[0]))]),e("br")])]}}])})],1),e("div",{staticClass:"officeContent__input",staticStyle:{display:"flex"}},[e("validation-provider",{staticStyle:{width:"100%"},attrs:{rules:"required|phone_number"},scopedSlots:a._u([{key:"default",fn:function({errors:t}){return[e("app-input",{directives:[{name:"mask",rawName:"v-mask",value:"KZ"===a.country||"RU"===a.country?"+7 (###) ###-##-##":"+375 ## ### ## ##",expression:"\n                      country === 'KZ' || country === 'RU'\n                        ? '+7 (###) ###-##-##'\n                        : '+375 ## ### ## ##'\n                    "}],attrs:{title:"Ru"===a.lang?"Телефон":"Phone",placeholder:a.changeData.username},model:{value:a.changeData.username,callback:function(e){a.$set(a.changeData,"username",e)},expression:"changeData.username"}}),e("label",{attrs:{for:"phone_number"}},[e("span",{staticStyle:{color:"red"}},[a._v(a._s(t[0]))])])]}}])})],1)]),e("div",{staticClass:"officeContent__right"},[e("div",{staticClass:"officeContent__input"},[e("validation-provider",{attrs:{rules:"required"},scopedSlots:a._u([{key:"default",fn:function({errors:t}){return[e("app-input",{attrs:{title:"Ru"===a.lang?"Фамилия":"Surname",placeholder:a.changeData.last_name},model:{value:a.changeData.last_name,callback:function(e){a.$set(a.changeData,"last_name",e)},expression:"changeData.last_name"}}),e("label",{attrs:{for:"last_name"}},[e("span",{staticStyle:{color:"red"}},[a._v(a._s(t[0]))]),e("br")])]}}])})],1),e("div",{staticClass:"officeContent__input",staticStyle:{display:"flex"}},[e("validation-provider",{staticStyle:{width:"100%"},attrs:{rules:"required|email"},scopedSlots:a._u([{key:"default",fn:function({errors:t}){return[e("app-input",{attrs:{title:"Email",placeholder:a.changeData.email},model:{value:a.changeData.email,callback:function(e){a.$set(a.changeData,"email",e)},expression:"changeData.email"}}),e("label",{attrs:{for:"email"}},[e("span",{staticStyle:{color:"red"}},[a._v(a._s("email"===t[0]?"Ru"===a.lang?"Неправильно введен email":"Incorrect email":t[0]))])])]}}])})],1)])]),e("button",[a._v(" "+a._s("Ru"===a.lang?"Сохранить":"Save")+" ")])])])],1)])])},s=[],r=t("2f62"),i=t("7bb1"),l=t("4ec3"),c={data(){return{lang:this.$cookie.get("lang"),changeData:{email:"",first_name:"",last_name:"",username:""},country:localStorage.getItem("country"),inputSwitcher:!1}},computed:{...Object(r["c"])("userModule",["user"])},components:{ValidationObserver:i["a"],ValidationProvider:i["b"],AppInput:()=>t.e("chunk-093fc662").then(t.bind(null,"007f"))},methods:{change(){""===this.changeData.username&&(this.changeData.username=this.user.username),l["a"].changeUserData(this.changeData).then(()=>{this.getUser()}).catch(a=>{alert(a.response.data[0])})},getUser(){l["a"].getUserData().then(a=>{this.changeData.first_name=a.first_name,this.changeData.last_name=a.last_name,this.changeData.email=a.email,this.changeData.username=a.username})}},created(){this.getUser()}},o=c,u=(t("cfb3"),t("2877")),f=Object(u["a"])(o,n,s,!1,null,"2f7f4e83",null);e["default"]=f.exports},cfb3:function(a,e,t){"use strict";t("8ad3")}}]);
//# sourceMappingURL=chunk-2d4c10f2.1d3fb4bd.js.map