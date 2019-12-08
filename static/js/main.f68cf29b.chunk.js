(this["webpackJsonpworld-handicap-calculator"]=this["webpackJsonpworld-handicap-calculator"]||[]).push([[0],{111:function(e,t,a){e.exports=a(136)},116:function(e,t,a){},117:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),o=a.n(l),i=(a(116),a(79));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(138),s=a(212),u=a(59),m=a(87),d=Object(m.a)({palette:{primary:{main:"#217325"},secondary:{main:"#19857b"},error:{main:u.a.A400},background:{default:"#f5f5f5"}}});o.a.render(r.a.createElement(s.a,{theme:d},r.a.createElement(c.a,null),r.a.createElement(i.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,a){"use strict";t.a={NUM_ROUNDS:20,GROSS:"gross",CSS:"css",DEFAULT_CSS:0,SSS:"sss",SLOPE:"slope",DEFAULT_SLOPE:125,SLOPE_DIVISOR:113,SESSION_STORAGE_KEY:"handicapdata",RESULT:"result",NOTE:"note"}},79:function(e,t,a){"use strict";(function(e){var n=a(19),r=a(0),l=a.n(r),o=(a(117),a(80)),i=a(88),c=a(84),s=a(85),u=a(7),m=Object(s.a)(u.a.SESSION_STORAGE_KEY,e.sessionStorage);t.a=function(){var e=m({}),t=Object(n.a)(e,2),a=t[0],s=t[1],u=Object(r.useState)(a.whsHandicap),d=Object(n.a)(u,2),f=d[0],S=d[1];return l.a.createElement("div",{className:"App"},l.a.createElement(o.a,{whsHandicap:f},l.a.createElement(c.a,null),l.a.createElement(i.a,{whsHandicap:f,setWHSHandicap:S,storedData:a,setStoredData:s})))}}).call(this,a(63))},80:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),r=a.n(n),l=a(139),o=a(90),i=a(23),c=a(138),s=a(137),u=a(95),m=a(141),d=a(58),f=a(91),S=a(81),p=a.n(S),h=Object(d.a)((function(e){return{root:{flexGrow:1},icon:{height:e.mixins.toolbar.minHeight,marginRight:e.spacing(1)}}}));function g(e){var t=e.children,a=Object(s.a)({disableHysteresis:!0,threshold:0});return r.a.cloneElement(t,{elevation:a?4:0})}function b(e){var t=h();return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null),r.a.createElement(g,e,r.a.createElement(l.a,null,r.a.createElement(o.a,null,r.a.createElement("img",{className:t.icon,src:p.a}),r.a.createElement(i.a,{variant:"h6"},"World Handicap Calculator"),r.a.createElement(i.a,{className:t.root,variant:"h6"}),e.whsHandicap?r.a.createElement(i.a,{variant:"subtitle1"},"WHS Handicap: "+e.whsHandicap):null))),r.a.createElement(o.a,null),r.a.createElement(m.a,null,r.a.createElement(u.a,{my:2},r.a.createElement("div",{className:t.root},r.a.createElement(f.a,{container:!0,spacing:3},e.children)))))}},81:function(e,t){e.exports="data:image/png;base64,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"},84:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var n=a(0),r=a.n(n),l=a(58),o=a(96),i=a(92),c=a(93),s=a(23),u=a(66),m=a.n(u),d=a(91),f=a(95),S=a(147),p=a(149),h=a(37),g=a(148),b=a(94),E=Object(l.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},expansionDetailsTable:{padding:0,paddingBottom:"24px"}}}));function v(e,t,a){return{numDiffs:e,diffsInCalc:t,adjustment:a}}var O=[v("3","Lowest 1","-2.0"),v("4","Lowest 1","-1.0"),v("5","Lowest 1","N/A"),v("6","Average of lowest 2","-1.0"),v("7 or 8","Average of lowest 2","N/A"),v("9 to 11","Average of lowest 3","N/A"),v("12 to 14","Average of lowest 4","N/A"),v("15 to 16","Average of lowest 5","N/A"),v("17 to 18","Average of lowest 6","N/A"),v("19","Average of lowest 7","N/A"),v("20","Average of lowest 8","N/A")];function y(){var e=E();return r.a.createElement(d.a,{item:!0,xs:12,lg:6},r.a.createElement(o.a,{defaultExpanded:!0},r.a.createElement(i.a,{expandIcon:r.a.createElement(m.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(s.a,{className:e.heading},"Handicap Calculations")),r.a.createElement(c.a,null,r.a.createElement(f.a,{textAlign:"left",m:1},r.a.createElement(s.a,{variant:"body1",gutterBottom:!0},"In order to transition from CONGU to WHS handicaps, all players' current handicap records will be reprocessed using the WHS principles. The calculation will identify the best 8 of the last 20 Gross Scores. The Gross Scores will be transformed into score differentials using the following formula: ",r.a.createElement("br",null),r.a.createElement("br",null),"Score Differential = 113/slope * (adjusted gross score - CR - CSS) ",r.a.createElement("br",null),r.a.createElement("br",null),"Once the score differentials are calulated the average of the best 8 will determine your WHS Handicap. If you do not have 20 previous gross scores, your WHS handicap will be calculated based off the transition table below.")))),r.a.createElement(o.a,null,r.a.createElement(i.a,{expandIcon:r.a.createElement(m.a,null),"aria-controls":"panel2a-content",id:"panel2a-header"},r.a.createElement(s.a,{className:e.heading},"Transition Table")),r.a.createElement(c.a,{className:e.expansionDetailsTable},r.a.createElement(S.a,{className:e.table,size:"small","aria-label":"a dense table"},r.a.createElement(g.a,null,r.a.createElement(b.a,null,r.a.createElement(h.a,{align:"center"},"Noumber of Rounds"),r.a.createElement(h.a,{align:"center"},"Rounds used in calculation"),r.a.createElement(h.a,{align:"center"},"Adjustment"))),r.a.createElement(p.a,null,O.map((function(e){return r.a.createElement(b.a,{key:e.name},r.a.createElement(h.a,{align:"center",component:"th",scope:"row"},e.numDiffs),r.a.createElement(h.a,{align:"center"},e.diffsInCalc),r.a.createElement(h.a,{align:"center"},e.adjustment))})))))))}},88:function(e,t,a){"use strict";var n=a(54),r=a(19),l=a(0),o=a.n(l),i=a(91),c=a(7),s=function(e){var t=u(e);return d(t)},u=function(e){return Object.keys(e).filter((function(t){return t.startsWith(c.a.GROSS)&&""!==e[t]})).map((function(t){return m(e[t],e[t.replace(c.a.GROSS,c.a.CSS)],e[c.a.SLOPE],e[c.a.SSS])}))},m=function(e,t,a,n){return S(c.a.SLOPE_DIVISOR/(a||c.a.DEFAULT_SLOPE)*(e-n-(t?t-n:c.a.DEFAULT_CSS)),1)},d=function(e){e.sort(p);var t=e.length;return t>=3?3===t?e[0]-2:4===t?e[0]-1:5===t?e[0]:6===t?f([e[0],e[1]])-1:f(t<=8?[e[0],e[1]]:t<=11?[e[0],e[1],e[2]]:t<=14?[e[0],e[1],e[2],e[3]]:t<=16?[e[0],e[1],e[2],e[3],e[4]]:t<=18?[e[0],e[1],e[2],e[3],e[4],e[5]]:19===t?[e[0],e[1],e[2],e[3],e[4],e[5],e[6]]:[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]]):0},f=function(e){return e.length?e.reduce((function(e,t){return e+t}))/e.length:0};function S(e,t){var a=Math.pow(10,t||0);return Math.round(e*a)/a}var p=function(e,t){return e-t},h=a(82),g=a(58),b=(a(153),a(215),a(142),a(143),a(151),a(203));function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=function(e){var t=e.formState,a=e.text,n=e.name,r=e.label,l=e.validate,i=e.className,c=e.fullWidth,s=e.required,u=e.variant,m=e.endAdornment,d=e.margin,f=void 0!==t.validity[n]&&!t.validity[n];return o.a.createElement(b.a,{InputProps:v({},a({name:n,validateOnBlur:!0,validate:l}),{id:n,name:n,endAdornment:m}),className:i,fullWidth:c,required:s,error:f,label:r,margin:d,variant:u,helperText:t.errors[n],FormHelperTextProps:{hidden:!f}})},y=a(205),A=a(204),N=a(146),w=a(83),j=a.n(w),k=a(23),C=a(95),R=(a(127),Object(g.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{maxWidth:"210px",marginLeft:e.spacing(1),marginRight:e.spacing(1),marginTop:e.spacing(1)},texFieldContainer:{display:"flex",justifyContent:"center"},button:{marginTop:e.spacing(2),marginLeft:e.spacing(1)},errorText:{marginTop:e.spacing(1),marginBottom:e.spacing(1),color:e.palette.error.main}}}))),W=function(e){var t=e.roundNumber,a=e.formState,n=e.inputs,r=e.classes,l=e.validateField,s=(e.onclickInfoButton,e.InfoButton);return o.a.createElement(i.a,{className:r.texFieldContainer,item:!0,sm:12},o.a.createElement(O,{formState:a,text:n.text,name:c.a.GROSS+t,label:"Round ".concat(t," Gross"),fullWidth:!1,required:!1,validate:function(e){return l(e)},className:r.textField,variant:"outlined",margin:"dense"}),o.a.createElement(O,{formState:a,text:n.text,name:c.a.CSS+t,label:"CSS",fullWidth:!1,required:!1,validate:function(e){return l(e)},className:r.textField,variant:"outlined",endAdornment:o.a.createElement(s,{type:c.a.CSS}),margin:"dense"}))};function J(e){var t=e.formState,a=e.inputs,n=e.validateField,r=e.onClickCalculate,l=e.onclickInfoButton,s=e.errors,u=R(),m=function(e){var t=e.type;return o.a.createElement(A.a,{position:"end"},o.a.createElement(N.a,{style:{color:"#B2B2B2"},"aria-label":"show field info",onClick:function(){return l(t)}},o.a.createElement(j.a,null)))};return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{className:u.container,autoComplete:!1},o.a.createElement(i.a,{container:!0},s.length>0?o.a.createElement(i.a,{style:{width:"100%"},className:u.texFieldContainer,item:!0,sm:12},o.a.createElement(C.a,{className:u.errorText},s.map((function(e){return o.a.createElement(k.a,null,e)})))):null,o.a.createElement(i.a,{className:u.texFieldContainer,item:!0,sm:12},o.a.createElement(O,{formState:t,text:a.text,name:c.a.SSS,label:"CR or SSS",fullWidth:!1,required:!0,validate:function(e){return n(e)},className:u.textField,variant:"outlined",margin:"dense",endAdornment:o.a.createElement(m,{type:c.a.SSS})}),o.a.createElement(O,{formState:t,text:a.text,name:c.a.SLOPE,label:"Slope",fullWidth:!1,required:!1,validate:function(e){return n(e)},className:u.textField,variant:"outlined",margin:"dense",endAdornment:o.a.createElement(m,{type:c.a.SLOPE})})),o.a.createElement(i.a,{item:!0,sm:12}),Object.keys(t.values).filter((function(e){return e.startsWith(c.a.GROSS)})).map((function(e,r){return o.a.createElement(W,{roundNumber:r+1,formState:t,inputs:a,classes:u,validateField:n,onclickInfoButton:l,InfoButton:m})}))),o.a.createElement(i.a,{style:{width:"100%"},className:u.texFieldContainer,item:!0,sm:12},o.a.createElement(y.a,{variant:"contained",color:"primary",onClick:function(e){r(e,t.values)},className:u.button},"Calculate"))))}var H={sss:"Course Rating (CR) or Standard Scratch (SSS) is the number of strokes a scratch golfer \n        is expected to score around the course under normal mid-season conditions. The CR or SSS can \n        usually be found on your clubs scorecard.",slope:'A "Slope Rating" is the USGA\'s mark that indicates the measurement of the relative difficulty of a course for\n        players who are not scratch golfers compared to the USGA Course Rating (e.g., compared to the difficulty of a\n        course for scratch golfers). A Slope Rating is computed from the difference between the Bogey Rating and\n        the USGA Course Rating. The lowest Slope Rating is 55 and the highest is 155. A golf course of standard playing\n        difficulty has a Slope Rating of 113. If a course does not yet have a slope rating, an average slope rating \n        of 125 will be used for calculation purposes',css:"The Competition Standard Scratch (CSS) is a calculation made on any given day depending solely on \n        the scores of the players taking part and is an indication of how diffucult the course played. CSS can range from 1 lower than SSS to 3\n        higher. If no CSS is provided for a round it will default to the course SSS",note:"Please note these calculations are based off various WHS documentation and are not 100% accurate. The purpose of this \n        calculator is to give an indication of what your new World Handicap System (WHS) handicap will be when it is moved over to the new system."},x=a(214),D=a(211),U=a(209),L=a(210),P=a(208),B=a(207),G=a(206),T=function(){return o.a.createElement(i.a,{style:{textAlign:"center",height:"100%"},container:!0,direction:"column",justify:"center"},o.a.createElement(i.a,{item:!0},o.a.createElement(G.a,null)))},I=o.a.forwardRef((function(e,t){return o.a.createElement(B.a,Object.assign({direction:"up",ref:t},e))}));function Y(e){var t=e.open,a=e.setOpen,n=e.dialogInfo,i=Object(l.useState)(!0),s=Object(r.a)(i,2),u=s[0],m=s[1],d=Object(l.useState)(!1),f=Object(r.a)(d,2),S=f[0],p=f[1],h=function(){n.type===c.a.RESULT&&u?(p(!0),setTimeout((function(){p(!1),m(!1)}),1e3)):(a(!1),setTimeout((function(){m(!0)}),500))};return o.a.createElement(x.a,{open:t,TransitionComponent:I,keepMounted:!0,onClose:h,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},o.a.createElement(P.a,{id:"alert-dialog-slide-title"},n.title),o.a.createElement(U.a,null,n.type!==c.a.RESULT?o.a.createElement(L.a,{id:"alert-dialog-slide-description"},n.info):u?o.a.createElement(L.a,{id:"alert-dialog-slide-description"},S?o.a.createElement(T,null):H[c.a.NOTE]):o.a.createElement(L.a,{id:"alert-dialog-slide-description",variant:"h4",align:"center"},n.info)),o.a.createElement(D.a,null,S?null:o.a.createElement(y.a,{onClick:h,color:"primary"},"OK")))}function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function V(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a.d(t,"a",(function(){return q}));var X=function(e){if(!Object.keys(e).length>0){for(var t={},a=c.a.NUM_ROUNDS,n=1;n<=a;n++)t[c.a.GROSS+n]="",t[c.a.CSS+n]="";return t}return e},Z=function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})};function q(e){var t=e.whsHandicap,a=e.setWHSHandicap,n=e.storedData,u=e.setStoredData,m=Object(h.a)(X(n)),d=Object(r.a)(m,2),f=d[0],p=d[1],g=Object(l.useState)(!1),b=Object(r.a)(g,2),E=b[0],v=b[1],O=Object(l.useState)([]),y=Object(r.a)(O,2),A=y[0],N=y[1],w=Object(l.useState)({title:"",info:"",type:""}),j=Object(r.a)(w,2),k=j[0],C=j[1],R=function(e){switch(e){case c.a.SSS:C({title:"CR or SSS",info:H[c.a.SSS],type:e});break;case c.a.SLOPE:C({title:"Slope",info:H[c.a.SLOPE],type:e});break;case c.a.CSS:C({title:"CSS",info:H[c.a.CSS],type:e});break;case c.a.RESULT:C({title:"WHS Handicap",info:t,type:e})}v(!0)};Object(l.useEffect)((function(){t&&n.whsHandicap!==t&&(R(c.a.RESULT),u(V({},n,{whsHandicap:t})),gtag&&gtag("event","calculate_success",{event_category:"calculate",event_label:"Result: "+t,value:1}))}),[t]);var W=function(){var e=!0,t=[];return Object.keys(f.values).filter((function(e){return e.startsWith(c.a.GROSS)&&""!==f.values[e]})).length<3?(t.push("*Minimun of 3 rounds required."),e=!1):Object.keys(f.values).forEach((function(a){var n=f.values[a];if(a===c.a.SSS&&(n||(f.setFieldError(a,"*Required"),e=!1)),a===c.a.SLOPE&&n&&(isNaN(n)?(f.setFieldError(a,"Not a number"),e=!1):(n<55||n>155)&&(f.setFieldError(a,"Must be between 55 - 155"),t.push("*Slope must be between 55 and 155."),e=!1)),a.startsWith(c.a.GROSS)&&isNaN(n)&&(f.setFieldError(a,"Not a number"),e=!1),a.startsWith(c.a.CSS)){var r=f.values[c.a.SSS];n&&(isNaN(n)?(f.setFieldError(a,"Not a number"),e=!1):r&&(n<r-1||n>r+3)&&(f.setFieldError(a,"SSS -1/+3"),t.push("*CSS must equal the SSS -1/+3."),e=!1))}})),N(t),e};return o.a.createElement(i.a,{item:!0,xs:12,lg:6},o.a.createElement("div",{id:"back-to-top-anchor"}),o.a.createElement(Y,{open:E,setOpen:v,dialogInfo:k}),o.a.createElement(J,{formState:f,inputs:p,validateField:function(e){return isNaN(e)?"Not a number":(u(V({},n,{},f.values)),!0)},onClickCalculate:function(e,r){W()?(a(S(s(r),1)),t&&(Z(e),R(c.a.RESULT),u(V({},n,{whsHandicap:t})),gtag&&gtag("event","calculate_success",{event_category:"calculate",event_label:"Result: "+t,value:1}))):(gtag&&gtag("event","calculate_failed",{event_category:"calculate",event_label:A.join(", "),value:0}),Z(e))},onclickInfoButton:R,errors:A}))}}},[[111,1,2]]]);
//# sourceMappingURL=main.f68cf29b.chunk.js.map