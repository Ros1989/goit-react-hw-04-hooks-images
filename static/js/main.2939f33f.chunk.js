(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1_z2p",imageImageGalleryItem:"ImageGalleryItem_imageImageGalleryItem__pDd8H","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__3iOVR"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2GXoW",Modal:"Modal_Modal__1N48y"}},22:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__39bYB"}},23:function(e,t,a){e.exports={Button:"Button_Button__1BfNJ"}},25:function(e,t,a){e.exports={loaderContainer:"Loader_loaderContainer__2APkm"}},32:function(e,t,a){},5:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__3-GJC",SearchForm:"SearchBar_SearchForm__3mdVB",SearchForm_button:"SearchBar_SearchForm_button__PPRfh",SearchForm_button_label:"SearchBar_SearchForm_button_label__37UEm",SearchForm_input:"SearchBar_SearchForm_input__3lrXy"}},72:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),o=a(7),i=a.n(o),l=(a(32),a(13)),u=a(4);function s(e){var t=e.onChange,a=Object(r.useState)(8),c=Object(u.a)(a,2),o=c[0],i=c[1];return Object(r.useEffect)((function(){t(o)}),[t,o]),Object(n.jsxs)("select",{className:"QuantitySelect",value:o,name:"quantity",id:"quantity",onChange:function(e){return i(e.target.value)},children:[Object(n.jsx)("option",{value:"4",name:"quantity",children:"4"}),Object(n.jsx)("option",{value:"8",name:"quantity",children:"8"}),Object(n.jsx)("option",{value:"12",name:"quantity",children:"12"}),Object(n.jsx)("option",{value:"20",name:"quantity",children:"20"})]})}var m=a(5),j=a.n(m);function b(e){var t=e.onChangeQuantity,a=e.onSubmitForm,c=Object(r.useState)(""),o=Object(u.a)(c,2),i=o[0],l=o[1];return Object(n.jsxs)("header",{className:j.a.Searchbar,children:[Object(n.jsxs)("form",{className:j.a.SearchForm,onSubmit:function(e){return function(e){e.preventDefault(),i&&(a(i),l(""))}(e)},children:[Object(n.jsx)("button",{type:"submit",className:j.a.SearchForm_button,children:Object(n.jsx)("span",{className:j.a.SearchForm_button_label,children:"Search"})}),Object(n.jsx)("input",{className:j.a.SearchForm_input,type:"text",autoComplete:"off",value:i,autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){return l(e.target.value)}})]}),Object(n.jsx)(s,{onChange:t})]})}var h=a(10),d=a.n(h);function f(e){var t=e.previewUrl,a=e.imageUrl,r=e.onClickImage;return Object(n.jsx)("li",{className:d.a.ImageGalleryItem,onClick:function(e){return r(e)},children:Object(n.jsx)("img",{src:t,alt:"",className:d.a.imageImageGalleryItem,"data-url":a,width:"150"})})}var g=a(22),O=a.n(g);function _(e){var t=e.galleryPhotos,a=e.onOpenModal;return Object(n.jsx)("ul",{className:O.a.ImageGallery,children:t.map((function(e){var t=e.id,r=e.largeImageURL,c=e.webformatURL;return Object(n.jsx)(f,{previewUrl:c,imageUrl:r,onClickImage:a},t)}))})}var p=a(11),v=a.n(p);v.a.defaults.baseURL="https://pixabay.com/api";var y={API_KEY:"18570848-b4ac6f1815e8e933245c4f233",fetchGallery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;return v.a.get("/?q=".concat(e,"&page=").concat(t,"&key=").concat(this.API_KEY,"&image_type=photo&orientation=horizontal&per_page=").concat(a)).then((function(e){return e.data.hits})).then((function(e){return e.map((function(e){return{id:e.id,largeImageURL:e.largeImageURL,webformatURL:e.webformatURL}}))}))}},x=a(23),S=a.n(x);function I(e){var t=e.onLoadMore;return Object(n.jsx)("button",{className:S.a.Button,type:"button",onClick:function(){return t()},children:"load more"})}var w=a(26),C=a(12),F=a.n(C),G=document.querySelector("#modal-root");function B(e){var t=e.onCloseModal,a=e.imageUrl;Object(r.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c)}}));var c=function(e){"Escape"===e.code&&t()};return Object(o.createPortal)(Object(n.jsx)("div",{className:F.a.Overlay,onClick:function(e){return function(e){e.currentTarget===e.target&&t()}(e)},children:Object(n.jsxs)("div",{className:B,children:[Object(n.jsx)("div",{className:F.a.ModalButtonWrapper,onClick:function(){return t()},children:Object(n.jsx)(w.a,{color:"white",size:"25px"})}),Object(n.jsx)("img",{src:a,alt:""})]})}),G)}var N=a(24),k=a.n(N),L=(a(71),a(25)),U=a.n(L);function E(e){var t=e.isLoading;return Object(n.jsx)("div",{className:U.a.loaderContainer,children:Object(n.jsx)(k.a,{visible:t,type:"BallTriangle",color:"#00BFFF",height:50,width:50,timeout:0})})}function M(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)(1),i=Object(u.a)(o,2),s=i[0],m=i[1],j=Object(r.useState)(""),h=Object(u.a)(j,2),d=h[0],f=h[1],g=Object(r.useState)(!1),O=Object(u.a)(g,2),p=O[0],v=O[1],x=Object(r.useState)(""),S=Object(u.a)(x,2),w=S[0],C=S[1],F=Object(r.useState)(!1),G=Object(u.a)(F,2),N=G[0],k=G[1],L=Object(r.useState)(8),U=Object(u.a)(L,2),M=U[0],R=U[1];Object(r.useEffect)((function(){d&&P()}),[d,M]),Object(r.useEffect)((function(){J()}));var q=function(){v(!p)},P=function(){k((function(e){return!e})),y.fetchGallery(d,s,M).then((function(e){c((function(t){return[].concat(Object(l.a)(t),Object(l.a)(e))})),m((function(e){return e+1}))})).finally((function(){return k((function(e){return!e}))}))},J=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b,{onSubmitForm:function(e){f(e),c([]),m(1)},onChangeQuantity:function(e){return R(e)}}),Object(n.jsxs)("main",{children:[Object(n.jsx)(_,{galleryPhotos:a,onOpenModal:function(e){var t=e.target.dataset.url;q(),C(t)}}),Object(n.jsx)(E,{isLoading:N}),a.length>0&&!N&&Object(n.jsx)(I,{onLoadMore:P}),p&&Object(n.jsx)(B,{imageUrl:w,onCloseModal:q})]})]})}i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(M,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.2939f33f.chunk.js.map