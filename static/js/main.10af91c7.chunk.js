(this["webpackJsonptelefono-roto-frontend"]=this["webpackJsonptelefono-roto-frontend"]||[]).push([[0],{102:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},132:function(e,t,a){},161:function(e,t){},164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(62),s=a.n(c),i=(a(102),a(2)),o=a(3),u=a(4),A=a(5),l=a(16),m=a(13),p=a(1),d=a.n(p),g=a(8),f=a(23),h=a(63),E="https://telefono-roto.herokuapp.com/",v=a.n(h).a.create({baseURL:E}),b=function(){var e=Object(g.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.post("/games",{username:t});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(g.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/games/".concat(t));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(g.a)(d.a.mark((function e(t,a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.post("/games/".concat(t,"/join"),{username:a});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),w=function(){var e=Object(g.a)(d.a.mark((function e(t,a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.post("/games/".concat(t,"/start"),{username:a});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),N=function(){var e=Object(g.a)(d.a.mark((function e(t,a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/games/".concat(t,"/turn"),{params:{username:a}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),x=function(){var e=Object(g.a)(d.a.mark((function e(t,a,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.post("/games/".concat(a,"/end_turn"),{username:n,drawing_or_guess:{value:t}});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),y=a(24),O={username:"",game:{}},R=Object(n.createContext)(O),j=function(e){Object(A.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state=O,e.updateUsername=function(t){e.setState({username:t})},e.setGame=function(t){e.setState({game:t})},e.getUsername=function(t){if(e.state.username)return e.state.username;var a=JSON.parse(localStorage.getItem("userinfo"))||{};return console.log(a),a.username&&a.gameId==t?(e.setState({username:a.username}),a.username):void 0},e.addPlayer=function(t){e.state.game.players.find((function(e){return e.username===t.username}))||e.setState((function(e){return Object(y.a)({},e,{game:Object(y.a)({},e.game,{players:[].concat(Object(f.a)(e.game.players),[t])})})}))},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(R.Provider,{value:Object(y.a)({},this.state,{updateUsername:this.updateUsername,setGame:this.setGame,addPlayer:this.addPlayer,getUsername:this.getUsername})},this.props.children)}}]),a}(n.Component),B="player_joined",S="game_started",k="turn_ended",Q="round_ended",W="game_ended",Z="active",D="lobby",G="finished",J="DRAW",P="GUESS",T="WAIT",F=(a(120),a(121),function(e){Object(A.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={guess:"",time:60},e.handleFinishTurn=function(){(0,e.props.onFinishTurn)(e.state.guess)},e.updateGuess=function(t){e.setState({guess:t.target.value})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){var t=e.state.time;t>0?e.setState({time:t-1}):e.handleFinishTurn()}),1e3)}},{key:"render",value:function(){var e=this.state.time,t="00:".concat("0".concat(e).slice(-2));return r.a.createElement("div",{className:"guess-container"},r.a.createElement("span",{className:"guess-timer"},t),r.a.createElement("img",{className:"guess-draw-img",src:this.props.draw,alt:"guess"}),r.a.createElement("input",{className:"guess-input",placeholder:"Aca escribis tu respuesta",onChange:this.updateGuess}),r.a.createElement("button",{className:"guess-button",onClick:this.handleFinishTurn},"Terminar turno"))}}]),a}(n.Component)),L=a(96),U=function(e){var t=document.createElement("a");t.download="drawing.png",X(e,"#FAFAFA"),e.toBlob((function(e){t.href=URL.createObjectURL(e),t.click()}))},X=function(e,t){var a=e.getContext("2d");a.globalCompositeOperation="destination-over",a.fillStyle=t,a.fillRect(0,0,e.width,e.height)},H=(a(126),function(e){Object(A.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={time:5},e.handleFinishTurn=function(){var t=e.canvas.canvas.drawing.toDataURL();e.props.onFinishTurn(t)},e.exportToPng=function(){U(e.canvas.canvas.drawing)},e.undoCanvas=function(){return e.canvas.undo()},e.clearCanvas=function(){return e.canvas.clear()},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){var t=e.state.time;t>0?e.setState({time:t-1}):e.handleFinishTurn()}),1e3)}},{key:"render",value:function(){var e=this,t=window.outerHeight>550?550:window.outerHeight-40,a=window.outerWidth>400?400:window.outerWidth-40,n=this.state.time,c="00:".concat("0".concat(n).slice(-2));return r.a.createElement("div",{className:"game-draw-container"},r.a.createElement("span",{className:"game-word"},this.props.word),r.a.createElement("div",{className:"game-info"},r.a.createElement("span",{className:"timer"},c),r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{className:"action-button",onClick:this.undoCanvas},"Deshacer"),r.a.createElement("button",{className:"action-button",onClick:this.clearCanvas},"Borrar"),r.a.createElement("button",{className:"action-button",onClick:this.exportToPng},"Exportar a .png"))),r.a.createElement(L.a,{ref:function(t){return e.canvas=t},hideGrid:!0,brushRadius:3,lazyRadius:0,canvasWidth:a,canvasHeight:t}),r.a.createElement("button",{className:"draw-send",onClick:this.handleFinishTurn},"Terminar turno"))}}]),a}(n.Component)),V=a(67),M=a.n(V),Y=a(68),K=a.n(Y),q=a(69),z=a.n(q),_=a(70),$=a.n(_),ee=a(71),te=a.n(ee),ae=a(72),ne=a.n(ae),re=a(73),ce=a.n(re),se=a(74),ie=a.n(se),oe=a(75),ue=a.n(oe),Ae=a(76),le=a.n(Ae),me=a(77),pe=a.n(me),de=a(78),ge=a.n(de),fe=a(79),he=a.n(fe),Ee=a(80),ve=a.n(Ee),be=a(81),Ce=a.n(be),Ie=a(82),we=a.n(Ie),Ne=a(83),xe=a.n(Ne),ye=a(84),Oe=a.n(ye),Re=a(85),je=a.n(Re),Be=a(86),Se=a.n(Be),ke=[M.a,K.a,z.a,$.a,te.a,ne.a,ce.a,ie.a,ue.a,le.a,pe.a,ge.a,he.a,ve.a,Ce.a,we.a,xe.a,Oe.a,je.a,Se.a],Qe=function(e){for(var t=0,a=0;a<e.length;a++)t+=e.charCodeAt(a);return ke[t%ke.length]},We=function(e){Object(A.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onEndTurn,a=e.turn,n=a.task,c=a.challenge,s=this.context.game;return r.a.createElement("div",{className:"active-game-container"},r.a.createElement("div",{id:"canvas-container",className:"canvas-container"},n===J&&r.a.createElement(H,{word:c,onFinishTurn:t}),n===P&&r.a.createElement(F,{draw:c,onFinishTurn:t}),n===T&&r.a.createElement("div",{className:"wait-container"},r.a.createElement("span",{className:"wait-text"},"Esperando a que los demas terminen el turno..."),r.a.createElement("span",{className:"wait-loader"}))),r.a.createElement("ul",{className:"players-done-container"},this.props.playersDone.map((function(e){return r.a.createElement("li",{key:e,className:"user-container"},r.a.createElement("span",null,e),r.a.createElement("img",{className:"user-icon",alt:e,src:Qe("".concat(e).concat(s.id))}))}))))}}]),a}(n.Component);We.contextType=R;var Ze=We,De=(a(127),a(128),function(e){Object(A.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={currentIndex:0},e.previousElement=function(){var t=e.state.currentIndex;t>0&&e.setState({currentIndex:t-1})},e.nextElement=function(){var t=e.state.currentIndex;t<e.props.drawingsOrGuesses.length-1&&e.setState({currentIndex:t+1})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.drawingsOrGuesses,t=this.state.currentIndex,a=this.context.game,n=e[t];return r.a.createElement("div",{className:"draw-guess-container"},r.a.createElement("button",{className:"navigation-button",onClick:this.previousElement},"<"),"DRAW"===n.step_type&&r.a.createElement("div",{className:"carousel-drawing-container"},r.a.createElement("img",{src:n.value,alt:"drawing",className:"carousel-drawing"})),"GUESS"===n.step_type&&r.a.createElement("div",{className:"carousel-guess-container ".concat(0===t&&"first")},r.a.createElement("span",{className:"carousel-guess"},n.value)),0!==t&&r.a.createElement("div",{className:"draw-guess-user-container"},r.a.createElement("span",{className:"draw-guess-username"},n.player),r.a.createElement("img",{className:"draw-guess-icon",src:Qe("".concat(n.player).concat(a.id))})),r.a.createElement("button",{className:"navigation-button",onClick:this.nextElement},">"))}}]),a}(n.PureComponent));De.contextType=R;var Ge=De,Je=function(e){Object(A.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.libretita;return r.a.createElement("div",{className:"libretita-container"},r.a.createElement(Ge,{drawingsOrGuesses:e.drawings_or_guesses}),r.a.createElement("span",{className:"libretita-owner-name"},"Libretita de ",this.props.libretita.first_player))}}]),a}(n.Component),Pe=function(e){Object(A.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.context.game;return r.a.createElement("div",{className:"finish-container"},r.a.createElement("span",{className:"finish-title"},"Partida terminada"),r.a.createElement("div",{className:"libretitas"},e.libretitas.map((function(e){return r.a.createElement(Je,{key:e.id,libretita:e})}))))}}]),a}(n.Component),Te=Pe;Pe.contextType=R;var Fe=Te;a(129);window.getIconWithString=Qe;var Le=function(e){Object(A.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).startGame=Object(g.a)(d.a.mark((function t(){var a,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.context.username,n=e.props.match.params.id,t.next=4,w(n,a);case 4:case"end":return t.stop()}}),t)}))),e.copyToClipboard=function(){var e=document.getElementById("url-input");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy")},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.context,t=e.game,a=e.username,n=t.players,c=t.owner,s=c===a,i=s?"Esperando que inicies la partida":"Esperando que ".concat(c," incie la partida");return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"lobby-container"},r.a.createElement("div",{className:"owner-container"},r.a.createElement("span",{className:"owner-text"},i),r.a.createElement("span",{className:"loader"})),r.a.createElement("span",{className:"invite-title"},"En la partida"),r.a.createElement("ul",{className:"users-container"},n.map((function(e){return r.a.createElement("li",{key:e.id,className:"user-container"},r.a.createElement("span",null,e.username),r.a.createElement("img",{className:"user-icon",src:Qe("".concat(e.username).concat(t.id))}))}))),r.a.createElement("div",{className:"invite-container"},r.a.createElement("span",{className:"invite-title"},"Invita otros amigos"),r.a.createElement("div",null,r.a.createElement("input",{id:"url-input",className:"url-input",value:window.location.href}),r.a.createElement("button",{className:"copy-button",onClick:this.copyToClipboard},"Copy"))),s&&r.a.createElement("button",{className:"base-button",onClick:this.startGame},"Empezar partida")))}}]),a}(n.Component);Le.contextType=R;var Ue=Object(m.f)(Le),Xe=a(89),He=a.n(Xe),Ve=(a(132),function(e){Object(A.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).updateUsername=function(t){var a=t.target.value;e.setState({username:a})},e.joinGame=function(){var t=e.state.username;(0,e.props.joinGame)(t)},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"join-container"},r.a.createElement("div",{className:"join-game-container"},r.a.createElement("h1",{className:"title"},"Telefono Roto"),r.a.createElement("h3",{className:"join-title"},"Unite a la partida"),r.a.createElement("img",{className:"smile-draw",src:He.a,alt:"smile"}),r.a.createElement("div",{className:"join-input-container"},r.a.createElement("span",{className:"join-username-label"},"Nombre de usuario"),r.a.createElement("input",{className:"join-username-input",type:"text",onChange:this.updateUsername,placeholder:"Ingresar tu nombre de usuario"})),r.a.createElement("button",{className:"second-button",onClick:this.joinGame},"Entrar")))}}]),a}(n.Component));Ve.contextType=R;var Me=Ve,Ye=a(90),Ke=a.n(Ye),qe=function(e,t,a){var n=Ke()(E);return n.on("game_event",(function(e){console.log("SocketIO Event: ".concat(e.type)),a(e.type,e.content)})),n.emit("join_game",{username:e,game_id:t}),n},ze=function(e){Object(A.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("span",null,"NotFound")}}]),a}(n.PureComponent),_e=function(e){Object(A.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={turn:{},playersDone:[]},e.handleGameEvent=function(t,a){switch(t){case B:e.context.addPlayer(a);break;case S:e.getGameInfo(),e.getTurnInfo();break;case k:e.setState({playersDone:[].concat(Object(f.a)(e.state.playersDone),[a])});break;case Q:e.setState({playersDone:[]}),e.getTurnInfo();break;case W:e.getGameInfo()}},e.joinGame=function(){var t=Object(g.a)(d.a.mark((function t(a){var n,r,c,s,i,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.context,r=n.updateUsername,c=n.setGame,s=e.props.match.params.id,r(a),localStorage.setItem("userinfo",JSON.stringify({username:a,gameId:s})),t.next=6,I(s,a);case 6:i=t.sent,c(i.data),o=qe(a,s,e.handleGameEvent),e.setState({socket:o});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.endTurn=function(){var t=Object(g.a)(d.a.mark((function t(a){var n,r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.context,r=n.game,c=n.username,t.next=3,x(a,r.id,c);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getTurnInfo=Object(g.a)(d.a.mark((function t(){var a,n,r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.context,n=a.username,r=a.game,t.next=3,N(r.id,n);case 3:c=t.sent,e.setState({turn:c.data});case 5:case"end":return t.stop()}}),t)}))),e.getGameInfo=Object(g.a)(d.a.mark((function t(){var a,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.match.params.id,t.next=3,C(a);case 3:n=t.sent,e.context.setGame(n.data);case 5:case"end":return t.stop()}}),t)}))),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,this.getGameInfo();case 3:(a=this.context.getUsername(t))&&(qe(a,t,this.handleGameEvent),"active"===this.context.game.status&&this.getTurnInfo());case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.context,t=e.username,a=e.game,n=this.state,c=n.turn,s=n.playersDone;if(!t&&a.status!==G)return r.a.createElement(Me,{joinGame:this.joinGame});switch(console.log(s),a.status){case Z:return r.a.createElement(Ze,{onEndTurn:this.endTurn,turn:c,playersDone:s});case D:return r.a.createElement(Ue,null);case G:return r.a.createElement(Fe,null);default:return r.a.createElement(ze,null)}}}]),a}(n.Component);_e.contextType=R;var $e=Object(m.f)(_e),et=a(91),tt=a.n(et),at=a(92),nt=a.n(at),rt=a(93),ct=a.n(rt),st=a(94),it=a.n(st),ot=a(95),ut=a.n(ot),At=(a(164),function(e){Object(A.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).createNewGame=Object(g.a)(d.a.mark((function t(){var a,n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e.context.username);case 2:a=t.sent,n=a.data.id,r={username:e.context.username,gameId:n},localStorage.setItem("userinfo",JSON.stringify(r)),e.props.history.push("/game/".concat(n));case 7:case"end":return t.stop()}}),t)}))),e.updateUsername=function(t){e.context.updateUsername(t.target.value)},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"home-container"},r.a.createElement("div",{className:"home-game-container"},r.a.createElement("img",{className:"sheep-draw",src:tt.a,alt:"sheep"}),r.a.createElement("img",{className:"owl-draw",src:nt.a,alt:"owl"}),r.a.createElement("img",{className:"house-draw",src:it.a,alt:"house"}),r.a.createElement("img",{className:"hash-draw",src:ct.a,alt:"hash"}),r.a.createElement("img",{className:"coronavirus-draw",src:ut.a,alt:"coronavirus"}),r.a.createElement("h1",{className:"home-title"},"Telefono Roto"),r.a.createElement("div",{className:"home-input-container"},r.a.createElement("span",{className:"home-username-label"},"Nombre de usuario"),r.a.createElement("input",{className:"home-username-input",type:"text",onChange:this.updateUsername,placeholder:"Ingresar tu nombre de usuario"})),r.a.createElement("button",{className:"base-button",onClick:this.createNewGame},"Crear nueva partida")))}}]),a}(n.Component));At.contextType=R;var lt=Object(m.f)(At),mt=(a(165),function(e){Object(A.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(j,null,r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/game/:id",component:$e}),r.a.createElement(m.a,{exact:!0,path:"/not_found",component:ze}),r.a.createElement(m.a,{path:"/",component:lt})))))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(mt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},67:function(e,t,a){e.exports=a.p+"static/media/animals.aa31cfcb.png"},68:function(e,t,a){e.exports=a.p+"static/media/bat.92b1b6fb.png"},69:function(e,t,a){e.exports=a.p+"static/media/cat.7dd6c46e.png"},70:function(e,t,a){e.exports=a.p+"static/media/chicken.e1fe689b.png"},71:function(e,t,a){e.exports=a.p+"static/media/dog.59e4f776.png"},72:function(e,t,a){e.exports=a.p+"static/media/elephant.ef0969c6.png"},73:function(e,t,a){e.exports=a.p+"static/media/fox.d25163bd.png"},74:function(e,t,a){e.exports=a.p+"static/media/jellyfish.86a87edc.png"},75:function(e,t,a){e.exports=a.p+"static/media/meerkat.fa12c7b1.png"},76:function(e,t,a){e.exports=a.p+"static/media/monkey.64c5e8ed.png"},77:function(e,t,a){e.exports=a.p+"static/media/octopus.a64ff94d.png"},78:function(e,t,a){e.exports=a.p+"static/media/owl.e6106e63.png"},79:function(e,t,a){e.exports=a.p+"static/media/penguin.56a18666.png"},80:function(e,t,a){e.exports=a.p+"static/media/pig.8bf5ae0e.png"},81:function(e,t,a){e.exports=a.p+"static/media/rabbit.4ac99bb1.png"},82:function(e,t,a){e.exports=a.p+"static/media/sheep.a09e9eb8.png"},83:function(e,t,a){e.exports=a.p+"static/media/snail.d67c4772.png"},84:function(e,t,a){e.exports=a.p+"static/media/snake.cbe3eb42.png"},85:function(e,t,a){e.exports=a.p+"static/media/spider.5e0fffe7.png"},86:function(e,t,a){e.exports=a.p+"static/media/whale.d33eb379.png"},89:function(e,t){e.exports="data:image/png;base64,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"},91:function(e,t,a){e.exports=a.p+"static/media/sheep_draw.b8b787a7.png"},92:function(e,t,a){e.exports=a.p+"static/media/owl_draw.bb45be55.png"},93:function(e,t){e.exports="data:image/png;base64,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"},94:function(e,t,a){e.exports=a.p+"static/media/house_draw.a1a6ac63.png"},95:function(e,t,a){e.exports=a.p+"static/media/coronavirus_draw.5a87ccb7.png"},97:function(e,t,a){e.exports=a(166)}},[[97,1,2]]]);
//# sourceMappingURL=main.10af91c7.chunk.js.map