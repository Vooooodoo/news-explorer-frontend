(this["webpackJsonpnews-explorer"]=this["webpackJsonpnews-explorer"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header__logo_color_white.99f8f1ba.svg"},,,,,,,function(e,t,a){e.exports=a.p+"static/media/header__logo_color_black.38ba3366.svg"},,function(e,t,a){e.exports=a.p+"static/media/about__avatar.3963cc91.jpg"},function(e,t,a){e.exports=a.p+"static/media/preloader__logo.5bbc83be.svg"},function(e,t,a){e.exports=a.p+"static/media/footer__logo_type_github.45fc9be3.svg"},function(e,t,a){e.exports=a.p+"static/media/footer__logo_type_facebook.4521f6ae.svg"},,function(e,t,a){e.exports=a(58)},,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(22),c=a.n(r),i=a(4),s=a(14),l=a(19),u=a(1),p=a(2),m=o.a.createContext(),_=a(16),g=a.n(_),d=a(23),h=a.n(d);a(35);var f=function(e){var t=Object(p.h)().pathname,a=o.a.useContext(m),n="".concat("/saved-news"===t?h.a:g.a),r="".concat("/saved-news"===t?"navigation_location_saved-news navigation_color_black":"navigation_location_main navigation_color_white"),c="".concat("/saved-news"===t?"navigation__text_color_black":"navigation__text_color_white"),s="".concat("/saved-news"===t?"navigation__link_state_inactive":"navigation__link_state_active-white"),l="".concat("/saved-news"===t?"navigation__link_state_ative-black":"navigation__link_state_inactive"),_="".concat("/saved-news"===t?"navigation__text_color_black navigation__desktop-button_color_black":"navigation__text_color_white navigation__desktop-button_color_white"),d="".concat("/saved-news"===t?"navigation__desktop-button_type_black-signout":"navigation__desktop-button_type_white-signout"),f="".concat("/saved-news"===t?"navigation__burger-button_color_black":"navigation__burger-button_color_white"),b=o.a.useState(!1),v=Object(u.a)(b,2),E=v[0],w=v[1];return o.a.createElement("div",{className:"navigation ".concat(r)},o.a.createElement(i.b,{to:"/",className:"navigation__logo-link tap-highlight"},o.a.createElement("img",{className:"navigation__logo",src:n,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0432 \u0432\u0438\u0434\u0435 \u0442\u0435\u043a\u0441\u0442\u0430 NewsExplorer."})),o.a.createElement("nav",{className:"navigation__menu"},o.a.createElement(i.b,{to:"/",className:"navigation__link navigation__text opacity tap-highlight ".concat(c," ").concat(s)},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),e.loggedIn?o.a.createElement(o.a.Fragment,null,o.a.createElement(i.b,{to:"/saved-news",className:"navigation__link navigation__text opacity tap-highlight ".concat(c," ").concat(l)},"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"),o.a.createElement("button",{className:"navigation__desktop-button navigation__desktop-button_type_signout navigation__text opacity tab tap-highlight ".concat(_," ").concat(d),type:"button",onClick:e.onSignOut},a.name)):o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"navigation__desktop-button navigation__desktop-button_type_signin navigation__text opacity tab tap-highlight ".concat(_),type:"button",onClick:e.onSignIn},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))),o.a.createElement("button",{className:"navigation__burger-button tap-highlight ".concat(f),onClick:function(){w(!0)},type:"button","aria-label":"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e."}),E&&o.a.createElement("nav",{className:"navigation__mobile-menu"},o.a.createElement(i.b,{to:"/",className:"navigation__mobile-link tap-highlight"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),e.loggedIn?o.a.createElement(o.a.Fragment,null,o.a.createElement(i.b,{to:"/saved-news",className:"navigation__mobile-link tap-highlight"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"),o.a.createElement("button",{className:"navigation__mobile-button navigation__mobile-button_type_signout tab tap-highlight",type:"button",onClick:e.onSignOut},a.name)):o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"navigation__mobile-button tab tap-highlight",type:"button",onClick:e.onSignIn},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f")),o.a.createElement(i.b,{to:"/",className:"navigation__mobile-logo tap-highlight"},o.a.createElement("img",{src:g.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0432 \u0432\u0438\u0434\u0435 \u0442\u0435\u043a\u0441\u0442\u0430 NewsExplorer."})),o.a.createElement("button",{className:"navigation__mobile-close tap-highlight",onClick:function(){w(!1)},type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e."})))};a(41);var b=function(e){var t=o.a.useRef();return o.a.createElement("form",{className:"search-form",onSubmit:function(a){a.preventDefault(),e.onSearchArticles(t.current.value),t.current.value=""}},o.a.createElement("input",{className:"search-form__input",ref:t,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043c\u0443 \u043d\u043e\u0432\u043e\u0441\u0442\u0438",required:!0}),o.a.createElement("button",{className:"search-form__button search-form__text tap-highlight",type:"submit"},"\u0418\u0441\u043a\u0430\u0442\u044c"))};a(42);var v=function(e){return o.a.createElement("header",{className:"header"},o.a.createElement(f,{loggedIn:e.loggedIn,onSignOut:e.onSignOut,onSignIn:e.onSignIn}),o.a.createElement("h1",{className:"header__title"},"\u0427\u0442\u043e \u0442\u0432\u043e\u0440\u0438\u0442\u0441\u044f \u0432\xa0\u043c\u0438\u0440\u0435?"),o.a.createElement("p",{className:"header__subtitle"},"\u041d\u0430\u0445\u043e\u0434\u0438\u0442\u0435 \u0441\u0430\u043c\u044b\u0435 \u0441\u0432\u0435\u0436\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438 \u043d\u0430\xa0\u043b\u044e\u0431\u0443\u044e \u0442\u0435\u043c\u0443 \u0438\xa0\u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0439\u0442\u0435 \u0432\xa0\u0441\u0432\u043e\u0451\u043c \u043b\u0438\u0447\u043d\u043e\u043c \u043a\u0430\u0431\u0438\u043d\u0435\u0442\u0435."),o.a.createElement(b,{onSearchArticles:e.onSearchArticles}))};function E(e,t){return t[e%10===1&&e%100!==11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2]}var w=o.a.createContext();a(43);var k=function(e){var t=o.a.useContext(m),a=o.a.useContext(w).savedArticles,n=a.map((function(e){return e.keyword})),r=Object(s.a)(new Set(n)).map((function(e){var t={};return t.keyword=e,t.quantity=n.filter((function(t){return t===e})).length,t})).sort((function(e,t){return t.quantity-e.quantity})).map((function(e){return e.keyword})),c=E(a.length,["\u0441\u0442\u0430\u0442\u044c\u044f","\u0441\u0442\u0430\u0442\u044c\u0438","\u0441\u0442\u0430\u0442\u0435\u0439"]),i=E(a.length,["\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u0430\u044f","\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0445","\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0445"]),l=0===r.slice(3).length?"":E(r.slice(3).length,["\u0434\u0440\u0443\u0433\u043e\u043c\u0443","\u0434\u0440\u0443\u0433\u0438\u043c","\u0434\u0440\u0443\u0433\u0438\u043c"]),u=r.slice(3).length>4||r.slice(3).length<2?"":"-\u043c",p=r.slice(0,3).join(", "),_=r.slice(0,2).join(", "),g=r.length<=3?p:"".concat(_," \u0438 ").concat(r.slice(3).length);return o.a.createElement("header",{className:"saved-news-header"},o.a.createElement(f,{loggedIn:e.loggedIn,onSignOut:e.onSignOut}),o.a.createElement("h1",{className:"saved-news-header__title"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"),o.a.createElement("p",{className:"saved-news-header__subtitle"},"".concat(t.name,", \u0443 \u0432\u0430\u0441 ").concat(e.articles.length," ").concat(i," ").concat(c)),o.a.createElement("p",{className:"saved-news-header__text"},"\u041f\u043e\xa0\u043a\u043b\u044e\u0447\u0435\u0432\u044b\u043c \u0441\u043b\u043e\u0432\u0430\u043c: ",o.a.createElement("b",null,"".concat(g).concat(u," ").concat(l))))},C=a(25),y=a.n(C);a(44);var N=function(){return o.a.createElement("section",{className:"about"},o.a.createElement("img",{className:"about__avatar",src:y.a,alt:"\u0410\u0432\u0442\u043e\u0440 \u043f\u0440\u043e\u0435\u043a\u0442\u0430."}),o.a.createElement("div",null,o.a.createElement("h2",{className:"about__title"},"\u041e\u0431\xa0\u0430\u0432\u0442\u043e\u0440\u0435"),o.a.createElement("p",{className:"about__text"},"\u041f\u0440\u0438\u0432\u0435\u0442! \u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u0420\u043e\u043c\u0430\u043d, \u044f\xa0\u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0439 \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a. \u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u043e\u043f\u044b\u0442\u043d\u044b\u043c \u043d\u0430\u0441\u0442\u0430\u0432\u043d\u0438\u043a\u0430\u043c \u0438\u0437\xa0\u043a\u043e\u043c\u0430\u043d\u0434\u044b \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c, \u043e\u0441\u0432\u043e\u0438\u043b \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0432\u0435\u0431-\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 \u0438\xa0\u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438. \u0412\u043e\u0442\xa0\u043c\u043e\u0439 \u0441\u0442\u0435\u043a: ",o.a.createElement("b",null,"HTML5, CSS3, JavaScript ES6, React, Node.js, Express, MongoDB, Git, Bash, DevTools, Webpack, Figma, NPM, Nginx, Postman"),"."),o.a.createElement("p",{className:"about__text"},"\u0423\u043c\u0435\u044e \u043e\u0442\u0437\u044b\u0432\u0447\u0438\u0432\u043e \u0432\u0435\u0440\u0441\u0442\u0430\u0442\u044c, \u043f\u043e\xa0\u0411\u042d\u041c \u0441\u0442\u0438\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0438\xa0\u043e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c. \u0411\u0443\u0434\u0443 \u0440\u0430\u0434 \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0441\u0432\u043e\u0438\u043c\u0438 \u0437\u043d\u0430\u043d\u0438\u044f\u043c\u0438 \u0438\xa0\u0443\u043c\u0435\u043d\u0438\u044f\u043c\u0438!")))},S=o.a.createContext();a(45);var O=function(e){var t=Object(p.h)().pathname,a=o.a.useContext(S),n=o.a.useContext(w).savedArticles,r=o.a.useState(!1),c=Object(u.a)(r,2),i=c[0],s=c[1],l="".concat(n.some((function(t){return t.title===e.article.title}))?"news-card-btn_type_marked-save":"news-card-btn_type_normal-save"),m="".concat("/saved-news"===t?"news-card-btn_type_normal-delete news-card-btn_type_hover-delete news-card-btn_type_focus-delete":"".concat(l," news-card-btn_type_hover-save news-card-btn_type_focus-save")),_="".concat("/saved-news"===t?"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0445":"\u0412\u043e\u0439\u0434\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u0438"),g="".concat("/saved-news"===t?"\u0423\u0431\u0440\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u044e \u0438\u0437 \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0445.":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u044e.");return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"news-card-btn ".concat(m),onMouseEnter:function(){"/saved-news"!==t&&a||s(!0)},onMouseLeave:function(){s(!1)},onClick:function(){e.onCardBtnClick(e.article)},type:"button","aria-label":g}),i&&o.a.createElement("span",{className:"news-card-btn__popup news-card-btn__popup_hidden news-card-btn__popup_shown"},_))};a(46);var j=function(e){var t="/saved-news"===Object(p.h)().pathname,a=e.date.slice(0,e.date.indexOf("T")),n=new Date(a).toLocaleString("ru",{year:"numeric",month:"long",day:"numeric"}).split(" "),r="".concat(n[0]," ").concat(n[1],", ").concat(n[2]);return o.a.createElement("li",{className:"news-card tap-highlight"},o.a.createElement("img",{className:"news-card__photo",src:e.photo,alt:"".concat(e.title,".")}),t&&o.a.createElement("span",{className:"news-card__tag"},e.tagText),o.a.createElement(O,{onCardBtnClick:e.onCardBtnClick,article:e.article}),o.a.createElement("a",{className:"news-card__link",href:e.url,target:"_blank"},o.a.createElement("div",{className:"news-card__container"},o.a.createElement("p",{className:"news-card__date"},t?e.date:r),o.a.createElement("h2",{className:"news-card__title"},e.title),o.a.createElement("p",{className:"news-card__text"},e.text),o.a.createElement("p",{className:"news-card__src"},e.src))))};a(47);var x=function(e){var t="/saved-news"===Object(p.h)().pathname;return o.a.createElement("ul",{className:"news-card-list"},e.articles.map((function(a,n){return o.a.createElement(j,{key:n,article:a,photo:t?a.image:a.urlToImage,tagText:t&&a.keyword,date:t?a.date:a.publishedAt,title:a.title,text:t?a.text:a.description,src:t?a.source:a.source.name,url:t?a.link:a.url,onCardBtnClick:e.onCardBtnClick})})))};a(48);var M=function(e){return o.a.createElement("button",{className:"show-more tap-highlight",type:"button",onClick:e.onShowMore},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435")};a(49);var I=function(e){var t=o.a.useContext(w).articles;return o.a.createElement("section",{className:"search-result"},o.a.createElement("h3",{className:"search-result__title"},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430"),o.a.createElement(x,{articles:t,onCardBtnClick:e.onCardBtnClick}),e.isShowMoreBtn&&o.a.createElement(M,{onShowMore:e.onShowMore}))};a(50);var T=function(e){return o.a.createElement("section",{className:"preloader"},e.children,o.a.createElement("p",{className:"preloader__subtitle"},e.subTitle))};a(51);var B=function(){return o.a.createElement(T,{children:o.a.createElement("div",{className:"preloader__spinner"}),subTitle:"\u0418\u0434\u0435\u0442 \u043f\u043e\u0438\u0441\u043a \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439..."})},L=a(26),A=a.n(L);a(52);var D=function(){return o.a.createElement(T,{children:o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{className:"preloader__logo",src:A.a,alt:"\u041b\u0443\u043f\u0430 \u0441 \u0433\u0440\u0443\u0441\u0442\u043d\u044b\u043c \u0441\u043c\u0430\u0439\u043b\u0438\u043a\u043e\u043c \u0432\u043d\u0443\u0442\u0440\u0438."}),o.a.createElement("h3",{className:"preloader__title"},"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\xa0\u043d\u0430\u0439\u0434\u0435\u043d\u043e")),subTitle:"\u041a\xa0\u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u043f\u043e\xa0\u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\xa0\u043d\u0430\u0439\u0434\u0435\u043d\u043e."})};var F=function(){return o.a.createElement(T,{subTitle:"\u0412\u043e\xa0\u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441\xa0\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435\u043c \u0438\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. \u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0438\xa0\u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})};var P=function(e){return o.a.createElement("main",null,e.isLoading&&o.a.createElement(B,null),e.isLoaded&&o.a.createElement(I,{onCardBtnClick:e.onCardBtnClick,onShowMore:e.onShowMore,isShowMoreBtn:e.isShowMoreBtn}),e.isNotFound&&o.a.createElement(D,null),e.isReqErr&&o.a.createElement(F,null),o.a.createElement(N,null))},q=a(29);var J=function(e){var t=e.firstComponent,a=e.secondComponent,n=Object(q.a)(e,["firstComponent","secondComponent"]);return o.a.createElement(p.b,null,(function(){return n.loggedIn?o.a.createElement(o.a.Fragment,null,o.a.createElement(t,n),o.a.createElement(a,n)):o.a.createElement(p.a,{to:"/"})}))};a(53);var V=function(e){return o.a.createElement("section",{className:"saved-result"},o.a.createElement(x,{articles:e.articles,onCardBtnClick:e.onCardBtnClick}))};var z=function(e){return o.a.createElement("main",null,o.a.createElement(V,{articles:e.articles,onCardBtnClick:e.onCardBtnClick}))},G=a(27),R=a.n(G),U=a(28),W=a.n(U);a(54);var $=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9\xa02020 NewsExplorer, Powered by News API"),o.a.createElement("nav",{className:"footer__navigation"},o.a.createElement("div",null,o.a.createElement(i.b,{to:"/",className:"footer__link opacity tap-highlight"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),o.a.createElement("a",{className:"footer__link opacity tap-highlight",href:"https://praktikum.yandex.ru",target:"_blank"},"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c")),o.a.createElement("div",null,o.a.createElement("a",{className:"footer__logo-link opacity tap-highlight",href:"https://github.com/Vooooodoo",target:"_blank"},o.a.createElement("img",{className:"footer__logo footer__logo_type_github",src:R.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0413\u0438\u0442\u0445\u0430\u0431."})),o.a.createElement("a",{className:"footer__logo-link opacity tap-highlight",href:"https://www.facebook.com/yandex.praktikum",target:"_blank"},o.a.createElement("img",{className:"footer__logo footer__logo_type_facebook",src:W.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0424\u044d\u0439\u0441\u0431\u0443\u043a."})))))};a(55);var H=function(e){return o.a.createElement("div",{id:e.id,className:"popup ".concat(e.isOpen?"popup_opened":"popup_closed")},o.a.createElement("form",{name:e.id.slice(0,e.id.indexOf("-")),className:"popup__form-container",onSubmit:e.onSubmit,noValidate:!0},o.a.createElement("h3",{className:"popup__form-title"},e.title),o.a.createElement("fieldset",{className:"popup__fieldset"},o.a.createElement("label",{htmlFor:"".concat(e.id,"-email-input"),className:"popup__input-label"},"Email"),o.a.createElement("input",{id:"".concat(e.id,"-email-input"),name:"email",className:"popup__input",onChange:e.onEmailChange,value:e.email,type:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443",minLength:"2",maxLength:"40",required:!0}),o.a.createElement("span",{className:"popup__input-error popup__input-error_type_validation popup__input-error_hidden ".concat(e.emailInputErrClass)},e.emailInputErrMessage),o.a.createElement("label",{htmlFor:"".concat(e.id,"-password-input"),className:"popup__input-label"},"\u041f\u0430\u0440\u043e\u043b\u044c"),o.a.createElement("input",{id:"".concat(e.id,"-password-input"),name:"password",className:"popup__input",onChange:e.onPassChange,value:e.password,type:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",minLength:"8",maxLength:"40",required:!0}),o.a.createElement("span",{className:"popup__input-error popup__input-error_type_validation popup__input-error_hidden ".concat(e.passInputErrClass)},e.passInputErrMessage),"registration-popup"===e.id&&o.a.createElement(o.a.Fragment,null,o.a.createElement("label",{htmlFor:"".concat(e.id,"-name-input"),className:"popup__input-label"},"\u0418\u043c\u044f"),o.a.createElement("input",{id:"".concat(e.id,"-name-input"),name:"name",className:"popup__input",onChange:e.onNameChange,value:e.name,type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0451 \u0438\u043c\u044f",minLength:"2",maxLength:"40",pattern:"^[\u0410-\u042f\u0430-\u044f\u0401\u0451a-zA-Z\\s\\-]+$",required:!0}),o.a.createElement("span",{className:"popup__input-error popup__input-error_type_validation popup__input-error_hidden ".concat(e.nameInputErrClass)},e.nameInputErrMessage)),o.a.createElement("span",{className:"popup__input-error popup__input-error_type_registration ".concat(e.isSubmitErr?"popup__input-error_shown":"popup__input-error_hidden")},e.submitErrMessage)),o.a.createElement("button",{className:"popup__submit tap-highlight ".concat(e.isFormValid?"popup__submit_valid":"popup__submit_invalid"),type:"submit"},e.btnText),o.a.createElement("button",{className:"popup__close opacity tab tap-highlight",type:"button","aria-label":e.ariaLabel,onClick:e.onClose}),o.a.createElement("div",{className:"popup__wrapper"},o.a.createElement("span",{className:"popup__text"},"\u0438\u043b\u0438"),o.a.createElement("button",{className:"popup__link opacity tap-highlight tab",type:"button",onClick:e.onClick},e.linkText))))};var K=function(e){var t={errorClass:"",errorMessage:""},a=o.a.useState(""),n=Object(u.a)(a,2),r=n[0],c=n[1],i=o.a.useState(""),s=Object(u.a)(i,2),l=s[0],p=s[1],m=o.a.useState(t),_=Object(u.a)(m,2),g=_[0],d=_[1],h=o.a.useState(t),f=Object(u.a)(h,2),b=f[0],v=f[1],E=o.a.useState(!1),w=Object(u.a)(E,2),k=w[0],C=w[1],y=o.a.useState(!1),N=Object(u.a)(y,2),S=N[0],O=N[1],j=o.a.useState(!1),x=Object(u.a)(j,2),M=x[0],I=x[1];return o.a.useEffect((function(){d(t),v(t),c(""),p(""),C(!1),O(!1)}),[e.isOpen]),o.a.useEffect((function(){I(!(!k||!S))}),[k,S]),o.a.createElement(H,{id:"login-popup",title:"\u0412\u0445\u043e\u0434",btnText:"\u0412\u043e\u0439\u0442\u0438",ariaLabel:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443 \u0432\u0445\u043e\u0434\u0430.",linkText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",email:r,password:l,emailInputErrClass:g.errorClass,emailInputErrMessage:g.errorMessage,passInputErrClass:b.errorClass,passInputErrMessage:b.errorMessage,isOpen:e.isOpen,isFormValid:M,onClose:e.onClose,onClick:e.onClick,onEmailChange:function(e){c(e.target.value),e.target.validity.valid?(d(t),C(!0)):(d({errorClass:"popup__input-error_shown",errorMessage:e.target.validationMessage}),C(!1))},onPassChange:function(e){p(e.target.value),e.target.validity.valid?(v(t),O(!0)):(v({errorClass:"popup__input-error_shown",errorMessage:e.target.validationMessage}),O(!1))},onSubmit:function(t){t.preventDefault(),e.onSubmit(r,l)}})};var Y=function(e){var t={errorClass:"",errorMessage:""},a=o.a.useState(""),n=Object(u.a)(a,2),r=n[0],c=n[1],i=o.a.useState(""),s=Object(u.a)(i,2),l=s[0],p=s[1],m=o.a.useState(""),_=Object(u.a)(m,2),g=_[0],d=_[1],h=o.a.useState(t),f=Object(u.a)(h,2),b=f[0],v=f[1],E=o.a.useState(t),w=Object(u.a)(E,2),k=w[0],C=w[1],y=o.a.useState(t),N=Object(u.a)(y,2),S=N[0],O=N[1],j=o.a.useState(!1),x=Object(u.a)(j,2),M=x[0],I=x[1],T=o.a.useState(!1),B=Object(u.a)(T,2),L=B[0],A=B[1],D=o.a.useState(!1),F=Object(u.a)(D,2),P=F[0],q=F[1],J=o.a.useState(!1),V=Object(u.a)(J,2),z=V[0],G=V[1];return o.a.useEffect((function(){v(t),C(t),O(t),c(""),p(""),d(""),I(!1),A(!1),q(!1)}),[e.isOpen]),o.a.useEffect((function(){G(!!(M&&L&&P))}),[M,L,P]),o.a.createElement(H,{id:"registration-popup",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",btnText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",ariaLabel:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438.",linkText:"\u0412\u043e\u0439\u0442\u0438",email:r,password:l,name:g,emailInputErrClass:b.errorClass,emailInputErrMessage:b.errorMessage,passInputErrClass:k.errorClass,passInputErrMessage:k.errorMessage,nameInputErrClass:S.errorClass,nameInputErrMessage:S.errorMessage,isOpen:e.isOpen,isFormValid:z,onClose:e.onClose,onClick:e.onClick,onEmailChange:function(e){c(e.target.value),e.target.validity.valid?(v(t),I(!0)):(v({errorClass:"popup__input-error_shown",errorMessage:e.target.validationMessage}),I(!1))},onPassChange:function(e){p(e.target.value),e.target.validity.valid?(C(t),A(!0)):(C({errorClass:"popup__input-error_shown",errorMessage:e.target.validationMessage}),A(!1))},onNameChange:function(e){d(e.target.value),e.target.validity.valid?(O(t),q(!0)):(O({errorClass:"popup__input-error_shown",errorMessage:e.target.validationMessage}),q(!1))},onSubmit:function(t){t.preventDefault(),e.onSubmit(r,l,g)},isSubmitErr:e.isSubmitErr,submitErrMessage:e.submitErrMessage})};a(56);var Z=function(e){return o.a.createElement("div",{className:"popup ".concat(e.isOpen?"popup_opened":"popup_closed")},o.a.createElement("div",{className:"popup__form-container"},o.a.createElement("h3",{className:"popup__form-title"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d!"),o.a.createElement("button",{className:"popup__tooltip-link opacity tap-highlight tab",type:"button",onClick:e.onClick},"\u0412\u043e\u0439\u0442\u0438"),o.a.createElement("button",{className:"popup__close opacity tab tap-highlight",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f \u0441 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u043e\u0439.",onClick:e.onClose})))},Q=a(12),X=a(13),ee=new(function(){function e(t){Object(Q.a)(this,e),this._date=new Date,this._today=this._getDate(this._date),this._daysAgoDate=this._setDate(t),this._daysAgo=this._getDate(this._daysAgoDate)}return Object(X.a)(e,[{key:"_setDate",value:function(e){var t=new Date;return t.setDate(t.getDate()-e),t}},{key:"_getDate",value:function(e){return"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate())}},{key:"_fetch",value:function(e,t){return fetch("https://newsapi.org/v2/everything?q=".concat(e,"&from=").concat(this._daysAgo,"&to=").concat(this._today,"&language=ru&pageSize=100&apiKey=70091bdd11724ad58795297088c46456"),t).then((function(e){return e.ok?e.json():Promise.reject("".concat(e.status))}))}},{key:"get",value:function(e){return this._fetch(e,{method:"GET"})}}]),e}())(7),te=function(){function e(t){var a=t.baseUrl,n=t.headers;Object(Q.a)(this,e),this._baseUrl=a,this._headers=n}return Object(X.a)(e,[{key:"_fetch",value:function(e,t){return t.body&&(t.body=JSON.stringify(t.body)),t.headers=this._headers,fetch(this._baseUrl+e,t).then((function(e){return e.ok?e.json():Promise.reject("".concat(e.status))}))}},{key:"get",value:function(e){return this._fetch(e,{method:"GET"})}},{key:"post",value:function(e,t){return this._fetch(e,{method:"POST",body:t})}},{key:"delete",value:function(e){return this._fetch(e,{method:"DELETE"})}}]),e}(),ae=localStorage.getItem("jwt"),ne=new te({baseUrl:"https://api.vdnews.students.nomoreparties.co",headers:{Authorization:"Bearer ".concat(ae),"Content-Type":"application/json"}}),oe="https://api.vdnews.students.nomoreparties.co";var re=function(){var e=o.a.useState(!1),t=Object(u.a)(e,2),a=t[0],n=t[1],r=o.a.useState(!1),c=Object(u.a)(r,2),i=c[0],_=c[1],g=o.a.useState(!1),d=Object(u.a)(g,2),h=d[0],f=d[1],b=o.a.useState(!1),E=Object(u.a)(b,2),C=E[0],y=E[1],N=o.a.useState(""),O=Object(u.a)(N,2),j=O[0],x=O[1],M=o.a.useState(!1),I=Object(u.a)(M,2),T=I[0],B=I[1],L=o.a.useState({}),A=Object(u.a)(L,2),D=A[0],F=A[1],q=o.a.useState([]),V=Object(u.a)(q,2),G=V[0],R=V[1],U=o.a.useState([]),W=Object(u.a)(U,2),H=W[0],Q=W[1],X=o.a.useState(6),te=Object(u.a)(X,2),ae=te[0],re=te[1],ce=o.a.useState(!1),ie=Object(u.a)(ce,2),se=ie[0],le=ie[1],ue=o.a.useState(!1),pe=Object(u.a)(ue,2),me=pe[0],_e=pe[1],ge=o.a.useState(!1),de=Object(u.a)(ge,2),he=de[0],fe=de[1],be=o.a.useState(!1),ve=Object(u.a)(be,2),Ee=ve[0],we=ve[1],ke=o.a.useState(!0),Ce=Object(u.a)(ke,2),ye=Ce[0],Ne=Ce[1],Se=Object(p.g)(),Oe=JSON.parse(localStorage.getItem("articles"));function je(){var e,t=localStorage.getItem("jwt");t&&(e=t,fetch("".concat(oe,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){try{if(200===e.status)return e.json();if(400===e.status)throw new Error("\u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435");if(401===e.status)throw new Error("\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0435\u043d")}catch(t){return t}})).then((function(e){return e}))).then((function(e){e?(B(!0),F(e)):localStorage.removeItem("jwt")})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430. \u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d:",e)}))}function xe(){B(!1),Se.push("/"),localStorage.removeItem("jwt")}function Me(){n(!1),_(!1),f(!1),y(!1)}function Ie(){Me(),n(!0)}function Te(e){ne.delete("/articles/".concat(e._id)).then((function(){var t=H.filter((function(t){return t._id!==e._id}));Q(t)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430. \u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d:",e)}))}return o.a.useEffect((function(){Oe&&(_e(!0),R(Oe.slice(0,3))),ne.get("/articles").then((function(e){Q(e)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430. \u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d:",e)}))}),[]),o.a.useEffect((function(){function e(e){"Escape"===e.key&&Me()}return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[a,i]),o.a.useEffect((function(){function e(e){e.target.classList.contains("popup")&&Me()}return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[a,i]),o.a.useEffect((function(){je()}),[T]),o.a.createElement(m.Provider,{value:D},o.a.createElement(w.Provider,{value:{articles:G,savedArticles:H}},o.a.createElement(S.Provider,{value:T},o.a.createElement(p.d,null,o.a.createElement(p.b,{exact:!0,path:"/"},o.a.createElement(v,{loggedIn:T,onSignOut:xe,onSignIn:Ie,onSearchArticles:function(e){le(!0),_e(!1),fe(!1),we(!1),Ne(!0),re(6),ee.get(e).then((function(t){var a=t.articles.map((function(t){return Object(l.a)(Object(l.a)({},t),{},{keyword:e})}));0===t.articles.length?fe(!0):_e(!0),t.articles.length>0&&t.articles.length<=3&&Ne(!1),R(a.slice(0,3)),localStorage.setItem("articles",JSON.stringify(a))})).catch((function(e){we(!0),console.log("\u041e\u0448\u0438\u0431\u043a\u0430. \u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d:",e)})).finally((function(){le(!1)}))}}),o.a.createElement(P,{isLoading:se,isLoaded:me,isNotFound:he,isReqErr:Ee,onCardBtnClick:function(e){var t=H.find((function(t){return t.title===e.title&&t.text===e.description}));t?Te(t):function(e){if(T){var t={keyword:G[0].keyword,title:e.title,text:e.description,date:e.publishedAt,source:e.source.name,link:e.url,image:e.urlToImage};ne.post("/articles",t).then((function(e){Q([].concat(Object(s.a)(H),[e]))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430. \u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d:",e)}))}}(e)},onShowMore:function(){re(ae+3),R(Oe.slice(0,ae)),Oe.length<=ae&&Ne(!1)},isShowMoreBtn:ye})),o.a.createElement(J,{path:"/saved-news",firstComponent:k,secondComponent:z,loggedIn:T,onSignOut:xe,articles:H,onCardBtnClick:Te})),o.a.createElement($,null),o.a.createElement(Y,{isOpen:i,onClose:Me,onClick:Ie,onSubmit:function(e,t,a){(function(e,t,a){return fetch("".concat(oe,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t,name:a})}).then((function(e){return e.json()})).then((function(e){return e}))})(e,t,a).then((function(e){e._id?(Me(),f(!0)):(y(!0),x(e.message))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430. \u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d:",e)}))},isSubmitErr:C,submitErrMessage:j}),o.a.createElement(K,{isOpen:a,onClose:Me,onClick:function(){Me(),_(!0)},onSubmit:function(e,t){(function(e,t){return fetch("".concat(oe,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()})).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),e}))})(e,t).then((function(e){e.token?(B(!0),Me()):console.log(e.message)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430. \u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d:",e)}))}}),o.a.createElement(Z,{isOpen:h,onClose:Me,onClick:Ie}))))};a(57),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,null,o.a.createElement(re,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[30,1,2]]]);
//# sourceMappingURL=main.4ceedff3.chunk.js.map