// Garden Gnome Software - Skin
// Pano2VR 6.0.1/17227
// Filename: INK_material_2024.ggsk
// Generated Fri Mar 1 18:23:57 2024

function pano2vrSkin(player,base) {
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
		hs+='height : 76px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 6000px;';
		hs+='pointer-events:none;';
		hs+='backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._top_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
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
		el.className="ggskin ggskin_text s-title";
		el.ggType='text';
		hs ='';
		hs+='height : 33px;';
		hs+='left : 56px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : inherit;';
		hs+='width : 89.5833%;';
		hs+='pointer-events:auto;';
		hs+='font-size: 36px;color:#2B5E4A;line-height:29px;font-weight:100 !important;font-family:Navigo !important;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 33px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(43,94,74,1);';
		hs+='font-size: 32px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		hs+="filter: blur(0px);";
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
		me.divSkin.appendChild(me._top_menu);
		el=me._main_menu=document.createElement('div');
		el.ggId="main_menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container .menu-container";
		el.ggType='container';
		hs ='';
		hs+='bottom : 168px;';
		hs+='height : 526px;';
		hs+='left : 56px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:none;';
		hs+='backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-radius:76px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
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
		hs+='border : 1px solid rgba(255,255,255,0.117647);';
		hs+='cursor : default;';
		hs+='height : 526px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjcycHgiIGhlaWdodD0iNTZweCIgdmlld0JveD0iMCAwIDcyIDU2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjguMyAoMjk4MDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPm1hcDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLj'+
			'wvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJuZXciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJtYXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0LjAwMDAwMCwgMTYuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxnIGlkPSJTaGFwZSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjMuMzMzMzMzMywwIEwyMy4wNjY2NjY3LDAgTDE2LDIuOCBMOCwwIEwwLjUzMzMzMzMzMywyLjUzMzMzMzMzIEMwLjI2NjY2NjY2NywyLjY2NjY2NjY3IDAsMi44IDAsMy4y'+
			'IEwwLDIzLjMzMzMzMzMgQzAsMjMuNzMzMzMzMyAwLjI2NjY2NjY2NywyNCAwLjY2NjY2NjY2NywyNCBMMC45MzMzMzMzMzMsMjQgTDgsMjEuMiBMMTYsMjQgTDIzLjQ2NjY2NjcsMjEuNDY2NjY2NyBDMjMuNzMzMzMzMywyMS4zMzMzMzMzIDI0LDIxLjA2NjY2NjcgMjQsMjAuOCBMMjQsMC42NjY2NjY2NjcgQzI0LDAuMjY2NjY2NjY3IDIzLjczMzMzMzMsMCAyMy4zMzMzMzMzLDAgTDIzLjMzMzMzMzMsMCBaIE0xNiwyMS4zMzMzMzMzIEw4LDE4LjUzMzMzMzMgTDgsMi42NjY2NjY2NyBMMTYsNS40NjY2NjY2NyBMMTYsMjEuMzMzMzMzMyBMMTYsMjEuMzMzMzMzMyBaIj48L3BhdGg+CiAgICAgIC'+
			'AgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
		me._map_button__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;map_button;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map_button__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjcycHgiIGhlaWdodD0iNTZweCIgdmlld0JveD0iMCAwIDcyIDU2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjguMyAoMjk4MDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPm1hcF9ob3ZlcjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2'+
			'tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJuZXciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJtYXBfaG92ZXItY29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYuMDAwMDAwLCA4LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0icm93LWNvcHktNCIgZmlsbC1vcGFjaXR5PSIwLjI2IiBmaWxsPSIjMDAwMDAwIj4KICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwiIGN4PSIyMCIgY3k9IjIwIiByPSIyMCI+PC9jaXJjbGU+CiAgICAgICAgICAgIDwvZz4K'+
			'ICAgICAgICAgICAgPGcgaWQ9Im1hcCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOC4wMDAwMDAsIDguMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjMuMzMzMzMzMywwIEwyMy4wNjY2NjY3LDAgTDE2LDIuOCBMOCwwIEwwLjUzMzMzMzMzMywyLjUzMzMzMzMzIEMwLjI2NjY2NjY2NywyLjY2NjY2NjY3IDAsMi44IDAsMy4yIEwwLDIzLjMzMzMzMzMgQzAsMjMuNzMzMzMzMyAwLjI2NjY2NjY2NywyNCAwLjY2NjY2NjY2NywyNCBMMC45MzMzMzMzMzMsMjQgTDgsMjEuMiBMMTYsMjQgTDIzLjQ2NjY2NjcsMjEuNDY2NjY2NyBDMjMuNzMzMzMzMywyMS4zMz'+
			'MzMzMzIDI0LDIxLjA2NjY2NjcgMjQsMjAuOCBMMjQsMC42NjY2NjY2NjcgQzI0LDAuMjY2NjY2NjY3IDIzLjczMzMzMzMsMCAyMy4zMzMzMzMzLDAgTDIzLjMzMzMzMzMsMCBaIE0xNiwyMS4zMzMzMzMzIEw4LDE4LjUzMzMzMzMgTDgsMi42NjY2NjY2NyBMMTYsNS40NjY2NjY2NyBMMTYsMjEuMzMzMzMzMyBMMTYsMjEuMzMzMzMzMyBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';
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
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
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
			var flag=me._main_menu.ggPositonActive;
			if (player.transitionsDisabled) {
				me._main_menu.style[domTransition]='none';
			} else {
				me._main_menu.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._main_menu.ggParameter.rx=0;me._main_menu.ggParameter.ry=0;
				me._main_menu.style[domTransform]=parameterToTransform(me._main_menu.ggParameter);
			} else {
				me._main_menu.ggParameter.rx=350;me._main_menu.ggParameter.ry=0;
				me._main_menu.style[domTransform]=parameterToTransform(me._main_menu.ggParameter);
			}
			me._main_menu.ggPositonActive=!flag;
			var flag=me._toggle2.ggPositonActive;
			if (player.transitionsDisabled) {
				me._toggle2.style[domTransition]='none';
			} else {
				me._toggle2.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._toggle2.ggParameter.rx=0;me._toggle2.ggParameter.ry=0;
				me._toggle2.style[domTransform]=parameterToTransform(me._toggle2.ggParameter);
			} else {
				me._toggle2.ggParameter.rx=350;me._toggle2.ggParameter.ry=0;
				me._toggle2.style[domTransform]=parameterToTransform(me._toggle2.ggParameter);
			}
			me._toggle2.ggPositonActive=!flag;
		}
		me._map_button.onmouseover=function (e) {
			me._map_button__img.style.visibility='hidden';
			me._map_button__imgo.style.visibility='inherit';
		}
		me._map_button.onmouseout=function (e) {
			me._map_button__img.style.visibility='inherit';
			me._map_button__imgo.style.visibility='hidden';
		}
		me._map_button.ggUpdatePosition=function (useTransition) {
		}
		me._main_menu.appendChild(me._map_button);
		el=me._fullscreen=document.createElement('div');
		els=me._fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjcycHgiIGhlaWdodD0iNTZweCIgdmlld0JveD0iMCAwIDcyIDU2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjguMyAoMjk4MDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmZ1bGxzY3JlZW48L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIF'+
			'NrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0ibmV3IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iZnVsbHNjcmVlbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCAxNi4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9ImNyb3AtZnJlZSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMCwyLjY2NjY2NjY3IEwwLDggTDIuNjY2NjY2NjcsOCBMMi42NjY2NjY2NywyLjY2NjY2NjY3IEw4LDIuNjY2NjY2NjcgTDgsMCBMMi42NjY2'+
			'NjY2NywwIEMxLjIsMCAwLDEuMiAwLDIuNjY2NjY2NjcgTDAsMi42NjY2NjY2NyBaIE0yLjY2NjY2NjY3LDE2IEwwLDE2IEwwLDIxLjMzMzMzMzMgQzAsMjIuOCAxLjIsMjQgMi42NjY2NjY2NywyNCBMOCwyNCBMOCwyMS4zMzMzMzMzIEwyLjY2NjY2NjY3LDIxLjMzMzMzMzMgTDIuNjY2NjY2NjcsMTYgTDIuNjY2NjY2NjcsMTYgWiBNMjEuMzMzMzMzMywyMS4zMzMzMzMzIEwxNiwyMS4zMzMzMzMzIEwxNiwyNCBMMjEuMzMzMzMzMywyNCBDMjIuOCwyNCAyNCwyMi44IDI0LDIxLjMzMzMzMzMgTDI0LDE2IEwyMS4zMzMzMzMzLDE2IEwyMS4zMzMzMzMzLDIxLjMzMzMzMzMgTDIxLjMzMzMzMzMsMj'+
			'EuMzMzMzMzMyBaIE0yMS4zMzMzMzMzLDAgTDE2LDAgTDE2LDIuNjY2NjY2NjcgTDIxLjMzMzMzMzMsMi42NjY2NjY2NyBMMjEuMzMzMzMzMyw4IEwyNCw4IEwyNCwyLjY2NjY2NjY3IEMyNCwxLjIgMjIuOCwwIDIxLjMzMzMzMzMsMCBMMjEuMzMzMzMzMywwIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
		me._fullscreen__img.setAttribute('src',hs);
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
		}
		me._fullscreen.onmouseout=function (e) {
			me._fullscreen__img.style.visibility='inherit';
			me._fullscreen__imgo.style.visibility='hidden';
		}
		me._fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._main_menu.appendChild(me._fullscreen);
		el=me._gyro=document.createElement('div');
		els=me._gyro__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+Z3lyb19ob3ZlcjwvdGl0bGU+CiAgICA8ZyBpZD0iUGFub1RvdXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJwYW5vLTE5MjB4MTA4MCIgdHJhbnNmb3'+
			'JtPSJ0cmFuc2xhdGUoLTcyLCAtNzEyKSIgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU2LCAzNTcpIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJneXJvX2hvdmVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwgMzU1KSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9InNjcmVlbi1yb3RhdGlvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCwgOCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTYuNDY4NjE5MiwyLjUgQzE5Ljc4MjQyNjgsNCAyMi4wOTIwNTAyLDcuMiAy'+
			'Mi40OTM3MjM4LDExIEwyNCwxMSBDMjMuMzk3NDg5NSw0LjggMTguMjc2MTUwNiwwIDExLjk0OTc5MDgsMCBDMTEuNzQ4OTU0LDAgMTEuNTQ4MTE3MiwwIDExLjI0Njg2MTksMCBMMTUuMDYyNzYxNSwzLjggTDE2LjQ2ODYxOTIsMi41IEwxNi40Njg2MTkyLDIuNSBaIE0xMC4xNDIyNTk0LDEuNyBDOS41Mzk3NDg5NSwxLjEgOC42MzU5ODMyNiwxLjEgOC4wMzM0NzI4LDEuNyBMMS42MDY2OTQ1Niw4LjEgQzEuMDA0MTg0MSw4LjcgMS4wMDQxODQxLDkuNiAxLjYwNjY5NDU2LDEwLjIgTDEzLjY1NjkwMzgsMjIuMiBDMTQuMjU5NDE0MiwyMi44IDE1LjE2MzE3OTksMjIuOCAxNS43NjU2OTA0LDIyLj'+
			'IgTDIyLjE5MjQ2ODYsMTUuOCBDMjIuNzk0OTc5MSwxNS4yIDIyLjc5NDk3OTEsMTQuMyAyMi4xOTI0Njg2LDEzLjcgTDEwLjE0MjI1OTQsMS43IEwxMC4xNDIyNTk0LDEuNyBaIE0xNC43NjE1MDYzLDIxLjIgTDIuNzExMjk3MDcsOS4yIEw5LjEzODA3NTMxLDIuOCBMMjEuMTg4Mjg0NSwxNC44IEwxNC43NjE1MDYzLDIxLjIgTDE0Ljc2MTUwNjMsMjEuMiBaIE03LjQzMDk2MjM0LDIxLjUgQzQuMTE3MTU0ODEsMjAgMS44MDc1MzEzOCwxNi44IDEuNDA1ODU3NzQsMTMgTDAsMTMgQzAuNTAyMDkyMDUsMTkuMiA1LjYyMzQzMDk2LDI0IDExLjk0OTc5MDgsMjQgQzEyLjE1MDYyNzYsMjQgMTIuMzUx'+
			'NDY0NCwyNCAxMi42NTI3MTk3LDI0IEw4LjgzNjgyMDA4LDIwLjIgTDcuNDMwOTYyMzQsMjEuNSBMNy40MzA5NjIzNCwyMS41IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';
		me._gyro__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;gyro;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+Z3lyb19ob3ZlcjwvdGl0bGU+CiAgICA8ZyBpZD0iUGFub1RvdXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJwYW5vLTE5MjB4MTA4MCIgdHJhbnNmb3'+
			'JtPSJ0cmFuc2xhdGUoLTcyLCAtNzEyKSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1NiwgMzU3KSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iZ3lyb19ob3ZlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsIDM1NSkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJyb3ctY29weS02IiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjAuMjYiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAg'+
			'ICAgICAgICAgICA8ZyBpZD0ic2NyZWVuLXJvdGF0aW9uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LCA4KSIgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjRkZGRkZGIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE2LjQ2ODYxOTIsMi41IEMxOS43ODI0MjY4LDQgMjIuMDkyMDUwMiw3LjIgMjIuNDkzNzIzOCwxMSBMMjQsMTEgQzIzLjM5NzQ4OTUsNC44IDE4LjI3NjE1MDYsMCAxMS45NDk3OTA4LDAgQzExLjc0ODk1NCwwIDExLjU0ODExNzIsMCAxMS4yNDY4NjE5LDAgTDE1LjA2Mjc2MTUsMy44IEwxNi40Njg2MTkyLDIuNSBMMTYuNDY4NjE5MiwyLjUgWiBNMTAuMTQyMjU5NC'+
			'wxLjcgQzkuNTM5NzQ4OTUsMS4xIDguNjM1OTgzMjYsMS4xIDguMDMzNDcyOCwxLjcgTDEuNjA2Njk0NTYsOC4xIEMxLjAwNDE4NDEsOC43IDEuMDA0MTg0MSw5LjYgMS42MDY2OTQ1NiwxMC4yIEwxMy42NTY5MDM4LDIyLjIgQzE0LjI1OTQxNDIsMjIuOCAxNS4xNjMxNzk5LDIyLjggMTUuNzY1NjkwNCwyMi4yIEwyMi4xOTI0Njg2LDE1LjggQzIyLjc5NDk3OTEsMTUuMiAyMi43OTQ5NzkxLDE0LjMgMjIuMTkyNDY4NiwxMy43IEwxMC4xNDIyNTk0LDEuNyBMMTAuMTQyMjU5NCwxLjcgWiBNMTQuNzYxNTA2MywyMS4yIEwyLjcxMTI5NzA3LDkuMiBMOS4xMzgwNzUzMSwyLjggTDIxLjE4ODI4NDUs'+
			'MTQuOCBMMTQuNzYxNTA2MywyMS4yIEwxNC43NjE1MDYzLDIxLjIgWiBNNy40MzA5NjIzNCwyMS41IEM0LjExNzE1NDgxLDIwIDEuODA3NTMxMzgsMTYuOCAxLjQwNTg1Nzc0LDEzIEwwLDEzIEMwLjUwMjA5MjA1LDE5LjIgNS42MjM0MzA5NiwyNCAxMS45NDk3OTA4LDI0IEMxMi4xNTA2Mjc2LDI0IDEyLjM1MTQ2NDQsMjQgMTIuNjUyNzE5NywyNCBMOC44MzY4MjAwOCwyMC4yIEw3LjQzMDk2MjM0LDIxLjUgTDcuNDMwOTYyMzQsMjEuNSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgIC'+
			'AgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
		me._gyro__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;gyro;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="gyro";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 293px;';
		hs+='visibility : inherit;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro.ggIsActive=function() {
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
		me._gyro.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gyro.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gyro.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gyro.style[domTransition]='';
				if (me._gyro.ggCurrentLogicStateVisible == 0) {
					me._gyro.style.visibility=(Number(me._gyro.style.opacity)>0||!me._gyro.style.opacity)?'inherit':'hidden';
					me._gyro.ggVisible=true;
				}
				else {
					me._gyro.style.visibility=(Number(me._gyro.style.opacity)>0||!me._gyro.style.opacity)?'inherit':'hidden';
					me._gyro.ggVisible=true;
				}
			}
		}
		me._gyro.onclick=function (e) {
			gyro.toggle();
		}
		me._gyro.onmouseover=function (e) {
			me._gyro__img.style.visibility='hidden';
			me._gyro__imgo.style.visibility='inherit';
		}
		me._gyro.onmouseout=function (e) {
			me._gyro__img.style.visibility='inherit';
			me._gyro__imgo.style.visibility='hidden';
		}
		me._gyro.ggUpdatePosition=function (useTransition) {
		}
		me._main_menu.appendChild(me._gyro);
		el=me._rotate=document.createElement('div');
		els=me._rotate__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjcycHgiIGhlaWdodD0iNTZweCIgdmlld0JveD0iMCAwIDcyIDU2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjguMyAoMjk4MDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPnJvdGF0ZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldG'+
			'NoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJuZXciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJyb3RhdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0LjAwMDAwMCwgMTYuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxnIGlkPSJyZWZyZXNoIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMC40LDMuNiBDMTguMywxLjM1IDE1LjMsMCAxMiwwIEM1LjQsMCAwLDUuNCAwLDEyIEMwLDE4LjYgNS40LDI0IDEyLDI0IEMxNy41NSwyNCAyMi4yLDIwLjEg'+
			'MjMuNTUsMTUgTDIwLjQsMTUgQzE5LjIsMTguNDUgMTUuOSwyMSAxMiwyMSBDNy4wNSwyMSAzLDE2Ljk1IDMsMTIgQzMsNy4wNSA3LjA1LDMgMTIsMyBDMTQuNTUsMyAxNi42NSw0LjA1IDE4LjMsNS43IEwxMy41LDEwLjUgTDI0LDEwLjUgTDI0LDAgTDIwLjQsMy42IEwyMC40LDMuNiBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';
		me._rotate__img.setAttribute('src',hs);
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
		el.className="ggskin ggskin_svg ";
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
		}
		me._rotate.onmouseout=function (e) {
			me._rotate__img.style.visibility='inherit';
			me._rotate__imgo.style.visibility='hidden';
		}
		me._rotate.ggUpdatePosition=function (useTransition) {
		}
		me._main_menu.appendChild(me._rotate);
		el=me._sound=document.createElement('div');
		els=me._sound__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjcycHgiIGhlaWdodD0iNTZweCIgdmlld0JveD0iMCAwIDcyIDU2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjguMyAoMjk4MDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPnNvdW5kX29uPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2'+
			'V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9Im5ldyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9InNvdW5kX29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDE4LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8ZyBpZD0idm9sdW1lLXVwIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDYuMjYxMzYzNjQgTDAsMTIuNzM4NjM2NCBMNC40NDQ0NDQ0NCwxMi43Mzg2MzY0IEwxMCwxOC4xMzYzNjM2IEwxMCwwLjg2MzYzNjM2NCBMNC40'+
			'NDQ0NDQ0NCw2LjI2MTM2MzY0IEwwLDYuMjYxMzYzNjQgTDAsNi4yNjEzNjM2NCBaIE0xNSw5LjUgQzE1LDcuNTU2ODE4MTggMTMuODg4ODg4OSw1LjkzNzUgMTIuMjIyMjIyMiw1LjE4MTgxODE4IEwxMi4yMjIyMjIyLDEzLjgxODE4MTggQzEzLjg4ODg4ODksMTMuMDYyNSAxNSwxMS40NDMxODE4IDE1LDkuNSBMMTUsOS41IFogTTEyLjIyMjIyMjIsMCBMMTIuMjIyMjIyMiwyLjI2NzA0NTQ1IEMxNS40NDQ0NDQ0LDMuMjM4NjM2MzYgMTcuNzc3Nzc3OCw2LjA0NTQ1NDU1IDE3Ljc3Nzc3NzgsOS41IEMxNy43Nzc3Nzc4LDEyLjk1NDU0NTUgMTUuNDQ0NDQ0NCwxNS43NjEzNjM2IDEyLjIyMjIyMj'+
			'IsMTYuNzMyOTU0NSBMMTIuMjIyMjIyMiwxOSBDMTYuNjY2NjY2NywxOC4wMjg0MDkxIDIwLDE0LjE0MjA0NTUgMjAsOS41IEMyMCw0Ljg1Nzk1NDU1IDE2LjY2NjY2NjcsMC45NzE1OTA5MDkgMTIuMjIyMjIyMiwwIEwxMi4yMjIyMjIyLDAgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
		me._sound__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;sound;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sound__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjcycHgiIGhlaWdodD0iNTZweCIgdmlld0JveD0iMCAwIDcyIDU2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjguMyAoMjk4MDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPnNvdW5kX29uX2hvdmVyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2'+
			'l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9Im5ldyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9InNvdW5kX29uX2hvdmVyLWNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LjAwMDAwMCwgOC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9InJvdyIgZmlsbC1vcGFjaXR5PSIwLjI2IiBmaWxsPSIjMDAwMDAwIj4KICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwiIGN4PSIyMCIgY3k9IjIwIiByPSIyMCI+PC9jaXJjbGU+CiAgICAgICAgICAgIDwv'+
			'Zz4KICAgICAgICAgICAgPGcgaWQ9InZvbHVtZS11cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuMDAwMDAwLCAxMC4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDYuMjYxMzYzNjQgTDAsMTIuNzM4NjM2NCBMNC40NDQ0NDQ0NCwxMi43Mzg2MzY0IEwxMCwxOC4xMzYzNjM2IEwxMCwwLjg2MzYzNjM2NCBMNC40NDQ0NDQ0NCw2LjI2MTM2MzY0IEwwLDYuMjYxMzYzNjQgTDAsNi4yNjEzNjM2NCBaIE0xNSw5LjUgQzE1LDcuNTU2ODE4MTggMTMuODg4ODg4OSw1LjkzNzUgMTIuMjIyMjIyMiw1LjE4MTgxODE4IEwxMi4yMjIyMjIyLDEzLjgxODE4MT'+
			'ggQzEzLjg4ODg4ODksMTMuMDYyNSAxNSwxMS40NDMxODE4IDE1LDkuNSBMMTUsOS41IFogTTEyLjIyMjIyMjIsMCBMMTIuMjIyMjIyMiwyLjI2NzA0NTQ1IEMxNS40NDQ0NDQ0LDMuMjM4NjM2MzYgMTcuNzc3Nzc3OCw2LjA0NTQ1NDU1IDE3Ljc3Nzc3NzgsOS41IEMxNy43Nzc3Nzc4LDEyLjk1NDU0NTUgMTUuNDQ0NDQ0NCwxNS43NjEzNjM2IDEyLjIyMjIyMjIsMTYuNzMyOTU0NSBMMTIuMjIyMjIyMiwxOSBDMTYuNjY2NjY2NywxOC4wMjg0MDkxIDIwLDE0LjE0MjA0NTUgMjAsOS41IEMyMCw0Ljg1Nzk1NDU1IDE2LjY2NjY2NjcsMC45NzE1OTA5MDkgMTIuMjIyMjIyMiwwIEwxMi4yMjIyMjIy'+
			'LDAgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
		me._sound__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;sound;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="sound";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 176px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._sound.ggIsActive=function() {
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
		me._sound.onclick=function (e) {
			player.playPauseSound("_background","1");
		}
		me._sound.onmouseover=function (e) {
			me._sound__img.style.visibility='hidden';
			me._sound__imgo.style.visibility='inherit';
		}
		me._sound.onmouseout=function (e) {
			me._sound__img.style.visibility='inherit';
			me._sound__imgo.style.visibility='hidden';
		}
		me._sound.ggUpdatePosition=function (useTransition) {
		}
		me._main_menu.appendChild(me._sound);
		el=me._home=document.createElement('div');
		els=me._home__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjcycHgiIGhlaWdodD0iNTZweCIgdmlld0JveD0iMCAwIDcyIDU2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjguMyAoMjk4MDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmhvbWU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC'+
			'48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0ibmV3IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaG9tZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCAxNi4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9IlNoYXBlIj4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0iMTAgMjEgMTAgMTMuNTg4MjM1MyAxNSAxMy41ODgyMzUzIDE1IDIxIDIxLjI1IDIxIDIxLjI1IDExLjExNzY0NzEgMjUgMTEuMTE3NjQ3MSAxMi41IDAgMCAx'+
			'MS4xMTc2NDcxIDMuNzUgMTEuMTE3NjQ3MSAzLjc1IDIxIj48L3BvbHlnb24+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
		me._home__img.setAttribute('src',hs);
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
		el.className="ggskin ggskin_svg ";
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
			player.moveToDefaultViewEx(1,0);
		}
		me._home.onmouseover=function (e) {
			me._home__img.style.visibility='hidden';
			me._home__imgo.style.visibility='inherit';
		}
		me._home.onmouseout=function (e) {
			me._home__img.style.visibility='inherit';
			me._home__imgo.style.visibility='hidden';
		}
		me._home.ggUpdatePosition=function (useTransition) {
		}
		me._main_menu.appendChild(me._home);
		el=me._zoom_out=document.createElement('div');
		els=me._zoom_out__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjcycHgiIGhlaWdodD0iNTZweCIgdmlld0JveD0iMCAwIDcyIDU2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjguMyAoMjk4MDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPnpvb21fb3V0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2'+
			'V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9Im5ldyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Inpvb21fb3V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4wMDAwMDAsIDE2LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8ZyBpZD0icmVtb3ZlLWNpcmNsZS1vdXRsaW5lIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02LDEwLjggTDYsMTMuMiBMMTgsMTMuMiBMMTgsMTAuOCBMNiwxMC44IEw2LDEwLjggWiBNMTIsMCBDNS40LDAgMCw1LjQgMCwx'+
			'MiBDMCwxOC42IDUuNCwyNCAxMiwyNCBDMTguNiwyNCAyNCwxOC42IDI0LDEyIEMyNCw1LjQgMTguNiwwIDEyLDAgTDEyLDAgWiBNMTIsMjEuNiBDNi43MiwyMS42IDIuNCwxNy4yOCAyLjQsMTIgQzIuNCw2LjcyIDYuNzIsMi40IDEyLDIuNCBDMTcuMjgsMi40IDIxLjYsNi43MiAyMS42LDEyIEMyMS42LDE3LjI4IDE3LjI4LDIxLjYgMTIsMjEuNiBMMTIsMjEuNiBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';
		me._zoom_out__img.setAttribute('src',hs);
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
		el.className="ggskin ggskin_svg ";
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
		}
		me._zoom_out.onmouseout=function (e) {
			me._zoom_out__img.style.visibility='inherit';
			me._zoom_out__imgo.style.visibility='hidden';
			me.elementMouseDown['zoom_out']=false;
		}
		me._zoom_out.onmousedown=function (e) {
			me.elementMouseDown['zoom_out']=true;
		}
		me._zoom_out.onmouseup=function (e) {
			me.elementMouseDown['zoom_out']=false;
		}
		me._zoom_out.ontouchend=function (e) {
			me.elementMouseDown['zoom_out']=false;
		}
		me._zoom_out.ggUpdatePosition=function (useTransition) {
		}
		me._main_menu.appendChild(me._zoom_out);
		el=me._zoom_in=document.createElement('div');
		els=me._zoom_in__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjcycHgiIGhlaWdodD0iNTZweCIgdmlld0JveD0iMCAwIDcyIDU2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjguMyAoMjk4MDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPnpvb21faW48L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZX'+
			'RjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0ibmV3IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iem9vbV9pbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCAxNi4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9ImFkZC1jaXJjbGUtb3V0bGluZSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuMiw2IEwxMC44LDYgTDEwLjgsMTAuOCBMNiwxMC44IEw2LDEzLjIgTDEwLjgsMTMuMiBMMTAuOCwxOCBMMTMuMiwxOCBMMTMuMiwx'+
			'My4yIEwxOCwxMy4yIEwxOCwxMC44IEwxMy4yLDEwLjggTDEzLjIsNiBMMTMuMiw2IFogTTEyLDAgQzUuNCwwIDAsNS40IDAsMTIgQzAsMTguNiA1LjQsMjQgMTIsMjQgQzE4LjYsMjQgMjQsMTguNiAyNCwxMiBDMjQsNS40IDE4LjYsMCAxMiwwIEwxMiwwIFogTTEyLDIxLjYgQzYuNzIsMjEuNiAyLjQsMTcuMjggMi40LDEyIEMyLjQsNi43MiA2LjcyLDIuNCAxMiwyLjQgQzE3LjI4LDIuNCAyMS42LDYuNzIgMjEuNiwxMiBDMjEuNiwxNy4yOCAxNy4yOCwyMS42IDEyLDIxLjYgTDEyLDIxLjYgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2'+
			'c+Cjwvc3ZnPg==';
		me._zoom_in__img.setAttribute('src',hs);
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
		el.className="ggskin ggskin_svg ";
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
		}
		me._zoom_in.onmouseout=function (e) {
			me._zoom_in__img.style.visibility='inherit';
			me._zoom_in__imgo.style.visibility='hidden';
			me.elementMouseDown['zoom_in']=false;
		}
		me._zoom_in.onmousedown=function (e) {
			me.elementMouseDown['zoom_in']=true;
		}
		me._zoom_in.onmouseup=function (e) {
			me.elementMouseDown['zoom_in']=false;
		}
		me._zoom_in.ontouchend=function (e) {
			me.elementMouseDown['zoom_in']=false;
		}
		me._zoom_in.ggUpdatePosition=function (useTransition) {
		}
		me._main_menu.appendChild(me._zoom_in);
		me.divSkin.appendChild(me._main_menu);
		el=me._toggle2=document.createElement('div');
		els=me._toggle2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjcycHgiIGhlaWdodD0iNTZweCIgdmlld0JveD0iMCAwIDcyIDU2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjguMyAoMjk4MDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPnRvZ2dsZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldG'+
			'NoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJuZXciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJ0b2dnbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0LjAwMDAwMCwgMjEuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxnIGlkPSJtZW51Ij4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDE2IEwyNCwxNiBMMjQsMTMuMzMzMzMzMyBMMCwxMy4zMzMzMzMzIEwwLDE2IEwwLDE2IFogTTAsOS4zMzMzMzMzMyBMMjQsOS4zMzMzMzMzMyBMMjQsNi42NjY2'+
			'NjY2NyBMMCw2LjY2NjY2NjY3IEwwLDkuMzMzMzMzMzMgTDAsOS4zMzMzMzMzMyBaIE0wLDAgTDAsMi42NjY2NjY2NyBMMjQsMi42NjY2NjY2NyBMMjQsMCBMMCwwIEwwLDAgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
		me._toggle2__img.setAttribute('src',hs);
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
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 178px;';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : 56px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 0%';
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
		el=me._navmenu_bg=document.createElement('div');
		el.ggId="navmenu_bg";
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
		hs+='border : 1px solid rgba(255,255,255,0.117647);';
		hs+='bottom : 32px;';
		hs+='cursor : default;';
		hs+='height : 112px;';
		hs+='left : 34px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 112px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border-radius:120px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._navmenu_bg.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._navmenu_bg.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._navmenu_bg);
		el=me._arrow_menu=document.createElement('div');
		el.ggId="arrow_menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 32px;';
		hs+='height : 112px;';
		hs+='left : 34px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 112px;';
		hs+='pointer-events:none;';
		hs+='backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-radius:112px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._arrow_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._arrow_menu.logicBlock_scaling = function() {
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
			if (me._arrow_menu.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._arrow_menu.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._arrow_menu.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._arrow_menu.ggCurrentLogicStateScaling == 0) {
					me._arrow_menu.ggParameter.sx = 0.6;
					me._arrow_menu.ggParameter.sy = 0.6;
					me._arrow_menu.style[domTransform]=parameterToTransform(me._arrow_menu.ggParameter);
				}
				else {
					me._arrow_menu.ggParameter.sx = 1;
					me._arrow_menu.ggParameter.sy = 1;
					me._arrow_menu.style[domTransform]=parameterToTransform(me._arrow_menu.ggParameter);
				}
			}
		}
		me._arrow_menu.ggUpdatePosition=function (useTransition) {
		}
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
			'5zZm9ybT0idHJhbnNsYXRlKC0zNSwgLTkzMCkiPgogICAgICAgICAgICA8ZyBpZD0iYXJyb3dfdXBfaG92ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1LCA5MzApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01NSwwIEw1NSw1NS41MDQ0MjQ4IEwwLjAwMiw1NS41MDQgTDAsNTUuMjg1MDE4IEMwLDI1LjA1NDI4NDkgMjQuNDgyMjk1LDAuNDkwMTk0ODU2IDU0Ljg3MDM3OCwwLjAwMTkzNjEyODAyIEw1NSwwIFoiIGlkPSJDb21iaW5lZC1TaGFwZS1Db3B5IiBmaWxsPSIjRkZGRkZGIiBvcGFjaXR5PSIwLjMwMTg3NDA3Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0i'+
			'U2hhcGUtQ29weS0zIiBmaWxsPSIjMzkzOTM5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOC45OTI2LCAyOS43MDk1KSByb3RhdGUoNDUpIHRyYW5zbGF0ZSgtMjguOTkyNiwgLTI5LjcwOTUpIiBwb2ludHM9IjM1LjkzNDMzNTkgMjEuMjU5ODQyNiAzMy4zMjY1ODQgMTguNzAzNjY2OCAyMi4wNTA5MjY0IDI5Ljc2MDI3NDggMzMuMjI3MDA2IDQwLjcxNTMxMzkgMzUuODU3OTkyNyAzOC4xMzU0Mzg3IDI3LjI4OTY2NTEgMjkuNzM2NTc1NCI+PC9wb2x5Z29uPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
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
			'RyYW5zZm9ybT0idHJhbnNsYXRlKC0yMjIsIC05MzApIj4KICAgICAgICAgICAgPGcgaWQ9ImFycm93X3JpZ2h0X2hvdmVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTAuNSwgOTU3Ljc1MjIpIHJvdGF0ZSgtMjcwKSB0cmFuc2xhdGUoLTI1MC41LCAtOTU3Ljc1MjIpdHJhbnNsYXRlKDIyMywgOTMwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNTUsMCBMNTUsNTUuNTA0NDI0OCBMMC4wMDIsNTUuNTA0IEwwLDU1LjI4NTAxOCBDMCwyNS4wNTQyODQ5IDI0LjQ4MjI5NSwwLjQ5MDE5NDg1NiA1NC44NzAzNzgsMC4wMDE5MzYxMjgwMiBMNTUsMCBaIiBpZD0iQ29tYmluZWQtU2hhcGUtQ29w'+
			'eSIgZmlsbD0iI0ZGRkZGRiIgb3BhY2l0eT0iMC4zMDE4NzQwNyI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlLUNvcHktMyIgZmlsbD0iIzM5MzkzOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjguOTkyNiwgMjkuNzA5NSkgcm90YXRlKDQ1KSB0cmFuc2xhdGUoLTI4Ljk5MjYsIC0yOS43MDk1KSIgcG9pbnRzPSIzNS45MzQzMzU5IDIxLjI1OTg0MjYgMzMuMzI2NTg0IDE4LjcwMzY2NjggMjIuMDUwOTI2NCAyOS43NjAyNzQ4IDMzLjIyNzAwNiA0MC43MTUzMTM5IDM1Ljg1Nzk5MjcgMzguMTM1NDM4NyAyNy4yODk2NjUxIDI5LjczNjU3NTQiPjwvcG9seWdvbj4KIC'+
			'AgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';
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
			'JhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2NywgLTk4NSkiPgogICAgICAgICAgICA8ZyBpZD0iYXJyb3dfbGVmdF9ob3ZlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTk1LjUsIDEwMTIuNzUyMikgcm90YXRlKC05MCkgdHJhbnNsYXRlKC0xOTUuNSwgLTEwMTIuNzUyMil0cmFuc2xhdGUoMTY4LCA5ODUpIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01NSwwIEw1NSw1NS41MDQ0MjQ4IEwwLjAwMiw1NS41MDQgTDAsNTUuMjg1MDE4IEMwLDI1LjA1NDI4NDkgMjQuNDgyMjk1LDAuNDkwMTk0ODU2IDU0Ljg3MDM3OCwwLjAwMTkzNjEyODAyIEw1NSwwIFoiIGlkPSJDb21iaW5lZC1TaGFwZS1Db3B5'+
			'IiBmaWxsPSIjRkZGRkZGIiBvcGFjaXR5PSIwLjMwMTg3NDA3Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iU2hhcGUtQ29weS0zIiBmaWxsPSIjMzkzOTM5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOC45OTI2LCAyOS43MDk1KSByb3RhdGUoNDUpIHRyYW5zbGF0ZSgtMjguOTkyNiwgLTI5LjcwOTUpIiBwb2ludHM9IjM1LjkzNDMzNTkgMjEuMjU5ODQyNiAzMy4zMjY1ODQgMTguNzAzNjY2OCAyMi4wNTA5MjY0IDI5Ljc2MDI3NDggMzMuMjI3MDA2IDQwLjcxNTMxMzkgMzUuODU3OTkyNyAzOC4xMzU0Mzg3IDI3LjI4OTY2NTEgMjkuNzM2NTc1NCI+PC9wb2x5Z29uPgogIC'+
			'AgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
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
			'JhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyMywgLTk4NSkiPgogICAgICAgICAgICA8ZyBpZD0iYXJyb3dfZG93bl9ob3ZlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUwLjUsIDEwMTIuNzUyMikgcm90YXRlKC0xODApIHRyYW5zbGF0ZSgtMjUwLjUsIC0xMDEyLjc1MjIpdHJhbnNsYXRlKDIyMywgOTg1KSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNTUsMCBMNTUsNTUuNTA0NDI0OCBMMC4wMDIsNTUuNTA0IEwwLDU1LjI4NTAxOCBDMCwyNS4wNTQyODQ5IDI0LjQ4MjI5NSwwLjQ5MDE5NDg1NiA1NC44NzAzNzgsMC4wMDE5MzYxMjgwMiBMNTUsMCBaIiBpZD0iQ29tYmluZWQtU2hhcGUtQ29w'+
			'eSIgZmlsbD0iI0ZGRkZGRiIgb3BhY2l0eT0iMC4zMDE4NzQwNyI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlLUNvcHktMyIgZmlsbD0iIzM5MzkzOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjguOTkyNiwgMjkuNzA5NSkgcm90YXRlKDQ1KSB0cmFuc2xhdGUoLTI4Ljk5MjYsIC0yOS43MDk1KSIgcG9pbnRzPSIzNS45MzQzMzU5IDIxLjI1OTg0MjYgMzMuMzI2NTg0IDE4LjcwMzY2NjggMjIuMDUwOTI2NCAyOS43NjAyNzQ4IDMzLjIyNzAwNiA0MC43MTUzMTM5IDM1Ljg1Nzk5MjcgMzguMTM1NDM4NyAyNy4yODk2NjUxIDI5LjczNjU3NTQiPjwvcG9seWdvbj4KIC'+
			'AgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';
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
		me.divSkin.appendChild(me._arrow_menu);
		el=me._loading_container=document.createElement('div');
		el.ggId="loading_container";
		el.ggDx=0;
		el.ggDy=-9;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 192px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 192px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loading_container.ggUpdatePosition=function (useTransition) {
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
		el=me._loadback=document.createElement('div');
		el.ggId="load-back";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 4480px;';
		hs+='left : -2224px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -2135px;';
		hs+='visibility : inherit;';
		hs+='width : 4640px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loadback.ggIsActive=function() {
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
		me._loadback.ggUpdatePosition=function (useTransition) {
		}
		me._loading_container.appendChild(me._loadback);
		el=me._svg_15=document.createElement('div');
		els=me._svg_15__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTQ0cHgiIGhlaWdodD0iMTQ0cHgiIHZpZXdCb3g9IjAgMCAxNDQgMTQ0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPmxvYWRlcjwvdGl0bGU+CiAgICA8ZyBpZD0iUGFub1RvdXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgICAgICAgPGcgaWQ9Im'+
			'NvdmVyLS0xOTIweDEwODAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNjIsIC02OTQpIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iOCI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNjYsNzY2IEMyNjYsODAzLjU1NTM2MyAyOTYuNDQ0NjM3LDgzNCAzMzQsODM0IE00MDIsNzY2IEM0MDIsNzI4LjQ0NDYzNyAzNzEuNTU1MzYzLDY5OCAzMzQsNjk4IiBpZD0ibG9hZGVyIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
		me._svg_15__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_15;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 15";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 136px;';
		hs+='left : 33px;';
		hs+='position : absolute;';
		hs+='top : 27px;';
		hs+='visibility : inherit;';
		hs+='width : 136px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_15.ggIsActive=function() {
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
		me._svg_15.ggUpdatePosition=function (useTransition) {
		}
		me._loading_container.appendChild(me._svg_15);
		el=me._loading_text=document.createElement('div');
		els=me._loading_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="loading_text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 21px;';
		hs+='left : 66px;';
		hs+='position : absolute;';
		hs+='top : 86px;';
		hs+='visibility : inherit;';
		hs+='width : 69px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='color: rgba(224,224,224,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._loading_text.ggUpdateText=function() {
			var hs=(player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loading_text.ggUpdateText();
		el.appendChild(els);
		me._loading_text.ggIsActive=function() {
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
		me._loading_text.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((67-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._loading_container.appendChild(me._loading_text);
		me.divSkin.appendChild(me._loading_container);
		me._arrow_menu.style[domTransition]='none';
		me._arrow_menu.ggParameter.a="45.0000";
		me._arrow_menu.style[domTransform]=parameterToTransform(me._arrow_menu.ggParameter);
		if (player.transitionsDisabled) {
			me._svg_15.style[domTransition]='none';
		} else {
			me._svg_15.style[domTransition]='all 1000ms ease-out 0ms';
		}
		me._svg_15.ggParameter.a="10000.0000";
		me._svg_15.style[domTransform]=parameterToTransform(me._svg_15.ggParameter);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('imagesready', function() {
			if (player.transitionsDisabled) {
				me._loading_container.style[domTransition]='none';
			} else {
				me._loading_container.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._loading_container.style.opacity='0';
			me._loading_container.style.visibility='hidden';
		});
		player.addListener('beforechangenode', function() {
			if (player.transitionsDisabled) {
				me._loading_container.style[domTransition]='none';
			} else {
				me._loading_container.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._loading_container.style.opacity='1';
			me._loading_container.style.visibility=me._loading_container.ggVisible?'inherit':'hidden';
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
	player.addListener('changenodeid', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		me._pan_title.ggUpdateText();
		if (me.elementMouseDown['zoom_out']) {
			player.changeFovLog(1.4,true);
		}
		if (me.elementMouseDown['zoom_in']) {
			player.changeFovLog(-1.4,true);
		}
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
		me._loading_text.ggUpdateText();
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_hotspot_1(parentScope,hotspot) {
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
		el=me._hotspot_1=document.createElement('div');
		el.ggId="Hotspot 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 118px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._hotspot_1.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjYxcHgiIGhlaWdodD0iOTRweCIgdmlld0JveD0iMCAwIDYxIDk0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjguMyAoMjk4MDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPnBpbjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLj'+
			'wvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJuZXciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJwaW4iPgogICAgICAgICAgICA8cGF0aCBkPSJNOC41ODM0OTk3Nyw0OS45NTIwNjMyIEMxNi44NjY5OTUzLDYyLjUzMTMxNzcgMjguNDkyMTg5MSw3Ny42NjA2MjIxIDI4LjQ5MjE4OTMsOTIuMTI1MjIxNiBDMjguNDkyMTg5Myw5My4zMDY2NDgzIDI5Ljg3NjYxODQsOTQgMzAuNSw5NCBDMzEuMTMwMjQ0NCw5NCAzMi4zNTIyNzg0LDkzLjU0MDY2MTUgMzIuNTcyNTMxOCw5Mi4xMjUy'+
			'MjE2IEMzMi45NjA0ODk1LDc1Ljc1MDA3MDUgNDQuMTEzNDU2MSw2Mi4wNDk5MzY0IDUyLjI4NTcxNDMsNDkuOTUyMDYzMiBDNTcuMzIwMTI3Myw0Mi40OTkzMjYyIDYxLDM1LjM4OTU0NjMgNjEsMjkuNDI2MTc5OSBDNjEsMTMuMTc0NTQ5NSA0Ny4zNDQ2ODQ5LDAgMzAuNSwwIEMxMy42NTUzMTUxLDAgMCwxMy4xNzQ1NDk1IDAsMjkuNDI2MTc5OSBDMCwzNS40OTIwMDE2IDMuMzQwOTg2OTIsNDEuOTkwODIyMyA4LjU4MzQ5OTc3LDQ5Ljk1MjA2MzIgWiIgZmlsbD0iI0RDNDkzQyI+PC9wYXRoPgogICAgICAgICAgICA8ZWxsaXBzZSBpZD0ib3ZhbCIgZmlsbD0iIzgwMkMyNyIgY3g9IjMwLjUiIG'+
			'N5PSIyOSIgcng9IjEwLjUiIHJ5PSIxMCI+PC9lbGxpcHNlPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';
		me._svg_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_1;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 47px;';
		hs+='left : -14px;';
		hs+='position : absolute;';
		hs+='top : -46px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
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
		me._svg_1.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_1.appendChild(me._svg_1);
		me.__div = me._hotspot_1;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
			hotspot.skinid = 'Hotspot 1';
			hsinst = new SkinHotspotClass_hotspot_1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				hotspotTemplates['Hotspot 1'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	me._main_menu.logicBlock_scaling();
	me._toggle2.logicBlock_scaling();
	me._arrow_menu.logicBlock_scaling();
	me._gyro.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._main_menu.logicBlock_scaling();me._toggle2.logicBlock_scaling();me._arrow_menu.logicBlock_scaling(); });
	player.addListener('configloaded', function(args) { me._gyro.logicBlock_visible(); });
	me.skinTimerEvent();
};