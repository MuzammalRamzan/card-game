(this.webpackJsonpcardsgame=this.webpackJsonpcardsgame||[]).push([[0],{249:function(e,t,n){},265:function(e,t){},267:function(e,t){},271:function(e,t){},272:function(e,t){},299:function(e,t){},301:function(e,t){},311:function(e,t){},313:function(e,t){},323:function(e,t){},325:function(e,t){},341:function(e,t){},375:function(e,t){},376:function(e,t){},446:function(e,t){},448:function(e,t){},453:function(e,t){},455:function(e,t){},462:function(e,t){},474:function(e,t){},477:function(e,t){},482:function(e,t){},556:function(e,t,n){},563:function(e,t,n){},564:function(e,t,n){},565:function(e,t,n){},566:function(e,t,n){},567:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n(36),s=n.n(c),i=(n(249),n(12)),o=n.n(i),u=n(24),l=n(10),d=(n(251),n(21)),p="0x069DfF07C00F96b6F8314A7a30cEf35c8AcE1f5F",m="0x948b2e1F5E2Ed40AbABfB77029AF73717356fb47",b=[{inputs:[{internalType:"contract IBEP20",name:"_Token",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"card",type:"uint256"},{indexed:!1,internalType:"uint256",name:"time",type:"uint256"}],name:"BetAmount",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"time",type:"uint256"}],name:"Withdraw",type:"event"},{inputs:[],name:"GetAnimal",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"Get_food",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"},{internalType:"uint256",name:"_percentage",type:"uint256"}],name:"SetPercentage",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"Token",outputs:[{internalType:"contract IBEP20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"User",outputs:[{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"Card_No",type:"uint256"},{internalType:"uint256",name:"random_Card",type:"uint256"},{internalType:"uint256",name:"Food_card",type:"uint256"},{internalType:"uint256",name:"random_food_card",type:"uint256"},{internalType:"bool",name:"status",type:"bool"},{internalType:"bool",name:"special",type:"bool"},{internalType:"uint256",name:"notspecial",type:"uint256"},{internalType:"string",name:"winingStatus",type:"string"},{internalType:"bool",name:"_stop",type:"bool"},{internalType:"uint256",name:"force_AI_card",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"_owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"cardPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_card",type:"uint256"}],name:"chooseCard",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_card",type:"uint256"}],name:"chooseCardFor_AI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"SMSAmount",type:"uint256"}],name:"emergencyWithdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"Amount",type:"uint256"}],name:"emergencyWithdrawBNB",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"register",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"stop",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"userAmount",outputs:[{internalType:"uint256",name:"userfoodAmount",type:"uint256"},{internalType:"uint256",name:"gamefoodAmount",type:"uint256"}],stateMutability:"view",type:"function"}],y=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"Mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_value",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}],f=n(18),j=n(100),x=n.n(j),h=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.web3,e.prev=1,e.next=4,t.eth.getAccounts();case 4:return a=e.sent,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(1),console.log("Error while fetching acounts: ",e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!1,e.prev=1,!window.ethereum){e.next=9;break}return window.web3=new x.a(window.ethereum),e.next=6,window.ethereum.enable();case 6:t=!0,e.next=10;break;case 9:window.web3?(window.web3=new x.a(window.web3.currentProvider),t=!0):(t=!1,console.log("Metamask is not installed, please install it on your browser to connect."));case 10:if(!0!==t){e.next=16;break}return e.next=13,h();case 13:return n=e.sent,a=n[0],e.abrupt("return",a);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),console.log("Error while loding web3",e.t0);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(){return e.apply(this,arguments)}}(),w=(n(556),n(1));function O(){var e=Object(d.f)(),t=Object(r.useState)(!1),n=Object(l.a)(t,2),a=(n[0],n[1]),c=Object(r.useState)(""),s=Object(l.a)(c,2),i=s[0],j=s[1],x=Object(r.useState)(""),h=Object(l.a)(x,2),O=h[0],v=h[1],C=Object(r.useState)(""),S=Object(l.a)(C,2),T=S[0],k=S[1],A=Object(r.useState)(!0),N=Object(l.a)(A,2),M=N[0],_=N[1],F=Object(r.useState)("Start"),I=Object(l.a)(F,2),Y=I[0],G=I[1],B=Object(r.useState)(""),U=Object(l.a)(B,2),P=U[0],E=U[1],H=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,E(t),console.log("get add",P);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var t=Object(u.a)(o.a.mark((function t(){var n,r,c,s,u,l,d,x,h,g,w,C,S,A,N,F,I,Y,B,U;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=window.web3,r=new n.eth.Contract(y,m),t.next=4,r.methods.allowance(P,p).call();case 4:return c=t.sent,t.next=7,n.utils.fromWei(c);case 7:if(s=t.sent,console.log("Allowance= ",s),_(!(s>=500)),!M){t.next=47;break}return t.prev=11,console.log("Called Register"),u=window.web3,l=new u.eth.Contract(b,p),d=new u.eth.Contract(y,m),t.next=18,d.methods.balanceOf(P).call();case 18:return x=t.sent,t.next=21,u.utils.fromWei(x);case 21:if(h=t.sent,console.log("You Have ArbiCoins =",h),console.log("Account= ",P),G("Wait Processing..."),!(h>500)){t.next=38;break}if(!(s<500)){t.next=31;break}return t.next=29,d.methods.approve(p,u.utils.toWei("500")).send({from:P});case 29:t.next=36;break;case 31:return t.next=33,l.methods.register().send({from:P});case 33:G("Get Aninaml Card"),_(!M),f.b.success("Transaction Successfull");case 36:t.next=39;break;case 38:h<500?f.b.error("Out of Balance, Please Recharge"):f.b.error("Please Approve 500 ArbiCoins First");case 39:t.next=45;break;case 41:t.prev=41,t.t0=t.catch(11),G("Start"),f.b.error("Oops! You Cancelled Transaction ");case 45:t.next=92;break;case 47:if(M){t.next=92;break}return G("Get Animal card"),g=window.web3,w=new g.eth.Contract(b,p),t.next=53,w.methods.User(P).call();case 53:if(C=t.sent,S=C.status,console.log("Status = ",S),0!=S){t.next=91;break}return t.prev=57,a(!0),console.log("User's Card",O),console.log("AI's Card",i),console.log("Called Get Animal"),A=window.web3,N=new A.eth.Contract(b,p),t.next=66,N.methods.GetAnimal().send({from:P});case 66:return _(!M),t.next=69,N.methods.User(P).call();case 69:return F=t.sent,I=F.amount,t.next=73,A.utils.fromWei(I);case 73:Y=t.sent,B=F.Card_No,U=F.random_Card,k(Y),v(B),j(U),F.Food_card,console.log(I),console.log("User's Card",T),console.log("AI's Card",U),e.push("/gamePlay/"+B+"/"+U),t.next=89;break;case 86:t.prev=86,t.t1=t.catch(57),f.b.error("Oops! You Cancelled Transaction ");case 89:t.next=92;break;case 91:f.b.error("Oops! You Have Already Puchased Animal Card");case 92:case"end":return t.stop()}}),t,null,[[11,41],[57,86]])})));return function(){return t.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(P){e.next=14;break}return e.next=3,g();case 3:return t=e.sent,E(t),n=window.web3,a=new n.eth.Contract(b,p),console.log("acccount =",P),e.next=10,a.methods.User(t).call();case 10:r=e.sent,c=r.amount,console.log("Amount ==",T),c>=500&&(console.log(T),G("Get Aninaml Card"),_(!M));case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){setInterval((function(){H()}),1e3),D(),H()}),[]),Object(w.jsxs)("div",{className:"App-containor",children:[Object(w.jsxs)("div",{className:"Containor",children:[Object(w.jsx)("div",{className:"text-Containor",children:Object(w.jsxs)("div",{className:"text-Data",children:[Object(w.jsx)("p",{className:"welcome-txt",children:"Welcome"}),Object(w.jsx)("div",{children:Object(w.jsx)("p",{className:"to-txt",children:"T0"})}),Object(w.jsx)("p",{className:"main-txt",children:"Feed My Pet"})]})}),Object(w.jsx)("div",{className:"img-containor1",children:Object(w.jsx)("img",{className:"myimg1",alt:"Game Card",src:"CardBack03.jpg"})}),Object(w.jsx)("div",{className:"btn-containor",children:Object(w.jsx)("button",{id:"cola",className:"btn btn-lg btan",onClick:function(){return W()},children:Y})})]}),Object(w.jsx)("div",{})]})}n(562),n(563);var v=n(136),C=n(40),S=n(574),T=n(572),k=n(573),A=n.p+"static/media/bannana.afd2b0ea.jpg",N=n.p+"static/media/bone.74fb1828.jpg",M=n.p+"static/media/carrot.fa949fb7.jpg",_=n.p+"static/media/Corn.0de37afd.jpg",F=n.p+"static/media/Dog.c003c10c.jpg",I=n.p+"static/media/Grass.c851e2db.jpg",Y=n.p+"static/media/Monkey.2d835d3f.jpg",G=n.p+"static/media/Mouse.c61f5cda.jpg",B=n.p+"static/media/rabbit.e680c145.jpg",U=n.p+"static/media/Tiger.12231bfb.jpg",P=n.p+"static/media/Wagyu.c87add04.jpg",E=n.p+"static/media/Bull.1a3f8146.jpg",H=[{id:"1",imgSrc:A},{id:"2",imgSrc:_},{id:"3",imgSrc:M},{id:"4",imgSrc:I},{id:"5",imgSrc:P},{id:"6",imgSrc:N},{id:"7",imgSrc:n.p+"static/media/Apple.d5b787f2.jpg"},{id:"8",imgSrc:n.p+"static/media/Berry.b250ea3d.jpg"},{id:"9",imgSrc:n.p+"static/media/Broccoli.3d783a42.jpg"},{id:"10",imgSrc:n.p+"static/media/Bun.2f5010d0.jpg"},{id:"11",imgSrc:n.p+"static/media/cheese.b2cc372a.jpg"},{id:"12",imgSrc:n.p+"static/media/Cucumber.86a70560.jpg"},{id:"13",imgSrc:n.p+"static/media/durian.fef6a55a.jpg"},{id:"14",imgSrc:n.p+"static/media/ham.49c81a10.jpg"},{id:"15",imgSrc:n.p+"static/media/honey.3fc4a08f.jpg"},{id:"16",imgSrc:n.p+"static/media/mushroom.44ee933a.jpg"},{id:"17",imgSrc:n.p+"static/media/onion.88d6c2cc.jpg"},{id:"18",imgSrc:n.p+"static/media/pumkin.a73138ab.jpg"},{id:"19",imgSrc:n.p+"static/media/tomato.c156a226.jpg"}],W=[{id:"0",imgSrc:Y},{id:"1",imgSrc:G},{id:"2",imgSrc:B},{id:"3",imgSrc:E},{id:"4",imgSrc:U},{id:"5",imgSrc:F}];n(564);function D(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),s=Object(l.a)(c,2),i=s[0],m=s[1],y=Object(r.useState)(""),j=Object(l.a)(y,2),x=j[0],h=j[1],O=Object(r.useState)(!1),A=Object(l.a)(O,2),N=(A[0],A[1]),M=Object(r.useState)(0),_=Object(l.a)(M,2),F=_[0],I=_[1],Y=Object(r.useState)(0),G=Object(l.a)(Y,2),B=G[0],U=G[1],P=Object(r.useState)(0),E=Object(l.a)(P,2),D=E[0],z=E[1],R=Object(r.useState)(),J=Object(l.a)(R,2),L=J[0],V=J[1],q=Object(r.useState)(!1),K=Object(l.a)(q,2),Q=K[0],X=K[1],Z=Object(r.useState)(!1),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ne=Object(r.useState)(0),ae=Object(l.a)(ne,2),re=ae[0],ce=ae[1],se=Object(r.useState)(""),ie=Object(l.a)(se,2),oe=(ie[0],ie[1]),ue=Object(d.g)(),le=ue.gcard,de=ue.ucard,pe=W.filter((function(e){return e.id==de})),me=W.filter((function(e){return e.id==le})),be=H.filter((function(e){return e.id==L})),ye=H.filter((function(e){return e.id==D})),fe=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,g();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),je=function(e){h(e),Oe(),X(!Q),console.log("You Clicked id",e),console.log("run ")},xe=function(e){h(e),ve(),te(!ee),console.log("You Clicked id",e),console.log("run handleCloseSpc ",e)},he=function(){var e=Object(u.a)(o.a.mark((function e(){var t,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,g();case 3:return e.t1=e.sent,(0,e.t0)(e.t1),t=window.web3,r=new t.eth.Contract(b,p),e.next=9,r.methods.User(n).call();case 9:c=e.sent,1==c.force_AI_card?X(!0):f.b.error("Sorry You dont Have any force Ai card");case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ge=function(){var e=Object(u.a)(o.a.mark((function e(){var t,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,g();case 3:return e.t1=e.sent,(0,e.t0)(e.t1),t=window.web3,r=new t.eth.Contract(b,p),e.next=9,r.methods.User(n).call();case 9:c=e.sent,1==c.special?te(!0):f.b.error("Sorry You dont Have any Special card");case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),we=function(){var e=Object(u.a)(o.a.mark((function e(){var t,a,r,c,s,i,u,l,d,y,j,x,h,g,w,O,v,C,S,T;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.web3,a=new t.eth.Contract(b,p),e.next=4,a.methods.userAmount(n).call();case 4:return r=e.sent,e.next=7,a.methods.User(n).call();case 7:if(c=e.sent,s=c.force_AI_card,i=c.status,u=c.special,l=c.winingStatus,d=c.notspecial,r.userfoodAmount,r.gamefoodAmount,oe(l),m(!0),e.prev=17,0!=s){e.next=64;break}if(1!=i){e.next=61;break}if(!(0==u&&d<3)){e.next=58;break}return console.log("Called Get Food Card"),y=window.web3,j=new y.eth.Contract(b,p),e.next=26,j.methods.Get_food().send({from:n});case 26:return console.log("here"),e.next=29,j.methods.User(n).call();case 29:return x=e.sent,h=x.Food_card,g=x.random_food_card,w=x.force_AI_card,O=x.notspecial,v=x.special,e.next=37,j.methods.userAmount(n).call();case 37:C=e.sent,S=C.userfoodAmount,T=C.gamefoodAmount,T=parseInt(T),S=parseInt(S),I(S),U(T),z(g),V(h),ce(O),te(v),console.log(Q),1==w&&(console.log("ENterd here"),X(!0)),1==ee&&f.b.success("Hurrah! You Have Got a Special Card"),console.log("Got A Force ai card = ",Q),console.log("Games Socre:",B),console.log("User's Score: ",F),console.log("User's fcard: ",L),console.log("Ai fcard: ",D),e.next=59;break;case 58:f.b.success("Please use Special Card");case 59:e.next=62;break;case 61:f.b.error("Game Over Please Restart Game Again");case 62:e.next=65;break;case 64:f.b.success("You Have A Special Card Use it First ");case 65:e.next=70;break;case 67:e.prev=67,e.t0=e.catch(17),f.b.error("Oops! You Cancelled Transaction ");case 70:case"end":return e.stop()}}),e,null,[[17,67]])})));return function(){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(u.a)(o.a.mark((function e(){var t,a,r,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.web3,a=new t.eth.Contract(b,p),e.next=4,a.methods.User(n).call();case 4:if(r=e.sent,1!=r.force_AI_card){e.next=21;break}return e.prev=7,console.log("Called Choose Card for AI"),c=window.web3,s=new c.eth.Contract(b,p),e.next=13,s.methods.chooseCardFor_AI(x).send({from:n});case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(7),console.log("error comes here"),f.b.error("Oops! You Cancelled Transaction ");case 19:e.next=22;break;case 21:f.b.error("Sorry You dont have any force ai card");case 22:case"end":return e.stop()}}),e,null,[[7,15]])})));return function(){return e.apply(this,arguments)}}(),ve=function(){var e=Object(u.a)(o.a.mark((function e(){var t,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.web3,a=new t.eth.Contract(b,p),e.next=4,a.methods.User(n).call();case 4:if(r=e.sent,3!=r.notspecial){e.next=11;break}return e.next=9,a.methods.chooseCard(x).send({from:n});case 9:e.next=12;break;case 11:f.b.error("Sorry You Dont Have Any Special Card");case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ce=function(){var e=Object(u.a)(o.a.mark((function e(){var t,a,r,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.web3,a=new t.eth.Contract(b,p),e.next=4,a.methods.User(n).call();case 4:if(r=e.sent,1!=r.status){e.next=20;break}return e.prev=7,console.log("Called Stop Function"),c=window.web3,s=new c.eth.Contract(b,p),e.next=13,s.methods.stop().send({from:n});case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(7),f.b.error("Oops! You Cancelled Transaction ");case 18:e.next=21;break;case 20:f.b.error("Game Already Stopped Please Return to Home Page");case 21:case"end":return e.stop()}}),e,null,[[7,15]])})));return function(){return e.apply(this,arguments)}}(),Se=function(){var e=Object(u.a)(o.a.mark((function e(){var t,a,r,c,s,i,u,l,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=21;break}return e.next=3,g();case 3:return t=e.sent,a=window.web3,r=new a.eth.Contract(b,p),e.next=8,r.methods.User(t).call();case 8:return c=e.sent,s=c.winingStatus,e.next=12,r.methods.userAmount(t).call();case 12:i=e.sent,u=i.userfoodAmount,l=c.special,console.log("bool1 = ",l),d=i.gamefoodAmount,te(l),U(d),I(u),"you loss"==s?f.b.warn("Alas! You lost bet."):"you win"==s&&f.b.success("Huraah! You Won the bet ");case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){setInterval((function(){fe()}),2e3),Se()}),[]),Object(w.jsxs)("div",{className:"container ",children:[Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("div",{className:"col-lg-5",children:Object(w.jsxs)("div",{className:"row",children:[Object(w.jsxs)("div",{className:"col-md-5 col-sm-3 col-3",children:[Object(w.jsx)("p",{className:"btn-txt1 text-white text-center",children:"You "}),pe.map((function(e){return Object(w.jsx)("div",{children:Object(w.jsx)("img",{src:e.imgSrc,alt:"user Animal card",width:"100%",height:"70%"})})}))]}),Object(w.jsxs)("div",{className:"col-md-6 col-sm-6 col-6",children:[Object(w.jsxs)("p",{className:"btn-txt1 text-white Score",children:[" Your Score :",F," "]}),Object(w.jsxs)("p",{className:"btn-txt1 text-white",children:[" Got Special food of another animal: ",re]}),Object(w.jsxs)("div",{children:[Object(w.jsx)(S.a,{variant:"primary",className:"mt-3",onClick:ge,children:"Use Special Card"}),Object(w.jsx)(S.a,{variant:"primary",className:"mt-3",onClick:he,children:"Force Ai Card"})]}),Object(w.jsxs)(C.a,{show:Q,onHide:je,size:"lg","aria-labelledby":"example-modal-sizes-title-lg",children:[Object(w.jsx)(C.a.Header,{closeButton:!0,style:{backgroundColor:"#6cf768",color:"white"},children:Object(w.jsx)(C.a.Title,{children:"Special Card"})}),Object(w.jsxs)(C.a.Body,{children:[Object(w.jsx)(T.a,{style:{margin:"20px 0 0 0"},children:H.slice(6,13).map((function(e){return Object(w.jsx)(k.a,{children:Object(w.jsx)("img",{src:e.imgSrc,alt:" Food Cards",width:"120%",height:"120%",onClick:function(){return je(e.id)}})})}))}),Object(w.jsx)(T.a,{style:{margin:"40px 0 0 0"},children:H.slice(13,19).map((function(e){return Object(w.jsx)(k.a,{children:Object(w.jsx)("img",{src:e.imgSrc,alt:" Food Cards",width:"110%",height:"110%",onClick:function(){return je(e.id)}})})}))})]}),Object(w.jsx)(C.a.Footer,{})]}),Object(w.jsxs)(C.a,{show:ee,onHide:function(e){N(!1),h(e),console.log("Y0u Clicked id froaodasdasd",e)},size:"lg","aria-labelledby":"example-modal-sizes-title-lg",children:[Object(w.jsx)(C.a.Header,{closeButton:!0,style:{backgroundColor:"#6cf768",color:"white"},children:Object(w.jsx)(C.a.Title,{children:"Special Card"})}),Object(w.jsxs)(C.a.Body,{children:[Object(w.jsx)(T.a,{style:{margin:"20px 0 0 0"},children:H.slice(6,13).map((function(e){return Object(w.jsx)(k.a,{children:Object(w.jsx)("img",{src:e.imgSrc,alt:" Food Cards",width:"120%",height:"120%",onClick:function(){return xe(e.id)}})})}))}),Object(w.jsx)(T.a,{style:{margin:"40px 0 0 0"},children:H.slice(13,19).map((function(e){return Object(w.jsx)(k.a,{children:Object(w.jsx)("img",{src:e.imgSrc,alt:" Food Cards",width:"110%",height:"110%",onClick:function(){return xe(e.id)}})})}))})]}),Object(w.jsx)(C.a.Footer,{})]})]})]})}),Object(w.jsx)("div",{className:"col-lg-5",children:Object(w.jsxs)("div",{className:"row",children:[Object(w.jsxs)("div",{className:"col-md-5 col-sm-3 col-3",children:[Object(w.jsx)("p",{className:"btn-txt1 text-white text-center",children:"AI "}),me.map((function(e){return Object(w.jsx)("div",{children:Object(w.jsx)("img",{src:e.imgSrc,alt:"Ai Animal Card",width:"100%",height:"70%"})})}))]}),Object(w.jsxs)("div",{className:"col-md-6 col-sm-6 col-6",children:[Object(w.jsxs)("p",{className:"btn-txt1 text-white Score",children:[" AI Score : ",B," "]}),Object(w.jsx)("p",{className:"btn-txt1 text-white",children:" Got Special food"})]})]})}),Object(w.jsxs)("div",{className:"col-lg-2 col-sm-6 col-6",children:[Object(w.jsx)("button",{className:"btn btn-success btn-block btn-lg buton",onClick:function(){return we()},children:"Get Food Card "}),Object(w.jsx)(S.a,{className:"btn btn-success btn-lg btn-block",onClick:function(){return Ce()},style:{display:"flex",flexDirection:"row",alignSelf:"flex-end",marginTop:15},children:"Stop"})]})]}),i?Object(w.jsxs)("div",{className:"row  mt-2 ",children:[Object(w.jsx)("div",{className:"col-md-3",children:Object(w.jsxs)("div",{className:"nm",children:[" You ",Object(w.jsx)("span",{children:Object(w.jsx)(v.b,{})})," "]})}),Object(w.jsx)("div",{className:"col-md-3",children:be.map((function(e){return Object(w.jsx)("div",{children:Object(w.jsx)("img",{src:e.imgSrc,alt:"User Food Card",width:"100%",height:"70%"})})}))}),Object(w.jsx)("div",{className:"col-md-3",children:ye.map((function(e){return Object(w.jsx)("div",{children:Object(w.jsx)("img",{src:e.imgSrc,alt:"Ai Food Card",width:"100%",height:"70%"})})}))}),Object(w.jsx)("div",{className:"col-md-1",children:Object(w.jsxs)("div",{className:"nm",children:[" ",Object(w.jsx)("span",{children:Object(w.jsx)(v.a,{})}),"  AI"]})})]}):Object(w.jsx)("div",{})]})}n(565);function z(){return Object(w.jsx)(D,{})}n(566);function R(){var e=Object(r.useState)("Crypto Connect"),t=Object(l.a)(e,2),n=t[0],a=t[1],c=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,n=t.substring(0,4)+"..."+t.substring(t.length-4),a(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){c()}),[]),Object(w.jsx)("div",{className:"appContainor",children:Object(w.jsx)("div",{className:"btn-conwal",children:Object(w.jsx)("p",{className:"btn-txt",children:n})})})}function J(){return Object(r.useEffect)((function(){})),Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(f.a,{}),Object(w.jsx)(R,{}),Object(w.jsxs)(d.c,{children:[Object(w.jsx)(d.a,{exact:!0,path:"/",component:O}),Object(w.jsx)(d.a,{exact:!0,path:"/gamePlay/:gcard/:ucard",component:z})]})]})}var L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,575)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},V=n(83);s.a.render(Object(w.jsx)(V.a,{children:Object(w.jsx)(J,{})}),document.getElementById("root")),L()}},[[567,1,2]]]);
//# sourceMappingURL=main.d5483097.chunk.js.map