(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4df0bd42"],{"18e3":function(s,t,e){},7624:function(s,t,e){"use strict";e.r(t);e("14d9");var a=function(){var s=this,t=s._self._c;return t("div",[s.modal?t("div",[t("div",{staticClass:"edit-address",on:{click:function(t){return s.$router.push("/login")}}}),t("div",{staticClass:"edit-address__content"},[t("button",{staticClass:"edit-address__close",on:{click:function(t){return s.$router.push("/login")}}},[t("img",{attrs:{src:e("d628"),alt:""}})]),t("h3",{staticClass:"edit-address__title",staticStyle:{"text-align":"center"}},[s._v(" "+s._s("Ru"===s.$cookie.get("lang")?"Ваш пароль изменен":"Your password has been changed")+" ")])])]):s._e(),t("div",{staticClass:"container"},[t("div",{staticClass:"recovery"},[t("div",{staticClass:"registration-title"},[s._v(" "+s._s("Ru"===s.lang?"Восстановление пароля":"Password Recovery")+" ")]),1===s.tab?t("div",{staticClass:"smsForm"},[t("app-input",{directives:[{name:"mask",rawName:"v-mask",value:"KZ"===s.countrys||"RU"===s.countrys?"+7 (###) ###-##-##":"+375 ## ### ## ##",expression:"\n            countrys === 'KZ' || countrys === 'RU'\n              ? '+7 (###) ###-##-##'\n              : '+375 ## ### ## ##'\n          "}],attrs:{title:"Ru"===s.lang?"Телефон":"Phone",placeholder:"KZ"===s.countrys||"RU"===s.countrys?"+7 (###) ###-##-##":"+375 ## ### ## ##"},model:{value:s.username,callback:function(t){s.username=t},expression:"username"}}),t("button",{staticClass:"registration-btn mt-20",on:{click:s.handleSendSMS}},[s._v(" "+s._s("Ru"===s.lang?"Отправить код":"Send SMS")+" ")])],1):2===s.tab?t("div",{staticClass:"smsForm"},[t("p",[s._v(" "+s._s("Ru"===s.lang?"На ваш номер телефона придет код SMS":"An SMS code will be sent to your phone number")+" ")]),t("p",[s._v(" "+s._s("Ru"===s.lang?"Вы не получили код?":"You didn't receive a code?")+" ")]),s.timer>0?t("button",{staticClass:"smsForm-btn"},[s._v(" "+s._s("Ru"===s.lang?"Отправить повторно через":"Resend via")+" "+s._s(s.timer)+" ")]):s._e(),0===s.timer?t("button",{staticClass:"smsForm-btn",on:{click:s.handleSendSMS}},[s._v(" "+s._s("Ru"===s.lang?"Отправить повторно":"Resend")+" ")]):s._e(),t("div",{staticClass:"registration-form_one"},[t("app-input",{attrs:{type:"number",title:"Ru"===s.lang?"Код SMS":"SMS code"},model:{value:s.smsInput,callback:function(t){s.smsInput=t},expression:"smsInput"}}),s.verifyError?t("span",{staticStyle:{color:"red",display:"block","margin-top":"10px","font-size":"14px","font-weight":"600"}},[s._v(" "+s._s(s.verifyError)+" ")]):s._e(),t("button",{staticClass:"registration-btn mt-10",on:{click:s.verifySms}},[s._v(" "+s._s("Ru"===s.lang?"Подтвердить":"Verify")+" ")])],1)]):t("div",{staticClass:"smsForm"},[t("app-input",{attrs:{type:"password",title:"Ru"===s.lang?"Пароль":"Password"},model:{value:s.password,callback:function(t){s.password=t},expression:"password"}}),t("app-input",{staticClass:"mt-10",attrs:{type:"password",title:"Ru"===s.lang?"Повторите Пароль":"Repeat Password"},model:{value:s.password2,callback:function(t){s.password2=t},expression:"password2"}}),t("button",{staticClass:"registration-btn mt-20",on:{click:s.resetPass}},[s._v(" "+s._s("Ru"===s.lang?"Сохранить пароль":"Save password")+" ")])],1)])])])},r=[],n=e("4ec3"),i={name:"Recovery",components:{AppInput:()=>e.e("chunk-093fc662").then(e.bind(null,"007f"))},data(){return{lang:this.$cookie.get("lang"),password:"",password2:"",timer:0,tab:1,smsInput:"",username:"",passwordError:!1,modal:!1,verifyError:"",countrys:localStorage.getItem("country")}},watch:{timer:{handler(){this.timer>0&&setTimeout(()=>{this.timer--},1e3)}}},methods:{handleSendSMS(){n["a"].sendSms({username:this.username}).then(()=>{this.tab=2,this.timer=60})},verifySms(){n["a"].verifySms({username:this.username,code:this.smsInput}).then(()=>{this.tab=3,this.smsInput="",this.password="",this.password2="",this.passwordError=!1}).catch(s=>{this.verifyError=s.response.data.error})},resetPass(){this.password===this.password2?n["a"].resetPass({username:this.username,password:this.password}).then(()=>{this.passwordError=!1,this.modal=!0}):this.passwordError=!0}}},o=i,c=(e("d5bf"),e("2877")),d=Object(c["a"])(o,a,r,!1,null,"5bd461a3",null);t["default"]=d.exports},d5bf:function(s,t,e){"use strict";e("18e3")},d628:function(s,t,e){s.exports=e.p+"img/close-modal.852165fd.svg"}}]);
//# sourceMappingURL=chunk-4df0bd42.873f0bd2.js.map