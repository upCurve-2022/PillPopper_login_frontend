(this["webpackJsonpreact-redux-jwt-auth"]=this["webpackJsonpreact-redux-jwt-auth"]||[]).push([[0],{172:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(25),o=a.n(s),c=a(16),l=a(19),i=a(60),u=a(61),m=a(15),d=JSON.parse(localStorage.getItem("user")),h=d?{isLoggedIn:!0,user:d}:{isLoggedIn:!1,user:null},g={},p=Object(l.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"REGISTER_SUCCESS":case"REGISTER_FAIL":return Object(m.a)(Object(m.a)({},e),{},{isLoggedIn:!1});case"LOGIN_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{isLoggedIn:!0,user:n.user});case"LOGIN_FAIL":case"LOGOUT":return Object(m.a)(Object(m.a)({},e),{},{isLoggedIn:!1,user:null});default:return e}},message:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SET_MESSAGE":return{message:n};case"CLEAR_MESSAGE":return{message:""};default:return e}}}),v=[u.a],f=Object(l.createStore)(p,Object(i.composeWithDevTools)(l.applyMiddleware.apply(void 0,v))),E=(a(72),a(4)),b=a(5),O=a(11),S=a(7),j=a(6),y=a(3),N=a(17),w=(a(73),a(74),a(29)),k=a(27),C=a.n(k),L=a(21),I=a.n(L),U=a(28),A=a.n(U),T=a(20),P=a.n(T),x="http://localhost:8080/api/auth/",B=new(function(){function e(){Object(E.a)(this,e)}return Object(b.a)(e,[{key:"login",value:function(e,t){return P.a.post(x+"signin",{username:e,password:t}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e,t,a){return P.a.post(x+"signup",{username:e,email:t,password:a})}}]),e}()),_=function(e){if(!e)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This field is required!")},G=function(e){Object(S.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).handleLogin=n.handleLogin.bind(Object(O.a)(n)),n.onChangeUsername=n.onChangeUsername.bind(Object(O.a)(n)),n.onChangePassword=n.onChangePassword.bind(Object(O.a)(n)),n.state={username:"",password:"",loading:!1},n}return Object(b.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleLogin",value:function(e){var t=this;e.preventDefault(),this.setState({loading:!0}),this.form.validateAll();var a,n,r=this.props,s=r.dispatch,o=r.history;0===this.checkBtn.context._errors.length?s((a=this.state.username,n=this.state.password,function(e){return B.login(a,n).then((function(t){return e({type:"LOGIN_SUCCESS",payload:{user:t}}),Promise.resolve()}),(function(t){var a=t.response&&t.response.data&&t.response.data.message||t.message||t.toString();return e({type:"LOGIN_FAIL"}),e({type:"SET_MESSAGE",payload:a}),Promise.reject()}))})).then((function(){o.push("/profile"),window.location.reload()})).catch((function(){t.setState({loading:!1})})):this.setState({loading:!1})}},{key:"render",value:function(){var e=this,t=this.props,a=t.isLoggedIn,n=t.message;return a?r.a.createElement(y.a,{to:"/profile"}):r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card card-container"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(w.a,{style:{color:"red",fontSize:"120px"}})),r.a.createElement(C.a,{onSubmit:this.handleLogin,ref:function(t){e.form=t}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement(I.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[_]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(I.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[_]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-danger btn-block",disabled:this.state.loading},this.state.loading&&r.a.createElement("span",{className:"spinner-border spinner-border-sm"}),r.a.createElement("span",null,"Login"))),n&&r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"alert alert-danger",role:"alert"},n)),r.a.createElement(A.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}}))))}}]),a}(n.Component);var R=Object(c.b)((function(e){return{isLoggedIn:e.auth.isLoggedIn,message:e.message.message}}))(G),M=a(62),F=function(e){if(!e)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This field is required!")},D=function(e){if(!Object(M.isEmail)(e))return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This is not a valid email.")},J=function(e){if(e.length<3||e.length>20)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"The username must be between 3 and 20 characters.")},z=function(e){if(e.length<6||e.length>40)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"The password must be of atleats 8 characters.",r.a.createElement("br",null),"It must contain atleast 1 Uppercase character(A-Z)",r.a.createElement("br",null),"It must contain atleast 1 Lowercase character(a-z)",r.a.createElement("br",null),"It must contain atleast 1 number",r.a.createElement("br",null),"It must contain atleast 1 Special character")},W=function(e){Object(S.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).handleRegister=n.handleRegister.bind(Object(O.a)(n)),n.onChangeUsername=n.onChangeUsername.bind(Object(O.a)(n)),n.onChangeEmail=n.onChangeEmail.bind(Object(O.a)(n)),n.onChangePassword=n.onChangePassword.bind(Object(O.a)(n)),n.state={username:"",email:"",password:"",successful:!1},n}return Object(b.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleRegister",value:function(e){var t,a,n,r=this;e.preventDefault(),this.setState({successful:!1}),this.form.validateAll(),0===this.checkBtn.context._errors.length&&this.props.dispatch((t=this.state.username,a=this.state.email,n=this.state.password,function(e){return B.register(t,a,n).then((function(t){return e({type:"REGISTER_SUCCESS"}),e({type:"SET_MESSAGE",payload:t.data.message}),Promise.resolve()}),(function(t){var a=t.response&&t.response.data&&t.response.data.message||t.message||t.toString();return e({type:"REGISTER_FAIL"}),e({type:"SET_MESSAGE",payload:a}),Promise.reject()}))})).then((function(){r.setState({successful:!0})})).catch((function(){r.setState({successful:!1})}))}},{key:"render",value:function(){var e=this,t=this.props.message;return r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card card-container"},r.a.createElement("div",{class:"d-flex justify-content-center"},r.a.createElement(w.a,{style:{color:"red",fontSize:"120px"}})),r.a.createElement(C.a,{onSubmit:this.handleRegister,ref:function(t){e.form=t}},!this.state.successful&&r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement(I.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[F,J]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement(I.a,{type:"text",className:"form-control",name:"email",value:this.state.email,onChange:this.onChangeEmail,validations:[F,D]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(I.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[F,z]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-danger btn-block"},"Sign Up"))),t&&r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:this.state.successful?"alert alert-success":"alert alert-danger",role:"alert"},t)),r.a.createElement(A.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}}))))}}]),a}(n.Component);var q=Object(c.b)((function(e){return{message:e.message.message}}))(W),H=function(e){Object(S.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).state={content:""},n}return Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"})}}]),a}(n.Component),Z=function(e){Object(S.a)(a,e);var t=Object(j.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.user;return e?r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,r.a.createElement("strong",null,e.username)," Profile"))):r.a.createElement(y.a,{to:"/login"})}}]),a}(n.Component);var $=Object(c.b)((function(e){return{user:e.auth.user}}))(Z);function K(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{Authorization:"Bearer "+e.accessToken}:{}}var Q=new(function(){function e(){Object(E.a)(this,e)}return Object(b.a)(e,[{key:"getPublicContent",value:function(){return P.a.get("http://localhost:8080/api/test/all")}},{key:"getUserBoard",value:function(){return P.a.get("http://localhost:8080/api/test/user",{headers:K()})}},{key:"getModeratorBoard",value:function(){return P.a.get("http://localhost:8080/api/test/mod",{headers:K()})}},{key:"getAdminBoard",value:function(){return P.a.get("http://localhost:8080/api/test/admin",{headers:K()})}}]),e}()),V={on:function(e,t){document.addEventListener(e,(function(e){return t(e.detail)}))},dispatch:function(e,t){document.dispatchEvent(new CustomEvent(e,{detail:t}))},remove:function(e,t){document.removeEventListener(e,t)}},X=function(e){Object(S.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).state={content:""},n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;Q.getUserBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}),t.response&&401===t.response.status&&V.dispatch("logout")}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,this.state.content)))}}]),a}(n.Component),Y=function(e){Object(S.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).state={content:""},n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;Q.getAdminBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}),t.response&&401===t.response.status&&V.dispatch("logout")}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,this.state.content)))}}]),a}(n.Component),ee=a(9),te=Object(ee.a)(),ae=function(e){Object(S.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).logOut=n.logOut.bind(Object(O.a)(n)),n.state={showAdminBoard:!1,currentUser:void 0},te.listen((function(t){e.dispatch({type:"CLEAR_MESSAGE"})})),n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.user;t&&this.setState({currentUser:t,showAdminBoard:t.roles.includes("ROLE_ADMIN")}),V.on("logout",(function(){e.logOut()}))}},{key:"componentWillUnmount",value:function(){V.remove("logout")}},{key:"logOut",value:function(){this.props.dispatch((function(e){B.logout(),e({type:"LOGOUT"})})),this.setState({showAdminBoard:!1,currentUser:void 0})}},{key:"render",value:function(){var e=this.state,t=e.currentUser,a=e.showAdminBoard;return r.a.createElement(y.c,{history:te},r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-danger"},r.a.createElement(N.a,{to:"/",className:"navbar-brand"},"Pill Popper"),r.a.createElement("div",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.a,{to:"/home",className:"nav-link"},"Home")),a&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.a,{to:"/admin",className:"nav-link"},"Admin Board")),t&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.a,{to:"/user",className:"nav-link"},"User"))),t?r.a.createElement("div",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.a,{to:"/profile",className:"nav-link"},t.username)),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"/login",className:"nav-link",onClick:this.logOut},"LogOut"))):r.a.createElement("div",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.a,{to:"/login",className:"nav-link"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.a,{to:"/register",className:"nav-link"},"Sign Up")))),r.a.createElement("div",{className:"container mt-3"},r.a.createElement(y.d,null,r.a.createElement(y.b,{exact:!0,path:["/","/home"],component:H}),r.a.createElement(y.b,{exact:!0,path:"/login",component:R}),r.a.createElement(y.b,{exact:!0,path:"/register",component:q}),r.a.createElement(y.b,{exact:!0,path:"/profile",component:$}),r.a.createElement(y.b,{path:"/user",component:X}),r.a.createElement(y.b,{path:"/admin",component:Y})))))}}]),a}(n.Component);var ne=Object(c.b)((function(e){return{user:e.auth.user}}))(ae);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(c.a,{store:f},r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t,a){e.exports=a(172)},72:function(e,t,a){},74:function(e,t,a){}},[[63,1,2]]]);
//# sourceMappingURL=main.05ed6035.chunk.js.map