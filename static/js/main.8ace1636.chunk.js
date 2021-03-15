(this["webpackJsonpcontract-viewer"]=this["webpackJsonpcontract-viewer"]||[]).push([[0],{49:function(e,t,a){e.exports=a(88)},64:function(e,t,a){},65:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),o=a.n(l),c=a(10),s=a(5),m=a(40),d=a.n(m),i=a(41),u=a.n(i),p=a(42),f=a(23),h={itf:[],data:null,loading:!1},b=Object(s.c)({contracts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_INTERFACE":return Object(f.a)({},e,{itf:t.payload.itf});case"CALL":return Object(f.a)({},e,{data:t.payload.data,loading:t.payload.loading});case"LOADING":return Object(f.a)({},e,{data:t.payload.loading});default:return e}}}),E=Object(s.a)(p.a,u.a,d.a)(s.d)(b),g=a(15),v=a(11),k=a(47),y=a(89),w=a(19),O=a(20),N=a(22),j=a(21),x=function(e){Object(N.a)(a,e);var t=Object(j.a)(a);function a(){return Object(w.a)(this,a),t.apply(this,arguments)}return Object(O.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0"},r.a.createElement(g.b,{to:"/contracts/erc721",className:"navbar-brand col-sm-3 col-md-2 mr-0"},"Get ERC721 Token Metadata"))}}]),a}(n.Component),I=Object(c.b)(null,(function(e){return Object(s.b)({},e)}))(x),S=(a(63),a(64),a(65),a(66),function(e){var t=e.component,a=Object(k.a)(e,["component"]);return r.a.createElement(v.a,Object.assign({},a,{render:function(e){return r.a.createElement("div",null,r.a.createElement(I,null),r.a.createElement(y.a,{fluid:!0},r.a.createElement(t,e)))}}))}),L=a(13),C=a(90),T=a(91),R=a(28),A=a.n(R),_=a(45),z=a(29),M=a.n(z),G=function(e,t){return function(){var a=Object(_.a)(A.a.mark((function a(n){var r,l;return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,U(!0),a.next=4,M.a.post("".concat("https://us-central1-epik-user-web-app.cloudfunctions.net/erc721","/contracts/call"),{contractAddress:e,funcName:"tokenURI",tokenId:t});case 4:r=a.sent,(l={}).metadata=null,"object"===typeof r.data.metadata&&null!==r.data.metadata?l.metadata=JSON.parse(r.data.metadata):l.metadata=r.data.metadata,l.tokenName=r.data.name,l.symbol=r.data.symbol,l.totalSupply=r.data.totalSupply,l.ownerOf=r.data.ownerOf,n({type:"CALL",payload:{data:l,loading:!1}}),a.next=18;break;case 15:a.prev=15,a.t0=a.catch(0),n({type:"CALL",payload:{data:(o=a.t0,o.response?o.response.data:o.message)}});case 18:case"end":return a.stop()}var o}),a,null,[[0,15]])})));return function(e){return a.apply(this,arguments)}}()},U=function(e){return function(t){t({type:"LOADING",payload:{loading:e}})}},D=function(){return r.a.createElement("div",{className:"loading"},"Loading\u2026")},J=function(e){Object(N.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(w.a)(this,a),(n=t.call(this,e)).showMetadata=function(e){var t=e.metadata;if("object"===typeof t&&null!==t){var a=Object.keys(t),l=[];return a.forEach((function(e,a){return l.push(r.a.createElement("p",null,r.a.createElement("span",{className:"font-weight-bold"},"".concat(e,": ")),n.validURL(t[e])))})),l}return e.metadata},n.validURL=function(e){return new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)?r.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},e):e},n.handleSubmit=n.handleSubmit.bind(Object(L.a)(n)),n.showMetadata=n.showMetadata.bind(Object(L.a)(n)),n.validURL=n.validURL.bind(Object(L.a)(n)),n.state={address:"",tokenId:""},n}return Object(O.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.call(this.state.address,this.state.tokenId)}},{key:"render",value:function(){var e=this;if(this.props.loading)return r.a.createElement(D,null);var t=this.props.data;return r.a.createElement("main",{role:"main",className:"col-md-12 ml-sm-auto col-lg-12 pt-3 px-4"},r.a.createElement("div",{className:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom"},r.a.createElement("h1",{className:"h2"},"Get ERC721 Token Metadata")),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement(C.a,null,r.a.createElement(T.a,{md:12,lg:12,xs:12,sm:12},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(C.a,null,r.a.createElement(T.a,{md:6,lg:6,xs:12,sm:12},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{name:"",placeholder:"Contract Address *",type:"text",className:"form-control",value:this.state.address,onChange:function(t){return e.setState({address:t.target.value})},required:!0}))),r.a.createElement(T.a,{md:6,lg:6,xs:12,sm:12},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{name:"",placeholder:"Token Id *",type:"text",className:"form-control",value:this.state.tokenId,onChange:function(t){return e.setState({tokenId:t.target.value})},required:!0}))),r.a.createElement(T.a,{md:12,lg:12,xs:12,sm:12},r.a.createElement("hr",null)),r.a.createElement(T.a,{md:12,lg:12,xs:12,sm:12},r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Send"))))))),"object"===typeof t&&null!==t&&void 0!==t?r.a.createElement(C.a,null,r.a.createElement(T.a,{md:12,lg:12,xs:12,sm:12},r.a.createElement("hr",null)),r.a.createElement(T.a,{md:12,lg:12,xs:12,sm:12},r.a.createElement(C.a,null,r.a.createElement(T.a,{md:6,lg:6,xs:12},r.a.createElement("h5",null,"ERC721 info "),r.a.createElement("p",null,r.a.createElement("span",{className:"font-weight-bold"},"Token Contract Address:"," "),r.a.createElement("a",{href:"https://etherscan.io/address/".concat(this.state.address),target:"_blank",rel:"noopener noreferrer"},this.state.address)),r.a.createElement("p",null,r.a.createElement("span",{className:"font-weight-bold"},"Token Name: "),r.a.createElement("a",{href:"https://etherscan.io/token/".concat(this.state.address),target:"_blank",rel:"noopener noreferrer"},t.tokenName?t.tokenName:"No information provided")),r.a.createElement("p",null,r.a.createElement("span",{className:"font-weight-bold"},"Token Symbol: "),t.symbol?t.symbol:"No information provided"),r.a.createElement("p",null,r.a.createElement("span",{className:"font-weight-bold"},"Token Total Supply:"," "),t.totalSupply?t.totalSupply:"No information provided")),r.a.createElement(T.a,{md:6,lg:6,xs:12},r.a.createElement("h5",null,"Token info "),r.a.createElement("p",null,r.a.createElement("span",{className:"font-weight-bold"},"Item Id: "),r.a.createElement("a",{href:"https://etherscan.io/token/".concat(this.state.address,"?a=").concat(this.state.tokenId),target:"_blank",rel:"noopener noreferrer"},this.state.tokenId)),r.a.createElement("p",null,r.a.createElement("span",{className:"font-weight-bold"},"Item Owner: "),r.a.createElement("a",{href:"https://etherscan.io/address/".concat(t.ownerOf),target:"_blank",rel:"noopener noreferrer"},t.ownerOf?t.ownerOf:"No information provided")),r.a.createElement("hr",null),r.a.createElement("h5",null,"Token metadata"),this.showMetadata(t))))):r.a.createElement(C.a,null,r.a.createElement(T.a,{md:12,lg:12,xs:12,sm:12},r.a.createElement("hr",null)),r.a.createElement(T.a,{md:12,lg:12,xs:12},r.a.createElement("h6",null,t))))))}}]),a}(n.Component),q=Object(c.b)((function(e){return{data:e.contracts.data,loading:e.contracts.loading}}),(function(e){return Object(s.b)({call:G,handleLoading:U},e)}))(J),B=Object(c.b)(null,(function(e){return Object(s.b)({},e)}))((function(e){return r.a.createElement(g.a,{basename:"/erc721-metadata"},r.a.createElement(v.c,null,r.a.createElement(S,{path:"/",component:q}),r.a.createElement(S,{path:"/contracts/erc721",component:q})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(c.a,{store:E},r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[49,1,2]]]);
//# sourceMappingURL=main.8ace1636.chunk.js.map