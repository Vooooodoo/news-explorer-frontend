(this["webpackJsonpnews-explorer"]=this["webpackJsonpnews-explorer"]||[]).push([[0],[,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/header__logo_color_white.99f8f1ba.svg"},,,,,,function(e,a,t){e.exports=t.p+"static/media/header__logo_color_black.38ba3366.svg"},,function(e,a,t){e.exports=t.p+"static/media/about__avatar.203fd6ac.jpg"},function(e,a,t){e.exports=t.p+"static/media/news-card__photo_name_1.cdf491e3.jpg"},function(e,a,t){e.exports=t.p+"static/media/news-card__photo_name_2.6ea3725b.jpg"},function(e,a,t){e.exports=t.p+"static/media/news-card__photo_name_3.465f954f.jpg"},function(e,a,t){e.exports=t.p+"static/media/preloader__logo.5bbc83be.svg"},function(e,a,t){e.exports=t.p+"static/media/footer__logo_type_github.45fc9be3.svg"},function(e,a,t){e.exports=t.p+"static/media/footer__logo_type_facebook.4521f6ae.svg"},function(e,a,t){e.exports=t(54)},,,,,function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(16),l=t.n(r),i=t(4),s=t(1),c=t(2),p=t(11),u=t.n(p),_=t(17),m=t.n(_);t(31);var g=function(e){var a=Object(c.g)().pathname,t="".concat("/saved-news"===a?m.a:u.a),n="".concat("/saved-news"===a?"navigation_location_saved-news navigation_color_black":"navigation_location_main navigation_color_white"),r="".concat("/saved-news"===a?"navigation__text_color_black":"navigation__text_color_white"),l="".concat("/saved-news"===a?"navigation__link_state_inactive":"navigation__link_state_active-white"),p="".concat("/saved-news"===a?"navigation__link_state_ative-black":"navigation__link_state_inactive"),_="".concat("/saved-news"===a?"navigation__text_color_black navigation__desktop-button_color_black":"navigation__text_color_white navigation__desktop-button_color_white"),g="".concat("/saved-news"===a?"navigation__desktop-button_type_black-signout":"navigation__desktop-button_type_white-signout"),d="".concat("/saved-news"===a?"navigation__burger-button_color_black":"navigation__burger-button_color_white"),h=o.a.useState(!1),b=Object(s.a)(h,2),E=b[0],v=b[1];return o.a.createElement("div",{className:"navigation ".concat(n)},o.a.createElement(i.b,{to:"/",className:"navigation__logo-link tap-highlight"},o.a.createElement("img",{className:"navigation__logo",src:t,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0432 \u0432\u0438\u0434\u0435 \u0442\u0435\u043a\u0441\u0442\u0430 NewsExplorer."})),o.a.createElement("nav",{className:"navigation__menu"},o.a.createElement(i.b,{to:"/",className:"navigation__link navigation__text opacity tap-highlight ".concat(r," ").concat(l)},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),e.loggedIn?o.a.createElement(o.a.Fragment,null,o.a.createElement(i.b,{to:"/saved-news",className:"navigation__link navigation__text opacity tap-highlight ".concat(r," ").concat(p)},"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"),o.a.createElement("button",{className:"navigation__desktop-button navigation__desktop-button_type_signout navigation__text opacity tab tap-highlight ".concat(_," ").concat(g),type:"button",onClick:e.onSignOut},"\u0413\u0440\u0435\u0442\u0430")):o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"navigation__desktop-button navigation__desktop-button_type_signin navigation__text opacity tab tap-highlight ".concat(_),type:"button",onClick:e.onSignIn},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))),o.a.createElement("button",{className:"navigation__burger-button tap-highlight ".concat(d),onClick:function(){v(!0)},type:"button","aria-label":"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e."}),E&&o.a.createElement("nav",{className:"navigation__mobile-menu"},o.a.createElement(i.b,{to:"/",className:"navigation__mobile-link tap-highlight"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),e.loggedIn?o.a.createElement(o.a.Fragment,null,o.a.createElement(i.b,{to:"/saved-news",className:"navigation__mobile-link tap-highlight"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"),o.a.createElement("button",{className:"navigation__mobile-button navigation__mobile-button_type_signout tab tap-highlight",type:"button",onClick:e.onSignOut},"\u0413\u0440\u0435\u0442\u0430")):o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"navigation__mobile-button tab tap-highlight",type:"button",onClick:e.onSignIn},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f")),o.a.createElement(i.b,{to:"/",className:"navigation__mobile-logo tap-highlight"},o.a.createElement("img",{src:u.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0432 \u0432\u0438\u0434\u0435 \u0442\u0435\u043a\u0441\u0442\u0430 NewsExplorer."})),o.a.createElement("button",{className:"navigation__mobile-close tap-highlight",onClick:function(){v(!1)},type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e."})))};t(37);var d=function(){return o.a.createElement("form",{className:"search-form"},o.a.createElement("input",{className:"search-form__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043c\u0443 \u043d\u043e\u0432\u043e\u0441\u0442\u0438"}),o.a.createElement("button",{className:"search-form__button search-form__text tap-highlight",type:"submit"},"\u0418\u0441\u043a\u0430\u0442\u044c"))};t(38);var h=function(e){return o.a.createElement("header",{className:"header"},o.a.createElement(g,{loggedIn:e.loggedIn,onSignOut:e.onSignOut,onSignIn:e.onSignIn}),o.a.createElement("h1",{className:"header__title"},"\u0427\u0442\u043e \u0442\u0432\u043e\u0440\u0438\u0442\u0441\u044f \u0432\xa0\u043c\u0438\u0440\u0435?"),o.a.createElement("p",{className:"header__subtitle"},"\u041d\u0430\u0445\u043e\u0434\u0438\u0442\u0435 \u0441\u0430\u043c\u044b\u0435 \u0441\u0432\u0435\u0436\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438 \u043d\u0430\xa0\u043b\u044e\u0431\u0443\u044e \u0442\u0435\u043c\u0443 \u0438\xa0\u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0439\u0442\u0435 \u0432\xa0\u0441\u0432\u043e\u0451\u043c \u043b\u0438\u0447\u043d\u043e\u043c \u043a\u0430\u0431\u0438\u043d\u0435\u0442\u0435."),o.a.createElement(d,null))};t(39);var b=function(e){return o.a.createElement("header",{className:"saved-news-header"},o.a.createElement(g,{loggedIn:e.loggedIn,onSignOut:e.onSignOut}),o.a.createElement("h1",{className:"saved-news-header__title"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"),o.a.createElement("p",{className:"saved-news-header__subtitle"},"\u0413\u0440\u0435\u0442\u0430, \u0443\xa0\u0432\u0430\u0441 5\xa0\u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0445 \u0441\u0442\u0430\u0442\u0435\u0439"),o.a.createElement("p",{className:"saved-news-header__text"},"\u041f\u043e\xa0\u043a\u043b\u044e\u0447\u0435\u0432\u044b\u043c \u0441\u043b\u043e\u0432\u0430\u043c: ",o.a.createElement("b",null,"\u041f\u0440\u0438\u0440\u043e\u0434\u0430"),", ",o.a.createElement("b",null,"\u0422\u0430\u0439\u0433\u0430")," \u0438\xa0",o.a.createElement("b",null,"2-\u043c \u0434\u0440\u0443\u0433\u0438\u043c")))},E=(t(40),t(19)),v=t.n(E);var f=function(){return o.a.createElement("section",{className:"about"},o.a.createElement("img",{className:"about__avatar",src:v.a,alt:"\u0410\u0432\u0442\u043e\u0440 \u043f\u0440\u043e\u0435\u043a\u0442\u0430."}),o.a.createElement("div",null,o.a.createElement("h2",{className:"about__title"},"\u041e\u0431\xa0\u0430\u0432\u0442\u043e\u0440\u0435"),o.a.createElement("p",{className:"about__text"},"\u042d\u0442\u043e \u0431\u043b\u043e\u043a \u0441\xa0\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043c \u0430\u0432\u0442\u043e\u0440\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0430. \u0417\u0434\u0435\u0441\u044c \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u0442\u044c, \u043a\u0430\u043a \u0432\u0430\u0441 \u0437\u043e\u0432\u0443\u0442, \u0447\u0435\u043c \u0432\u044b\xa0\u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0435\u0441\u044c, \u043a\u0430\u043a\u0438\u043c\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f\u043c\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0432\u043b\u0430\u0434\u0435\u0435\u0442\u0435."),o.a.createElement("p",{className:"about__text"},"\u0422\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u0442\u044c \u043e\xa0\u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0432\xa0\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0435, \u0447\u0435\u043c\u0443 \u0432\u044b\xa0\u0442\u0443\u0442 \u043d\u0430\u0443\u0447\u0438\u043b\u0438\u0441\u044c, \u0438\xa0\u0447\u0435\u043c \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043c\u043e\u0447\u044c \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u043c \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u0430\u043c.")))};t(41);var N=function(e){var a=Object(c.g)().pathname,t="".concat("/saved-news"===a?"news-card-btn_type_normal-delete news-card-btn_type_marked-delete news-card-btn_type_hover-delete news-card-btn_type_focus-delete":"news-card-btn news-card-btn_type_normal-save news-card-btn_type_marked-save news-card-btn_type_hover-save news-card-btn_type_focus-save"),n="".concat("/saved-news"===a?"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0445":"\u0412\u043e\u0439\u0434\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u0438"),r="".concat("/saved-news"===a?"\u0423\u0431\u0440\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u044e \u0438\u0437 \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0445.":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u044e.");return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"news-card-btn ".concat(t),type:"button","aria-label":r,onClick:e.onClick}),o.a.createElement("span",{className:"news-card-btn__popup news-card-btn__popup_hidden news-card-btn__popup_shown"},n))};t(42);var w=function(e){var a=Object(c.g)().pathname;return o.a.createElement("li",{className:"news-card tap-highlight"},o.a.createElement("img",{className:"news-card__photo",src:e.photo,alt:"".concat(e.title,".")}),"/saved-news"===a&&o.a.createElement("span",{className:"news-card__tag"},e.tagText),o.a.createElement(N,null),o.a.createElement("div",{className:"news-card__container"},o.a.createElement("p",{className:"news-card__date"},e.date),o.a.createElement("h2",{className:"news-card__title"},e.title),o.a.createElement("p",{className:"news-card__text"},e.text),o.a.createElement("p",{className:"news-card__src"},e.src)))},k=t(20),y=t.n(k),C=t(21),x=t.n(C),O=t(22),S=t.n(O);t(43);var I=function(){return o.a.createElement("ul",{className:"news-card-list"},o.a.createElement(w,{photo:y.a,tagText:"\u041f\u0440\u0438\u0440\u043e\u0434\u0430",date:"2\xa0\u0430\u0432\u0433\u0443\u0441\u0442\u0430, 2019",title:"\u041d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u0434\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\xa0\u2014 \u043f\u0430\u0440\u043a\u0438",text:"\u0412\xa02016 \u0433\u043e\u0434\u0443 \u0410\u043c\u0435\u0440\u0438\u043a\u0430 \u043e\u0442\u043c\u0435\u0447\u0430\u043b\u0430 \u0432\u0430\u0436\u043d\u044b\u0439 \u044e\u0431\u0438\u043b\u0435\u0439: \u0441\u0442\u043e \u043b\u0435\u0442 \u043d\u0430\u0437\u0430\u0434 \u0437\u0434\u0435\u0441\u044c \u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0430\u0440\u043a\u043e\u0432\xa0\u2014 \u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c\u044b\u0445 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0439, \u0433\u0434\u0435 \u0438\xa0\u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043a\u0430\u0436\u0434\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u043e\u0431\u0449\u0438\u0442\u044c\u0441\u044f \u043a\xa0\u043f\u0440\u0438\u0440\u043e\u0434\u0435.",src:"\u041b\u0435\u043d\u0442\u0430.\u0440\u0443"}),o.a.createElement(w,{photo:x.a,tagText:"\u041f\u0440\u0438\u0440\u043e\u0434\u0430",date:"2\xa0\u0430\u0432\u0433\u0443\u0441\u0442\u0430, 2019",title:"\u041b\u0435\u0441\u043d\u044b\u0435 \u043e\u0433\u043e\u043d\u044c\u043a\u0438: \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u043e\u0434\u043d\u043e\u0439 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438",text:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444 \u043e\u0442\u0432\u043b\u0435\u043a\u043b\u0430\u0441\u044c \u043e\u0442\xa0\u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u044f \u0441\u0443\u0440\u043e\u0432\u043e\u0439 \u043f\u043e\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u041c\u0435\u043a\u0441\u0438\u043a\u0438, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043f\u0435\u0447\u0430\u0442\u043b\u0435\u0442\u044c \u0443\u0441\u043a\u043e\u043b\u044c\u0437\u0430\u044e\u0449\u0443\u044e \u043a\u0440\u0430\u0441\u043e\u0442\u0443 \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437\xa0\u043c\u0435\u0441\u0442\u043d\u044b\u0445 \u0447\u0443\u0434\u0435\u0441 \u043f\u0440\u0438\u0440\u043e\u0434\u044b.",src:"\u041c\u0435\u0434\u0443\u0437\u0430"}),o.a.createElement(w,{photo:S.a,tagText:"\u041f\u0440\u0438\u0440\u043e\u0434\u0430",date:"2\xa0\u0430\u0432\u0433\u0443\u0441\u0442\u0430, 2019",title:"\xab\u041f\u0435\u0440\u0432\u043e\u0437\u0434\u0430\u043d\u043d\u0430\u044f \u0442\u0430\u0439\u0433\u0430\xbb: \u043d\u043e\u0432\u044b\u0439 \u0444\u043e\u0442\u043e\u043f\u0440\u043e\u0435\u043a\u0442 \u0418\u0433\u043e\u0440\u044f \u0428\u043f\u0438\u043b\u0435\u043d\u043a\u0430",text:"\u0417\u043d\u0430\u043c\u0435\u043d\u0438\u0442\u044b\u0439 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444 \u0441\u043d\u0438\u043c\u0430\u0435\u0442 \u043f\u0435\u0440\u0432\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0435 \u043b\u0435\u0441\u0430 \u0420\u043e\u0441\u0441\u0438\u0438, \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u0442\u044c \u043e\xa0\u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0438\u0445\xa0\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f. \u0412\xa0\u044d\u0442\u043e\u0442 \u0440\u0430\u0437 \u043e\u043d\xa0\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b\u0441\u044f \u0432\xa0\u0414\u0432\u0438\u043d\u0441\u043a\u043e-\u041f\u0438\u043d\u0435\u0436\u0441\u043a\u0443\u044e \u0442\u0430\u0439\u0433\u0443, \u0433\u0434\u0435...",src:"\u0420\u0438\u0430"}))};t(44);var j=function(e){return o.a.createElement("button",{className:"show-more tap-highlight",type:"button",onClick:e.onShowMore},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435")};t(45);var M=function(){return o.a.createElement("section",{className:"search-result"},o.a.createElement("h3",{className:"search-result__title"},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430"),o.a.createElement(I,null),o.a.createElement(j,null))};t(46);var L=function(e){return o.a.createElement("section",{className:"preloader"},e.children,o.a.createElement("p",{className:"preloader__subtitle"},e.subTitle))};t(47);var T=function(){return o.a.createElement(L,{children:o.a.createElement("div",{className:"preloader__spinner"}),subTitle:"\u0418\u0434\u0435\u0442 \u043f\u043e\u0438\u0441\u043a \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439..."})},F=t(23),P=t.n(F);t(48);var V=function(){return o.a.createElement(L,{children:o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{className:"preloader__logo",src:P.a,alt:"\u041b\u0443\u043f\u0430 \u0441 \u0433\u0440\u0443\u0441\u0442\u043d\u044b\u043c \u0441\u043c\u0430\u0439\u043b\u0438\u043a\u043e\u043c \u0432\u043d\u0443\u0442\u0440\u0438."}),o.a.createElement("h3",{className:"preloader__title"},"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\xa0\u043d\u0430\u0439\u0434\u0435\u043d\u043e")),subTitle:"\u041a\xa0\u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u043f\u043e\xa0\u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\xa0\u043d\u0430\u0439\u0434\u0435\u043d\u043e."})};var q=function(){return o.a.createElement("main",null,o.a.createElement(T,null),o.a.createElement(M,null),o.a.createElement(V,null),o.a.createElement(f,null))};t(49);var A=function(){return o.a.createElement("section",{className:"saved-result"},o.a.createElement(I,null))};var B=function(){return o.a.createElement("main",null,o.a.createElement(A,null))},J=t(24),W=t.n(J),$=t(25),z=t.n($);t(50);var Z=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9\xa02020 NewsExplorer, Powered by News API"),o.a.createElement("nav",{className:"footer__navigation"},o.a.createElement("div",null,o.a.createElement(i.b,{to:"/",className:"footer__link opacity tap-highlight"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),o.a.createElement("a",{className:"footer__link opacity tap-highlight",href:"https://praktikum.yandex.ru",target:"_blank"},"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c")),o.a.createElement("div",null,o.a.createElement("a",{className:"footer__logo-link opacity tap-highlight",href:"https://github.com/Vooooodoo",target:"_blank"},o.a.createElement("img",{className:"footer__logo footer__logo_type_github",src:W.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0413\u0438\u0442\u0445\u0430\u0431."})),o.a.createElement("a",{className:"footer__logo-link opacity tap-highlight",href:"https://www.facebook.com/",target:"_blank"},o.a.createElement("img",{className:"footer__logo footer__logo_type_facebook",src:z.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0424\u044d\u0439\u0441\u0431\u0443\u043a."})))))};t(51);var D=function(e){return o.a.createElement("div",{id:e.id,className:"popup ".concat(e.isOpen?"popup_opened":"popup_closed")},o.a.createElement("form",{name:e.id.slice(0,e.id.indexOf("-")),className:"popup__form-container",onSubmit:e.onSubmit,noValidate:!0},o.a.createElement("h3",{className:"popup__form-title"},e.title),o.a.createElement("fieldset",{className:"popup__fieldset"},o.a.createElement("label",{for:"popup-email-input",className:"popup__input-label"},"Email"),o.a.createElement("input",{id:"popup-email-input",name:"email",className:"popup__input",onChange:e.onEmailChange,value:e.email,type:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443",minLength:"2",maxLength:"40",required:!0}),o.a.createElement("span",{className:"popup__input-error popup__input-error_type_validation popup__input-error_hidden ".concat(e.emailInputErrClass)},e.emailInputErrMessage),o.a.createElement("label",{for:"popup-password-input",className:"popup__input-label"},"\u041f\u0430\u0440\u043e\u043b\u044c"),o.a.createElement("input",{id:"popup-password-input",name:"password",className:"popup__input",onChange:e.onPassChange,value:e.password,type:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",minLength:"8",maxLength:"40",required:!0}),o.a.createElement("span",{className:"popup__input-error popup__input-error_type_validation popup__input-error_hidden ".concat(e.passInputErrClass)},e.passInputErrMessage),"registration-popup"===e.id&&o.a.createElement(o.a.Fragment,null,o.a.createElement("label",{for:"popup-name-input",className:"popup__input-label"},"\u0418\u043c\u044f"),o.a.createElement("input",{id:"popup-name-input",name:"name",className:"popup__input",onChange:e.onNameChange,value:e.name,type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0451 \u0438\u043c\u044f",minLength:"2",maxLength:"40",pattern:"^[\u0410-\u042f\u0430-\u044f\u0401\u0451a-zA-Z\\s\\-]+$",required:!0}),o.a.createElement("span",{className:"popup__input-error popup__input-error_type_validation popup__input-error_hidden ".concat(e.nameInputErrClass)},e.nameInputErrMessage)),o.a.createElement("span",{className:"popup__input-error popup__input-error_type_registration popup__input-error_hidden"},"\u0422\u0430\u043a\u043e\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0436\u0435 \u0435\u0441\u0442\u044c")),o.a.createElement("button",{className:"popup__submit tap-highlight ".concat(e.isFormValid?"popup__submit_valid":"popup__submit_invalid"),type:"submit"},e.btnText),o.a.createElement("button",{className:"popup__close opacity tab tap-highlight",type:"button","aria-label":e.ariaLabel,onClick:e.onClose}),o.a.createElement("div",{className:"popup__wrapper"},o.a.createElement("span",{className:"popup__text"},"\u0438\u043b\u0438"),o.a.createElement("button",{className:"popup__link opacity tap-highlight tab",type:"button",onClick:e.onClick},e.linkText))))};var G=function(e){var a={errorClass:"",errorMessage:""},t=o.a.useState(""),n=Object(s.a)(t,2),r=n[0],l=n[1],i=o.a.useState(""),c=Object(s.a)(i,2),p=c[0],u=c[1],_=o.a.useState(a),m=Object(s.a)(_,2),g=m[0],d=m[1],h=o.a.useState(a),b=Object(s.a)(h,2),E=b[0],v=b[1],f=o.a.useState(!1),N=Object(s.a)(f,2),w=N[0],k=N[1],y=o.a.useState(!1),C=Object(s.a)(y,2),x=C[0],O=C[1],S=o.a.useState(!1),I=Object(s.a)(S,2),j=I[0],M=I[1];return o.a.useEffect((function(){d(a),v(a),l(""),u(""),k(!1),O(!1)}),[e.isOpen]),o.a.useEffect((function(){M(!(!w||!x))}),[w,x]),o.a.createElement(D,{id:"login-popup",title:"\u0412\u0445\u043e\u0434",btnText:"\u0412\u043e\u0439\u0442\u0438",ariaLabel:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443 \u0432\u0445\u043e\u0434\u0430.",linkText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",email:r,password:p,emailInputErrClass:g.errorClass,emailInputErrMessage:g.errorMessage,passInputErrClass:E.errorClass,passInputErrMessage:E.errorMessage,isOpen:e.isOpen,isFormValid:j,onClose:e.onClose,onClick:e.onClick,onEmailChange:function(e){l(e.target.value),e.target.validity.valid?(d(a),k(!0)):(d({errorClass:"popup__input-error_shown",errorMessage:e.target.validationMessage}),k(!1))},onPassChange:function(e){u(e.target.value),e.target.validity.valid?(v(a),O(!0)):(v({errorClass:"popup__input-error_shown",errorMessage:e.target.validationMessage}),O(!1))}})};var H=function(e){var a={errorClass:"",errorMessage:""},t=o.a.useState(""),n=Object(s.a)(t,2),r=n[0],l=n[1],i=o.a.useState(""),c=Object(s.a)(i,2),p=c[0],u=c[1],_=o.a.useState(""),m=Object(s.a)(_,2),g=m[0],d=m[1],h=o.a.useState(a),b=Object(s.a)(h,2),E=b[0],v=b[1],f=o.a.useState(a),N=Object(s.a)(f,2),w=N[0],k=N[1],y=o.a.useState(a),C=Object(s.a)(y,2),x=C[0],O=C[1],S=o.a.useState(!1),I=Object(s.a)(S,2),j=I[0],M=I[1],L=o.a.useState(!1),T=Object(s.a)(L,2),F=T[0],P=T[1],V=o.a.useState(!1),q=Object(s.a)(V,2),A=q[0],B=q[1],J=o.a.useState(!1),W=Object(s.a)(J,2),$=W[0],z=W[1];return o.a.useEffect((function(){v(a),k(a),O(a),l(""),u(""),d(""),M(!1),P(!1),B(!1)}),[e.isOpen]),o.a.useEffect((function(){z(!!(j&&F&&A))}),[j,F,A]),o.a.createElement(D,{id:"registration-popup",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",btnText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",ariaLabel:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438.",linkText:"\u0412\u043e\u0439\u0442\u0438",email:r,password:p,name:g,emailInputErrClass:E.errorClass,emailInputErrMessage:E.errorMessage,passInputErrClass:w.errorClass,passInputErrMessage:w.errorMessage,nameInputErrClass:x.errorClass,nameInputErrMessage:x.errorMessage,isOpen:e.isOpen,isFormValid:$,onClose:e.onClose,onClick:e.onClick,onEmailChange:function(e){l(e.target.value),e.target.validity.valid?(v(a),M(!0)):(v({errorClass:"popup__input-error_shown",errorMessage:e.target.validationMessage}),M(!1))},onPassChange:function(e){u(e.target.value),e.target.validity.valid?(k(a),P(!0)):(k({errorClass:"popup__input-error_shown",errorMessage:e.target.validationMessage}),P(!1))},onNameChange:function(e){d(e.target.value),e.target.validity.valid?(O(a),B(!0)):(O({errorClass:"popup__input-error_shown",errorMessage:e.target.validationMessage}),B(!1))}})};t(52);var K=function(e){return o.a.createElement("div",{className:"popup ".concat(e.isOpen?"popup_opened":"popup_closed")},o.a.createElement("div",{className:"popup__form-container"},o.a.createElement("h3",{className:"popup__form-title"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d!"),o.a.createElement("button",{className:"popup__tooltip-link opacity tap-highlight tab",type:"button",onClick:e.onClick},"\u0412\u043e\u0439\u0442\u0438"),o.a.createElement("button",{className:"popup__close opacity tab tap-highlight",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f \u0441 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u043e\u0439.",onClick:e.onClose})))};var Q=function(){var e=o.a.useState(!1),a=Object(s.a)(e,2),t=a[0],n=a[1],r=o.a.useState(!1),l=Object(s.a)(r,2),i=l[0],p=l[1],u=o.a.useState(!1),_=Object(s.a)(u,2),m=_[0],g=_[1],d=o.a.useState(!0),E=Object(s.a)(d,2),v=E[0],f=E[1],N=Object(c.f)();function w(){f(!1),N.push("/")}function k(){n(!1),p(!1),g(!1)}function y(){k(),n(!0)}return o.a.useEffect((function(){function e(e){"Escape"===e.key&&k()}return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[t,i]),o.a.useEffect((function(){function e(e){e.target.classList.contains("popup")&&k()}return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[t,i]),o.a.createElement(o.a.Fragment,null,o.a.createElement(c.c,null,o.a.createElement(c.a,{exact:!0,path:"/"},o.a.createElement(h,{loggedIn:v,onSignOut:w,onSignIn:y}),o.a.createElement(q,null)),o.a.createElement(c.a,{path:"/saved-news"},o.a.createElement(b,{loggedIn:v,onSignOut:w}),o.a.createElement(B,null))),o.a.createElement(Z,null),o.a.createElement(G,{isOpen:t,onClose:k,onClick:function(){k(),p(!0)}}),o.a.createElement(H,{isOpen:i,onClose:k,onClick:y}),o.a.createElement(K,{isOpen:m,onClose:k,onClick:y}))};t(53),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,null,o.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[26,1,2]]]);
//# sourceMappingURL=main.585504e1.chunk.js.map