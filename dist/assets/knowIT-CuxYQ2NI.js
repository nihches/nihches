import{_ as v,c as n,w as u,v as m,a as s,F as r,r as c,t as l,b as h,u as f,d as S,e as _,f as p,o as i,R as w}from"./index-DlpTB4Xn.js";const k="/nihches/assets/cc-CWT76JI2.jpg",y={class:"knowland"},g={class:"sideNav",id:"isMeni"},D=["onClick"],C={class:"Container"},b={class:"topStat"},B={class:"ccNum"},I=["src"],N={class:"info",id:"info"},M={key:0,class:"ssitt"},F={class:"sitemo"},O={class:"sname"},q=["onClick"],U={key:1,class:"ssitt"},J={class:"sitemo"},T={class:"sname"},$={key:0},P={class:"sopenbtn"},V=["onClick"],E={key:1},H={class:"sopenbtn"},j=["onClick"],G={data(){return{sUser:!0,sDS:!1,sMeni:!1,character:"Meni",user:"Nihche",invSun:JSON.parse(localStorage.getItem("invSun"))||[{id:0,name:"bds",title:"Brown Dwarf",qnt:0,cost:10,value:10,text:"10H"},{id:1,name:"ys",title:"Yellow Star",qnt:0,cost:100,value:110,text:"100H+1BD"},{id:2,name:"bg",title:"Blue Giant",qnt:1,cost:1e3,value:1100,text:"1kH+1YS"},{id:3,name:"bh",title:"Black hole",qnt:0,cost:10,value:1e4,text:"10BG"},{id:4,name:"cc",title:"Celestial Coin",qnt:0,cost:1,value:4796,text:""}],fragments:[{id:0,name:"User"},{id:1,name:"Dstone"}],dStory:JSON.parse(localStorage.getItem("dStory"))||[{id:0,name:"DStone00",file:".pdf",own:!1},{id:1,name:"DStone01",file:".pdf",own:!1},{id:2,name:"DStone02",file:".pdf",own:!1},{id:3,name:"DStone03",file:".pdf",own:!1},{id:4,name:"DStone04",file:".pdf",own:!1},{id:5,name:"DStone05",file:".pdf",own:!1},{id:6,name:"DStone06",file:".pdf",own:!1}],invStory:JSON.parse(localStorage.getItem("invStory"))||[]}},methods:{showMeni:function(){this.sMeni===!0?(this.sMeni=!1,this.character="Meni",document.getElementById("info").style.left=0):this.sMeni===!1&&(this.sMeni=!0,this.character="Close",document.getElementById("info").style.left="30vw")},switchFragment:function(a){switch(a){case"User":this.sDS=!1,this.sUser=!0;break;case"Dstone":this.sDS=!0,this.sUser=!1;break}},saveTime:function(){localStorage.setItem("invSun",JSON.stringify(this.invSun)),localStorage.setItem("dStory",JSON.stringify(this.dStory)),localStorage.setItem("invStory",JSON.stringify(this.invStory))},openPDF:function(a,e){window.open("/nihches/"+a+e,"_blank")},buyPDF:function(a,e,o){this.dStory[a].own!==!0&&this.invSun[4].qnt>=1&&(this.invSun[4].qnt--,this.invStory.push({name:e,file:o}),this.dStory[a].own=!0,this.saveTime())}},created(){localStorage.getItem("nav")==="0"&&(this.nav=0)}},L=Object.assign(G,{__name:"knowIT",setup(a){return(e,o)=>(i(),n("div",y,[u(s("div",g,[(i(!0),n(r,null,c(e.fragments,t=>(i(),n("div",{class:"sideOption",key:t.id,onClick:d=>e.switchFragment(t.name)},[s("div",null,l(t.name),1)],8,D))),128))],512),[[m,e.sMeni]]),s("div",C,[s("div",b,[s("div",{class:"showBtn",id:"showBtn",onClick:o[0]||(o[0]=t=>e.showMeni())},l(e.character),1),s("div",{class:"knwUser",onClick:o[1]||(o[1]=t=>e.switchFragment("User"))},l(e.user),1),s("div",B,[h(l(e.invSun[4].qnt),1),s("img",{class:"icon_option",src:f(k)},null,8,I)]),S(f(w),{to:"/"},{default:_(()=>o[2]||(o[2]=[s("div",{class:"back"},"X",-1)])),_:1})]),s("div",N,[e.sUser?(i(),n("div",M,[(i(!0),n(r,null,c(e.invStory,t=>(i(),n("div",{key:t.id},[s("div",F,[s("div",O,l(t.name),1),s("div",{class:"sopenbtn",onClick:d=>e.openPDF(t.name,t.file)},"Open",8,q)])]))),128))])):e.sDS?(i(),n("div",U,[(i(!0),n(r,null,c(e.dStory,t=>(i(),n("div",{key:t.id},[s("div",J,[s("div",T,l(t.name),1),t.own?(i(),n("div",$,[s("div",P,[s("a",{onClick:d=>e.openPDF(t.name,t.file)},"Open",8,V)])])):(i(),n("div",E,[s("div",H,[s("a",{onClick:d=>e.buyPDF(t.id,t.name,t.file)},"Buy 1DC",8,j)])]))])]))),128))])):p("",!0)])])]))}}),Y=v(L,[["__scopeId","data-v-8962184f"]]);export{Y as default};
