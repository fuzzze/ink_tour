// Garden Gnome Software - Skin
// Pano2VR 6.0.1/17227
// Filename: INK_material_2024.ggsk
// Generated Tue May 28 07:37:43 2024

function pano2vrSkin(player,base) {
	player.addVariable('currentPan', 0, "1");
	player.addVariable('titleShow', 2, false);
	player.addVariable('coverShow', 2, true);
	player.addVariable('baseURL', 0, "https:\/\/fuzzze.github.io\/ink_tour\/index.html");
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('configloaded', function() { me.callNodeChange(me.divSkin); });
	player.addListener('changenodeid', function() { me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._top_menu=document.createElement('div');
		el.ggId="top_menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 74px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._top_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._top_menu.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getViewerSize().width <= 640) || 
				(player.getViewerSize().height <= 640)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(player.getViewerSize().width <= 1200) || 
				(player.getViewerSize().height <= 800)
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._top_menu.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._top_menu.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._top_menu.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._top_menu.ggCurrentLogicStateScaling == 0) {
					me._top_menu.ggParameter.sx = 0.6;
					me._top_menu.ggParameter.sy = 0.6;
					me._top_menu.style[domTransform]=parameterToTransform(me._top_menu.ggParameter);
				}
				else if (me._top_menu.ggCurrentLogicStateScaling == 1) {
					me._top_menu.ggParameter.sx = 0.8;
					me._top_menu.ggParameter.sy = 0.8;
					me._top_menu.style[domTransform]=parameterToTransform(me._top_menu.ggParameter);
				}
				else {
					me._top_menu.ggParameter.sx = 1;
					me._top_menu.ggParameter.sy = 1;
					me._top_menu.style[domTransform]=parameterToTransform(me._top_menu.ggParameter);
				}
			}
		}
		me._top_menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.ggUserdata.description != "+")
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._top_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._top_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._top_menu.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._top_menu.ggCurrentLogicStateVisible == 0) {
					me._top_menu.style.visibility="hidden";
					me._top_menu.ggVisible=false;
				}
				else {
					me._top_menu.style.visibility=(Number(me._top_menu.style.opacity)>0||!me._top_menu.style.opacity)?'inherit':'hidden';
					me._top_menu.ggVisible=true;
				}
			}
		}
		me._top_menu.onclick=function (e) {
			me._abouttext.style[domTransition]='none';
			me._abouttext.style.visibility=(Number(me._abouttext.style.opacity)>0||!me._abouttext.style.opacity)?'inherit':'hidden';
			me._abouttext.ggVisible=true;
			me._top_menu.style[domTransition]='none';
			me._top_menu.style.visibility='hidden';
			me._top_menu.ggVisible=false;
		}
		me._top_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._topbg=document.createElement('div');
		el.ggId="top-bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.0784314);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 74px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border-bottom: 1px solid rgba(255,255,255, 0.3);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._topbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._topbg.ggUpdatePosition=function (useTransition) {
		}
		el=me._subtitle=document.createElement('div');
		els=me._subtitle__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="subtitle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text .subtitle";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 36px;';
		hs+='position : absolute;';
		hs+='top : 48px;';
		hs+='visibility : inherit;';
		hs+='width : 361px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 361px;';
		hs+='height: 25px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="color:white; text-shadow: 0 0 1px black; font-family:\"Navigo\", Navigo; font-weight: 500; font-size: 14px;";
		els.setAttribute('style',hs);
		me._subtitle.ggUpdateText=function() {
			var hs=me.ggUserdata.information;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._subtitle.ggUpdateText();
		el.appendChild(els);
		me._subtitle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._subtitle.ggUpdatePosition=function (useTransition) {
		}
		me._topbg.appendChild(me._subtitle);
		el=me._pan_title=document.createElement('div');
		els=me._pan_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pan_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 58px;';
		hs+='left : 36px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 78.4375%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 58px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 32px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="font-family:\"Navigo\" !important; font-weight:200 !important; font-size: 40px; line-height: 26px; padding-top:4px; text-shadow: 0 0 1px black, 0 0 1px black;";
		els.setAttribute('style',hs);
		me._pan_title.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pan_title.ggUpdateText();
		el.appendChild(els);
		me._pan_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pan_title.ggUpdatePosition=function (useTransition) {
		}
		me._topbg.appendChild(me._pan_title);
		me._top_menu.appendChild(me._topbg);
		el=me._inklogo=document.createElement('div');
		els=me._inklogo__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTE3cHgiIHZpZXdCb3g9IjAgMCAxMDAgMTE3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPmluay1sb2dvPC90aXRsZT4KICAgIDxnIGlkPSJQYW5vVG91ciIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9InRvdXItY292ZXItdjEiIHRyYW5zZm'+
			'9ybT0idHJhbnNsYXRlKC00NzAsIC04NCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNNTIyLjM2ODg2MiwxODYuMDc2Nzc5IEw1MjIuMzY4ODYyLDIwMC41NjA5NDQgQzUyMi4zNjg4NjIsMjAwLjgzMDE2OSA1MjIuNTg0NDE2LDIwMS4wNDU1NCA1MjIuODUzODU3LDIwMC45OTE2OTMgQzUyNi4yNDg4MjgsMjAwLjcyMjQ3MiA1MjkuNTM2MDE4LDIwMC4xMzAxODMgNTMyLjY2MTU0NCwxOTkuMTA3MTM2IEM1MzIuODIzMjA4LDE5OS4wNTMyOTQgNTMyLjk4NDg3MiwxOTguODkxNzY2IDUzMi45ODQ4NzIsMTk4LjY3NjM4NyBMNTMyLjk4NDg3MiwxNjMuMTM5MDQzIEM1MzIu'+
			'OTg0ODcyLDE2Mi45MjM2NjUgNTMyLjgyMzIwOCwxNjIuNzA4Mjg2IDUzMi42MDc2NTcsMTYyLjcwODI4NiBDNTI5LjQyODI0MSwxNjIuMzMxMzc0IDUyNi4xNDEwNDcsMTYyLjExNTk5NSA1MjIuODUzODU3LDE2Mi4wMDgzMDYgQzUyMi41ODQ0MTYsMTYyLjAwODMwNiA1MjIuMzY4ODYyLDE2Mi4yMjM2ODYgNTIyLjM2ODg2MiwxNjIuNDM5MDYzIEw1MjIuMzY4ODYyLDE3NS4yNTQwNDcgTDUxNi42NTY2OTEsMTc1LjI1NDA0NyBMNTE2LjY1NjY5MSwxNjIuNDM5MDYzIEM1MTYuNjU2NjkxLDE2Mi4xNjk4NDEgNTE2LjQ0MTEzNywxNjEuOTU0NDYyIDUxNi4xNzE2OTYsMTYyLjAwODMwNiBDNTEyLj'+
			'gzMDYxNiwxNjIuMTE1OTk1IDUwOS41OTczMTIsMTYyLjMzMTM3MSA1MDYuNDE3ODk2LDE2Mi42NTQ0MzggQzUwNi4yMDIzNDEsMTYyLjY1NDQzOCA1MDYuMDQwNjc0LDE2Mi44Njk4MTcgNTA2LjA0MDY3NCwxNjMuMDg1MTk1IEw1MDYuMDQwNjc0LDE5OC43MzAyMyBDNTA2LjA0MDY3NCwxOTguOTQ1NjA0IDUwNi4xNDg0NTMsMTk5LjEwNzE0IDUwNi4zNjQwMDcsMTk5LjE2MDk4NyBDNTA5LjQ4OTUzNSwyMDAuMDc2MzQgNTEyLjc3NjcyNSwyMDAuNzIyNDc2IDUxNi4xNzE2OTYsMjAwLjkzNzg1NCBDNTE2LjQ0MTEzNywyMDAuOTM3ODU0IDUxNi42NTY2OTEsMjAwLjcyMjQ3NiA1MTYuNjU2Njkx'+
			'LDIwMC41MDcwOTcgTDUxNi42NTY2OTEsMTg1Ljk2OTA5MiBMNTIyLjM2ODg2MiwxODUuOTY5MDkyIEw1MjIuMzY4ODYyLDE4Ni4wNzY3NzkgWiBNNTAzLjAyMjA0MSwxNjMuMTkxMzcxIEM0OTguOTgwNDExLDE2My43ODM2NiA0OTUuMDQ2NTU4LDE2NC41Mzc0ODcgNDkxLjM4MjE0NiwxNjUuNTYwNTMxIEM0OTEuMjc0MzcsMTY1LjYxNDM3NiA0OTEuMTY2NTkzLDE2NS42NjgyMjEgNDkxLjExMjcwNSwxNjUuODI5NzU0IEw0ODYuNTMyMTksMTc1LjMwNjM3MyBMNDg1Ljc3Nzc1MiwxNzUuMzA2MzczIEw0ODUuNzc3NzUyLDE2Ny44NzU4MzYgQzQ4NS43Nzc3NTIsMTY3LjU1Mjc3IDQ4NS40NTQ0Mj'+
			'IsMTY3LjMzNzM5OSA0ODUuMTg0OTgsMTY3LjQ0NTA4OCBDNDgyLjQ5MDU1OSwxNjguNDE0Mjg4IDQ3OS45NTc4MDQsMTY5LjQzNzMyOSA0NzcuNTg2NzE0LDE3MC42MjE5MDcgQzQ3Ny4yOTE5ODQsMTcwLjc1Mjc5MSA0NzcuMDE3MTU1LDE3MC45MDM1NiA0NzYuNzUwMTM0LDE3MS4wNTAwNDUgQzQ3Ni41Nzc3NTUsMTcxLjE0NDYxMiA0NzYuNDA4NjI5LDE3MS4yMzczOTMgNDc2LjIzOTUwNCwxNzEuMzIxODg3IEM0NzYuMDIzOTUsMTcxLjQyOTU3NSA0NzUuOTE2MTc0LDE3MS42OTg3OTQgNDc2LjA3NzgzOSwxNzEuOTE0MTcxIEM0NzkuNTgwNTg1LDE3OC41MzcwMzkgNDgzLjgzNzc3LDE4NC4y'+
			'OTg0IDQ4OC43OTU1MDMsMTg4LjkyOTAyMiBDNDg5LjAxMTA1OCwxODkuMTQ0NCA0ODkuMzg4Mjc2LDE4OS4wOTA1NTggNDg5LjQ5NjA1MiwxODguODIxMzM0IEw0OTIuMjQ0MzYsMTgzLjI3NTM1NSBMNDkyLjk0NDkxMiwxODMuMjc1MzU1IEw0OTIuOTQ0OTEyLDE5Mi4yMTM1MzcgQzQ5Mi45NDQ5MTIsMTkyLjM3NTA3MSA0OTIuOTk4OCwxOTIuNDgyNzU4IDQ5My4xMDY1NzUsMTkyLjU5MDQ0OCBDNDk2LjEyNDMyNiwxOTQuODUxOTE1IDQ5OS40MTE1MiwxOTYuNjgyNjIzIDUwMi45MTQyNjYsMTk4LjA4MjU4IEM1MDMuMTgzNzA5LDE5OC4xOTAyNzMgNTAzLjUwNzAzOSwxOTcuOTc0ODk1IDUwMy'+
			'41MDcwMzksMTk3LjY1MTgyMyBMNTAzLjUwNzAzOSwxNjMuNjIyMTI4IEM1MDMuNTYwOTI3LDE2My4zNTI5MDUgNTAzLjI5MTQ4NCwxNjMuMTM3NTI2IDUwMy4wMjIwNDEsMTYzLjE5MTM3MSBaIE01NTEuNzM2NjgxLDE2Ni41ODM1NzQgQzU1NCwxNjcuMzkxMjQxIDU1Ny42NjQ0MDUsMTY5LjQzNzMzNCA1NTguNzQyMTY5LDE3MC4xMzczMTMgQzU1OC45NTc3MjMsMTcwLjI5ODg0NiA1NTkuMDY1NDk3LDE3MC41MTQyMTkgNTU4Ljk1NzcxNSwxNzAuNzI5NTk3IEw1NTUuNjcwNTMzLDE3Ny42MjE2OTIgQzU1Ni41MzI3NTEsMTc4LjEwNjI5MiA1NTcuMzk0OTYsMTc4Ljc1MjQyMyA1NTguMDk1NTE0'+
			'LDE3OS4zNDQ3MTIgQzU1OC4yNTcxNzgsMTc5LjUwNjI0OCA1NTguMzExMDYsMTc5Ljc3NTQ3MyA1NTguMTQ5Mzk3LDE3OS45MzcwMDUgQzU1Ni4xNTU1MjUsMTgyLjczNjkxOSA1NTMuNzMwNTUyLDE4NS40ODI5ODIgNTUxLjQxMzM1MywxODcuNzk4Mjk0IEM1NTAuMjI3ODA4LDE4Ni42Njc1NiA1NDguMTgwMDU0LDE4NS45MTM3MzkgNTQ2LjI0MDA3MywxODYuMDc1MjczIEw1NDYuMjQwMDczLDE5MS44OTA0NzcgQzU0Ni4yNDAwNzMsMTkyLjA1MjAxMSA1NDYuMTg2MTgyLDE5Mi4xNTk2OTkgNTQ2LjA3ODQwOSwxOTIuMjY3Mzg4IEM1NDMuMDYwNjY0LDE5NC41Mjg4NTUgNTM5Ljc3MzQ3NCwxOT'+
			'YuNDEzNDE4IDUzNi4yNzA3MywxOTcuODY3MjE3IEM1MzUuOTQ3Mzk4LDE5Ny45NzQ5MTEgNTM1LjYyNDA2NywxOTcuNzU5NTMyIDUzNS42MjQwNjcsMTk3LjQzNjQ2IEw1MzUuNjI0MDY3LDE2My42MjIxMjggQzUzNS42MjQwNjcsMTYzLjM1MjkwNiA1MzUuODkzNTA4LDE2My4xMzc1MjYgNTM2LjE2Mjk0OSwxNjMuMTkxMzcxIEM1MzkuNTA0MDI5LDE2My42NzU5NzEgNTQyLjc5MTIxNSwxNjQuMzIyMTA1IDU0NS45MTY3MzcsMTY1LjA3NTkyNyBDNTQ2LjA3ODQwOSwxNjUuMTI5NzcyIDU0Ni4yNDAwNzMsMTY1LjI5MTMwNyA1NDYuMjQwMDczLDE2NS41MDY2ODUgTDU0Ni4yOTM5NTUsMTc1LjMw'+
			'NjM3OCBMNTQ3LjA0ODM5OSwxNzUuMzA2Mzc4IEM1NDkuMjc1Nzg2LDE3MC43NDc1NDQgNTUwLjY1ODkxOSwxNjcuOTExNzM1IDU1MS4xOTc3OTksMTY2Ljc5ODk0OCBDNTUxLjMwNTU4LDE2Ni41ODM1NzEgNTUxLjUyMTEzNCwxNjYuNTI5NzMgNTUxLjczNjY4MSwxNjYuNTgzNTc0IFogTTUzNy40MDEyNDgsODcuMjc5MjYzIEM1MzcuNzIzNDg1LDg3LjQ0MDUzODQgNTM3Ljc3NzE4NCw4Ny44NzA2MDU2IDUzNy41MDg2NTUsODguMDg1NjM5MyBDNTI0LjIxMTgwOCw5Ny4yNDkwNzI0IDUyMy4xODc1MDUsMTIxLjg2NTg3NiA1MjEuOTE0MjM4LDE1Mi40NjU5ODcgTDUyMS45MTQwMzYsMTUyLjQ3MD'+
			'k3NSBMNTIxLjkxMjU4MSwxNTIuNTA1ODY2IEM1MjEuODQ5Mjk0LDE1NC4wMjY2NzUgNTIxLjc4NTM5LDE1NS41NjIyNTcgNTIxLjcxOTMxNywxNTcuMTExNDQzIEw1MjAuNTM3Nzk3LDE1Ny4xMTE0NDMgTDUyMC42MDgwOTEsMTUyLjAyMjA4NCBDNTIxLjE0MDA5LDExMy4zMzM3OTggNTIxLjM1ODQzMyw5Ny40NTU2MTU1IDUyNS40Nzg2ODQsODQgQzUyOS42MTM5ODgsODQuNTM3NTg0MSA1MzMuNjQxODgsODUuNjY2NTEwNyA1MzcuNDAxMjQ4LDg3LjI3OTI2MyBaIE01NTUuNjYxNDU3LDEwMS44NDg5ODkgQzU0My4zNjI5NjEsMTAyLjM4NjU3MyA1MzUuMDkyMzYyLDExMC4wNzQwMjggNTI5Ljkz'+
			'NjY2MSwxMjUuNjYzOTY1IEM1MjcuMjUxMzk4LDEzMy44MzUyNDQgNTI0LjgzNDY2OCwxNDcuMDA2MDU1IDUyNC4xOTAyMDMsMTU3LjIyMDE0OSBDNTIzLjgxNDI2NywxNTcuMTY2Mzk2IDUyMy4zODQ2MjQsMTU3LjE2NjM4OSA1MjMuMDA4Njg4LDE1Ny4xNjYzODkgQzUyMy41OTk0NDUsMTQ0LjQyNTY1IDUyNC42MTk4NDIsMTMzLjU2NjQ1MiA1MjUuOTYyNDc2LDEyNC44NTc1OTIgQzUyOC45MTYyNiwxMDYuMjAzNDIxIDUzNC4xMjU2NjQsOTUuOTg5MzIzNCA1NDUuOTQwODA2LDkxLjkwMzY4NDMgQzU0OS41OTI3NTgsOTQuNDg0MDg4MSA1NTIuOTc2MTk4LDk3LjU0ODMxNzQgNTU1Ljk4MzY4Ni'+
			'wxMDEuMDk2MzcyIEM1NTYuMTk4NTA3LDEwMS4zNjUxNjUgNTU2LjAzNzM5MywxMDEuODQ4OTg5IDU1NS42NjE0NTcsMTAxLjg0ODk4OSBaIE01MzIuNTA5NjcsMTM3LjkxOTMwNCBDNTQyLjAxNTUsMTE5LjQyNjQwNiA1NTguNzE3ODIsMTE2Ljk1MzUyIDU2Ny45NTUxMjEsMTI2LjA5MjQ1NSBDNTY4LjI3NzM1OCwxMjYuNDE1MDAzIDU2OC44MTQ0MTYsMTI2LjA5MjQ1NSA1NjguNzA3MDAxLDEyNS42NjIzODYgQzU2Ny4yMDMyNTcsMTE5Ljc0ODk2MiA1NjQuOTQ3NjMzLDExNC4yMTE4NDIgNTYxLjk5Mzg0NSwxMDkuMjEyMzA5IEM1NDAuNzgwMjc3LDEwMy4zNTI2NDEgNTI3Ljg5MTAxOSwxMjcu'+
			'NjUxNDQ5IDUyNS40MjA1NzgsMTU3LjMyNjA5NSBDNTI1LjYwODU0NiwxNTcuMzI2MDk1IDUyNS44MDk5NDEsMTU3LjMzOTUzMSA1MjYuMDExMzM2LDE1Ny4zNTI5NjggQzUyNi4yMTI3MywxNTcuMzY2NDEyIDUyNi40MTQxMjUsMTU3LjM3OTg1NiA1MjYuNjAyMDk3LDE1Ny4zNzk4NTYgQzUyNy43ODM2MTMsMTQ5LjIwODU3NCA1MjguOTY1MTI4LDE0NC43NDY2MjYgNTMyLjUwOTY3LDEzNy45MTkzMDQgWiBNNTM2LjQ4Nzk1NiwxMzYuODk4NTYgQzU0Ni43NDU2NTQsMTIzLjgzNTI2MiA1NjEuNjc1NzAxLDEyNi4yNTQzODUgNTY5LjY3Nzc3OSwxMzUuNzY5NjMxIEM1NjkuODM4ODk0LDEzNy44Nj'+
			'YyMTEgNTY5Ljk0NjMwMSwxNDAuMDE2NTQ4IDU3MCwxNDIuMjIwNjQxIEM1NzAsMTQ3LjU5NjQ4MyA1NjkuMzU1NTQzLDE1Mi43NTcyOTUgNTY4LjIyNzczNSwxNTcuNjQ5MzExIEM1NjguMTIwMzIsMTU4LjA3OTM4IDU2Ny40MjIxNTYsMTU4LjEzMzE0MSA1NjcuMzY4NDQ4LDE1Ny43MDMwNzIgQzU2Ni4yOTQzNDgsMTQ3LjM4MTQ1MyA1NTQuMTU2OTc0LDEzOC41MTEzMTEgNTQyLjAxOTU5MiwxNDIuMjIwNjQxIEM1MzYuNzU2NDgxLDE0My43Nzk2MzUgNTMxLjE3MTE0MSwxNDguNTEwMzgyIDUyOS4wMjI5MzIsMTU3LjQ4ODA0NSBDNTI4LjgwODIzLDE1Ny40ODgwNDUgNTI4LjYwNjkzOCwxNTcu'+
			'NDc0NjE3IDUyOC40MDU2NTQsMTU3LjQ2MTE4OSBMNTI4LjQwNTMyMSwxNTcuNDYxMTY1IEw1MjguNDA0OTg3LDE1Ny40NjExNDEgQzUyOC4yMDM3MDMsMTU3LjQ0NzcxMyA1MjguMDAyNDEyLDE1Ny40MzQyODUgNTI3Ljc4NzcwOSwxNTcuNDM0Mjg1IEM1MjkuMTg0MDQ2LDE0OC40NTY2MjEgNTMyLjc4MjI5NiwxNDEuNTc1NTQyIDUzNi40ODc5NTYsMTM2Ljg5ODU2IFogTTUxNC40Njk5NjEsODQuMDU0OTg1NyBDNTEwLjMzNDY2MSw4NC41OTI1Njk3IDUwNi4zMDY3NjUsODUuNjY3NzM3OCA1MDIuNTQ3NDAxLDg3LjMzNDI0OCBDNTAyLjIyNTE2OCw4Ny40OTU1MjMzIDUwMi4xNzE0NjUsODcuOT'+
			'I1NTkwNiA1MDIuNDM5OTkyLDg4LjE0MDYyNCBDNTE1Ljc3NzA1LDk3LjI4MDQyMDUgNTE2Ljc2NzIxNiwxMjIuMDE2MjM5IDUxNy45OTkxNjEsMTUyLjc5MTg0NCBMNTE3Ljk5OTI4LDE1Mi43OTQ4NTEgQzUxOC4wNTcwOTIsMTU0LjIzOTA2MSA1MTguMTE1NDQxLDE1NS42OTY1ODcgNTE4LjE3NTYxNywxNTcuMTY2NDEyIEw1MTkuMzU3MTMyLDE1Ny4xNjY0MTIgQzUxOS4zMjYxNTQsMTU0Ljk0MjMyNCA1MTkuMjk2ODAxLDE1Mi43ODkwMzYgNTE5LjI2ODM3LDE1MC43MDMyMTUgQzUxOC43NTQ1NjUsMTEzLjAxMDU3NCA1MTguNTQxMDksOTcuMzUwMjAzNCA1MTQuNDY5OTYxLDg0LjA1NDk4NTcg'+
			'WiBNNDk0LjAwNjE5LDkxLjk1NjYzMzUgQzUwNS44MjEzMzksOTYuMDQyMjc1NiA1MTEuMDg0NDUxLDEwNi4yNTYzNzggNTEzLjk4NDUzMiwxMjQuOTEwNTU3IEM1MTUuMzgwODY1LDEzMy42MTk0MyA1MTYuMzQ3NTU4LDE0NC40Nzg2MzUgNTE2Ljk5MjAyLDE1Ny4xNjU2MjUgQzUxNi44MDQxNzEsMTU3LjE2NTYyNSA1MTYuNjAyOTExLDE1Ny4xNzkwNTMgNTE2LjQwMTY0MywxNTcuMTkyNDgxIEw1MTYuNDAxMjYyLDE1Ny4xOTI1MDUgTDUxNi40MDA4OTIsMTU3LjE5MjUyOSBDNTE2LjE5OTYyNSwxNTcuMjA1OTU3IDUxNS45OTgzNjEsMTU3LjIxOTM4NSA1MTUuODEwNTA4LDE1Ny4yMTkzODUgQz'+
			'UxNS4xMTIzNCwxNDcuMDA1Mjg0IDUxMi43NDkzMDksMTMzLjc4MDcwMyA1MTAuMDY0MDUsMTI1LjY2MzE3OCBDNTA0LjkwODM0NSwxMTAuMDczMjMgNDk2LjU4NDAzOSwxMDIuMzg1NzcyIDQ4NC4yODU1NDcsMTAxLjkwMTk0NiBDNDgzLjkwOTYxMSwxMDEuODQ4MTg3IDQ4My43NDg0OTUsMTAxLjQxODExOSA0ODMuOTYzMzE1LDEwMS4xNDkzMjcgQzQ4Ni45NzA4MDgsOTcuNjAxMjY5NSA0OTAuMzU0MjM2LDk0LjUzNzAzOTIgNDk0LjAwNjE5LDkxLjk1NjYzMzUgWiBNNDc4LjAwMjc0OSwxMDkuMjEyMzY0IEM0NzUuMDQ4OTYxLDExNC4xNTgxMzcgNDcyLjc5MzM0MywxMTkuNjk1MjU3IDQ3MS4y'+
			'ODk1OTcsMTI1LjY2MjQ0MiBDNDcxLjE4MjE4NiwxMjYuMDkyNTExIDQ3MS43MTkyMzgsMTI2LjQxNTA1OSA0NzIuMDQxNDcsMTI2LjA5MjUwMyBDNDgxLjMzMjQ3MiwxMTcuMDA3MzM0IDQ5Ny45ODEwOTEsMTE5LjQ4MDIyMyA1MDcuNDg2OTE3LDEzNy45MTkzNTkgQzUxMC45Nzc3NTUsMTQ0LjY5MjkxNyA1MTIuMjEyOTc0LDE0OS4xNTQ4NjkgNTEzLjM5NDQ4OSwxNTcuMzI2MTQzIEM1MTMuNTgyMzM4LDE1Ny4zMjYxNDMgNTEzLjc4MzU5OCwxNTcuMzEyNzE1IDUxMy45ODQ4NjYsMTU3LjI5OTI4NyBMNTEzLjk4NTI0NywxNTcuMjk5MjYzIEw1MTMuOTg1NjE3LDE1Ny4yOTkyMzkgQzUxNC4xOD'+
			'Y4ODQsMTU3LjI4NTgxMSA1MTQuMzg4MTQ4LDE1Ny4yNzIzODIgNTE0LjU3NjAwMSwxNTcuMjcyMzgyIEM1MTIuMTA1NTYzLDEyNy42NTE1MDEgNDk5LjIxNjMwOSwxMDMuMzUyNjk3IDQ3OC4wMDI3NDksMTA5LjIxMjM2NCBaIE00NzAuMzIyMjMxLDEzNS43Njk2MzEgQzQ3OC4yNzA2MDUsMTI2LjI1NDM4NSA0OTMuMjU0MzY0LDEyMy44MzUyNjIgNTAzLjUxMjA2NCwxMzYuODk4NTYgQzUwNy4yMTc3MjQsMTQxLjU3NTU0MiA1MTAuODE1OTc0LDE0OC40NTY2MjEgNTEyLjIxMjMxMSwxNTcuNDM0Mjg1IEM1MTEuNzgyNjY3LDE1Ny40MzQyODUgNTExLjQwNjczNSwxNTcuNDM0Mjg1IDUxMC45Nzcw'+
			'OTIsMTU3LjQ4ODA0NSBDNTA4Ljc3NTE3NSwxNDguNTEwMzgyIDUwMy4yOTcyNCwxNDMuNTEwODQ0IDQ5Ny45ODA0MjMsMTQyLjIyMDY0MSBDNDg0Ljk4Mzc1OCwxMzguOTk1MTM2IDQ3NC4wODE1OTcsMTQ3LjU0MjczMSA0NzIuNjMxNTU2LDE1Ny43MDMwNzIgQzQ3Mi41Nzc4NTEsMTU4LjEzMzE0MSA0NzEuODc5NjgzLDE1OC4wNzkzOCA0NzEuNzcyMjczLDE1Ny42NDkzMTEgQzQ3MC41OTA3NTgsMTUyLjcwMzUzNCA0NzAsMTQ3LjU0MjcyNyA0NzAsMTQyLjIyMDY0MSBDNDcwLDE0MC4wMTY1NDggNDcwLjEwNzQxLDEzNy44NjYyMTEgNDcwLjMyMjIzMSwxMzUuNzY5NjMxIFoiIGlkPSJpbmstbG'+
			'9nbyI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';
		me._inklogo__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;inklogo;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ink-logo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 47px;';
		hs+='left : 76px;';
		hs+='position : absolute;';
		hs+='top : 11px;';
		hs+='visibility : hidden;';
		hs+='width : 43px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._inklogo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._inklogo.ggUpdatePosition=function (useTransition) {
		}
		me._top_menu.appendChild(me._inklogo);
		me.divSkin.appendChild(me._top_menu);
		el=me._map_bg=document.createElement('div');
		el.ggId="map_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : rgba(0,0,0,0.0784314);';
		hs+='border : 1px solid rgba(255,255,255,0.196078);';
		hs+='bottom : 16px;';
		hs+='cursor : default;';
		hs+='height : 45%;';
		hs+='position : absolute;';
		hs+='right : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 500px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 100%';
		me._map_bg.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_bg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getViewerSize().width <= 640) || 
				(player.getViewerSize().height <= 640)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(player.getViewerSize().width <= 1200) || 
				(player.getViewerSize().height <= 800)
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_bg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_bg.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_bg.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._map_bg.ggCurrentLogicStateScaling == 0) {
					me._map_bg.ggParameter.sx = 0.6;
					me._map_bg.ggParameter.sy = 0.6;
					me._map_bg.style[domTransform]=parameterToTransform(me._map_bg.ggParameter);
				}
				else if (me._map_bg.ggCurrentLogicStateScaling == 1) {
					me._map_bg.ggParameter.sx = 0.8;
					me._map_bg.ggParameter.sy = 0.8;
					me._map_bg.style[domTransform]=parameterToTransform(me._map_bg.ggParameter);
				}
				else {
					me._map_bg.ggParameter.sx = 1;
					me._map_bg.ggParameter.sy = 1;
					me._map_bg.style[domTransform]=parameterToTransform(me._map_bg.ggParameter);
				}
			}
		}
		me._map_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._scrollarea_uk=document.createElement('div');
		els=me._scrollarea_uk__content=document.createElement('div');
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 87px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 449px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_uk.ggScrollByX = function(diffX) {
			if(!me._scrollarea_uk.ggHorScrollVisible || diffX == 0) return;
			me._scrollarea_uk.ggScrollPosX = (me._scrollarea_uk__horScrollFg.offsetLeft + diffX);
			me._scrollarea_uk.ggScrollPosX = Math.max(me._scrollarea_uk.ggScrollPosX, 0);
			me._scrollarea_uk.ggScrollPosX = Math.min(me._scrollarea_uk.ggScrollPosX, me._scrollarea_uk__horScrollBg.clientWidth - me._scrollarea_uk__horScrollFg.clientWidth);
			me._scrollarea_uk__horScrollFg.style.left = me._scrollarea_uk.ggScrollPosX + 'px';
			me._scrollarea_uk__content.style.left = -(Math.round(me._scrollarea_uk.ggScrollPosX / me._scrollarea_uk.ggHPercentVisible)) + me._scrollarea_uk.ggContentLeftOffset + 'px';
			me._scrollarea_uk.ggScrollPosXPercent = (me._scrollarea_uk__horScrollFg.offsetLeft / me._scrollarea_uk__horScrollBg.clientWidth);
		}
		me._scrollarea_uk.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_uk.ggHorScrollVisible || diffX == 0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_uk.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_uk.ggScrollPosX >= me._scrollarea_uk__horScrollBg.clientWidth - me._scrollarea_uk__horScrollFg.clientWidth)) {
					me._scrollarea_uk.ggScrollPosX = Math.min(me._scrollarea_uk.ggScrollPosX, me._scrollarea_uk__horScrollBg.clientWidth - me._scrollarea_uk__horScrollFg.clientWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_uk.ggScrollPosX <= 0)) {
					me._scrollarea_uk.ggScrollPosX = Math.max(me._scrollarea_uk.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_uk__horScrollFg.style.left = me._scrollarea_uk.ggScrollPosX + 'px';
			me._scrollarea_uk__content.style.left = -(Math.round(me._scrollarea_uk.ggScrollPosX / me._scrollarea_uk.ggHPercentVisible)) + me._scrollarea_uk.ggContentLeftOffset + 'px';
			me._scrollarea_uk.ggScrollPosXPercent = (me._scrollarea_uk__horScrollFg.offsetLeft / me._scrollarea_uk__horScrollBg.clientWidth);
			}, 10);
		}
		me._scrollarea_uk.ggScrollByY = function(diffY) {
			if(!me._scrollarea_uk.ggVertScrollVisible || diffY == 0) return;
			me._scrollarea_uk.ggScrollPosY = (me._scrollarea_uk__vertScrollFg.offsetTop + diffY);
			me._scrollarea_uk.ggScrollPosY = Math.max(me._scrollarea_uk.ggScrollPosY, 0);
			me._scrollarea_uk.ggScrollPosY = Math.min(me._scrollarea_uk.ggScrollPosY, me._scrollarea_uk__vertScrollBg.clientHeight - me._scrollarea_uk__vertScrollFg.clientHeight);
			me._scrollarea_uk__vertScrollFg.style.top = me._scrollarea_uk.ggScrollPosY + 'px';
			me._scrollarea_uk__content.style.top = -(Math.round(me._scrollarea_uk.ggScrollPosY / me._scrollarea_uk.ggVPercentVisible)) + me._scrollarea_uk.ggContentTopOffset + 'px';
			me._scrollarea_uk.ggScrollPosYPercent = (me._scrollarea_uk__vertScrollFg.offsetTop / me._scrollarea_uk__vertScrollBg.clientHeight);
		}
		me._scrollarea_uk.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_uk.ggVertScrollVisible || diffY == 0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_uk.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_uk.ggScrollPosY >= me._scrollarea_uk__vertScrollBg.clientHeight - me._scrollarea_uk__vertScrollFg.clientHeight)) {
					me._scrollarea_uk.ggScrollPosY = Math.min(me._scrollarea_uk.ggScrollPosY, me._scrollarea_uk__vertScrollBg.clientHeight - me._scrollarea_uk__vertScrollFg.clientHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_uk.ggScrollPosY <= 0)) {
					me._scrollarea_uk.ggScrollPosY = Math.max(me._scrollarea_uk.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_uk__vertScrollFg.style.top = me._scrollarea_uk.ggScrollPosY + 'px';
			me._scrollarea_uk__content.style.top = -(Math.round(me._scrollarea_uk.ggScrollPosY / me._scrollarea_uk.ggVPercentVisible)) + me._scrollarea_uk.ggContentTopOffset + 'px';
			me._scrollarea_uk.ggScrollPosYPercent = (me._scrollarea_uk__vertScrollFg.offsetTop / me._scrollarea_uk__vertScrollBg.clientHeight);
			}, 10);
		}
		me._scrollarea_uk.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_uk.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_uk.ggHPercentVisible);
					me._scrollarea_uk.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_uk.clientWidth - (me._scrollarea_uk.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_uk.clientWidth - (me._scrollarea_uk.ggVertScrollVisible ? 15 : 0))) * me._scrollarea_uk.ggHPercentVisible);
					me._scrollarea_uk.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_uk.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_uk.ggVPercentVisible);
					me._scrollarea_uk.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_uk.clientHeight - (me._scrollarea_uk.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_uk.clientHeight - (me._scrollarea_uk.ggHorScrollVisible ? 15 : 0))) * me._scrollarea_uk.ggVPercentVisible);
					me._scrollarea_uk.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_uk.ggDragLastX = t[0].clientX;
			me._scrollarea_uk.ggDragLastY = t[0].clientY;
			me._scrollarea_uk__content.ontouchend = function() {
				me._scrollarea_uk__content.ontouchend = null;
				me._scrollarea_uk__content.ontouchmove = null;
			}
			me._scrollarea_uk__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._scrollarea_uk.ggDragLastX;
				var diffY = t[0].clientY - me._scrollarea_uk.ggDragLastY;
				me._scrollarea_uk.ggDragLastX = t[0].clientX;
				me._scrollarea_uk.ggDragLastY = t[0].clientY;
				me._scrollarea_uk.ggScrollByX(-diffX);
				me._scrollarea_uk.ggScrollByY(-diffY);
			}
		}
		elVertScrollBg = me._scrollarea_uk__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 456.75px; background-color: rgba(255,255,255,0.117647); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_uk__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 456.75px; background-color: rgba(255,255,255,0.784314); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scrollarea_uk.ggScrollPosY = 0;
		me._scrollarea_uk.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_uk.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scrollarea_uk.ggDragLastY;
				me._scrollarea_uk.ggDragLastY = e.clientY;
				me._scrollarea_uk.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_uk.ggDragLastY = t[0].clientY;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffY = t[0].clientY - me._scrollarea_uk.ggDragLastY;
				me._scrollarea_uk.ggDragLastY = t[0].clientY;
				me._scrollarea_uk.ggScrollByY(diffY);
			}
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._scrollarea_uk.ggScrollHeight;
			if (e.offsetY < me._scrollarea_uk.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_uk.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_uk__vertScrollBg.getBoundingClientRect();
			var diffY = me._scrollarea_uk.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scrollarea_uk.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_uk.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			var wheelDelta = Math.sign(e.deltaY);
			me._scrollarea_uk.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._scrollarea_uk__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea uk";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='cursor : pointer;';
		hs+='height : 93.9815%;';
		hs+='left : 16px;';
		hs+='opacity : 0.89999;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : hidden;';
		hs+='width : 464px;';
		hs+='pointer-events:auto;';
		hs+='padding-right:8px; margin-bottom: 16px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._scrollarea_uk.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_uk.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.ggUserdata.comment == "\u0433. \u0423\u0441\u0442\u044c-\u041a\u0443\u0442")
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(me.ggUserdata.comment != "\u0433. \u0423\u0441\u0442\u044c-\u041a\u0443\u0442")
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._scrollarea_uk.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._scrollarea_uk.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._scrollarea_uk.style[domTransition]='';
				if (me._scrollarea_uk.ggCurrentLogicStateVisible == 0) {
					me._scrollarea_uk.style.visibility=(Number(me._scrollarea_uk.style.opacity)>0||!me._scrollarea_uk.style.opacity)?'inherit':'hidden';
					me._scrollarea_uk.ggVisible=true;
				}
				else if (me._scrollarea_uk.ggCurrentLogicStateVisible == 1) {
					me._scrollarea_uk.style.visibility="hidden";
					me._scrollarea_uk.ggVisible=false;
				}
				else {
					me._scrollarea_uk.style.visibility="hidden";
					me._scrollarea_uk.ggVisible=false;
				}
			}
		}
		me._scrollarea_uk.ggUpdatePosition=function (useTransition) {
			{
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e.getBoundingClientRect) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes()) {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._scrollarea_uk.ggScrollPosY / me._scrollarea_uk.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._scrollarea_uk.ggHorScrollVisible && contentHeight > this.clientHeight - 15) || (!me._scrollarea_uk.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._scrollarea_uk__vertScrollBg.style.visibility = 'inherit';
					me._scrollarea_uk__vertScrollFg.style.visibility = 'inherit';
					me._scrollarea_uk.ggVertScrollVisible = true;
				} else {
					me._scrollarea_uk__vertScrollBg.style.visibility = 'hidden';
					me._scrollarea_uk__vertScrollFg.style.visibility = 'hidden';
					me._scrollarea_uk.ggVertScrollVisible = false;
				}
				if(me._scrollarea_uk.ggVertScrollVisible) {
					if (me._scrollarea_uk.ggHorScrollVisible) {
						me._scrollarea_uk.ggAvailableHeight = me._scrollarea_uk.clientHeight - 15;
						me._scrollarea_uk__cornerBg.style.visibility = 'inherit';
					} else {
						me._scrollarea_uk.ggAvailableHeight = me._scrollarea_uk.clientHeight;
						me._scrollarea_uk__cornerBg.style.visibility = 'hidden';
					}
					me._scrollarea_uk__vertScrollBg.style.height = me._scrollarea_uk.ggAvailableHeight + 'px';
					me._scrollarea_uk.ggVPercentVisible = me._scrollarea_uk.ggAvailableHeight / contentHeight;
					if (me._scrollarea_uk.ggVPercentVisible > 1.0) me._scrollarea_uk.ggVPercentVisible = 1.0;
					me._scrollarea_uk.ggScrollHeight =  Math.round(me._scrollarea_uk__vertScrollBg.clientHeight * me._scrollarea_uk.ggVPercentVisible);
					me._scrollarea_uk__vertScrollFg.style.height = me._scrollarea_uk.ggScrollHeight + 'px';
					me._scrollarea_uk.ggScrollPosY = me._scrollarea_uk.ggScrollPosYPercent * me._scrollarea_uk.ggAvailableHeight;
					me._scrollarea_uk.ggScrollPosY = Math.min(me._scrollarea_uk.ggScrollPosY, me._scrollarea_uk__vertScrollBg.clientHeight - me._scrollarea_uk__vertScrollFg.clientHeight);
					me._scrollarea_uk__vertScrollFg.style.top = me._scrollarea_uk.ggScrollPosY + 'px';
					me._scrollarea_uk__content.style.top = -(Math.round(me._scrollarea_uk.ggScrollPosY / me._scrollarea_uk.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				} else {
					me._scrollarea_uk.ggScrollPosY = 0;
					me._scrollarea_uk.ggScrollPosYPercent = 0.0;
					me._scrollarea_uk__content.style.top = this.ggContentTopOffset + 'px';
					me._scrollarea_uk__cornerBg.style.visibility = 'hidden';
				}
			}
		}
		el=me._dropdown_cloner_uk=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggWidth = 450;
		el.ggHeight = 88;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._dropdown_cloner_uk.callChildLogicBlocks_changenodeid = function(){
			if(me._dropdown_cloner_uk.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner_uk.ggInstances.length; i++) {
					if (me._dropdown_cloner_uk.ggInstances[i]._checkmark_tick_uk && me._dropdown_cloner_uk.ggInstances[i]._checkmark_tick_uk.logicBlock_visible) {
						me._dropdown_cloner_uk.ggInstances[i]._checkmark_tick_uk.logicBlock_visible();
					}
				}
			}
		}
		me._dropdown_cloner_uk.callChildLogicBlocks_mouseover = function(){
			if(me._dropdown_cloner_uk.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner_uk.ggInstances.length; i++) {
					if (me._dropdown_cloner_uk.ggInstances[i]._itembg_uk && me._dropdown_cloner_uk.ggInstances[i]._itembg_uk.logicBlock_backgroundcolor) {
						me._dropdown_cloner_uk.ggInstances[i]._itembg_uk.logicBlock_backgroundcolor();
					}
				}
			}
		}
		me._dropdown_cloner_uk.callChildLogicBlocks_mouseover = function(){
			if(me._dropdown_cloner_uk.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner_uk.ggInstances.length; i++) {
					if (me._dropdown_cloner_uk.ggInstances[i]._dropdown_menu_text_uk && me._dropdown_cloner_uk.ggInstances[i]._dropdown_menu_text_uk.logicBlock_textcolor) {
						me._dropdown_cloner_uk.ggInstances[i]._dropdown_menu_text_uk.logicBlock_textcolor();
					}
				}
			}
		}
		me._dropdown_cloner_uk.callChildLogicBlocks_active = function(){
			if(me._dropdown_cloner_uk.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner_uk.ggInstances.length; i++) {
					if (me._dropdown_cloner_uk.ggInstances[i]._itembg_uk && me._dropdown_cloner_uk.ggInstances[i]._itembg_uk.logicBlock_backgroundcolor) {
						me._dropdown_cloner_uk.ggInstances[i]._itembg_uk.logicBlock_backgroundcolor();
					}
					if (me._dropdown_cloner_uk.ggInstances[i]._dropdown_menu_text_uk && me._dropdown_cloner_uk.ggInstances[i]._dropdown_menu_text_uk.logicBlock_textcolor) {
						me._dropdown_cloner_uk.ggInstances[i]._dropdown_menu_text_uk.logicBlock_textcolor();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._dropdown_cloner_uk.ggUpdating == true) return;
			me._dropdown_cloner_uk.ggUpdating = true;
			var el=me._dropdown_cloner_uk;
			el.ggInstances = [];
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			el.ggCurrentFilter = filter;
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var numCols = me._dropdown_cloner_uk.ggNumRepeat;
			if (numCols < 1) numCols = 1;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				if (filter.length > 0) {
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._dropdown_cloner_uk.ggHeight) + 'px';
				parameter.left=(column * me._dropdown_cloner_uk.ggWidth) + 'px';
				var inst = new SkinCloner_dropdown_cloner_uk_Class(nodeId, me, el, parameter);
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= numCols) {
					column = 0;
					row++;
				}
				}
			}
			me._dropdown_cloner_uk.callChildLogicBlocks_changenodeid();
			me._dropdown_cloner_uk.callChildLogicBlocks_mouseover();
			me._dropdown_cloner_uk.callChildLogicBlocks_mouseover();
			me._dropdown_cloner_uk.callChildLogicBlocks_active();
			me._dropdown_cloner_uk.ggUpdating = false;
			player.triggerEvent('clonerchanged');
		}
		el.ggFilter = [];
		el.ggFilter[0] = "г. Усть-Кут";
		el.ggId="Dropdown Cloner uk";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 88px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 450px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_cloner_uk.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_cloner_uk.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._dropdown_cloner_uk.childNodes.length; i++) {
				var child=me._dropdown_cloner_uk.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._dropdown_cloner_uk.ggUpdatePosition=function (useTransition) {
			var w=player.getViewerSize().width;
			var h=player.getViewerSize().height
			if ((!me._dropdown_cloner_uk.ggLastSize) || (me._dropdown_cloner_uk.ggLastSize.w!=w) || (me._dropdown_cloner_uk.ggLastSize.h!=h)) {
				me._dropdown_cloner_uk.ggLastSize={ w:w, h:h };
				me._dropdown_cloner_uk.ggUpdate();
			}
		}
		me._dropdown_cloner_uk.ggNodeChange=function () {
			me._dropdown_cloner_uk.ggUpdateConditionNodeChange();
		}
		me._scrollarea_uk__content.appendChild(me._dropdown_cloner_uk);
		me._map_bg.appendChild(me._scrollarea_uk);
		el=me._scrollarea_icho=document.createElement('div');
		els=me._scrollarea_icho__content=document.createElement('div');
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 87px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 449px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_icho.ggScrollByX = function(diffX) {
			if(!me._scrollarea_icho.ggHorScrollVisible || diffX == 0) return;
			me._scrollarea_icho.ggScrollPosX = (me._scrollarea_icho__horScrollFg.offsetLeft + diffX);
			me._scrollarea_icho.ggScrollPosX = Math.max(me._scrollarea_icho.ggScrollPosX, 0);
			me._scrollarea_icho.ggScrollPosX = Math.min(me._scrollarea_icho.ggScrollPosX, me._scrollarea_icho__horScrollBg.clientWidth - me._scrollarea_icho__horScrollFg.clientWidth);
			me._scrollarea_icho__horScrollFg.style.left = me._scrollarea_icho.ggScrollPosX + 'px';
			me._scrollarea_icho__content.style.left = -(Math.round(me._scrollarea_icho.ggScrollPosX / me._scrollarea_icho.ggHPercentVisible)) + me._scrollarea_icho.ggContentLeftOffset + 'px';
			me._scrollarea_icho.ggScrollPosXPercent = (me._scrollarea_icho__horScrollFg.offsetLeft / me._scrollarea_icho__horScrollBg.clientWidth);
		}
		me._scrollarea_icho.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_icho.ggHorScrollVisible || diffX == 0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_icho.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_icho.ggScrollPosX >= me._scrollarea_icho__horScrollBg.clientWidth - me._scrollarea_icho__horScrollFg.clientWidth)) {
					me._scrollarea_icho.ggScrollPosX = Math.min(me._scrollarea_icho.ggScrollPosX, me._scrollarea_icho__horScrollBg.clientWidth - me._scrollarea_icho__horScrollFg.clientWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_icho.ggScrollPosX <= 0)) {
					me._scrollarea_icho.ggScrollPosX = Math.max(me._scrollarea_icho.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_icho__horScrollFg.style.left = me._scrollarea_icho.ggScrollPosX + 'px';
			me._scrollarea_icho__content.style.left = -(Math.round(me._scrollarea_icho.ggScrollPosX / me._scrollarea_icho.ggHPercentVisible)) + me._scrollarea_icho.ggContentLeftOffset + 'px';
			me._scrollarea_icho.ggScrollPosXPercent = (me._scrollarea_icho__horScrollFg.offsetLeft / me._scrollarea_icho__horScrollBg.clientWidth);
			}, 10);
		}
		me._scrollarea_icho.ggScrollByY = function(diffY) {
			if(!me._scrollarea_icho.ggVertScrollVisible || diffY == 0) return;
			me._scrollarea_icho.ggScrollPosY = (me._scrollarea_icho__vertScrollFg.offsetTop + diffY);
			me._scrollarea_icho.ggScrollPosY = Math.max(me._scrollarea_icho.ggScrollPosY, 0);
			me._scrollarea_icho.ggScrollPosY = Math.min(me._scrollarea_icho.ggScrollPosY, me._scrollarea_icho__vertScrollBg.clientHeight - me._scrollarea_icho__vertScrollFg.clientHeight);
			me._scrollarea_icho__vertScrollFg.style.top = me._scrollarea_icho.ggScrollPosY + 'px';
			me._scrollarea_icho__content.style.top = -(Math.round(me._scrollarea_icho.ggScrollPosY / me._scrollarea_icho.ggVPercentVisible)) + me._scrollarea_icho.ggContentTopOffset + 'px';
			me._scrollarea_icho.ggScrollPosYPercent = (me._scrollarea_icho__vertScrollFg.offsetTop / me._scrollarea_icho__vertScrollBg.clientHeight);
		}
		me._scrollarea_icho.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_icho.ggVertScrollVisible || diffY == 0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_icho.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_icho.ggScrollPosY >= me._scrollarea_icho__vertScrollBg.clientHeight - me._scrollarea_icho__vertScrollFg.clientHeight)) {
					me._scrollarea_icho.ggScrollPosY = Math.min(me._scrollarea_icho.ggScrollPosY, me._scrollarea_icho__vertScrollBg.clientHeight - me._scrollarea_icho__vertScrollFg.clientHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_icho.ggScrollPosY <= 0)) {
					me._scrollarea_icho.ggScrollPosY = Math.max(me._scrollarea_icho.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_icho__vertScrollFg.style.top = me._scrollarea_icho.ggScrollPosY + 'px';
			me._scrollarea_icho__content.style.top = -(Math.round(me._scrollarea_icho.ggScrollPosY / me._scrollarea_icho.ggVPercentVisible)) + me._scrollarea_icho.ggContentTopOffset + 'px';
			me._scrollarea_icho.ggScrollPosYPercent = (me._scrollarea_icho__vertScrollFg.offsetTop / me._scrollarea_icho__vertScrollBg.clientHeight);
			}, 10);
		}
		me._scrollarea_icho.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_icho.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_icho.ggHPercentVisible);
					me._scrollarea_icho.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_icho.clientWidth - (me._scrollarea_icho.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_icho.clientWidth - (me._scrollarea_icho.ggVertScrollVisible ? 15 : 0))) * me._scrollarea_icho.ggHPercentVisible);
					me._scrollarea_icho.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_icho.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_icho.ggVPercentVisible);
					me._scrollarea_icho.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_icho.clientHeight - (me._scrollarea_icho.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_icho.clientHeight - (me._scrollarea_icho.ggHorScrollVisible ? 15 : 0))) * me._scrollarea_icho.ggVPercentVisible);
					me._scrollarea_icho.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_icho.ggDragLastX = t[0].clientX;
			me._scrollarea_icho.ggDragLastY = t[0].clientY;
			me._scrollarea_icho__content.ontouchend = function() {
				me._scrollarea_icho__content.ontouchend = null;
				me._scrollarea_icho__content.ontouchmove = null;
			}
			me._scrollarea_icho__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._scrollarea_icho.ggDragLastX;
				var diffY = t[0].clientY - me._scrollarea_icho.ggDragLastY;
				me._scrollarea_icho.ggDragLastX = t[0].clientX;
				me._scrollarea_icho.ggDragLastY = t[0].clientY;
				me._scrollarea_icho.ggScrollByX(-diffX);
				me._scrollarea_icho.ggScrollByY(-diffY);
			}
		}
		elVertScrollBg = me._scrollarea_icho__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 456.75px; background-color: rgba(255,255,255,0.117647); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_icho__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 456.75px; background-color: rgba(255,255,255,0.784314); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scrollarea_icho.ggScrollPosY = 0;
		me._scrollarea_icho.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_icho.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scrollarea_icho.ggDragLastY;
				me._scrollarea_icho.ggDragLastY = e.clientY;
				me._scrollarea_icho.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_icho.ggDragLastY = t[0].clientY;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffY = t[0].clientY - me._scrollarea_icho.ggDragLastY;
				me._scrollarea_icho.ggDragLastY = t[0].clientY;
				me._scrollarea_icho.ggScrollByY(diffY);
			}
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._scrollarea_icho.ggScrollHeight;
			if (e.offsetY < me._scrollarea_icho.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_icho.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_icho__vertScrollBg.getBoundingClientRect();
			var diffY = me._scrollarea_icho.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scrollarea_icho.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_icho.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			var wheelDelta = Math.sign(e.deltaY);
			me._scrollarea_icho.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._scrollarea_icho__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea icho";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='cursor : pointer;';
		hs+='height : 93.9815%;';
		hs+='left : 16px;';
		hs+='opacity : 0.89999;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : hidden;';
		hs+='width : 464px;';
		hs+='pointer-events:auto;';
		hs+='padding-right:8px; margin-bottom: 16px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._scrollarea_icho.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_icho.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.ggUserdata.comment == "\u0418\u0447\u0451\u0434\u0438\u043d\u0441\u043a\u043e\u0435 \u043c\u0435\u0441\u0442\u043e\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0435")
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(me.ggUserdata.comment != "\u0418\u0447\u0451\u0434\u0438\u043d\u0441\u043a\u043e\u0435 \u043c\u0435\u0441\u0442\u043e\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0435")
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._scrollarea_icho.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._scrollarea_icho.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._scrollarea_icho.style[domTransition]='';
				if (me._scrollarea_icho.ggCurrentLogicStateVisible == 0) {
					me._scrollarea_icho.style.visibility=(Number(me._scrollarea_icho.style.opacity)>0||!me._scrollarea_icho.style.opacity)?'inherit':'hidden';
					me._scrollarea_icho.ggVisible=true;
				}
				else if (me._scrollarea_icho.ggCurrentLogicStateVisible == 1) {
					me._scrollarea_icho.style.visibility="hidden";
					me._scrollarea_icho.ggVisible=false;
				}
				else {
					me._scrollarea_icho.style.visibility="hidden";
					me._scrollarea_icho.ggVisible=false;
				}
			}
		}
		me._scrollarea_icho.ggUpdatePosition=function (useTransition) {
			{
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e.getBoundingClientRect) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes()) {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._scrollarea_icho.ggScrollPosY / me._scrollarea_icho.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._scrollarea_icho.ggHorScrollVisible && contentHeight > this.clientHeight - 15) || (!me._scrollarea_icho.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._scrollarea_icho__vertScrollBg.style.visibility = 'inherit';
					me._scrollarea_icho__vertScrollFg.style.visibility = 'inherit';
					me._scrollarea_icho.ggVertScrollVisible = true;
				} else {
					me._scrollarea_icho__vertScrollBg.style.visibility = 'hidden';
					me._scrollarea_icho__vertScrollFg.style.visibility = 'hidden';
					me._scrollarea_icho.ggVertScrollVisible = false;
				}
				if(me._scrollarea_icho.ggVertScrollVisible) {
					if (me._scrollarea_icho.ggHorScrollVisible) {
						me._scrollarea_icho.ggAvailableHeight = me._scrollarea_icho.clientHeight - 15;
						me._scrollarea_icho__cornerBg.style.visibility = 'inherit';
					} else {
						me._scrollarea_icho.ggAvailableHeight = me._scrollarea_icho.clientHeight;
						me._scrollarea_icho__cornerBg.style.visibility = 'hidden';
					}
					me._scrollarea_icho__vertScrollBg.style.height = me._scrollarea_icho.ggAvailableHeight + 'px';
					me._scrollarea_icho.ggVPercentVisible = me._scrollarea_icho.ggAvailableHeight / contentHeight;
					if (me._scrollarea_icho.ggVPercentVisible > 1.0) me._scrollarea_icho.ggVPercentVisible = 1.0;
					me._scrollarea_icho.ggScrollHeight =  Math.round(me._scrollarea_icho__vertScrollBg.clientHeight * me._scrollarea_icho.ggVPercentVisible);
					me._scrollarea_icho__vertScrollFg.style.height = me._scrollarea_icho.ggScrollHeight + 'px';
					me._scrollarea_icho.ggScrollPosY = me._scrollarea_icho.ggScrollPosYPercent * me._scrollarea_icho.ggAvailableHeight;
					me._scrollarea_icho.ggScrollPosY = Math.min(me._scrollarea_icho.ggScrollPosY, me._scrollarea_icho__vertScrollBg.clientHeight - me._scrollarea_icho__vertScrollFg.clientHeight);
					me._scrollarea_icho__vertScrollFg.style.top = me._scrollarea_icho.ggScrollPosY + 'px';
					me._scrollarea_icho__content.style.top = -(Math.round(me._scrollarea_icho.ggScrollPosY / me._scrollarea_icho.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				} else {
					me._scrollarea_icho.ggScrollPosY = 0;
					me._scrollarea_icho.ggScrollPosYPercent = 0.0;
					me._scrollarea_icho__content.style.top = this.ggContentTopOffset + 'px';
					me._scrollarea_icho__cornerBg.style.visibility = 'hidden';
				}
			}
		}
		el=me._dropdown_cloner_icho=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggWidth = 450;
		el.ggHeight = 88;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._dropdown_cloner_icho.callChildLogicBlocks_changenodeid = function(){
			if(me._dropdown_cloner_icho.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner_icho.ggInstances.length; i++) {
					if (me._dropdown_cloner_icho.ggInstances[i]._checkmark_tick_icho && me._dropdown_cloner_icho.ggInstances[i]._checkmark_tick_icho.logicBlock_visible) {
						me._dropdown_cloner_icho.ggInstances[i]._checkmark_tick_icho.logicBlock_visible();
					}
				}
			}
		}
		me._dropdown_cloner_icho.callChildLogicBlocks_mouseover = function(){
			if(me._dropdown_cloner_icho.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner_icho.ggInstances.length; i++) {
					if (me._dropdown_cloner_icho.ggInstances[i]._itembg_icho && me._dropdown_cloner_icho.ggInstances[i]._itembg_icho.logicBlock_backgroundcolor) {
						me._dropdown_cloner_icho.ggInstances[i]._itembg_icho.logicBlock_backgroundcolor();
					}
				}
			}
		}
		me._dropdown_cloner_icho.callChildLogicBlocks_mouseover = function(){
			if(me._dropdown_cloner_icho.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner_icho.ggInstances.length; i++) {
					if (me._dropdown_cloner_icho.ggInstances[i]._dropdown_menu_text_icho && me._dropdown_cloner_icho.ggInstances[i]._dropdown_menu_text_icho.logicBlock_textcolor) {
						me._dropdown_cloner_icho.ggInstances[i]._dropdown_menu_text_icho.logicBlock_textcolor();
					}
				}
			}
		}
		me._dropdown_cloner_icho.callChildLogicBlocks_active = function(){
			if(me._dropdown_cloner_icho.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner_icho.ggInstances.length; i++) {
					if (me._dropdown_cloner_icho.ggInstances[i]._itembg_icho && me._dropdown_cloner_icho.ggInstances[i]._itembg_icho.logicBlock_backgroundcolor) {
						me._dropdown_cloner_icho.ggInstances[i]._itembg_icho.logicBlock_backgroundcolor();
					}
					if (me._dropdown_cloner_icho.ggInstances[i]._dropdown_menu_text_icho && me._dropdown_cloner_icho.ggInstances[i]._dropdown_menu_text_icho.logicBlock_textcolor) {
						me._dropdown_cloner_icho.ggInstances[i]._dropdown_menu_text_icho.logicBlock_textcolor();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._dropdown_cloner_icho.ggUpdating == true) return;
			me._dropdown_cloner_icho.ggUpdating = true;
			var el=me._dropdown_cloner_icho;
			el.ggInstances = [];
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			el.ggCurrentFilter = filter;
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var numCols = me._dropdown_cloner_icho.ggNumRepeat;
			if (numCols < 1) numCols = 1;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				if (filter.length > 0) {
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._dropdown_cloner_icho.ggHeight) + 'px';
				parameter.left=(column * me._dropdown_cloner_icho.ggWidth) + 'px';
				var inst = new SkinCloner_dropdown_cloner_icho_Class(nodeId, me, el, parameter);
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= numCols) {
					column = 0;
					row++;
				}
				}
			}
			me._dropdown_cloner_icho.callChildLogicBlocks_changenodeid();
			me._dropdown_cloner_icho.callChildLogicBlocks_mouseover();
			me._dropdown_cloner_icho.callChildLogicBlocks_mouseover();
			me._dropdown_cloner_icho.callChildLogicBlocks_active();
			me._dropdown_cloner_icho.ggUpdating = false;
			player.triggerEvent('clonerchanged');
		}
		el.ggFilter = [];
		el.ggFilter[0] = "Ичёдинское месторождение";
		el.ggId="Dropdown Cloner icho";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 88px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 450px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_cloner_icho.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_cloner_icho.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._dropdown_cloner_icho.childNodes.length; i++) {
				var child=me._dropdown_cloner_icho.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._dropdown_cloner_icho.ggUpdatePosition=function (useTransition) {
			var w=player.getViewerSize().width;
			var h=player.getViewerSize().height
			if ((!me._dropdown_cloner_icho.ggLastSize) || (me._dropdown_cloner_icho.ggLastSize.w!=w) || (me._dropdown_cloner_icho.ggLastSize.h!=h)) {
				me._dropdown_cloner_icho.ggLastSize={ w:w, h:h };
				me._dropdown_cloner_icho.ggUpdate();
			}
		}
		me._dropdown_cloner_icho.ggNodeChange=function () {
			me._dropdown_cloner_icho.ggUpdateConditionNodeChange();
		}
		me._scrollarea_icho__content.appendChild(me._dropdown_cloner_icho);
		me._map_bg.appendChild(me._scrollarea_icho);
		el=me._scrollarea_mark=document.createElement('div');
		els=me._scrollarea_mark__content=document.createElement('div');
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 87px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 449px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_mark.ggScrollByX = function(diffX) {
			if(!me._scrollarea_mark.ggHorScrollVisible || diffX == 0) return;
			me._scrollarea_mark.ggScrollPosX = (me._scrollarea_mark__horScrollFg.offsetLeft + diffX);
			me._scrollarea_mark.ggScrollPosX = Math.max(me._scrollarea_mark.ggScrollPosX, 0);
			me._scrollarea_mark.ggScrollPosX = Math.min(me._scrollarea_mark.ggScrollPosX, me._scrollarea_mark__horScrollBg.clientWidth - me._scrollarea_mark__horScrollFg.clientWidth);
			me._scrollarea_mark__horScrollFg.style.left = me._scrollarea_mark.ggScrollPosX + 'px';
			me._scrollarea_mark__content.style.left = -(Math.round(me._scrollarea_mark.ggScrollPosX / me._scrollarea_mark.ggHPercentVisible)) + me._scrollarea_mark.ggContentLeftOffset + 'px';
			me._scrollarea_mark.ggScrollPosXPercent = (me._scrollarea_mark__horScrollFg.offsetLeft / me._scrollarea_mark__horScrollBg.clientWidth);
		}
		me._scrollarea_mark.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_mark.ggHorScrollVisible || diffX == 0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_mark.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_mark.ggScrollPosX >= me._scrollarea_mark__horScrollBg.clientWidth - me._scrollarea_mark__horScrollFg.clientWidth)) {
					me._scrollarea_mark.ggScrollPosX = Math.min(me._scrollarea_mark.ggScrollPosX, me._scrollarea_mark__horScrollBg.clientWidth - me._scrollarea_mark__horScrollFg.clientWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_mark.ggScrollPosX <= 0)) {
					me._scrollarea_mark.ggScrollPosX = Math.max(me._scrollarea_mark.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_mark__horScrollFg.style.left = me._scrollarea_mark.ggScrollPosX + 'px';
			me._scrollarea_mark__content.style.left = -(Math.round(me._scrollarea_mark.ggScrollPosX / me._scrollarea_mark.ggHPercentVisible)) + me._scrollarea_mark.ggContentLeftOffset + 'px';
			me._scrollarea_mark.ggScrollPosXPercent = (me._scrollarea_mark__horScrollFg.offsetLeft / me._scrollarea_mark__horScrollBg.clientWidth);
			}, 10);
		}
		me._scrollarea_mark.ggScrollByY = function(diffY) {
			if(!me._scrollarea_mark.ggVertScrollVisible || diffY == 0) return;
			me._scrollarea_mark.ggScrollPosY = (me._scrollarea_mark__vertScrollFg.offsetTop + diffY);
			me._scrollarea_mark.ggScrollPosY = Math.max(me._scrollarea_mark.ggScrollPosY, 0);
			me._scrollarea_mark.ggScrollPosY = Math.min(me._scrollarea_mark.ggScrollPosY, me._scrollarea_mark__vertScrollBg.clientHeight - me._scrollarea_mark__vertScrollFg.clientHeight);
			me._scrollarea_mark__vertScrollFg.style.top = me._scrollarea_mark.ggScrollPosY + 'px';
			me._scrollarea_mark__content.style.top = -(Math.round(me._scrollarea_mark.ggScrollPosY / me._scrollarea_mark.ggVPercentVisible)) + me._scrollarea_mark.ggContentTopOffset + 'px';
			me._scrollarea_mark.ggScrollPosYPercent = (me._scrollarea_mark__vertScrollFg.offsetTop / me._scrollarea_mark__vertScrollBg.clientHeight);
		}
		me._scrollarea_mark.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_mark.ggVertScrollVisible || diffY == 0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_mark.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_mark.ggScrollPosY >= me._scrollarea_mark__vertScrollBg.clientHeight - me._scrollarea_mark__vertScrollFg.clientHeight)) {
					me._scrollarea_mark.ggScrollPosY = Math.min(me._scrollarea_mark.ggScrollPosY, me._scrollarea_mark__vertScrollBg.clientHeight - me._scrollarea_mark__vertScrollFg.clientHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_mark.ggScrollPosY <= 0)) {
					me._scrollarea_mark.ggScrollPosY = Math.max(me._scrollarea_mark.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_mark__vertScrollFg.style.top = me._scrollarea_mark.ggScrollPosY + 'px';
			me._scrollarea_mark__content.style.top = -(Math.round(me._scrollarea_mark.ggScrollPosY / me._scrollarea_mark.ggVPercentVisible)) + me._scrollarea_mark.ggContentTopOffset + 'px';
			me._scrollarea_mark.ggScrollPosYPercent = (me._scrollarea_mark__vertScrollFg.offsetTop / me._scrollarea_mark__vertScrollBg.clientHeight);
			}, 10);
		}
		me._scrollarea_mark.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_mark.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_mark.ggHPercentVisible);
					me._scrollarea_mark.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_mark.clientWidth - (me._scrollarea_mark.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_mark.clientWidth - (me._scrollarea_mark.ggVertScrollVisible ? 15 : 0))) * me._scrollarea_mark.ggHPercentVisible);
					me._scrollarea_mark.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_mark.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_mark.ggVPercentVisible);
					me._scrollarea_mark.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_mark.clientHeight - (me._scrollarea_mark.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_mark.clientHeight - (me._scrollarea_mark.ggHorScrollVisible ? 15 : 0))) * me._scrollarea_mark.ggVPercentVisible);
					me._scrollarea_mark.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_mark.ggDragLastX = t[0].clientX;
			me._scrollarea_mark.ggDragLastY = t[0].clientY;
			me._scrollarea_mark__content.ontouchend = function() {
				me._scrollarea_mark__content.ontouchend = null;
				me._scrollarea_mark__content.ontouchmove = null;
			}
			me._scrollarea_mark__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._scrollarea_mark.ggDragLastX;
				var diffY = t[0].clientY - me._scrollarea_mark.ggDragLastY;
				me._scrollarea_mark.ggDragLastX = t[0].clientX;
				me._scrollarea_mark.ggDragLastY = t[0].clientY;
				me._scrollarea_mark.ggScrollByX(-diffX);
				me._scrollarea_mark.ggScrollByY(-diffY);
			}
		}
		elVertScrollBg = me._scrollarea_mark__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 456.75px; background-color: rgba(255,255,255,0.117647); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_mark__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 456.75px; background-color: rgba(255,255,255,0.784314); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scrollarea_mark.ggScrollPosY = 0;
		me._scrollarea_mark.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_mark.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scrollarea_mark.ggDragLastY;
				me._scrollarea_mark.ggDragLastY = e.clientY;
				me._scrollarea_mark.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_mark.ggDragLastY = t[0].clientY;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffY = t[0].clientY - me._scrollarea_mark.ggDragLastY;
				me._scrollarea_mark.ggDragLastY = t[0].clientY;
				me._scrollarea_mark.ggScrollByY(diffY);
			}
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._scrollarea_mark.ggScrollHeight;
			if (e.offsetY < me._scrollarea_mark.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_mark.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_mark__vertScrollBg.getBoundingClientRect();
			var diffY = me._scrollarea_mark.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scrollarea_mark.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_mark.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			var wheelDelta = Math.sign(e.deltaY);
			me._scrollarea_mark.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._scrollarea_mark__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea mark";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='cursor : pointer;';
		hs+='height : 93.9815%;';
		hs+='left : 16px;';
		hs+='opacity : 0.89999;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : hidden;';
		hs+='width : 464px;';
		hs+='pointer-events:auto;';
		hs+='padding-right:8px; margin-bottom: 16px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._scrollarea_mark.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_mark.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.ggUserdata.comment == "\u041c\u0430\u0440\u043a\u043e\u0432\u0441\u043a\u043e\u0435 \u043c\u0435\u0441\u0442\u043e\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0435")
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(me.ggUserdata.comment != "\u041c\u0430\u0440\u043a\u043e\u0432\u0441\u043a\u043e\u0435 \u043c\u0435\u0441\u0442\u043e\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0435")
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._scrollarea_mark.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._scrollarea_mark.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._scrollarea_mark.style[domTransition]='';
				if (me._scrollarea_mark.ggCurrentLogicStateVisible == 0) {
					me._scrollarea_mark.style.visibility=(Number(me._scrollarea_mark.style.opacity)>0||!me._scrollarea_mark.style.opacity)?'inherit':'hidden';
					me._scrollarea_mark.ggVisible=true;
				}
				else if (me._scrollarea_mark.ggCurrentLogicStateVisible == 1) {
					me._scrollarea_mark.style.visibility="hidden";
					me._scrollarea_mark.ggVisible=false;
				}
				else {
					me._scrollarea_mark.style.visibility="hidden";
					me._scrollarea_mark.ggVisible=false;
				}
			}
		}
		me._scrollarea_mark.ggUpdatePosition=function (useTransition) {
			{
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e.getBoundingClientRect) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes()) {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._scrollarea_mark.ggScrollPosY / me._scrollarea_mark.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._scrollarea_mark.ggHorScrollVisible && contentHeight > this.clientHeight - 15) || (!me._scrollarea_mark.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._scrollarea_mark__vertScrollBg.style.visibility = 'inherit';
					me._scrollarea_mark__vertScrollFg.style.visibility = 'inherit';
					me._scrollarea_mark.ggVertScrollVisible = true;
				} else {
					me._scrollarea_mark__vertScrollBg.style.visibility = 'hidden';
					me._scrollarea_mark__vertScrollFg.style.visibility = 'hidden';
					me._scrollarea_mark.ggVertScrollVisible = false;
				}
				if(me._scrollarea_mark.ggVertScrollVisible) {
					if (me._scrollarea_mark.ggHorScrollVisible) {
						me._scrollarea_mark.ggAvailableHeight = me._scrollarea_mark.clientHeight - 15;
						me._scrollarea_mark__cornerBg.style.visibility = 'inherit';
					} else {
						me._scrollarea_mark.ggAvailableHeight = me._scrollarea_mark.clientHeight;
						me._scrollarea_mark__cornerBg.style.visibility = 'hidden';
					}
					me._scrollarea_mark__vertScrollBg.style.height = me._scrollarea_mark.ggAvailableHeight + 'px';
					me._scrollarea_mark.ggVPercentVisible = me._scrollarea_mark.ggAvailableHeight / contentHeight;
					if (me._scrollarea_mark.ggVPercentVisible > 1.0) me._scrollarea_mark.ggVPercentVisible = 1.0;
					me._scrollarea_mark.ggScrollHeight =  Math.round(me._scrollarea_mark__vertScrollBg.clientHeight * me._scrollarea_mark.ggVPercentVisible);
					me._scrollarea_mark__vertScrollFg.style.height = me._scrollarea_mark.ggScrollHeight + 'px';
					me._scrollarea_mark.ggScrollPosY = me._scrollarea_mark.ggScrollPosYPercent * me._scrollarea_mark.ggAvailableHeight;
					me._scrollarea_mark.ggScrollPosY = Math.min(me._scrollarea_mark.ggScrollPosY, me._scrollarea_mark__vertScrollBg.clientHeight - me._scrollarea_mark__vertScrollFg.clientHeight);
					me._scrollarea_mark__vertScrollFg.style.top = me._scrollarea_mark.ggScrollPosY + 'px';
					me._scrollarea_mark__content.style.top = -(Math.round(me._scrollarea_mark.ggScrollPosY / me._scrollarea_mark.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				} else {
					me._scrollarea_mark.ggScrollPosY = 0;
					me._scrollarea_mark.ggScrollPosYPercent = 0.0;
					me._scrollarea_mark__content.style.top = this.ggContentTopOffset + 'px';
					me._scrollarea_mark__cornerBg.style.visibility = 'hidden';
				}
			}
		}
		el=me._dropdown_cloner_mark=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggWidth = 450;
		el.ggHeight = 88;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._dropdown_cloner_mark.callChildLogicBlocks_changenodeid = function(){
			if(me._dropdown_cloner_mark.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner_mark.ggInstances.length; i++) {
					if (me._dropdown_cloner_mark.ggInstances[i]._checkmark_tick_mark && me._dropdown_cloner_mark.ggInstances[i]._checkmark_tick_mark.logicBlock_visible) {
						me._dropdown_cloner_mark.ggInstances[i]._checkmark_tick_mark.logicBlock_visible();
					}
				}
			}
		}
		me._dropdown_cloner_mark.callChildLogicBlocks_mouseover = function(){
			if(me._dropdown_cloner_mark.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner_mark.ggInstances.length; i++) {
					if (me._dropdown_cloner_mark.ggInstances[i]._itembg_mark && me._dropdown_cloner_mark.ggInstances[i]._itembg_mark.logicBlock_backgroundcolor) {
						me._dropdown_cloner_mark.ggInstances[i]._itembg_mark.logicBlock_backgroundcolor();
					}
				}
			}
		}
		me._dropdown_cloner_mark.callChildLogicBlocks_mouseover = function(){
			if(me._dropdown_cloner_mark.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner_mark.ggInstances.length; i++) {
					if (me._dropdown_cloner_mark.ggInstances[i]._dropdown_menu_text_mark && me._dropdown_cloner_mark.ggInstances[i]._dropdown_menu_text_mark.logicBlock_textcolor) {
						me._dropdown_cloner_mark.ggInstances[i]._dropdown_menu_text_mark.logicBlock_textcolor();
					}
				}
			}
		}
		me._dropdown_cloner_mark.callChildLogicBlocks_active = function(){
			if(me._dropdown_cloner_mark.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner_mark.ggInstances.length; i++) {
					if (me._dropdown_cloner_mark.ggInstances[i]._itembg_mark && me._dropdown_cloner_mark.ggInstances[i]._itembg_mark.logicBlock_backgroundcolor) {
						me._dropdown_cloner_mark.ggInstances[i]._itembg_mark.logicBlock_backgroundcolor();
					}
					if (me._dropdown_cloner_mark.ggInstances[i]._dropdown_menu_text_mark && me._dropdown_cloner_mark.ggInstances[i]._dropdown_menu_text_mark.logicBlock_textcolor) {
						me._dropdown_cloner_mark.ggInstances[i]._dropdown_menu_text_mark.logicBlock_textcolor();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._dropdown_cloner_mark.ggUpdating == true) return;
			me._dropdown_cloner_mark.ggUpdating = true;
			var el=me._dropdown_cloner_mark;
			el.ggInstances = [];
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			el.ggCurrentFilter = filter;
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var numCols = me._dropdown_cloner_mark.ggNumRepeat;
			if (numCols < 1) numCols = 1;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				if (filter.length > 0) {
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._dropdown_cloner_mark.ggHeight) + 'px';
				parameter.left=(column * me._dropdown_cloner_mark.ggWidth) + 'px';
				var inst = new SkinCloner_dropdown_cloner_mark_Class(nodeId, me, el, parameter);
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= numCols) {
					column = 0;
					row++;
				}
				}
			}
			me._dropdown_cloner_mark.callChildLogicBlocks_changenodeid();
			me._dropdown_cloner_mark.callChildLogicBlocks_mouseover();
			me._dropdown_cloner_mark.callChildLogicBlocks_mouseover();
			me._dropdown_cloner_mark.callChildLogicBlocks_active();
			me._dropdown_cloner_mark.ggUpdating = false;
			player.triggerEvent('clonerchanged');
		}
		el.ggFilter = [];
		el.ggFilter[0] = "Марковское месторождение";
		el.ggId="Dropdown Cloner mark";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 88px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 450px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_cloner_mark.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_cloner_mark.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._dropdown_cloner_mark.childNodes.length; i++) {
				var child=me._dropdown_cloner_mark.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._dropdown_cloner_mark.ggUpdatePosition=function (useTransition) {
			var w=player.getViewerSize().width;
			var h=player.getViewerSize().height
			if ((!me._dropdown_cloner_mark.ggLastSize) || (me._dropdown_cloner_mark.ggLastSize.w!=w) || (me._dropdown_cloner_mark.ggLastSize.h!=h)) {
				me._dropdown_cloner_mark.ggLastSize={ w:w, h:h };
				me._dropdown_cloner_mark.ggUpdate();
			}
		}
		me._dropdown_cloner_mark.ggNodeChange=function () {
			me._dropdown_cloner_mark.ggUpdateConditionNodeChange();
		}
		me._scrollarea_mark__content.appendChild(me._dropdown_cloner_mark);
		me._map_bg.appendChild(me._scrollarea_mark);
		el=me._scrollarea_ya=document.createElement('div');
		els=me._scrollarea_ya__content=document.createElement('div');
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 87px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 449px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_ya.ggScrollByX = function(diffX) {
			if(!me._scrollarea_ya.ggHorScrollVisible || diffX == 0) return;
			me._scrollarea_ya.ggScrollPosX = (me._scrollarea_ya__horScrollFg.offsetLeft + diffX);
			me._scrollarea_ya.ggScrollPosX = Math.max(me._scrollarea_ya.ggScrollPosX, 0);
			me._scrollarea_ya.ggScrollPosX = Math.min(me._scrollarea_ya.ggScrollPosX, me._scrollarea_ya__horScrollBg.clientWidth - me._scrollarea_ya__horScrollFg.clientWidth);
			me._scrollarea_ya__horScrollFg.style.left = me._scrollarea_ya.ggScrollPosX + 'px';
			me._scrollarea_ya__content.style.left = -(Math.round(me._scrollarea_ya.ggScrollPosX / me._scrollarea_ya.ggHPercentVisible)) + me._scrollarea_ya.ggContentLeftOffset + 'px';
			me._scrollarea_ya.ggScrollPosXPercent = (me._scrollarea_ya__horScrollFg.offsetLeft / me._scrollarea_ya__horScrollBg.clientWidth);
		}
		me._scrollarea_ya.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_ya.ggHorScrollVisible || diffX == 0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_ya.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_ya.ggScrollPosX >= me._scrollarea_ya__horScrollBg.clientWidth - me._scrollarea_ya__horScrollFg.clientWidth)) {
					me._scrollarea_ya.ggScrollPosX = Math.min(me._scrollarea_ya.ggScrollPosX, me._scrollarea_ya__horScrollBg.clientWidth - me._scrollarea_ya__horScrollFg.clientWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_ya.ggScrollPosX <= 0)) {
					me._scrollarea_ya.ggScrollPosX = Math.max(me._scrollarea_ya.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_ya__horScrollFg.style.left = me._scrollarea_ya.ggScrollPosX + 'px';
			me._scrollarea_ya__content.style.left = -(Math.round(me._scrollarea_ya.ggScrollPosX / me._scrollarea_ya.ggHPercentVisible)) + me._scrollarea_ya.ggContentLeftOffset + 'px';
			me._scrollarea_ya.ggScrollPosXPercent = (me._scrollarea_ya__horScrollFg.offsetLeft / me._scrollarea_ya__horScrollBg.clientWidth);
			}, 10);
		}
		me._scrollarea_ya.ggScrollByY = function(diffY) {
			if(!me._scrollarea_ya.ggVertScrollVisible || diffY == 0) return;
			me._scrollarea_ya.ggScrollPosY = (me._scrollarea_ya__vertScrollFg.offsetTop + diffY);
			me._scrollarea_ya.ggScrollPosY = Math.max(me._scrollarea_ya.ggScrollPosY, 0);
			me._scrollarea_ya.ggScrollPosY = Math.min(me._scrollarea_ya.ggScrollPosY, me._scrollarea_ya__vertScrollBg.clientHeight - me._scrollarea_ya__vertScrollFg.clientHeight);
			me._scrollarea_ya__vertScrollFg.style.top = me._scrollarea_ya.ggScrollPosY + 'px';
			me._scrollarea_ya__content.style.top = -(Math.round(me._scrollarea_ya.ggScrollPosY / me._scrollarea_ya.ggVPercentVisible)) + me._scrollarea_ya.ggContentTopOffset + 'px';
			me._scrollarea_ya.ggScrollPosYPercent = (me._scrollarea_ya__vertScrollFg.offsetTop / me._scrollarea_ya__vertScrollBg.clientHeight);
		}
		me._scrollarea_ya.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_ya.ggVertScrollVisible || diffY == 0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_ya.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_ya.ggScrollPosY >= me._scrollarea_ya__vertScrollBg.clientHeight - me._scrollarea_ya__vertScrollFg.clientHeight)) {
					me._scrollarea_ya.ggScrollPosY = Math.min(me._scrollarea_ya.ggScrollPosY, me._scrollarea_ya__vertScrollBg.clientHeight - me._scrollarea_ya__vertScrollFg.clientHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_ya.ggScrollPosY <= 0)) {
					me._scrollarea_ya.ggScrollPosY = Math.max(me._scrollarea_ya.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_ya__vertScrollFg.style.top = me._scrollarea_ya.ggScrollPosY + 'px';
			me._scrollarea_ya__content.style.top = -(Math.round(me._scrollarea_ya.ggScrollPosY / me._scrollarea_ya.ggVPercentVisible)) + me._scrollarea_ya.ggContentTopOffset + 'px';
			me._scrollarea_ya.ggScrollPosYPercent = (me._scrollarea_ya__vertScrollFg.offsetTop / me._scrollarea_ya__vertScrollBg.clientHeight);
			}, 10);
		}
		me._scrollarea_ya.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_ya.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_ya.ggHPercentVisible);
					me._scrollarea_ya.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_ya.clientWidth - (me._scrollarea_ya.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_ya.clientWidth - (me._scrollarea_ya.ggVertScrollVisible ? 15 : 0))) * me._scrollarea_ya.ggHPercentVisible);
					me._scrollarea_ya.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_ya.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_ya.ggVPercentVisible);
					me._scrollarea_ya.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_ya.clientHeight - (me._scrollarea_ya.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_ya.clientHeight - (me._scrollarea_ya.ggHorScrollVisible ? 15 : 0))) * me._scrollarea_ya.ggVPercentVisible);
					me._scrollarea_ya.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_ya.ggDragLastX = t[0].clientX;
			me._scrollarea_ya.ggDragLastY = t[0].clientY;
			me._scrollarea_ya__content.ontouchend = function() {
				me._scrollarea_ya__content.ontouchend = null;
				me._scrollarea_ya__content.ontouchmove = null;
			}
			me._scrollarea_ya__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._scrollarea_ya.ggDragLastX;
				var diffY = t[0].clientY - me._scrollarea_ya.ggDragLastY;
				me._scrollarea_ya.ggDragLastX = t[0].clientX;
				me._scrollarea_ya.ggDragLastY = t[0].clientY;
				me._scrollarea_ya.ggScrollByX(-diffX);
				me._scrollarea_ya.ggScrollByY(-diffY);
			}
		}
		elVertScrollBg = me._scrollarea_ya__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 456.75px; background-color: rgba(255,255,255,0.117647); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_ya__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 456.75px; background-color: rgba(255,255,255,0.784314); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scrollarea_ya.ggScrollPosY = 0;
		me._scrollarea_ya.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_ya.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scrollarea_ya.ggDragLastY;
				me._scrollarea_ya.ggDragLastY = e.clientY;
				me._scrollarea_ya.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_ya.ggDragLastY = t[0].clientY;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffY = t[0].clientY - me._scrollarea_ya.ggDragLastY;
				me._scrollarea_ya.ggDragLastY = t[0].clientY;
				me._scrollarea_ya.ggScrollByY(diffY);
			}
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._scrollarea_ya.ggScrollHeight;
			if (e.offsetY < me._scrollarea_ya.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_ya.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_ya__vertScrollBg.getBoundingClientRect();
			var diffY = me._scrollarea_ya.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scrollarea_ya.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_ya.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			var wheelDelta = Math.sign(e.deltaY);
			me._scrollarea_ya.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._scrollarea_ya__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea ya";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='cursor : pointer;';
		hs+='height : 93.9815%;';
		hs+='left : 16px;';
		hs+='opacity : 0.89999;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : hidden;';
		hs+='width : 464px;';
		hs+='pointer-events:auto;';
		hs+='padding-right:8px; margin-bottom: 16px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._scrollarea_ya.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_ya.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.ggUserdata.comment == "\u042f\u0440\u0430\u043a\u0442\u0438\u043d\u0441\u043a\u043e\u0435 \u043c\u0435\u0441\u0442\u043e\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0435")
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(me.ggUserdata.comment != "\u042f\u0440\u0430\u043a\u0442\u0438\u043d\u0441\u043a\u043e\u0435 \u043c\u0435\u0441\u0442\u043e\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0435")
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._scrollarea_ya.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._scrollarea_ya.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._scrollarea_ya.style[domTransition]='';
				if (me._scrollarea_ya.ggCurrentLogicStateVisible == 0) {
					me._scrollarea_ya.style.visibility=(Number(me._scrollarea_ya.style.opacity)>0||!me._scrollarea_ya.style.opacity)?'inherit':'hidden';
					me._scrollarea_ya.ggVisible=true;
				}
				else if (me._scrollarea_ya.ggCurrentLogicStateVisible == 1) {
					me._scrollarea_ya.style.visibility="hidden";
					me._scrollarea_ya.ggVisible=false;
				}
				else {
					me._scrollarea_ya.style.visibility="hidden";
					me._scrollarea_ya.ggVisible=false;
				}
			}
		}
		me._scrollarea_ya.ggUpdatePosition=function (useTransition) {
			{
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e.getBoundingClientRect) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes()) {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._scrollarea_ya.ggScrollPosY / me._scrollarea_ya.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._scrollarea_ya.ggHorScrollVisible && contentHeight > this.clientHeight - 15) || (!me._scrollarea_ya.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._scrollarea_ya__vertScrollBg.style.visibility = 'inherit';
					me._scrollarea_ya__vertScrollFg.style.visibility = 'inherit';
					me._scrollarea_ya.ggVertScrollVisible = true;
				} else {
					me._scrollarea_ya__vertScrollBg.style.visibility = 'hidden';
					me._scrollarea_ya__vertScrollFg.style.visibility = 'hidden';
					me._scrollarea_ya.ggVertScrollVisible = false;
				}
				if(me._scrollarea_ya.ggVertScrollVisible) {
					if (me._scrollarea_ya.ggHorScrollVisible) {
						me._scrollarea_ya.ggAvailableHeight = me._scrollarea_ya.clientHeight - 15;
						me._scrollarea_ya__cornerBg.style.visibility = 'inherit';
					} else {
						me._scrollarea_ya.ggAvailableHeight = me._scrollarea_ya.clientHeight;
						me._scrollarea_ya__cornerBg.style.visibility = 'hidden';
					}
					me._scrollarea_ya__vertScrollBg.style.height = me._scrollarea_ya.ggAvailableHeight + 'px';
					me._scrollarea_ya.ggVPercentVisible = me._scrollarea_ya.ggAvailableHeight / contentHeight;
					if (me._scrollarea_ya.ggVPercentVisible > 1.0) me._scrollarea_ya.ggVPercentVisible = 1.0;
					me._scrollarea_ya.ggScrollHeight =  Math.round(me._scrollarea_ya__vertScrollBg.clientHeight * me._scrollarea_ya.ggVPercentVisible);
					me._scrollarea_ya__vertScrollFg.style.height = me._scrollarea_ya.ggScrollHeight + 'px';
					me._scrollarea_ya.ggScrollPosY = me._scrollarea_ya.ggScrollPosYPercent * me._scrollarea_ya.ggAvailableHeight;
					me._scrollarea_ya.ggScrollPosY = Math.min(me._scrollarea_ya.ggScrollPosY, me._scrollarea_ya__vertScrollBg.clientHeight - me._scrollarea_ya__vertScrollFg.clientHeight);
					me._scrollarea_ya__vertScrollFg.style.top = me._scrollarea_ya.ggScrollPosY + 'px';
					me._scrollarea_ya__content.style.top = -(Math.round(me._scrollarea_ya.ggScrollPosY / me._scrollarea_ya.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				} else {
					me._scrollarea_ya.ggScrollPosY = 0;
					me._scrollarea_ya.ggScrollPosYPercent = 0.0;
					me._scrollarea_ya__content.style.top = this.ggContentTopOffset + 'px';
					me._scrollarea_ya__cornerBg.style.visibility = 'hidden';
				}
			}
		}
		el=me._dropdown_cloner_ya=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggWidth = 450;
		el.ggHeight = 88;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._dropdown_cloner_ya.callChildLogicBlocks_changenodeid = function(){
			if(me._dropdown_cloner_ya.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner_ya.ggInstances.length; i++) {
					if (me._dropdown_cloner_ya.ggInstances[i]._itembg_ya && me._dropdown_cloner_ya.ggInstances[i]._itembg_ya.logicBlock_visible) {
						me._dropdown_cloner_ya.ggInstances[i]._itembg_ya.logicBlock_visible();
					}
					if (me._dropdown_cloner_ya.ggInstances[i]._checkmark_tick_ya && me._dropdown_cloner_ya.ggInstances[i]._checkmark_tick_ya.logicBlock_visible) {
						me._dropdown_cloner_ya.ggInstances[i]._checkmark_tick_ya.logicBlock_visible();
					}
				}
			}
		}
		me._dropdown_cloner_ya.callChildLogicBlocks_mouseover = function(){
			if(me._dropdown_cloner_ya.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner_ya.ggInstances.length; i++) {
					if (me._dropdown_cloner_ya.ggInstances[i]._itembg_ya && me._dropdown_cloner_ya.ggInstances[i]._itembg_ya.logicBlock_backgroundcolor) {
						me._dropdown_cloner_ya.ggInstances[i]._itembg_ya.logicBlock_backgroundcolor();
					}
				}
			}
		}
		me._dropdown_cloner_ya.callChildLogicBlocks_mouseover = function(){
			if(me._dropdown_cloner_ya.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner_ya.ggInstances.length; i++) {
					if (me._dropdown_cloner_ya.ggInstances[i]._dropdown_menu_text_ya && me._dropdown_cloner_ya.ggInstances[i]._dropdown_menu_text_ya.logicBlock_textcolor) {
						me._dropdown_cloner_ya.ggInstances[i]._dropdown_menu_text_ya.logicBlock_textcolor();
					}
				}
			}
		}
		me._dropdown_cloner_ya.callChildLogicBlocks_active = function(){
			if(me._dropdown_cloner_ya.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner_ya.ggInstances.length; i++) {
					if (me._dropdown_cloner_ya.ggInstances[i]._itembg_ya && me._dropdown_cloner_ya.ggInstances[i]._itembg_ya.logicBlock_backgroundcolor) {
						me._dropdown_cloner_ya.ggInstances[i]._itembg_ya.logicBlock_backgroundcolor();
					}
					if (me._dropdown_cloner_ya.ggInstances[i]._dropdown_menu_text_ya && me._dropdown_cloner_ya.ggInstances[i]._dropdown_menu_text_ya.logicBlock_textcolor) {
						me._dropdown_cloner_ya.ggInstances[i]._dropdown_menu_text_ya.logicBlock_textcolor();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._dropdown_cloner_ya.ggUpdating == true) return;
			me._dropdown_cloner_ya.ggUpdating = true;
			var el=me._dropdown_cloner_ya;
			el.ggInstances = [];
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			el.ggCurrentFilter = filter;
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var numCols = me._dropdown_cloner_ya.ggNumRepeat;
			if (numCols < 1) numCols = 1;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				if (filter.length > 0) {
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._dropdown_cloner_ya.ggHeight) + 'px';
				parameter.left=(column * me._dropdown_cloner_ya.ggWidth) + 'px';
				var inst = new SkinCloner_dropdown_cloner_ya_Class(nodeId, me, el, parameter);
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= numCols) {
					column = 0;
					row++;
				}
				}
			}
			me._dropdown_cloner_ya.callChildLogicBlocks_changenodeid();
			me._dropdown_cloner_ya.callChildLogicBlocks_mouseover();
			me._dropdown_cloner_ya.callChildLogicBlocks_mouseover();
			me._dropdown_cloner_ya.callChildLogicBlocks_active();
			me._dropdown_cloner_ya.ggUpdating = false;
			player.triggerEvent('clonerchanged');
		}
		el.ggFilter = [];
		el.ggFilter[0] = "Ярактинское месторождение";
		el.ggId="Dropdown Cloner ya";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 88px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 450px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_cloner_ya.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_cloner_ya.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._dropdown_cloner_ya.childNodes.length; i++) {
				var child=me._dropdown_cloner_ya.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._dropdown_cloner_ya.ggUpdatePosition=function (useTransition) {
			var w=player.getViewerSize().width;
			var h=player.getViewerSize().height
			if ((!me._dropdown_cloner_ya.ggLastSize) || (me._dropdown_cloner_ya.ggLastSize.w!=w) || (me._dropdown_cloner_ya.ggLastSize.h!=h)) {
				me._dropdown_cloner_ya.ggLastSize={ w:w, h:h };
				me._dropdown_cloner_ya.ggUpdate();
			}
		}
		me._dropdown_cloner_ya.ggNodeChange=function () {
			me._dropdown_cloner_ya.ggUpdateConditionNodeChange();
		}
		me._scrollarea_ya__content.appendChild(me._dropdown_cloner_ya);
		me._map_bg.appendChild(me._scrollarea_ya);
		me.divSkin.appendChild(me._map_bg);
		el=me._main_menu=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="main_menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container .menu-container";
		el.ggType='container';
		hs ='';
		hs+='bottom : 168px;';
		hs+='height : 462px;';
		hs+='left : 54px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-radius:76px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 100%';
		me._main_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._main_menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getViewerSize().width <= 640) || 
				(player.getViewerSize().height <= 640)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._main_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._main_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._main_menu.style[domTransition]='left 0s, bottom 0s, ' + cssPrefix + 'transform 0s';
				if (me._main_menu.ggCurrentLogicStatePosition == 0) {
					me._main_menu.style.left='34px';
					me._main_menu.style.bottom='98px';
				}
				else {
					me._main_menu.style.left='54px';
					me._main_menu.style.bottom='168px';
				}
			}
		}
		me._main_menu.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getViewerSize().width <= 640) || 
				(player.getViewerSize().height <= 640)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(player.getViewerSize().width <= 1200) || 
				(player.getViewerSize().height <= 800)
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._main_menu.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._main_menu.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._main_menu.style[domTransition]='left 0s, bottom 0s, ' + cssPrefix + 'transform 0s';
				if (me._main_menu.ggCurrentLogicStateScaling == 0) {
					me._main_menu.ggParameter.sx = 0.6;
					me._main_menu.ggParameter.sy = 0.6;
					me._main_menu.style[domTransform]=parameterToTransform(me._main_menu.ggParameter);
				}
				else if (me._main_menu.ggCurrentLogicStateScaling == 1) {
					me._main_menu.ggParameter.sx = 0.8;
					me._main_menu.ggParameter.sy = 0.8;
					me._main_menu.style[domTransform]=parameterToTransform(me._main_menu.ggParameter);
				}
				else {
					me._main_menu.ggParameter.sx = 1;
					me._main_menu.ggParameter.sy = 1;
					me._main_menu.style[domTransform]=parameterToTransform(me._main_menu.ggParameter);
				}
			}
		}
		me._main_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_bg=document.createElement('div');
		el.ggId="menu_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 36px;';
		hs+='border-radius : 36px;';
		hs+='background : rgba(0,0,0,0.0784314);';
		hs+='border : 1px solid rgba(255,255,255,0.196078);';
		hs+='cursor : default;';
		hs+='height : 462px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_bg.ggUpdatePosition=function (useTransition) {
		}
		me._main_menu.appendChild(me._menu_bg);
		el=me._map_button=document.createElement('div');
		els=me._map_button__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzJweCIgaGVpZ2h0PSI1NnB4IiB2aWV3Qm94PSIwIDAgNzIgNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aGVscC1ob3ZlcjwvdGl0bGU+CiAgICA8ZyBpZD0iUGFub1RvdXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJwYW5vLTE5MjB4MTA4MCIgdHJhbnNmb3'+
			'JtPSJ0cmFuc2xhdGUoLTU2LCAtODE2KSI+CiAgICAgICAgICAgIDxnIGlkPSJoZWxwLWhvdmVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1NiwgODE2KSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0icm93LWNvcHktNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsIDgpIj48L2c+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iNzJ4NTYiIHg9IjAiIHk9IjAiIHdpZHRoPSI3MiIgaGVpZ2h0PSI1NiI+PC9yZWN0PgogICAgICAgICAgICAgICAgPGcgaWQ9Ij8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwLjExLCAxNy42MSkiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAg'+
			'ICAgICAgICAgICAgICAgPHBhdGggZD0iTTMuNjksMTUuODcgQzMuNjEsMTQuODcgMy42ODUsMTQuMDEgMy45MTUsMTMuMjkgQzQuMTQ1LDEyLjU3IDQuNDYsMTEuOTMgNC44NiwxMS4zNyBDNS4yNiwxMC44MSA1LjcwNSwxMC4zMSA2LjE5NSw5Ljg3IEM2LjY4NSw5LjQzIDcuMTQ1LDguOTkgNy41NzUsOC41NSBDOC4wMDUsOC4xMSA4LjM2NSw3LjY0IDguNjU1LDcuMTQgQzguOTQ1LDYuNjQgOS4wOSw2LjA2IDkuMDksNS40IEM5LjA5LDQuNTIgOC44MjUsMy44IDguMjk1LDMuMjQgQzcuNzY1LDIuNjggNi44NCwyLjQgNS41MiwyLjQgQzQuNzIsMi40IDMuOTA1LDIuNTUgMy4wNzUsMi44NSBDMi'+
			'4yNDUsMy4xNSAxLjU0LDMuNDcgMC45NiwzLjgxIEwwLDEuNjUgQzAuODQsMS4xMyAxLjczLDAuNzI1IDIuNjcsMC40MzUgQzMuNjEsMC4xNDUgNC43NywwIDYuMTUsMCBDNy4xMywwIDcuOTksMC4xMyA4LjczLDAuMzkgQzkuNDcsMC42NSAxMC4wOSwxLjAwNSAxMC41OSwxLjQ1NSBDMTEuMDksMS45MDUgMTEuNDY1LDIuNDM1IDExLjcxNSwzLjA0NSBDMTEuOTY1LDMuNjU1IDEyLjA5LDQuMzEgMTIuMDksNS4wMSBDMTIuMDksNS45NSAxMS45NCw2Ljc1NSAxMS42NCw3LjQyNSBDMTEuMzQsOC4wOTUgMTAuOTcsOC42OSAxMC41Myw5LjIxIEMxMC4wOSw5LjczIDkuNjEsMTAuMjEgOS4wOSwxMC42'+
			'NSBDOC41NywxMS4wOSA4LjA5LDExLjU1NSA3LjY1LDEyLjA0NSBDNy4yMSwxMi41MzUgNi44NCwxMy4wOCA2LjU0LDEzLjY4IEM2LjI0LDE0LjI4IDYuMDksMTUuMDEgNi4wOSwxNS44NyBMMy42OSwxNS44NyBaIE0zLjAzLDE5Ljg2IEMzLjAzLDE5LjI4IDMuMjE1LDE4LjgyIDMuNTg1LDE4LjQ4IEMzLjk1NSwxOC4xNCA0LjQ0LDE3Ljk3IDUuMDQsMTcuOTcgQzUuNjQsMTcuOTcgNi4xMjUsMTguMTQgNi40OTUsMTguNDggQzYuODY1LDE4LjgyIDcuMDUsMTkuMjggNy4wNSwxOS44NiBDNy4wNSwyMC40IDYuODY1LDIwLjg1IDYuNDk1LDIxLjIxIEM2LjEyNSwyMS41NyA1LjY0LDIxLjc1IDUuMD'+
			'QsMjEuNzUgQzQuNDQsMjEuNzUgMy45NTUsMjEuNTcgMy41ODUsMjEuMjEgQzMuMjE1LDIwLjg1IDMuMDMsMjAuNCAzLjAzLDE5Ljg2IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
		me._map_button__img.setAttribute('src',hs);
		els.setAttribute('alt','Показать/скрыть список панорам');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;map_button;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map_button__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzJweCIgaGVpZ2h0PSI1NnB4IiB2aWV3Qm94PSIwIDAgNzIgNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aGVscC1ob3ZlcjwvdGl0bGU+CiAgICA8ZyBpZD0iUGFub1RvdXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJwYW5vLTE5MjB4MTA4MCIgdHJhbnNmb3'+
			'JtPSJ0cmFuc2xhdGUoLTU2LCAtODE2KSI+CiAgICAgICAgICAgIDxnIGlkPSJoZWxwLWhvdmVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1NiwgODE2KSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0icm93LWNvcHktNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsIDgpIiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjAuMjYiPgogICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwiIGN4PSIyMCIgY3k9IjIwIiByPSIyMCI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iNzJ4NTYiIHg9IjAiIHk9IjAiIHdpZHRoPSI3MiIg'+
			'aGVpZ2h0PSI1NiI+PC9yZWN0PgogICAgICAgICAgICAgICAgPGcgaWQ9Ij8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwLjExLCAxNy42MSkiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTMuNjksMTUuODcgQzMuNjEsMTQuODcgMy42ODUsMTQuMDEgMy45MTUsMTMuMjkgQzQuMTQ1LDEyLjU3IDQuNDYsMTEuOTMgNC44NiwxMS4zNyBDNS4yNiwxMC44MSA1LjcwNSwxMC4zMSA2LjE5NSw5Ljg3IEM2LjY4NSw5LjQzIDcuMTQ1LDguOTkgNy41NzUsOC41NSBDOC4wMDUsOC4xMSA4LjM2NSw3LjY0IDguNjU1LDcuMTQgQzguOT'+
			'Q1LDYuNjQgOS4wOSw2LjA2IDkuMDksNS40IEM5LjA5LDQuNTIgOC44MjUsMy44IDguMjk1LDMuMjQgQzcuNzY1LDIuNjggNi44NCwyLjQgNS41MiwyLjQgQzQuNzIsMi40IDMuOTA1LDIuNTUgMy4wNzUsMi44NSBDMi4yNDUsMy4xNSAxLjU0LDMuNDcgMC45NiwzLjgxIEwwLDEuNjUgQzAuODQsMS4xMyAxLjczLDAuNzI1IDIuNjcsMC40MzUgQzMuNjEsMC4xNDUgNC43NywwIDYuMTUsMCBDNy4xMywwIDcuOTksMC4xMyA4LjczLDAuMzkgQzkuNDcsMC42NSAxMC4wOSwxLjAwNSAxMC41OSwxLjQ1NSBDMTEuMDksMS45MDUgMTEuNDY1LDIuNDM1IDExLjcxNSwzLjA0NSBDMTEuOTY1LDMuNjU1IDEy'+
			'LjA5LDQuMzEgMTIuMDksNS4wMSBDMTIuMDksNS45NSAxMS45NCw2Ljc1NSAxMS42NCw3LjQyNSBDMTEuMzQsOC4wOTUgMTAuOTcsOC42OSAxMC41Myw5LjIxIEMxMC4wOSw5LjczIDkuNjEsMTAuMjEgOS4wOSwxMC42NSBDOC41NywxMS4wOSA4LjA5LDExLjU1NSA3LjY1LDEyLjA0NSBDNy4yMSwxMi41MzUgNi44NCwxMy4wOCA2LjU0LDEzLjY4IEM2LjI0LDE0LjI4IDYuMDksMTUuMDEgNi4wOSwxNS44NyBMMy42OSwxNS44NyBaIE0zLjAzLDE5Ljg2IEMzLjAzLDE5LjI4IDMuMjE1LDE4LjgyIDMuNTg1LDE4LjQ4IEMzLjk1NSwxOC4xNCA0LjQ0LDE3Ljk3IDUuMDQsMTcuOTcgQzUuNjQsMTcuOT'+
			'cgNi4xMjUsMTguMTQgNi40OTUsMTguNDggQzYuODY1LDE4LjgyIDcuMDUsMTkuMjggNy4wNSwxOS44NiBDNy4wNSwyMC40IDYuODY1LDIwLjg1IDYuNDk1LDIxLjIxIEM2LjEyNSwyMS41NyA1LjY0LDIxLjc1IDUuMDQsMjEuNzUgQzQuNDQsMjEuNzUgMy45NTUsMjEuNTcgMy41ODUsMjEuMjEgQzMuMjE1LDIwLjg1IDMuMDMsMjAuNCAzLjAzLDE5Ljg2IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
		me._map_button__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;map_button;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="map_button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 344px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_button.onclick=function (e) {
			me._help.ggVisible = !me._help.ggVisible;
			var flag=me._help.ggVisible;
			me._help.style[domTransition]='none';
			me._help.style.visibility=((flag)&&(Number(me._help.style.opacity)>0||!me._help.style.opacity))?'inherit':'hidden';
		}
		me._map_button.onmouseover=function (e) {
			me._map_button__img.style.visibility='hidden';
			me._map_button__imgo.style.visibility='inherit';
			me.elementMouseOver['map_button']=true;
			me._helphelp.logicBlock_alpha();
		}
		me._map_button.onmouseout=function (e) {
			me._map_button__img.style.visibility='inherit';
			me._map_button__imgo.style.visibility='hidden';
			me.elementMouseOver['map_button']=false;
			me._helphelp.logicBlock_alpha();
		}
		me._map_button.ontouchend=function (e) {
			me.elementMouseOver['map_button']=false;
			me._helphelp.logicBlock_alpha();
		}
		me._map_button.ggUpdatePosition=function (useTransition) {
		}
		el=me._helphelp=document.createElement('div');
		els=me._helphelp__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="help-help";
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 74px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0 0 2px black;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0.392157);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 32px;';
		hs+=cssPrefix + 'border-radius: 32px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 8px 9px 8px 9px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u041f\u043e\u043c\u043e\u0449\u044c (?)";
		el.appendChild(els);
		me._helphelp.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._helphelp.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['map_button'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._helphelp.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._helphelp.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._helphelp.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._helphelp.ggCurrentLogicStateAlpha == 0) {
					me._helphelp.style.visibility=me._helphelp.ggVisible?'inherit':'hidden';
					me._helphelp.style.opacity=1;
				}
				else {
					me._helphelp.style.visibility="hidden";
					me._helphelp.style.opacity=0;
				}
			}
		}
		me._helphelp.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._map_button.appendChild(me._helphelp);
		me._main_menu.appendChild(me._map_button);
		el=me._fullscreen=document.createElement('div');
		els=me._fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjcycHgiIGhlaWdodD0iNTZweCIgdmlld0JveD0iMCAwIDcyIDU2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjguMyAoMjk4MDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmZ1bGxzY3JlZW48L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIF'+
			'NrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0ibmV3IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iZnVsbHNjcmVlbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCAxNi4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9ImNyb3AtZnJlZSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMCwyLjY2NjY2NjY3IEwwLDggTDIuNjY2NjY2NjcsOCBMMi42NjY2NjY2NywyLjY2NjY2NjY3IEw4LDIuNjY2NjY2NjcgTDgsMCBMMi42NjY2'+
			'NjY2NywwIEMxLjIsMCAwLDEuMiAwLDIuNjY2NjY2NjcgTDAsMi42NjY2NjY2NyBaIE0yLjY2NjY2NjY3LDE2IEwwLDE2IEwwLDIxLjMzMzMzMzMgQzAsMjIuOCAxLjIsMjQgMi42NjY2NjY2NywyNCBMOCwyNCBMOCwyMS4zMzMzMzMzIEwyLjY2NjY2NjY3LDIxLjMzMzMzMzMgTDIuNjY2NjY2NjcsMTYgTDIuNjY2NjY2NjcsMTYgWiBNMjEuMzMzMzMzMywyMS4zMzMzMzMzIEwxNiwyMS4zMzMzMzMzIEwxNiwyNCBMMjEuMzMzMzMzMywyNCBDMjIuOCwyNCAyNCwyMi44IDI0LDIxLjMzMzMzMzMgTDI0LDE2IEwyMS4zMzMzMzMzLDE2IEwyMS4zMzMzMzMzLDIxLjMzMzMzMzMgTDIxLjMzMzMzMzMsMj'+
			'EuMzMzMzMzMyBaIE0yMS4zMzMzMzMzLDAgTDE2LDAgTDE2LDIuNjY2NjY2NjcgTDIxLjMzMzMzMzMsMi42NjY2NjY2NyBMMjEuMzMzMzMzMyw4IEwyNCw4IEwyNCwyLjY2NjY2NjY3IEMyNCwxLjIgMjIuOCwwIDIxLjMzMzMzMzMsMCBMMjEuMzMzMzMzMywwIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
		me._fullscreen__img.setAttribute('src',hs);
		els.setAttribute('alt','Полноэкранный режим');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;fullscreen;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjcycHgiIGhlaWdodD0iNTZweCIgdmlld0JveD0iMCAwIDcyIDU2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjguMyAoMjk4MDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmZ1bGxzY3JlZW5faG92ZXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZC'+
			'B3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0ibmV3IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iZnVsbHNjcmVlbl9ob3Zlci1jb3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDguMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJyb3ctY29weS01IiBmaWxsLW9wYWNpdHk9IjAuMjYiIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgY3g9IjIwIiBjeT0iMjAiIHI9IjIwIj48L2NpcmNsZT4KICAg'+
			'ICAgICAgICAgPC9nPgogICAgICAgICAgICA8ZyBpZD0iY3JvcC1mcmVlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjAwMDAwMCwgOC4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDIuNjY2NjY2NjcgTDAsOCBMMi42NjY2NjY2Nyw4IEwyLjY2NjY2NjY3LDIuNjY2NjY2NjcgTDgsMi42NjY2NjY2NyBMOCwwIEwyLjY2NjY2NjY3LDAgQzEuMiwwIDAsMS4yIDAsMi42NjY2NjY2NyBMMCwyLjY2NjY2NjY3IFogTTIuNjY2NjY2NjcsMTYgTDAsMTYgTDAsMjEuMzMzMzMzMyBDMCwyMi44IDEuMiwyNCAyLjY2NjY2NjY3LDI0IEw4LDI0IEw4LDIxLjMzMz'+
			'MzMzMgTDIuNjY2NjY2NjcsMjEuMzMzMzMzMyBMMi42NjY2NjY2NywxNiBMMi42NjY2NjY2NywxNiBaIE0yMS4zMzMzMzMzLDIxLjMzMzMzMzMgTDE2LDIxLjMzMzMzMzMgTDE2LDI0IEwyMS4zMzMzMzMzLDI0IEMyMi44LDI0IDI0LDIyLjggMjQsMjEuMzMzMzMzMyBMMjQsMTYgTDIxLjMzMzMzMzMsMTYgTDIxLjMzMzMzMzMsMjEuMzMzMzMzMyBMMjEuMzMzMzMzMywyMS4zMzMzMzMzIFogTTIxLjMzMzMzMzMsMCBMMTYsMCBMMTYsMi42NjY2NjY2NyBMMjEuMzMzMzMzMywyLjY2NjY2NjY3IEwyMS4zMzMzMzMzLDggTDI0LDggTDI0LDIuNjY2NjY2NjcgQzI0LDEuMiAyMi44LDAgMjEuMzMzMzMz'+
			'MywwIEwyMS4zMzMzMzMzLDAgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
		me._fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;fullscreen;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg .menu-alt";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._fullscreen.onmouseover=function (e) {
			me._fullscreen__img.style.visibility='hidden';
			me._fullscreen__imgo.style.visibility='inherit';
			me.elementMouseOver['fullscreen']=true;
			me._fullscreenhelp.logicBlock_alpha();
		}
		me._fullscreen.onmouseout=function (e) {
			me._fullscreen__img.style.visibility='inherit';
			me._fullscreen__imgo.style.visibility='hidden';
			me.elementMouseOver['fullscreen']=false;
			me._fullscreenhelp.logicBlock_alpha();
		}
		me._fullscreen.ontouchend=function (e) {
			me.elementMouseOver['fullscreen']=false;
			me._fullscreenhelp.logicBlock_alpha();
		}
		me._fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._fullscreenhelp=document.createElement('div');
		els=me._fullscreenhelp__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="fullscreen-help";
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 74px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0 0 2px black;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0.392157);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 32px;';
		hs+=cssPrefix + 'border-radius: 32px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 8px 9px 8px 9px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u041f\u043e\u043b\u043d\u043e\u044d\u043a\u0440\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c (F)";
		el.appendChild(els);
		me._fullscreenhelp.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreenhelp.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['fullscreen'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._fullscreenhelp.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._fullscreenhelp.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._fullscreenhelp.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._fullscreenhelp.ggCurrentLogicStateAlpha == 0) {
					me._fullscreenhelp.style.visibility=me._fullscreenhelp.ggVisible?'inherit':'hidden';
					me._fullscreenhelp.style.opacity=1;
				}
				else {
					me._fullscreenhelp.style.visibility="hidden";
					me._fullscreenhelp.style.opacity=0;
				}
			}
		}
		me._fullscreenhelp.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._fullscreen.appendChild(me._fullscreenhelp);
		me._main_menu.appendChild(me._fullscreen);
		el=me._gyro2=document.createElement('div');
		els=me._gyro2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="gyro2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 42px;';
		hs+='left : 17px;';
		hs+='position : absolute;';
		hs+='top : 293px;';
		hs+='visibility : inherit;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 42px;';
		hs+='height: 42px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._gyro2.ggUpdateText=function() {
			var hs="<button class=\"btn\" data-clipboard-action=\"copy\"  data-clipboard-text=\""+player.getVariableValue('baseURL')+"?coverShow=false#"+player.getCurrentNode()+","+player.getPanN().toFixed(1)+","+player.getTilt().toFixed(1)+","+player.getFov().toFixed(1)+",4,false\"><\/button>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._gyro2.ggUpdateText();
		el.appendChild(els);
		me._gyro2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro2.onmouseover=function (e) {
			me.elementMouseOver['gyro2']=true;
			me._gyrohelp.logicBlock_alpha();
			me._gyrohelp.logicBlock_alpha();
		}
		me._gyro2.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._gyro2__text)
					return;
				}
			}
			me.elementMouseDown['gyro2']=false;
			me._gyrohelp.logicBlock_text();
			me._gyrohelp.logicBlock_text();
			me.elementMouseOver['gyro2']=false;
			me._gyrohelp.logicBlock_alpha();
			me._gyrohelp.logicBlock_alpha();
		}
		me._gyro2.onmousedown=function (e) {
			me.elementMouseDown['gyro2']=true;
			me._gyrohelp.logicBlock_text();
			me._gyrohelp.logicBlock_text();
		}
		me._gyro2.onmouseup=function (e) {
			me.elementMouseDown['gyro2']=false;
			me._gyrohelp.logicBlock_text();
			me._gyrohelp.logicBlock_text();
		}
		me._gyro2.ontouchend=function (e) {
			me.elementMouseDown['gyro2']=false;
			me._gyrohelp.logicBlock_text();
			me._gyrohelp.logicBlock_text();
			me.elementMouseOver['gyro2']=false;
			me._gyrohelp.logicBlock_alpha();
			me._gyrohelp.logicBlock_alpha();
		}
		me._gyro2.ggUpdatePosition=function (useTransition) {
		}
		el=me._gyrohelp=document.createElement('div');
		els=me._gyrohelp__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="gyro-help";
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 57px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0 0 2px black;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0.392157);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 32px;';
		hs+=cssPrefix + 'border-radius: 32px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 8px 9px 8px 9px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u044d\u0442\u0443 \u043f\u0430\u043d\u043e\u0440\u0430\u043c\u0443 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430";
		el.appendChild(els);
		me._gyrohelp.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyrohelp.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['gyro2'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gyrohelp.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gyrohelp.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gyrohelp.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._gyrohelp.ggCurrentLogicStateAlpha == 0) {
					me._gyrohelp.style.visibility=me._gyrohelp.ggVisible?'inherit':'hidden';
					me._gyrohelp.style.opacity=1;
				}
				else {
					me._gyrohelp.style.visibility="hidden";
					me._gyrohelp.style.opacity=0;
				}
			}
		}
		me._gyrohelp.logicBlock_text = function() {
			var newLogicStateText;
			if (
				(me.elementMouseDown['gyro2'] == true)
			)
			{
				newLogicStateText = 0;
			}
			else if (
				(me.elementMouseOver['gyrohelp'] == true)
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._gyrohelp.ggCurrentLogicStateText != newLogicStateText) {
				me._gyrohelp.ggCurrentLogicStateText = newLogicStateText;
				me._gyrohelp.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._gyrohelp.ggCurrentLogicStateText == 0) {
					me._gyrohelp.ggText="\u0421\u0441\u044b\u043b\u043a\u0430 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0430!";
					me._gyrohelp__text.innerHTML=me._gyrohelp.ggText;
					if (me._gyrohelp.ggUpdateText) {
					me._gyrohelp.ggUpdateText=function() {
						var hs="\u0421\u0441\u044b\u043b\u043a\u0430 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0430!";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gyrohelp.ggUpdatePosition) me._gyrohelp.ggUpdatePosition();
					}
				}
				else if (me._gyrohelp.ggCurrentLogicStateText == 1) {
					me._gyrohelp.ggText="\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u044d\u0442\u0443 \u043f\u0430\u043d\u043e\u0440\u0430\u043c\u0443 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430";
					me._gyrohelp__text.innerHTML=me._gyrohelp.ggText;
					if (me._gyrohelp.ggUpdateText) {
					me._gyrohelp.ggUpdateText=function() {
						var hs="\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u044d\u0442\u0443 \u043f\u0430\u043d\u043e\u0440\u0430\u043c\u0443 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gyrohelp.ggUpdatePosition) me._gyrohelp.ggUpdatePosition();
					}
				}
				else {
					me._gyrohelp.ggText="\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u044d\u0442\u0443 \u043f\u0430\u043d\u043e\u0440\u0430\u043c\u0443 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430";
					me._gyrohelp__text.innerHTML=me._gyrohelp.ggText;
					if (me._gyrohelp.ggUpdateText) {
					me._gyrohelp.ggUpdateText=function() {
						var hs="\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u044d\u0442\u0443 \u043f\u0430\u043d\u043e\u0440\u0430\u043c\u0443 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gyrohelp.ggUpdatePosition) me._gyrohelp.ggUpdatePosition();
					}
				}
			}
		}
		me._gyrohelp.onmouseover=function (e) {
			me.elementMouseOver['gyrohelp']=true;
			me._gyrohelp.logicBlock_text();
		}
		me._gyrohelp.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._gyrohelp__text)
					return;
				}
			}
			me.elementMouseOver['gyrohelp']=false;
			me._gyrohelp.logicBlock_text();
		}
		me._gyrohelp.ontouchend=function (e) {
			me.elementMouseOver['gyrohelp']=false;
			me._gyrohelp.logicBlock_text();
		}
		me._gyrohelp.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._gyro2.appendChild(me._gyrohelp);
		me._main_menu.appendChild(me._gyro2);
		el=me._rotate=document.createElement('div');
		els=me._rotate__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjcycHgiIGhlaWdodD0iNTZweCIgdmlld0JveD0iMCAwIDcyIDU2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjguMyAoMjk4MDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPnJvdGF0ZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldG'+
			'NoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJuZXciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJyb3RhdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0LjAwMDAwMCwgMTYuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxnIGlkPSJyZWZyZXNoIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMC40LDMuNiBDMTguMywxLjM1IDE1LjMsMCAxMiwwIEM1LjQsMCAwLDUuNCAwLDEyIEMwLDE4LjYgNS40LDI0IDEyLDI0IEMxNy41NSwyNCAyMi4yLDIwLjEg'+
			'MjMuNTUsMTUgTDIwLjQsMTUgQzE5LjIsMTguNDUgMTUuOSwyMSAxMiwyMSBDNy4wNSwyMSAzLDE2Ljk1IDMsMTIgQzMsNy4wNSA3LjA1LDMgMTIsMyBDMTQuNTUsMyAxNi42NSw0LjA1IDE4LjMsNS43IEwxMy41LDEwLjUgTDI0LDEwLjUgTDI0LDAgTDIwLjQsMy42IEwyMC40LDMuNiBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';
		me._rotate__img.setAttribute('src',hs);
		els.setAttribute('alt','Автоповорот');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;rotate;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._rotate__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjcycHgiIGhlaWdodD0iNTZweCIgdmlld0JveD0iMCAwIDcyIDU2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjguMyAoMjk4MDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPnJvdGF0ZV9ob3ZlcjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdG'+
			'ggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJuZXciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJyb3RhdGVfaG92ZXItY29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYuMDAwMDAwLCA4LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0icm93LWNvcHktNyIgZmlsbC1vcGFjaXR5PSIwLjI2IiBmaWxsPSIjMDAwMDAwIj4KICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwiIGN4PSIyMCIgY3k9IjIwIiByPSIyMCI+PC9jaXJjbGU+CiAgICAgICAgICAg'+
			'IDwvZz4KICAgICAgICAgICAgPGcgaWQ9InJlZnJlc2giIHRyYW5zZm9ybT0idHJhbnNsYXRlKDguMDAwMDAwLCA4LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTIwLjQsMy42IEMxOC4zLDEuMzUgMTUuMywwIDEyLDAgQzUuNCwwIDAsNS40IDAsMTIgQzAsMTguNiA1LjQsMjQgMTIsMjQgQzE3LjU1LDI0IDIyLjIsMjAuMSAyMy41NSwxNSBMMjAuNCwxNSBDMTkuMiwxOC40NSAxNS45LDIxIDEyLDIxIEM3LjA1LDIxIDMsMTYuOTUgMywxMiBDMyw3LjA1IDcuMDUsMyAxMiwzIEMxNC41NSwzIDE2LjY1LDQuMDUgMTguMyw1LjcgTDEzLjUsMTAuNSBMMj'+
			'QsMTAuNSBMMjQsMCBMMjAuNCwzLjYgTDIwLjQsMy42IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
		me._rotate__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;rotate;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="rotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg .menu-alt";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 232px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rotate.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._rotate.onmouseover=function (e) {
			me._rotate__img.style.visibility='hidden';
			me._rotate__imgo.style.visibility='inherit';
			me.elementMouseOver['rotate']=true;
			me._rotatehelp.logicBlock_alpha();
		}
		me._rotate.onmouseout=function (e) {
			me._rotate__img.style.visibility='inherit';
			me._rotate__imgo.style.visibility='hidden';
			me.elementMouseOver['rotate']=false;
			me._rotatehelp.logicBlock_alpha();
		}
		me._rotate.ontouchend=function (e) {
			me.elementMouseOver['rotate']=false;
			me._rotatehelp.logicBlock_alpha();
		}
		me._rotate.ggUpdatePosition=function (useTransition) {
		}
		el=me._rotatehelp=document.createElement('div');
		els=me._rotatehelp__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="rotate-help";
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 74px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0 0 2px black;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0.392157);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 32px;';
		hs+=cssPrefix + 'border-radius: 32px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 8px 9px 8px 9px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u0410\u0432\u0442\u043e\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u0435 (R)";
		el.appendChild(els);
		me._rotatehelp.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rotatehelp.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['rotate'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rotatehelp.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rotatehelp.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rotatehelp.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._rotatehelp.ggCurrentLogicStateAlpha == 0) {
					me._rotatehelp.style.visibility=me._rotatehelp.ggVisible?'inherit':'hidden';
					me._rotatehelp.style.opacity=1;
				}
				else {
					me._rotatehelp.style.visibility="hidden";
					me._rotatehelp.style.opacity=0;
				}
			}
		}
		me._rotatehelp.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rotate.appendChild(me._rotatehelp);
		me._main_menu.appendChild(me._rotate);
		el=me._zoom_out=document.createElement('div');
		els=me._zoom_out__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjcycHgiIGhlaWdodD0iNTZweCIgdmlld0JveD0iMCAwIDcyIDU2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjguMyAoMjk4MDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPnpvb21fb3V0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2'+
			'V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9Im5ldyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Inpvb21fb3V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4wMDAwMDAsIDE2LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8ZyBpZD0icmVtb3ZlLWNpcmNsZS1vdXRsaW5lIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02LDEwLjggTDYsMTMuMiBMMTgsMTMuMiBMMTgsMTAuOCBMNiwxMC44IEw2LDEwLjggWiBNMTIsMCBDNS40LDAgMCw1LjQgMCwx'+
			'MiBDMCwxOC42IDUuNCwyNCAxMiwyNCBDMTguNiwyNCAyNCwxOC42IDI0LDEyIEMyNCw1LjQgMTguNiwwIDEyLDAgTDEyLDAgWiBNMTIsMjEuNiBDNi43MiwyMS42IDIuNCwxNy4yOCAyLjQsMTIgQzIuNCw2LjcyIDYuNzIsMi40IDEyLDIuNCBDMTcuMjgsMi40IDIxLjYsNi43MiAyMS42LDEyIEMyMS42LDE3LjI4IDE3LjI4LDIxLjYgMTIsMjEuNiBMMTIsMjEuNiBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';
		me._zoom_out__img.setAttribute('src',hs);
		els.setAttribute('alt','Уменьшить');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;zoom_out;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoom_out__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjcycHgiIGhlaWdodD0iNTZweCIgdmlld0JveD0iMCAwIDcyIDU2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjguMyAoMjk4MDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPnpvb21fb3V0X2hvdmVyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2'+
			'l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9Im5ldyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Inpvb21fb3V0X2hvdmVyLWNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LjAwMDAwMCwgOC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9InJvdy1jb3B5LTIiIGZpbGwtb3BhY2l0eT0iMC4yNiIgZmlsbD0iIzAwMDAwMCI+CiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiPjwvY2lyY2xlPgogICAgICAg'+
			'ICAgICA8L2c+CiAgICAgICAgICAgIDxnIGlkPSJyZW1vdmUtY2lyY2xlLW91dGxpbmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDguMDAwMDAwLCA4LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTYsMTAuOCBMNiwxMy4yIEwxOCwxMy4yIEwxOCwxMC44IEw2LDEwLjggTDYsMTAuOCBaIE0xMiwwIEM1LjQsMCAwLDUuNCAwLDEyIEMwLDE4LjYgNS40LDI0IDEyLDI0IEMxOC42LDI0IDI0LDE4LjYgMjQsMTIgQzI0LDUuNCAxOC42LDAgMTIsMCBMMTIsMCBaIE0xMiwyMS42IEM2LjcyLDIxLjYgMi40LDE3LjI4IDIuNCwxMiBDMi40LDYuNzIgNi43MiwyLj'+
			'QgMTIsMi40IEMxNy4yOCwyLjQgMjEuNiw2LjcyIDIxLjYsMTIgQzIxLjYsMTcuMjggMTcuMjgsMjEuNiAxMiwyMS42IEwxMiwyMS42IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
		me._zoom_out__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;zoom_out;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoom_out";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg .menu-alt";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 176px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoom_out.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoom_out.onmouseover=function (e) {
			me._zoom_out__img.style.visibility='hidden';
			me._zoom_out__imgo.style.visibility='inherit';
			me.elementMouseOver['zoom_out']=true;
			me._zoomouthelp.logicBlock_alpha();
		}
		me._zoom_out.onmouseout=function (e) {
			me._zoom_out__img.style.visibility='inherit';
			me._zoom_out__imgo.style.visibility='hidden';
			me.elementMouseDown['zoom_out']=false;
			me.elementMouseOver['zoom_out']=false;
			me._zoomouthelp.logicBlock_alpha();
		}
		me._zoom_out.onmousedown=function (e) {
			me.elementMouseDown['zoom_out']=true;
		}
		me._zoom_out.onmouseup=function (e) {
			me.elementMouseDown['zoom_out']=false;
		}
		me._zoom_out.ontouchend=function (e) {
			me.elementMouseDown['zoom_out']=false;
			me.elementMouseOver['zoom_out']=false;
			me._zoomouthelp.logicBlock_alpha();
		}
		me._zoom_out.ggUpdatePosition=function (useTransition) {
		}
		el=me._zoomouthelp=document.createElement('div');
		els=me._zoomouthelp__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="zoom-out-help";
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 74px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0 0 2px black;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0.392157);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 32px;';
		hs+=cssPrefix + 'border-radius: 32px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 8px 9px 8px 9px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c (-)";
		el.appendChild(els);
		me._zoomouthelp.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomouthelp.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['zoom_out'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._zoomouthelp.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._zoomouthelp.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._zoomouthelp.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._zoomouthelp.ggCurrentLogicStateAlpha == 0) {
					me._zoomouthelp.style.visibility=me._zoomouthelp.ggVisible?'inherit':'hidden';
					me._zoomouthelp.style.opacity=1;
				}
				else {
					me._zoomouthelp.style.visibility="hidden";
					me._zoomouthelp.style.opacity=0;
				}
			}
		}
		me._zoomouthelp.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._zoom_out.appendChild(me._zoomouthelp);
		me._main_menu.appendChild(me._zoom_out);
		el=me._zoom_in=document.createElement('div');
		els=me._zoom_in__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjcycHgiIGhlaWdodD0iNTZweCIgdmlld0JveD0iMCAwIDcyIDU2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjguMyAoMjk4MDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPnpvb21faW48L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZX'+
			'RjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0ibmV3IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iem9vbV9pbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCAxNi4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9ImFkZC1jaXJjbGUtb3V0bGluZSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuMiw2IEwxMC44LDYgTDEwLjgsMTAuOCBMNiwxMC44IEw2LDEzLjIgTDEwLjgsMTMuMiBMMTAuOCwxOCBMMTMuMiwxOCBMMTMuMiwx'+
			'My4yIEwxOCwxMy4yIEwxOCwxMC44IEwxMy4yLDEwLjggTDEzLjIsNiBMMTMuMiw2IFogTTEyLDAgQzUuNCwwIDAsNS40IDAsMTIgQzAsMTguNiA1LjQsMjQgMTIsMjQgQzE4LjYsMjQgMjQsMTguNiAyNCwxMiBDMjQsNS40IDE4LjYsMCAxMiwwIEwxMiwwIFogTTEyLDIxLjYgQzYuNzIsMjEuNiAyLjQsMTcuMjggMi40LDEyIEMyLjQsNi43MiA2LjcyLDIuNCAxMiwyLjQgQzE3LjI4LDIuNCAyMS42LDYuNzIgMjEuNiwxMiBDMjEuNiwxNy4yOCAxNy4yOCwyMS42IDEyLDIxLjYgTDEyLDIxLjYgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2'+
			'c+Cjwvc3ZnPg==';
		me._zoom_in__img.setAttribute('src',hs);
		els.setAttribute('alt','Увеличить');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;zoom_in;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoom_in__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjcycHgiIGhlaWdodD0iNTZweCIgdmlld0JveD0iMCAwIDcyIDU2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjguMyAoMjk4MDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPnpvb21faW5faG92ZXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aX'+
			'RoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0ibmV3IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iem9vbV9pbl9ob3Zlci1jb3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDguMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJyb3ctY29weS0zIiBmaWxsLW9wYWNpdHk9IjAuMjYiIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTIwLDQwIEMzMS4wNDU2OTUsNDAgNDAsMzEuMDQ1Njk1IDQwLDIwIEM0MCw4Ljk1NDMw'+
			'NSAzMS4wNDU2OTUsMCAyMCwwIEM4Ljk1NDMwNSwwIDAsOC45NTQzMDUgMCwyMCBDMCwzMS4wNDU2OTUgOC45NTQzMDUsNDAgMjAsNDAgWiIgaWQ9Ik92YWwiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8ZyBpZD0iYWRkLWNpcmNsZS1vdXRsaW5lIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjAwMDAwMCwgOC4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMy4yLDYgTDEwLjgsNiBMMTAuOCwxMC44IEw2LDEwLjggTDYsMTMuMiBMMTAuOCwxMy4yIEwxMC44LDE4IEwxMy4yLDE4IEwxMy4yLDEzLjIgTDE4LDEzLjIgTDE4LDEwLj'+
			'ggTDEzLjIsMTAuOCBMMTMuMiw2IEwxMy4yLDYgWiBNMTIsMCBDNS40LDAgMCw1LjQgMCwxMiBDMCwxOC42IDUuNCwyNCAxMiwyNCBDMTguNiwyNCAyNCwxOC42IDI0LDEyIEMyNCw1LjQgMTguNiwwIDEyLDAgTDEyLDAgWiBNMTIsMjEuNiBDNi43MiwyMS42IDIuNCwxNy4yOCAyLjQsMTIgQzIuNCw2LjcyIDYuNzIsMi40IDEyLDIuNCBDMTcuMjgsMi40IDIxLjYsNi43MiAyMS42LDEyIEMyMS42LDE3LjI4IDE3LjI4LDIxLjYgMTIsMjEuNiBMMTIsMjEuNiBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';
		me._zoom_in__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;zoom_in;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoom_in";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg .menu-alt";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 120px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoom_in.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoom_in.onmouseover=function (e) {
			me._zoom_in__img.style.visibility='hidden';
			me._zoom_in__imgo.style.visibility='inherit';
			me.elementMouseOver['zoom_in']=true;
			me._zoominhelp.logicBlock_alpha();
		}
		me._zoom_in.onmouseout=function (e) {
			me._zoom_in__img.style.visibility='inherit';
			me._zoom_in__imgo.style.visibility='hidden';
			me.elementMouseDown['zoom_in']=false;
			me.elementMouseOver['zoom_in']=false;
			me._zoominhelp.logicBlock_alpha();
		}
		me._zoom_in.onmousedown=function (e) {
			me.elementMouseDown['zoom_in']=true;
		}
		me._zoom_in.onmouseup=function (e) {
			me.elementMouseDown['zoom_in']=false;
		}
		me._zoom_in.ontouchend=function (e) {
			me.elementMouseDown['zoom_in']=false;
			me.elementMouseOver['zoom_in']=false;
			me._zoominhelp.logicBlock_alpha();
		}
		me._zoom_in.ggUpdatePosition=function (useTransition) {
		}
		el=me._zoominhelp=document.createElement('div');
		els=me._zoominhelp__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="zoom-in-help";
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 74px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0 0 2px black;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0.392157);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 32px;';
		hs+=cssPrefix + 'border-radius: 32px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 8px 9px 8px 9px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c (+)";
		el.appendChild(els);
		me._zoominhelp.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoominhelp.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['zoom_in'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._zoominhelp.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._zoominhelp.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._zoominhelp.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._zoominhelp.ggCurrentLogicStateAlpha == 0) {
					me._zoominhelp.style.visibility=me._zoominhelp.ggVisible?'inherit':'hidden';
					me._zoominhelp.style.opacity=1;
				}
				else {
					me._zoominhelp.style.visibility="hidden";
					me._zoominhelp.style.opacity=0;
				}
			}
		}
		me._zoominhelp.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._zoom_in.appendChild(me._zoominhelp);
		me._main_menu.appendChild(me._zoom_in);
		el=me._back=document.createElement('div');
		els=me._back__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzJweCIgaGVpZ2h0PSI1NnB4IiB2aWV3Qm94PSIwIDAgNzIgNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+YmFjazwvdGl0bGU+CiAgICA8ZyBpZD0iUGFub1RvdXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJwYW5vLTE5MjB4MTA4MCIgdHJhbnNmb3JtPSJ0cm'+
			'Fuc2xhdGUoLTU2LCAtNTkyKSI+CiAgICAgICAgICAgIDxnIGlkPSJiYWNrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1NiwgNTkyKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0icm93LWNvcHktNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsIDgpIj4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUuNTc1NCwgMTguNSkiIGZpbGw9IiNGRkZGRkYiIGlkPSJDb21iaW5lZC1TaGFwZSI+CiAgICAgICAgICAg'+
			'ICAgICAgICAgPHBhdGggZD0iTTcuNDI0NjIxMiwxOC45NzA1NjI3IEwzLjU1MjcxMzY4ZS0xNSwxMS41NDU5NDE1IEw3LjQyNDYyMTIsNC4xMjEzMjAzNCBMNy40MjQ2MjEyLDkuNzUgTDEzLjExMjEyMTIsOS43NSBDMTQuOTA3MDQ2Niw5Ljc1IDE2LjM2MjEyMTIsOC4yOTQ5MjU0NCAxNi4zNjIxMjEyLDYuNSBMMTYuMzYyMTIxMiwwIEwxOS42MTIxMjEyLDAgTDE5LjYxMjEyMTIsNi41IEMxOS42MTIxMjEyLDEwLjA4OTg1MDkgMTYuNzAxOTcyMSwxMyAxMy4xMTIxMjEyLDEzIEw3LjQyNDYyMTIsMTMgTDcuNDI0NjIxMiwxOC45NzA1NjI3IFoiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz'+
			'4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSI3Mng1NiIgeD0iMCIgeT0iMCIgd2lkdGg9IjcyIiBoZWlnaHQ9IjU2Ij48L3JlY3Q+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
		me._back__img.setAttribute('src',hs);
		els.setAttribute('alt','Включить звуковые эффекты');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;back;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._back__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzJweCIgaGVpZ2h0PSI1NnB4IiB2aWV3Qm94PSIwIDAgNzIgNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+YmFja19ob3ZlcjwvdGl0bGU+CiAgICA8ZyBpZD0iUGFub1RvdXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJwYW5vLTE5MjB4MTA4MCIgdHJhbnNmb3'+
			'JtPSJ0cmFuc2xhdGUoLTU2LCAtNTkyKSI+CiAgICAgICAgICAgIDxnIGlkPSJiYWNrX2hvdmVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1NiwgNTkyKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0icm93LWNvcHktNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsIDgpIiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjAuMjYiPgogICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwiIGN4PSIyMCIgY3k9IjIwIiByPSIyMCI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8ZyBpZD0iYmFjayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUuNTc1'+
			'NCwgMTguNSkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03LjQyNDYyMTIsMTguOTcwNTYyNyBMMy41NTI3MTM2OGUtMTUsMTEuNTQ1OTQxNSBMNy40MjQ2MjEyLDQuMTIxMzIwMzQgTDcuNDI0NjIxMiw5Ljc1IEwxMy4xMTIxMjEyLDkuNzUgQzE0LjkwNzA0NjYsOS43NSAxNi4zNjIxMjEyLDguMjk0OTI1NDQgMTYuMzYyMTIxMiw2LjUgTDE2LjM2MjEyMTIsMCBMMTkuNjEyMTIxMiwwIEwxOS42MTIxMjEyLDYuNSBDMTkuNjEyMTIxMiwxMC4wODk4NTA5IDE2LjcwMTk3MjEsMTMgMTMuMTEyMTIxMiwxMyBMNy40MjQ2MjEyLDEzIEw3LjQyNDYyMTIsMTguOT'+
			'cwNTYyNyBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSI3Mng1NiIgeD0iMCIgeT0iMCIgd2lkdGg9IjcyIiBoZWlnaHQ9IjU2Ij48L3JlY3Q+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
		me._back__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;back;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="back";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg .menu-alt";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 64px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._back.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._back.onclick=function (e) {
			player.openNext("{"+player.getLastVisitedNode()+"}","$(cur)");
		}
		me._back.onmouseover=function (e) {
			me._back__img.style.visibility='hidden';
			me._back__imgo.style.visibility='inherit';
			me.elementMouseOver['back']=true;
			me._backhelp.logicBlock_alpha();
		}
		me._back.onmouseout=function (e) {
			me._back__img.style.visibility='inherit';
			me._back__imgo.style.visibility='hidden';
			me.elementMouseOver['back']=false;
			me._backhelp.logicBlock_alpha();
		}
		me._back.ontouchend=function (e) {
			me.elementMouseOver['back']=false;
			me._backhelp.logicBlock_alpha();
		}
		me._back.ggUpdatePosition=function (useTransition) {
		}
		el=me._backhelp=document.createElement('div');
		els=me._backhelp__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="back-help";
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 74px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0 0 2px black;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0.392157);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 32px;';
		hs+=cssPrefix + 'border-radius: 32px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 8px 9px 8px 9px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u041d\u0430 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0443\u044e \u043f\u0430\u043d\u043e\u0440\u0430\u043c\u0443 (B)";
		el.appendChild(els);
		me._backhelp.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._backhelp.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['back'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._backhelp.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._backhelp.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._backhelp.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._backhelp.ggCurrentLogicStateAlpha == 0) {
					me._backhelp.style.visibility=me._backhelp.ggVisible?'inherit':'hidden';
					me._backhelp.style.opacity=1;
				}
				else {
					me._backhelp.style.visibility="hidden";
					me._backhelp.style.opacity=0;
				}
			}
		}
		me._backhelp.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._back.appendChild(me._backhelp);
		me._main_menu.appendChild(me._back);
		el=me._home=document.createElement('div');
		els=me._home__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjcycHgiIGhlaWdodD0iNTZweCIgdmlld0JveD0iMCAwIDcyIDU2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjguMyAoMjk4MDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmhvbWU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC'+
			'48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0ibmV3IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaG9tZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCAxNi4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9IlNoYXBlIj4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0iMTAgMjEgMTAgMTMuNTg4MjM1MyAxNSAxMy41ODgyMzUzIDE1IDIxIDIxLjI1IDIxIDIxLjI1IDExLjExNzY0NzEgMjUgMTEuMTE3NjQ3MSAxMi41IDAgMCAx'+
			'MS4xMTc2NDcxIDMuNzUgMTEuMTE3NjQ3MSAzLjc1IDIxIj48L3BvbHlnb24+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
		me._home__img.setAttribute('src',hs);
		els.setAttribute('alt','Вернуться на главную панораму');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;home;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._home__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjcycHgiIGhlaWdodD0iNTZweCIgdmlld0JveD0iMCAwIDcyIDU2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjguMyAoMjk4MDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmhvbWVfX2hvdmVyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aC'+
			'BTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9Im5ldyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImhvbWVfX2hvdmVyLWNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LjAwMDAwMCwgOC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9InJvdy1jb3B5IiBmaWxsLW9wYWNpdHk9IjAuMjYiIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgY3g9IjIwIiBjeT0iMjAiIHI9IjIwIj48L2NpcmNsZT4KICAgICAgICAgICAgPC9n'+
			'PgogICAgICAgICAgICA8ZyBpZD0iaG9tZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOC4wMDAwMDAsIDguMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iU2hhcGUiIHBvaW50cz0iMTAgMjEgMTAgMTMuNTg4MjM1MyAxNSAxMy41ODgyMzUzIDE1IDIxIDIxLjI1IDIxIDIxLjI1IDExLjExNzY0NzEgMjUgMTEuMTE3NjQ3MSAxMi41IDAgMCAxMS4xMTc2NDcxIDMuNzUgMTEuMTE3NjQ3MSAzLjc1IDIxIj48L3BvbHlnb24+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
		me._home__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;home;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="home";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg .menu-alt";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._home.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._home.onclick=function (e) {
			player.setVariableValue('coverShow', true);
		}
		me._home.onmouseover=function (e) {
			me._hometimer.ggTimeout=Number("3") * 1000.0;
			me._hometimer.ggTimestamp=skin.ggCurrentTime;
			me._home__img.style.visibility='hidden';
			me._home__imgo.style.visibility='inherit';
			me.elementMouseOver['home']=true;
			me._homehelp.logicBlock_alpha();
		}
		me._home.onmouseout=function (e) {
			me._home__img.style.visibility='inherit';
			me._home__imgo.style.visibility='hidden';
			me.elementMouseOver['home']=false;
			me._homehelp.logicBlock_alpha();
		}
		me._home.ontouchend=function (e) {
			me.elementMouseOver['home']=false;
			me._homehelp.logicBlock_alpha();
		}
		me._home.ggUpdatePosition=function (useTransition) {
		}
		el=me._homehelp=document.createElement('div');
		els=me._homehelp__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="home-help";
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 74px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0 0 2px black;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0.392157);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 32px;';
		hs+=cssPrefix + 'border-radius: 32px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 8px 9px 8px 9px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u044b\u0439 \u044d\u043a\u0440\u0430\u043d (H)";
		el.appendChild(els);
		me._homehelp.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._homehelp.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['home'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._homehelp.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._homehelp.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._homehelp.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._homehelp.ggCurrentLogicStateAlpha == 0) {
					me._homehelp.style.visibility=me._homehelp.ggVisible?'inherit':'hidden';
					me._homehelp.style.opacity=1;
				}
				else {
					me._homehelp.style.visibility="hidden";
					me._homehelp.style.opacity=0;
				}
			}
		}
		me._homehelp.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._home.appendChild(me._homehelp);
		el=me._hometimer=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=5000;
		el.ggId="Home-Timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : -36px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hometimer.ggIsActive=function() {
			return (me._hometimer.ggTimestamp + me._hometimer.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hometimer.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me._hometimer.ggIsActive() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hometimer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hometimer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hometimer.style[domTransition]='';
				if (me._hometimer.ggCurrentLogicStateVisible == 0) {
					me._hometimer.style.visibility="hidden";
					me._hometimer.ggVisible=false;
				}
				else {
					me._hometimer.style.visibility=(Number(me._hometimer.style.opacity)>0||!me._hometimer.style.opacity)?'inherit':'hidden';
					me._hometimer.ggVisible=true;
				}
			}
		}
		me._hometimer.ggActivate=function () {
			me._homehelp.style[domTransition]='none';
			me._homehelp.style.visibility=(Number(me._homehelp.style.opacity)>0||!me._homehelp.style.opacity)?'inherit':'hidden';
			me._homehelp.ggVisible=true;
		}
		me._hometimer.ggDeactivate=function () {
			me._homehelp.style[domTransition]='none';
			me._homehelp.style.visibility='hidden';
			me._homehelp.ggVisible=false;
		}
		me._hometimer.ggCurrentLogicStateVisible = -1;
		me._hometimer.ggUpdateConditionTimer=function () {
			me._hometimer.logicBlock_visible();
		}
		me._hometimer.ggUpdatePosition=function (useTransition) {
		}
		me._home.appendChild(me._hometimer);
		me._main_menu.appendChild(me._home);
		el=me._arrow_menu=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="arrow_menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 112px;';
		hs+='left : -43px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 430px;';
		hs+='visibility : inherit;';
		hs+='width : 112px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 100%';
		me._arrow_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._arrow_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._navmenu_bg=document.createElement('div');
		el.ggId="navmenu_bg";
		el.ggDx=-1;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 112px;';
		hs+='border-radius : 112px;';
		hs+='background : rgba(0,0,0,0.0784314);';
		hs+='border : 1px solid rgba(255,255,255,0.196078);';
		hs+='cursor : default;';
		hs+='height : 112px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 112px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._navmenu_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._navmenu_bg.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._arrow_menu.appendChild(me._navmenu_bg);
		el=me._arrow_up=document.createElement('div');
		els=me._arrow_up__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTdweCIgaGVpZ2h0PSI1NnB4IiB2aWV3Qm94PSIwIDAgNTcgNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+YXJyb3dfdXA8L3RpdGxlPgogICAgPGcgaWQ9IlBhbm9Ub3VyIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjg5NzE1NDg1MSI+CiAgICAgICAgPGcgaWQ9InBhbm'+
			'8tMTkyMHgxMDgwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzYsIC05MzEpIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9ImFycm93X3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2NC41LCA5NTguNzUyMikgc2NhbGUoLTEsIDEpIHJvdGF0ZSgtMjcwKSB0cmFuc2xhdGUoLTY0LjUsIC05NTguNzUyMil0cmFuc2xhdGUoMzcsIDkzMSkiPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlLUNvcHktMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjguOTkyNiwgMjkuNzA5NSkgcm90YXRlKDQ1KSB0cmFuc2xhdGUoLTI4Ljk5MjYsIC0yOS43MDk1KSIgcG9pbnRzPSIzNS45'+
			'MzQzMzU5IDIxLjI1OTg0MjYgMzMuMzI2NTg0IDE4LjcwMzY2NjggMjIuMDUwOTI2NCAyOS43NjAyNzQ4IDMzLjIyNzAwNiA0MC43MTUzMTM5IDM1Ljg1Nzk5MjcgMzguMTM1NDM4NyAyNy4yODk2NjUxIDI5LjczNjU3NTQiPjwvcG9seWdvbj4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';
		me._arrow_up__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;arrow_up;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._arrow_up__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTVweCIgaGVpZ2h0PSI1NnB4IiB2aWV3Qm94PSIwIDAgNTUgNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+YXJyb3dfdXBfaG92ZXI8L3RpdGxlPgogICAgPGcgaWQ9IlBhbm9Ub3VyIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0icGFuby0xOTIweDEwODAiIHRyYW'+
			'5zZm9ybT0idHJhbnNsYXRlKC0xNjgsIC05MzApIj4KICAgICAgICAgICAgPGcgaWQ9ImFycm93X3VwX2hvdmVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjgsIDkzMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTU1LC01LjY4NDM0MTg5ZS0xNCBMNTUuMDAxMDAxNiwzMSBDNDEuNzQ1MTY2LDMxIDMxLDQxLjc0NTE2NiAzMSw1NSBDMzEsNTUuMTY4Njk3OSAzMS4wMDE3NDA1LDU1LjMzNjk4OTIgMzEuMDA1MjA0Niw1NS41MDQ4NTcxIEwwLjAwMiw1NS41MDQgTDAsNTUuMjg1MDE4IEMwLDI1LjA1NDI4NDkgMjQuNDgyMjk1LDAuNDkwMTk0ODU2IDU0Ljg3MDM3OCwwLjAwMTkzNjEyODAy'+
			'IEw1NSwtNS42ODQzNDE4OWUtMTQgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlLUNvcHkiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9IjAuMzAxODc0MDciPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZS1Db3B5LTMiIGZpbGw9IiMzOTM5MzkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4Ljk5MjYsIDI5LjcwOTUpIHJvdGF0ZSg0NSkgdHJhbnNsYXRlKC0yOC45OTI2LCAtMjkuNzA5NSkiIHBvaW50cz0iMzUuOTM0MzM1OSAyMS4yNTk4NDI2IDMzLjMyNjU4NCAxOC43MDM2NjY4IDIyLjA1MDkyNjQgMjkuNzYwMjc0OCAzMy4yMjcwMDYgNDAuNzE1MzEzOSAzNS44NTc5OTI3ID'+
			'M4LjEzNTQzODcgMjcuMjg5NjY1MSAyOS43MzY1NzU0Ij48L3BvbHlnb24+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
		me._arrow_up__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;arrow_up;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="arrow_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._arrow_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._arrow_up.onmouseover=function (e) {
			me._arrow_up__img.style.visibility='hidden';
			me._arrow_up__imgo.style.visibility='inherit';
		}
		me._arrow_up.onmouseout=function (e) {
			me._arrow_up__img.style.visibility='inherit';
			me._arrow_up__imgo.style.visibility='hidden';
			me.elementMouseDown['arrow_up']=false;
		}
		me._arrow_up.onmousedown=function (e) {
			me.elementMouseDown['arrow_up']=true;
		}
		me._arrow_up.onmouseup=function (e) {
			me.elementMouseDown['arrow_up']=false;
		}
		me._arrow_up.ontouchend=function (e) {
			me.elementMouseDown['arrow_up']=false;
		}
		me._arrow_up.ggUpdatePosition=function (useTransition) {
		}
		me._arrow_menu.appendChild(me._arrow_up);
		el=me._arrow_right=document.createElement('div');
		els=me._arrow_right__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTVweCIgaGVpZ2h0PSI1NnB4IiB2aWV3Qm94PSIwIDAgNTUgNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+YXJyb3dfcmlnaHRfaG92ZXI8L3RpdGxlPgogICAgPGcgaWQ9IlBhbm9Ub3VyIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjg5NzE1NDg1MSI+CiAgICAgICAgPG'+
			'cgaWQ9InBhbm8tMTkyMHgxMDgwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTIsIC05MzApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNSwgOTMwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iYXJyb3dfcmlnaHRfaG92ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg0LjUsIDI3Ljc1MjIpIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTg0LjUsIC0yNy43NTIyKXRyYW5zbGF0ZSg1NywgMCkiPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZS1Db3B5LTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4Ljk5'+
			'MjYsIDI5LjcwOTUpIHJvdGF0ZSg0NSkgdHJhbnNsYXRlKC0yOC45OTI2LCAtMjkuNzA5NSkiIHBvaW50cz0iMzUuOTM0MzM1OSAyMS4yNTk4NDI2IDMzLjMyNjU4NCAxOC43MDM2NjY4IDIyLjA1MDkyNjQgMjkuNzYwMjc0OCAzMy4yMjcwMDYgNDAuNzE1MzEzOSAzNS44NTc5OTI3IDM4LjEzNTQzODcgMjcuMjg5NjY1MSAyOS43MzY1NzU0Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
		me._arrow_right__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;arrow_right;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._arrow_right__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTdweCIgaGVpZ2h0PSI1NnB4IiB2aWV3Qm94PSIwIDAgNTcgNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+YXJyb3dfcmlnaHRfaG92ZXI8L3RpdGxlPgogICAgPGcgaWQ9IlBhbm9Ub3VyIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0icGFuby0xOTIweDEwODAiIH'+
			'RyYW5zZm9ybT0idHJhbnNsYXRlKC0yMjIsIC05MzApIj4KICAgICAgICAgICAgPGcgaWQ9ImFycm93X3JpZ2h0X2hvdmVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTAuNTAwMiwgOTU3Ljc1MjcpIHJvdGF0ZSgtMjcwKSB0cmFuc2xhdGUoLTI1MC41MDAyLCAtOTU3Ljc1MjcpdHJhbnNsYXRlKDIyMi45OTk4LCA5MzAuMDAwNykiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTU1LDIuODIyMTM5MjhlLTE0IEw1NS4wMDA4OTA4LDMxLjI1MzUxOTQgQzU0LjkxNjYyNjQsMzEuMjUyNjQ4OCA1NC44MzIyNTgsMzEuMjUyMjEyNCA1NC43NDc3ODc2LDMxLjI1MjIxMjQgQzQxLjQ5Mjk1MzYsMzEu'+
			'MjUyMjEyNCAzMC43NDc3ODc2LDQxLjk5NzM3ODQgMzAuNzQ3Nzg3Niw1NS4yNTIyMTI0IEwzMC43NSw1NS41MDQgTDAuMDAyLDU1LjUwNCBMLTEuMTM2ODY4MzhlLTEzLDU1LjI4NTAxOCBDLTEuMTM2ODY4MzhlLTEzLDI1LjA1NDI4NDkgMjQuNDgyMjk1LDAuNDkwMTk0ODU2IDU0Ljg3MDM3OCwwLjAwMTkzNjEyODAyIEw1NSwyLjgyMjEzOTI4ZS0xNCBaIiBpZD0iQ29tYmluZWQtU2hhcGUtQ29weSIgZmlsbD0iI0ZGRkZGRiIgb3BhY2l0eT0iMC4zMDE4NzQwNyI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlLUNvcHktMyIgZmlsbD0iIzM5MzkzOSIgdHJhbnNmb3'+
			'JtPSJ0cmFuc2xhdGUoMjguOTkyNiwgMjkuNzA5NSkgcm90YXRlKDQ1KSB0cmFuc2xhdGUoLTI4Ljk5MjYsIC0yOS43MDk1KSIgcG9pbnRzPSIzNS45MzQzMzU5IDIxLjI1OTg0MjYgMzMuMzI2NTg0IDE4LjcwMzY2NjggMjIuMDUwOTI2NCAyOS43NjAyNzQ4IDMzLjIyNzAwNiA0MC43MTUzMTM5IDM1Ljg1Nzk5MjcgMzguMTM1NDM4NyAyNy4yODk2NjUxIDI5LjczNjU3NTQiPjwvcG9seWdvbj4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';
		me._arrow_right__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;arrow_right;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="arrow_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : 55px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._arrow_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._arrow_right.onmouseover=function (e) {
			me._arrow_right__img.style.visibility='hidden';
			me._arrow_right__imgo.style.visibility='inherit';
		}
		me._arrow_right.onmouseout=function (e) {
			me._arrow_right__img.style.visibility='inherit';
			me._arrow_right__imgo.style.visibility='hidden';
			me.elementMouseDown['arrow_right']=false;
		}
		me._arrow_right.onmousedown=function (e) {
			me.elementMouseDown['arrow_right']=true;
		}
		me._arrow_right.onmouseup=function (e) {
			me.elementMouseDown['arrow_right']=false;
		}
		me._arrow_right.ontouchend=function (e) {
			me.elementMouseDown['arrow_right']=false;
		}
		me._arrow_right.ggUpdatePosition=function (useTransition) {
		}
		me._arrow_menu.appendChild(me._arrow_right);
		el=me._arrow_left=document.createElement('div');
		els=me._arrow_left__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTVweCIgaGVpZ2h0PSI1NnB4IiB2aWV3Qm94PSIwIDAgNTUgNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+YXJyb3dfbGVmdF9ob3ZlcjwvdGl0bGU+CiAgICA8ZyBpZD0iUGFub1RvdXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuODk3MTU0ODUxIj4KICAgICAgICA8Zy'+
			'BpZD0icGFuby0xOTIweDEwODAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNSwgLTk4NikiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1LCA5MzApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJhcnJvd19sZWZ0X2hvdmVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNy41LCA4NC4yNDc4KSBzY2FsZSgxLCAtMSkgdHJhbnNsYXRlKC0yNy41LCAtODQuMjQ3OCl0cmFuc2xhdGUoMCwgNTYuNDk1NikiPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZS1Db3B5LTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4'+
			'Ljk5MjYsIDI5LjcwOTUpIHJvdGF0ZSg0NSkgdHJhbnNsYXRlKC0yOC45OTI2LCAtMjkuNzA5NSkiIHBvaW50cz0iMzUuOTM0MzM1OSAyMS4yNTk4NDI2IDMzLjMyNjU4NCAxOC43MDM2NjY4IDIyLjA1MDkyNjQgMjkuNzYwMjc0OCAzMy4yMjcwMDYgNDAuNzE1MzEzOSAzNS44NTc5OTI3IDM4LjEzNTQzODcgMjcuMjg5NjY1MSAyOS43MzY1NzU0Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
		me._arrow_left__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;arrow_left;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._arrow_left__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTdweCIgaGVpZ2h0PSI1NnB4IiB2aWV3Qm94PSIwIDAgNTcgNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+YXJyb3dfbGVmdF9ob3ZlcjwvdGl0bGU+CiAgICA8ZyBpZD0iUGFub1RvdXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJwYW5vLTE5MjB4MTA4MCIgdH'+
			'JhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2NywgLTk4NSkiPgogICAgICAgICAgICA8ZyBpZD0iYXJyb3dfbGVmdF9ob3ZlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTk1LjQ5OTgsIDEwMTIuNzUyMikgcm90YXRlKC05MCkgdHJhbnNsYXRlKC0xOTUuNDk5OCwgLTEwMTIuNzUyMil0cmFuc2xhdGUoMTY3Ljk5OTgsIDk4NS4wMDAyKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNTUsLTcuODQ2Mjc5ODdlLTE0IEw1NSwzMS4yNTQgTDU0Ljg1NTMyODUsMzEuMjU1NDI3NyBDNDEuNzgzNTQ5NiwzMS40NjczNjY3IDMxLjI1MjIxMjQsNDIuMTI5OTI2NyAzMS4yNTIyMTI0LDU1LjI1MjIxMjQgTDMx'+
			'LjI1NCw1NS41MDQgTDAuMDAyLDU1LjUwNCBMMCw1NS4yODUwMTggQzAsMjUuMDU0Mjg0OSAyNC40ODIyOTUsMC40OTAxOTQ4NTYgNTQuODcwMzc4LDAuMDAxOTM2MTI4MDIgTDU1LC03Ljg0NjI3OTg3ZS0xNCBaIiBpZD0iQ29tYmluZWQtU2hhcGUtQ29weSIgZmlsbD0iI0ZGRkZGRiIgb3BhY2l0eT0iMC4zMDE4NzQwNyI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlLUNvcHktMyIgZmlsbD0iIzM5MzkzOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjguOTkyNiwgMjkuNzA5NSkgcm90YXRlKDQ1KSB0cmFuc2xhdGUoLTI4Ljk5MjYsIC0yOS43MDk1KSIgcG9pbnRzPS'+
			'IzNS45MzQzMzU5IDIxLjI1OTg0MjYgMzMuMzI2NTg0IDE4LjcwMzY2NjggMjIuMDUwOTI2NCAyOS43NjAyNzQ4IDMzLjIyNzAwNiA0MC43MTUzMTM5IDM1Ljg1Nzk5MjcgMzguMTM1NDM4NyAyNy4yODk2NjUxIDI5LjczNjU3NTQiPjwvcG9seWdvbj4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';
		me._arrow_left__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;arrow_left;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="arrow_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 54px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._arrow_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._arrow_left.onmouseover=function (e) {
			me._arrow_left__img.style.visibility='hidden';
			me._arrow_left__imgo.style.visibility='inherit';
		}
		me._arrow_left.onmouseout=function (e) {
			me._arrow_left__img.style.visibility='inherit';
			me._arrow_left__imgo.style.visibility='hidden';
			me.elementMouseDown['arrow_left']=false;
		}
		me._arrow_left.onmousedown=function (e) {
			me.elementMouseDown['arrow_left']=true;
		}
		me._arrow_left.onmouseup=function (e) {
			me.elementMouseDown['arrow_left']=false;
		}
		me._arrow_left.ontouchend=function (e) {
			me.elementMouseDown['arrow_left']=false;
		}
		me._arrow_left.ggUpdatePosition=function (useTransition) {
		}
		me._arrow_menu.appendChild(me._arrow_left);
		el=me._arrow_down=document.createElement('div');
		els=me._arrow_down__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTVweCIgaGVpZ2h0PSI1NnB4IiB2aWV3Qm94PSIwIDAgNTUgNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+YXJyb3dfZG93bl9ob3ZlcjwvdGl0bGU+CiAgICA8ZyBpZD0iUGFub1RvdXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuODk3MTU0ODUxIj4KICAgICAgICA8Zy'+
			'BpZD0icGFuby0xOTIweDEwODAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MiwgLTk4NikiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1LCA5MzApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJhcnJvd19kb3duX2hvdmVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4NC41LCA4NC4yNDc4KSBzY2FsZSgtMSwgLTEpIHRyYW5zbGF0ZSgtODQuNSwgLTg0LjI0NzgpdHJhbnNsYXRlKDU3LCA1Ni40OTU2KSI+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlLUNvcHktMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUo'+
			'MjguOTkyNiwgMjkuNzA5NSkgcm90YXRlKDQ1KSB0cmFuc2xhdGUoLTI4Ljk5MjYsIC0yOS43MDk1KSIgcG9pbnRzPSIzNS45MzQzMzU5IDIxLjI1OTg0MjYgMzMuMzI2NTg0IDE4LjcwMzY2NjggMjIuMDUwOTI2NCAyOS43NjAyNzQ4IDMzLjIyNzAwNiA0MC43MTUzMTM5IDM1Ljg1Nzk5MjcgMzguMTM1NDM4NyAyNy4yODk2NjUxIDI5LjczNjU3NTQiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';
		me._arrow_down__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;arrow_down;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._arrow_down__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTVweCIgaGVpZ2h0PSI1NnB4IiB2aWV3Qm94PSIwIDAgNTUgNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+YXJyb3dfZG93bl9ob3ZlcjwvdGl0bGU+CiAgICA8ZyBpZD0iUGFub1RvdXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJwYW5vLTE5MjB4MTA4MCIgdH'+
			'JhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyMywgLTk4NSkiPgogICAgICAgICAgICA8ZyBpZD0iYXJyb3dfZG93bl9ob3ZlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUwLjUsIDEwMTIuNzUyMikgcm90YXRlKC0xODApIHRyYW5zbGF0ZSgtMjUwLjUsIC0xMDEyLjc1MjIpdHJhbnNsYXRlKDIyMywgOTg1KSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNTUsMCBMNTUsMzEuNTA0NDI0OCBDNDEuNzQ1MTY2LDMxLjUwNDQyNDggMzEsNDIuMjQ5NTkwOCAzMSw1NS41MDQ0MjQ4IEwwLjAwMiw1NS41MDQgTC0yLjc4NDY0MDFlLTE0LDU1LjI4NTAxOCBDLTIuNzg0NjQwMWUtMTQsMjUuMDU0Mjg0OSAy'+
			'NC40ODIyOTUsMC40OTAxOTQ4NTYgNTQuODcwMzc4LDAuMDAxOTM2MTI4MDIgTDU1LDAgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlLUNvcHkiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9IjAuMzAxODc0MDciPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZS1Db3B5LTMiIGZpbGw9IiMzOTM5MzkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4Ljk5MjYsIDI5LjcwOTUpIHJvdGF0ZSg0NSkgdHJhbnNsYXRlKC0yOC45OTI2LCAtMjkuNzA5NSkiIHBvaW50cz0iMzUuOTM0MzM1OSAyMS4yNTk4NDI2IDMzLjMyNjU4NCAxOC43MDM2NjY4IDIyLjA1MDkyNjQgMjkuNzYwMjc0OCAzMy'+
			'4yMjcwMDYgNDAuNzE1MzEzOSAzNS44NTc5OTI3IDM4LjEzNTQzODcgMjcuMjg5NjY1MSAyOS43MzY1NzU0Ij48L3BvbHlnb24+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
		me._arrow_down__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;arrow_down;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="arrow_down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : 55px;';
		hs+='position : absolute;';
		hs+='top : 54px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._arrow_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._arrow_down.onmouseover=function (e) {
			me._arrow_down__img.style.visibility='hidden';
			me._arrow_down__imgo.style.visibility='inherit';
		}
		me._arrow_down.onmouseout=function (e) {
			me._arrow_down__img.style.visibility='inherit';
			me._arrow_down__imgo.style.visibility='hidden';
			me.elementMouseDown['arrow_down']=false;
		}
		me._arrow_down.onmousedown=function (e) {
			me.elementMouseDown['arrow_down']=true;
		}
		me._arrow_down.onmouseup=function (e) {
			me.elementMouseDown['arrow_down']=false;
		}
		me._arrow_down.ontouchend=function (e) {
			me.elementMouseDown['arrow_down']=false;
		}
		me._arrow_down.ggUpdatePosition=function (useTransition) {
		}
		me._arrow_menu.appendChild(me._arrow_down);
		me._main_menu.appendChild(me._arrow_menu);
		me.divSkin.appendChild(me._main_menu);
		el=me._toggle2=document.createElement('div');
		els=me._toggle2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjcycHgiIGhlaWdodD0iNTZweCIgdmlld0JveD0iMCAwIDcyIDU2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjguMyAoMjk4MDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPnRvZ2dsZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldG'+
			'NoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJuZXciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJ0b2dnbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0LjAwMDAwMCwgMjEuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxnIGlkPSJtZW51Ij4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDE2IEwyNCwxNiBMMjQsMTMuMzMzMzMzMyBMMCwxMy4zMzMzMzMzIEwwLDE2IEwwLDE2IFogTTAsOS4zMzMzMzMzMyBMMjQsOS4zMzMzMzMzMyBMMjQsNi42NjY2'+
			'NjY2NyBMMCw2LjY2NjY2NjY3IEwwLDkuMzMzMzMzMzMgTDAsOS4zMzMzMzMzMyBaIE0wLDAgTDAsMi42NjY2NjY2NyBMMjQsMi42NjY2NjY2NyBMMjQsMCBMMCwwIEwwLDAgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
		me._toggle2__img.setAttribute('src',hs);
		els.setAttribute('alt','Скрыть элементы управления');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;toggle2;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._toggle2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjcycHgiIGhlaWdodD0iNTZweCIgdmlld0JveD0iMCAwIDcyIDU2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjguMyAoMjk4MDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPnRvZ2dsZV9ob3ZlcjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdG'+
			'ggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJuZXciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJ0b2dnbGVfaG92ZXIiPgogICAgICAgICAgICA8ZyBpZD0ibW9yZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYuMDAwMDAwLCA5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9InJvdy1jb3B5LTQiIGZpbGwtb3BhY2l0eT0iMC4yNiIgZmlsbD0iIzAwMDAwMCI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgY3g9IjIwIiBjeT0iMjAi'+
			'IHI9IjIwIj48L2NpcmNsZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJib3VuZHMiIHg9IjExIiB5PSIzIiB3aWR0aD0iMTciIGhlaWdodD0iMzQiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxnIGlkPSJtZW51IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjAwMDAwMCwgMTIuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTAsMTYgTDI0LDE2IEwyNCwxMy4zMzMzMzMzIEwwLDEzLjMzMzMzMzMgTDAsMTYgTDAsMTYgWiBNMCw5LjMzMzMzMzMzIEwyNCw5LjMzMzMzMzMzIEwyNCw2LjY2NjY2NjY3IEwwLD'+
			'YuNjY2NjY2NjcgTDAsOS4zMzMzMzMzMyBMMCw5LjMzMzMzMzMzIFogTTAsMCBMMCwyLjY2NjY2NjY3IEwyNCwyLjY2NjY2NjY3IEwyNCwwIEwwLDAgTDAsMCBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';
		me._toggle2__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;toggle2;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="toggle2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg .menu-alt";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 62px;';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : 62px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 56px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 100%';
		me._toggle2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._toggle2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getViewerSize().width <= 640) || 
				(player.getViewerSize().height <= 640)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(player.getViewerSize().width <= 1200) || 
				(player.getViewerSize().height <= 800)
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._toggle2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._toggle2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._toggle2.style[domTransition]='left 0s, bottom 0s, ' + cssPrefix + 'transform 0s';
				if (me._toggle2.ggCurrentLogicStatePosition == 0) {
					me._toggle2.style.left='40px';
					me._toggle2.style.bottom='34px';
				}
				else if (me._toggle2.ggCurrentLogicStatePosition == 1) {
					me._toggle2.style.left='60px';
					me._toggle2.style.bottom='82px';
				}
				else {
					me._toggle2.style.left='62px';
					me._toggle2.style.bottom='62px';
				}
			}
		}
		me._toggle2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getViewerSize().width <= 640) || 
				(player.getViewerSize().height <= 640)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(player.getViewerSize().width <= 1200) || 
				(player.getViewerSize().height <= 800)
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._toggle2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._toggle2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._toggle2.style[domTransition]='left 0s, bottom 0s, ' + cssPrefix + 'transform 0s';
				if (me._toggle2.ggCurrentLogicStateScaling == 0) {
					me._toggle2.ggParameter.sx = 0.6;
					me._toggle2.ggParameter.sy = 0.6;
					me._toggle2.style[domTransform]=parameterToTransform(me._toggle2.ggParameter);
				}
				else if (me._toggle2.ggCurrentLogicStateScaling == 1) {
					me._toggle2.ggParameter.sx = 0.8;
					me._toggle2.ggParameter.sy = 0.8;
					me._toggle2.style[domTransform]=parameterToTransform(me._toggle2.ggParameter);
				}
				else {
					me._toggle2.ggParameter.sx = 1;
					me._toggle2.ggParameter.sy = 1;
					me._toggle2.style[domTransform]=parameterToTransform(me._toggle2.ggParameter);
				}
			}
		}
		me._toggle2.onclick=function (e) {
			var flag=me._main_menu.ggOpacitiyActive;
			if (player.transitionsDisabled) {
				me._main_menu.style[domTransition]='none';
			} else {
				me._main_menu.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._main_menu.style.opacity='0.9';
				me._main_menu.style.visibility=me._main_menu.ggVisible?'inherit':'hidden';
			} else {
				me._main_menu.style.opacity='0';
				me._main_menu.style.visibility='hidden';
			}
			me._main_menu.ggOpacitiyActive=!flag;
			var flag=me._arrow_menu.ggOpacitiyActive;
			if (player.transitionsDisabled) {
				me._arrow_menu.style[domTransition]='none';
			} else {
				me._arrow_menu.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._arrow_menu.style.opacity='0.9';
				me._arrow_menu.style.visibility=me._arrow_menu.ggVisible?'inherit':'hidden';
			} else {
				me._arrow_menu.style.opacity='0';
				me._arrow_menu.style.visibility='hidden';
			}
			me._arrow_menu.ggOpacitiyActive=!flag;
			var flag=me._top_menu.ggOpacitiyActive;
			if (player.transitionsDisabled) {
				me._top_menu.style[domTransition]='none';
			} else {
				me._top_menu.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._top_menu.style.opacity='1';
				me._top_menu.style.visibility=me._top_menu.ggVisible?'inherit':'hidden';
			} else {
				me._top_menu.style.opacity='0';
				me._top_menu.style.visibility='hidden';
			}
			me._top_menu.ggOpacitiyActive=!flag;
			var flag=me._map_bg.ggOpacitiyActive;
			if (player.transitionsDisabled) {
				me._map_bg.style[domTransition]='none';
			} else {
				me._map_bg.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._map_bg.style.opacity='1';
				me._map_bg.style.visibility=me._map_bg.ggVisible?'inherit':'hidden';
			} else {
				me._map_bg.style.opacity='0';
				me._map_bg.style.visibility='hidden';
			}
			me._map_bg.ggOpacitiyActive=!flag;
			if (
				(
					(me.ggUserdata.description != "+")
				)
			) {
				me._abouttext.ggVisible = !me._abouttext.ggVisible;
				var flag=me._abouttext.ggVisible;
				me._abouttext.style[domTransition]='none';
				me._abouttext.style.visibility=((flag)&&(Number(me._abouttext.style.opacity)>0||!me._abouttext.style.opacity))?'inherit':'hidden';
			}
		}
		me._toggle2.onmouseover=function (e) {
			me._toggle2__img.style.visibility='hidden';
			me._toggle2__imgo.style.visibility='inherit';
		}
		me._toggle2.onmouseout=function (e) {
			me._toggle2__img.style.visibility='inherit';
			me._toggle2__imgo.style.visibility='hidden';
		}
		me._toggle2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._toggle2);
		el=me._abouttext=document.createElement('div');
		els=me._abouttext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="about-text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 520px;';
		hs+='position : absolute;';
		hs+='right : 16px;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 500px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 500px;';
		hs+='height: 520px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._abouttext.ggUpdateText=function() {
			var hs="<div class=\"inf-wnd\"><h2>"+me.ggUserdata.title+"<\/h2><h4>"+me.ggUserdata.information+"<\/h4>"+me.ggUserdata.description+"<\/div>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._abouttext.ggUpdateText();
		el.appendChild(els);
		me._abouttext.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._abouttext.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getViewerSize().width <= 640) || 
				(player.getViewerSize().height <= 640)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(player.getViewerSize().width <= 1200) || 
				(player.getViewerSize().height <= 800)
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._abouttext.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._abouttext.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._abouttext.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._abouttext.ggCurrentLogicStateScaling == 0) {
					me._abouttext.ggParameter.sx = 0.6;
					me._abouttext.ggParameter.sy = 0.6;
					me._abouttext.style[domTransform]=parameterToTransform(me._abouttext.ggParameter);
				}
				else if (me._abouttext.ggCurrentLogicStateScaling == 1) {
					me._abouttext.ggParameter.sx = 0.8;
					me._abouttext.ggParameter.sy = 0.8;
					me._abouttext.style[domTransform]=parameterToTransform(me._abouttext.ggParameter);
				}
				else {
					me._abouttext.ggParameter.sx = 1;
					me._abouttext.ggParameter.sy = 1;
					me._abouttext.style[domTransform]=parameterToTransform(me._abouttext.ggParameter);
				}
			}
		}
		me._abouttext.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.ggUserdata.description == "+")
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._abouttext.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._abouttext.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._abouttext.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._abouttext.ggCurrentLogicStateVisible == 0) {
					me._abouttext.style.visibility="hidden";
					me._abouttext.ggVisible=false;
				}
				else {
					me._abouttext.style.visibility=(Number(me._abouttext.style.opacity)>0||!me._abouttext.style.opacity)?'inherit':'hidden';
					me._abouttext.ggVisible=true;
				}
			}
		}
		me._abouttext.onclick=function (e) {
			me._abouttext.style[domTransition]='none';
			me._abouttext.style.visibility='hidden';
			me._abouttext.ggVisible=false;
			me._top_menu.style[domTransition]='none';
			me._top_menu.style.visibility=(Number(me._top_menu.style.opacity)>0||!me._top_menu.style.opacity)?'inherit':'hidden';
			me._top_menu.ggVisible=true;
		}
		me._abouttext.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._abouttext);
		el=me._help=document.createElement('div');
		el.ggId="help";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._help.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._help.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getViewerSize().width <= 640) || 
				(player.getViewerSize().height <= 640)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(player.getViewerSize().width <= 1200) || 
				(player.getViewerSize().height <= 800)
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._help.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._help.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._help.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._help.ggCurrentLogicStateScaling == 0) {
					me._help.ggParameter.sx = 0.6;
					me._help.ggParameter.sy = 0.6;
					me._help.style[domTransform]=parameterToTransform(me._help.ggParameter);
				}
				else if (me._help.ggCurrentLogicStateScaling == 1) {
					me._help.ggParameter.sx = 0.8;
					me._help.ggParameter.sy = 0.8;
					me._help.style[domTransform]=parameterToTransform(me._help.ggParameter);
				}
				else {
					me._help.ggParameter.sx = 1;
					me._help.ggParameter.sy = 1;
					me._help.style[domTransform]=parameterToTransform(me._help.ggParameter);
				}
			}
		}
		me._help.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('titleShow') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(player.getVariableValue('titleShow') == false)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._help.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._help.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._help.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._help.ggCurrentLogicStateVisible == 0) {
					me._help.style.visibility=(Number(me._help.style.opacity)>0||!me._help.style.opacity)?'inherit':'hidden';
					me._help.ggVisible=true;
				}
				else if (me._help.ggCurrentLogicStateVisible == 1) {
					me._help.style.visibility="hidden";
					me._help.ggVisible=false;
				}
				else {
					me._help.style.visibility="hidden";
					me._help.ggVisible=false;
				}
			}
		}
		me._help.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._helpback=document.createElement('div');
		el.ggId="help-back";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._helpback.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._helpback.onclick=function (e) {
			me._help.style[domTransition]='none';
			me._help.style.visibility='hidden';
			me._help.ggVisible=false;
		}
		me._helpback.ggUpdatePosition=function (useTransition) {
		}
		me._help.appendChild(me._helpback);
		el=me._helpbg=document.createElement('div');
		el.ggId="help-bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._helpbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._helpbg.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._helpwindow=document.createElement('div');
		els=me._helpwindow__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="help-window";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 4;';
		hs+='height : 96%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 96%;';
		hs+='pointer-events:auto;';
		hs+='overflow:hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="<div id=\"help-wnd\"><br\/><h2>\u041f\u0430\u043d\u043e\u0440\u0430\u043c\u043d\u044b\u0439 \u0442\u0443\u0440 \u0433\u0440\u0443\u043f\u043f\u044b \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0439 \u0418\u041d\u041a<\/h2><br\/><p>\u0413\u0440\u0443\u043f\u043f\u0430 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0439 \u0418\u041d\u041a \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f \u0433\u0435\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u0435\u043c, \u0440\u0430\u0437\u0432\u0435\u0434\u043a\u043e\u0439, \u0434\u043e\u0431\u044b\u0447\u0435\u0439 \u0438 \u043f\u0435\u0440\u0435\u0440\u0430\u0431\u043e\u0442\u043a\u043e\u0439 \u0443\u0433\u043b\u0435\u0432\u043e\u0434\u043e\u0440\u043e\u0434\u043d\u043e\u0433\u043e \u0441\u044b\u0440\u044c\u044f \u043d\u0430 53 \u0443\u0447\u0430\u0441\u0442\u043a\u0430\u0445 \u043d\u0435\u0434\u0440 \u0432 \u0412\u043e\u0441\u0442\u043e\u0447\u043d\u043e\u0439 \u0421\u0438\u0431\u0438\u0440\u0438 - \u0418\u0440\u043a\u0443\u0442\u0441\u043a\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438, \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0435 \u0421\u0430\u0445\u0430 (\u042f\u043a\u0443\u0442\u0438\u044f) \u0438 \u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u043e\u043c \u043a\u0440\u0430\u0435. \u0412 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 \u0443\u0447\u0430\u0441\u0442\u043a\u043e\u0432 \u043d\u0435\u0434\u0440 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u044b 25 \u043c\u0435\u0441\u0442\u043e\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0439 \u0443\u0433\u043b\u0435\u0432\u043e\u0434\u043e\u0440\u043e\u0434\u043d\u043e\u0433\u043e \u0441\u044b\u0440\u044c\u044f. <\/p><p><br\/><br\/>3D-\u0442\u0443\u0440 \u2013 \u044d\u0442\u043e \u0441\u043f\u043e\u0441\u043e\u0431 \u043f\u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c \u0448\u0438\u0440\u043e\u043a\u0443\u044e \u0430\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044e \u2013 \u043e\u0442 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u0434\u043e \u0448\u043a\u043e\u043b\u044c\u043d\u0438\u043a\u043e\u0432 \u0438 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043e\u0432 \u2013 \u0441 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438. \u0412 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u0432\u043e\u0448\u043b\u0438 77 \u043f\u0430\u043d\u043e\u0440\u0430\u043c \u0432 \u0447\u0435\u0442\u044b\u0440\u0435\u0445 \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0445 \u043b\u043e\u043a\u0430\u0446\u0438\u044f\u0445 \u0418\u041d\u041a \u043d\u0430 \u0441\u0435\u0432\u0435\u0440\u0435 \u0418\u0440\u043a\u0443\u0442\u0441\u043a\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438: \u042f\u0440\u0430\u043a\u0442\u0438\u043d\u0441\u043a\u043e\u043c, \u0418\u0447\u0451\u0434\u0438\u043d\u0441\u043a\u043e\u043c, \u041c\u0430\u0440\u043a\u043e\u0432\u0441\u043a\u043e\u043c \u043c\u0435\u0441\u0442\u043e\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f\u0445 \u0438 \u0433\u043e\u0440\u043e\u0434\u0435 \u0423\u0441\u0442\u044c-\u041a\u0443\u0442\u0435. <br\/><\/p><p><br\/>\u041f\u0440\u0438\u0433\u043b\u0430\u0448\u0430\u0435\u043c \u0432\u0430\u0441 \u0432 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u043f\u043e \u0438\u043d\u0434\u0443\u0441\u0442\u0440\u0438\u0430\u043b\u044c\u043d\u044b\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c \u0432 \u0441\u0430\u043c\u043e\u043c \u0441\u0435\u0440\u0434\u0446\u0435 \u0412\u043e\u0441\u0442\u043e\u0447\u043d\u043e\u0439 \u0421\u0438\u0431\u0438\u0440\u0438!<br\/><\/p><p><br\/>\u0414\u043b\u044f \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u043f\u043e \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0443 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0430\u043d\u0435\u043b\u044c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u043c\u0435\u0442\u043a\u0438 \u0432\u043d\u0443\u0442\u0440\u0438 \u043f\u0430\u043d\u043e\u0440\u0430\u043c: <br\/><\/p><br\/><img src=\"images\/help-icons.svg\"><br\/><\/div>";
		el.appendChild(els);
		me._helpwindow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._helpwindow.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._helpbg.appendChild(me._helpwindow);
		me._help.appendChild(me._helpbg);
		me.divSkin.appendChild(me._help);
		el=me._cover=document.createElement('div');
		el.ggId="cover";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cover.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._cover.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('coverShow') == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(player.getVariableValue('coverShow') == true)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cover.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cover.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cover.style[domTransition]='';
				if (me._cover.ggCurrentLogicStateVisible == 0) {
					me._cover.style.visibility="hidden";
					me._cover.ggVisible=false;
				}
				else if (me._cover.ggCurrentLogicStateVisible == 1) {
					me._cover.style.visibility=(Number(me._cover.style.opacity)>0||!me._cover.style.opacity)?'inherit':'hidden';
					me._cover.ggVisible=true;
				}
				else {
					me._cover.style.visibility="hidden";
					me._cover.ggVisible=false;
				}
			}
		}
		me._cover.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._coverback=document.createElement('div');
		el.ggId="cover-back";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle .map";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #2b5e4a;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background: black url(\"images\/map_bg.png\") repeat center center;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._coverback.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._coverback.onclick=function (e) {
			player.setVariableValue('coverShow', false);
		}
		me._coverback.ggUpdatePosition=function (useTransition) {
		}
		me._cover.appendChild(me._coverback);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=0;
		el.ggDy=164;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 936px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 1484px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getViewerSize().width <= 640) || 
				(player.getViewerSize().height <= 640)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_1.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._image_1.ggCurrentLogicStateScaling == 0) {
					me._image_1.ggParameter.sx = 0.6;
					me._image_1.ggParameter.sy = 0.6;
					me._image_1.style[domTransform]=parameterToTransform(me._image_1.ggParameter);
				}
				else {
					me._image_1.ggParameter.sx = 1;
					me._image_1.ggParameter.sy = 1;
					me._image_1.style[domTransform]=parameterToTransform(me._image_1.ggParameter);
				}
			}
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._btn_icho=document.createElement('div');
		el.ggId="btn icho";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 241px;';
		hs+='left : 404px;';
		hs+='position : absolute;';
		hs+='top : 194px;';
		hs+='visibility : inherit;';
		hs+='width : 165px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_icho.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_icho.onclick=function (e) {
			me._cover.style[domTransition]='none';
			me._cover.style.visibility='hidden';
			me._cover.ggVisible=false;
			player.openNext("{node43}","");
		}
		me._btn_icho.ggUpdatePosition=function (useTransition) {
		}
		me._image_1.appendChild(me._btn_icho);
		el=me._btn_uk=document.createElement('div');
		el.ggId="btn uk";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 241px;';
		hs+='left : 478px;';
		hs+='position : absolute;';
		hs+='top : 526px;';
		hs+='visibility : inherit;';
		hs+='width : 165px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_uk.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_uk.onclick=function (e) {
			me._cover.style[domTransition]='none';
			me._cover.style.visibility='hidden';
			me._cover.ggVisible=false;
		}
		me._btn_uk.ggUpdatePosition=function (useTransition) {
		}
		me._image_1.appendChild(me._btn_uk);
		el=me._btn_mark=document.createElement('div');
		el.ggId="btn mark";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 241px;';
		hs+='left : 994px;';
		hs+='position : absolute;';
		hs+='top : 470px;';
		hs+='visibility : inherit;';
		hs+='width : 165px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_mark.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_mark.ggUpdatePosition=function (useTransition) {
		}
		me._image_1.appendChild(me._btn_mark);
		el=me._btn_ya=document.createElement('div');
		el.ggId="btn ya";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 241px;';
		hs+='left : 1188px;';
		hs+='position : absolute;';
		hs+='top : 248px;';
		hs+='visibility : inherit;';
		hs+='width : 165px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_ya.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_ya.ggUpdatePosition=function (useTransition) {
		}
		me._image_1.appendChild(me._btn_ya);
		me._cover.appendChild(me._image_1);
		me.divSkin.appendChild(me._cover);
		me._arrow_menu.style[domTransition]='none';
		me._arrow_menu.ggParameter.a="45.0000";
		me._arrow_menu.style[domTransform]=parameterToTransform(me._arrow_menu.ggParameter);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			player.setVariableValue('currentPan', "1");
			me._dropdown_cloner_uk.ggUpdate();
			me._dropdown_cloner_icho.ggUpdate();
			me._dropdown_cloner_mark.ggUpdate();
			me._dropdown_cloner_ya.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._scrollarea_uk.ggUpdatePosition();
			me._scrollarea_icho.ggUpdatePosition();
			me._scrollarea_mark.ggUpdatePosition();
			me._scrollarea_ya.ggUpdatePosition();
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_photopin_mouseover = function(){
		if(hotspotTemplates['PhotoPin']) {
			var i;
			for(i = 0; i < hotspotTemplates['PhotoPin'].length; i++) {
				if (hotspotTemplates['PhotoPin'][i]._imagepin && hotspotTemplates['PhotoPin'][i]._imagepin.logicBlock_alpha) {
					hotspotTemplates['PhotoPin'][i]._imagepin.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_pinya_mouseover = function(){
		if(hotspotTemplates['pin-ya']) {
			var i;
			for(i = 0; i < hotspotTemplates['pin-ya'].length; i++) {
				if (hotspotTemplates['pin-ya'][i]._pin_yaa && hotspotTemplates['pin-ya'][i]._pin_yaa.logicBlock_alpha) {
					hotspotTemplates['pin-ya'][i]._pin_yaa.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_pinicho_mouseover = function(){
		if(hotspotTemplates['pin-icho']) {
			var i;
			for(i = 0; i < hotspotTemplates['pin-icho'].length; i++) {
				if (hotspotTemplates['pin-icho'][i]._piniccho && hotspotTemplates['pin-icho'][i]._piniccho.logicBlock_alpha) {
					hotspotTemplates['pin-icho'][i]._piniccho.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_pinmar_mouseover = function(){
		if(hotspotTemplates['pin-mar']) {
			var i;
			for(i = 0; i < hotspotTemplates['pin-mar'].length; i++) {
				if (hotspotTemplates['pin-mar'][i]._pinmaar && hotspotTemplates['pin-mar'][i]._pinmaar.logicBlock_alpha) {
					hotspotTemplates['pin-mar'][i]._pinmaar.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_pinuk_mouseover = function(){
		if(hotspotTemplates['pin-uk']) {
			var i;
			for(i = 0; i < hotspotTemplates['pin-uk'].length; i++) {
				if (hotspotTemplates['pin-uk'][i]._pinuuk && hotspotTemplates['pin-uk'][i]._pinuuk.logicBlock_alpha) {
					hotspotTemplates['pin-uk'][i]._pinuuk.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_airpin_mouseover = function(){
		if(hotspotTemplates['Airpin']) {
			var i;
			for(i = 0; i < hotspotTemplates['Airpin'].length; i++) {
				if (hotspotTemplates['Airpin'][i]._aeropintext && hotspotTemplates['Airpin'][i]._aeropintext.logicBlock_alpha) {
					hotspotTemplates['Airpin'][i]._aeropintext.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_redpin_mouseover = function(){
		if(hotspotTemplates['Redpin']) {
			var i;
			for(i = 0; i < hotspotTemplates['Redpin'].length; i++) {
				if (hotspotTemplates['Redpin'][i]._redpin0 && hotspotTemplates['Redpin'][i]._redpin0.logicBlock_alpha) {
					hotspotTemplates['Redpin'][i]._redpin0.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_redpin_mouseover = function(){
		if(hotspotTemplates['Redpin']) {
			var i;
			for(i = 0; i < hotspotTemplates['Redpin'].length; i++) {
				if (hotspotTemplates['Redpin'][i]._pintext && hotspotTemplates['Redpin'][i]._pintext.logicBlock_alpha) {
					hotspotTemplates['Redpin'][i]._pintext.logicBlock_alpha();
				}
			}
		}
	}
	player.addListener('changenodeid', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		me._subtitle.ggUpdateText();
		me._pan_title.ggUpdateText();
		me._gyro2.ggUpdateText();
		if (me.elementMouseDown['zoom_out']) {
			player.changeFovLog(1.4,true);
		}
		if (me.elementMouseDown['zoom_in']) {
			player.changeFovLog(-1.4,true);
		}
		if (me._hometimer.ggLastIsActive!=me._hometimer.ggIsActive()) {
			me._hometimer.ggLastIsActive=me._hometimer.ggIsActive();
			if (me._hometimer.ggLastIsActive) {
				me._homehelp.style[domTransition]='none';
				me._homehelp.style.visibility=(Number(me._homehelp.style.opacity)>0||!me._homehelp.style.opacity)?'inherit':'hidden';
				me._homehelp.ggVisible=true;
			} else {
				me._homehelp.style[domTransition]='none';
				me._homehelp.style.visibility='hidden';
				me._homehelp.ggVisible=false;
			}
		}
		me._hometimer.ggUpdateConditionTimer();
		if (me.elementMouseDown['arrow_up']) {
			player.changeTiltLog(1.4,true);
		}
		if (me.elementMouseDown['arrow_right']) {
			player.changePanLog(-1.4,true);
		}
		if (me.elementMouseDown['arrow_left']) {
			player.changePanLog(1.4,true);
		}
		if (me.elementMouseDown['arrow_down']) {
			player.changeTiltLog(-1.4,true);
		}
		me._abouttext.ggUpdateText();
		if (!player.getLockedKeyboard()) {
			switch(me.skinKeyPressed) {
				case 37:
					player.changePanLog(1.4,true);
					break;
				case 38:
					player.changeTiltLog(1.4,true);
					break;
				case 39:
					player.changePanLog(-1.4,true);
					break;
				case 40:
					player.changeTiltLog(-1.4,true);
					break;
				case 61:
					player.changeFovLog(-1.4,true);
					break;
				case 109:
					player.changeFovLog(1.4,true);
					break;
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_photopin(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._photopin=document.createElement('div');
		el.ggId="PhotoPin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 284px;';
		hs+='position : absolute;';
		hs+='top : 328px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._photopin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._photopin.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._photopin.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._photopin.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._photopin.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._photopin.ggUpdatePosition=function (useTransition) {
		}
		el=me._imagepin=document.createElement('div');
		els=me._imagepin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI2NXB4IiB2aWV3Qm94PSIwIDAgNTAgNjUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aW1hZ2VwaW48L3RpdGxlPgogICAgPGcgaWQ9IlBhbm9Ub3VyIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0icGFuby0xOTIweDEwODAiIHRyYW5zZm9ybT'+
			'0idHJhbnNsYXRlKC0xNjA0LCAtNTMpIj4KICAgICAgICAgICAgPGcgaWQ9ImltYWdlcGluIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjA0LCA1MykiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTI1LjAwMDAyMTksNjMgTDYuNTk1MzMzODQsNDAuOTcwNzM1OCBDNi41MjU2NjEyNiw0MC44ODY0NDUzIDYuMjcyNDI1NTQsNDAuNTUzMTk1NCA1LjgzNTYyNjY4LDM5Ljk3MDk4NiBDMi42OTE0MTg0NiwzNS43NjgwMDkgMC45OTI3MDM3OSwzMC42MzQyMTI2IDEuMDAwMDQ5MjEsMjUuMzU3MTQyOSBDMS4wMDAwNDkyMSwxOC44OTcyMjcyIDMuNTI4NjMyNjUsMTIuNzAxODkyNSA4LjAyOTQ5NjEs'+
			'OC4xMzQwNDI0IEMxMi41MzAzNTk2LDMuNTY2MTkyMjUgMTguNjM0ODM5NywxIDI1LjAwMDAyMTksMSBDMzEuMzY1MjA0MSwxIDM3LjQ2OTY4OTQsMy41NjYxOTIyNSA0MS45NzA1NTI5LDguMTM0MDQyNCBDNDYuNDcxNDE2MywxMi43MDE4OTI1IDQ4Ljk5OTk5ODcsMTguODk3MjI3MiA0OC45OTk5OTg3LDI1LjM1NzE0MjkgQzQ5LjAwNzc5OSwzMC42MzIwNTIzIDQ3LjMxMDIzNTMsMzUuNzYzOTAwMiA0NC4xNjc2OTMyLDM5Ljk2NTQ0OTEgTDQ0LjE2NDQyMjMsMzkuOTcwOTg2IEM0My43MjgwNTcsNDAuNTUzMTk0MiA0My40NzczNjUzLDQwLjg4MzQxNzQgNDMuNDEyMzQ3Myw0MC45NjE2NTU1IE'+
			'wyNS4wMDAwMjE5LDYzIFoiIGlkPSJwaW4iIGZpbGw9IiMwMEFCQzciIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTI1LjAwMDAyNDUsMCBDMzEuNjMzNTQ0NywwIDM3Ljk5NDQ0OTMsMi42NzM5ODU4NiA0Mi42ODI4NjMzLDcuNDMyMTc3ODYgQzQ3LjM2ODQ2NjMsMTIuMTg3NTE3IDUwLjAwMDAyNDUsMTguNjM1MTIgNTAuMDAwMDI0NSwyNS4zNTU2NjQxIEM1MC4wMDgxMTc1LDMwLjg0NjY5NjggNDguMjQwODMzOSwzNi4xODkyOTI1IDQ0Ljk2ODQ4MTEsNDAuNTY0Mzk3MSBDNDQuNTEwMzUwNCw0MS4xNzY4MTg4IDQ0LjI2MjkyNTYsNDEuNTAy'+
			'NzM4NyA0NC4xNzk3NjI0LDQxLjYwMjgwNiBMMjUuNzY3NDM3LDYzLjY0MTE1MDYgTDI1LjAwMDAyNDUsNjQuNTU5Njk3MyBMMjQuMjMyNjA1OSw2My42NDExNDk1IEw1LjgyNDU1NzYzLDQxLjYwNzg0MTggQzUuNzM5NjIxNTQsNDEuNTA1MDg1NCA1LjQ4ODI5Nzc0LDQxLjE3NDM1MTUgNS4wMzQ4OTM0Niw0MC41NzAwMDcxIEMxLjc2MDg1NzUsMzYuMTkzNDg0NyAtMC4wMDc1OTYwNzU5OSwzMC44NDg5NDUgMi40NTI1OTYwN2UtMDUsMjUuMzU3MTQyOSBDMi40NTI1OTYwN2UtMDUsMTguNjM1MTIwNiAyLjYzMTU4MjMxLDEyLjE4NzUxNzQgNy4zMTcxODU2Niw3LjQzMjE3Nzg2IEMxMi4wMDU2MD'+
			'A1LDIuNjczOTg1MDIgMTguMzY2NTAwMiwwIDI1LjAwMDAyNDUsMCBaIE0yNS4wMDAwMjU1LDIgQzE4LjkwMzE4MDQsMiAxMy4wNTUxMTk1LDQuNDU4Mzk4NjEgOC43NDE4MDY1NSw4LjgzNTkwNjk0IEM0LjQyNTY2MzI0LDEzLjIxNjI4NzcgMi4wMDAwMjU0OSwxOS4xNTkzNjIxIDIuMDAwMDI1NDksMjUuMzU4NTM0OCBDMS45OTMwMDM2MywzMC40MTk0OTg2IDMuNjIxOTkwMzgsMzUuMzQyNTQ4IDYuNjM1NTMzMTcsMzkuMzcwODYxMyBMNi44NDg1MDA2MSwzOS42NTQzMTE1IEM3LjE0MjU4NzI0LDQwLjA0NTA3ODcgNy4zMjA5ODI1OSw0MC4yNzkwMzgyIDcuMzYyNzQ5ODQsNDAuMzI5NTg2MyBM'+
			'MjUuMDAwMDI1NSw2MS40MzkgTDQyLjY0MzI1NDcsNDAuMzIyNTE4IEM0Mi42Nzg1NjQxLDQwLjI4MDAyOTMgNDIuODIyNTE5MSw0MC4wOTE1MDE5IDQzLjA1OTM4NjYsMzkuNzc3MDU1MyBMNDMuMjU0MjEyNiwzOS41MTc5MjUgTDQzLjM1MjAyNTUsMzkuMzg2IEw0My4zNjY5MDUzLDM5LjM2NjUwMSBDNDYuMjgyNDQwOCwzNS40Njg0NTc5IDQ3LjkwMTAxNjYsMzAuNzMzOTg3NyA0Ny45OTU2MjYxLDI1Ljg0NjM4OCBMNDcuOTk5OTk4NywyNS4zNTcxNDI5IEM0Ny45OTk5OTg3LDE5LjE1OTM2MTQgNDUuNTc0Mzg1MywxMy4yMTYyODczIDQxLjI1ODI0MjQsOC44MzU5MDY5NCBDMzYuOTQ0OTMwNC'+
			'w0LjQ1ODM5OTUzIDMxLjA5Njg2NDcsMiAyNS4wMDAwMjU1LDIgWiIgaWQ9InBpbiIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjE0IDEyIDI5LjAwMDAyNTUgMTIgMzcgMjAgMzcgMzYgMTQgMzYiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00MC4wMDAwMjU1LDkgTDQwLjAwMDAyNTUsMjMgTDI2LjAwMDAyNTUsMjMgTDI2LjAwMDAyNTUsOSBMNDAuMDAwMDI1NSw5IFogTTM3LjAwMDAyNTUsMTIgTDI5LjAwMDAyNTUsMTIgTDI5'+
			'LjAwMDAyNTUsMjAgTDM3LjAwMDAyNTUsMjAgTDM3LjAwMDAyNTUsMTIgWiIgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iIzAwQUJDNyIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
		me._imagepin__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;imagepin;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="imagepin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 47px;';
		hs+='left : -15px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='top : -42px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._imagepin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._imagepin.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['imagepin'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._imagepin.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._imagepin.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._imagepin.style[domTransition]='opacity 0s, visibility 0s';
				if (me._imagepin.ggCurrentLogicStateAlpha == 0) {
					me._imagepin.style.visibility=me._imagepin.ggVisible?'inherit':'hidden';
					me._imagepin.style.opacity=1;
				}
				else {
					me._imagepin.style.visibility=me._imagepin.ggVisible?'inherit':'hidden';
					me._imagepin.style.opacity=0.79999;
				}
			}
		}
		me._imagepin.onclick=function (e) {
			me._imagepreview.style[domTransition]='none';
			me._imagepreview.style.visibility=(Number(me._imagepreview.style.opacity)>0||!me._imagepreview.style.opacity)?'inherit':'hidden';
			me._imagepreview.ggVisible=true;
		}
		me._imagepin.onmouseover=function (e) {
			me.elementMouseOver['imagepin']=true;
			me._imagepin.logicBlock_alpha();
		}
		me._imagepin.onmouseout=function (e) {
			me.elementMouseOver['imagepin']=false;
			me._imagepin.logicBlock_alpha();
		}
		me._imagepin.ontouchend=function (e) {
			me.elementMouseOver['imagepin']=false;
			me._imagepin.logicBlock_alpha();
		}
		me._imagepin.ggUpdatePosition=function (useTransition) {
		}
		el=me._imagepreview=document.createElement('div');
		els=me._imagepreview__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="imagepreview";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -269px;';
		hs+='position : absolute;';
		hs+='top : -286px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.0784314);';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<div id=\"imgprw\" style=\"backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);text-align:center;padding: 32px;position:fixed;top:0;left:0;width: calc(100%-64px);height: calc(100%-64px);z-index:100;<br\/>background: rgba(0,0,0,0.1) src("+me.hotspot.description+") no-repeat center center contain\"><\/div>";
		el.appendChild(els);
		me._imagepreview.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._imagepreview.onclick=function (e) {
			me._imagepreview.style[domTransition]='none';
			me._imagepreview.style.visibility='hidden';
			me._imagepreview.ggVisible=false;
		}
		me._imagepreview.ggUpdatePosition=function (useTransition) {
		}
		me._imagepin.appendChild(me._imagepreview);
		me._photopin.appendChild(me._imagepin);
		me.__div = me._photopin;
	};
	function SkinHotspotClass_justtextpin(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._justtextpin=document.createElement('div');
		el.ggId="JustTextPin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 284px;';
		hs+='position : absolute;';
		hs+='top : 328px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._justtextpin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._justtextpin.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._justtextpin.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._justtextpin.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._justtextpin.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._justtextpin.ggUpdatePosition=function (useTransition) {
		}
		el=me._justpintext=document.createElement('div');
		els=me._justpintext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="justpin-text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 22px;';
		hs+='height : 18px;';
		hs+='left : 42px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 198px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0 0 1px black,0 0 1px black;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.117647);';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0.392157);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 32px;';
		hs+=cssPrefix + 'border-radius: 32px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 12px 15px 12px 15px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._justpintext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._justpintext.ggUpdatePosition=function (useTransition) {
		}
		me._justtextpin.appendChild(me._justpintext);
		el=me._justpin=document.createElement('div');
		els=me._justpin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDlweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNDkgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+anVzdFRleHRQaW48L3RpdGxlPgogICAgPGcgaWQ9IlBhbm9Ub3VyIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0icGFuby0xOTIweDEwODAiIHRyYW5zZm'+
			'9ybT0idHJhbnNsYXRlKC0xNTM5LCAtMTgyKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9Imp1c3RUZXh0UGluIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNTQwLCAxODIuMjgzMikiPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgtOCIgZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSI0Ny4xNjQwNjI1IDAgNDcuMTY0MDYyNSAxLjQ1OTQ3MjY2IDI2LjcyOTAwMzkgMS40NTk0NzI2NiA2IDQyLjcxNjc5NjkgNC42NjIwNjkzOSA0Mi4wMzg2MDY5IDI1LjU1NDY0NzUgMC44MjE4MDk5OTMgMjUuOTcxMjE4NyAwIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8'+
			'cmVjdCBpZD0iUmVjdGFuZ2xlIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0iIzAwQUJDNyIgeD0iMCIgeT0iMzYuNzE2Nzk2OSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiByeD0iNiI+PC9yZWN0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
		me._justpin__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;justpin;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="justpin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -6px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -7px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 49px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._justpin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._justpin.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
		}
		me._justpin.ggUpdatePosition=function (useTransition) {
		}
		me._justtextpin.appendChild(me._justpin);
		me.__div = me._justtextpin;
	};
	function SkinHotspotClass_pinya(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._pinya=document.createElement('div');
		el.ggId="pin-ya";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 279px;';
		hs+='position : absolute;';
		hs+='top : 669px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pinya.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._pinya.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._pinya.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._pinya.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._pinya.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._pinya.ggUpdatePosition=function (useTransition) {
		}
		el=me._pin_yaa=document.createElement('div');
		els=me._pin_yaa__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._pin_yaa__img.setAttribute('src',basePath + 'images/pin_yaa.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;pin_yaa;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pin_yaa";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 128px;';
		hs+='left : -19px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='top : -128px;';
		hs+='visibility : inherit;';
		hs+='width : 316px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pin_yaa.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._pin_yaa.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['pin_yaa'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._pin_yaa.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._pin_yaa.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._pin_yaa.style[domTransition]='opacity 0s, visibility 0s';
				if (me._pin_yaa.ggCurrentLogicStateAlpha == 0) {
					me._pin_yaa.style.visibility=me._pin_yaa.ggVisible?'inherit':'hidden';
					me._pin_yaa.style.opacity=1;
				}
				else {
					me._pin_yaa.style.visibility=me._pin_yaa.ggVisible?'inherit':'hidden';
					me._pin_yaa.style.opacity=0.79999;
				}
			}
		}
		me._pin_yaa.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
		}
		me._pin_yaa.onmouseover=function (e) {
			me.elementMouseOver['pin_yaa']=true;
			me._pin_yaa.logicBlock_alpha();
		}
		me._pin_yaa.onmouseout=function (e) {
			me.elementMouseOver['pin_yaa']=false;
			me._pin_yaa.logicBlock_alpha();
		}
		me._pin_yaa.ontouchend=function (e) {
			me.elementMouseOver['pin_yaa']=false;
			me._pin_yaa.logicBlock_alpha();
		}
		me._pin_yaa.ggUpdatePosition=function (useTransition) {
		}
		me._pinya.appendChild(me._pin_yaa);
		me.__div = me._pinya;
	};
	function SkinHotspotClass_pinicho(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._pinicho=document.createElement('div');
		el.ggId="pin-icho";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 625px;';
		hs+='position : absolute;';
		hs+='top : 608px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pinicho.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._pinicho.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._pinicho.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._pinicho.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._pinicho.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._pinicho.ggUpdatePosition=function (useTransition) {
		}
		el=me._piniccho=document.createElement('div');
		els=me._piniccho__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._piniccho__img.setAttribute('src',basePath + 'images/piniccho.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;piniccho;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pin-iccho";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 128px;';
		hs+='left : -19px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='top : -128px;';
		hs+='visibility : inherit;';
		hs+='width : 316px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._piniccho.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._piniccho.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['piniccho'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._piniccho.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._piniccho.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._piniccho.style[domTransition]='opacity 1000ms ease 0ms, visibility 1000ms ease 0ms';
				if (me._piniccho.ggCurrentLogicStateAlpha == 0) {
					me._piniccho.style.visibility=me._piniccho.ggVisible?'inherit':'hidden';
					me._piniccho.style.opacity=1;
				}
				else {
					me._piniccho.style.visibility=me._piniccho.ggVisible?'inherit':'hidden';
					me._piniccho.style.opacity=0.79999;
				}
			}
		}
		me._piniccho.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
		}
		me._piniccho.onmouseover=function (e) {
			me.elementMouseOver['piniccho']=true;
			me._piniccho.logicBlock_alpha();
		}
		me._piniccho.onmouseout=function (e) {
			me.elementMouseOver['piniccho']=false;
			me._piniccho.logicBlock_alpha();
		}
		me._piniccho.ontouchend=function (e) {
			me.elementMouseOver['piniccho']=false;
			me._piniccho.logicBlock_alpha();
		}
		me._piniccho.ggUpdatePosition=function (useTransition) {
		}
		me._pinicho.appendChild(me._piniccho);
		me.__div = me._pinicho;
	};
	function SkinHotspotClass_pinmar(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._pinmar=document.createElement('div');
		el.ggId="pin-mar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 579px;';
		hs+='position : absolute;';
		hs+='top : 780px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pinmar.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._pinmar.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._pinmar.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._pinmar.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._pinmar.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._pinmar.ggUpdatePosition=function (useTransition) {
		}
		el=me._pinmaar=document.createElement('div');
		els=me._pinmaar__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._pinmaar__img.setAttribute('src',basePath + 'images/pinmaar.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;pinmaar;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pin-maar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 128px;';
		hs+='left : -19px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='top : -128px;';
		hs+='visibility : inherit;';
		hs+='width : 316px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pinmaar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._pinmaar.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['pinmaar'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._pinmaar.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._pinmaar.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._pinmaar.style[domTransition]='opacity 0s, visibility 0s';
				if (me._pinmaar.ggCurrentLogicStateAlpha == 0) {
					me._pinmaar.style.visibility=me._pinmaar.ggVisible?'inherit':'hidden';
					me._pinmaar.style.opacity=1;
				}
				else {
					me._pinmaar.style.visibility=me._pinmaar.ggVisible?'inherit':'hidden';
					me._pinmaar.style.opacity=0.79999;
				}
			}
		}
		me._pinmaar.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
		}
		me._pinmaar.onmouseover=function (e) {
			me.elementMouseOver['pinmaar']=true;
			me._pinmaar.logicBlock_alpha();
		}
		me._pinmaar.onmouseout=function (e) {
			me.elementMouseOver['pinmaar']=false;
			me._pinmaar.logicBlock_alpha();
		}
		me._pinmaar.ontouchend=function (e) {
			me.elementMouseOver['pinmaar']=false;
			me._pinmaar.logicBlock_alpha();
		}
		me._pinmaar.ggUpdatePosition=function (useTransition) {
		}
		me._pinmar.appendChild(me._pinmaar);
		me.__div = me._pinmar;
	};
	function SkinHotspotClass_pinuk(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._pinuk=document.createElement('div');
		el.ggId="pin-uk";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 407px;';
		hs+='position : absolute;';
		hs+='top : 777px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pinuk.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._pinuk.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._pinuk.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._pinuk.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._pinuk.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._pinuk.ggUpdatePosition=function (useTransition) {
		}
		el=me._pinuuk=document.createElement('div');
		els=me._pinuuk__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTQ2cHgiIGhlaWdodD0iMTI4cHgiIHZpZXdCb3g9IjAgMCAxNDYgMTI4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPnBpbi11azwvdGl0bGU+CiAgICA8ZGVmcz4KICAgICAgICA8cG9seWdvbiBpZD0icGF0aC0xIiBwb2ludHM9IjEwLjQ3NiAxLjI2IDQuMDg2IDEzLjUgMi44MjYgMTMuNSAyLjgyNiAxMi4yNCA0LjM1NiA5LjQ2OCAwIDEuMzUgMCAxLjc3NjM1Nj'+
			'g0ZS0xNSAxLjM1IDEuNzc2MzU2ODRlLTE1IDUuNCA3LjU0MiA5LjIxNiAxLjc3NjM1Njg0ZS0xNSAxMC40NzYgMS43NzYzNTY4NGUtMTUiPjwvcG9seWdvbj4KICAgICAgICA8cGF0aCBkPSJNMTYuMDIsMTMuNjggQzE0LjU1NiwxMy42OCAxMy40MjgsMTMuMjM2IDEyLjYzNiwxMi4zNDggQzExLjg0NCwxMS40NiAxMS40NDgsMTAuMzM4IDExLjQ0OCw4Ljk4MiBDMTEuNDQ4LDcuNjYyIDExLjg2Miw2LjU1MiAxMi42OSw1LjY1MiBDMTMuNTE4LDQuNzUyIDE0LjYyOCw0LjMwMiAxNi4wMiw0LjMwMiBDMTYuMzIsNC4zMDIgMTYuNjA1LDQuMzIgMTYuODc1LDQuMzU2IEMxNy4xNDUsNC4zOTIgMTcu'+
			'MzgyLDQuNDQzIDE3LjU4Niw0LjUwOSBDMTcuNzksNC41NzUgMTcuOTgyLDQuNjUgMTguMTYyLDQuNzM0IEMxOC4zNDIsNC44MTggMTguNDkyLDQuOTA1IDE4LjYxMiw0Ljk5NSBDMTguNzMyLDUuMDg1IDE4Ljg0Myw1LjE3NSAxOC45NDUsNS4yNjUgQzE5LjA0Nyw1LjM1NSAxOS4xMjgsNS40NDIgMTkuMTg4LDUuNTI2IEMxOS4yNDgsNS42MSAxOS4yOTksNS42ODUgMTkuMzQxLDUuNzUxIEMxOS4zODMsNS44MTcgMTkuNDEsNS44NjggMTkuNDIyLDUuOTA0IEwxOS40NTgsNS45NTggTDE5LjQ1OCw3LjEyOCBMMTguMjg4LDcuMTI4IEwxOC4yNyw3LjA5MiBDMTguMjU4LDcuMDU2IDE4LjI0LDcuMD'+
			'E0IDE4LjIxNiw2Ljk2NiBDMTguMTkyLDYuOTE4IDE4LjE1OSw2Ljg2MSAxOC4xMTcsNi43OTUgQzE4LjA3NSw2LjcyOSAxOC4wMjQsNi42NiAxNy45NjQsNi41ODggQzE3LjkwNCw2LjUxNiAxNy44MzIsNi40NDQgMTcuNzQ4LDYuMzcyIEMxNy42NjQsNi4zIDE3LjU2NSw2LjIzNCAxNy40NTEsNi4xNzQgQzE3LjMzNyw2LjExNCAxNy4yMTEsNi4wNTcgMTcuMDczLDYuMDAzIEMxNi45MzUsNS45NDkgMTYuNzc2LDUuOTA3IDE2LjU5Niw1Ljg3NyBDMTYuNDE2LDUuODQ3IDE2LjIyNCw1LjgzMiAxNi4wMiw1LjgzMiBDMTUuMTIsNS44MzIgMTQuNDMzLDYuMTI5IDEzLjk1OSw2LjcyMyBDMTMuNDg1'+
			'LDcuMzE3IDEzLjI0OCw4LjA3IDEzLjI0OCw4Ljk4MiBDMTMuMjQ4LDkuOTA2IDEzLjQ4NSwxMC42NjUgMTMuOTU5LDExLjI1OSBDMTQuNDMzLDExLjg1MyAxNS4xMiwxMi4xNSAxNi4wMiwxMi4xNSBDMTYuMzkyLDEyLjE1IDE2LjcyNSwxMi4xMDUgMTcuMDE5LDEyLjAxNSBDMTcuMzEzLDExLjkyNSAxNy41MzgsMTEuODIgMTcuNjk0LDExLjcgQzE3Ljg1LDExLjU4IDE3Ljk3NiwxMS40NTEgMTguMDcyLDExLjMxMyBDMTguMTY4LDExLjE3NSAxOC4yMzEsMTEuMDcgMTguMjYxLDEwLjk5OCBDMTguMjkxLDEwLjkyNiAxOC4zMDYsMTAuODc4IDE4LjMwNiwxMC44NTQgTDE5LjQ3NiwxMC44NTQgTD'+
			'E5LjQ3NiwxMi4wMjQgQzE5LjQ4OCwxMi4wMjQgMTkuNDYxLDEyLjA4MSAxOS4zOTUsMTIuMTk1IEMxOS4zMjksMTIuMzA5IDE5LjIxOCwxMi40NDcgMTkuMDYyLDEyLjYwOSBDMTguOTA2LDEyLjc3MSAxOC43MDUsMTIuOTMzIDE4LjQ1OSwxMy4wOTUgQzE4LjIxMywxMy4yNTcgMTcuODc0LDEzLjM5NSAxNy40NDIsMTMuNTA5IEMxNy4wMSwxMy42MjMgMTYuNTM2LDEzLjY4IDE2LjAyLDEzLjY4IFoiIGlkPSJwYXRoLTIiPjwvcGF0aD4KICAgICAgICA8cG9seWdvbiBpZD0icGF0aC0zIiBwb2ludHM9IjI1LjMyNiAxMy41IDIzLjUyNiAxMy41IDIzLjUyNiA2LjAzIDIwLjY0NiA2LjAzIDIwLjY0'+
			'NiA0LjUgMjguMjA2IDQuNSAyOC4yMDYgNi4wMyAyNS4zMjYgNi4wMyI+PC9wb2x5Z29uPgogICAgICAgIDxwYXRoIGQ9Ik0zMy40NjIsMTMuNSBMMjkuODgsMTMuNSBMMjkuODgsNC41IEwzMS42OCw0LjUgTDMxLjY4LDcuNTYgTDMzLjQ4LDcuNTYgQzM0LjY4LDcuNTYgMzUuNTk1LDcuODI3IDM2LjIyNSw4LjM2MSBDMzYuODU1LDguODk1IDM3LjE3LDkuNTk0IDM3LjE3LDEwLjQ1OCBDMzcuMTcsMTEuMzU4IDM2Ljg1NSwxMi4wOSAzNi4yMjUsMTIuNjU0IEMzNS41OTUsMTMuMjE4IDM0LjY3NCwxMy41IDMzLjQ2MiwxMy41IFogTTMxLjY4LDkgTDMxLjY4LDEyLjA2IEwzMy4zMzYsMTIuMDYgQz'+
			'M0LjYzMiwxMi4wNiAzNS4yOCwxMS41MzIgMzUuMjgsMTAuNDc2IEMzNS4yOCw5LjQ5MiAzNC42MzIsOSAzMy4zMzYsOSBMMzEuNjgsOSBaIiBpZD0icGF0aC00Ij48L3BhdGg+CiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtNSIgcG9pbnRzPSI0My43NCA4LjQ2IDM4Ljg4IDguNDYgMzguODggNi45MyA0My43NCA2LjkzIj48L3BvbHlnb24+CiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtNiIgcG9pbnRzPSI1NC44MjggMTMuNSA0OC42MTggNy4wMzggNDguNjE4IDEzLjUgNDYuNjM4IDEzLjUgNDYuNjM4IDEuNzc2MzU2ODRlLTE1IDQ4LjYxOCAxLjc3NjM1Njg0ZS0xNSA0OC42MTggNi40MjYg'+
			'NTQuNTA0IDEuNzc2MzU2ODRlLTE1IDU1Ljc2NCAxLjc3NjM1Njg0ZS0xNSA1NS43NjQgMS4yNiA1MC43OTYgNi41ODggNTYuMTc4IDEyLjE1IDU2LjE3OCAxMy41Ij48L3BvbHlnb24+CiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtNyIgcG9pbnRzPSI2NS43OSA1LjY3IDU5LjA3NiAxOCA1Ny44MTYgMTggNTcuODE2IDE2Ljc0IDYwLjUzNCAxMi4wNiA1Ny4wNzggNS43NiA1Ny4wNzggNC41IDU4LjMzOCA0LjUgNjEuNTA2IDEwLjM2OCA2NC42MiA0LjUgNjUuNzkgNC41Ij48L3BvbHlnb24+CiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtOCIgcG9pbnRzPSI3MS4xMTggMTMuNSA2OS4zMTggMT'+
			'MuNSA2OS4zMTggNi4wMyA2Ni40MzggNi4wMyA2Ni40MzggNC41IDczLjk5OCA0LjUgNzMuOTk4IDYuMDMgNzEuMTE4IDYuMDMiPjwvcG9seWdvbj4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYW5vVG91ciIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9InBhbm8tMTkyMHgxMDgwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODE1LCAtNDQ0KSI+CiAgICAgICAgICAgIDxnIGlkPSJwaW4tdWsiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgxNiwgNDQ1KSI+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVj'+
			'dGFuZ2xlIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0iIzAwQUJDNyIgZmlsbC1ydWxlPSJub256ZXJvIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTQ0IiBoZWlnaHQ9IjQyIiByeD0iMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxnIGlkPSLQo9GB0YLRjC3QmtGD0YIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQxLjIxNiwgMTMuNSkiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IlBhdGgiPgogICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgIC'+
			'AgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iUGF0aCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMiI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMiI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJQYXRoIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0zIj48L3Vz'+
			'ZT4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0zIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IlNoYXBlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC00Ij48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC00Ij48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IlBhdGgiPgogICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYX'+
			'RoLTUiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTUiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iUGF0aCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtNiI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtNiI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJQYXRoIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpo'+
			'cmVmPSIjcGF0aC03Ij48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC03Ij48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IlBhdGgiPgogICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTgiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTgiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOS43NzczNDM3LDQxLj'+
			'IwNzAzMTIgQzE5LjQ1MDUyMDgsNjkuNTk3NjU3OSAxOS4xMjM2OTc5LDk3Ljk4ODI3OTYgMTguNzk2ODc1LDEyNi4zNzg5MDYiIGlkPSJQYXRoLTMiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIgY3g9IjIwIiBjeT0iMjEiIHI9IjgiPjwvY2lyY2xlPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
		me._pinuuk__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;pinuuk;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pin-uuk";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 128px;';
		hs+='left : -19px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='top : -128px;';
		hs+='visibility : inherit;';
		hs+='width : 146px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pinuuk.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._pinuuk.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['pinuuk'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._pinuuk.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._pinuuk.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._pinuuk.style[domTransition]='opacity 0s, visibility 0s';
				if (me._pinuuk.ggCurrentLogicStateAlpha == 0) {
					me._pinuuk.style.visibility=me._pinuuk.ggVisible?'inherit':'hidden';
					me._pinuuk.style.opacity=1;
				}
				else {
					me._pinuuk.style.visibility=me._pinuuk.ggVisible?'inherit':'hidden';
					me._pinuuk.style.opacity=0.79999;
				}
			}
		}
		me._pinuuk.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
		}
		me._pinuuk.onmouseover=function (e) {
			me.elementMouseOver['pinuuk']=true;
			me._pinuuk.logicBlock_alpha();
		}
		me._pinuuk.onmouseout=function (e) {
			me.elementMouseOver['pinuuk']=false;
			me._pinuuk.logicBlock_alpha();
		}
		me._pinuuk.ontouchend=function (e) {
			me.elementMouseOver['pinuuk']=false;
			me._pinuuk.logicBlock_alpha();
		}
		me._pinuuk.ggUpdatePosition=function (useTransition) {
		}
		me._pinuk.appendChild(me._pinuuk);
		me.__div = me._pinuk;
	};
	function SkinHotspotClass_pinmacro(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._pinmacro=document.createElement('div');
		el.ggId="PinMacro";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 282px;';
		hs+='position : absolute;';
		hs+='top : 459px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pinmacro.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._pinmacro.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._pinmacro.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._pinmacro.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._pinmacro.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._pinmacro.ggUpdatePosition=function (useTransition) {
		}
		el=me._pin_1=document.createElement('div');
		els=me._pin_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzBweCIgaGVpZ2h0PSI1NXB4IiB2aWV3Qm94PSIwIDAgNzAgNTUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+cGluLW1hY3JvPC90aXRsZT4KICAgIDxnIGlkPSJQYW5vVG91ciIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9InBhbm8tMTkyMHgxMDgwIiB0cmFuc2Zvcm'+
			'09InRyYW5zbGF0ZSgtODA1LCAtMjA0KSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9InBpbi1tYWNybyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODA2Ljc2OTIsIDIwNS41KSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzMuMjMwNzU4Miw1MS41IEwyMS43Mjc4MjgyLDM3LjY0Mjg4MjIgQzIxLjY4NDI4MjgsMzcuNTg5ODYwOCAyMS41MjYwMTA1LDM3LjM4MDIzNTggMjEuMjUzMDExMiwzNy4wMTQwMDczIEMxOS4yODc4ODExLDM0LjM3MDE5OTIgMTguMjI2MTg0NCwzMS4xNDA4NzU3IDE4LjIzMDc3NTMsMjcuODIxNDI4NiBDMTguMjMwNzc1MywyMy43NTc5MzMy'+
			'IDE5LjgxMTEzOTksMTkuODYwODY3OSAyMi42MjQxNzk2LDE2Ljk4NzU0MjggQzI1LjQzNzIxOTMsMTQuMTE0MjE3NyAyOS4yNTI1MTkzLDEyLjUgMzMuMjMwNzU4MiwxMi41IEMzNy4yMDg5OTcxLDEyLjUgNDEuMDI0MzAwNCwxNC4xMTQyMTc3IDQzLjgzNzM0MDEsMTYuOTg3NTQyOCBDNDYuNjUwMzc5NywxOS44NjA4Njc5IDQ4LjIzMDc0MzcsMjMuNzU3OTMzMiA0OC4yMzA3NDM3LDI3LjgyMTQyODYgQzQ4LjIzNTYxODksMzEuMTM5NTE2OCA0Ny4xNzQ2NDE2LDM0LjM2NzYxNDYgNDUuMjEwNTUyOCwzNy4wMTA1MjQ0IEw0NS4yMDg1MDg1LDM3LjAxNDAwNzMgQzQ0LjkzNTc4MDIsMzcuMzgwMj'+
			'M1MSA0NC43NzkwOTc5LDM3LjU4Nzk1NjEgNDQuNzM4NDYxNiwzNy42MzcxNzA0IEwzMy4yMzA3NTgyLDUxLjUgWiIgaWQ9IlZlY3RvciIgZmlsbD0iIzAwQUJDNyI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTMzLjIzMDc1OTUsMTEuNSBDMzcuNDc4NzA1NywxMS41IDQxLjU1MTMxOTcsMTMuMjIzMDgzNyA0NC41NTE5MDMzLDE2LjI4Nzk3MTkgQzQ3LjU0ODQ1NzgsMTkuMzQ4NzQ0NyA0OS4yMzA3NTk1LDIzLjQ5NzE2MDUgNDkuMjMwNzU5NSwyNy44MTk5NTkzIEM0OS4yMzU5MzM3LDMxLjM1Mjk3ODggNDguMTA1OTk3MywzNC43OTA4NzY1IDQ2LjAxMzE4MjYsMzcuNjA3MDAx'+
			'OSBDNDUuNzIwMDE0OCwzOC4wMDE0MTUgNDUuNTY2NTg2NywzOC4yMDQ4MjE4IDQ1LjUwNzkwMDQsMzguMjc1ODkwOSBMMzQuMDAwMTk3LDUyLjEzODcyMDUgTDMzLjIzMDc1OTUsNTMuMDY1NjMxMyBMMzIuNDYxMzE4NSw1Mi4xMzg3MTk1IEwyMC45NTUwNDUxLDM4LjI3NzU1MjQgQzIwLjg5NjMxNzIsMzguMjA2MDQ0NSAyMC43Mzk5NTA2LDM3Ljk5ODk0MzYgMjAuNDUwNDM1NywzNy42MTA1NTc5IEMxOC4zNTY1NjI4LDM0Ljc5MzU0NDMgMTcuMjI1ODg4MSwzMS4zNTQ0MjUzIDE3LjIzMDc1OTUsMjcuODIxNDI4NiBDMTcuMjMwNzU5NSwyMy40OTcxNjA4IDE4LjkxMzA2MTYsMTkuMzQ4NzQ1ID'+
			'IxLjkwOTYxNjQsMTYuMjg3OTcxOSBDMjQuOTEwMjAwNSwxMy4yMjMwODMyIDI4Ljk4MjgxMTQsMTEuNSAzMy4yMzA3NTk1LDExLjUgWiBNNDQuNDA3OTIzLDM2LjQxNDA0NjkgQzQ2LjI0MzI3ODgsMzMuOTQ0MzYyNCA0Ny4yMzUzMDQyLDMwLjkyNjA2NjggNDcuMjMwNzYwNSwyNy44MjE0Mjg2IEM0Ny4yMzA3NjA1LDI0LjAxODcyMyA0NS43NTIzMTM1LDIwLjM3MzAwMzEgNDMuMTIyNzc2OSwxNy42ODcxMTM3IEM0MC40OTcyODE3LDE1LjAwNTM1MjMgMzYuOTM5Mjg5MywxMy41IDMzLjIzMDc2MDUsMTMuNSBDMjkuNTIyMjI4LDEzLjUgMjUuOTY0MjM4NiwxNS4wMDUzNTE3IDIzLjMzODc0Mjgs'+
			'MTcuNjg3MTEzNyBDMjAuNzA5MjA1OSwyMC4zNzMwMDM0IDE5LjIzMDc2MDUsMjQuMDE4NzIzNCAxOS4yMzA3NjA1LDI3LjgyMjgxMTYgQzE5LjIyNjQ4MDcsMzAuOTI3MzM3NiAyMC4yMTkyMDYyLDMzLjk0Njg2MzMgMjIuMDU0NzY0OSwzNi40MTYzNTI2IEMyMi4zMTIwNzA0LDM2Ljc2MTUyOCAyMi40NzIyNDg1LDM2Ljk3MzY3NyAyMi40OTcyNjc5LDM3LjAwNDE2MjcgTDMzLjIyOTc3NTMsNDkuOTM0IEw0My45NjczNTM3LDM3LjAwMDQ2NTkgQzQzLjk4ODkxNDEsMzYuOTc0MzU0MyA0NC4xMTc2NzkyLDM2LjgwMzkxOSA0NC4zMjUwNjk5LDM2LjUyNTk0MzQgTDQ0LjQwNjQ3MTEsMzYuNDE2Nz'+
			'MzNCBMNDQuNDA3OTIzLDM2LjQxNDA0NjkgWiIgaWQ9IlZlY3RvciIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTkuMjMwNzU4NzIsMjQgTDIuMTUyMDMyNTUsMTUuNDcyNTQyOSBDMi4xMjUyMzU0MSwxNS40Mzk5MTQzIDIuMDI3ODM3MDUsMTUuMzEwOTE0MyAxLjg1OTgzNzQ5LDE1LjA4NTU0MyBDMC42NTA1MjY2MzMsMTMuNDU4NTg0MSAtMC4wMDI4MjUxNjE5MiwxMS40NzEzMDgxIDIuODQyMTcwOTRlLTE0LDkuNDI4NTcxNDMgQzIuODQyMTcwOTRlLTE0LDYuOTI3OTU4OSAwLjk3MjUzMjA5Miw0LjUyOTc2NDg2IDIuNzAzNjMzNDIsMi43NjE1NjQ4'+
			'IEM0LjQzNDczNDc1LDAuOTkzMzY0NzQzIDYuNzgyNjExNzIsMCA5LjIzMDc1ODcyLDAgQzExLjY3ODkwNTcsMCAxNC4wMjY3ODQ3LDAuOTkzMzY0NzQzIDE1Ljc1Nzg4NiwyLjc2MTU2NDggQzE3LjQ4ODk4NzQsNC41Mjk3NjQ4NiAxOC40NjE1MTksNi45Mjc5NTg5IDE4LjQ2MTUxOSw5LjQyODU3MTQzIEMxOC40NjQ1MTkyLDExLjQ3MDQ3MTkgMTcuODExNjEsMTMuNDU2OTkzNiAxNi42MDI5NCwxNS4wODMzOTk2IEwxNi42MDE2ODIsMTUuMDg1NTQzIEMxNi40MzM4NDkyLDE1LjMxMDkxMzkgMTYuMzM3NDI5MywxNS40Mzg3NDIyIDE2LjMxMjQyMjMsMTUuNDY5MDI3OSBMOS4yMzA3NTg3MiwyNC'+
			'BaIiBpZD0iVmVjdG9yIiBmaWxsPSIjMDBBQkM3Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOS4yMzA3NTg3MiwtMSBDMTEuOTQ4NjE0MiwtMSAxNC41NTM4MDM5LDAuMTAyMjMwNjIzIDE2LjQ3MjQ0OTIsMi4wNjE5OTM5IEMxOC4zODcwNjMxLDQuMDE3NjM5MzUgMTkuNDYxNTI5Myw2LjY2NzE4Mjg4IDE5LjQ2MTUyOTMsOS40MjcxMDIxNSBDMTkuNDY0ODMzOSwxMS42ODM5MzE2IDE4Ljc0Mjk2NzEsMTMuODgwMjUzNiAxNy40MDU1Njk4LDE1LjY3OTg3NzEgQzE3LjM3NzE5OTksMTUuNzE4NDI3OCAxNy4zNTI1Njc3LDE1Ljc1MTQ3MjMgMTcuMzI5Njk5MSwxNS43ODIxMDg2'+
			'IEwxNy4yMTI2NjMzLDE1LjkzODI5OTMgQzE3LjE0NzQzMTEsMTYuMDI0ODUzNiAxNy4xMDY0NjUxLDE2LjA3Nzk1MzkgMTcuMDgxODYxMiwxNi4xMDc3NDg0IEwxMC4wMDAxOTc1LDI0LjYzODcyMDUgTDkuMjMwNzU3NjYsMjUuNTY1NjMxMyBMOC40NjEzMTkwMywyNC42Mzg3MTk1IEwxLjM3OTI0OTQzLDE2LjEwNzIxMzEgQzEuMzM3MjY5NzYsMTYuMDU2MDk4MSAxLjI0MTc3NzE0LDE1LjkyOTYyMjIgMS4wNTcyNjIwMSwxNS42ODIwOTM1IEMtMC4yODA3OTI5ODYsMTMuODgxOTI3NSAtMS4wMDMxMjE0NiwxMS42ODQ4NTU1IC0xLjAwMDAxMDA3LDkuNDI4NTcxNDMgQy0xLjAwMDAxMDA3LDYuNj'+
			'Y3MTgzMDggMC4wNzQ0NTYxNjU3LDQuMDE3NjM5NSAxLjk4OTA3MDIyLDIuMDYxOTkzOSBDMy45MDc3MTU4NywwLjEwMjIzMDMyNCA2LjUxMjkwMzY3LC0xIDkuMjMwNzU4NzIsLTEgWiBNOS4yMzA3NTg3MiwxIEM3LjA1MjMyMDIzLDEgNC45NjE3NTM5NiwxLjg4NDQ5ODgyIDMuNDE4MTk2NjIsMy40NjExMzU3IEMxLjg3MDYwMDQyLDUuMDQxODk3OTggMC45OTk5OTA4NzcsNy4xODg3NDU2OSAwLjk5OTk5MDg3Nyw5LjQyOTk1NDQ2IEMwLjk5NzQ3MTEyNywxMS4yNTc3Njc4IDEuNTgxODUwNDcsMTMuMDM1MjQ2NSAyLjY2MTU5MTE0LDE0LjQ4Nzg4ODMgQzIuODEzODk2OTYsMTQuNjkyMjA2NSAy'+
			'LjkxMzIwMTA1LDE0LjgyMzczMDYgMi45MjE0NzIyNCwxNC44MzM4MjM0IEw5LjIzMSwyMi40MzQgTDE1LjU0MTMxNDQsMTQuODMyMzIzNCBDMTUuNTQ4NzA4MiwxNC44MjMzNjg5IDE1LjYyMjk5NDQsMTQuNzI1MDA1NCAxNS43Mzg1NDc3LDE0LjU3MDIxNDIgTDE1Ljc5OTY0NDYsMTQuNDg4MjY5MSBDMTYuODgwMjQ4NiwxMy4wMzM3Mzk1IDE3LjQ2NDIwNDUsMTEuMjU3MDE5NSAxNy40NjE1MjgzLDkuNDI4NTcxNDMgQzE3LjQ2MTUyODMsNy4xODg3NDU0MyAxNi41OTA5MTg4LDUuMDQxODk3NzkgMTUuMDQzMzIyOCwzLjQ2MTEzNTcgQzEzLjQ5OTc2NTksMS44ODQ0OTkyIDExLjQwOTE5NzcsMS'+
			'A5LjIzMDc1ODcyLDEgWiIgaWQ9IlZlY3RvciIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTU3LjIzMDc1ODcsMjQgTDUwLjE1MjAzMjYsMTUuNDcyNTQyOSBDNTAuMTI1MjM1NCwxNS40Mzk5MTQzIDUwLjAyNzgzNzEsMTUuMzEwOTE0MyA0OS44NTk4Mzc1LDE1LjA4NTU0MyBDNDguNjUwNTI2NiwxMy40NTg1ODQxIDQ3Ljk5NzE3NDgsMTEuNDcxMzA4MSA0OCw5LjQyODU3MTQzIEM0OCw2LjkyNzk1ODkgNDguOTcyNTMyMSw0LjUyOTc2NDg2IDUwLjcwMzYzMzQsMi43NjE1NjQ4IEM1Mi40MzQ3MzQ3LDAuOTkzMzY0NzQzIDU0Ljc4MjYxMTcsMCA1Ny4y'+
			'MzA3NTg3LDAgQzU5LjY3ODkwNTcsMCA2Mi4wMjY3ODQ3LDAuOTkzMzY0NzQzIDYzLjc1Nzg4NiwyLjc2MTU2NDggQzY1LjQ4ODk4NzQsNC41Mjk3NjQ4NiA2Ni40NjE1MTksNi45Mjc5NTg5IDY2LjQ2MTUxOSw5LjQyODU3MTQzIEM2Ni40NjQ1MTkyLDExLjQ3MDQ3MTkgNjUuODExNjEsMTMuNDU2OTkzNiA2NC42MDI5NCwxNS4wODMzOTk2IEw2NC42MDE2ODIsMTUuMDg1NTQzIEM2NC40MzM4NDkyLDE1LjMxMDkxMzkgNjQuMzM3NDI5MywxNS40Mzg3NDIyIDY0LjMxMjQyMjMsMTUuNDY5MDI3OSBMNTcuMjMwNzU4NywyNCBaIiBpZD0iVmVjdG9yIiBmaWxsPSIjMDBBQkM3Ij48L3BhdGg+CiAgIC'+
			'AgICAgICAgICAgICA8cGF0aCBkPSJNNTcuMjMwNzU4NywtMSBDNTkuOTQ4NjE0MiwtMSA2Mi41NTM4MDM5LDAuMTAyMjMwNjIzIDY0LjQ3MjQ0OTIsMi4wNjE5OTM5IEM2Ni4zODcwNjMxLDQuMDE3NjM5MzUgNjcuNDYxNTI5Myw2LjY2NzE4Mjg4IDY3LjQ2MTUyOTMsOS40MjcxMDIxNSBDNjcuNDY0ODMzOSwxMS42ODM5MzE2IDY2Ljc0Mjk2NzEsMTMuODgwMjUzNiA2NS40MDU1Njk4LDE1LjY3OTg3NzEgQzY1LjM3NzE5OTksMTUuNzE4NDI3OCA2NS4zNTI1Njc3LDE1Ljc1MTQ3MjMgNjUuMzI5Njk5MSwxNS43ODIxMDg2IEw2NS4yMTI2NjMzLDE1LjkzODI5OTMgQzY1LjE0NzQzMTEsMTYuMDI0'+
			'ODUzNiA2NS4xMDY0NjUxLDE2LjA3Nzk1MzkgNjUuMDgxODYxMiwxNi4xMDc3NDg0IEw1OC4wMDAxOTc1LDI0LjYzODcyMDUgTDU3LjIzMDc1NzcsMjUuNTY1NjMxMyBMNTYuNDYxMzE5LDI0LjYzODcxOTUgTDQ5LjM3OTI0OTQsMTYuMTA3MjEzMSBDNDkuMzM3MjY5OCwxNi4wNTYwOTgxIDQ5LjI0MTc3NzEsMTUuOTI5NjIyMiA0OS4wNTcyNjIsMTUuNjgyMDkzNSBDNDcuNzE5MjA3LDEzLjg4MTkyNzUgNDYuOTk2ODc4NSwxMS42ODQ4NTU1IDQ2Ljk5OTk4OTksOS40Mjg1NzE0MyBDNDYuOTk5OTg5OSw2LjY2NzE4MzA4IDQ4LjA3NDQ1NjIsNC4wMTc2Mzk1IDQ5Ljk4OTA3MDIsMi4wNjE5OTM5IE'+
			'M1MS45MDc3MTU5LDAuMTAyMjMwMzI0IDU0LjUxMjkwMzcsLTEgNTcuMjMwNzU4NywtMSBaIE01Ny4yMzA3NTg3LDEgQzU1LjA1MjMyMDIsMSA1Mi45NjE3NTQsMS44ODQ0OTg4MiA1MS40MTgxOTY2LDMuNDYxMTM1NyBDNDkuODcwNjAwNCw1LjA0MTg5Nzk4IDQ4Ljk5OTk5MDksNy4xODg3NDU2OSA0OC45OTk5OTA5LDkuNDI5OTU0NDYgQzQ4Ljk5NzQ3MTEsMTEuMjU3NzY3OCA0OS41ODE4NTA1LDEzLjAzNTI0NjUgNTAuNjYxNTkxMSwxNC40ODc4ODgzIEM1MC44MTM4OTcsMTQuNjkyMjA2NSA1MC45MTMyMDEsMTQuODIzNzMwNiA1MC45MjE0NzIyLDE0LjgzMzgyMzQgTDU3LjIzMSwyMi40MzQg'+
			'TDYzLjU0MTMxNDQsMTQuODMyMzIzNCBDNjMuNTQ4NzA4MiwxNC44MjMzNjg5IDYzLjYyMjk5NDQsMTQuNzI1MDA1NCA2My43Mzg1NDc3LDE0LjU3MDIxNDIgTDYzLjc5OTY0NDYsMTQuNDg4MjY5MSBDNjQuODgwMjQ4NiwxMy4wMzM3Mzk1IDY1LjQ2NDIwNDUsMTEuMjU3MDE5NSA2NS40NjE1MjgzLDkuNDI4NTcxNDMgQzY1LjQ2MTUyODMsNy4xODg3NDU0MyA2NC41OTA5MTg4LDUuMDQxODk3NzkgNjMuMDQzMzIyOCwzLjQ2MTEzNTcgQzYxLjQ5OTc2NTksMS44ODQ0OTkyIDU5LjQwOTE5NzcsMSA1Ny4yMzA3NTg3LDEgWiIgaWQ9IlZlY3RvciIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgIC'+
			'AgICAgICAgICAgPHBhdGggZD0iTTMzLjIzMDc2MDUsMzQuNSBDMzEuODQ2MjkzNywzNC41IDMwLjQ5MjkxNTUsMzQuMDg5NDU4MSAyOS4zNDE3NzE3LDMzLjMyMDI4ODQgQzI4LjE5MDYyNzksMzIuNTUxMTE4OCAyNy4yOTM0MiwzMS40NTc4NjcyIDI2Ljc2MzYwNjcsMzAuMTc4Nzg0OCBDMjYuMjMzNzkzNSwyOC44OTk3MDI0IDI2LjA5NTE3MDIsMjcuNDkyMjM3IDI2LjM2NTI2NjYsMjYuMTM0MzcwMyBDMjYuNjM1MzYzMSwyNC43NzY1MDM3IDI3LjMwMjA0ODksMjMuNTI5MjIzMSAyOC4yODEwMTYzLDIyLjU1MDI1NTggQzI5LjI1OTk4MzYsMjEuNTcxMjg4NSAzMC41MDcyNjQyLDIwLjkwNDYw'+
			'MjYgMzEuODY1MTMwOCwyMC42MzQ1MDYyIEMzMy4yMjI5OTc0LDIwLjM2NDQwOTcgMzQuNjMwNDY0MywyMC41MDMwMzMgMzUuOTA5NTQ2NywyMS4wMzI4NDYzIEMzNy4xODg2MjkxLDIxLjU2MjY1OTYgMzguMjgxODc5MiwyMi40NTk4Njc1IDM5LjA1MTA0ODksMjMuNjExMDExMiBDMzkuODIwMjE4NiwyNC43NjIxNTUgNDAuMjMwNzYwNSwyNi4xMTU1MzMyIDQwLjIzMDc2MDUsMjcuNSBDNDAuMjI4NjQ4NCwyOS4zNTU4Njg1IDM5LjQ5MDQ3MTQsMzEuMTM1MTE3NSAzOC4xNzgxNzQ3LDMyLjQ0NzQxNDIgQzM2Ljg2NTg3OCwzMy43NTk3MTA5IDM1LjA4NjYyOSwzNC40OTc4ODc5IDMzLjIzMDc2MD'+
			'UsMzQuNSBaIiBpZD0iVmVjdG9yIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
		me._pin_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;pin_1;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pin_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 47px;';
		hs+='left : -24px;';
		hs+='position : absolute;';
		hs+='top : -42px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pin_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._pin_1.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
		}
		me._pin_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._pintext_1=document.createElement('div');
		els=me._pintext_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pin-text_1";
		el.ggDx=6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 50px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0 0 1px black;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.117647);';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0.392157);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 32px;';
		hs+=cssPrefix + 'border-radius: 32px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 12px 17px 12px 17px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._pintext_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._pintext_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._pin_1.appendChild(me._pintext_1);
		me._pinmacro.appendChild(me._pin_1);
		me.__div = me._pinmacro;
	};
	function SkinHotspotClass_airpin(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._airpin=document.createElement('div');
		el.ggId="Airpin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 286px;';
		hs+='position : absolute;';
		hs+='top : 453px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._airpin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._airpin.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._airpin.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._airpin.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._airpin.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._airpin.ggUpdatePosition=function (useTransition) {
		}
		el=me._airpin0=document.createElement('div');
		els=me._airpin0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTNweCIgaGVpZ2h0PSI2N3B4IiB2aWV3Qm94PSIwIDAgNTMgNjciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+cGluLWFlcm88L3RpdGxlPgogICAgPGcgaWQ9IlBhbm9Ub3VyIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0icGFuby0xOTIweDEwODAiIHRyYW5zZm9ybT'+
			'0idHJhbnNsYXRlKC0xMzEyLCAtMjApIj4KICAgICAgICAgICAgPGcgaWQ9InBpbi1hZXJvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzEyLCAyMC44NzgyKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjUuMzg4MDI2Nyw1NC42OTI3MjMyIEMyNS42OTk3ODg3LDU0LjY5MzQ5MjcgMjYuMDI4MzUwNiw1NC42OTQ5NjcyIDI2LjM3NDc4OCw1NC42OTY4MzY5IEMzMS4xMDA1NDgyLDU0LjcyMjM0MjcgMzIuNjQzMTY1MSw1NC44MjcwMjkzIDMzLjQ4MDQ0MjQsNTUuODM5NTMxOCBDMzQuMzU5NTE2Nyw1Ni45MDI3MTM5IDM0LjE1OTA5NjUsNTguMjYyNDA0IDMzLjQzMTA5MjUsNjAuODU1NzI3'+
			'NyBDMzIuODYwNTYzNSw2Mi44ODgwODgxIDMyLjIyNTg4ODYsNjQuNDM4NjU5OSAzMS40MzE3Mzc1LDY1LjE0MTQ2NjcgQzMwLjM0MjA3NTksNjYuMTA2MDIyMiAyOS41OTE0MjU3LDY2LjE5MDgwMjQgMjYuMTA3NTgyMyw2Ni4wODgxMjYyIEMyMi40NTcxODY2LDY1Ljk4MDE5NTQgMjEuNzIzMzUwOCw2NS44NTMwNjI2IDIwLjgyNjEzMzUsNjQuNjIwNTQ2OCBDMjAuMzUyNTkxNyw2My45Njk2ODI4IDE5Ljg4NzMwMjIsNjIuNTE2NjgxNiAxOS40MTcwNjc3LDYwLjYwMzM4NjQgQzE4Ljc0NzI5NDgsNTcuODc4MjA3NCAxOC41OTIxNzczLDU2Ljk0MzEwMzkgMTkuMTcwMzE0NSw1Ni4wMDUwMTcxIE'+
			'wxOS4yMjEyMzM3LDU1LjkyNDc4OTEgQzE5LjkxNjcwOCw1NC44NjI0NzY4IDIwLjkyMjA1MDEsNTQuNjk2MzI1NSAyNC43ODY1ODQsNTQuNjkyMjE2MSBMMjUuMzg4MDI2Nyw1NC42OTI3MjMyIFogTTI2LjM1MzE5OTYsNTguNjk2Nzc4NyBDMjUuMDE2NzY0NCw1OC42ODk1NjU3IDIzLjczNjU2MTUsNTguNzE1NTUzNCAyMi43OTEwMDE1LDU4Ljc3MDMzNjcgTDIzLjA5MzA0NDQsNTguNzUzODExOCBMMjMuMDk5OTU4NSw1OC43ODEyNjg2IEMyMy4xMzk5ODA0LDU4Ljk2NDkyMzUgMjMuMTgzNTA5NSw1OS4xNTYyMTg3IDIzLjIyOTg3NjMsNTkuMzUyMDE5NyBMMjMuMzAxNDcxMSw1OS42NDg3MDg2'+
			'IEMyMy40NzQwODAzLDYwLjM1MTAyMjQgMjMuNjY1MzEyMSw2MS4wMzk1MzI1IDIzLjgzODQ3ODYsNjEuNTgwMjk1NCBDMjMuODcyNTIwNyw2MS42ODY2MDE1IDIzLjkwNTM5MTUsNjEuNzg1Njk4NyAyMy45MzY3MDIsNjEuODc2NTk1NyBMMjMuOTcxMDQ0NCw2MS45NzM4MTE4IEwyNC4wNjY5ODc5LDYxLjk4MzczOTIgQzI0LjQ1NzczNzQsNjIuMDIyMTY4MyAyNS4wNTE0ODk5LDYyLjA1Mjg3NTEgMjUuOTY3NjYwNiw2Mi4wODE5Njg2IEwyNi4yMjU2MDg5LDYyLjA4OTg2NzggQzI2Ljg3MTM4MzgsNjIuMTA4OTAwMiAyNy4zNjk0MTUzLDYyLjExOTM1NzYgMjcuNzU4MDA3MSw2Mi4xMjE0MTQ1IE'+
			'wyOC4wNjUxNzc2LDYyLjEyMTEyNDQgQzI4LjM5NDM1OTIsNjIuMTE4Mzk1MiAyOC42MjUwNDUyLDYyLjEwNzMxNTQgMjguNzk1NTM5Myw2Mi4wODgwNTk0IEwyOC43NTEwNDQ0LDYyLjA5MTgxMTggTDI4Ljc4NjQ3NzIsNjIuMDIwMDQyNCBDMjguODIxMDc5NSw2MS45NDc0MjY4IDI4Ljg1NzgzMzYsNjEuODY1OTE2MiAyOC44OTYxMjc5LDYxLjc3NjU1NyBMMjguOTU0NjQ4Miw2MS42MzY3NjI2IEMyOS4xNjQ4MDM0LDYxLjEyMzMzMzMgMjkuMzg3OTk5OSw2MC40NTg0MzQ4IDI5LjU3OTk1OTYsNTkuNzc0NjI4NiBDMjkuNjYxNDcwMiw1OS40ODQyNjg2IDI5LjczNDY5MjYsNTkuMTk5ODgwNSAy'+
			'OS43OTcyODIsNTguOTMyMjEzMiBMMjkuODI2MDQ0NCw1OC44MDE4MTE4IEwyOS42MDY0NTksNTguNzg4MjQzNSBDMjguODA1Njk4NCw1OC43NDIwMDgzIDI3LjgyNTMwOTUsNTguNzExNTY3NCAyNi43OTY2MzM5LDU4LjcwMDM4MyBMMjYuMzUzMTk5Niw1OC42OTY3Nzg3IFogTTI5Ljg0MTQ5MywwIEwyOS42NDcwNDQ0LDAuMTI3ODExODQ3IEwyOS43NTk4NDY1LDAuMTI3NDU1NTM5IEwzMC45OTc0NTQ2LDAuMTI0NDg3MzkzIEMzMy4xNTkxNzgzLDAuMTE5NjgxMDY5IDM2Ljc0NDE2MTEsMC45NjQxMjEyMzEgMzkuNDA5MzYwMywyLjA3Nzg4NjI1IEM0Ny41MzIyMDEzLDUuNDcxNzkyMDYgNTIuOT'+
			'Y1OTQ1OSwxMi45NjI1ODk3IDUzLjAwMDI1NTYsMjAuOTU2MDQ1OCBDNTMuMDI3OTI2MiwyNy42ODEwMzk1IDUwLjI3NTY2MiwzMi44MDEwMjY0IDQxLjg3MjA3NzcsNDIuMDQyNzAzMSBDNDAuNTI2NjYzNyw0My41MjIzMTg1IDM4LjkyMzg5MTQsNDUuMzY3MTEwMyAzNy41NTQ0OTA1LDQ3LjAwNjU0OTggQzM2LjUxNTg2OTgsNDguMjQ5OTgxIDM1LjY4MDUzNSw0OS4zMDA5MjE5IDM1LjM2NTQwMiw0OS43MzM3OTEgTDM1LjM2MDA0NDQsNDkuNzM5ODExOCBMMzUuNDA0NjY0LDQ5Ljg5MzMxNjEgQzM1LjkxMjEyMDksNTEuODQwNzI0IDM0Ljc4MzcyMTcsNTQuMDc4NDM5MyAzMi43MTExOTUyLDU0'+
			'LjI3ODkyOTggTDMyLjUyNTg5MjcsNTQuMjkxMjc0IEMzMC40NzQ5NjMzLDU0LjM2NzM4MjEgMjcuMzk0MzQxNiw1NC4zNjAyNDg5IDI0LjU0OTAxNTgsNTQuMjgyOTM1NiBDMjAuMDQzNTQ2Nyw1NC4xNjA1MTI4IDE5LjE0MzM4MjEsNTQuMTAxMzMxNyAxOC4zOTk2NDcyLDUzLjQ4MjIwMDkgQzE3LjM5MTQyMzUsNTIuNjQyMDAxNSAxNy4wNjEzODczLDUxLjE0ODg5NzEgMTcuNDI1NjIyNiw0OS44OTIwMjAxIEwxNy40NzIwNDQ0LDQ5Ljc0NDgxMTggTDE3LjQzMDE2MDUsNDkuNjgwMTY2NyBDMTcuMjg1NzQwNCw0OS40NjE0ODMyIDE3LjA5ODI0NzQsNDkuMTk3MzAxIDE2Ljg2ODUzNTcsNDguOD'+
			'kxMDg0OCBMMTYuNzI1NjQ5Myw0OC43MDIzMzg3IEMxNS42NjAyMDI4LDQ3LjMwNzA3NDYgMTMuODc4ODIwMyw0NS4yMjQyNDY5IDExLjI3NjExMTUsNDIuMzMxNjE2MSBDNS4wOTM4MzI2MywzNS40NjAyMzA1IDIuMjg0MzYzMzIsMzEuNDEyNDQ2NyAwLjc4Mjk3OTM0LDI3LjExMzIyOTYgQzAuMTQ1OTY1NjY3LDI1LjI4ODcxNzcgLTAuMDAyMTIzODg2NjksMjQuMTEwMzU3NiAyLjI4ODQ4Mzk2ZS0wNSwyMS4xMTExNDM2IEwwLjAwMDk4ODk1MTMwOSwyMC43NTQ5OTEyIEMwLjAxNDA1OTEwOTcsMTcuODY1NDQ2NCAwLjE2ODIxOTE1MSwxNi44OTc1MTAzIDAuODk0NzgzNjQyLDE0Ljk4ODQ3NyBD'+
			'My43MTM0MjUzMiw3LjU4MTAwNTI0IDkuOTM3MDg1ODMsMi4zODU0MzI0NSAxOC4wNzQwODM5LDAuNjA4NzkxMzkgTDE4LjM2MDE1MTgsMC41NDg5ODk5MzYgQzE5LjMzOTI5OTcsMC4zNTI4MDcyOTMgMjAuNTUwMzU5MSwwLjE5MTc1NjkxMSAyMS4zNjQ5NzY2LDAuMTUzMzI3OTk5IEwyMS41OTY4NDAyLDAuMTQ1NTY1NDU5IEwyMi45MjQ1NjQ3LDAuMTIyMTIzNDk5IEwyOS44NDE0OTMsMCBaIE0yOS4zNjMwNDQ0LDUuNDI2ODExODUgTDI5LjM2MTA0NDksNS41MjkyODc2NSBDMjkuMzQ4MzA2OSw2LjEwMjMxMzkxIDI5LjMzNjc4MzUsNi43NTYwODg5NCAyOS4zMjY0NDE3LDcuNDkzNTExNzQgQz'+
			'I5LjI3ODYxNTQsMTAuOTAzNzUyNiAyOS4yNTUwODYsMTYuMTUwMjczIDI5LjI1MjAzNTcsMjMuOTIwODY5OSBMMjkuMjUxMDQ0NCw0NC42MTE4MTE4IEwyOS4zMzQzNTM1LDQ0LjQzMDU5MDkgQzI5Ljg5NTI4MTIsNDMuMTk3MjA1OCAzMC41NzYyNTEsNDEuNzQ2NTgwMyAzMS4zMjU4NzkyLDQwLjE4NjMzMzYgTDMxLjQ4NzU0NiwzOS44NTAzNTYzIEMzNS45MTYyMzc5LDMwLjY1OTY4NDUgMzcuMTY4NDE5OCwyNi42MTYwNCAzNy4xNzY3MTIsMjEuNzAyODE4NiBDMzcuMTg2NDI2LDE1Ljk5NDA1MzkgMzUuMTA4NTgzNSwxMC43NjI4OTA3IDMxLjQwNjE1MTQsNy4xMDUwMjk3NyBDMzAuOTY1NTQ5'+
			'OCw2LjY2OTcwNzA0IDMwLjMwNDQ0NDksNi4xMjIyMzU5MiAyOS41ODgxMTczLDUuNTkxNDc0MyBMMjkuMzYzMDQ0NCw1LjQyNjgxMTg1IFogTTIzLjM3MDA0NDQsNS41NTQ4MTE4NSBMMjMuMzE3MDU3LDUuNTk1MjAzMTUgQzIyLjQ5OTU5NjIsNi4yMjY3MjQyIDIxLjY5ODQxNTUsNi45MjI4NjU0NSAyMS4wOTYwNDQsNy41MzQ3MzQwMiBDMTkuNjE2MzM2MSw5LjAzNzY2NDM5IDE4Ljk1MzIxMDQsOS45Nzg4NDcyNCAxNy45OTU2NzkzLDExLjkzNzczMjQgQzE2LjQ1NTE4MTgsMTUuMDg5MjczNCAxNS45NDg2ODg5LDE2Ljk1NDQ1MDMgMTUuNzM5MTg2NywyMC4yMjk5MyBDMTUuMzk5MDQxNCwyNS'+
			'41NTI5NDA4IDE2LjYyODA0MDMsMjkuOTY4MTExOSAyMS4xOTcwNzk2LDM5LjUzNDYxMTYgQzIyLjEwMjAzMzUsNDEuNDI5Mjg0IDIyLjgzODk1OTEsNDIuOTg2ODQxNyAyMy40Mjg0MTMyLDQ0LjI2NDE4MjIgTDIzLjQ3NzA0NDQsNDQuMzY5ODExOCBMMjMuNDc3MzkzOCwyNC4yMDY1MTg1IEMyMy40NzQwODY2LDE4LjcxNjIzNTQgMjMuNDUyNzc4MywxMy41ODM2NjIxIDIzLjQxNzYyNSw5LjYwNjIwMzU1IEwyMy40MTI3NDU5LDkuMDcxMDU3NTMgQzIzLjQwMDYzNzUsNy43ODM1NjAxMiAyMy4zODcyMDk4LDYuNjUwMzczNDQgMjMuMzcyNzcwOSw1LjY5NTE3Mjg4IEwyMy4zNzAwNDQ0LDUuNTU0'+
			'ODExODUgWiBNMzcuMjE2MDQ0NCw1LjUxMDgxMTg1IEwzNy4zOTc0NDY2LDUuNzExNDE5MjEgQzM4LjI4MjQ1NDIsNi43MDg0OTg1OCAzOS4wNTU0OTc2LDcuNzIwNTMyOSAzOS41NzU1NjcxLDguNjA0MDk2OTggQzQyLjAwMjIxMzYsMTIuNzI3NDU4NSA0My4xMzI4NTU2LDE2Ljg2MDI4MyA0My4xNDE3OTgzLDIxLjY0MDgxNTggQzQzLjE1MTg4ODEsMjcuMDk4NzA0OCA0MS45NzUzOTM1LDMxLjA0OTM0MjMgMzcuMzkzNTk1Miw0MC44MTgyMTU4IEwzNy4xNTgwNDQ0LDQxLjMxNjgxMTggTDM3LjE5NjA2OTMsNDEuMjc0NzY5NSBDMzcuNzAzNDE4MSw0MC42OTY4MDEzIDM4LjIxMTI3NDIsNDAuMT'+
			'I2MjU2OCAzOC43MDI5NTQ0LDM5LjU4MjgzNzggTDM4LjkxMjYzNTQsMzkuMzUxNjYyMSBDNDYuNzA1ODMzNSwzMC43ODEyNDU3IDQ5LjAyMjgzNjksMjYuNDcwOTY2NSA0OC45OTk4NzE4LDIwLjk3Mjg3OSBDNDguOTczMDYzNiwxNC42NDk4NjI5IDQ0LjU1ODg2Myw4LjU2NDU3ODAzIDM3Ljg2NzE1NTYsNS43Njg2MzIwOCBDMzcuNzYxOTk1Myw1LjcyNDY4NjQzIDM3LjY1NDg2NTEsNS42ODExODk4OSAzNy41NDYwMjExLDUuNjM4MTk5NzIgTDM3LjIxNjA0NDQsNS41MTA4MTE4NSBaIE0xNS43MjgwNDQ0LDUuNDYyODExODUgTDE1LjQwNzAzNDYsNS41ODgzMzU4OSBDMTAuMzMzNTYyMyw3LjYx'+
			'MDAxMTIyIDYuNTQzNjUzMzMsMTEuMzkwNTA5NSA0LjYzMzIzMDkzLDE2LjQxMTE1NDcgQzQuMDc0MTk0NTUsMTcuODgwMDExNCA0LjAwMjI3OTcxLDE4LjM4OTY4NTYgNC4wMDAwNjg5NywyMS4xMTQyMjk1IEw0LjAwMDM1ODUsMjEuNDI4MzEzIEM0LjAwNjc2MzUsMjMuNzY1OTIzOCA0LjExMjkxNjI5LDI0LjUxNTg0OTIgNC41NTkzNzQ2LDI1Ljc5NDU3OTMgQzUuODQ0NjMxOTEsMjkuNDc0OTE3IDguMzkzNTU2ODQsMzMuMTQ3MzE3NyAxNC4yNDk2NjgyLDM5LjY1NjE3OTYgQzE0LjU4MzMwNjcsNDAuMDI2OTgyOSAxNC45MDM5ODY3LDQwLjM4NTA0NjUgMTUuMjExOTczNCw0MC43MzA2OTMyIE'+
			'wxNS42NzcwNDQ0LDQxLjI1MzgxMTggTDE1LjQ2NjEyNzYsNDAuODA2OTM5MSBDMTAuOTU5NTI1MywzMS4yNDY0NTU4IDkuODIyOTkyNTMsMjcuNDExMDQ0MiA5LjgwNDk1NzAyLDIxLjcwOTM0NDQgTDkuODA1MDQ4LDIxLjQwMjA2NzcgQzkuODIxMDE5NjksMTcuMTA0MjM0MiAxMC43MjE4MTAyLDEzLjQ2NDE1NzQgMTIuNzEwMDUzOSw5LjY2NDEzMTI4IEMxMy4zNjU2NjI0LDguNDExMzcyNDMgMTQuMzQ1OTI3NCw3LjA0MjU4ODczIDE1LjQ3NDIyMTksNS43NTAwMzUxNyBMMTUuNzI4MDQ0NCw1LjQ2MjgxMTg1IFoiIGlkPSJTaGFwZSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJv'+
			'Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTguNTAwNzE1MSwyLjU2Mjc1ODA3IEMxMS4wMTI0MjAzLDQuMTk3NzYwNTcgNS4zMzgxNzk1NSw4LjkzNDgxNjc5IDIuNzY0MDMyLDE1LjY5OTc1MDkgQzIuMTA2NTI2MDcsMTcuNDI3MzM0MyAyLjAwMjQ2MDM5LDE4LjE2NjIwMTEgMi4wMDAwNjk1LDIxLjExMjc2NjQgQzEuOTk4MDI1NzcsMjMuOTA2NTEzOCAyLjExOTgyOTkyLDI0Ljg3NDc1NTggMi42NzEyMDA2OCwyNi40NTM5NzI0IEM0LjA2NDU1NzQ1LDMwLjQ0Mzg1MzIgNi43NDM5NTMyNCwzNC4zMDQwNjE1IDEyLjc2MjkxMTUsNDAuOTkzOTIxOSBDMTcuOTg2ODkwOCw0Ni'+
			'43OTk4MTI4IDIwLjA2MTQwNDcsNDkuNTE2NDA5NSAxOS42MTM4MDQsNDkuOTY1NjY0MyBDMTkuMTQzNDM5LDUwLjQzNzc2NzUgMTkuMTgwMDk4NSw1MS41MjkxNTQgMTkuNjgwMDI3Nyw1MS45NDU3NjggQzIwLjAxNzk0NTUsNTIuMjI3MDcxNSAyOC4yMTM3MDk2LDUyLjQ0OTkxODUgMzIuNDUxNzI1Niw1Mi4yOTI2NDk3IEMzMy4yMzg0MjY3LDUyLjI2MzU2OTggMzMuNzU5NjQyMSw1MS4xNjIzOTExIDMzLjQyMTQyODYsNTAuMjQ0ODkwNyBDMzMuMjY3MTAzOSw0OS44MjU5MDI3IDMzLjI4NzUwMzEsNDkuMzI5MTcwNiAzMy40NzM3NTcxLDQ4Ljk3OTkxNSBDMzMuODgyOTI0NCw0OC4yMTMxNTUz'+
			'IDM3LjU0NzEwMDksNDMuODI2MjQ0OCA0MC4zOTIzNTE0LDQwLjY5NzE4ODMgQzQ4LjQ5MDg0OTYsMzEuNzkxMDI0IDUxLjAyNTM4MTIsMjcuMDc1OTI2MSA1MC45OTk4NTM4LDIwLjk2NDM5OTYgQzUwLjk2OTUwNSwxMy44MDYyOTM0IDQ2LjA0NTYwMTYsNy4wMTgyMTQwNSAzOC42MzgzMTI0LDMuOTIzMjgxOTMgQzM2LjIwMTM0MjQsMi45MDQ4OTE5OSAzMi44NzAzNTM1LDIuMTIwMzI4MTggMzEuMDAxOTAxNCwyLjEyNDQ4MjQ1IEwyOS43NjQ2NDMxLDIuMTI3NDQ5NzkgTDMxLjM1NDYwMTMsMy4wNDIyNzk2OCBDMzMuMzc1MDEyOSw0LjIwNTQ3NTY0IDM2LjU2NzY0MTgsNy40MzY2MDg1MiAzNy'+
			'44NTE5MDY5LDkuNjE4NDkxMTUgQzQwLjA5ODE4ODQsMTMuNDM1Mzc2MyA0MS4xMzM1MjM4LDE3LjIxOTMyNCA0MS4xNDE4MDE3LDIxLjY0NDUxMzEgQzQxLjE1MTU1NzksMjYuOTIxOTIxMyAzOS45NjgxMDYzLDMwLjcxMTUwNyAzNS4wOTk3ODM0LDQwLjk5MzkyMTkgQzMzLjQzODI4MDEsNDQuNTAyNzk3NSAzMS45MTM2NTg3LDQ3Ljc5NDE2NzMgMzEuNzExNDQwMSw0OC4zMDc4MTMzIEMzMS40MzY0OTM5LDQ5LjAwNjYyMTEgMzEuMTE5MjcwOSw0OS4yNzUxNjUgMzAuNDUyODk1Nyw0OS4zNzMzODM5IEMyOS42MDAyNjY2LDQ5LjQ5ODkwMjIgMjkuNTY5NTIsNDkuNDY1OTY0OCAyOS43NDAxMDQ5'+
			'LDQ4LjYwODk5OCBDMjkuODM4MjU3OCw0OC4xMTY0MjAxIDMxLjQzNTMxMTMsNDQuNTY1NzA1IDMzLjI4OTI3Nyw0MC43MTg1NTMxIEMzNy44MzY1MzM2LDMxLjI4MTgyOTEgMzkuMTY3ODA1NywyNi45ODMwNDg1IDM5LjE3NjY3NSwyMS43MDYyMzM3IEMzOS4xODczMTgsMTUuNDczMzQzMSAzNi45MDQzNzcsOS43MjU2MTIwMSAzMi44MTE4MTY1LDUuNjgyMzE5MDkgQzMxLjMzNTM4NDYsNC4yMjM1NzYzOSAyOC4yNDg1OTUzLDIuMTIxODExODUgMjcuNTgyNTE1OCwyLjEyMTgxMTg1IEMyNy4zNDEyNzI2LDIuMTIxODExODUgMjcuMjUxNjkzMyw4LjUwODExMzc4IDI3LjI1MTY5MzMsMjUuNzEyMT'+
			'M4MiBMMjcuMjUxNjkzMyw0OS4zMDI0NjQ1IEwyNi4zNjQ3Njk4LDQ5LjMwMjQ2NDUgTDI1LjQ3Nzg0NjQsNDkuMzAyNDY0NSBMMjUuNDc3ODQ2NCwyNS43MTIxMzgyIEMyNS40Nzc4NDY0LDEyLjczNzQ1ODcgMjUuMzc3OTE5NywyLjEyMjk5ODc4IDI1LjI1NjExNTUsMi4xMjQ0ODI0NSBDMjQuNDk2NjEzNCwyLjEzNDI3NDY2IDIxLjQ2NTQwNDYsNC4zMDg3Mzg5NiAxOS42NzA4NjI4LDYuMTMxNTczODYgQzE4LjAzODYyOCw3Ljc4OTQyNDg0IDE3LjI1MDQ0ODYsOC45MDgxMTA3NiAxNi4xOTg4NTMsMTEuMDU5NDI5OCBDMTQuNTQ1MzMyMSwxNC40NDIxOTM2IDEzLjk2OTcxODcsMTYuNTYxNzYy'+
			'MiAxMy43NDMyNTc2LDIwLjEwMjM4ODMgQzEzLjM3Njk1ODIsMjUuODM0Njg5MiAxNC42ODkzMDkzLDMwLjU0OTQ5MDQgMTkuMzkyMzY4OCw0MC4zOTY1OTcxIEMyMS45ODIxODUzLDQ1LjgxODgxMTMgMjMuNDA4MzU4Myw0OS4wMTgxOTM3IDIzLjQwODM1ODMsNDkuNDA1NDMxMSBDMjMuNDA4MzU4Myw0OS40NTU1NzkxIDIyLjk5ODg5NTMsNDkuNDM1OTk0NyAyMi40OTgzNzQ4LDQ5LjM2MjQwNDcgQzIxLjg2MzYzMzIsNDkuMjY4OTMzNiAyMS40OTExMjU0LDQ4Ljk5MjM3NzkgMjEuMjY3MDI5NCw0OC40NDkzNTUzIEMyMS4wOTA1MzE2LDQ4LjAyMDg3MTggMTkuNTE1OTQ2OCw0NC42NjYwMDEgMT'+
			'cuNzY3ODIwNyw0MC45OTM5MjE5IEMxMi44ODA4NzI0LDMwLjcyNzUzMDYgMTEuNzg0MDQzNywyNy4xMjUxODM5IDExLjgwNTAzNDIsMjEuNDA5NTAwMSBDMTEuODE5ODE2MiwxNy40MzE3ODUzIDEyLjY0MjU4NTYsMTQuMTA3MTgxMyAxNC40ODIwNjQ5LDEwLjU5MTQ4MDggQzE1Ljc5NzM3MjQsOC4wNzgxNDY3IDE4LjY4MjIzODgsNC45MjcxMzE5MSAyMS4xNTExMzgsMy4zMDgxNTMwNCBMMjIuOTU5ODcwNiwyLjEyMTgxMTg1IEwyMS42MzIxNDYyLDIuMTQ1MjUzODEgQzIwLjkwMTYxNjksMi4xNTgzMTAwOSAxOS40OTI1OTEyLDIuMzQ2MTQyNSAxOC41MDA3MTUxLDIuNTYyNzU4MDcgTTIwLjg3'+
			'MjkzOTcsNTcuMDU0MzM0OCBDMjAuNjE2OTE0NSw1Ny40Njk3NjE5IDIxLjkwMjM2MjIsNjIuNzAwMjg2MiAyMi40NDMzODU1LDYzLjQ0MzkwMDggQzIyLjc4MTAwNzcsNjMuOTA3Njk1NSAyMy4zNDY1NjkzLDY0LjAwNTYxNzYgMjYuMTY2NjkwMyw2NC4wODg5OTk4IEMyOS4wNTYyODY5LDY0LjE3NDE2MjMgMjkuNTcyNzcyLDY0LjExNjAwMjUgMzAuMTA2MTA4Nyw2My42NDM4OTkzIEMzMC45MzA5NDc1LDYyLjkxMzkzNDUgMzIuNDAyMDU3OSw1Ny42NzM5MTQ3IDMxLjkzOTA4MzgsNTcuMTEzOTc4MyBDMzEuNTEwNDA0MSw1Ni41OTU1ODQ1IDIxLjE4OTU3MTQsNTYuNTM5Nzk4NiAyMC44NzI5Mz'+
			'k3LDU3LjA1NDMzNDgiIGlkPSJTaGFwZSIgZmlsbD0iIzAwQUJDNyI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
		me._airpin0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;airpin0;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="airpin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 47px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -42px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._airpin0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._airpin0.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
		}
		me._airpin0.onmouseover=function (e) {
			me.elementMouseOver['airpin0']=true;
			me._aeropintext.logicBlock_alpha();
		}
		me._airpin0.onmouseout=function (e) {
			me.elementMouseOver['airpin0']=false;
			me._aeropintext.logicBlock_alpha();
		}
		me._airpin0.ontouchend=function (e) {
			me.elementMouseOver['airpin0']=false;
			me._aeropintext.logicBlock_alpha();
		}
		me._airpin0.ggUpdatePosition=function (useTransition) {
		}
		el=me._aeropintext=document.createElement('div');
		els=me._aeropintext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="aeropin-text";
		el.ggDx=4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 44px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0 0 1px black;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.117647);';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0.392157);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 32px;';
		hs+=cssPrefix + 'border-radius: 32px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 12px 17px 12px 17px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._aeropintext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._aeropintext.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['airpin0'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._aeropintext.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._aeropintext.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._aeropintext.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._aeropintext.ggCurrentLogicStateAlpha == 0) {
					me._aeropintext.style.visibility=me._aeropintext.ggVisible?'inherit':'hidden';
					me._aeropintext.style.opacity=1;
				}
				else {
					me._aeropintext.style.visibility="hidden";
					me._aeropintext.style.opacity=0;
				}
			}
		}
		me._aeropintext.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._airpin0.appendChild(me._aeropintext);
		me._airpin.appendChild(me._airpin0);
		me.__div = me._airpin;
	};
	function SkinHotspotClass_redpin(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._redpin=document.createElement('div');
		el.ggId="Redpin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 284px;';
		hs+='position : absolute;';
		hs+='top : 328px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._redpin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._redpin.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._redpin.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._redpin.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._redpin.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._redpin.ggUpdatePosition=function (useTransition) {
		}
		el=me._redpin0=document.createElement('div');
		els=me._redpin0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI2NXB4IiB2aWV3Qm94PSIwIDAgNTAgNjUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+cGluPC90aXRsZT4KICAgIDxnIGlkPSJQYW5vVG91ciIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9InBhbm8tMTkyMHgxMDgwIiB0cmFuc2Zvcm09InRyYW'+
			'5zbGF0ZSgtMTIxMywgLTIzMSkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJwaW4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMTQsIDIzMikiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTIzLjk5OTk5NjQsNjIgTDUuNTk1MzA4MzYsMzkuOTcwNzM1OCBDNS41MjU2MzU3OCwzOS44ODY0NDUzIDUuMjcyNDAwMDYsMzkuNTUzMTk1NCA0LjgzNTYwMTE5LDM4Ljk3MDk4NiBDMS42OTEzOTI5NywzNC43NjgwMDkgLTAuMDA3MzIxNjk5MTgsMjkuNjM0MjEyNiAyLjM3MjE4MTZlLTA1LDI0LjM1NzE0MjkgQzIuMzcyMTgxNmUtMDUsMTcuODk3MjI3MiAyLjUyODYwNzE2'+
			'LDExLjcwMTg5MjUgNy4wMjk0NzA2Miw3LjEzNDA0MjQgQzExLjUzMDMzNDEsMi41NjYxOTIyNSAxNy42MzQ4MTQyLDAgMjMuOTk5OTk2NCwwIEMzMC4zNjUxNzg2LDAgMzYuNDY5NjYzOSwyLjU2NjE5MjI1IDQwLjk3MDUyNzQsNy4xMzQwNDI0IEM0NS40NzEzOTA4LDExLjcwMTg5MjUgNDcuOTk5OTczMiwxNy44OTcyMjcyIDQ3Ljk5OTk3MzIsMjQuMzU3MTQyOSBDNDguMDA3NzczNiwyOS42MzIwNTIzIDQ2LjMxMDIwOTgsMzQuNzYzOTAwMiA0My4xNjc2Njc3LDM4Ljk2NTQ0OTEgTDQzLjE2NDM5NjgsMzguOTcwOTg2IEM0Mi43MjgwMzE1LDM5LjU1MzE5NDIgNDIuNDc3MzM5OCwzOS44ODM0MT'+
			'c0IDQyLjQxMjMyMTgsMzkuOTYxNjU1NSBMMjMuOTk5OTk2NCw2MiBaIiBmaWxsPSIjMDBBQkM3Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjMuOTk5OTk5LC0xIEMzMC42MzM1MTkyLC0xIDM2Ljk5NDQyMzgsMS42NzM5ODU4NiA0MS42ODI4Mzc4LDYuNDMyMTc3ODYgQzQ2LjM2ODQ0MDgsMTEuMTg3NTE3IDQ4Ljk5OTk5OSwxNy42MzUxMiA0OC45OTk5OTksMjQuMzU1NjY0MSBDNDkuMDA4MDkyMSwyOS44NDY2OTY4IDQ3LjI0MDgwODQsMzUuMTg5MjkyNSA0My45Njg0NTU2LDM5LjU2NDM5NzEgQzQzLjUxMDMyNDksNDAuMTc2ODE4OCA0My4yNjI5MDAxLDQwLjUwMjczODcg'+
			'NDMuMTc5NzM2OSw0MC42MDI4MDYgTDI0Ljc2NzQxMTUsNjIuNjQxMTUwNiBMMjMuOTk5OTk5LDYzLjU1OTY5NzMgTDIzLjIzMjU4MDQsNjIuNjQxMTQ5NSBMNC44MjQ1MzIxNCw0MC42MDc4NDE4IEM0LjczOTU5NjA1LDQwLjUwNTA4NTQgNC40ODgyNzIyNSw0MC4xNzQzNTE1IDQuMDM0ODY3OTcsMzkuNTcwMDA3MSBDMC43NjA4MzIwMTIsMzUuMTkzNDg0NyAtMS4wMDc2MjE1NiwyOS44NDg5NDUgLTEuMDAwMDAwOTYsMjQuMzU3MTQyOSBDLTEuMDAwMDAwOTYsMTcuNjM1MTIwNiAxLjYzMTU1NjgyLDExLjE4NzUxNzQgNi4zMTcxNjAxNyw2LjQzMjE3Nzg2IEMxMS4wMDU1NzUsMS42NzM5ODUwMi'+
			'AxNy4zNjY0NzQ3LC0xIDIzLjk5OTk5OSwtMSBaIE0yNCwxIEMxNy45MDMxNTQ5LDEgMTIuMDU1MDk0LDMuNDU4Mzk4NjEgNy43NDE3ODEwNiw3LjgzNTkwNjk0IEMzLjQyNTYzNzc1LDEyLjIxNjI4NzcgMSwxOC4xNTkzNjIxIDEsMjQuMzU4NTM0OCBDMC45OTI5NzgxNDEsMjkuNDE5NDk4NiAyLjYyMTk2NDg5LDM0LjM0MjU0OCA1LjYzNTUwNzY4LDM4LjM3MDg2MTMgTDUuODQ4NDc1MTIsMzguNjU0MzExNSBDNi4xNDI1NjE3NSwzOS4wNDUwNzg3IDYuMzIwOTU3MTEsMzkuMjc5MDM4MiA2LjM2MjcyNDM1LDM5LjMyOTU4NjMgTDI0LDYwLjQzOSBMNDEuNjQzMjI5MywzOS4zMjI1MTggQzQxLjY3'+
			'ODUzODYsMzkuMjgwMDI5MyA0MS44MjI0OTM2LDM5LjA5MTUwMTkgNDIuMDU5MzYxMSwzOC43NzcwNTUzIEw0Mi4yNTQxODcxLDM4LjUxNzkyNSBMNDIuMzUyLDM4LjM4NiBMNDIuMzY2ODc5OSwzOC4zNjY1MDEgQzQ1LjI4MjQxNTMsMzQuNDY4NDU3OSA0Ni45MDA5OTExLDI5LjczMzk4NzcgNDYuOTk1NjAwNiwyNC44NDYzODggTDQ2Ljk5OTk3MzIsMjQuMzU3MTQyOSBDNDYuOTk5OTczMiwxOC4xNTkzNjE0IDQ0LjU3NDM1OTgsMTIuMjE2Mjg3MyA0MC4yNTgyMTY5LDcuODM1OTA2OTQgQzM1Ljk0NDkwNDksMy40NTgzOTk1MyAzMC4wOTY4MzkyLDEgMjQsMSBaIiBmaWxsPSIjRkZGRkZGIj48L3'+
			'BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjQuMDAwMDA2MiwzNS44OTQ3NDMxIEMyMS44NDIzOTE5LDM1Ljg5NDc0MzEgMTkuNzMzMjMwNSwzNS4yNTY4MDgxIDE3LjkzOTIzOTcsMzQuMDYxNjA2OCBDMTYuMTQ1MjQ4OSwzMi44NjY0MDU0IDE0Ljc0NzAwMjQsMzEuMTY3NjE4MSAxMy45MjEzMTkxLDI5LjE4MDA3MSBDMTMuMDk1NjM1OCwyNy4xOTI1MjM4IDEyLjg3OTU5OTQsMjUuMDA1NDg0MSAxMy4zMDA1MjkxLDIyLjg5NTUxNTMgQzEzLjcyMTQ1ODgsMjAuNzg1NTQ2NSAxNC43NjA0NTAxLDE4Ljg0NzQxNTcgMTYuMjg2MTEzOCwxNy4zMjYyMTI5IEMxNy44MTE3Nzc2LDE1Ljgw'+
			'NTAxMDEgMTkuNzU1NTkyMSwxNC43NjkwNTY5IDIxLjg3MTc0ODUsMTQuMzQ5MzU4IEMyMy45ODc5MDQ5LDEzLjkyOTY1OTEgMjYuMTgxMzYwMywxNC4xNDUwNjM4IDI4LjE3NDczNiwxNC45NjgzMzI4IEMzMC4xNjgxMTE4LDE1Ljc5MTYwMTggMzEuODcxODc4OCwxNy4xODU3NTk5IDMzLjA3MDU4NTEsMTguOTc0NTA1MSBDMzQuMjY5MjkxNCwyMC43NjMyNTAzIDM0LjkwOTA5NzIsMjIuODY2MjQ0NiAzNC45MDkwOTcyLDI1LjAxNzU1MDEgQzM0LjkwNTgwNTYsMjcuOTAxMzUzNiAzMy43NTUzOTk1LDMwLjY2NjEwMjIgMzEuNzEwMjYxMywzMi43MDUyNjA1IEMyOS42NjUxMjMsMzQuNzQ0NDE4OC'+
			'AyNi44OTIyNjY2LDM1Ljg5MTQ2MTIgMjQuMDAwMDA2MiwzNS44OTQ3NDMxIFoiIGlkPSJWZWN0b3IiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';
		me._redpin0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;redpin0;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="redpin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 47px;';
		hs+='left : -15px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='top : -42px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._redpin0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._redpin0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['redpin0'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._redpin0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._redpin0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._redpin0.style[domTransition]='opacity 0s, visibility 0s';
				if (me._redpin0.ggCurrentLogicStateAlpha == 0) {
					me._redpin0.style.visibility=me._redpin0.ggVisible?'inherit':'hidden';
					me._redpin0.style.opacity=1;
				}
				else {
					me._redpin0.style.visibility=me._redpin0.ggVisible?'inherit':'hidden';
					me._redpin0.style.opacity=0.79999;
				}
			}
		}
		me._redpin0.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
		}
		me._redpin0.onmouseover=function (e) {
			me.elementMouseOver['redpin0']=true;
			me._pintext.logicBlock_alpha();
			me._redpin0.logicBlock_alpha();
		}
		me._redpin0.onmouseout=function (e) {
			me.elementMouseOver['redpin0']=false;
			me._pintext.logicBlock_alpha();
			me._redpin0.logicBlock_alpha();
		}
		me._redpin0.ontouchend=function (e) {
			me.elementMouseOver['redpin0']=false;
			me._pintext.logicBlock_alpha();
			me._redpin0.logicBlock_alpha();
		}
		me._redpin0.ggUpdatePosition=function (useTransition) {
		}
		el=me._pintext=document.createElement('div');
		els=me._pintext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pin-text";
		el.ggDx=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 48px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0 0 1px black;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.117647);';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0.392157);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 32px;';
		hs+=cssPrefix + 'border-radius: 32px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 12px 17px 12px 17px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._pintext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._pintext.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['redpin0'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._pintext.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._pintext.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._pintext.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._pintext.ggCurrentLogicStateAlpha == 0) {
					me._pintext.style.visibility=me._pintext.ggVisible?'inherit':'hidden';
					me._pintext.style.opacity=1;
				}
				else {
					me._pintext.style.visibility="hidden";
					me._pintext.style.opacity=0;
				}
			}
		}
		me._pintext.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._redpin0.appendChild(me._pintext);
		me._redpin.appendChild(me._redpin0);
		me.__div = me._redpin;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='PhotoPin') {
			hotspot.skinid = 'PhotoPin';
			hsinst = new SkinHotspotClass_photopin(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_photopin_mouseover();;
		} else
		if (hotspot.skinid=='JustTextPin') {
			hotspot.skinid = 'JustTextPin';
			hsinst = new SkinHotspotClass_justtextpin(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='pin-ya') {
			hotspot.skinid = 'pin-ya';
			hsinst = new SkinHotspotClass_pinya(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_pinya_mouseover();;
		} else
		if (hotspot.skinid=='pin-icho') {
			hotspot.skinid = 'pin-icho';
			hsinst = new SkinHotspotClass_pinicho(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_pinicho_mouseover();;
		} else
		if (hotspot.skinid=='pin-mar') {
			hotspot.skinid = 'pin-mar';
			hsinst = new SkinHotspotClass_pinmar(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_pinmar_mouseover();;
		} else
		if (hotspot.skinid=='pin-uk') {
			hotspot.skinid = 'pin-uk';
			hsinst = new SkinHotspotClass_pinuk(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_pinuk_mouseover();;
		} else
		if (hotspot.skinid=='PinMacro') {
			hotspot.skinid = 'PinMacro';
			hsinst = new SkinHotspotClass_pinmacro(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='Airpin') {
			hotspot.skinid = 'Airpin';
			hsinst = new SkinHotspotClass_airpin(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_airpin_mouseover();;
		} else
		{
			hotspot.skinid = 'Redpin';
			hsinst = new SkinHotspotClass_redpin(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_redpin_mouseover();;
			me.callChildLogicBlocksHotspot_redpin_mouseover();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['PhotoPin']) {
			var i;
			for(i = 0; i < hotspotTemplates['PhotoPin'].length; i++) {
				hotspotTemplates['PhotoPin'][i] = null;
			}
		}
		if(hotspotTemplates['JustTextPin']) {
			var i;
			for(i = 0; i < hotspotTemplates['JustTextPin'].length; i++) {
				hotspotTemplates['JustTextPin'][i] = null;
			}
		}
		if(hotspotTemplates['pin-ya']) {
			var i;
			for(i = 0; i < hotspotTemplates['pin-ya'].length; i++) {
				hotspotTemplates['pin-ya'][i] = null;
			}
		}
		if(hotspotTemplates['pin-icho']) {
			var i;
			for(i = 0; i < hotspotTemplates['pin-icho'].length; i++) {
				hotspotTemplates['pin-icho'][i] = null;
			}
		}
		if(hotspotTemplates['pin-mar']) {
			var i;
			for(i = 0; i < hotspotTemplates['pin-mar'].length; i++) {
				hotspotTemplates['pin-mar'][i] = null;
			}
		}
		if(hotspotTemplates['pin-uk']) {
			var i;
			for(i = 0; i < hotspotTemplates['pin-uk'].length; i++) {
				hotspotTemplates['pin-uk'][i] = null;
			}
		}
		if(hotspotTemplates['PinMacro']) {
			var i;
			for(i = 0; i < hotspotTemplates['PinMacro'].length; i++) {
				hotspotTemplates['PinMacro'][i] = null;
			}
		}
		if(hotspotTemplates['Airpin']) {
			var i;
			for(i = 0; i < hotspotTemplates['Airpin'].length; i++) {
				hotspotTemplates['Airpin'][i] = null;
			}
		}
		if(hotspotTemplates['Redpin']) {
			var i;
			for(i = 0; i < hotspotTemplates['Redpin'].length; i++) {
				hotspotTemplates['Redpin'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinCloner_dropdown_cloner_uk_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 450px; height: 88px; visibility: inherit; overflow: hidden;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._itembg_uk=document.createElement('div');
		el.ggId="item-bg uk";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(255,255,255,0.0392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 450px;';
		hs+='pointer-events:auto;';
		hs+='ovewflow:hidden !important; border-radius:10px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._itembg_uk.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._itembg_uk.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				(me.elementMouseOver['itembg_uk'] == true)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				(me._itembg_uk.ggIsActive() == true)
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._itembg_uk.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._itembg_uk.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._itembg_uk.style[domTransition]='background-color 500ms ease 0ms';
				if (me._itembg_uk.ggCurrentLogicStateBackgroundColor == 0) {
					me._itembg_uk.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
				else if (me._itembg_uk.ggCurrentLogicStateBackgroundColor == 1) {
					me._itembg_uk.style.backgroundColor="rgba(255,255,255,0.784314)";
				}
				else {
					me._itembg_uk.style.backgroundColor="rgba(255,255,255,0.0392157)";
				}
			}
		}
		me._itembg_uk.onmouseover=function (e) {
			me.elementMouseOver['itembg_uk']=true;
			me._dropdown_menu_text_uk.logicBlock_textcolor();
			me._itembg_uk.logicBlock_backgroundcolor();
		}
		me._itembg_uk.onmouseout=function (e) {
			me.elementMouseOver['itembg_uk']=false;
			me._dropdown_menu_text_uk.logicBlock_textcolor();
			me._itembg_uk.logicBlock_backgroundcolor();
		}
		me._itembg_uk.ontouchend=function (e) {
			me.elementMouseOver['itembg_uk']=false;
			me._dropdown_menu_text_uk.logicBlock_textcolor();
			me._itembg_uk.logicBlock_backgroundcolor();
		}
		me._itembg_uk.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_menu_text_uk=document.createElement('div');
		els=me._dropdown_menu_text_uk__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dropdown Menu Text uk";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 65px;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		hs+='font-family: \"Navigo\";';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 350px;';
		hs+='height: 65px;';
		hs+='border: 0px solid #848484;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Navigo\";";
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._dropdown_menu_text_uk.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_text_uk.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				(me.elementMouseOver['itembg_uk'] == true)
			)
			{
				newLogicStateTextColor = 0;
			}
			else if (
				(me._dropdown_menu_text_uk.ggIsActive() == true)
			)
			{
				newLogicStateTextColor = 1;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._dropdown_menu_text_uk.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._dropdown_menu_text_uk.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._dropdown_menu_text_uk__text.style[domTransition]='color 0s';
				if (me._dropdown_menu_text_uk.ggCurrentLogicStateTextColor == 0) {
					me._dropdown_menu_text_uk__text.style.color="rgba(255,255,255,1)";
				}
				else if (me._dropdown_menu_text_uk.ggCurrentLogicStateTextColor == 1) {
					me._dropdown_menu_text_uk__text.style.color="rgba(43,94,74,1)";
				}
				else {
					me._dropdown_menu_text_uk__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._dropdown_menu_text_uk.onclick=function (e) {
			if (
				(
					(me._dropdown_menu_text_uk.ggIsActive() == false)
				)
			) {
				player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
			}
		}
		me._dropdown_menu_text_uk.ggUpdatePosition=function (useTransition) {
		}
		me._itembg_uk.appendChild(me._dropdown_menu_text_uk);
		el=me._thumbnail_nodeimage_uk=document.createElement('div');
		els=me._thumbnail_nodeimage_uk__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_icho_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;thumbnail_nodeimage_uk;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Thumbnail NodeImage uk";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='border-radius:10px 0 0 10px; overflow:hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_nodeimage_uk.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage_uk.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
			player.setVariableValue('currentPan', "{"+me.ggNodeId+"}");
		}
		me._thumbnail_nodeimage_uk.ggUpdatePosition=function (useTransition) {
		}
		el=me._checkmark_tick_uk=document.createElement('div');
		els=me._checkmark_tick_uk__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOXB4IiBoZWlnaHQ9IjlweCIgdmlld0JveD0iMCAwIDkgOSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDx0aXRsZT5pY29uLWV5ZTwvdGl0bGU+CiAgICA8ZyBpZD0iUGFub1RvdXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJjb3Zlci0tMTkyMHgxMDgwIiB0cmFuc2Zvcm09In'+
			'RyYW5zbGF0ZSgtNzAyLCAtNzA1KSI+CiAgICAgICAgICAgIDxnIGlkPSJpY29uLWV5ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzAyLCA3MDUpIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00LjUsMi41NzE0Mjg1NyBDNi4xMzk5OTUxNiwyLjU3MTQyODU3IDcuNTQ5NDcyNzMsMy4zNjQ1MjM5NCA4LjE2Njg3MTM5LDQuNDk5NDYwMDMgQzcuNTUwMjc4MzYsNS42MzUwMjI2NyA2LjE0MDQ2Mzg2LDYuNDI4NTcxNDMgNC41LDYuNDI4NTcxNDMgQzIuODU5NTM2MTQsNi40Mjg1NzE0MyAxLjQ0OTcyMTY0LDUuNjM1MDIyNjcgMC44MzI1OTk0NTQsNC40OTk1NjY4IEMxLjQ1MDUyNzI3LDMuMzY0'+
			'NTIzOTQgMi44NjAwMDQ4NCwyLjU3MTQyODU3IDQuNSwyLjU3MTQyODU3IFogTTQuNSwzIEMzLjY3MTU3Mjg4LDMgMywzLjY3MTU3Mjg4IDMsNC41IEMzLDQuNzMxOTU5NTkgMy4wNTI2NTEzMSw0Ljk1MTYyMTgyIDMuMTQ2NDQ2NjEsNS4xNDY0NDY2MSBDMy4yMzY5Mjg4MSw1LjA1NTk2NDQxIDMuMzYxOTI4ODEsNSAzLjUsNSBDMy43NzYxNDIzNyw1IDQsNS4yMjM4NTc2MyA0LDUuNSBDNCw1LjYzODA3MTE5IDMuOTQ0MDM1NTksNS43NjMwNzExOSAzLjg1MjMxMjQ0LDUuODUzMzQ1MTYgQzQuMDQ4Mzc4MTgsNS45NDczNDg2OSA0LjI2ODA0MDQxLDYgNC41LDYgQzUuMzI4NDI3MTIsNiA2LDUuMz'+
			'I4NDI3MTIgNiw0LjUgQzYsNC40MDYzMzk3IDUuOTkxNDE1ODgsNC4zMTQ2ODQzMiA1Ljk3NDQ5ODgyLDQuMjI1Mzc4MzcgQzUuODcyMjg2MjEsNC42NjkxMjI4NyA1LjQ3NDc4MzM1LDUgNSw1IEM0LjQ0NzcxNTI1LDUgNCw0LjU1MjI4NDc1IDQsNCBDNCwzLjUyNTIxNjY1IDQuMzMwODc3MTMsMy4xMjc3MTM3OSA0Ljc3NDIyMjMsMy4wMjUwMDg1MiBDNC42ODUzMTU2OCwzLjAwODU4NDEyIDQuNTkzNjYwMywzIDQuNSwzIFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMCIgeT0iMCIgd2lk'+
			'dGg9IjkiIGhlaWdodD0iOSI+PC9yZWN0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
		me._checkmark_tick_uk__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;checkmark_tick_uk;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick uk";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 26px;';
		hs+='height : 26px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick_uk.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick_uk.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._checkmark_tick_uk.ggElementNodeId()) == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick_uk.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick_uk.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick_uk.style[domTransition]='';
				if (me._checkmark_tick_uk.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick_uk.style.visibility=(Number(me._checkmark_tick_uk.style.opacity)>0||!me._checkmark_tick_uk.style.opacity)?'inherit':'hidden';
					me._checkmark_tick_uk.ggVisible=true;
				}
				else {
					me._checkmark_tick_uk.style.visibility="hidden";
					me._checkmark_tick_uk.ggVisible=false;
				}
			}
		}
		me._checkmark_tick_uk.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._thumbnail_nodeimage_uk.appendChild(me._checkmark_tick_uk);
		me._itembg_uk.appendChild(me._thumbnail_nodeimage_uk);
		me.__div.appendChild(me._itembg_uk);
	};
	function SkinCloner_dropdown_cloner_icho_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 450px; height: 88px; visibility: inherit; overflow: hidden;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._itembg_icho=document.createElement('div');
		el.ggId="item-bg icho";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(255,255,255,0.0392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 450px;';
		hs+='pointer-events:auto;';
		hs+='ovewflow:hidden !important; border-radius:10px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._itembg_icho.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._itembg_icho.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				(me.elementMouseOver['itembg_icho'] == true)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				(me._itembg_icho.ggIsActive() == true)
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._itembg_icho.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._itembg_icho.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._itembg_icho.style[domTransition]='background-color 500ms ease 0ms';
				if (me._itembg_icho.ggCurrentLogicStateBackgroundColor == 0) {
					me._itembg_icho.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
				else if (me._itembg_icho.ggCurrentLogicStateBackgroundColor == 1) {
					me._itembg_icho.style.backgroundColor="rgba(255,255,255,0.784314)";
				}
				else {
					me._itembg_icho.style.backgroundColor="rgba(255,255,255,0.0392157)";
				}
			}
		}
		me._itembg_icho.onmouseover=function (e) {
			me.elementMouseOver['itembg_icho']=true;
			me._dropdown_menu_text_icho.logicBlock_textcolor();
			me._itembg_icho.logicBlock_backgroundcolor();
		}
		me._itembg_icho.onmouseout=function (e) {
			me.elementMouseOver['itembg_icho']=false;
			me._dropdown_menu_text_icho.logicBlock_textcolor();
			me._itembg_icho.logicBlock_backgroundcolor();
		}
		me._itembg_icho.ontouchend=function (e) {
			me.elementMouseOver['itembg_icho']=false;
			me._dropdown_menu_text_icho.logicBlock_textcolor();
			me._itembg_icho.logicBlock_backgroundcolor();
		}
		me._itembg_icho.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_menu_text_icho=document.createElement('div');
		els=me._dropdown_menu_text_icho__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dropdown Menu Text icho";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 65px;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		hs+='font-family: \"Navigo\";';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 350px;';
		hs+='height: 65px;';
		hs+='border: 0px solid #848484;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Navigo\";";
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._dropdown_menu_text_icho.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_text_icho.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				(me.elementMouseOver['itembg_icho'] == true)
			)
			{
				newLogicStateTextColor = 0;
			}
			else if (
				(me._dropdown_menu_text_icho.ggIsActive() == true)
			)
			{
				newLogicStateTextColor = 1;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._dropdown_menu_text_icho.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._dropdown_menu_text_icho.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._dropdown_menu_text_icho__text.style[domTransition]='color 0s';
				if (me._dropdown_menu_text_icho.ggCurrentLogicStateTextColor == 0) {
					me._dropdown_menu_text_icho__text.style.color="rgba(255,255,255,1)";
				}
				else if (me._dropdown_menu_text_icho.ggCurrentLogicStateTextColor == 1) {
					me._dropdown_menu_text_icho__text.style.color="rgba(43,94,74,1)";
				}
				else {
					me._dropdown_menu_text_icho__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._dropdown_menu_text_icho.onclick=function (e) {
			if (
				(
					(me._dropdown_menu_text_icho.ggIsActive() == false)
				)
			) {
				player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
			}
		}
		me._dropdown_menu_text_icho.ggUpdatePosition=function (useTransition) {
		}
		me._itembg_icho.appendChild(me._dropdown_menu_text_icho);
		el=me._thumbnail_nodeimage_icho=document.createElement('div');
		els=me._thumbnail_nodeimage_icho__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_icho_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;thumbnail_nodeimage_icho;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Thumbnail NodeImage icho";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='border-radius:10px 0 0 10px; overflow:hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_nodeimage_icho.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage_icho.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
			player.setVariableValue('currentPan', "{"+me.ggNodeId+"}");
		}
		me._thumbnail_nodeimage_icho.ggUpdatePosition=function (useTransition) {
		}
		el=me._checkmark_tick_icho=document.createElement('div');
		els=me._checkmark_tick_icho__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOXB4IiBoZWlnaHQ9IjlweCIgdmlld0JveD0iMCAwIDkgOSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDx0aXRsZT5pY29uLWV5ZTwvdGl0bGU+CiAgICA8ZyBpZD0iUGFub1RvdXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJjb3Zlci0tMTkyMHgxMDgwIiB0cmFuc2Zvcm09In'+
			'RyYW5zbGF0ZSgtNzAyLCAtNzA1KSI+CiAgICAgICAgICAgIDxnIGlkPSJpY29uLWV5ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzAyLCA3MDUpIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00LjUsMi41NzE0Mjg1NyBDNi4xMzk5OTUxNiwyLjU3MTQyODU3IDcuNTQ5NDcyNzMsMy4zNjQ1MjM5NCA4LjE2Njg3MTM5LDQuNDk5NDYwMDMgQzcuNTUwMjc4MzYsNS42MzUwMjI2NyA2LjE0MDQ2Mzg2LDYuNDI4NTcxNDMgNC41LDYuNDI4NTcxNDMgQzIuODU5NTM2MTQsNi40Mjg1NzE0MyAxLjQ0OTcyMTY0LDUuNjM1MDIyNjcgMC44MzI1OTk0NTQsNC40OTk1NjY4IEMxLjQ1MDUyNzI3LDMuMzY0'+
			'NTIzOTQgMi44NjAwMDQ4NCwyLjU3MTQyODU3IDQuNSwyLjU3MTQyODU3IFogTTQuNSwzIEMzLjY3MTU3Mjg4LDMgMywzLjY3MTU3Mjg4IDMsNC41IEMzLDQuNzMxOTU5NTkgMy4wNTI2NTEzMSw0Ljk1MTYyMTgyIDMuMTQ2NDQ2NjEsNS4xNDY0NDY2MSBDMy4yMzY5Mjg4MSw1LjA1NTk2NDQxIDMuMzYxOTI4ODEsNSAzLjUsNSBDMy43NzYxNDIzNyw1IDQsNS4yMjM4NTc2MyA0LDUuNSBDNCw1LjYzODA3MTE5IDMuOTQ0MDM1NTksNS43NjMwNzExOSAzLjg1MjMxMjQ0LDUuODUzMzQ1MTYgQzQuMDQ4Mzc4MTgsNS45NDczNDg2OSA0LjI2ODA0MDQxLDYgNC41LDYgQzUuMzI4NDI3MTIsNiA2LDUuMz'+
			'I4NDI3MTIgNiw0LjUgQzYsNC40MDYzMzk3IDUuOTkxNDE1ODgsNC4zMTQ2ODQzMiA1Ljk3NDQ5ODgyLDQuMjI1Mzc4MzcgQzUuODcyMjg2MjEsNC42NjkxMjI4NyA1LjQ3NDc4MzM1LDUgNSw1IEM0LjQ0NzcxNTI1LDUgNCw0LjU1MjI4NDc1IDQsNCBDNCwzLjUyNTIxNjY1IDQuMzMwODc3MTMsMy4xMjc3MTM3OSA0Ljc3NDIyMjMsMy4wMjUwMDg1MiBDNC42ODUzMTU2OCwzLjAwODU4NDEyIDQuNTkzNjYwMywzIDQuNSwzIFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMCIgeT0iMCIgd2lk'+
			'dGg9IjkiIGhlaWdodD0iOSI+PC9yZWN0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
		me._checkmark_tick_icho__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;checkmark_tick_icho;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick icho";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 26px;';
		hs+='height : 26px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick_icho.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick_icho.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._checkmark_tick_icho.ggElementNodeId()) == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick_icho.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick_icho.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick_icho.style[domTransition]='';
				if (me._checkmark_tick_icho.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick_icho.style.visibility=(Number(me._checkmark_tick_icho.style.opacity)>0||!me._checkmark_tick_icho.style.opacity)?'inherit':'hidden';
					me._checkmark_tick_icho.ggVisible=true;
				}
				else {
					me._checkmark_tick_icho.style.visibility="hidden";
					me._checkmark_tick_icho.ggVisible=false;
				}
			}
		}
		me._checkmark_tick_icho.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._thumbnail_nodeimage_icho.appendChild(me._checkmark_tick_icho);
		me._itembg_icho.appendChild(me._thumbnail_nodeimage_icho);
		me.__div.appendChild(me._itembg_icho);
	};
	function SkinCloner_dropdown_cloner_mark_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 450px; height: 88px; visibility: inherit; overflow: hidden;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._itembg_mark=document.createElement('div');
		el.ggId="item-bg mark";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(255,255,255,0.0392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 450px;';
		hs+='pointer-events:auto;';
		hs+='ovewflow:hidden !important; border-radius:10px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._itembg_mark.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._itembg_mark.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				(me.elementMouseOver['itembg_mark'] == true)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				(me._itembg_mark.ggIsActive() == true)
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._itembg_mark.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._itembg_mark.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._itembg_mark.style[domTransition]='background-color 500ms ease 0ms';
				if (me._itembg_mark.ggCurrentLogicStateBackgroundColor == 0) {
					me._itembg_mark.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
				else if (me._itembg_mark.ggCurrentLogicStateBackgroundColor == 1) {
					me._itembg_mark.style.backgroundColor="rgba(255,255,255,0.784314)";
				}
				else {
					me._itembg_mark.style.backgroundColor="rgba(255,255,255,0.0392157)";
				}
			}
		}
		me._itembg_mark.onmouseover=function (e) {
			me.elementMouseOver['itembg_mark']=true;
			me._dropdown_menu_text_mark.logicBlock_textcolor();
			me._itembg_mark.logicBlock_backgroundcolor();
		}
		me._itembg_mark.onmouseout=function (e) {
			me.elementMouseOver['itembg_mark']=false;
			me._dropdown_menu_text_mark.logicBlock_textcolor();
			me._itembg_mark.logicBlock_backgroundcolor();
		}
		me._itembg_mark.ontouchend=function (e) {
			me.elementMouseOver['itembg_mark']=false;
			me._dropdown_menu_text_mark.logicBlock_textcolor();
			me._itembg_mark.logicBlock_backgroundcolor();
		}
		me._itembg_mark.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_menu_text_mark=document.createElement('div');
		els=me._dropdown_menu_text_mark__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dropdown Menu Text mark";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 65px;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		hs+='font-family: \"Navigo\";';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 350px;';
		hs+='height: 65px;';
		hs+='border: 0px solid #848484;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Navigo\";";
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._dropdown_menu_text_mark.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_text_mark.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				(me.elementMouseOver['itembg_mark'] == true)
			)
			{
				newLogicStateTextColor = 0;
			}
			else if (
				(me._dropdown_menu_text_mark.ggIsActive() == true)
			)
			{
				newLogicStateTextColor = 1;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._dropdown_menu_text_mark.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._dropdown_menu_text_mark.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._dropdown_menu_text_mark__text.style[domTransition]='color 0s';
				if (me._dropdown_menu_text_mark.ggCurrentLogicStateTextColor == 0) {
					me._dropdown_menu_text_mark__text.style.color="rgba(255,255,255,1)";
				}
				else if (me._dropdown_menu_text_mark.ggCurrentLogicStateTextColor == 1) {
					me._dropdown_menu_text_mark__text.style.color="rgba(43,94,74,1)";
				}
				else {
					me._dropdown_menu_text_mark__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._dropdown_menu_text_mark.onclick=function (e) {
			if (
				(
					(me._dropdown_menu_text_mark.ggIsActive() == false)
				)
			) {
				player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
			}
		}
		me._dropdown_menu_text_mark.ggUpdatePosition=function (useTransition) {
		}
		me._itembg_mark.appendChild(me._dropdown_menu_text_mark);
		el=me._thumbnail_nodeimage_mark=document.createElement('div');
		els=me._thumbnail_nodeimage_mark__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_icho_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;thumbnail_nodeimage_mark;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Thumbnail NodeImage mark";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='border-radius:10px 0 0 10px; overflow:hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_nodeimage_mark.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage_mark.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
			player.setVariableValue('currentPan', "{"+me.ggNodeId+"}");
		}
		me._thumbnail_nodeimage_mark.ggUpdatePosition=function (useTransition) {
		}
		el=me._checkmark_tick_mark=document.createElement('div');
		els=me._checkmark_tick_mark__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOXB4IiBoZWlnaHQ9IjlweCIgdmlld0JveD0iMCAwIDkgOSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDx0aXRsZT5pY29uLWV5ZTwvdGl0bGU+CiAgICA8ZyBpZD0iUGFub1RvdXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJjb3Zlci0tMTkyMHgxMDgwIiB0cmFuc2Zvcm09In'+
			'RyYW5zbGF0ZSgtNzAyLCAtNzA1KSI+CiAgICAgICAgICAgIDxnIGlkPSJpY29uLWV5ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzAyLCA3MDUpIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00LjUsMi41NzE0Mjg1NyBDNi4xMzk5OTUxNiwyLjU3MTQyODU3IDcuNTQ5NDcyNzMsMy4zNjQ1MjM5NCA4LjE2Njg3MTM5LDQuNDk5NDYwMDMgQzcuNTUwMjc4MzYsNS42MzUwMjI2NyA2LjE0MDQ2Mzg2LDYuNDI4NTcxNDMgNC41LDYuNDI4NTcxNDMgQzIuODU5NTM2MTQsNi40Mjg1NzE0MyAxLjQ0OTcyMTY0LDUuNjM1MDIyNjcgMC44MzI1OTk0NTQsNC40OTk1NjY4IEMxLjQ1MDUyNzI3LDMuMzY0'+
			'NTIzOTQgMi44NjAwMDQ4NCwyLjU3MTQyODU3IDQuNSwyLjU3MTQyODU3IFogTTQuNSwzIEMzLjY3MTU3Mjg4LDMgMywzLjY3MTU3Mjg4IDMsNC41IEMzLDQuNzMxOTU5NTkgMy4wNTI2NTEzMSw0Ljk1MTYyMTgyIDMuMTQ2NDQ2NjEsNS4xNDY0NDY2MSBDMy4yMzY5Mjg4MSw1LjA1NTk2NDQxIDMuMzYxOTI4ODEsNSAzLjUsNSBDMy43NzYxNDIzNyw1IDQsNS4yMjM4NTc2MyA0LDUuNSBDNCw1LjYzODA3MTE5IDMuOTQ0MDM1NTksNS43NjMwNzExOSAzLjg1MjMxMjQ0LDUuODUzMzQ1MTYgQzQuMDQ4Mzc4MTgsNS45NDczNDg2OSA0LjI2ODA0MDQxLDYgNC41LDYgQzUuMzI4NDI3MTIsNiA2LDUuMz'+
			'I4NDI3MTIgNiw0LjUgQzYsNC40MDYzMzk3IDUuOTkxNDE1ODgsNC4zMTQ2ODQzMiA1Ljk3NDQ5ODgyLDQuMjI1Mzc4MzcgQzUuODcyMjg2MjEsNC42NjkxMjI4NyA1LjQ3NDc4MzM1LDUgNSw1IEM0LjQ0NzcxNTI1LDUgNCw0LjU1MjI4NDc1IDQsNCBDNCwzLjUyNTIxNjY1IDQuMzMwODc3MTMsMy4xMjc3MTM3OSA0Ljc3NDIyMjMsMy4wMjUwMDg1MiBDNC42ODUzMTU2OCwzLjAwODU4NDEyIDQuNTkzNjYwMywzIDQuNSwzIFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMCIgeT0iMCIgd2lk'+
			'dGg9IjkiIGhlaWdodD0iOSI+PC9yZWN0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
		me._checkmark_tick_mark__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;checkmark_tick_mark;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick mark";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 26px;';
		hs+='height : 26px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick_mark.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick_mark.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._checkmark_tick_mark.ggElementNodeId()) == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick_mark.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick_mark.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick_mark.style[domTransition]='';
				if (me._checkmark_tick_mark.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick_mark.style.visibility=(Number(me._checkmark_tick_mark.style.opacity)>0||!me._checkmark_tick_mark.style.opacity)?'inherit':'hidden';
					me._checkmark_tick_mark.ggVisible=true;
				}
				else {
					me._checkmark_tick_mark.style.visibility="hidden";
					me._checkmark_tick_mark.ggVisible=false;
				}
			}
		}
		me._checkmark_tick_mark.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._thumbnail_nodeimage_mark.appendChild(me._checkmark_tick_mark);
		me._itembg_mark.appendChild(me._thumbnail_nodeimage_mark);
		me.__div.appendChild(me._itembg_mark);
	};
	function SkinCloner_dropdown_cloner_ya_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 450px; height: 88px; visibility: inherit; overflow: hidden;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._itembg_ya=document.createElement('div');
		el.ggId="item-bg ya";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(255,255,255,0.0392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 450px;';
		hs+='pointer-events:auto;';
		hs+='ovewflow:hidden !important; border-radius:10px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._itembg_ya.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._itembg_ya.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.ggUserdata.comment == "\u042f\u0440\u0430\u043a\u0442\u0438\u043d\u0441\u043a\u043e\u0435 \u043c\u0435\u0441\u0442\u043e\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0435")
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._itembg_ya.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._itembg_ya.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._itembg_ya.style[domTransition]='background-color 500ms ease 0ms';
				if (me._itembg_ya.ggCurrentLogicStateVisible == 0) {
					me._itembg_ya.style.visibility=(Number(me._itembg_ya.style.opacity)>0||!me._itembg_ya.style.opacity)?'inherit':'hidden';
					me._itembg_ya.ggVisible=true;
				}
				else {
					me._itembg_ya.style.visibility=(Number(me._itembg_ya.style.opacity)>0||!me._itembg_ya.style.opacity)?'inherit':'hidden';
					me._itembg_ya.ggVisible=true;
				}
			}
		}
		me._itembg_ya.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				(me.elementMouseOver['itembg_ya'] == true)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				(me._itembg_ya.ggIsActive() == true)
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._itembg_ya.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._itembg_ya.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._itembg_ya.style[domTransition]='background-color 500ms ease 0ms';
				if (me._itembg_ya.ggCurrentLogicStateBackgroundColor == 0) {
					me._itembg_ya.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
				else if (me._itembg_ya.ggCurrentLogicStateBackgroundColor == 1) {
					me._itembg_ya.style.backgroundColor="rgba(255,255,255,0.784314)";
				}
				else {
					me._itembg_ya.style.backgroundColor="rgba(255,255,255,0.0392157)";
				}
			}
		}
		me._itembg_ya.onmouseover=function (e) {
			me.elementMouseOver['itembg_ya']=true;
			me._dropdown_menu_text_ya.logicBlock_textcolor();
			me._itembg_ya.logicBlock_backgroundcolor();
		}
		me._itembg_ya.onmouseout=function (e) {
			me.elementMouseOver['itembg_ya']=false;
			me._dropdown_menu_text_ya.logicBlock_textcolor();
			me._itembg_ya.logicBlock_backgroundcolor();
		}
		me._itembg_ya.ontouchend=function (e) {
			me.elementMouseOver['itembg_ya']=false;
			me._dropdown_menu_text_ya.logicBlock_textcolor();
			me._itembg_ya.logicBlock_backgroundcolor();
		}
		me._itembg_ya.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_menu_text_ya=document.createElement('div');
		els=me._dropdown_menu_text_ya__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dropdown Menu Text ya";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 65px;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		hs+='font-family: \"Navigo\";';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 350px;';
		hs+='height: 65px;';
		hs+='border: 0px solid #848484;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Navigo\";";
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._dropdown_menu_text_ya.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_text_ya.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				(me.elementMouseOver['itembg_ya'] == true)
			)
			{
				newLogicStateTextColor = 0;
			}
			else if (
				(me._dropdown_menu_text_ya.ggIsActive() == true)
			)
			{
				newLogicStateTextColor = 1;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._dropdown_menu_text_ya.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._dropdown_menu_text_ya.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._dropdown_menu_text_ya__text.style[domTransition]='color 0s';
				if (me._dropdown_menu_text_ya.ggCurrentLogicStateTextColor == 0) {
					me._dropdown_menu_text_ya__text.style.color="rgba(255,255,255,1)";
				}
				else if (me._dropdown_menu_text_ya.ggCurrentLogicStateTextColor == 1) {
					me._dropdown_menu_text_ya__text.style.color="rgba(43,94,74,1)";
				}
				else {
					me._dropdown_menu_text_ya__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._dropdown_menu_text_ya.onclick=function (e) {
			if (
				(
					(me._dropdown_menu_text_ya.ggIsActive() == false)
				)
			) {
				player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
			}
		}
		me._dropdown_menu_text_ya.ggUpdatePosition=function (useTransition) {
		}
		me._itembg_ya.appendChild(me._dropdown_menu_text_ya);
		el=me._thumbnail_nodeimage_ya2=document.createElement('div');
		els=me._thumbnail_nodeimage_ya2__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_icho_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;thumbnail_nodeimage_ya2;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Thumbnail NodeImage ya2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='border-radius:10px 0 0 10px; overflow:hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_nodeimage_ya2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage_ya2.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
			player.setVariableValue('currentPan', "{"+me.ggNodeId+"}");
		}
		me._thumbnail_nodeimage_ya2.ggUpdatePosition=function (useTransition) {
		}
		el=me._checkmark_tick_ya=document.createElement('div');
		els=me._checkmark_tick_ya__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOXB4IiBoZWlnaHQ9IjlweCIgdmlld0JveD0iMCAwIDkgOSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDx0aXRsZT5pY29uLWV5ZTwvdGl0bGU+CiAgICA8ZyBpZD0iUGFub1RvdXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJjb3Zlci0tMTkyMHgxMDgwIiB0cmFuc2Zvcm09In'+
			'RyYW5zbGF0ZSgtNzAyLCAtNzA1KSI+CiAgICAgICAgICAgIDxnIGlkPSJpY29uLWV5ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzAyLCA3MDUpIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00LjUsMi41NzE0Mjg1NyBDNi4xMzk5OTUxNiwyLjU3MTQyODU3IDcuNTQ5NDcyNzMsMy4zNjQ1MjM5NCA4LjE2Njg3MTM5LDQuNDk5NDYwMDMgQzcuNTUwMjc4MzYsNS42MzUwMjI2NyA2LjE0MDQ2Mzg2LDYuNDI4NTcxNDMgNC41LDYuNDI4NTcxNDMgQzIuODU5NTM2MTQsNi40Mjg1NzE0MyAxLjQ0OTcyMTY0LDUuNjM1MDIyNjcgMC44MzI1OTk0NTQsNC40OTk1NjY4IEMxLjQ1MDUyNzI3LDMuMzY0'+
			'NTIzOTQgMi44NjAwMDQ4NCwyLjU3MTQyODU3IDQuNSwyLjU3MTQyODU3IFogTTQuNSwzIEMzLjY3MTU3Mjg4LDMgMywzLjY3MTU3Mjg4IDMsNC41IEMzLDQuNzMxOTU5NTkgMy4wNTI2NTEzMSw0Ljk1MTYyMTgyIDMuMTQ2NDQ2NjEsNS4xNDY0NDY2MSBDMy4yMzY5Mjg4MSw1LjA1NTk2NDQxIDMuMzYxOTI4ODEsNSAzLjUsNSBDMy43NzYxNDIzNyw1IDQsNS4yMjM4NTc2MyA0LDUuNSBDNCw1LjYzODA3MTE5IDMuOTQ0MDM1NTksNS43NjMwNzExOSAzLjg1MjMxMjQ0LDUuODUzMzQ1MTYgQzQuMDQ4Mzc4MTgsNS45NDczNDg2OSA0LjI2ODA0MDQxLDYgNC41LDYgQzUuMzI4NDI3MTIsNiA2LDUuMz'+
			'I4NDI3MTIgNiw0LjUgQzYsNC40MDYzMzk3IDUuOTkxNDE1ODgsNC4zMTQ2ODQzMiA1Ljk3NDQ5ODgyLDQuMjI1Mzc4MzcgQzUuODcyMjg2MjEsNC42NjkxMjI4NyA1LjQ3NDc4MzM1LDUgNSw1IEM0LjQ0NzcxNTI1LDUgNCw0LjU1MjI4NDc1IDQsNCBDNCwzLjUyNTIxNjY1IDQuMzMwODc3MTMsMy4xMjc3MTM3OSA0Ljc3NDIyMjMsMy4wMjUwMDg1MiBDNC42ODUzMTU2OCwzLjAwODU4NDEyIDQuNTkzNjYwMywzIDQuNSwzIFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMCIgeT0iMCIgd2lk'+
			'dGg9IjkiIGhlaWdodD0iOSI+PC9yZWN0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
		me._checkmark_tick_ya__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;checkmark_tick_ya;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick ya";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 26px;';
		hs+='height : 26px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick_ya.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick_ya.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._checkmark_tick_ya.ggElementNodeId()) == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick_ya.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick_ya.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick_ya.style[domTransition]='';
				if (me._checkmark_tick_ya.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick_ya.style.visibility=(Number(me._checkmark_tick_ya.style.opacity)>0||!me._checkmark_tick_ya.style.opacity)?'inherit':'hidden';
					me._checkmark_tick_ya.ggVisible=true;
				}
				else {
					me._checkmark_tick_ya.style.visibility="hidden";
					me._checkmark_tick_ya.ggVisible=false;
				}
			}
		}
		me._checkmark_tick_ya.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._thumbnail_nodeimage_ya2.appendChild(me._checkmark_tick_ya);
		me._itembg_ya.appendChild(me._thumbnail_nodeimage_ya2);
		me.__div.appendChild(me._itembg_ya);
	};
	me.addSkin();
	me._top_menu.logicBlock_scaling();
	me._map_bg.logicBlock_scaling();
	me._main_menu.logicBlock_position();
	me._main_menu.logicBlock_scaling();
	me._toggle2.logicBlock_position();
	me._toggle2.logicBlock_scaling();
	me._abouttext.logicBlock_scaling();
	me._help.logicBlock_scaling();
	me._image_1.logicBlock_scaling();
	me._top_menu.logicBlock_visible();
	me._scrollarea_uk.logicBlock_visible();
	me._scrollarea_icho.logicBlock_visible();
	me._scrollarea_mark.logicBlock_visible();
	me._scrollarea_ya.logicBlock_visible();
	me._abouttext.logicBlock_visible();
	me._help.logicBlock_visible();
	me._cover.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._top_menu.logicBlock_scaling();me._map_bg.logicBlock_scaling();me._main_menu.logicBlock_position();me._main_menu.logicBlock_scaling();me._toggle2.logicBlock_position();me._toggle2.logicBlock_scaling();me._abouttext.logicBlock_scaling();me._help.logicBlock_scaling();me._image_1.logicBlock_scaling(); });
	player.addListener('changenodeid', function(args) { me._top_menu.logicBlock_visible();me._scrollarea_uk.logicBlock_visible();me._scrollarea_icho.logicBlock_visible();me._scrollarea_mark.logicBlock_visible();me._scrollarea_ya.logicBlock_visible();me._abouttext.logicBlock_visible();me._help.logicBlock_visible();me._cover.logicBlock_visible(); });
	player.addListener('varchanged_titleShow', function(args) { me._help.logicBlock_visible(); });
	player.addListener('varchanged_coverShow', function(args) { me._cover.logicBlock_visible(); });
	player.addListener('changenodeid', function(args) { me._dropdown_cloner_uk.callChildLogicBlocks_changenodeid();me._dropdown_cloner_icho.callChildLogicBlocks_changenodeid();me._dropdown_cloner_mark.callChildLogicBlocks_changenodeid();me._dropdown_cloner_ya.callChildLogicBlocks_changenodeid(); });
	player.addListener('mouseover', function(args) { me._dropdown_cloner_uk.callChildLogicBlocks_mouseover();me._dropdown_cloner_icho.callChildLogicBlocks_mouseover();me._dropdown_cloner_mark.callChildLogicBlocks_mouseover();me._dropdown_cloner_ya.callChildLogicBlocks_mouseover(); });
	player.addListener('mouseover', function(args) { me._dropdown_cloner_uk.callChildLogicBlocks_mouseover();me._dropdown_cloner_icho.callChildLogicBlocks_mouseover();me._dropdown_cloner_mark.callChildLogicBlocks_mouseover();me._dropdown_cloner_ya.callChildLogicBlocks_mouseover(); });
	player.addListener('changenodeid', function(args) { me._dropdown_cloner_uk.callChildLogicBlocks_active();me._dropdown_cloner_icho.callChildLogicBlocks_active();me._dropdown_cloner_mark.callChildLogicBlocks_active();me._dropdown_cloner_ya.callChildLogicBlocks_active(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_photopin_mouseover();me.callChildLogicBlocksHotspot_pinya_mouseover();me.callChildLogicBlocksHotspot_pinicho_mouseover();me.callChildLogicBlocksHotspot_pinmar_mouseover();me.callChildLogicBlocksHotspot_pinuk_mouseover();me.callChildLogicBlocksHotspot_redpin_mouseover(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_airpin_mouseover();me.callChildLogicBlocksHotspot_redpin_mouseover(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	document.addEventListener('keydown', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = key;
		if (!player.getLockedKeyboard()) {
			switch(key) {
				case 66:
					player.openNext("{"+player.getLastVisitedNode()+"}","$(cur)");
					break;
				case 70:
					player.toggleFullscreen();
					break;
				case 72:
					player.setVariableValue('coverShow', true);
					break;
				case 82:
					player.toggleAutorotate();
					break;
				case 84:
					me._abouttext.style[domTransition]='none';
me._abouttext.style.visibility='hidden';
me._abouttext.ggVisible=false;
me._top_menu.style[domTransition]='none';
me._top_menu.style.visibility=(Number(me._top_menu.style.opacity)>0||!me._top_menu.style.opacity)?'inherit':'hidden';
me._top_menu.ggVisible=true;
					break;
			}
		}
	});
	document.addEventListener('keyup', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = 0;
	});
	me.skinTimerEvent();
};