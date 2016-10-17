// Garden Gnome Software - Skin
// Pano2VR 5.0.2/15080
// Filename: INK_material2.ggsk
// Generated Mon Oct 17 08:55:55 2016

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	ggSkinVars['currentPan'] = 'index';
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
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
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
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
	
	parameterToTransform=function(p) {
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
		this._map_bg=document.createElement('div');
		this._map_bg.ggId="map_bg";
		this._map_bg.ggTop=-120;
		this._map_bg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_bg.ggVisible=true;
		this._map_bg.className='ggskin ggskin_rectangle ';
		this._map_bg.ggType='rectangle';
		hs ='';
		hs+='background : #282828;';
		hs+='border : 0px solid #000000;';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : -120px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		this._map_bg.setAttribute('style',hs);
		this._map_bg.style[domTransform + 'Origin']='50% 0%';
		me._map_bg.ggIsActive=function() {
			return false;
		}
		me._map_bg.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._map_bg.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._thumbnail_menu=document.createElement('div');
		this._thumbnail_menu__content=document.createElement('div');
		this._thumbnail_menu.ggContent=this._thumbnail_menu__content;
		this._thumbnail_menu.appendChild(this._thumbnail_menu__content);
		hs ='';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		this._thumbnail_menu__content.setAttribute('style',hs);
		this._thumbnail_menu.ggId="Thumbnail Menu";
		this._thumbnail_menu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_menu.ggVisible=true;
		this._thumbnail_menu.className='ggskin ggskin_scrollarea ';
		this._thumbnail_menu.ggType='scrollarea';
		hs ='';
		hs+='-webkit-overflow-scrolling : touch;';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : 115px;';
		hs+='left : 0px;';
		hs+='overflow-x : scroll;';
		hs+='overflow-y : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		this._thumbnail_menu.setAttribute('style',hs);
		this._thumbnail_menu.style[domTransform + 'Origin']='0% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnail_menu.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._thumbnail_menu.ggUpdatePosition=function () {
			{
				this.ggContent.style.left = '0px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = '0px';
				this.ggContent.style.marginTop = '0px';
			}
		}
		this._thumbnail_cloner=document.createElement('div');
		this._thumbnail_cloner.ggNumRepeat = 1;
		this._thumbnail_cloner.ggWidth = 200;
		this._thumbnail_cloner.ggHeight = 100;
		this._thumbnail_cloner.ggUpdating = false;
		this._thumbnail_cloner.ggFilter = [];
		this._thumbnail_cloner.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			if (typeof filter=='object') {
				me._thumbnail_cloner.ggFilter = filter;
			} else {
				filter = me._thumbnail_cloner.ggFilter;
			};
			if (me._thumbnail_cloner.hasChildNodes() == true) {
				while (me._thumbnail_cloner.firstChild) {
					me._thumbnail_cloner.removeChild(me._thumbnail_cloner.firstChild);
				}
			}
			var tourNodes = me.player.getNodeIds();
			var row = 0;
			var column = 0;
			var numRows = me._thumbnail_cloner.ggNumRepeat;
			if (numRows < 1) numRows = 1;
			for (i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = false;
				if (filter.length > 0) {
					var nodeData = me.player.getNodeUserdata(nodeId);
					for (j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) != -1) passed = true;
					}
				}
				else passed = true;
				if (passed) {
					me._thumbnail_cloner__node = document.createElement('div');
					me._thumbnail_cloner.appendChild(me._thumbnail_cloner__node);
					me._thumbnail_cloner__node.setAttribute('style','position: absolute; top: ' + (row * me._thumbnail_cloner.ggHeight) + 'px; left:' + (column * me._thumbnail_cloner.ggWidth) + 'px; height: ' + me._thumbnail_cloner.ggHeight + 'px; width: ' + me._thumbnail_cloner.ggWidth + 'px; overflow: hidden;');
					var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me);
					me._thumbnail_cloner__node.appendChild(inst.__div);
					me._thumbnail_cloner__node.ggObj=inst;
					me.updateSize(inst.__div);
					row++;
					if (row >= numRows) {
						row = 0;
						column++;
					}
				}
			}
			me._thumbnail_cloner.ggClonerCallChildFunctions('ggUpdateConditionTimer');
			me._thumbnail_cloner.ggUpdating = false;
		}
		this._thumbnail_cloner.ggClonerCallChildFunctions = function(functionname){
			var stack = [];
			var i;
			for(i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				stack.push(me._thumbnail_cloner.childNodes[i]);
			}
			while (stack.length > 0) {
				var e = stack.pop();
				if (typeof e[functionname] == 'function')
					e[functionname]();
				if(e.hasChildNodes()) {
					for(i=0; i<e.childNodes.length; i++) {
						stack.push(e.childNodes[i]);
					}
				}
			}
		}
		this._thumbnail_cloner.ggTags = [];
		this._thumbnail_cloner.ggId="Thumbnail Cloner";
		this._thumbnail_cloner.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_cloner.ggVisible=true;
		this._thumbnail_cloner.className='ggskin ggskin_cloner ';
		this._thumbnail_cloner.ggType='cloner';
		hs ='';
		hs+='height : 99px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 199px;';
		hs+='overflow:visible';
		this._thumbnail_cloner.setAttribute('style',hs);
		this._thumbnail_cloner.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnail_cloner.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=me.player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							if ((p.scrollLeft + p.clientWidth) < (childOffX + child.clientWidth)) {
								p.scrollLeft = (childOffX + child.clientWidth) - p.clientWidth;
							}
							if ((p.scrollTop + p.clientHeight) < (childOffY + child.clientHeight)) {
								p.scrollTop = (childOffY + child.clientHeight) - p.clientHeight;
							}
							if (childOffX < p.scrollLeft) {
								p.scrollLeft = childOffX;
							}
							if (childOffY < p.scrollTop) {
								p.scrollTop = childOffY;
							}
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		this._thumbnail_cloner.ggUpdatePosition=function () {
			var w=me.player.getViewerSize().width;
			var h=me.player.getViewerSize().height
			if ((!me._thumbnail_cloner.ggLastSize) || (me._thumbnail_cloner.ggLastSize.w!=w) || (me._thumbnail_cloner.ggLastSize.h!=h)) {
				me._thumbnail_cloner.ggLastSize={ w:w, h:h };
				me._thumbnail_cloner.ggUpdate();
			}
		}
		this._thumbnail_cloner.ggNodeChange=function () {
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
		}
		this._thumbnail_menu__content.appendChild(this._thumbnail_cloner);
		this._map_bg.appendChild(this._thumbnail_menu);
		this._top_menu=document.createElement('div');
		this._top_menu.ggId="top_menu";
		this._top_menu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._top_menu.ggVisible=true;
		this._top_menu.className='ggskin ggskin_container ';
		this._top_menu.ggType='container';
		hs ='';
		hs+='height : 56px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -56px;';
		hs+='visibility : inherit;';
		hs+='width : 1600px;';
		this._top_menu.setAttribute('style',hs);
		this._top_menu.style[domTransform + 'Origin']='50% 50%';
		me._top_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._top_menu.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._top_menu.ggUpdatePosition=function () {
		}
		this._pan_title=document.createElement('div');
		this._pan_title__text=document.createElement('div');
		this._pan_title.className='ggskin ggskin_textdiv';
		this._pan_title.ggTextDiv=this._pan_title__text;
		this._pan_title.ggId="pan_title";
		this._pan_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pan_title.ggVisible=true;
		this._pan_title.className='ggskin ggskin_text ';
		this._pan_title.ggType='text';
		hs ='';
		hs+='height : 33px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='font-size: 24px;line-height:29px;font-weight:100 !important;font-family:"Roboto" !important;';
		this._pan_title.setAttribute('style',hs);
		this._pan_title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 33px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._pan_title__text.setAttribute('style',hs);
		this._pan_title.ggUpdateText=function() {
			var hs="<div style=\"font-family: 'Roboto', Arial !important; font-weight: 200; text-shadow: 1px 1px 0 rgba(0,0,0,0.4)\">"+me.ggUserdata.description+"<\/div>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pan_title.ggUpdateText();
		this._pan_title.appendChild(this._pan_title__text);
		me._pan_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._pan_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._pan_title.ggUpdatePosition=function () {
		}
		this._top_menu.appendChild(this._pan_title);
		this._map_bg.appendChild(this._top_menu);
		this._toggle_map=document.createElement('div');
		this._toggle_map__img=document.createElement('img');
		this._toggle_map__img.className='ggskin ggskin_svg';
		this._toggle_map__img.setAttribute('src',basePath + 'images/toggle_map.svg');
		this._toggle_map__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._toggle_map__img['ondragstart']=function() { return false; };
		this._toggle_map.appendChild(this._toggle_map__img);
		this._toggle_map__imgo=document.createElement('img');
		this._toggle_map__imgo.className='ggskin ggskin_svg';
		this._toggle_map__imgo.setAttribute('src',basePath + 'images/toggle_map__o.svg');
		this._toggle_map__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._toggle_map__imgo['ondragstart']=function() { return false; };
		this._toggle_map.appendChild(this._toggle_map__imgo);
		this._toggle_map.ggId="toggle_map";
		this._toggle_map.ggLeft=-74;
		this._toggle_map.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._toggle_map.ggVisible=true;
		this._toggle_map.className='ggskin ggskin_svg ';
		this._toggle_map.ggType='svg';
		hs ='';
		hs+='height : 56px;';
		hs+='left : -74px;';
		hs+='position : absolute;';
		hs+='top : -56px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		this._toggle_map.setAttribute('style',hs);
		this._toggle_map.style[domTransform + 'Origin']='50% 50%';
		me._toggle_map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._toggle_map.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._toggle_map.onclick=function () {
			var flag=me._map_bg.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._map_bg.style[domTransition]='none';
			} else {
				me._map_bg.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._map_bg.ggParameter.rx=0;me._map_bg.ggParameter.ry=0;
				me._map_bg.style[domTransform]=parameterToTransform(me._map_bg.ggParameter);
			} else {
				me._map_bg.ggParameter.rx=0;me._map_bg.ggParameter.ry=120;
				me._map_bg.style[domTransform]=parameterToTransform(me._map_bg.ggParameter);
			}
			me._map_bg.ggPositonActive=!flag;
		}
		this._toggle_map.onmouseover=function () {
			me._toggle_map__img.style.visibility='hidden';
			me._toggle_map__imgo.style.visibility='inherit';
		}
		this._toggle_map.onmouseout=function () {
			me._toggle_map__img.style.visibility='inherit';
			me._toggle_map__imgo.style.visibility='hidden';
		}
		this._toggle_map.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._map_bg.appendChild(this._toggle_map);
		this.divSkin.appendChild(this._map_bg);
		this._fullscreen=document.createElement('div');
		this._fullscreen__img=document.createElement('img');
		this._fullscreen__img.className='ggskin ggskin_svg';
		this._fullscreen__img.setAttribute('src',basePath + 'images/fullscreen.svg');
		this._fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fullscreen__img['ondragstart']=function() { return false; };
		this._fullscreen.appendChild(this._fullscreen__img);
		this._fullscreen__imgo=document.createElement('img');
		this._fullscreen__imgo.className='ggskin ggskin_svg';
		this._fullscreen__imgo.setAttribute('src',basePath + 'images/fullscreen__o.svg');
		this._fullscreen__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._fullscreen__imgo['ondragstart']=function() { return false; };
		this._fullscreen.appendChild(this._fullscreen__imgo);
		this._fullscreen.ggId="fullscreen";
		this._fullscreen.ggLeft=-72;
		this._fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen.ggVisible=true;
		this._fullscreen.className='ggskin ggskin_svg ';
		this._fullscreen.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : -72px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		this._fullscreen.setAttribute('style',hs);
		this._fullscreen.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen.ggIsActive=function() {
			return false;
		}
		me._fullscreen.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._fullscreen.onclick=function () {
			me.player.toggleFullscreen();
		}
		this._fullscreen.onmouseover=function () {
			me._fullscreen__img.style.visibility='hidden';
			me._fullscreen__imgo.style.visibility='inherit';
		}
		this._fullscreen.onmouseout=function () {
			me._fullscreen__img.style.visibility='inherit';
			me._fullscreen__imgo.style.visibility='hidden';
		}
		this._fullscreen.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this.divSkin.appendChild(this._fullscreen);
		this._dark_bg=document.createElement('div');
		this._dark_bg.ggId="dark_bg";
		this._dark_bg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dark_bg.ggVisible=false;
		this._dark_bg.className='ggskin ggskin_rectangle ';
		this._dark_bg.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 1800px;';
		hs+='left : 0px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1800px;';
		this._dark_bg.setAttribute('style',hs);
		this._dark_bg.style[domTransform + 'Origin']='50% 50%';
		me._dark_bg.ggIsActive=function() {
			return false;
		}
		me._dark_bg.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._dark_bg.onclick=function () {
			me._dark_bg.style[domTransition]='none';
			me._dark_bg.style.visibility='hidden';
			me._dark_bg.ggVisible=false;
			me._info_window.style[domTransition]='none';
			me._info_window.style.visibility='hidden';
			me._info_window.ggVisible=false;
			me._info_t_text.style[domTransition]='none';
			me._info_t_text.style.visibility='hidden';
			me._info_t_text.ggVisible=false;
		}
		this._dark_bg.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._dark_bg);
		this._info_window=document.createElement('div');
		this._info_window__img=document.createElement('img');
		this._info_window__img.className='ggskin ggskin_image';
		this._info_window__img.setAttribute('src',basePath + 'images/info_window.png');
		this._info_window__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._info_window__img.className='ggskin ggskin_image';
		this._info_window__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._info_window__img);
		this._info_window.appendChild(this._info_window__img);
		this._info_window.ggId="info_window";
		this._info_window.ggLeft=-343;
		this._info_window.ggTop=-343;
		this._info_window.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_window.ggVisible=false;
		this._info_window.className='ggskin ggskin_image ';
		this._info_window.ggType='image';
		hs ='';
		hs+='height : 472px;';
		hs+='left : -343px;';
		hs+='position : absolute;';
		hs+='top : -343px;';
		hs+='visibility : hidden;';
		hs+='width : 688px;';
		this._info_window.setAttribute('style',hs);
		this._info_window.style[domTransform + 'Origin']='50% 50%';
		me._info_window.ggIsActive=function() {
			return false;
		}
		me._info_window.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._info_window.ggCurrentLogicStateScaling = -1;
		this._info_window.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 640) || 
				(me.player.getViewerSize().height <= 640)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._info_window.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._info_window.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._info_window.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._info_window.ggCurrentLogicStateScaling == 0) {
					me._info_window.ggParameter.sx = 0.6;
					me._info_window.ggParameter.sy = 0.6;
					me._info_window.style[domTransform]=parameterToTransform(me._info_window.ggParameter);
				}
				else {
					me._info_window.ggParameter.sx = 1;
					me._info_window.ggParameter.sy = 1;
					me._info_window.style[domTransform]=parameterToTransform(me._info_window.ggParameter);
				}
			}
		}
		this._info_window.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._info_window.ggUpdateConditionResize();
		}
		this._info_w_text=document.createElement('div');
		this._info_w_text__text=document.createElement('div');
		this._info_w_text.className='ggskin ggskin_textdiv';
		this._info_w_text.ggTextDiv=this._info_w_text__text;
		this._info_w_text.ggId="info_w_text";
		this._info_w_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_w_text.ggVisible=true;
		this._info_w_text.className='ggskin ggskin_text ';
		this._info_w_text.ggType='text';
		hs ='';
		hs+='height : 324px;';
		hs+='left : 47px;';
		hs+='position : absolute;';
		hs+='top : 78px;';
		hs+='visibility : inherit;';
		hs+='width : 590px;';
		hs+='font-size:18px;line-height:24px;';
		this._info_w_text.setAttribute('style',hs);
		this._info_w_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 590px;';
		hs+='height: 324px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,0.486275);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._info_w_text__text.setAttribute('style',hs);
		this._info_w_text__text.innerHTML="";
		this._info_w_text.appendChild(this._info_w_text__text);
		me._info_w_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_w_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_w_text.ggUpdatePosition=function () {
		}
		this._info_window.appendChild(this._info_w_text);
		this._info_w_title=document.createElement('div');
		this._info_w_title__text=document.createElement('div');
		this._info_w_title.className='ggskin ggskin_textdiv';
		this._info_w_title.ggTextDiv=this._info_w_title__text;
		this._info_w_title.ggId="info_w_title";
		this._info_w_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_w_title.ggVisible=true;
		this._info_w_title.className='ggskin ggskin_text ';
		this._info_w_title.ggType='text';
		hs ='';
		hs+='height : 29px;';
		hs+='left : 47px;';
		hs+='position : absolute;';
		hs+='top : 47px;';
		hs+='visibility : inherit;';
		hs+='width : 561px;';
		hs+='font-size: 20px; font-weight: medium;';
		this._info_w_title.setAttribute('style',hs);
		this._info_w_title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 561px;';
		hs+='height: 29px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(33,130,69,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._info_w_title__text.setAttribute('style',hs);
		this._info_w_title__text.innerHTML="";
		this._info_w_title.appendChild(this._info_w_title__text);
		me._info_w_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_w_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_w_title.ggUpdatePosition=function () {
		}
		this._info_window.appendChild(this._info_w_title);
		this._svg_2=document.createElement('div');
		this._svg_2__img=document.createElement('img');
		this._svg_2__img.className='ggskin ggskin_svg';
		this._svg_2__img.setAttribute('src',basePath + 'images/svg_2.svg');
		this._svg_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._svg_2__img['ondragstart']=function() { return false; };
		this._svg_2.appendChild(this._svg_2__img);
		this._svg_2.ggId="Svg 2";
		this._svg_2.ggLeft=-63;
		this._svg_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_2.ggVisible=true;
		this._svg_2.className='ggskin ggskin_svg ';
		this._svg_2.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 14px;';
		hs+='left : -63px;';
		hs+='position : absolute;';
		hs+='top : 47px;';
		hs+='visibility : inherit;';
		hs+='width : 14px;';
		this._svg_2.setAttribute('style',hs);
		this._svg_2.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._svg_2.onclick=function () {
			me._info_window.style[domTransition]='none';
			me._info_window.style.visibility='hidden';
			me._info_window.ggVisible=false;
			me._dark_bg.style[domTransition]='none';
			me._dark_bg.style.visibility='hidden';
			me._dark_bg.ggVisible=false;
		}
		this._svg_2.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._info_window.appendChild(this._svg_2);
		this.divSkin.appendChild(this._info_window);
		this._load_text=document.createElement('div');
		this._load_text.ggId="load_text";
		this._load_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._load_text.ggVisible=false;
		this._load_text.className='ggskin ggskin_rectangle ';
		this._load_text.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='height : 19px;';
		hs+='left : 145px;';
		hs+='position : absolute;';
		hs+='top : 182px;';
		hs+='visibility : hidden;';
		hs+='width : 99px;';
		this._load_text.setAttribute('style',hs);
		this._load_text.style[domTransform + 'Origin']='50% 50%';
		me._load_text.ggIsActive=function() {
			return false;
		}
		me._load_text.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._load_text.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._load_text);
		this._info_t_text=document.createElement('div');
		this._info_t_text__text=document.createElement('div');
		this._info_t_text.className='ggskin ggskin_textdiv';
		this._info_t_text.ggTextDiv=this._info_t_text__text;
		this._info_t_text.ggId="info_t_text";
		this._info_t_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_t_text.ggVisible=false;
		this._info_t_text.className='ggskin ggskin_text ';
		this._info_t_text.ggType='text';
		hs ='';
		hs+='height : 398px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 145px;';
		hs+='visibility : hidden;';
		hs+='width : 232px;';
		hs+='font-size:18px;line-height:24px;';
		this._info_t_text.setAttribute('style',hs);
		this._info_t_text.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 232px;';
		hs+='height: 398px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,0.486275);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._info_t_text__text.setAttribute('style',hs);
		this._info_t_text__text.innerHTML="";
		this._info_t_text.appendChild(this._info_t_text__text);
		me._info_t_text.ggIsActive=function() {
			return false;
		}
		me._info_t_text.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._info_t_text.onclick=function () {
			me._info_t_text.style[domTransition]='none';
			me._info_t_text.style.visibility='hidden';
			me._info_t_text.ggVisible=false;
			me._dark_bg.style[domTransition]='none';
			me._dark_bg.style.visibility='hidden';
			me._dark_bg.ggVisible=false;
		}
		this._info_t_text.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._info_t_text);
		this._loading_container=document.createElement('div');
		this._loading_container.ggId="loading_container";
		this._loading_container.ggLeft=-96;
		this._loading_container.ggTop=-105;
		this._loading_container.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_container.ggVisible=true;
		this._loading_container.className='ggskin ggskin_container ';
		this._loading_container.ggType='container';
		hs ='';
		hs+='height : 192px;';
		hs+='left : -96px;';
		hs+='position : absolute;';
		hs+='top : -105px;';
		hs+='visibility : inherit;';
		hs+='width : 192px;';
		this._loading_container.setAttribute('style',hs);
		this._loading_container.style[domTransform + 'Origin']='50% 50%';
		me._loading_container.ggIsActive=function() {
			return false;
		}
		me._loading_container.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._loading_container.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._loadback=document.createElement('div');
		this._loadback.ggId="load-back";
		this._loadback.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadback.ggVisible=true;
		this._loadback.className='ggskin ggskin_rectangle ';
		this._loadback.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 4480px;';
		hs+='left : -2224px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -2135px;';
		hs+='visibility : inherit;';
		hs+='width : 4640px;';
		this._loadback.setAttribute('style',hs);
		this._loadback.style[domTransform + 'Origin']='50% 50%';
		me._loadback.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadback.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadback.ggUpdatePosition=function () {
		}
		this._loading_container.appendChild(this._loadback);
		this._intro_title=document.createElement('div');
		this._intro_title__img=document.createElement('img');
		this._intro_title__img.className='ggskin ggskin_svg';
		this._intro_title__img.setAttribute('src',basePath + 'images/intro_title.svg');
		this._intro_title__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._intro_title__img['ondragstart']=function() { return false; };
		this._intro_title.appendChild(this._intro_title__img);
		this._intro_title.ggId="intro_title";
		this._intro_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._intro_title.ggVisible=true;
		this._intro_title.className='ggskin ggskin_svg ';
		this._intro_title.ggType='svg';
		hs ='';
		hs+='height : 441px;';
		hs+='left : -86px;';
		hs+='position : absolute;';
		hs+='top : -184px;';
		hs+='visibility : inherit;';
		hs+='width : 370px;';
		this._intro_title.setAttribute('style',hs);
		this._intro_title.style[domTransform + 'Origin']='50% 50%';
		me._intro_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._intro_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._intro_title.ggUpdatePosition=function () {
		}
		this._loading_container.appendChild(this._intro_title);
		this._loading_text=document.createElement('div');
		this._loading_text__text=document.createElement('div');
		this._loading_text.className='ggskin ggskin_textdiv';
		this._loading_text.ggTextDiv=this._loading_text__text;
		this._loading_text.ggId="loading_text";
		this._loading_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_text.ggVisible=true;
		this._loading_text.className='ggskin ggskin_text ';
		this._loading_text.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -78px;';
		hs+='position : absolute;';
		hs+='top : 124px;';
		hs+='visibility : inherit;';
		hs+='width : 357px;';
		this._loading_text.setAttribute('style',hs);
		this._loading_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='color: rgba(224,224,224,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loading_text__text.setAttribute('style',hs);
		this._loading_text.ggUpdateText=function() {
			var hs="<div class=\"load_text\">\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%<\/div>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loading_text.ggUpdateText();
		this._loading_text.appendChild(this._loading_text__text);
		me._loading_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_text.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((357-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._loading_container.appendChild(this._loading_text);
		this.divSkin.appendChild(this._loading_container);
		this._go_home=document.createElement('div');
		this._go_home__img=document.createElement('img');
		this._go_home__img.className='ggskin ggskin_svg';
		this._go_home__img.setAttribute('src',basePath + 'images/go_home.svg');
		this._go_home__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._go_home__img['ondragstart']=function() { return false; };
		this._go_home.appendChild(this._go_home__img);
		this._go_home__imgo=document.createElement('img');
		this._go_home__imgo.className='ggskin ggskin_svg';
		this._go_home__imgo.setAttribute('src',basePath + 'images/go_home__o.svg');
		this._go_home__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._go_home__imgo['ondragstart']=function() { return false; };
		this._go_home.appendChild(this._go_home__imgo);
		this._go_home.ggId="go_home";
		this._go_home.ggLeft=-72;
		this._go_home.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._go_home.ggVisible=true;
		this._go_home.className='ggskin ggskin_svg ';
		this._go_home.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : -72px;';
		hs+='position : absolute;';
		hs+='top : 56px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		this._go_home.setAttribute('style',hs);
		this._go_home.style[domTransform + 'Origin']='50% 50%';
		me._go_home.ggIsActive=function() {
			return false;
		}
		me._go_home.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._go_home.onclick=function () {
			me.player.openUrl("index.xml","");
		}
		this._go_home.onmouseover=function () {
			me._go_home__img.style.visibility='hidden';
			me._go_home__imgo.style.visibility='inherit';
		}
		this._go_home.onmouseout=function () {
			me._go_home__img.style.visibility='inherit';
			me._go_home__imgo.style.visibility='hidden';
		}
		me._go_home.ggCurrentLogicStateVisible = -1;
		this._go_home.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['currentPan'] == 'index')
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._go_home.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._go_home.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._go_home.style[domTransition]='';
				if (me._go_home.ggCurrentLogicStateVisible == 0) {
					me._go_home.style.visibility="hidden";
					me._go_home.ggVisible=false;
				}
				else {
					me._go_home.style.visibility=(Number(me._go_home.style.opacity)>0||!me._go_home.style.opacity)?'inherit':'hidden';
					me._go_home.ggVisible=true;
				}
			}
		}
		this._go_home.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this.divSkin.appendChild(this._go_home);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
			me._thumbnail_cloner.ggUpdate(me._thumbnail_cloner.ggTags);
		}
		this.divSkin.ggLoaded=function() {
			me._info_t_text.ggText="<div style=\"font-family: 'Roboto', Arial !important; font-weight: 200\">"+me.ggUserdata.comment+"<\/div>";
			me._info_t_text__text.innerHTML=me._info_t_text.ggText;
			if (me._info_t_text.ggUpdateText) {
				me._info_t_text.ggUpdateText=function() {
					var hs="<div style=\"font-family: 'Roboto', Arial !important; font-weight: 200\">"+me.ggUserdata.comment+"<\/div>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me.player.transitionsDisabled) {
				me._loading_container.style[domTransition]='none';
			} else {
				me._loading_container.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._loading_container.style.opacity='0';
			me._loading_container.style.visibility='hidden';
		}
		this.divSkin.ggReLoaded=function() {
			if (me.player.transitionsDisabled) {
				me._loading_container.style[domTransition]='none';
			} else {
				me._loading_container.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._loading_container.style.opacity='1';
			me._loading_container.style.visibility=me._loading_container.ggVisible?'inherit':'hidden';
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
		me._thumbnail_cloner.ggNodeChange();
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		me._thumbnail_cloner.ggClonerCallChildFunctions('ggUpdateConditionTimer');
		me._pan_title.ggUpdateText();
		me._loading_text.ggUpdateText();
		me._go_home.ggUpdateConditionTimer();
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='ht_zoom') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_zoom";
			this.__div.ggLeft=-173;
			this.__div.ggTop=-143;
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : -173px;';
			hs+='position : absolute;';
			hs+='top : -143px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin._info_w_title.ggText="<div style=\"font-family: 'Roboto', Arial !important; font-weight: 200\">"+me.hotspot.title+"<\/div>";
				me.skin._info_w_title__text.innerHTML=me.skin._info_w_title.ggText;
				if (me.skin._info_w_title.ggUpdateText) {
					me.skin._info_w_title.ggUpdateText=function() {
						var hs="<div style=\"font-family: 'Roboto', Arial !important; font-weight: 200\">"+me.hotspot.title+"<\/div>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				me.skin._info_w_text.ggText="<div style=\"font-family: 'Roboto', Arial !important; font-weight: 200\">"+me.hotspot.description+"<\/div>";
				me.skin._info_w_text__text.innerHTML=me.skin._info_w_text.ggText;
				if (me.skin._info_w_text.ggUpdateText) {
					me.skin._info_w_text.ggUpdateText=function() {
						var hs="<div style=\"font-family: 'Roboto', Arial !important; font-weight: 200\">"+me.hotspot.description+"<\/div>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				me.skin._info_window.style[domTransition]='none';
				me.skin._info_window.style.visibility=(Number(me.skin._info_window.style.opacity)>0||!me.skin._info_window.style.opacity)?'inherit':'hidden';
				me.skin._info_window.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this._txt_hotspot2=document.createElement('div');
			this._txt_hotspot2__text=document.createElement('div');
			this._txt_hotspot2.className='ggskin ggskin_textdiv';
			this._txt_hotspot2.ggTextDiv=this._txt_hotspot2__text;
			this._txt_hotspot2.ggId="txt_hotspot2";
			this._txt_hotspot2.ggLeft=-51;
			this._txt_hotspot2.ggTop=-35;
			this._txt_hotspot2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._txt_hotspot2.ggVisible=true;
			this._txt_hotspot2.className='ggskin ggskin_text ';
			this._txt_hotspot2.ggType='text';
			hs ='';
			hs+='height : 30px;';
			hs+='left : -51px;';
			hs+='position : absolute;';
			hs+='top : -35px;';
			hs+='visibility : inherit;';
			hs+='width : 100px;';
			this._txt_hotspot2.setAttribute('style',hs);
			this._txt_hotspot2.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._txt_hotspot2__text.setAttribute('style',hs);
			this._txt_hotspot2__text.innerHTML="<div class=\"ht_zoom\">"+me.hotspot.title+"<\/div>";
			this._txt_hotspot2.appendChild(this._txt_hotspot2__text);
			me._txt_hotspot2.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._txt_hotspot2.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._txt_hotspot2.ggUpdatePosition=function () {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h) + 'px';
				}
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((100-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._txt_hotspot2);
		} else
		if (hotspot.skinid=='ht_info') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_info";
			this.__div.ggLeft=-173;
			this.__div.ggTop=-143;
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : -173px;';
			hs+='position : absolute;';
			hs+='top : -143px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this._txt_hotspot=document.createElement('div');
			this._txt_hotspot__text=document.createElement('div');
			this._txt_hotspot.className='ggskin ggskin_textdiv';
			this._txt_hotspot.ggTextDiv=this._txt_hotspot__text;
			this._txt_hotspot.ggId="txt_hotspot";
			this._txt_hotspot.ggLeft=-51;
			this._txt_hotspot.ggTop=-35;
			this._txt_hotspot.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._txt_hotspot.ggVisible=true;
			this._txt_hotspot.className='ggskin ggskin_text ';
			this._txt_hotspot.ggType='text';
			hs ='';
			hs+='height : 30px;';
			hs+='left : -51px;';
			hs+='position : absolute;';
			hs+='top : -35px;';
			hs+='visibility : inherit;';
			hs+='width : 100px;';
			this._txt_hotspot.setAttribute('style',hs);
			this._txt_hotspot.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._txt_hotspot__text.setAttribute('style',hs);
			this._txt_hotspot__text.innerHTML="<div class=\"ht_info\">"+me.hotspot.title+"<\/div>";
			this._txt_hotspot.appendChild(this._txt_hotspot__text);
			me._txt_hotspot.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._txt_hotspot.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._txt_hotspot.ggUpdatePosition=function () {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h) + 'px';
				}
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((100-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._txt_hotspot);
		} else
		if (hotspot.skinid=='ht_url') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_url";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 100px;';
			hs+='position : absolute;';
			hs+='top : 149px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me._point_preview.style[domTransition]='none';
				me._point_preview.style.opacity='0';
				me._point_preview.style.visibility='hidden';
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._ht_node_image=document.createElement('div');
			this._ht_node_image__img=document.createElement('img');
			this._ht_node_image__img.className='ggskin ggskin_svg';
			this._ht_node_image__img.setAttribute('src',basePath + 'images/ht_node_image.svg');
			this._ht_node_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_node_image__img['ondragstart']=function() { return false; };
			this._ht_node_image.appendChild(this._ht_node_image__img);
			this._ht_node_image.ggId="ht_node_image";
			this._ht_node_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_node_image.ggVisible=true;
			this._ht_node_image.className='ggskin ggskin_svg ';
			this._ht_node_image.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 47px;';
			hs+='left : -14px;';
			hs+='position : absolute;';
			hs+='top : -46px;';
			hs+='visibility : inherit;';
			hs+='width : 30px;';
			this._ht_node_image.setAttribute('style',hs);
			this._ht_node_image.style[domTransform + 'Origin']='50% 50%';
			me._ht_node_image.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_node_image.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_node_image.onclick=function () {
				me.player.openNext("{"+me.hotspot.title+"}",me.player.getFov().toFixed(1));
				ggSkinVars['currentPan'] = me.hotspot.title;
			}
			this._ht_node_image.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._ht_node_image);
			this._point_preview=document.createElement('div');
			this._point_preview__text=document.createElement('div');
			this._point_preview.className='ggskin ggskin_textdiv';
			this._point_preview.ggTextDiv=this._point_preview__text;
			this._point_preview.ggId="point_preview";
			this._point_preview.ggLeft=-102;
			this._point_preview.ggTop=-145;
			this._point_preview.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._point_preview.ggVisible=true;
			this._point_preview.className='ggskin ggskin_text ';
			this._point_preview.ggType='text';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 104px;';
			hs+='left : -102px;';
			hs+='opacity : 0;';
			hs+='position : absolute;';
			hs+='top : -145px;';
			hs+='visibility : hidden;';
			hs+='width : 202px;';
			this._point_preview.setAttribute('style',hs);
			this._point_preview.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 202px;';
			hs+='height: 104px;';
			hs+='background: #dc493c;';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 2px;';
			hs+=cssPrefix + 'border-radius: 2px;';
			hs+='color: #000000;';
			hs+='text-align: left;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._point_preview__text.setAttribute('style',hs);
			this._point_preview.ggUpdateText=function() {
				var hs="<div style=\"margin:2px 2px 2px 1px\"><img src=\"images\/thumbnail_nodeimage_"+me.hotspot.title+".jpg\" alt=\""+me.ggUserdata.description+"\" width=\"200\" height=\"100\">";
				if (hs!=this.ggText) {
					this.ggText=hs;
					this.ggTextDiv.innerHTML=hs;
					if (this.ggUpdatePosition) this.ggUpdatePosition();
				}
			}
			me._point_preview.ggUpdateText();
			this._point_preview.appendChild(this._point_preview__text);
			me._point_preview.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._point_preview.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._point_preview.ggUpdatePosition=function () {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this.__div.appendChild(this._point_preview);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
					if (me.player.transitionsDisabled) {
						me._point_preview.style[domTransition]='none';
					} else {
						me._point_preview.style[domTransition]='all 500ms ease-out 0ms';
					}
					me._point_preview.style.opacity='1';
					me._point_preview.style.visibility=me._point_preview.ggVisible?'inherit':'hidden';
				}
				me._point_preview.ggUpdateText();
			}
			this.hotspotTimerEvent();
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="ht_deep";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 175px;';
			hs+='opacity : 0.9;';
			hs+='position : absolute;';
			hs+='top : 241px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._deep=document.createElement('div');
			this._deep__img=document.createElement('img');
			this._deep__img.className='ggskin ggskin_svg';
			this._deep__img.setAttribute('src',basePath + 'images/deep.svg');
			this._deep__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._deep__img['ondragstart']=function() { return false; };
			this._deep.appendChild(this._deep__img);
			this._deep.ggId="deep";
			this._deep.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._deep.ggVisible=true;
			this._deep.className='ggskin ggskin_svg ';
			this._deep.ggType='svg';
			hs ='';
			hs+='height : 212px;';
			hs+='left : 1px;';
			hs+='position : absolute;';
			hs+='top : -212px;';
			hs+='visibility : inherit;';
			hs+='width : 303px;';
			this._deep.setAttribute('style',hs);
			this._deep.style[domTransform + 'Origin']='50% 50%';
			me._deep.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._deep.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._deep.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._deep);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	function SkinCloner_thumbnail_cloner_Class(nodeId, parent) {
		var me=this;
		this.skin=parent;
		this.player=this.skin.player;
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position: absolute; left: 0px; top: 0px; width: 200px; height: 100px; visibility: inherit;');
		this.__div.ggIsActive = function() {
			return me.player.getCurrentNode()==me.ggNodeId;
		}
		this.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		this._thumbnail_nodeimage=document.createElement('div');
		this._thumbnail_nodeimage__img=document.createElement('img');
		this._thumbnail_nodeimage__img.className='ggskin ggskin_nodeimage';
		this._thumbnail_nodeimage__img.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		this._thumbnail_nodeimage.ggNodeId=nodeId;
		this._thumbnail_nodeimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._thumbnail_nodeimage__img.className='ggskin ggskin_nodeimage';
		this._thumbnail_nodeimage__img['ondragstart']=function() { return false; };
		this._thumbnail_nodeimage.appendChild(this._thumbnail_nodeimage__img);
		this._thumbnail_nodeimage.ggId="Thumbnail NodeImage";
		this._thumbnail_nodeimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_nodeimage.ggVisible=true;
		this._thumbnail_nodeimage.className='ggskin ggskin_nodeimage ';
		this._thumbnail_nodeimage.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='overflow:visible';
		this._thumbnail_nodeimage.setAttribute('style',hs);
		this._thumbnail_nodeimage.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_nodeimage.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._thumbnail_nodeimage.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		this._thumbnail_nodeimage.onclick=function () {
			me.player.openNext("{"+me.ggNodeId+"}",me.player.hotspot.target);
			ggSkinVars['currentPan'] = "{"+me.ggNodeId+"}";
		}
		this._thumbnail_nodeimage.onmouseover=function () {
			me.elementMouseOver['thumbnail_nodeimage']=true;
		}
		this._thumbnail_nodeimage.onmouseout=function () {
			me.elementMouseOver['thumbnail_nodeimage']=false;
		}
		this._thumbnail_nodeimage.ontouchend=function () {
			me.elementMouseOver['thumbnail_nodeimage']=false;
		}
		this._thumbnail_nodeimage.ggUpdatePosition=function () {
		}
		this._node_title=document.createElement('div');
		this._node_title__text=document.createElement('div');
		this._node_title.className='ggskin ggskin_textdiv';
		this._node_title.ggTextDiv=this._node_title__text;
		this._node_title.ggId="node_title";
		this._node_title.ggTop=-13;
		this._node_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._node_title.ggVisible=true;
		this._node_title.className='ggskin ggskin_text ';
		this._node_title.ggType='text';
		hs ='';
		hs+='height : 54px;';
		hs+='left : 4px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -13px;';
		hs+='visibility : hidden;';
		hs+='width : 188px;';
		hs+='overflow:visible !important';
		this._node_title.setAttribute('style',hs);
		this._node_title.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 188px;';
		hs+='height: 54px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._node_title__text.setAttribute('style',hs);
		this._node_title__text.innerHTML="<div class=\"thumb_text\">"+me.ggUserdata.description+"<\/div>";
		this._node_title.appendChild(this._node_title__text);
		me._node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._node_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._node_title.ggCurrentLogicStateAlpha = -1;
		this._node_title.ggUpdateConditionTimer=function () {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['thumbnail_nodeimage'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._node_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._node_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._node_title.style[domTransition]='opacity 300ms ease 0ms, visibility 300ms ease 0ms';
				if (me._node_title.ggCurrentLogicStateAlpha == 0) {
					me._node_title.style.visibility=me._node_title.ggVisible?'inherit':'hidden';
					me._node_title.style.opacity=1;
				}
				else {
					me._node_title.style.visibility="hidden";
					me._node_title.style.opacity=0;
				}
			}
		}
		this._node_title.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._thumbnail_nodeimage.appendChild(this._node_title);
		this._checkmark_tick=document.createElement('div');
		this._checkmark_tick__img=document.createElement('img');
		this._checkmark_tick__img.className='ggskin ggskin_svg';
		this._checkmark_tick__img.setAttribute('src',basePath + 'images/checkmark_tick.svg');
		this._checkmark_tick__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._checkmark_tick__img['ondragstart']=function() { return false; };
		this._checkmark_tick.appendChild(this._checkmark_tick__img);
		this._checkmark_tick.ggId="checkmark_tick";
		this._checkmark_tick.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._checkmark_tick.ggVisible=false;
		this._checkmark_tick.className='ggskin ggskin_svg ';
		this._checkmark_tick.ggType='svg';
		hs ='';
		hs+='height : 31px;';
		hs+='left : 168px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 31px;';
		this._checkmark_tick.setAttribute('style',hs);
		this._checkmark_tick.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._checkmark_tick.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._checkmark_tick.ggCurrentLogicStateVisible = -1;
		this._checkmark_tick.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.nodeVisited(me._checkmark_tick.ggElementNodeId()) == true) || 
				(me._checkmark_tick.ggIsActive() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick.style[domTransition]='';
				if (me._checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick.style.visibility=(Number(me._checkmark_tick.style.opacity)>0||!me._checkmark_tick.style.opacity)?'inherit':'hidden';
					me._checkmark_tick.ggVisible=true;
				}
				else {
					me._checkmark_tick.style.visibility="hidden";
					me._checkmark_tick.ggVisible=false;
				}
			}
		}
		this._checkmark_tick.ggUpdatePosition=function () {
		}
		this._thumbnail_nodeimage.appendChild(this._checkmark_tick);
		this.__div.appendChild(this._thumbnail_nodeimage);
	};
	this.addSkin();
};