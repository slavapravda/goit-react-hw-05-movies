"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[346],{697:function(e,n,t){t.d(n,{fT:function(){return o},rs:function(){return a},yJ:function(){return s},z1:function(){return i}});var r="https://api.themoviedb.org/",c="6cfef64e07855702e198aec946e650ef";function i(e){return fetch("".concat(r,"3/search/movie?api_key=").concat(c,"&language=en-US&query=").concat(e,"&page=1&include_adult=false")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041f\u043e \u0432\u0430\u0448\u043e\u043c\u0443 \u0437\u0430\u043f\u0438\u0442\u0443 \u043di\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"))}))}function a(e){return fetch("".concat(r,"3/movie/").concat(e,"?api_key=").concat(c)).then((function(e){return e.ok?e.json():Promise.reject(new Error("I\u043d\u0444\u043e\u0440\u043c\u0430\u0446i\u044f \u043f\u0440\u043e \u0434\u0430\u043d\u0438\u0439 \u0444i\u043b\u044c\u043c \u0432i\u0434\u0441\u0443\u0442\u043d\u044f, \u0432\u0438\u0431\u0430\u0447\u0442\u0435! \u041f\u043e\u0432\u0435\u0440\u043di\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043e\u043b\u043e\u0432\u043d\u0443 \u0441\u0442\u043e\u0440i\u043d\u043a\u0443."))}))}function o(e){return fetch("".concat(r,"3/movie/").concat(e,"/credits?api_key=").concat(c,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u0412\u0438\u0431\u0430\u0447\u0442\u0435, \u0430\u043b\u0435 \u0430\u043a\u0442\u0435\u0440\u0441\u043a\u0438\u0439 \u0441\u043a\u043b\u0430\u0434 \u0432i\u0434\u0441\u0443\u0442\u043di\u0439."))}))}function s(e){return fetch("".concat(r,"3/movie/").concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u0412\u0438\u0431\u0430\u0447\u0442\u0435, \u0430\u043b\u0435 \u043f\u043e\u043a\u0438 \u0449\u043e \u043d\u0435\u043c\u0430 \u0436\u043e\u0434\u043d\u043e\u0433\u043e \u0432\u0456\u0434\u0433\u0443\u043a\u0430."))}))}n.ZP=function(){return fetch("".concat(r,"3/trending/all/day?api_key=").concat(c)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry"))}))}},346:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(861),c=t(885),i=t(757),a=t.n(i),o=t(871),s=t(791),u=t(697),f="ReviewsPage_list__IK83Q",l="ReviewsPage_item__AK+Jx",h="ReviewsPage_title__Sqv6J",_="ReviewsPage_text__JDMhb",v="ReviewsPage_noReviews__7-All",p=t(184),d=function(){var e=(0,s.useState)([]),n=(0,c.Z)(e,2),t=n[0],i=n[1],d=(0,s.useState)(!1),m=(0,c.Z)(d,2),g=m[0],j=m[1],w=(0,s.useState)(null),k=(0,c.Z)(w,2),x=k[0],y=k[1],P=(0,o.UO)().id;return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),y(null),e.next=5,(0,u.yJ)(P);case 5:n=e.sent,i(n.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),y(e.t0);case 12:return e.prev=12,j(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[P]),(0,p.jsxs)("div",{children:[g&&(0,p.jsx)("p",{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0432\u0456\u0434\u0433\u0443\u043a\u0456\u0432..."}),t.length?(0,p.jsx)("ul",{className:f,children:t.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,p.jsxs)("li",{className:l,children:[(0,p.jsx)("h3",{className:h,children:t}),(0,p.jsx)("p",{className:_,children:r})]},n)}))}):(0,p.jsx)("p",{className:v,children:"\u0412\u0438\u0431\u0430\u0447\u0442\u0435, \u0430\u043b\u0435 \u043f\u043e\u043a\u0438 \u0449\u043e \u043d\u0435\u043c\u0430 \u0436\u043e\u0434\u043d\u043e\u0433\u043e \u0432\u0456\u0434\u0433\u0443\u043a\u0430."}),x&&(0,p.jsx)("p",{children:x.message})]})}}}]);
//# sourceMappingURL=346.0ff0d4ac.chunk.js.map