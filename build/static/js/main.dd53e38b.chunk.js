(this["webpackJsonpmern-shopping-list"]=this["webpackJsonpmern-shopping-list"]||[]).push([[0],{26:function(e,a,t){e.exports={app:"App_app__2L8sw",container:"App_container__uDKs_"}},35:function(e,a,t){},53:function(e,a,t){e.exports=t(63)},58:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n,r=t(0),c=t.n(r),l=t(6),o=t.n(l),u=(t(58),t(10)),s=t(22),i=t.n(s),m=t(31),p=t(11),E=t(26),d=t.n(E),v=t(101),f=t(44);!function(e){e.EASY="easy",e.MEDIUM="medium",e.HARD="hard"}(n||(n={}));var b=function(){var e=Object(m.a)(i.a.mark((function e(a,t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://opentdb.com/api.php?amount=".concat(a,"&difficulty=").concat(t,"&type=multiple"),e.next=3,fetch(n);case 3:return e.next=5,e.sent.json();case 5:return r=e.sent,e.abrupt("return",r.results.map((function(e){return Object(f.a)({},e,{answers:y([].concat(Object(u.a)(e.incorrect_answers),[e.correct_answer]))})})));case 7:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),y=function(e){return Object(u.a)(e).sort((function(){return Math.random()-.5}))},h=t(35),O=t.n(h),g=t(91),j=t(92),w=t(95),S=t(96),A=t(97),N=t(98),_=function(e){var a=e.question,t=e.answers,n=e.callback,r=e.userAnswer,l=e.questionNum,o=e.totalQuestions,u=Object(g.a)("(max-width: 420px)"),s=function(e){return e===(null===r||void 0===r?void 0:r.correctAnswer)?{color:"green",borderColor:"green"}:e!==(null===r||void 0===r?void 0:r.correctAnswer)&&void 0!==r?{color:"red",borderColor:"red"}:void 0};return c.a.createElement(j.a,{className:O.a.question_card,style:u?{overflow:"scroll"}:void 0},c.a.createElement(w.a,null,c.a.createElement(S.a,{className:O.a.number},l," / ",o),c.a.createElement(S.a,null,c.a.createElement("p",{dangerouslySetInnerHTML:{__html:a}})),c.a.createElement(A.a,{style:u?{display:"flex",flexDirection:"column",alignItems:"center"}:void 0},t.map((function(e,a){return c.a.createElement("div",{key:a,className:O.a.buttons},c.a.createElement(N.a,{style:s(e),id:"button",variant:"outlined",disabled:!!r,value:e,onClick:n},c.a.createElement("span",{dangerouslySetInnerHTML:{__html:e}})))})))))},x=t(46),I=t(36),k=Object(x.a)({palette:{primary:{main:"#329D9C"},secondary:I.a}}),D=t(99),T=t(100),q=t(104),C=t(102),M=t(103),R=Object(D.a)({quiz_form:{display:"flex",flexDirection:"column",marginTop:"2em"},typography:{textAlign:"center",fontSize:"1.3rem"}}),U=function(){var e=R(),a=Object(r.useState)(10),t=Object(p.a)(a,2),l=t[0],o=t[1],s=Object(r.useState)(n.EASY),E=Object(p.a)(s,2),f=E[0],y=E[1],h=Object(r.useState)(!1),O=Object(p.a)(h,2),g=O[0],j=O[1],w=Object(r.useState)([]),A=Object(p.a)(w,2),x=A[0],I=A[1],D=Object(r.useState)(0),U=Object(p.a)(D,2),H=U[0],Q=U[1],L=Object(r.useState)([]),z=Object(p.a)(L,2),F=z[0],Y=z[1],Z=Object(r.useState)(0),B=Object(p.a)(Z,2),J=B[0],K=B[1],V=Object(r.useState)(!0),W=Object(p.a)(V,2),G=W[0],P=W[1],X=Object(r.useState)(0),$=Object(p.a)(X,2),ee=$[0],ae=$[1],te=function(){var e=Object(m.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),P(!1),e.next=4,b(l,f);case 4:a=e.sent,I(a),K(0),Y([]),Q(0),j(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(c.a.StrictMode,null,c.a.createElement(T.a,{theme:k},c.a.createElement("div",{className:d.a.app},c.a.createElement("div",{className:d.a.container},c.a.createElement("h1",null,"QUIZARD"),G?c.a.createElement(c.a.Fragment,null,c.a.createElement(S.a,{className:e.typography,variant:"h5"},"How far can your knowledge take you?"),c.a.createElement("form",{className:e.quiz_form},c.a.createElement(q.a,{shrink:!0,id:"difficulty"},"DIFFICULTY"),c.a.createElement(C.a,{labelId:"difficulty",id:"select-difficulty",defaultValue:f,value:f,onChange:function(e){return y(e.target.value)}},c.a.createElement(M.a,{value:n.EASY},"EASY"),c.a.createElement(M.a,{value:n.MEDIUM},"MEDIUM"),c.a.createElement(M.a,{value:n.HARD},"HARD")),c.a.createElement(q.a,{style:{marginTop:"1em"},shrink:!0,id:"total-questions"},"NUMBER OF QUESTIONS"),c.a.createElement(C.a,{labelId:"total-questions",id:"select-total-questions",defaultValue:l,value:l,onChange:function(e){return o(e.target.value)}},c.a.createElement(M.a,{value:5},"5"),c.a.createElement(M.a,{value:10},"10"),c.a.createElement(M.a,{value:15},"15"),c.a.createElement(M.a,{value:20},"20"),c.a.createElement(M.a,{value:25},"25"),c.a.createElement(M.a,{value:30},"30"),c.a.createElement(M.a,{value:35},"35"),c.a.createElement(M.a,{value:40},"40"),c.a.createElement(M.a,{value:45},"45"),c.a.createElement(M.a,{value:50},"50")),c.a.createElement(N.a,{style:{marginTop:"2em"},className:d.a.start,onClick:te,size:"medium",variant:"contained",color:"primary"},"START QUIZ"))):null,g&&c.a.createElement(c.a.Fragment,null,c.a.createElement(S.a,{variant:"h6",color:"secondary",style:{margin:"0.7em 0"}},"Preparing questions..."),c.a.createElement(v.a,{color:"secondary"})),F.length!==l||G?null:c.a.createElement(S.a,{className:e.typography,variant:"h5",color:"secondary"},J>ee?"NEW HIGHSCORE!":"WELL DONE!"),G||g?null:c.a.createElement(S.a,{className:d.a.score,variant:"h6",style:{marginTop:"3em"}},"SCORE: ",J),!g&&!G&&c.a.createElement(_,{questionNum:H+1,totalQuestions:l,question:x[H].question,answers:x[H].answers,userAnswer:F?F[H]:void 0,callback:function(e){if(!G){var a=e.currentTarget.value,t=x[H].correct_answer===a;t&&K((function(e){return e+1}));var n={answer:a,correct:t,correctAnswer:x[H].correct_answer};Y((function(e){return[].concat(Object(u.a)(e),[n])}))}}}),g||G||F.length!==H+1?null:c.a.createElement(N.a,{type:"submit",style:{marginTop:"1em"},variant:"contained",size:"large",color:"primary",className:d.a.next,onClick:function(e){e.preventDefault();var a=H+1;a===l?(P(!0),J>ee&&ae(J)):Q(a)}},F.length===l?"RETAKE QUIZ":"Next Question")))))};o.a.render(c.a.createElement(U,null),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.dd53e38b.chunk.js.map