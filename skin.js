// Garden Gnome Software - Skin
// Pano2VR 6.0.1/17227
// Filename: INK_material_2024.ggsk
// Generated Wed May 22 14:41:11 2024

function pano2vrSkin(player,base) {
	player.addVariable('currentPan', 0, "1");
	player.addVariable('titleShow', 2, false);
	player.addVariable('coverShow', 2, true);
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
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-bottom: 1px solid rgba(255,255,255, 0.3);';
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
		me._top_menu.ggUpdatePosition=function (useTransition) {
		}
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
		hs+='height : 51px;';
		hs+='position : absolute;';
		hs+='right : 107px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 51px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 32px;';
		hs+='font-weight: bold;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="filter: blur(0px); font-family:\"Navigo\" !important; font-weight:200 !important; font-size: 40px; line-height: 26px; padding-top:4px; text-shadow: 0 0 1px black;";
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
		me._top_menu.appendChild(me._pan_title);
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
		hs+='z-index: -1;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 109px;';
		hs+='top : 68px;';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 10px 1px 10px 1px;';
		hs+='overflow: hidden;';
		hs+="border-radius:0 0 20px 20px; overflow: hidden; color:white; text-shadow: 0 0 1px black; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); font-family:\"Navigo\", Navigo; font-weight: 500; font-size: 18px;";
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
		me._top_menu.appendChild(me._subtitle);
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
		hs+='border : 0px solid #000000;';
		hs+='bottom : 24px;';
		hs+='cursor : default;';
		hs+='height : 120px;';
		hs+='left : 164px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
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
				else {
					me._map_bg.ggParameter.sx = 1;
					me._map_bg.ggParameter.sy = 1;
					me._map_bg.style[domTransform]=parameterToTransform(me._map_bg.ggParameter);
				}
			}
		}
		me._map_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_menu4=document.createElement('div');
		els=me._thumbnail_menu4__content=document.createElement('div');
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 93px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 87px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu4.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu4.ggHorScrollVisible || diffX == 0) return;
			me._thumbnail_menu4.ggScrollPosX = (me._thumbnail_menu4__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu4.ggScrollPosX = Math.max(me._thumbnail_menu4.ggScrollPosX, 0);
			me._thumbnail_menu4.ggScrollPosX = Math.min(me._thumbnail_menu4.ggScrollPosX, me._thumbnail_menu4__horScrollBg.clientWidth - me._thumbnail_menu4__horScrollFg.clientWidth);
			me._thumbnail_menu4__horScrollFg.style.left = me._thumbnail_menu4.ggScrollPosX + 'px';
			me._thumbnail_menu4__content.style.left = -(Math.round(me._thumbnail_menu4.ggScrollPosX / me._thumbnail_menu4.ggHPercentVisible)) + me._thumbnail_menu4.ggContentLeftOffset + 'px';
			me._thumbnail_menu4.ggScrollPosXPercent = (me._thumbnail_menu4__horScrollFg.offsetLeft / me._thumbnail_menu4__horScrollBg.clientWidth);
		}
		me._thumbnail_menu4.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu4.ggHorScrollVisible || diffX == 0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu4.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu4.ggScrollPosX >= me._thumbnail_menu4__horScrollBg.clientWidth - me._thumbnail_menu4__horScrollFg.clientWidth)) {
					me._thumbnail_menu4.ggScrollPosX = Math.min(me._thumbnail_menu4.ggScrollPosX, me._thumbnail_menu4__horScrollBg.clientWidth - me._thumbnail_menu4__horScrollFg.clientWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu4.ggScrollPosX <= 0)) {
					me._thumbnail_menu4.ggScrollPosX = Math.max(me._thumbnail_menu4.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu4__horScrollFg.style.left = me._thumbnail_menu4.ggScrollPosX + 'px';
			me._thumbnail_menu4__content.style.left = -(Math.round(me._thumbnail_menu4.ggScrollPosX / me._thumbnail_menu4.ggHPercentVisible)) + me._thumbnail_menu4.ggContentLeftOffset + 'px';
			me._thumbnail_menu4.ggScrollPosXPercent = (me._thumbnail_menu4__horScrollFg.offsetLeft / me._thumbnail_menu4__horScrollBg.clientWidth);
			}, 10);
		}
		me._thumbnail_menu4.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu4.ggVertScrollVisible || diffY == 0) return;
			me._thumbnail_menu4.ggScrollPosY = (me._thumbnail_menu4__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu4.ggScrollPosY = Math.max(me._thumbnail_menu4.ggScrollPosY, 0);
			me._thumbnail_menu4.ggScrollPosY = Math.min(me._thumbnail_menu4.ggScrollPosY, me._thumbnail_menu4__vertScrollBg.clientHeight - me._thumbnail_menu4__vertScrollFg.clientHeight);
			me._thumbnail_menu4__vertScrollFg.style.top = me._thumbnail_menu4.ggScrollPosY + 'px';
			me._thumbnail_menu4__content.style.top = -(Math.round(me._thumbnail_menu4.ggScrollPosY / me._thumbnail_menu4.ggVPercentVisible)) + me._thumbnail_menu4.ggContentTopOffset + 'px';
			me._thumbnail_menu4.ggScrollPosYPercent = (me._thumbnail_menu4__vertScrollFg.offsetTop / me._thumbnail_menu4__vertScrollBg.clientHeight);
		}
		me._thumbnail_menu4.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu4.ggVertScrollVisible || diffY == 0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu4.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu4.ggScrollPosY >= me._thumbnail_menu4__vertScrollBg.clientHeight - me._thumbnail_menu4__vertScrollFg.clientHeight)) {
					me._thumbnail_menu4.ggScrollPosY = Math.min(me._thumbnail_menu4.ggScrollPosY, me._thumbnail_menu4__vertScrollBg.clientHeight - me._thumbnail_menu4__vertScrollFg.clientHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu4.ggScrollPosY <= 0)) {
					me._thumbnail_menu4.ggScrollPosY = Math.max(me._thumbnail_menu4.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu4__vertScrollFg.style.top = me._thumbnail_menu4.ggScrollPosY + 'px';
			me._thumbnail_menu4__content.style.top = -(Math.round(me._thumbnail_menu4.ggScrollPosY / me._thumbnail_menu4.ggVPercentVisible)) + me._thumbnail_menu4.ggContentTopOffset + 'px';
			me._thumbnail_menu4.ggScrollPosYPercent = (me._thumbnail_menu4__vertScrollFg.offsetTop / me._thumbnail_menu4__vertScrollBg.clientHeight);
			}, 10);
		}
		me._thumbnail_menu4.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu4.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu4.ggHPercentVisible);
					me._thumbnail_menu4.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu4.clientWidth - (me._thumbnail_menu4.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu4.clientWidth - (me._thumbnail_menu4.ggVertScrollVisible ? 15 : 0))) * me._thumbnail_menu4.ggHPercentVisible);
					me._thumbnail_menu4.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu4.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu4.ggVPercentVisible);
					me._thumbnail_menu4.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu4.clientHeight - (me._thumbnail_menu4.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu4.clientHeight - (me._thumbnail_menu4.ggHorScrollVisible ? 15 : 0))) * me._thumbnail_menu4.ggVPercentVisible);
					me._thumbnail_menu4.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu4.ggDragLastX = t[0].clientX;
			me._thumbnail_menu4.ggDragLastY = t[0].clientY;
			me._thumbnail_menu4__content.ontouchend = function() {
				me._thumbnail_menu4__content.ontouchend = null;
				me._thumbnail_menu4__content.ontouchmove = null;
			}
			me._thumbnail_menu4__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu4.ggDragLastX;
				var diffY = t[0].clientY - me._thumbnail_menu4.ggDragLastY;
				me._thumbnail_menu4.ggDragLastX = t[0].clientX;
				me._thumbnail_menu4.ggDragLastY = t[0].clientY;
				me._thumbnail_menu4.ggScrollByX(-diffX);
				me._thumbnail_menu4.ggScrollByY(-diffY);
			}
		}
		elHorScrollBg = me._thumbnail_menu4__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 1536px; height: 15px; background-color: rgba(128,128,128,0.392157); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu4__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 1536px; height: 15px; background-color: rgba(192,192,192,0.392157); pointer-events: auto;');
		me._thumbnail_menu4.ggScrollPosX = 0;
		me._thumbnail_menu4.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu4.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu4.ggDragLastX;
				me._thumbnail_menu4.ggDragLastX = e.clientX;
				me._thumbnail_menu4.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu4.ggDragLastX = t[0].clientX;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu4.ggDragLastX;
				me._thumbnail_menu4.ggDragLastX = t[0].clientX;
				me._thumbnail_menu4.ggScrollByX(diffX);
			}
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu4.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu4.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu4.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu4__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu4.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu4.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu4.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu4.ggScrollByXSmooth(20 * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu4__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Thumbnail Menu4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='bottom : 0px;';
		hs+='height : 114px;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		hs+='border-radius:80px; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); overflow-y:visible !important;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu4.ggIsActive=function() {
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
		me._thumbnail_menu4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.ggUserdata.information == "\u0433. \u0423\u0441\u0442\u044c-\u041a\u0443\u0442")
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(me.ggUserdata.information != "\u0433. \u0423\u0441\u0442\u044c-\u041a\u0443\u0442")
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu4.style[domTransition]='';
				if (me._thumbnail_menu4.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu4.style.visibility=(Number(me._thumbnail_menu4.style.opacity)>0||!me._thumbnail_menu4.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu4.ggVisible=true;
				}
				else if (me._thumbnail_menu4.ggCurrentLogicStateVisible == 1) {
					me._thumbnail_menu4.style.visibility="hidden";
					me._thumbnail_menu4.ggVisible=false;
				}
				else {
					me._thumbnail_menu4.style.visibility="hidden";
					me._thumbnail_menu4.ggVisible=false;
				}
			}
		}
		me._thumbnail_menu4.ggUpdatePosition=function (useTransition) {
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
				this.ggContent.style.left = -(Math.round(me._thumbnail_menu4.ggScrollPosX / me._thumbnail_menu4.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > this.clientWidth) {
					me._thumbnail_menu4__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu4__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu4.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu4__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu4__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu4.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu4.ggHorScrollVisible) {
					if (me._thumbnail_menu4.ggVertScrollVisible) {
						me._thumbnail_menu4.ggAvailableWidth = me._thumbnail_menu4.clientWidth - 15;
					} else {
						me._thumbnail_menu4.ggAvailableWidth = me._thumbnail_menu4.clientWidth;
					}
					me._thumbnail_menu4__horScrollBg.style.width = me._thumbnail_menu4.ggAvailableWidth + 'px';
					me._thumbnail_menu4.ggHPercentVisible = me._thumbnail_menu4.ggAvailableWidth / contentWidth;
					if (me._thumbnail_menu4.ggHPercentVisible > 1.0) me._thumbnail_menu4.ggHPercentVisible = 1.0;
					me._thumbnail_menu4.ggScrollWidth = Math.round(me._thumbnail_menu4__horScrollBg.clientWidth * me._thumbnail_menu4.ggHPercentVisible);
					me._thumbnail_menu4__horScrollFg.style.width = me._thumbnail_menu4.ggScrollWidth + 'px';
					me._thumbnail_menu4.ggScrollPosX = me._thumbnail_menu4.ggScrollPosXPercent * me._thumbnail_menu4.ggAvailableWidth;
					me._thumbnail_menu4.ggScrollPosX = Math.min(me._thumbnail_menu4.ggScrollPosX, me._thumbnail_menu4__horScrollBg.clientWidth - me._thumbnail_menu4__horScrollFg.clientWidth);
					me._thumbnail_menu4__horScrollFg.style.left = me._thumbnail_menu4.ggScrollPosX + 'px';
					me._thumbnail_menu4__content.style.left = -(Math.round(me._thumbnail_menu4.ggScrollPosX / me._thumbnail_menu4.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				} else {
					me._thumbnail_menu4.ggScrollPosX = 0;
					me._thumbnail_menu4.ggScrollPosXPercent = 0.0;
					me._thumbnail_menu4__content.style.left = this.ggContentLeftOffset + 'px';
				}
			}
		}
		el=me._thumbnail_cloner_4=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggWidth = 88;
		el.ggHeight = 82;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner_4.callChildLogicBlocks_changenodeid = function(){
			if(me._thumbnail_cloner_4.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_4.ggInstances.length; i++) {
					if (me._thumbnail_cloner_4.ggInstances[i]._checkmark_tick4 && me._thumbnail_cloner_4.ggInstances[i]._checkmark_tick4.logicBlock_visible) {
						me._thumbnail_cloner_4.ggInstances[i]._checkmark_tick4.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner_4.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner_4.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_4.ggInstances.length; i++) {
					if (me._thumbnail_cloner_4.ggInstances[i]._thumbnail_active4 && me._thumbnail_cloner_4.ggInstances[i]._thumbnail_active4.logicBlock_bordercolor) {
						me._thumbnail_cloner_4.ggInstances[i]._thumbnail_active4.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner_4.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner_4.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_4.ggInstances.length; i++) {
					if (me._thumbnail_cloner_4.ggInstances[i]._checkmark_tick4 && me._thumbnail_cloner_4.ggInstances[i]._checkmark_tick4.logicBlock_visible) {
						me._thumbnail_cloner_4.ggInstances[i]._checkmark_tick4.logicBlock_visible();
					}
					if (me._thumbnail_cloner_4.ggInstances[i]._thumbnail_active4 && me._thumbnail_cloner_4.ggInstances[i]._thumbnail_active4.logicBlock_bordercolor) {
						me._thumbnail_cloner_4.ggInstances[i]._thumbnail_active4.logicBlock_bordercolor();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner_4.ggUpdating == true) return;
			me._thumbnail_cloner_4.ggUpdating = true;
			var el=me._thumbnail_cloner_4;
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
			var numRows = el.ggNumRepeat;
			if (numRows < 1) numRows = 1;
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
				parameter.top=(row * me._thumbnail_cloner_4.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner_4.ggWidth) + 'px';
				var inst = new SkinCloner_thumbnail_cloner_4_Class(nodeId, me, el, parameter);
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= numRows) {
					row = 0;
					column++;
				}
				}
			}
			me._thumbnail_cloner_4.callChildLogicBlocks_changenodeid();
			me._thumbnail_cloner_4.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner_4.callChildLogicBlocks_active();
			me._thumbnail_cloner_4.ggUpdating = false;
			player.triggerEvent('clonerchanged');
		}
		el.ggFilter = [];
		el.ggFilter[0] = "г. Усть-Кут";
		el.ggId="Thumbnail Cloner 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 82px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 88px;';
		hs+='pointer-events:none;';
		hs+='border-radius:100px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner_4.ggIsActive=function() {
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
		me._thumbnail_cloner_4.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner_4.childNodes.length; i++) {
				var child=me._thumbnail_cloner_4.childNodes[i];
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
		me._thumbnail_cloner_4.ggUpdatePosition=function (useTransition) {
			var w=player.getViewerSize().width;
			var h=player.getViewerSize().height
			if ((!me._thumbnail_cloner_4.ggLastSize) || (me._thumbnail_cloner_4.ggLastSize.w!=w) || (me._thumbnail_cloner_4.ggLastSize.h!=h)) {
				me._thumbnail_cloner_4.ggLastSize={ w:w, h:h };
				me._thumbnail_cloner_4.ggUpdate();
			}
		}
		me._thumbnail_cloner_4.ggNodeChange=function () {
			me._thumbnail_cloner_4.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu4__content.appendChild(me._thumbnail_cloner_4);
		me._map_bg.appendChild(me._thumbnail_menu4);
		el=me._thumbnail_menu3=document.createElement('div');
		els=me._thumbnail_menu3__content=document.createElement('div');
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 93px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 87px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu3.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu3.ggHorScrollVisible || diffX == 0) return;
			me._thumbnail_menu3.ggScrollPosX = (me._thumbnail_menu3__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu3.ggScrollPosX = Math.max(me._thumbnail_menu3.ggScrollPosX, 0);
			me._thumbnail_menu3.ggScrollPosX = Math.min(me._thumbnail_menu3.ggScrollPosX, me._thumbnail_menu3__horScrollBg.clientWidth - me._thumbnail_menu3__horScrollFg.clientWidth);
			me._thumbnail_menu3__horScrollFg.style.left = me._thumbnail_menu3.ggScrollPosX + 'px';
			me._thumbnail_menu3__content.style.left = -(Math.round(me._thumbnail_menu3.ggScrollPosX / me._thumbnail_menu3.ggHPercentVisible)) + me._thumbnail_menu3.ggContentLeftOffset + 'px';
			me._thumbnail_menu3.ggScrollPosXPercent = (me._thumbnail_menu3__horScrollFg.offsetLeft / me._thumbnail_menu3__horScrollBg.clientWidth);
		}
		me._thumbnail_menu3.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu3.ggHorScrollVisible || diffX == 0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu3.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu3.ggScrollPosX >= me._thumbnail_menu3__horScrollBg.clientWidth - me._thumbnail_menu3__horScrollFg.clientWidth)) {
					me._thumbnail_menu3.ggScrollPosX = Math.min(me._thumbnail_menu3.ggScrollPosX, me._thumbnail_menu3__horScrollBg.clientWidth - me._thumbnail_menu3__horScrollFg.clientWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu3.ggScrollPosX <= 0)) {
					me._thumbnail_menu3.ggScrollPosX = Math.max(me._thumbnail_menu3.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu3__horScrollFg.style.left = me._thumbnail_menu3.ggScrollPosX + 'px';
			me._thumbnail_menu3__content.style.left = -(Math.round(me._thumbnail_menu3.ggScrollPosX / me._thumbnail_menu3.ggHPercentVisible)) + me._thumbnail_menu3.ggContentLeftOffset + 'px';
			me._thumbnail_menu3.ggScrollPosXPercent = (me._thumbnail_menu3__horScrollFg.offsetLeft / me._thumbnail_menu3__horScrollBg.clientWidth);
			}, 10);
		}
		me._thumbnail_menu3.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu3.ggVertScrollVisible || diffY == 0) return;
			me._thumbnail_menu3.ggScrollPosY = (me._thumbnail_menu3__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu3.ggScrollPosY = Math.max(me._thumbnail_menu3.ggScrollPosY, 0);
			me._thumbnail_menu3.ggScrollPosY = Math.min(me._thumbnail_menu3.ggScrollPosY, me._thumbnail_menu3__vertScrollBg.clientHeight - me._thumbnail_menu3__vertScrollFg.clientHeight);
			me._thumbnail_menu3__vertScrollFg.style.top = me._thumbnail_menu3.ggScrollPosY + 'px';
			me._thumbnail_menu3__content.style.top = -(Math.round(me._thumbnail_menu3.ggScrollPosY / me._thumbnail_menu3.ggVPercentVisible)) + me._thumbnail_menu3.ggContentTopOffset + 'px';
			me._thumbnail_menu3.ggScrollPosYPercent = (me._thumbnail_menu3__vertScrollFg.offsetTop / me._thumbnail_menu3__vertScrollBg.clientHeight);
		}
		me._thumbnail_menu3.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu3.ggVertScrollVisible || diffY == 0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu3.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu3.ggScrollPosY >= me._thumbnail_menu3__vertScrollBg.clientHeight - me._thumbnail_menu3__vertScrollFg.clientHeight)) {
					me._thumbnail_menu3.ggScrollPosY = Math.min(me._thumbnail_menu3.ggScrollPosY, me._thumbnail_menu3__vertScrollBg.clientHeight - me._thumbnail_menu3__vertScrollFg.clientHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu3.ggScrollPosY <= 0)) {
					me._thumbnail_menu3.ggScrollPosY = Math.max(me._thumbnail_menu3.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu3__vertScrollFg.style.top = me._thumbnail_menu3.ggScrollPosY + 'px';
			me._thumbnail_menu3__content.style.top = -(Math.round(me._thumbnail_menu3.ggScrollPosY / me._thumbnail_menu3.ggVPercentVisible)) + me._thumbnail_menu3.ggContentTopOffset + 'px';
			me._thumbnail_menu3.ggScrollPosYPercent = (me._thumbnail_menu3__vertScrollFg.offsetTop / me._thumbnail_menu3__vertScrollBg.clientHeight);
			}, 10);
		}
		me._thumbnail_menu3.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu3.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu3.ggHPercentVisible);
					me._thumbnail_menu3.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu3.clientWidth - (me._thumbnail_menu3.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu3.clientWidth - (me._thumbnail_menu3.ggVertScrollVisible ? 15 : 0))) * me._thumbnail_menu3.ggHPercentVisible);
					me._thumbnail_menu3.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu3.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu3.ggVPercentVisible);
					me._thumbnail_menu3.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu3.clientHeight - (me._thumbnail_menu3.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu3.clientHeight - (me._thumbnail_menu3.ggHorScrollVisible ? 15 : 0))) * me._thumbnail_menu3.ggVPercentVisible);
					me._thumbnail_menu3.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu3.ggDragLastX = t[0].clientX;
			me._thumbnail_menu3.ggDragLastY = t[0].clientY;
			me._thumbnail_menu3__content.ontouchend = function() {
				me._thumbnail_menu3__content.ontouchend = null;
				me._thumbnail_menu3__content.ontouchmove = null;
			}
			me._thumbnail_menu3__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu3.ggDragLastX;
				var diffY = t[0].clientY - me._thumbnail_menu3.ggDragLastY;
				me._thumbnail_menu3.ggDragLastX = t[0].clientX;
				me._thumbnail_menu3.ggDragLastY = t[0].clientY;
				me._thumbnail_menu3.ggScrollByX(-diffX);
				me._thumbnail_menu3.ggScrollByY(-diffY);
			}
		}
		elHorScrollBg = me._thumbnail_menu3__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 1536px; height: 15px; background-color: rgba(128,128,128,0.392157); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu3__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 1536px; height: 15px; background-color: rgba(192,192,192,0.392157); pointer-events: auto;');
		me._thumbnail_menu3.ggScrollPosX = 0;
		me._thumbnail_menu3.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu3.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu3.ggDragLastX;
				me._thumbnail_menu3.ggDragLastX = e.clientX;
				me._thumbnail_menu3.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu3.ggDragLastX = t[0].clientX;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu3.ggDragLastX;
				me._thumbnail_menu3.ggDragLastX = t[0].clientX;
				me._thumbnail_menu3.ggScrollByX(diffX);
			}
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu3.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu3.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu3.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu3__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu3.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu3.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu3.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu3.ggScrollByXSmooth(20 * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu3__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Thumbnail Menu3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='bottom : 0px;';
		hs+='height : 114px;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		hs+='border-radius:80px; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu3.ggIsActive=function() {
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
		me._thumbnail_menu3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.ggUserdata.information == "\u0418\u0447\u0451\u0434\u0438\u043d\u0441\u043a\u043e\u0435 \u043c\u0435\u0441\u0442\u043e\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0435")
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(me.ggUserdata.information != "\u0418\u0447\u0451\u0434\u0438\u043d\u0441\u043a\u043e\u0435 \u043c\u0435\u0441\u0442\u043e\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0435")
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu3.style[domTransition]='';
				if (me._thumbnail_menu3.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu3.style.visibility=(Number(me._thumbnail_menu3.style.opacity)>0||!me._thumbnail_menu3.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu3.ggVisible=true;
				}
				else if (me._thumbnail_menu3.ggCurrentLogicStateVisible == 1) {
					me._thumbnail_menu3.style.visibility="hidden";
					me._thumbnail_menu3.ggVisible=false;
				}
				else {
					me._thumbnail_menu3.style.visibility="hidden";
					me._thumbnail_menu3.ggVisible=false;
				}
			}
		}
		me._thumbnail_menu3.ggUpdatePosition=function (useTransition) {
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
				this.ggContent.style.left = -(Math.round(me._thumbnail_menu3.ggScrollPosX / me._thumbnail_menu3.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > this.clientWidth) {
					me._thumbnail_menu3__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu3__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu3.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu3__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu3__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu3.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu3.ggHorScrollVisible) {
					if (me._thumbnail_menu3.ggVertScrollVisible) {
						me._thumbnail_menu3.ggAvailableWidth = me._thumbnail_menu3.clientWidth - 15;
					} else {
						me._thumbnail_menu3.ggAvailableWidth = me._thumbnail_menu3.clientWidth;
					}
					me._thumbnail_menu3__horScrollBg.style.width = me._thumbnail_menu3.ggAvailableWidth + 'px';
					me._thumbnail_menu3.ggHPercentVisible = me._thumbnail_menu3.ggAvailableWidth / contentWidth;
					if (me._thumbnail_menu3.ggHPercentVisible > 1.0) me._thumbnail_menu3.ggHPercentVisible = 1.0;
					me._thumbnail_menu3.ggScrollWidth = Math.round(me._thumbnail_menu3__horScrollBg.clientWidth * me._thumbnail_menu3.ggHPercentVisible);
					me._thumbnail_menu3__horScrollFg.style.width = me._thumbnail_menu3.ggScrollWidth + 'px';
					me._thumbnail_menu3.ggScrollPosX = me._thumbnail_menu3.ggScrollPosXPercent * me._thumbnail_menu3.ggAvailableWidth;
					me._thumbnail_menu3.ggScrollPosX = Math.min(me._thumbnail_menu3.ggScrollPosX, me._thumbnail_menu3__horScrollBg.clientWidth - me._thumbnail_menu3__horScrollFg.clientWidth);
					me._thumbnail_menu3__horScrollFg.style.left = me._thumbnail_menu3.ggScrollPosX + 'px';
					me._thumbnail_menu3__content.style.left = -(Math.round(me._thumbnail_menu3.ggScrollPosX / me._thumbnail_menu3.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				} else {
					me._thumbnail_menu3.ggScrollPosX = 0;
					me._thumbnail_menu3.ggScrollPosXPercent = 0.0;
					me._thumbnail_menu3__content.style.left = this.ggContentLeftOffset + 'px';
				}
			}
		}
		el=me._thumbnail_cloner_3=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggWidth = 88;
		el.ggHeight = 82;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner_3.callChildLogicBlocks_changenodeid = function(){
			if(me._thumbnail_cloner_3.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_3.ggInstances.length; i++) {
					if (me._thumbnail_cloner_3.ggInstances[i]._checkmark_tick3 && me._thumbnail_cloner_3.ggInstances[i]._checkmark_tick3.logicBlock_visible) {
						me._thumbnail_cloner_3.ggInstances[i]._checkmark_tick3.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner_3.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner_3.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_3.ggInstances.length; i++) {
					if (me._thumbnail_cloner_3.ggInstances[i]._thumbnail_active3 && me._thumbnail_cloner_3.ggInstances[i]._thumbnail_active3.logicBlock_bordercolor) {
						me._thumbnail_cloner_3.ggInstances[i]._thumbnail_active3.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner_3.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner_3.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_3.ggInstances.length; i++) {
					if (me._thumbnail_cloner_3.ggInstances[i]._checkmark_tick3 && me._thumbnail_cloner_3.ggInstances[i]._checkmark_tick3.logicBlock_visible) {
						me._thumbnail_cloner_3.ggInstances[i]._checkmark_tick3.logicBlock_visible();
					}
					if (me._thumbnail_cloner_3.ggInstances[i]._thumbnail_active3 && me._thumbnail_cloner_3.ggInstances[i]._thumbnail_active3.logicBlock_bordercolor) {
						me._thumbnail_cloner_3.ggInstances[i]._thumbnail_active3.logicBlock_bordercolor();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner_3.ggUpdating == true) return;
			me._thumbnail_cloner_3.ggUpdating = true;
			var el=me._thumbnail_cloner_3;
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
			var numRows = el.ggNumRepeat;
			if (numRows < 1) numRows = 1;
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
				parameter.top=(row * me._thumbnail_cloner_3.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner_3.ggWidth) + 'px';
				var inst = new SkinCloner_thumbnail_cloner_3_Class(nodeId, me, el, parameter);
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= numRows) {
					row = 0;
					column++;
				}
				}
			}
			me._thumbnail_cloner_3.callChildLogicBlocks_changenodeid();
			me._thumbnail_cloner_3.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner_3.callChildLogicBlocks_active();
			me._thumbnail_cloner_3.ggUpdating = false;
			player.triggerEvent('clonerchanged');
		}
		el.ggFilter = [];
		el.ggFilter[0] = "Ичёдинское месторождение";
		el.ggId="Thumbnail Cloner 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 82px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 88px;';
		hs+='pointer-events:none;';
		hs+='border-radius:100px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner_3.ggIsActive=function() {
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
		me._thumbnail_cloner_3.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner_3.childNodes.length; i++) {
				var child=me._thumbnail_cloner_3.childNodes[i];
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
		me._thumbnail_cloner_3.ggUpdatePosition=function (useTransition) {
			var w=player.getViewerSize().width;
			var h=player.getViewerSize().height
			if ((!me._thumbnail_cloner_3.ggLastSize) || (me._thumbnail_cloner_3.ggLastSize.w!=w) || (me._thumbnail_cloner_3.ggLastSize.h!=h)) {
				me._thumbnail_cloner_3.ggLastSize={ w:w, h:h };
				me._thumbnail_cloner_3.ggUpdate();
			}
		}
		me._thumbnail_cloner_3.ggNodeChange=function () {
			me._thumbnail_cloner_3.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu3__content.appendChild(me._thumbnail_cloner_3);
		me._map_bg.appendChild(me._thumbnail_menu3);
		el=me._thumbnail_menu2=document.createElement('div');
		els=me._thumbnail_menu2__content=document.createElement('div');
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 93px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 87px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu2.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu2.ggHorScrollVisible || diffX == 0) return;
			me._thumbnail_menu2.ggScrollPosX = (me._thumbnail_menu2__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu2.ggScrollPosX = Math.max(me._thumbnail_menu2.ggScrollPosX, 0);
			me._thumbnail_menu2.ggScrollPosX = Math.min(me._thumbnail_menu2.ggScrollPosX, me._thumbnail_menu2__horScrollBg.clientWidth - me._thumbnail_menu2__horScrollFg.clientWidth);
			me._thumbnail_menu2__horScrollFg.style.left = me._thumbnail_menu2.ggScrollPosX + 'px';
			me._thumbnail_menu2__content.style.left = -(Math.round(me._thumbnail_menu2.ggScrollPosX / me._thumbnail_menu2.ggHPercentVisible)) + me._thumbnail_menu2.ggContentLeftOffset + 'px';
			me._thumbnail_menu2.ggScrollPosXPercent = (me._thumbnail_menu2__horScrollFg.offsetLeft / me._thumbnail_menu2__horScrollBg.clientWidth);
		}
		me._thumbnail_menu2.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu2.ggHorScrollVisible || diffX == 0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu2.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu2.ggScrollPosX >= me._thumbnail_menu2__horScrollBg.clientWidth - me._thumbnail_menu2__horScrollFg.clientWidth)) {
					me._thumbnail_menu2.ggScrollPosX = Math.min(me._thumbnail_menu2.ggScrollPosX, me._thumbnail_menu2__horScrollBg.clientWidth - me._thumbnail_menu2__horScrollFg.clientWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu2.ggScrollPosX <= 0)) {
					me._thumbnail_menu2.ggScrollPosX = Math.max(me._thumbnail_menu2.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu2__horScrollFg.style.left = me._thumbnail_menu2.ggScrollPosX + 'px';
			me._thumbnail_menu2__content.style.left = -(Math.round(me._thumbnail_menu2.ggScrollPosX / me._thumbnail_menu2.ggHPercentVisible)) + me._thumbnail_menu2.ggContentLeftOffset + 'px';
			me._thumbnail_menu2.ggScrollPosXPercent = (me._thumbnail_menu2__horScrollFg.offsetLeft / me._thumbnail_menu2__horScrollBg.clientWidth);
			}, 10);
		}
		me._thumbnail_menu2.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu2.ggVertScrollVisible || diffY == 0) return;
			me._thumbnail_menu2.ggScrollPosY = (me._thumbnail_menu2__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu2.ggScrollPosY = Math.max(me._thumbnail_menu2.ggScrollPosY, 0);
			me._thumbnail_menu2.ggScrollPosY = Math.min(me._thumbnail_menu2.ggScrollPosY, me._thumbnail_menu2__vertScrollBg.clientHeight - me._thumbnail_menu2__vertScrollFg.clientHeight);
			me._thumbnail_menu2__vertScrollFg.style.top = me._thumbnail_menu2.ggScrollPosY + 'px';
			me._thumbnail_menu2__content.style.top = -(Math.round(me._thumbnail_menu2.ggScrollPosY / me._thumbnail_menu2.ggVPercentVisible)) + me._thumbnail_menu2.ggContentTopOffset + 'px';
			me._thumbnail_menu2.ggScrollPosYPercent = (me._thumbnail_menu2__vertScrollFg.offsetTop / me._thumbnail_menu2__vertScrollBg.clientHeight);
		}
		me._thumbnail_menu2.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu2.ggVertScrollVisible || diffY == 0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu2.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu2.ggScrollPosY >= me._thumbnail_menu2__vertScrollBg.clientHeight - me._thumbnail_menu2__vertScrollFg.clientHeight)) {
					me._thumbnail_menu2.ggScrollPosY = Math.min(me._thumbnail_menu2.ggScrollPosY, me._thumbnail_menu2__vertScrollBg.clientHeight - me._thumbnail_menu2__vertScrollFg.clientHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu2.ggScrollPosY <= 0)) {
					me._thumbnail_menu2.ggScrollPosY = Math.max(me._thumbnail_menu2.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu2__vertScrollFg.style.top = me._thumbnail_menu2.ggScrollPosY + 'px';
			me._thumbnail_menu2__content.style.top = -(Math.round(me._thumbnail_menu2.ggScrollPosY / me._thumbnail_menu2.ggVPercentVisible)) + me._thumbnail_menu2.ggContentTopOffset + 'px';
			me._thumbnail_menu2.ggScrollPosYPercent = (me._thumbnail_menu2__vertScrollFg.offsetTop / me._thumbnail_menu2__vertScrollBg.clientHeight);
			}, 10);
		}
		me._thumbnail_menu2.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu2.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu2.ggHPercentVisible);
					me._thumbnail_menu2.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu2.clientWidth - (me._thumbnail_menu2.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu2.clientWidth - (me._thumbnail_menu2.ggVertScrollVisible ? 15 : 0))) * me._thumbnail_menu2.ggHPercentVisible);
					me._thumbnail_menu2.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu2.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu2.ggVPercentVisible);
					me._thumbnail_menu2.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu2.clientHeight - (me._thumbnail_menu2.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu2.clientHeight - (me._thumbnail_menu2.ggHorScrollVisible ? 15 : 0))) * me._thumbnail_menu2.ggVPercentVisible);
					me._thumbnail_menu2.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu2.ggDragLastX = t[0].clientX;
			me._thumbnail_menu2.ggDragLastY = t[0].clientY;
			me._thumbnail_menu2__content.ontouchend = function() {
				me._thumbnail_menu2__content.ontouchend = null;
				me._thumbnail_menu2__content.ontouchmove = null;
			}
			me._thumbnail_menu2__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu2.ggDragLastX;
				var diffY = t[0].clientY - me._thumbnail_menu2.ggDragLastY;
				me._thumbnail_menu2.ggDragLastX = t[0].clientX;
				me._thumbnail_menu2.ggDragLastY = t[0].clientY;
				me._thumbnail_menu2.ggScrollByX(-diffX);
				me._thumbnail_menu2.ggScrollByY(-diffY);
			}
		}
		elHorScrollBg = me._thumbnail_menu2__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 1536px; height: 15px; background-color: rgba(128,128,128,0.392157); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu2__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 1536px; height: 15px; background-color: rgba(192,192,192,0.392157); pointer-events: auto;');
		me._thumbnail_menu2.ggScrollPosX = 0;
		me._thumbnail_menu2.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu2.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu2.ggDragLastX;
				me._thumbnail_menu2.ggDragLastX = e.clientX;
				me._thumbnail_menu2.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu2.ggDragLastX = t[0].clientX;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu2.ggDragLastX;
				me._thumbnail_menu2.ggDragLastX = t[0].clientX;
				me._thumbnail_menu2.ggScrollByX(diffX);
			}
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu2.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu2.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu2.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu2__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu2.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu2.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu2.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu2.ggScrollByXSmooth(20 * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu2__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Thumbnail Menu2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='bottom : 0px;';
		hs+='height : 114px;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		hs+='border-radius:80px; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu2.ggIsActive=function() {
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
		me._thumbnail_menu2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.ggUserdata.information == "\u041c\u0430\u0440\u043a\u043e\u0432\u0441\u043a\u043e\u0435 \u043c\u0435\u0441\u0442\u043e\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0435")
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(me.ggUserdata.information != "\u041c\u0430\u0440\u043a\u043e\u0432\u0441\u043a\u043e\u0435 \u043c\u0435\u0441\u0442\u043e\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0435")
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu2.style[domTransition]='';
				if (me._thumbnail_menu2.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu2.style.visibility=(Number(me._thumbnail_menu2.style.opacity)>0||!me._thumbnail_menu2.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu2.ggVisible=true;
				}
				else if (me._thumbnail_menu2.ggCurrentLogicStateVisible == 1) {
					me._thumbnail_menu2.style.visibility="hidden";
					me._thumbnail_menu2.ggVisible=false;
				}
				else {
					me._thumbnail_menu2.style.visibility="hidden";
					me._thumbnail_menu2.ggVisible=false;
				}
			}
		}
		me._thumbnail_menu2.ggUpdatePosition=function (useTransition) {
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
				this.ggContent.style.left = -(Math.round(me._thumbnail_menu2.ggScrollPosX / me._thumbnail_menu2.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > this.clientWidth) {
					me._thumbnail_menu2__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu2__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu2.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu2__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu2__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu2.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu2.ggHorScrollVisible) {
					if (me._thumbnail_menu2.ggVertScrollVisible) {
						me._thumbnail_menu2.ggAvailableWidth = me._thumbnail_menu2.clientWidth - 15;
					} else {
						me._thumbnail_menu2.ggAvailableWidth = me._thumbnail_menu2.clientWidth;
					}
					me._thumbnail_menu2__horScrollBg.style.width = me._thumbnail_menu2.ggAvailableWidth + 'px';
					me._thumbnail_menu2.ggHPercentVisible = me._thumbnail_menu2.ggAvailableWidth / contentWidth;
					if (me._thumbnail_menu2.ggHPercentVisible > 1.0) me._thumbnail_menu2.ggHPercentVisible = 1.0;
					me._thumbnail_menu2.ggScrollWidth = Math.round(me._thumbnail_menu2__horScrollBg.clientWidth * me._thumbnail_menu2.ggHPercentVisible);
					me._thumbnail_menu2__horScrollFg.style.width = me._thumbnail_menu2.ggScrollWidth + 'px';
					me._thumbnail_menu2.ggScrollPosX = me._thumbnail_menu2.ggScrollPosXPercent * me._thumbnail_menu2.ggAvailableWidth;
					me._thumbnail_menu2.ggScrollPosX = Math.min(me._thumbnail_menu2.ggScrollPosX, me._thumbnail_menu2__horScrollBg.clientWidth - me._thumbnail_menu2__horScrollFg.clientWidth);
					me._thumbnail_menu2__horScrollFg.style.left = me._thumbnail_menu2.ggScrollPosX + 'px';
					me._thumbnail_menu2__content.style.left = -(Math.round(me._thumbnail_menu2.ggScrollPosX / me._thumbnail_menu2.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				} else {
					me._thumbnail_menu2.ggScrollPosX = 0;
					me._thumbnail_menu2.ggScrollPosXPercent = 0.0;
					me._thumbnail_menu2__content.style.left = this.ggContentLeftOffset + 'px';
				}
			}
		}
		el=me._thumbnail_cloner_2=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggWidth = 88;
		el.ggHeight = 82;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner_2.callChildLogicBlocks_changenodeid = function(){
			if(me._thumbnail_cloner_2.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_2.ggInstances.length; i++) {
					if (me._thumbnail_cloner_2.ggInstances[i]._checkmark_tick2 && me._thumbnail_cloner_2.ggInstances[i]._checkmark_tick2.logicBlock_visible) {
						me._thumbnail_cloner_2.ggInstances[i]._checkmark_tick2.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner_2.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner_2.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_2.ggInstances.length; i++) {
					if (me._thumbnail_cloner_2.ggInstances[i]._thumbnail_active2 && me._thumbnail_cloner_2.ggInstances[i]._thumbnail_active2.logicBlock_bordercolor) {
						me._thumbnail_cloner_2.ggInstances[i]._thumbnail_active2.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner_2.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner_2.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_2.ggInstances.length; i++) {
					if (me._thumbnail_cloner_2.ggInstances[i]._checkmark_tick2 && me._thumbnail_cloner_2.ggInstances[i]._checkmark_tick2.logicBlock_visible) {
						me._thumbnail_cloner_2.ggInstances[i]._checkmark_tick2.logicBlock_visible();
					}
					if (me._thumbnail_cloner_2.ggInstances[i]._thumbnail_active2 && me._thumbnail_cloner_2.ggInstances[i]._thumbnail_active2.logicBlock_bordercolor) {
						me._thumbnail_cloner_2.ggInstances[i]._thumbnail_active2.logicBlock_bordercolor();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner_2.ggUpdating == true) return;
			me._thumbnail_cloner_2.ggUpdating = true;
			var el=me._thumbnail_cloner_2;
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
			var numRows = el.ggNumRepeat;
			if (numRows < 1) numRows = 1;
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
				parameter.top=(row * me._thumbnail_cloner_2.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner_2.ggWidth) + 'px';
				var inst = new SkinCloner_thumbnail_cloner_2_Class(nodeId, me, el, parameter);
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= numRows) {
					row = 0;
					column++;
				}
				}
			}
			me._thumbnail_cloner_2.callChildLogicBlocks_changenodeid();
			me._thumbnail_cloner_2.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner_2.callChildLogicBlocks_active();
			me._thumbnail_cloner_2.ggUpdating = false;
			player.triggerEvent('clonerchanged');
		}
		el.ggFilter = [];
		el.ggFilter[0] = "Марковское месторождение";
		el.ggId="Thumbnail Cloner 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 82px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 88px;';
		hs+='pointer-events:none;';
		hs+='border-radius:100px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner_2.ggIsActive=function() {
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
		me._thumbnail_cloner_2.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner_2.childNodes.length; i++) {
				var child=me._thumbnail_cloner_2.childNodes[i];
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
		me._thumbnail_cloner_2.ggUpdatePosition=function (useTransition) {
			var w=player.getViewerSize().width;
			var h=player.getViewerSize().height
			if ((!me._thumbnail_cloner_2.ggLastSize) || (me._thumbnail_cloner_2.ggLastSize.w!=w) || (me._thumbnail_cloner_2.ggLastSize.h!=h)) {
				me._thumbnail_cloner_2.ggLastSize={ w:w, h:h };
				me._thumbnail_cloner_2.ggUpdate();
			}
		}
		me._thumbnail_cloner_2.ggNodeChange=function () {
			me._thumbnail_cloner_2.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu2__content.appendChild(me._thumbnail_cloner_2);
		me._map_bg.appendChild(me._thumbnail_menu2);
		el=me._thumbnail_menu1=document.createElement('div');
		els=me._thumbnail_menu1__content=document.createElement('div');
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 93px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 87px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu1.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu1.ggHorScrollVisible || diffX == 0) return;
			me._thumbnail_menu1.ggScrollPosX = (me._thumbnail_menu1__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu1.ggScrollPosX = Math.max(me._thumbnail_menu1.ggScrollPosX, 0);
			me._thumbnail_menu1.ggScrollPosX = Math.min(me._thumbnail_menu1.ggScrollPosX, me._thumbnail_menu1__horScrollBg.clientWidth - me._thumbnail_menu1__horScrollFg.clientWidth);
			me._thumbnail_menu1__horScrollFg.style.left = me._thumbnail_menu1.ggScrollPosX + 'px';
			me._thumbnail_menu1__content.style.left = -(Math.round(me._thumbnail_menu1.ggScrollPosX / me._thumbnail_menu1.ggHPercentVisible)) + me._thumbnail_menu1.ggContentLeftOffset + 'px';
			me._thumbnail_menu1.ggScrollPosXPercent = (me._thumbnail_menu1__horScrollFg.offsetLeft / me._thumbnail_menu1__horScrollBg.clientWidth);
		}
		me._thumbnail_menu1.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu1.ggHorScrollVisible || diffX == 0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu1.ggScrollPosX >= me._thumbnail_menu1__horScrollBg.clientWidth - me._thumbnail_menu1__horScrollFg.clientWidth)) {
					me._thumbnail_menu1.ggScrollPosX = Math.min(me._thumbnail_menu1.ggScrollPosX, me._thumbnail_menu1__horScrollBg.clientWidth - me._thumbnail_menu1__horScrollFg.clientWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu1.ggScrollPosX <= 0)) {
					me._thumbnail_menu1.ggScrollPosX = Math.max(me._thumbnail_menu1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu1__horScrollFg.style.left = me._thumbnail_menu1.ggScrollPosX + 'px';
			me._thumbnail_menu1__content.style.left = -(Math.round(me._thumbnail_menu1.ggScrollPosX / me._thumbnail_menu1.ggHPercentVisible)) + me._thumbnail_menu1.ggContentLeftOffset + 'px';
			me._thumbnail_menu1.ggScrollPosXPercent = (me._thumbnail_menu1__horScrollFg.offsetLeft / me._thumbnail_menu1__horScrollBg.clientWidth);
			}, 10);
		}
		me._thumbnail_menu1.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu1.ggVertScrollVisible || diffY == 0) return;
			me._thumbnail_menu1.ggScrollPosY = (me._thumbnail_menu1__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu1.ggScrollPosY = Math.max(me._thumbnail_menu1.ggScrollPosY, 0);
			me._thumbnail_menu1.ggScrollPosY = Math.min(me._thumbnail_menu1.ggScrollPosY, me._thumbnail_menu1__vertScrollBg.clientHeight - me._thumbnail_menu1__vertScrollFg.clientHeight);
			me._thumbnail_menu1__vertScrollFg.style.top = me._thumbnail_menu1.ggScrollPosY + 'px';
			me._thumbnail_menu1__content.style.top = -(Math.round(me._thumbnail_menu1.ggScrollPosY / me._thumbnail_menu1.ggVPercentVisible)) + me._thumbnail_menu1.ggContentTopOffset + 'px';
			me._thumbnail_menu1.ggScrollPosYPercent = (me._thumbnail_menu1__vertScrollFg.offsetTop / me._thumbnail_menu1__vertScrollBg.clientHeight);
		}
		me._thumbnail_menu1.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu1.ggVertScrollVisible || diffY == 0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu1.ggScrollPosY >= me._thumbnail_menu1__vertScrollBg.clientHeight - me._thumbnail_menu1__vertScrollFg.clientHeight)) {
					me._thumbnail_menu1.ggScrollPosY = Math.min(me._thumbnail_menu1.ggScrollPosY, me._thumbnail_menu1__vertScrollBg.clientHeight - me._thumbnail_menu1__vertScrollFg.clientHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu1.ggScrollPosY <= 0)) {
					me._thumbnail_menu1.ggScrollPosY = Math.max(me._thumbnail_menu1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu1__vertScrollFg.style.top = me._thumbnail_menu1.ggScrollPosY + 'px';
			me._thumbnail_menu1__content.style.top = -(Math.round(me._thumbnail_menu1.ggScrollPosY / me._thumbnail_menu1.ggVPercentVisible)) + me._thumbnail_menu1.ggContentTopOffset + 'px';
			me._thumbnail_menu1.ggScrollPosYPercent = (me._thumbnail_menu1__vertScrollFg.offsetTop / me._thumbnail_menu1__vertScrollBg.clientHeight);
			}, 10);
		}
		me._thumbnail_menu1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu1.ggHPercentVisible);
					me._thumbnail_menu1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu1.clientWidth - (me._thumbnail_menu1.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu1.clientWidth - (me._thumbnail_menu1.ggVertScrollVisible ? 15 : 0))) * me._thumbnail_menu1.ggHPercentVisible);
					me._thumbnail_menu1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu1.ggVPercentVisible);
					me._thumbnail_menu1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu1.clientHeight - (me._thumbnail_menu1.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu1.clientHeight - (me._thumbnail_menu1.ggHorScrollVisible ? 15 : 0))) * me._thumbnail_menu1.ggVPercentVisible);
					me._thumbnail_menu1.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu1.ggDragLastX = t[0].clientX;
			me._thumbnail_menu1.ggDragLastY = t[0].clientY;
			me._thumbnail_menu1__content.ontouchend = function() {
				me._thumbnail_menu1__content.ontouchend = null;
				me._thumbnail_menu1__content.ontouchmove = null;
			}
			me._thumbnail_menu1__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu1.ggDragLastX;
				var diffY = t[0].clientY - me._thumbnail_menu1.ggDragLastY;
				me._thumbnail_menu1.ggDragLastX = t[0].clientX;
				me._thumbnail_menu1.ggDragLastY = t[0].clientY;
				me._thumbnail_menu1.ggScrollByX(-diffX);
				me._thumbnail_menu1.ggScrollByY(-diffY);
			}
		}
		elHorScrollBg = me._thumbnail_menu1__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 1536px; height: 15px; background-color: rgba(128,128,128,0.392157); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu1__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 1536px; height: 15px; background-color: rgba(192,192,192,0.392157); pointer-events: auto;');
		me._thumbnail_menu1.ggScrollPosX = 0;
		me._thumbnail_menu1.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu1.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu1.ggDragLastX;
				me._thumbnail_menu1.ggDragLastX = e.clientX;
				me._thumbnail_menu1.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu1.ggDragLastX = t[0].clientX;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu1.ggDragLastX;
				me._thumbnail_menu1.ggDragLastX = t[0].clientX;
				me._thumbnail_menu1.ggScrollByX(diffX);
			}
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu1.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu1.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu1.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu1__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu1.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu1.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu1.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu1.ggScrollByXSmooth(20 * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Thumbnail Menu1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='bottom : 0px;';
		hs+='height : 114px;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		hs+='border-radius:80px; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu1.ggIsActive=function() {
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
		me._thumbnail_menu1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.ggUserdata.information == "\u042f\u0440\u0430\u043a\u0442\u0438\u043d\u0441\u043a\u043e\u0435 \u043c\u0435\u0441\u0442\u043e\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0435")
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(me.ggUserdata.information != "\u042f\u0440\u0430\u043a\u0442\u0438\u043d\u0441\u043a\u043e\u0435 \u043c\u0435\u0441\u0442\u043e\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0435")
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu1.style[domTransition]='';
				if (me._thumbnail_menu1.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu1.style.visibility=(Number(me._thumbnail_menu1.style.opacity)>0||!me._thumbnail_menu1.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu1.ggVisible=true;
				}
				else if (me._thumbnail_menu1.ggCurrentLogicStateVisible == 1) {
					me._thumbnail_menu1.style.visibility="hidden";
					me._thumbnail_menu1.ggVisible=false;
				}
				else {
					me._thumbnail_menu1.style.visibility="hidden";
					me._thumbnail_menu1.ggVisible=false;
				}
			}
		}
		me._thumbnail_menu1.ggUpdatePosition=function (useTransition) {
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
				this.ggContent.style.left = -(Math.round(me._thumbnail_menu1.ggScrollPosX / me._thumbnail_menu1.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > this.clientWidth) {
					me._thumbnail_menu1__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu1__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu1.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu1__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu1__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu1.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu1.ggHorScrollVisible) {
					if (me._thumbnail_menu1.ggVertScrollVisible) {
						me._thumbnail_menu1.ggAvailableWidth = me._thumbnail_menu1.clientWidth - 15;
					} else {
						me._thumbnail_menu1.ggAvailableWidth = me._thumbnail_menu1.clientWidth;
					}
					me._thumbnail_menu1__horScrollBg.style.width = me._thumbnail_menu1.ggAvailableWidth + 'px';
					me._thumbnail_menu1.ggHPercentVisible = me._thumbnail_menu1.ggAvailableWidth / contentWidth;
					if (me._thumbnail_menu1.ggHPercentVisible > 1.0) me._thumbnail_menu1.ggHPercentVisible = 1.0;
					me._thumbnail_menu1.ggScrollWidth = Math.round(me._thumbnail_menu1__horScrollBg.clientWidth * me._thumbnail_menu1.ggHPercentVisible);
					me._thumbnail_menu1__horScrollFg.style.width = me._thumbnail_menu1.ggScrollWidth + 'px';
					me._thumbnail_menu1.ggScrollPosX = me._thumbnail_menu1.ggScrollPosXPercent * me._thumbnail_menu1.ggAvailableWidth;
					me._thumbnail_menu1.ggScrollPosX = Math.min(me._thumbnail_menu1.ggScrollPosX, me._thumbnail_menu1__horScrollBg.clientWidth - me._thumbnail_menu1__horScrollFg.clientWidth);
					me._thumbnail_menu1__horScrollFg.style.left = me._thumbnail_menu1.ggScrollPosX + 'px';
					me._thumbnail_menu1__content.style.left = -(Math.round(me._thumbnail_menu1.ggScrollPosX / me._thumbnail_menu1.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				} else {
					me._thumbnail_menu1.ggScrollPosX = 0;
					me._thumbnail_menu1.ggScrollPosXPercent = 0.0;
					me._thumbnail_menu1__content.style.left = this.ggContentLeftOffset + 'px';
				}
			}
		}
		el=me._thumbnail_cloner_1=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggWidth = 88;
		el.ggHeight = 82;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner_1.callChildLogicBlocks_changenodeid = function(){
			if(me._thumbnail_cloner_1.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_1.ggInstances.length; i++) {
					if (me._thumbnail_cloner_1.ggInstances[i]._checkmark_tick1 && me._thumbnail_cloner_1.ggInstances[i]._checkmark_tick1.logicBlock_visible) {
						me._thumbnail_cloner_1.ggInstances[i]._checkmark_tick1.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner_1.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner_1.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_1.ggInstances.length; i++) {
					if (me._thumbnail_cloner_1.ggInstances[i]._thumbnail_active1 && me._thumbnail_cloner_1.ggInstances[i]._thumbnail_active1.logicBlock_bordercolor) {
						me._thumbnail_cloner_1.ggInstances[i]._thumbnail_active1.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner_1.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner_1.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_1.ggInstances.length; i++) {
					if (me._thumbnail_cloner_1.ggInstances[i]._checkmark_tick1 && me._thumbnail_cloner_1.ggInstances[i]._checkmark_tick1.logicBlock_visible) {
						me._thumbnail_cloner_1.ggInstances[i]._checkmark_tick1.logicBlock_visible();
					}
					if (me._thumbnail_cloner_1.ggInstances[i]._thumbnail_active1 && me._thumbnail_cloner_1.ggInstances[i]._thumbnail_active1.logicBlock_bordercolor) {
						me._thumbnail_cloner_1.ggInstances[i]._thumbnail_active1.logicBlock_bordercolor();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner_1.ggUpdating == true) return;
			me._thumbnail_cloner_1.ggUpdating = true;
			var el=me._thumbnail_cloner_1;
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
			var numRows = el.ggNumRepeat;
			if (numRows < 1) numRows = 1;
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
				parameter.top=(row * me._thumbnail_cloner_1.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner_1.ggWidth) + 'px';
				var inst = new SkinCloner_thumbnail_cloner_1_Class(nodeId, me, el, parameter);
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= numRows) {
					row = 0;
					column++;
				}
				}
			}
			me._thumbnail_cloner_1.callChildLogicBlocks_changenodeid();
			me._thumbnail_cloner_1.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner_1.callChildLogicBlocks_active();
			me._thumbnail_cloner_1.ggUpdating = false;
			player.triggerEvent('clonerchanged');
		}
		el.ggFilter = [];
		el.ggFilter[0] = "Ярактинское месторождение";
		el.ggId="Thumbnail Cloner 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 82px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 88px;';
		hs+='pointer-events:none;';
		hs+='border-radius:100px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner_1.ggIsActive=function() {
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
		me._thumbnail_cloner_1.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner_1.childNodes.length; i++) {
				var child=me._thumbnail_cloner_1.childNodes[i];
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
		me._thumbnail_cloner_1.ggUpdatePosition=function (useTransition) {
			var w=player.getViewerSize().width;
			var h=player.getViewerSize().height
			if ((!me._thumbnail_cloner_1.ggLastSize) || (me._thumbnail_cloner_1.ggLastSize.w!=w) || (me._thumbnail_cloner_1.ggLastSize.h!=h)) {
				me._thumbnail_cloner_1.ggLastSize={ w:w, h:h };
				me._thumbnail_cloner_1.ggUpdate();
			}
		}
		me._thumbnail_cloner_1.ggNodeChange=function () {
			me._thumbnail_cloner_1.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu1__content.appendChild(me._thumbnail_cloner_1);
		me._map_bg.appendChild(me._thumbnail_menu1);
		el=me._thumbnail_menu0=document.createElement('div');
		els=me._thumbnail_menu0__content=document.createElement('div');
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 93px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 87px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu0.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu0.ggHorScrollVisible || diffX == 0) return;
			me._thumbnail_menu0.ggScrollPosX = (me._thumbnail_menu0__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu0.ggScrollPosX = Math.max(me._thumbnail_menu0.ggScrollPosX, 0);
			me._thumbnail_menu0.ggScrollPosX = Math.min(me._thumbnail_menu0.ggScrollPosX, me._thumbnail_menu0__horScrollBg.clientWidth - me._thumbnail_menu0__horScrollFg.clientWidth);
			me._thumbnail_menu0__horScrollFg.style.left = me._thumbnail_menu0.ggScrollPosX + 'px';
			me._thumbnail_menu0__content.style.left = -(Math.round(me._thumbnail_menu0.ggScrollPosX / me._thumbnail_menu0.ggHPercentVisible)) + me._thumbnail_menu0.ggContentLeftOffset + 'px';
			me._thumbnail_menu0.ggScrollPosXPercent = (me._thumbnail_menu0__horScrollFg.offsetLeft / me._thumbnail_menu0__horScrollBg.clientWidth);
		}
		me._thumbnail_menu0.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu0.ggHorScrollVisible || diffX == 0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu0.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu0.ggScrollPosX >= me._thumbnail_menu0__horScrollBg.clientWidth - me._thumbnail_menu0__horScrollFg.clientWidth)) {
					me._thumbnail_menu0.ggScrollPosX = Math.min(me._thumbnail_menu0.ggScrollPosX, me._thumbnail_menu0__horScrollBg.clientWidth - me._thumbnail_menu0__horScrollFg.clientWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu0.ggScrollPosX <= 0)) {
					me._thumbnail_menu0.ggScrollPosX = Math.max(me._thumbnail_menu0.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu0__horScrollFg.style.left = me._thumbnail_menu0.ggScrollPosX + 'px';
			me._thumbnail_menu0__content.style.left = -(Math.round(me._thumbnail_menu0.ggScrollPosX / me._thumbnail_menu0.ggHPercentVisible)) + me._thumbnail_menu0.ggContentLeftOffset + 'px';
			me._thumbnail_menu0.ggScrollPosXPercent = (me._thumbnail_menu0__horScrollFg.offsetLeft / me._thumbnail_menu0__horScrollBg.clientWidth);
			}, 10);
		}
		me._thumbnail_menu0.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu0.ggVertScrollVisible || diffY == 0) return;
			me._thumbnail_menu0.ggScrollPosY = (me._thumbnail_menu0__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu0.ggScrollPosY = Math.max(me._thumbnail_menu0.ggScrollPosY, 0);
			me._thumbnail_menu0.ggScrollPosY = Math.min(me._thumbnail_menu0.ggScrollPosY, me._thumbnail_menu0__vertScrollBg.clientHeight - me._thumbnail_menu0__vertScrollFg.clientHeight);
			me._thumbnail_menu0__vertScrollFg.style.top = me._thumbnail_menu0.ggScrollPosY + 'px';
			me._thumbnail_menu0__content.style.top = -(Math.round(me._thumbnail_menu0.ggScrollPosY / me._thumbnail_menu0.ggVPercentVisible)) + me._thumbnail_menu0.ggContentTopOffset + 'px';
			me._thumbnail_menu0.ggScrollPosYPercent = (me._thumbnail_menu0__vertScrollFg.offsetTop / me._thumbnail_menu0__vertScrollBg.clientHeight);
		}
		me._thumbnail_menu0.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu0.ggVertScrollVisible || diffY == 0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu0.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu0.ggScrollPosY >= me._thumbnail_menu0__vertScrollBg.clientHeight - me._thumbnail_menu0__vertScrollFg.clientHeight)) {
					me._thumbnail_menu0.ggScrollPosY = Math.min(me._thumbnail_menu0.ggScrollPosY, me._thumbnail_menu0__vertScrollBg.clientHeight - me._thumbnail_menu0__vertScrollFg.clientHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu0.ggScrollPosY <= 0)) {
					me._thumbnail_menu0.ggScrollPosY = Math.max(me._thumbnail_menu0.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu0__vertScrollFg.style.top = me._thumbnail_menu0.ggScrollPosY + 'px';
			me._thumbnail_menu0__content.style.top = -(Math.round(me._thumbnail_menu0.ggScrollPosY / me._thumbnail_menu0.ggVPercentVisible)) + me._thumbnail_menu0.ggContentTopOffset + 'px';
			me._thumbnail_menu0.ggScrollPosYPercent = (me._thumbnail_menu0__vertScrollFg.offsetTop / me._thumbnail_menu0__vertScrollBg.clientHeight);
			}, 10);
		}
		me._thumbnail_menu0.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu0.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu0.ggHPercentVisible);
					me._thumbnail_menu0.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu0.clientWidth - (me._thumbnail_menu0.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu0.clientWidth - (me._thumbnail_menu0.ggVertScrollVisible ? 15 : 0))) * me._thumbnail_menu0.ggHPercentVisible);
					me._thumbnail_menu0.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu0.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu0.ggVPercentVisible);
					me._thumbnail_menu0.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu0.clientHeight - (me._thumbnail_menu0.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu0.clientHeight - (me._thumbnail_menu0.ggHorScrollVisible ? 15 : 0))) * me._thumbnail_menu0.ggVPercentVisible);
					me._thumbnail_menu0.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu0.ggDragLastX = t[0].clientX;
			me._thumbnail_menu0.ggDragLastY = t[0].clientY;
			me._thumbnail_menu0__content.ontouchend = function() {
				me._thumbnail_menu0__content.ontouchend = null;
				me._thumbnail_menu0__content.ontouchmove = null;
			}
			me._thumbnail_menu0__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu0.ggDragLastX;
				var diffY = t[0].clientY - me._thumbnail_menu0.ggDragLastY;
				me._thumbnail_menu0.ggDragLastX = t[0].clientX;
				me._thumbnail_menu0.ggDragLastY = t[0].clientY;
				me._thumbnail_menu0.ggScrollByX(-diffX);
				me._thumbnail_menu0.ggScrollByY(-diffY);
			}
		}
		elHorScrollBg = me._thumbnail_menu0__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 1536px; height: 15px; background-color: rgba(128,128,128,0.392157); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu0__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 1536px; height: 15px; background-color: rgba(192,192,192,0.392157); pointer-events: auto;');
		me._thumbnail_menu0.ggScrollPosX = 0;
		me._thumbnail_menu0.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu0.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu0.ggDragLastX;
				me._thumbnail_menu0.ggDragLastX = e.clientX;
				me._thumbnail_menu0.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu0.ggDragLastX = t[0].clientX;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu0.ggDragLastX;
				me._thumbnail_menu0.ggDragLastX = t[0].clientX;
				me._thumbnail_menu0.ggScrollByX(diffX);
			}
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu0.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu0.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu0.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu0__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu0.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu0.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu0.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu0.ggScrollByXSmooth(20 * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu0__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Thumbnail Menu0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='bottom : 0px;';
		hs+='height : 114px;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		hs+='border-radius:80px; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu0.ggIsActive=function() {
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
		me._thumbnail_menu0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.ggUserdata.information == "\u0433. \u0423\u0441\u0442\u044c-\u041a\u0443\u0442") || 
				(me.ggUserdata.information == "\u041c\u0430\u0440\u043a\u043e\u0432\u0441\u043a\u043e\u0435 \u043c\u0435\u0441\u0442\u043e\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0435") || 
				(me.ggUserdata.information == "\u042f\u0440\u0430\u043a\u0442\u0438\u043d\u0441\u043a\u043e\u0435 \u043c\u0435\u0441\u0442\u043e\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0435") || 
				(me.ggUserdata.information == "\u0418\u0447\u0451\u0434\u0438\u043d\u0441\u043a\u043e\u0435 \u043c\u0435\u0441\u0442\u043e\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0435")
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu0.style[domTransition]='';
				if (me._thumbnail_menu0.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu0.style.visibility="hidden";
					me._thumbnail_menu0.ggVisible=false;
				}
				else {
					me._thumbnail_menu0.style.visibility=(Number(me._thumbnail_menu0.style.opacity)>0||!me._thumbnail_menu0.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu0.ggVisible=true;
				}
			}
		}
		me._thumbnail_menu0.ggUpdatePosition=function (useTransition) {
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
				this.ggContent.style.left = -(Math.round(me._thumbnail_menu0.ggScrollPosX / me._thumbnail_menu0.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > this.clientWidth) {
					me._thumbnail_menu0__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu0__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu0.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu0__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu0__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu0.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu0.ggHorScrollVisible) {
					if (me._thumbnail_menu0.ggVertScrollVisible) {
						me._thumbnail_menu0.ggAvailableWidth = me._thumbnail_menu0.clientWidth - 15;
					} else {
						me._thumbnail_menu0.ggAvailableWidth = me._thumbnail_menu0.clientWidth;
					}
					me._thumbnail_menu0__horScrollBg.style.width = me._thumbnail_menu0.ggAvailableWidth + 'px';
					me._thumbnail_menu0.ggHPercentVisible = me._thumbnail_menu0.ggAvailableWidth / contentWidth;
					if (me._thumbnail_menu0.ggHPercentVisible > 1.0) me._thumbnail_menu0.ggHPercentVisible = 1.0;
					me._thumbnail_menu0.ggScrollWidth = Math.round(me._thumbnail_menu0__horScrollBg.clientWidth * me._thumbnail_menu0.ggHPercentVisible);
					me._thumbnail_menu0__horScrollFg.style.width = me._thumbnail_menu0.ggScrollWidth + 'px';
					me._thumbnail_menu0.ggScrollPosX = me._thumbnail_menu0.ggScrollPosXPercent * me._thumbnail_menu0.ggAvailableWidth;
					me._thumbnail_menu0.ggScrollPosX = Math.min(me._thumbnail_menu0.ggScrollPosX, me._thumbnail_menu0__horScrollBg.clientWidth - me._thumbnail_menu0__horScrollFg.clientWidth);
					me._thumbnail_menu0__horScrollFg.style.left = me._thumbnail_menu0.ggScrollPosX + 'px';
					me._thumbnail_menu0__content.style.left = -(Math.round(me._thumbnail_menu0.ggScrollPosX / me._thumbnail_menu0.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				} else {
					me._thumbnail_menu0.ggScrollPosX = 0;
					me._thumbnail_menu0.ggScrollPosXPercent = 0.0;
					me._thumbnail_menu0__content.style.left = this.ggContentLeftOffset + 'px';
				}
			}
		}
		el=me._thumbnail_cloner_0=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggWidth = 88;
		el.ggHeight = 82;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner_0.callChildLogicBlocks_changenodeid = function(){
			if(me._thumbnail_cloner_0.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_0.ggInstances.length; i++) {
					if (me._thumbnail_cloner_0.ggInstances[i]._checkmark_tick0 && me._thumbnail_cloner_0.ggInstances[i]._checkmark_tick0.logicBlock_visible) {
						me._thumbnail_cloner_0.ggInstances[i]._checkmark_tick0.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner_0.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner_0.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_0.ggInstances.length; i++) {
					if (me._thumbnail_cloner_0.ggInstances[i]._thumbnail_active0 && me._thumbnail_cloner_0.ggInstances[i]._thumbnail_active0.logicBlock_bordercolor) {
						me._thumbnail_cloner_0.ggInstances[i]._thumbnail_active0.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner_0.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner_0.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_0.ggInstances.length; i++) {
					if (me._thumbnail_cloner_0.ggInstances[i]._checkmark_tick0 && me._thumbnail_cloner_0.ggInstances[i]._checkmark_tick0.logicBlock_visible) {
						me._thumbnail_cloner_0.ggInstances[i]._checkmark_tick0.logicBlock_visible();
					}
					if (me._thumbnail_cloner_0.ggInstances[i]._thumbnail_active0 && me._thumbnail_cloner_0.ggInstances[i]._thumbnail_active0.logicBlock_bordercolor) {
						me._thumbnail_cloner_0.ggInstances[i]._thumbnail_active0.logicBlock_bordercolor();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner_0.ggUpdating == true) return;
			me._thumbnail_cloner_0.ggUpdating = true;
			var el=me._thumbnail_cloner_0;
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
			var numRows = el.ggNumRepeat;
			if (numRows < 1) numRows = 1;
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
				parameter.top=(row * me._thumbnail_cloner_0.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner_0.ggWidth) + 'px';
				var inst = new SkinCloner_thumbnail_cloner_0_Class(nodeId, me, el, parameter);
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= numRows) {
					row = 0;
					column++;
				}
				}
			}
			me._thumbnail_cloner_0.callChildLogicBlocks_changenodeid();
			me._thumbnail_cloner_0.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner_0.callChildLogicBlocks_active();
			me._thumbnail_cloner_0.ggUpdating = false;
			player.triggerEvent('clonerchanged');
		}
		el.ggFilter = [];
		el.ggId="Thumbnail Cloner 0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 82px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 88px;';
		hs+='pointer-events:none;';
		hs+='border-radius:100px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner_0.ggIsActive=function() {
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
		me._thumbnail_cloner_0.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner_0.childNodes.length; i++) {
				var child=me._thumbnail_cloner_0.childNodes[i];
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
		me._thumbnail_cloner_0.ggUpdatePosition=function (useTransition) {
			var w=player.getViewerSize().width;
			var h=player.getViewerSize().height
			if ((!me._thumbnail_cloner_0.ggLastSize) || (me._thumbnail_cloner_0.ggLastSize.w!=w) || (me._thumbnail_cloner_0.ggLastSize.h!=h)) {
				me._thumbnail_cloner_0.ggLastSize={ w:w, h:h };
				me._thumbnail_cloner_0.ggUpdate();
			}
		}
		me._thumbnail_cloner_0.ggNodeChange=function () {
			me._thumbnail_cloner_0.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu0__content.appendChild(me._thumbnail_cloner_0);
		me._map_bg.appendChild(me._thumbnail_menu0);
		me.divSkin.appendChild(me._map_bg);
		el=me._main_menu=document.createElement('div');
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
		hs+='pointer-events:none;';
		hs+='backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-radius:76px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 100%';
		me._main_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
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
			else {
				newLogicStateScaling = -1;
			}
			if (me._main_menu.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._main_menu.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._main_menu.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._main_menu.ggCurrentLogicStateScaling == 0) {
					me._main_menu.ggParameter.sx = 0.6;
					me._main_menu.ggParameter.sy = 0.6;
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
			var hs="<button class=\"btn\" data-clipboard-action=\"copy\"  data-clipboard-text=\"https:\/\/fuzzze.github.io\/ink_tour\/index.html?coverShow=false#"+player.getCurrentNode()+","+player.getPanN().toFixed(1)+","+player.getTilt().toFixed(1)+","+player.getFov().toFixed(1)+",4\"><\/button>";
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
		hs+='pointer-events:none;';
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
		hs+='backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);';
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
		el.style[domTransform + 'Origin']='50% 50%';
		me._toggle2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._toggle2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getViewerSize().width <= 640) || 
				(player.getViewerSize().height == 640)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._toggle2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._toggle2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._toggle2.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._toggle2.ggCurrentLogicStateScaling == 0) {
					me._toggle2.ggParameter.sx = 0.6;
					me._toggle2.ggParameter.sy = 0.6;
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
				me._map_bg.style.opacity='0.8';
				me._map_bg.style.visibility=me._map_bg.ggVisible?'inherit':'hidden';
			} else {
				me._map_bg.style.opacity='0';
				me._map_bg.style.visibility='hidden';
			}
			me._map_bg.ggOpacitiyActive=!flag;
			me._windowdown.ggVisible = !me._windowdown.ggVisible;
			var flag=me._windowdown.ggVisible;
			me._windowdown.style[domTransition]='none';
			me._windowdown.style.visibility=((flag)&&(Number(me._windowdown.style.opacity)>0||!me._windowdown.style.opacity))?'inherit':'hidden';
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
		el=me._windowdown=document.createElement('div');
		els=me._windowdown__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzhweCIgaGVpZ2h0PSIzOHB4IiB2aWV3Qm94PSIwIDAgMzggMzgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+dXAtYnV0dG9uPC90aXRsZT4KICAgIDxnIGlkPSJQYW5vVG91ciIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImNvdmVyLS0xOTIweDEwODAiIHRyYW5zZm'+
			'9ybT0idHJhbnNsYXRlKC0xNDAwLCAtNjI2KSI+CiAgICAgICAgICAgIDxnIGlkPSJ1cC1idXR0b24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0MDAsIDYyNikiPgogICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgc3Ryb2tlLW9wYWNpdHk9IjAiIHN0cm9rZT0iI0ZGRkZGRiIgY3g9IjE5IiBjeT0iMTkiIHI9IjE4LjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE5LjQxNDIxMzYsMTMgTDI4LjYwNjYwMTcsMjIuMTkyMzg4MiBMMjcuMTkyMzg4MiwyMy42MDY2MDE3IEwxOS4zMDMsMTUuNzE3IEwxMS40MTQyMTM2LDIzLjYwNjYwMTcgTDEwLDIyLjE5MjM4ODIg'+
			'TDE5LjE5MjM4ODIsMTMgTDE5LjMwMywxMy4xMTEgTDE5LjQxNDIxMzYsMTMgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
		me._windowdown__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;windowdown;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._windowdown__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzhweCIgaGVpZ2h0PSIzOHB4IiB2aWV3Qm94PSIwIDAgMzggMzgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+dXAtYnV0dG9uLWhvdmVyPC90aXRsZT4KICAgIDxnIGlkPSJQYW5vVG91ciIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImNvdmVyLS0xOTIweDEwODAiIH'+
			'RyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzE5LCAtNjI2KSI+CiAgICAgICAgICAgIDxnIGlkPSJ1cC1idXR0b24taG92ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzMTksIDYyNikiPgogICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgc3Ryb2tlPSIjRkZGRkZGIiBjeD0iMTkiIGN5PSIxOSIgcj0iMTguNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTkuNDE0MjEzNiwxMyBMMjguNjA2NjAxNywyMi4xOTIzODgyIEwyNy4xOTIzODgyLDIzLjYwNjYwMTcgTDE5LjMwMywxNS43MTcgTDExLjQxNDIxMzYsMjMuNjA2NjAxNyBMMTAsMjIuMTkyMzg4MiBMMTkuMTky'+
			'Mzg4MiwxMyBMMTkuMzAzLDEzLjExMSBMMTkuNDE0MjEzNiwxMyBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';
		me._windowdown__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;windowdown;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="windowdown";
		el.ggParameter={ rx:0,ry:0,a:180,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='position : absolute;';
		hs+='right : 24px;';
		hs+='top : 18px;';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._windowdown.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._windowdown.onclick=function (e) {
			me._windowdown.style[domTransition]='none';
			me._windowdown.style.visibility='hidden';
			me._windowdown.ggVisible=false;
			me._abouttext.style[domTransition]='none';
			me._abouttext.style.visibility=(Number(me._abouttext.style.opacity)>0||!me._abouttext.style.opacity)?'inherit':'hidden';
			me._abouttext.ggVisible=true;
			me._top_menu.style[domTransition]='none';
			me._top_menu.style.visibility='hidden';
			me._top_menu.ggVisible=false;
		}
		me._windowdown.onmouseover=function (e) {
			me._windowdown__img.style.visibility='hidden';
			me._windowdown__imgo.style.visibility='inherit';
		}
		me._windowdown.onmouseout=function (e) {
			me._windowdown__img.style.visibility='inherit';
			me._windowdown__imgo.style.visibility='hidden';
		}
		me._windowdown.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._windowdown);
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
		hs+='height : 823px;';
		hs+='position : absolute;';
		hs+='right : 16px;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 502px;';
		hs+='pointer-events:auto;';
		hs+='overflow:hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 502px;';
		hs+='height: 823px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._abouttext.ggUpdateText=function() {
			var hs="<div id=\"inf-wnd\"><br\/><h2>"+me.ggUserdata.title+"<\/h2><br\/>"+me.ggUserdata.description+"<br\/><\/div>";
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
				(player.getViewerSize().width <= 640)
			)
			{
				newLogicStateScaling = 0;
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
			me._windowdown.style[domTransition]='none';
			me._windowdown.style.visibility=(Number(me._windowdown.style.opacity)>0||!me._windowdown.style.opacity)?'inherit':'hidden';
			me._windowdown.ggVisible=true;
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
				me._help.style[domTransition]='';
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
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
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
					me._cover.style.visibility=(Number(me._cover.style.opacity)>0||!me._cover.style.opacity)?'inherit':'hidden';
					me._cover.ggVisible=true;
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
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggDx=0;
		el.ggDy=70;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 400px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 1240px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
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
		me._container_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getViewerSize().width <= 1200) || 
				(player.getViewerSize().height <= 800)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(player.getViewerSize().width <= 600) || 
				(player.getViewerSize().height <= 600)
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._container_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._container_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._container_1.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._container_1.ggCurrentLogicStateScaling == 0) {
					me._container_1.ggParameter.sx = 0.6;
					me._container_1.ggParameter.sy = 0.6;
					me._container_1.style[domTransform]=parameterToTransform(me._container_1.ggParameter);
				}
				else if (me._container_1.ggCurrentLogicStateScaling == 1) {
					me._container_1.ggParameter.sx = 0.4;
					me._container_1.ggParameter.sy = 0.4;
					me._container_1.style[domTransform]=parameterToTransform(me._container_1.ggParameter);
				}
				else {
					me._container_1.ggParameter.sx = 1;
					me._container_1.ggParameter.sy = 1;
					me._container_1.style[domTransform]=parameterToTransform(me._container_1.ggParameter);
				}
			}
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
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
		el.ggDx=-488;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 400px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 262px;';
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
		me._image_1.onclick=function (e) {
			player.setVariableValue('currentPan', "1");
			player.setVariableValue('coverShow', false);
			player.openNext("{node1}","");
		}
		me._image_1.onmouseover=function (e) {
			if (player.transitionsDisabled) {
				me._image_1.style[domTransition]='none';
			} else {
				me._image_1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_1.ggParameter.sx=1.05;me._image_1.ggParameter.sy=1.05;
			me._image_1.style[domTransform]=parameterToTransform(me._image_1.ggParameter);
		}
		me._image_1.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me._image_1.style[domTransition]='none';
			} else {
				me._image_1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_1.ggParameter.sx=1;me._image_1.ggParameter.sy=1;
			me._image_1.style[domTransform]=parameterToTransform(me._image_1.ggParameter);
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
		me._container_1.appendChild(me._image_1);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs=basePath + 'images/image_2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDx=-163;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 400px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 262px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
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
		me._image_2.onclick=function (e) {
			player.setVariableValue('currentPan', "2");
			player.setVariableValue('coverShow', false);
			player.openNext("{node51}","");
		}
		me._image_2.onmouseover=function (e) {
			if (player.transitionsDisabled) {
				me._image_2.style[domTransition]='none';
			} else {
				me._image_2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_2.ggParameter.sx=1.05;me._image_2.ggParameter.sy=1.05;
			me._image_2.style[domTransform]=parameterToTransform(me._image_2.ggParameter);
		}
		me._image_2.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me._image_2.style[domTransition]='none';
			} else {
				me._image_2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_2.ggParameter.sx=1;me._image_2.ggParameter.sy=1;
			me._image_2.style[domTransform]=parameterToTransform(me._image_2.ggParameter);
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
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
		me._container_1.appendChild(me._image_2);
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs=basePath + 'images/image_3.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggDx=162;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 400px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 262px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_3.ggIsActive=function() {
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
		me._image_3.onclick=function (e) {
			player.setVariableValue('coverShow', false);
			player.setVariableValue('currentPan', "3");
			player.openNext("{node43}","");
		}
		me._image_3.onmouseover=function (e) {
			if (player.transitionsDisabled) {
				me._image_3.style[domTransition]='none';
			} else {
				me._image_3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_3.ggParameter.sx=1.05;me._image_3.ggParameter.sy=1.05;
			me._image_3.style[domTransform]=parameterToTransform(me._image_3.ggParameter);
		}
		me._image_3.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me._image_3.style[domTransition]='none';
			} else {
				me._image_3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_3.ggParameter.sx=1;me._image_3.ggParameter.sy=1;
			me._image_3.style[domTransform]=parameterToTransform(me._image_3.ggParameter);
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
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
		me._container_1.appendChild(me._image_3);
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs=basePath + 'images/image_4.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggDx=486;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 400px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 262px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_4.ggIsActive=function() {
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
		me._image_4.onclick=function (e) {
			player.setVariableValue('currentPan', "4");
			player.openNext("{node63}","");
			player.setVariableValue('coverShow', false);
		}
		me._image_4.onmouseover=function (e) {
			if (player.transitionsDisabled) {
				me._image_4.style[domTransition]='none';
			} else {
				me._image_4.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_4.ggParameter.sx=1.05;me._image_4.ggParameter.sy=1.05;
			me._image_4.style[domTransform]=parameterToTransform(me._image_4.ggParameter);
		}
		me._image_4.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me._image_4.style[domTransition]='none';
			} else {
				me._image_4.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_4.ggParameter.sx=1;me._image_4.ggParameter.sy=1;
			me._image_4.style[domTransform]=parameterToTransform(me._image_4.ggParameter);
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
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
		me._container_1.appendChild(me._image_4);
		el=me._coverlogo=document.createElement('div');
		els=me._coverlogo__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._coverlogo__img.setAttribute('src',basePath + 'images/coverlogo.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;coverlogo;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="cover-logo";
		el.ggDx=0;
		el.ggDy=-350;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 158px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 1231px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._coverlogo.ggIsActive=function() {
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
		me._coverlogo.ggUpdatePosition=function (useTransition) {
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
		me._container_1.appendChild(me._coverlogo);
		me._cover.appendChild(me._container_1);
		me.divSkin.appendChild(me._cover);
		me._arrow_menu.style[domTransition]='none';
		me._arrow_menu.ggParameter.a="45.0000";
		me._arrow_menu.style[domTransform]=parameterToTransform(me._arrow_menu.ggParameter);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			player.setVariableValue('currentPan', "0");
			player.setVariableValue('currentPan', me.ggUserdata.information);
			me._thumbnail_cloner_4.ggUpdate();
			me._thumbnail_cloner_3.ggUpdate();
			me._thumbnail_cloner_2.ggUpdate();
			me._thumbnail_cloner_1.ggUpdate();
			me._thumbnail_cloner_0.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._thumbnail_menu4.ggUpdatePosition();
			me._thumbnail_menu3.ggUpdatePosition();
			me._thumbnail_menu2.ggUpdatePosition();
			me._thumbnail_menu1.ggUpdatePosition();
			me._thumbnail_menu0.ggUpdatePosition();
		});
		player.addListener('beforechangenode', function() {
			player.setVariableValue('currentPan', me.ggUserdata.information);
			player.stopSound("*currentPan");
			player.playSound("*currentPan","1");
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
		me._pan_title.ggUpdateText();
		me._subtitle.ggUpdateText();
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
		el=me._justpin=document.createElement('div');
		els=me._justpin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+anVzdFRleHRQaW48L3RpdGxlPgogICAgPGcgaWQ9IlBhbm9Ub3VyIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0icGFuby0xOTIweDEwODAiIHRyYW5zZm'+
			'9ybT0idHJhbnNsYXRlKC05MjEsIC03MzEpIiBmaWxsPSIjMDBBQkM3IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIj4KICAgICAgICAgICAgPGcgaWQ9Imp1c3RUZXh0UGluIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MjIsIDczMikiPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiByeD0iOSI+PC9yZWN0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
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
		hs+='bottom : -8px;';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='right : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
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
		hs+='bottom : -22px;';
		hs+='height : 18px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 198px;';
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
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 12px 17px 12px 17px;';
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
	function SkinCloner_thumbnail_cloner_4_Class(nodeId, parentScope,ggParent,parameter) {
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
		me.__div.setAttribute('style','position: absolute;width: 88px; height: 82px; visibility: inherit; overflow: hidden;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_nodeimage_4=document.createElement('div');
		els=me._thumbnail_nodeimage_4__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_0_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;thumbnail_nodeimage_4;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Thumbnail NodeImage 4";
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
		hs+='border-radius:100px;overflow:hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_nodeimage_4.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage_4.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
			player.setVariableValue('currentPan', "{"+me.ggNodeId+"}");
		}
		me._thumbnail_nodeimage_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._checkmark_tick4=document.createElement('div');
		els=me._checkmark_tick4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOXB4IiBoZWlnaHQ9IjlweCIgdmlld0JveD0iMCAwIDkgOSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDx0aXRsZT5pY29uLWV5ZTwvdGl0bGU+CiAgICA8ZyBpZD0iUGFub1RvdXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJjb3Zlci0tMTkyMHgxMDgwIiB0cmFuc2Zvcm09In'+
			'RyYW5zbGF0ZSgtNzAyLCAtNzA1KSI+CiAgICAgICAgICAgIDxnIGlkPSJpY29uLWV5ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzAyLCA3MDUpIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00LjUsMi41NzE0Mjg1NyBDNi4xMzk5OTUxNiwyLjU3MTQyODU3IDcuNTQ5NDcyNzMsMy4zNjQ1MjM5NCA4LjE2Njg3MTM5LDQuNDk5NDYwMDMgQzcuNTUwMjc4MzYsNS42MzUwMjI2NyA2LjE0MDQ2Mzg2LDYuNDI4NTcxNDMgNC41LDYuNDI4NTcxNDMgQzIuODU5NTM2MTQsNi40Mjg1NzE0MyAxLjQ0OTcyMTY0LDUuNjM1MDIyNjcgMC44MzI1OTk0NTQsNC40OTk1NjY4IEMxLjQ1MDUyNzI3LDMuMzY0'+
			'NTIzOTQgMi44NjAwMDQ4NCwyLjU3MTQyODU3IDQuNSwyLjU3MTQyODU3IFogTTQuNSwzIEMzLjY3MTU3Mjg4LDMgMywzLjY3MTU3Mjg4IDMsNC41IEMzLDQuNzMxOTU5NTkgMy4wNTI2NTEzMSw0Ljk1MTYyMTgyIDMuMTQ2NDQ2NjEsNS4xNDY0NDY2MSBDMy4yMzY5Mjg4MSw1LjA1NTk2NDQxIDMuMzYxOTI4ODEsNSAzLjUsNSBDMy43NzYxNDIzNyw1IDQsNS4yMjM4NTc2MyA0LDUuNSBDNCw1LjYzODA3MTE5IDMuOTQ0MDM1NTksNS43NjMwNzExOSAzLjg1MjMxMjQ0LDUuODUzMzQ1MTYgQzQuMDQ4Mzc4MTgsNS45NDczNDg2OSA0LjI2ODA0MDQxLDYgNC41LDYgQzUuMzI4NDI3MTIsNiA2LDUuMz'+
			'I4NDI3MTIgNiw0LjUgQzYsNC40MDYzMzk3IDUuOTkxNDE1ODgsNC4zMTQ2ODQzMiA1Ljk3NDQ5ODgyLDQuMjI1Mzc4MzcgQzUuODcyMjg2MjEsNC42NjkxMjI4NyA1LjQ3NDc4MzM1LDUgNSw1IEM0LjQ0NzcxNTI1LDUgNCw0LjU1MjI4NDc1IDQsNCBDNCwzLjUyNTIxNjY1IDQuMzMwODc3MTMsMy4xMjc3MTM3OSA0Ljc3NDIyMjMsMy4wMjUwMDg1MiBDNC42ODUzMTU2OCwzLjAwODU4NDEyIDQuNTkzNjYwMywzIDQuNSwzIFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMCIgeT0iMCIgd2lk'+
			'dGg9IjkiIGhlaWdodD0iOSI+PC9yZWN0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
		me._checkmark_tick4__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;checkmark_tick4;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 6px;';
		hs+='height : 26px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick4.ggIsActive=function() {
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
		me._checkmark_tick4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._checkmark_tick4.ggElementNodeId()) == true) || 
				(me._checkmark_tick4.ggIsActive() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick4.style[domTransition]='';
				if (me._checkmark_tick4.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick4.style.visibility=(Number(me._checkmark_tick4.style.opacity)>0||!me._checkmark_tick4.style.opacity)?'inherit':'hidden';
					me._checkmark_tick4.ggVisible=true;
				}
				else {
					me._checkmark_tick4.style.visibility="hidden";
					me._checkmark_tick4.ggVisible=false;
				}
			}
		}
		me._checkmark_tick4.ggUpdatePosition=function (useTransition) {
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
		me._thumbnail_nodeimage_4.appendChild(me._checkmark_tick4);
		el=me._thumbnail_active4=document.createElement('div');
		el.ggId="Thumbnail Active4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='border : 1px solid #d1d1d1;';
		hs+='cursor : default;';
		hs+='height : 78px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 78px;';
		hs+='pointer-events:auto;';
		hs+='border-radius:100px; overflow: visible !important; position:relative;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active4.ggIsActive=function() {
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
		me._thumbnail_active4.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				(me._thumbnail_active4.ggIsActive() == true)
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				(me.elementMouseOver['thumbnail_active4'] == true)
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active4.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active4.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active4.style[domTransition]='border-color 300ms ease 0ms';
				if (me._thumbnail_active4.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active4.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._thumbnail_active4.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active4.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active4.style.borderColor="rgba(209,209,209,1)";
				}
			}
		}
		me._thumbnail_active4.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active4']=true;
			me._thumbnail_active4.logicBlock_bordercolor();
		}
		me._thumbnail_active4.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active4']=false;
			me._thumbnail_active4.logicBlock_bordercolor();
		}
		me._thumbnail_active4.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active4']=false;
			me._thumbnail_active4.logicBlock_bordercolor();
		}
		me._thumbnail_active4.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage_4.appendChild(me._thumbnail_active4);
		me.__div.appendChild(me._thumbnail_nodeimage_4);
	};
	function SkinCloner_thumbnail_cloner_3_Class(nodeId, parentScope,ggParent,parameter) {
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
		me.__div.setAttribute('style','position: absolute;width: 88px; height: 82px; visibility: inherit; overflow: hidden;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_nodeimage_3=document.createElement('div');
		els=me._thumbnail_nodeimage_3__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_0_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;thumbnail_nodeimage_3;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Thumbnail NodeImage 3";
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
		hs+='border-radius:100px;overflow:hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_nodeimage_3.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage_3.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
			player.setVariableValue('currentPan', "{"+me.ggNodeId+"}");
		}
		me._thumbnail_nodeimage_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._checkmark_tick3=document.createElement('div');
		els=me._checkmark_tick3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOXB4IiBoZWlnaHQ9IjlweCIgdmlld0JveD0iMCAwIDkgOSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDx0aXRsZT5pY29uLWV5ZTwvdGl0bGU+CiAgICA8ZyBpZD0iUGFub1RvdXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJjb3Zlci0tMTkyMHgxMDgwIiB0cmFuc2Zvcm09In'+
			'RyYW5zbGF0ZSgtNzAyLCAtNzA1KSI+CiAgICAgICAgICAgIDxnIGlkPSJpY29uLWV5ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzAyLCA3MDUpIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00LjUsMi41NzE0Mjg1NyBDNi4xMzk5OTUxNiwyLjU3MTQyODU3IDcuNTQ5NDcyNzMsMy4zNjQ1MjM5NCA4LjE2Njg3MTM5LDQuNDk5NDYwMDMgQzcuNTUwMjc4MzYsNS42MzUwMjI2NyA2LjE0MDQ2Mzg2LDYuNDI4NTcxNDMgNC41LDYuNDI4NTcxNDMgQzIuODU5NTM2MTQsNi40Mjg1NzE0MyAxLjQ0OTcyMTY0LDUuNjM1MDIyNjcgMC44MzI1OTk0NTQsNC40OTk1NjY4IEMxLjQ1MDUyNzI3LDMuMzY0'+
			'NTIzOTQgMi44NjAwMDQ4NCwyLjU3MTQyODU3IDQuNSwyLjU3MTQyODU3IFogTTQuNSwzIEMzLjY3MTU3Mjg4LDMgMywzLjY3MTU3Mjg4IDMsNC41IEMzLDQuNzMxOTU5NTkgMy4wNTI2NTEzMSw0Ljk1MTYyMTgyIDMuMTQ2NDQ2NjEsNS4xNDY0NDY2MSBDMy4yMzY5Mjg4MSw1LjA1NTk2NDQxIDMuMzYxOTI4ODEsNSAzLjUsNSBDMy43NzYxNDIzNyw1IDQsNS4yMjM4NTc2MyA0LDUuNSBDNCw1LjYzODA3MTE5IDMuOTQ0MDM1NTksNS43NjMwNzExOSAzLjg1MjMxMjQ0LDUuODUzMzQ1MTYgQzQuMDQ4Mzc4MTgsNS45NDczNDg2OSA0LjI2ODA0MDQxLDYgNC41LDYgQzUuMzI4NDI3MTIsNiA2LDUuMz'+
			'I4NDI3MTIgNiw0LjUgQzYsNC40MDYzMzk3IDUuOTkxNDE1ODgsNC4zMTQ2ODQzMiA1Ljk3NDQ5ODgyLDQuMjI1Mzc4MzcgQzUuODcyMjg2MjEsNC42NjkxMjI4NyA1LjQ3NDc4MzM1LDUgNSw1IEM0LjQ0NzcxNTI1LDUgNCw0LjU1MjI4NDc1IDQsNCBDNCwzLjUyNTIxNjY1IDQuMzMwODc3MTMsMy4xMjc3MTM3OSA0Ljc3NDIyMjMsMy4wMjUwMDg1MiBDNC42ODUzMTU2OCwzLjAwODU4NDEyIDQuNTkzNjYwMywzIDQuNSwzIFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMCIgeT0iMCIgd2lk'+
			'dGg9IjkiIGhlaWdodD0iOSI+PC9yZWN0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
		me._checkmark_tick3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;checkmark_tick3;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 6px;';
		hs+='height : 26px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick3.ggIsActive=function() {
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
		me._checkmark_tick3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._checkmark_tick3.ggElementNodeId()) == true) || 
				(me._checkmark_tick3.ggIsActive() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick3.style[domTransition]='';
				if (me._checkmark_tick3.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick3.style.visibility=(Number(me._checkmark_tick3.style.opacity)>0||!me._checkmark_tick3.style.opacity)?'inherit':'hidden';
					me._checkmark_tick3.ggVisible=true;
				}
				else {
					me._checkmark_tick3.style.visibility="hidden";
					me._checkmark_tick3.ggVisible=false;
				}
			}
		}
		me._checkmark_tick3.ggUpdatePosition=function (useTransition) {
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
		me._thumbnail_nodeimage_3.appendChild(me._checkmark_tick3);
		el=me._thumbnail_active3=document.createElement('div');
		el.ggId="Thumbnail Active3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='border : 1px solid #d1d1d1;';
		hs+='cursor : default;';
		hs+='height : 78px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 78px;';
		hs+='pointer-events:auto;';
		hs+='border-radius:100px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active3.ggIsActive=function() {
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
		me._thumbnail_active3.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				(me._thumbnail_active3.ggIsActive() == true)
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				(me.elementMouseOver['thumbnail_active3'] == true)
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active3.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active3.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active3.style[domTransition]='border-color 300ms ease 0ms';
				if (me._thumbnail_active3.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active3.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._thumbnail_active3.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active3.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active3.style.borderColor="rgba(209,209,209,1)";
				}
			}
		}
		me._thumbnail_active3.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active3']=true;
			me._thumbnail_active3.logicBlock_bordercolor();
		}
		me._thumbnail_active3.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active3']=false;
			me._thumbnail_active3.logicBlock_bordercolor();
		}
		me._thumbnail_active3.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active3']=false;
			me._thumbnail_active3.logicBlock_bordercolor();
		}
		me._thumbnail_active3.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage_3.appendChild(me._thumbnail_active3);
		me.__div.appendChild(me._thumbnail_nodeimage_3);
	};
	function SkinCloner_thumbnail_cloner_2_Class(nodeId, parentScope,ggParent,parameter) {
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
		me.__div.setAttribute('style','position: absolute;width: 88px; height: 82px; visibility: inherit; overflow: hidden;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_nodeimage_2=document.createElement('div');
		els=me._thumbnail_nodeimage_2__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_0_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;thumbnail_nodeimage_2;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Thumbnail NodeImage 2";
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
		hs+='border-radius:100px;overflow:hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_nodeimage_2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage_2.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
			player.setVariableValue('currentPan', "{"+me.ggNodeId+"}");
		}
		me._thumbnail_nodeimage_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._checkmark_tick2=document.createElement('div');
		els=me._checkmark_tick2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOXB4IiBoZWlnaHQ9IjlweCIgdmlld0JveD0iMCAwIDkgOSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDx0aXRsZT5pY29uLWV5ZTwvdGl0bGU+CiAgICA8ZyBpZD0iUGFub1RvdXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJjb3Zlci0tMTkyMHgxMDgwIiB0cmFuc2Zvcm09In'+
			'RyYW5zbGF0ZSgtNzAyLCAtNzA1KSI+CiAgICAgICAgICAgIDxnIGlkPSJpY29uLWV5ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzAyLCA3MDUpIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00LjUsMi41NzE0Mjg1NyBDNi4xMzk5OTUxNiwyLjU3MTQyODU3IDcuNTQ5NDcyNzMsMy4zNjQ1MjM5NCA4LjE2Njg3MTM5LDQuNDk5NDYwMDMgQzcuNTUwMjc4MzYsNS42MzUwMjI2NyA2LjE0MDQ2Mzg2LDYuNDI4NTcxNDMgNC41LDYuNDI4NTcxNDMgQzIuODU5NTM2MTQsNi40Mjg1NzE0MyAxLjQ0OTcyMTY0LDUuNjM1MDIyNjcgMC44MzI1OTk0NTQsNC40OTk1NjY4IEMxLjQ1MDUyNzI3LDMuMzY0'+
			'NTIzOTQgMi44NjAwMDQ4NCwyLjU3MTQyODU3IDQuNSwyLjU3MTQyODU3IFogTTQuNSwzIEMzLjY3MTU3Mjg4LDMgMywzLjY3MTU3Mjg4IDMsNC41IEMzLDQuNzMxOTU5NTkgMy4wNTI2NTEzMSw0Ljk1MTYyMTgyIDMuMTQ2NDQ2NjEsNS4xNDY0NDY2MSBDMy4yMzY5Mjg4MSw1LjA1NTk2NDQxIDMuMzYxOTI4ODEsNSAzLjUsNSBDMy43NzYxNDIzNyw1IDQsNS4yMjM4NTc2MyA0LDUuNSBDNCw1LjYzODA3MTE5IDMuOTQ0MDM1NTksNS43NjMwNzExOSAzLjg1MjMxMjQ0LDUuODUzMzQ1MTYgQzQuMDQ4Mzc4MTgsNS45NDczNDg2OSA0LjI2ODA0MDQxLDYgNC41LDYgQzUuMzI4NDI3MTIsNiA2LDUuMz'+
			'I4NDI3MTIgNiw0LjUgQzYsNC40MDYzMzk3IDUuOTkxNDE1ODgsNC4zMTQ2ODQzMiA1Ljk3NDQ5ODgyLDQuMjI1Mzc4MzcgQzUuODcyMjg2MjEsNC42NjkxMjI4NyA1LjQ3NDc4MzM1LDUgNSw1IEM0LjQ0NzcxNTI1LDUgNCw0LjU1MjI4NDc1IDQsNCBDNCwzLjUyNTIxNjY1IDQuMzMwODc3MTMsMy4xMjc3MTM3OSA0Ljc3NDIyMjMsMy4wMjUwMDg1MiBDNC42ODUzMTU2OCwzLjAwODU4NDEyIDQuNTkzNjYwMywzIDQuNSwzIFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMCIgeT0iMCIgd2lk'+
			'dGg9IjkiIGhlaWdodD0iOSI+PC9yZWN0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
		me._checkmark_tick2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;checkmark_tick2;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 6px;';
		hs+='height : 26px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick2.ggIsActive=function() {
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
		me._checkmark_tick2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._checkmark_tick2.ggElementNodeId()) == true) || 
				(me._checkmark_tick2.ggIsActive() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick2.style[domTransition]='';
				if (me._checkmark_tick2.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick2.style.visibility=(Number(me._checkmark_tick2.style.opacity)>0||!me._checkmark_tick2.style.opacity)?'inherit':'hidden';
					me._checkmark_tick2.ggVisible=true;
				}
				else {
					me._checkmark_tick2.style.visibility="hidden";
					me._checkmark_tick2.ggVisible=false;
				}
			}
		}
		me._checkmark_tick2.ggUpdatePosition=function (useTransition) {
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
		me._thumbnail_nodeimage_2.appendChild(me._checkmark_tick2);
		el=me._thumbnail_active2=document.createElement('div');
		el.ggId="Thumbnail Active2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='border : 1px solid #d1d1d1;';
		hs+='cursor : default;';
		hs+='height : 78px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 78px;';
		hs+='pointer-events:auto;';
		hs+='border-radius:100px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active2.ggIsActive=function() {
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
		me._thumbnail_active2.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				(me._thumbnail_active2.ggIsActive() == true)
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				(me.elementMouseOver['thumbnail_active2'] == true)
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active2.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active2.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active2.style[domTransition]='border-color 300ms ease 0ms';
				if (me._thumbnail_active2.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active2.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._thumbnail_active2.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active2.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active2.style.borderColor="rgba(209,209,209,1)";
				}
			}
		}
		me._thumbnail_active2.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active2']=true;
			me._thumbnail_active2.logicBlock_bordercolor();
		}
		me._thumbnail_active2.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active2']=false;
			me._thumbnail_active2.logicBlock_bordercolor();
		}
		me._thumbnail_active2.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active2']=false;
			me._thumbnail_active2.logicBlock_bordercolor();
		}
		me._thumbnail_active2.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage_2.appendChild(me._thumbnail_active2);
		me.__div.appendChild(me._thumbnail_nodeimage_2);
	};
	function SkinCloner_thumbnail_cloner_1_Class(nodeId, parentScope,ggParent,parameter) {
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
		me.__div.setAttribute('style','position: absolute;width: 88px; height: 82px; visibility: inherit; overflow: hidden;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_nodeimage_1=document.createElement('div');
		els=me._thumbnail_nodeimage_1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_0_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;thumbnail_nodeimage_1;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Thumbnail NodeImage 1";
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
		hs+='border-radius:100px;overflow:hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_nodeimage_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage_1.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
			player.setVariableValue('currentPan', "{"+me.ggNodeId+"}");
		}
		me._thumbnail_nodeimage_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._checkmark_tick1=document.createElement('div');
		els=me._checkmark_tick1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOXB4IiBoZWlnaHQ9IjlweCIgdmlld0JveD0iMCAwIDkgOSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDx0aXRsZT5pY29uLWV5ZTwvdGl0bGU+CiAgICA8ZyBpZD0iUGFub1RvdXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJjb3Zlci0tMTkyMHgxMDgwIiB0cmFuc2Zvcm09In'+
			'RyYW5zbGF0ZSgtNzAyLCAtNzA1KSI+CiAgICAgICAgICAgIDxnIGlkPSJpY29uLWV5ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzAyLCA3MDUpIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00LjUsMi41NzE0Mjg1NyBDNi4xMzk5OTUxNiwyLjU3MTQyODU3IDcuNTQ5NDcyNzMsMy4zNjQ1MjM5NCA4LjE2Njg3MTM5LDQuNDk5NDYwMDMgQzcuNTUwMjc4MzYsNS42MzUwMjI2NyA2LjE0MDQ2Mzg2LDYuNDI4NTcxNDMgNC41LDYuNDI4NTcxNDMgQzIuODU5NTM2MTQsNi40Mjg1NzE0MyAxLjQ0OTcyMTY0LDUuNjM1MDIyNjcgMC44MzI1OTk0NTQsNC40OTk1NjY4IEMxLjQ1MDUyNzI3LDMuMzY0'+
			'NTIzOTQgMi44NjAwMDQ4NCwyLjU3MTQyODU3IDQuNSwyLjU3MTQyODU3IFogTTQuNSwzIEMzLjY3MTU3Mjg4LDMgMywzLjY3MTU3Mjg4IDMsNC41IEMzLDQuNzMxOTU5NTkgMy4wNTI2NTEzMSw0Ljk1MTYyMTgyIDMuMTQ2NDQ2NjEsNS4xNDY0NDY2MSBDMy4yMzY5Mjg4MSw1LjA1NTk2NDQxIDMuMzYxOTI4ODEsNSAzLjUsNSBDMy43NzYxNDIzNyw1IDQsNS4yMjM4NTc2MyA0LDUuNSBDNCw1LjYzODA3MTE5IDMuOTQ0MDM1NTksNS43NjMwNzExOSAzLjg1MjMxMjQ0LDUuODUzMzQ1MTYgQzQuMDQ4Mzc4MTgsNS45NDczNDg2OSA0LjI2ODA0MDQxLDYgNC41LDYgQzUuMzI4NDI3MTIsNiA2LDUuMz'+
			'I4NDI3MTIgNiw0LjUgQzYsNC40MDYzMzk3IDUuOTkxNDE1ODgsNC4zMTQ2ODQzMiA1Ljk3NDQ5ODgyLDQuMjI1Mzc4MzcgQzUuODcyMjg2MjEsNC42NjkxMjI4NyA1LjQ3NDc4MzM1LDUgNSw1IEM0LjQ0NzcxNTI1LDUgNCw0LjU1MjI4NDc1IDQsNCBDNCwzLjUyNTIxNjY1IDQuMzMwODc3MTMsMy4xMjc3MTM3OSA0Ljc3NDIyMjMsMy4wMjUwMDg1MiBDNC42ODUzMTU2OCwzLjAwODU4NDEyIDQuNTkzNjYwMywzIDQuNSwzIFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMCIgeT0iMCIgd2lk'+
			'dGg9IjkiIGhlaWdodD0iOSI+PC9yZWN0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
		me._checkmark_tick1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;checkmark_tick1;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 6px;';
		hs+='height : 26px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick1.ggIsActive=function() {
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
		me._checkmark_tick1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._checkmark_tick1.ggElementNodeId()) == true) || 
				(me._checkmark_tick1.ggIsActive() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick1.style[domTransition]='';
				if (me._checkmark_tick1.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick1.style.visibility=(Number(me._checkmark_tick1.style.opacity)>0||!me._checkmark_tick1.style.opacity)?'inherit':'hidden';
					me._checkmark_tick1.ggVisible=true;
				}
				else {
					me._checkmark_tick1.style.visibility="hidden";
					me._checkmark_tick1.ggVisible=false;
				}
			}
		}
		me._checkmark_tick1.ggUpdatePosition=function (useTransition) {
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
		me._thumbnail_nodeimage_1.appendChild(me._checkmark_tick1);
		el=me._thumbnail_active1=document.createElement('div');
		el.ggId="Thumbnail Active1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='border : 1px solid #d1d1d1;';
		hs+='cursor : default;';
		hs+='height : 78px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 78px;';
		hs+='pointer-events:auto;';
		hs+='border-radius:100px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active1.ggIsActive=function() {
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
		me._thumbnail_active1.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				(me._thumbnail_active1.ggIsActive() == true)
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				(me.elementMouseOver['thumbnail_active1'] == true)
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active1.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active1.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active1.style[domTransition]='border-color 300ms ease 0ms';
				if (me._thumbnail_active1.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active1.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._thumbnail_active1.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active1.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active1.style.borderColor="rgba(209,209,209,1)";
				}
			}
		}
		me._thumbnail_active1.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active1']=true;
			me._thumbnail_active1.logicBlock_bordercolor();
		}
		me._thumbnail_active1.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active1']=false;
			me._thumbnail_active1.logicBlock_bordercolor();
		}
		me._thumbnail_active1.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active1']=false;
			me._thumbnail_active1.logicBlock_bordercolor();
		}
		me._thumbnail_active1.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage_1.appendChild(me._thumbnail_active1);
		me.__div.appendChild(me._thumbnail_nodeimage_1);
	};
	function SkinCloner_thumbnail_cloner_0_Class(nodeId, parentScope,ggParent,parameter) {
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
		me.__div.setAttribute('style','position: absolute;width: 88px; height: 82px; visibility: inherit; overflow: hidden;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_nodeimage_0=document.createElement('div');
		els=me._thumbnail_nodeimage_0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_0_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;thumbnail_nodeimage_0;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Thumbnail NodeImage 0";
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
		hs+='border-radius:100px;overflow:hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_nodeimage_0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage_0.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
			player.setVariableValue('currentPan', "{"+me.ggNodeId+"}");
		}
		me._thumbnail_nodeimage_0.ggUpdatePosition=function (useTransition) {
		}
		el=me._checkmark_tick0=document.createElement('div');
		els=me._checkmark_tick0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOXB4IiBoZWlnaHQ9IjlweCIgdmlld0JveD0iMCAwIDkgOSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDx0aXRsZT5pY29uLWV5ZTwvdGl0bGU+CiAgICA8ZyBpZD0iUGFub1RvdXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJjb3Zlci0tMTkyMHgxMDgwIiB0cmFuc2Zvcm09In'+
			'RyYW5zbGF0ZSgtNzAyLCAtNzA1KSI+CiAgICAgICAgICAgIDxnIGlkPSJpY29uLWV5ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzAyLCA3MDUpIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00LjUsMi41NzE0Mjg1NyBDNi4xMzk5OTUxNiwyLjU3MTQyODU3IDcuNTQ5NDcyNzMsMy4zNjQ1MjM5NCA4LjE2Njg3MTM5LDQuNDk5NDYwMDMgQzcuNTUwMjc4MzYsNS42MzUwMjI2NyA2LjE0MDQ2Mzg2LDYuNDI4NTcxNDMgNC41LDYuNDI4NTcxNDMgQzIuODU5NTM2MTQsNi40Mjg1NzE0MyAxLjQ0OTcyMTY0LDUuNjM1MDIyNjcgMC44MzI1OTk0NTQsNC40OTk1NjY4IEMxLjQ1MDUyNzI3LDMuMzY0'+
			'NTIzOTQgMi44NjAwMDQ4NCwyLjU3MTQyODU3IDQuNSwyLjU3MTQyODU3IFogTTQuNSwzIEMzLjY3MTU3Mjg4LDMgMywzLjY3MTU3Mjg4IDMsNC41IEMzLDQuNzMxOTU5NTkgMy4wNTI2NTEzMSw0Ljk1MTYyMTgyIDMuMTQ2NDQ2NjEsNS4xNDY0NDY2MSBDMy4yMzY5Mjg4MSw1LjA1NTk2NDQxIDMuMzYxOTI4ODEsNSAzLjUsNSBDMy43NzYxNDIzNyw1IDQsNS4yMjM4NTc2MyA0LDUuNSBDNCw1LjYzODA3MTE5IDMuOTQ0MDM1NTksNS43NjMwNzExOSAzLjg1MjMxMjQ0LDUuODUzMzQ1MTYgQzQuMDQ4Mzc4MTgsNS45NDczNDg2OSA0LjI2ODA0MDQxLDYgNC41LDYgQzUuMzI4NDI3MTIsNiA2LDUuMz'+
			'I4NDI3MTIgNiw0LjUgQzYsNC40MDYzMzk3IDUuOTkxNDE1ODgsNC4zMTQ2ODQzMiA1Ljk3NDQ5ODgyLDQuMjI1Mzc4MzcgQzUuODcyMjg2MjEsNC42NjkxMjI4NyA1LjQ3NDc4MzM1LDUgNSw1IEM0LjQ0NzcxNTI1LDUgNCw0LjU1MjI4NDc1IDQsNCBDNCwzLjUyNTIxNjY1IDQuMzMwODc3MTMsMy4xMjc3MTM3OSA0Ljc3NDIyMjMsMy4wMjUwMDg1MiBDNC42ODUzMTU2OCwzLjAwODU4NDEyIDQuNTkzNjYwMywzIDQuNSwzIFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMCIgeT0iMCIgd2lk'+
			'dGg9IjkiIGhlaWdodD0iOSI+PC9yZWN0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
		me._checkmark_tick0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;checkmark_tick0;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick0";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 6px;';
		hs+='height : 26px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick0.ggIsActive=function() {
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
		me._checkmark_tick0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._checkmark_tick0.ggElementNodeId()) == true) || 
				(me._checkmark_tick0.ggIsActive() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick0.style[domTransition]='';
				if (me._checkmark_tick0.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick0.style.visibility=(Number(me._checkmark_tick0.style.opacity)>0||!me._checkmark_tick0.style.opacity)?'inherit':'hidden';
					me._checkmark_tick0.ggVisible=true;
				}
				else {
					me._checkmark_tick0.style.visibility="hidden";
					me._checkmark_tick0.ggVisible=false;
				}
			}
		}
		me._checkmark_tick0.ggUpdatePosition=function (useTransition) {
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
		me._thumbnail_nodeimage_0.appendChild(me._checkmark_tick0);
		el=me._thumbnail_active0=document.createElement('div');
		el.ggId="Thumbnail Active0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='border : 1px solid #d1d1d1;';
		hs+='cursor : default;';
		hs+='height : 78px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 78px;';
		hs+='pointer-events:auto;';
		hs+='border-radius:100px; overflow: visible !important; position:relative;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active0.ggIsActive=function() {
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
		me._thumbnail_active0.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				(me._thumbnail_active0.ggIsActive() == true)
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				(me.elementMouseOver['thumbnail_active0'] == true)
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active0.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active0.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active0.style[domTransition]='border-color 300ms ease 0ms';
				if (me._thumbnail_active0.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active0.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._thumbnail_active0.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active0.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active0.style.borderColor="rgba(209,209,209,1)";
				}
			}
		}
		me._thumbnail_active0.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active0']=true;
			me._thumbnail_active0.logicBlock_bordercolor();
		}
		me._thumbnail_active0.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active0']=false;
			me._thumbnail_active0.logicBlock_bordercolor();
		}
		me._thumbnail_active0.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active0']=false;
			me._thumbnail_active0.logicBlock_bordercolor();
		}
		me._thumbnail_active0.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage_0.appendChild(me._thumbnail_active0);
		me.__div.appendChild(me._thumbnail_nodeimage_0);
	};
	me.addSkin();
	me._top_menu.logicBlock_scaling();
	me._map_bg.logicBlock_scaling();
	me._main_menu.logicBlock_scaling();
	me._toggle2.logicBlock_scaling();
	me._abouttext.logicBlock_scaling();
	me._container_1.logicBlock_scaling();
	me._top_menu.logicBlock_visible();
	me._thumbnail_menu4.logicBlock_visible();
	me._thumbnail_menu3.logicBlock_visible();
	me._thumbnail_menu2.logicBlock_visible();
	me._thumbnail_menu1.logicBlock_visible();
	me._thumbnail_menu0.logicBlock_visible();
	me._abouttext.logicBlock_visible();
	me._help.logicBlock_visible();
	me._cover.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._top_menu.logicBlock_scaling();me._map_bg.logicBlock_scaling();me._main_menu.logicBlock_scaling();me._toggle2.logicBlock_scaling();me._abouttext.logicBlock_scaling();me._container_1.logicBlock_scaling(); });
	player.addListener('changenodeid', function(args) { me._top_menu.logicBlock_visible();me._thumbnail_menu4.logicBlock_visible();me._thumbnail_menu3.logicBlock_visible();me._thumbnail_menu2.logicBlock_visible();me._thumbnail_menu1.logicBlock_visible();me._thumbnail_menu0.logicBlock_visible();me._abouttext.logicBlock_visible();me._help.logicBlock_visible();me._cover.logicBlock_visible(); });
	player.addListener('varchanged_titleShow', function(args) { me._help.logicBlock_visible(); });
	player.addListener('varchanged_coverShow', function(args) { me._cover.logicBlock_visible(); });
	player.addListener('changenodeid', function(args) { me._thumbnail_cloner_4.callChildLogicBlocks_changenodeid();me._thumbnail_cloner_3.callChildLogicBlocks_changenodeid();me._thumbnail_cloner_2.callChildLogicBlocks_changenodeid();me._thumbnail_cloner_1.callChildLogicBlocks_changenodeid();me._thumbnail_cloner_0.callChildLogicBlocks_changenodeid(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner_4.callChildLogicBlocks_mouseover();me._thumbnail_cloner_3.callChildLogicBlocks_mouseover();me._thumbnail_cloner_2.callChildLogicBlocks_mouseover();me._thumbnail_cloner_1.callChildLogicBlocks_mouseover();me._thumbnail_cloner_0.callChildLogicBlocks_mouseover(); });
	player.addListener('changenodeid', function(args) { me._thumbnail_cloner_4.callChildLogicBlocks_active();me._thumbnail_cloner_3.callChildLogicBlocks_active();me._thumbnail_cloner_2.callChildLogicBlocks_active();me._thumbnail_cloner_1.callChildLogicBlocks_active();me._thumbnail_cloner_0.callChildLogicBlocks_active(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_pinya_mouseover();me.callChildLogicBlocksHotspot_pinicho_mouseover();me.callChildLogicBlocksHotspot_pinmar_mouseover();me.callChildLogicBlocksHotspot_pinuk_mouseover();me.callChildLogicBlocksHotspot_redpin_mouseover(); });
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
me._windowdown.style[domTransition]='none';
me._windowdown.style.visibility=(Number(me._windowdown.style.opacity)>0||!me._windowdown.style.opacity)?'inherit':'hidden';
me._windowdown.ggVisible=true;
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