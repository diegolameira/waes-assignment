(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(31)},23:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),o=n(8),a=n.n(o),u=(n(23),n(3)),s=n(4),c=n(6),l=n(5),d=n(7),m=n(1),p=n(2);function h(){var e=Object(m.a)(["\n  padding: 0 10vw;\n  transition: padding-left .3s ease-in-out;\n  padding-left: ","vw;\n"]);return h=function(){return e},e}var f=Object(i.memo)(function(e){var t=e.title,n=e.body,i=e.hasSidebar;return r.a.createElement(g,{hasSidebar:i},r.a.createElement("h1",null,t),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:n}}))}),g=p.a.div(h(),function(e){return e.hasSidebar?25:10});function b(){var e=Object(m.a)(["\n  width: 30px;\n  height: 30px;\n  margin: 5px;\n  border-radius: 10px;\n  background-color: ",";\n"]);return b=function(){return e},e}function v(){var e=Object(m.a)(["\n  display: flex;\n"]);return v=function(){return e},e}var O=Object(i.memo)(function(e){var t=e.onColorChange;return r.a.createElement(j,null,["yellow","red","green"].map(function(e){return r.a.createElement(C,Object.assign({key:e,onClick:function(){return t(e)}},{color:e}))}))}),j=p.a.div(v()),C=p.a.div(b(),function(e){return e.color});function w(){var e=Object(m.a)(["\n  display: inline-block;\n  margin: 6px 4px;\n\n  span {\n    border-radius: 4px;\n    background-color: ",";\n    padding: 3px;\n  }\n"]);return w=function(){return e},e}function x(){var e=Object(m.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  transition: all .2s ease-in-out;\n  opacity: ",";\n  &:hover { opacity: 1;}\n  width: ","vw;\n  height: 100vh;\n  background: #efefef;\n  padding: 10px;\n"]);return x=function(){return e},e}var y=function(e){function t(){var e,n;Object(u.a)(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={color:null},n.filter=function(e,t){return e.filter(function(e){return!t||e.color===t}).sort(function(e,t){return t.range.endOffset-e.range.endOffset}).reverse()},n.setColor=function(e){return n.setState(function(t){return{color:t.color===e?null:e}})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.highlights,t=this.state.color,n=this.filter(e,t);return r.a.createElement(E,{highlights:e},r.a.createElement("h2",null,"Highlights"),r.a.createElement(O,{onColorChange:this.setColor}),n.map(function(e,t){var n=e.string,i=e.range,o=e.color;return r.a.createElement(q,{key:"".concat(t,"-").concat(i.endOffset),color:o},r.a.createElement("span",null,n))}))}}]),t}(i.PureComponent),E=p.a.div(x(),function(e){return e.highlights.length?.6:0},function(e){return e.highlights.length?20:0}),q=p.a.a(w(),function(e){return e.color});function S(){var e=Object(m.a)(["\n  transition: opacity .2s ease-in-out;\n  opacity: ",";\n  pointer-events: ",";\n  padding: 10px;\n  position: absolute;\n  top: ","px;\n  left: ","px;\n  background-color: ",';\n  border-radius: 10px;\n\n  /* bottom arrow */\n  &:after {\n    top: 100%;\n    left: 50%;\n    border: solid transparent;\n    content: " ";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n    border-top-color: ',";\n    border-width: 10px;\n    margin-left: -10px;\n  }\n"]);return S=function(){return e},e}var k=Object(i.memo)(function(e){var t=e.clientY,n=e.clientX,i=e.showTooltip,o=e.setColor;return r.a.createElement(T,{clientY:t,clientX:n,showTooltip:i},r.a.createElement(O,{onColorChange:o}))}),T=p.a.div.attrs({bgColor:"rgba(180,180,180,.9)",offsetX:60,offsetY:80})(S(),function(e){return e.showTooltip?1:0},function(e){return e.showTooltip?"all":"none"},function(e){return e.clientY-e.offsetY},function(e){return e.clientX-e.offsetX},function(e){return e.bgColor},function(e){return e.bgColor}),X=n(13),Y=n(10),A=function(e){function t(){var e,n;Object(u.a)(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={highlights:[],clientX:0,clientY:0,showTooltip:!1,latestColor:"yellow"},n.onMouseUp=function(e){var t=e.clientX,i=e.clientY,r=window.getSelection(),o=r.getRangeAt(0);if(r.empty(),o.endOffset-o.startOffset!==0){var a=document.createElement("span");a.setAttribute("style","background-color: ".concat(n.state.latestColor,";"));var u=document.createTextNode(o.toString());a.appendChild(u),o.deleteContents(),o.insertNode(a);var s={range:o,string:o.toString(),color:n.state.latestColor};n.setState(function(e){var r=e.highlights;e.latestColor;return{highlights:Object(Y.a)(r).concat([s]),clientX:t,clientY:i,showTooltip:!0,setColor:function(e){return n.setColor(a,e,s)}}})}else n.setState({showTooltip:!1})},n.setColor=function(e,t,i){n.setState(function(e){var n=e.highlights,r=n.indexOf(i);return{highlights:Object(Y.a)(n.slice(0,r)).concat([Object(X.a)({},i,{color:t})],Object(Y.a)(n.slice(r+1))),latestColor:t}},function(){return e.setAttribute("style","background-color: ".concat(t,";"))})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.children,t=this.state,n=this.onMouseUp;return e(Object(X.a)({},t,{onMouseUp:n}))}}]),t}(i.PureComponent),M=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(A,null,function(e){var t=e.highlights,n=e.onMouseUp,i=e.clientX,o=e.clientY,a=e.showTooltip,u=e.setColor;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{onMouseUp:n},r.a.createElement(f,Object.assign({},U,{hasSidebar:t.length}))),r.a.createElement(y,{highlights:t}),r.a.createElement(k,{clientX:i,clientY:o,showTooltip:a,setColor:u}))})}}]),t}(i.PureComponent),U={title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illa videamus, quae a te de amicitia dicta sunt. Iam id ipsum absurdum, maximum malum neglegi. Haeret in salebra. Quibus rebus vita consentiens virtutibusque respondens recta et honesta et constans et naturae congruens existimari potest. Experiamur igitur, inquit, etsi habet haec Stoicorum ratio difficilius quiddam et obscurius. Roges enim Aristonem, bonane ei videantur haec: vacuitas doloris, divitiae, valitudo; Hic quoque suus est de summoque bono dissentiens dici vere Peripateticus non potest. Duo Reges: constructio interrete. Nos quidem Virtutes sic natae sumus, ut tibi serviremus, aliud negotii nihil habemus. Gerendus est mos, modo recte sentiat. Sed quoniam et advesperascit et mihi ad villam revertendum est, nunc quidem hactenus; Cum id quoque, ut cupiebat, audivisset, evelli iussit eam, qua erat transfixus, hastam. A villa enim, credo, et: Si ibi te esse scissem, ad te ipse venissem. Nisi autem rerum natura perspecta erit, nullo modo poterimus sensuum iudicia defendere. Cum autem in quo sapienter dicimus, id a primo rectissime dicitur. Sit enim idem caecus, debilis. Pauca mutat vel plura sane; Ut in geometria, prima si dederis, danda sunt omnia. Quo studio Aristophanem putamus aetatem in litteris duxisse? Octavio fuit, cum illam severitatem in eo filio adhibuit, quem in adoptionem D. At ille non pertimuit saneque fidenter: Istis quidem ipsis verbis, inquit;"},I=document.getElementById("root");a.a.render(r.a.createElement(M,null),I)}},[[18,2,1]]]);
//# sourceMappingURL=main.e612f2fc.chunk.js.map