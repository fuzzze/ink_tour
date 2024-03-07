// Garden Gnome Software - Skin
// Pano2VR 6.0.1/17227
// Filename: INK_material_2024.ggsk
// Generated Thu Mar 7 15:18:49 2024

function pano2vrSkin(player,base) {
	player.addVariable('currentPan', 0, "index");
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
		me._top_menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.ggUserdata.information != "0")
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._top_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._top_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._top_menu.style[domTransition]='';
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
		hs+='font-size: 36px;color:#2B5E4A;line-height:29px;font-weight:100 !important;';
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
		hs+="filter: blur(0px);font-family:\"Navigo\" !important;";
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
		el=me._map_bg=document.createElement('div');
		el.ggId="map_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 22px;';
		hs+='cursor : default;';
		hs+='height : 120px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='right : -164px;';
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
		el=me._thumbnail_menu=document.createElement('div');
		els=me._thumbnail_menu__content=document.createElement('div');
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
		me._thumbnail_menu.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0) return;
			me._thumbnail_menu.ggScrollPosX = (me._thumbnail_menu__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
			me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.clientWidth - me._thumbnail_menu__horScrollFg.clientWidth);
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.clientWidth);
		}
		me._thumbnail_menu.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu.ggScrollPosX >= me._thumbnail_menu__horScrollBg.clientWidth - me._thumbnail_menu__horScrollFg.clientWidth)) {
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.clientWidth - me._thumbnail_menu__horScrollFg.clientWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu.ggScrollPosX <= 0)) {
					me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.clientWidth);
			}, 10);
		}
		me._thumbnail_menu.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0) return;
			me._thumbnail_menu.ggScrollPosY = (me._thumbnail_menu__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
			me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.clientHeight - me._thumbnail_menu__vertScrollFg.clientHeight);
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			me._thumbnail_menu__content.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.clientHeight);
		}
		me._thumbnail_menu.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu.ggScrollPosY >= me._thumbnail_menu__vertScrollBg.clientHeight - me._thumbnail_menu__vertScrollFg.clientHeight)) {
					me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.clientHeight - me._thumbnail_menu__vertScrollFg.clientHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu.ggScrollPosY <= 0)) {
					me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			me._thumbnail_menu__content.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.clientHeight);
			}, 10);
		}
		me._thumbnail_menu.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t[0].clientX;
			me._thumbnail_menu.ggDragLastY = t[0].clientY;
			me._thumbnail_menu__content.ontouchend = function() {
				me._thumbnail_menu__content.ontouchend = null;
				me._thumbnail_menu__content.ontouchmove = null;
			}
			me._thumbnail_menu__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu.ggDragLastX;
				var diffY = t[0].clientY - me._thumbnail_menu.ggDragLastY;
				me._thumbnail_menu.ggDragLastX = t[0].clientX;
				me._thumbnail_menu.ggDragLastY = t[0].clientY;
				me._thumbnail_menu.ggScrollByX(-diffX);
				me._thumbnail_menu.ggScrollByY(-diffY);
			}
		}
		elHorScrollBg = me._thumbnail_menu__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 1920px; height: 15px; background-color: rgba(128,128,128,0.392157); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 1920px; height: 15px; background-color: rgba(192,192,192,0.392157); pointer-events: auto;');
		me._thumbnail_menu.ggScrollPosX = 0;
		me._thumbnail_menu.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragLastX = e.clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t[0].clientX;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragLastX = t[0].clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu.ggScrollByXSmooth(20 * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Thumbnail Menu";
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
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='border-radius:100px; overflow:hidden; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
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
		me._thumbnail_menu.ggUpdatePosition=function (useTransition) {
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
				this.ggContent.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > this.clientWidth) {
					me._thumbnail_menu__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu.ggHorScrollVisible) {
					if (me._thumbnail_menu.ggVertScrollVisible) {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth - 15;
					} else {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth;
					}
					me._thumbnail_menu__horScrollBg.style.width = me._thumbnail_menu.ggAvailableWidth + 'px';
					me._thumbnail_menu.ggHPercentVisible = me._thumbnail_menu.ggAvailableWidth / contentWidth;
					if (me._thumbnail_menu.ggHPercentVisible > 1.0) me._thumbnail_menu.ggHPercentVisible = 1.0;
					me._thumbnail_menu.ggScrollWidth = Math.round(me._thumbnail_menu__horScrollBg.clientWidth * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu__horScrollFg.style.width = me._thumbnail_menu.ggScrollWidth + 'px';
					me._thumbnail_menu.ggScrollPosX = me._thumbnail_menu.ggScrollPosXPercent * me._thumbnail_menu.ggAvailableWidth;
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.clientWidth - me._thumbnail_menu__horScrollFg.clientWidth);
					me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
					me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				} else {
					me._thumbnail_menu.ggScrollPosX = 0;
					me._thumbnail_menu.ggScrollPosXPercent = 0.0;
					me._thumbnail_menu__content.style.left = this.ggContentLeftOffset + 'px';
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggWidth = 88;
		el.ggHeight = 82;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner.callChildLogicBlocks_changenodeid = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active && me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible();
					}
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active && me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
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
				parameter.top=(row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner.ggWidth) + 'px';
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
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
			me._thumbnail_cloner.callChildLogicBlocks_changenodeid();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_active();
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
		}
		el.ggFilter = [];
		el.ggId="Thumbnail Cloner";
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
		me._thumbnail_cloner.ggIsActive=function() {
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
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
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
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
			var w=player.getViewerSize().width;
			var h=player.getViewerSize().height
			if ((!me._thumbnail_cloner.ggLastSize) || (me._thumbnail_cloner.ggLastSize.w!=w) || (me._thumbnail_cloner.ggLastSize.h!=h)) {
				me._thumbnail_cloner.ggLastSize={ w:w, h:h };
				me._thumbnail_cloner.ggUpdate();
			}
		}
		me._thumbnail_cloner.ggNodeChange=function () {
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu__content.appendChild(me._thumbnail_cloner);
		me._map_bg.appendChild(me._thumbnail_menu);
		me.divSkin.appendChild(me._map_bg);
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
		hs+='border : 1px solid rgba(255,255,255,0.196078);';
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
			var flag=me._map_bg.ggPositonActive;
			if (player.transitionsDisabled) {
				me._map_bg.style[domTransition]='none';
			} else {
				me._map_bg.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._map_bg.ggParameter.rx=0;me._map_bg.ggParameter.ry=0;
				me._map_bg.style[domTransform]=parameterToTransform(me._map_bg.ggParameter);
			} else {
				me._map_bg.ggParameter.rx=0;me._map_bg.ggParameter.ry=200;
				me._map_bg.style[domTransform]=parameterToTransform(me._map_bg.ggParameter);
			}
			me._map_bg.ggPositonActive=!flag;
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
		hs+='backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border-radius:120px;';
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
		hs+='top : 145px;';
		hs+='visibility : inherit;';
		hs+='width : 502px;';
		hs+='pointer-events:auto;';
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
		me._abouttext.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.ggUserdata.information == "0")
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._abouttext.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._abouttext.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._abouttext.style[domTransition]='';
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
			if (player.transitionsDisabled) {
				me._abouttext.style[domTransition]='none';
			} else {
				me._abouttext.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._abouttext.style.opacity='0';
			me._abouttext.style.visibility='hidden';
		}
		me._abouttext.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._abouttext);
		el=me._cover=document.createElement('div');
		el.ggId="cover";
		el.ggDx=0;
		el.ggDy=0;
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
		hs+='width : 435px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cover.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
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
		el=me._caverback=document.createElement('div');
		el.ggId="caver-back";
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
		hs+='position : absolute;';
		hs+='top : -2135px;';
		hs+='visibility : inherit;';
		hs+='width : 4640px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._caverback.ggIsActive=function() {
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
		me._caverback.ggUpdatePosition=function (useTransition) {
		}
		me._cover.appendChild(me._caverback);
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggDx=-217;
		el.ggDy=61;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 4480px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 1066.67%;';
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
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_3__img.setAttribute('src',basePath + 'images/svg_3.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_3;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_3__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._svg_3__imgo.setAttribute('src',basePath + 'images/svg_3__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;svg_3;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 56px;';
		hs+='left : 2404px;';
		hs+='position : absolute;';
		hs+='top : 2211px;';
		hs+='visibility : inherit;';
		hs+='width : 257px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_3.ggIsActive=function() {
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
		me._svg_3.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._cover.style[domTransition]='none';
			} else {
				me._cover.style[domTransition]='all 700ms ease-out 0ms';
			}
			me._cover.style.opacity='0';
			me._cover.style.visibility='hidden';
		}
		me._svg_3.onmouseover=function (e) {
			me._svg_3__img.style.visibility='hidden';
			me._svg_3__imgo.style.visibility='inherit';
		}
		me._svg_3.onmouseout=function (e) {
			me._svg_3__img.style.visibility='inherit';
			me._svg_3__imgo.style.visibility='hidden';
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._svg_3);
		el=me._logocover=document.createElement('div');
		els=me._logocover__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._logocover__img.setAttribute('src',basePath + 'images/logocover.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;logocover;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="logo-cover";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 332px;';
		hs+='left : 2318px;';
		hs+='position : absolute;';
		hs+='top : 1846px;';
		hs+='visibility : inherit;';
		hs+='width : 435px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._logocover.ggIsActive=function() {
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
		me._logocover.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._logocover);
		me._cover.appendChild(me._container_1);
		me.divSkin.appendChild(me._cover);
		el=me._loading_container=document.createElement('div');
		el.ggId="loading_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 192px;';
		hs+='left : 864px;';
		hs+='position : absolute;';
		hs+='top : 444px;';
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
		hs='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTMxLjYsMy41QzUuOSwxMy42LTYuNiw0Mi43LDMuNSw2OC40YzEwLjEsMjUuNywzOS4yLDM4LjMsNjQuOSwyOC4xbC0zLjEtNy45Yy0yMS4zLDguNC00NS40LTItNTMuOC0yMy4zCiAgYy04LjQtMj'+
			'EuMywyLTQ1LjQsMjMuMy01My44TDMxLjYsMy41eiI+CiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIAogICAgICAgICBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIAogICAgICAgICBhdHRyaWJ1dGVUeXBlPSJYTUwiIAogICAgICAgICB0eXBlPSJyb3RhdGUiCiAgICAgICAgIGR1cj0iMnMiIAogICAgICAgICBmcm9tPSIwIDUwIDUwIgogICAgICAgICB0bz0iMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjkt'+
			'Mi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2ZmZiIgZD0iTT'+
			'gyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8'+
			'L3BhdGg+Cjwvc3ZnPg==';
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
		hs+='height : 168px;';
		hs+='left : 16px;';
		hs+='opacity : 0.59999;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 168px;';
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
		hs+='height : 15px;';
		hs+='left : 75px;';
		hs+='position : absolute;';
		hs+='top : 87px;';
		hs+='visibility : inherit;';
		hs+='width : 47px;';
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
			var hs=(player.getPercentLoaded()*100.0).toFixed(0);
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
			this.ggTextDiv.style.left=((45-this.ggTextDiv.offsetWidth)/2) + 'px';
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
		me._svg_15.ggParameter.a="360.0000";
		me._svg_15.style[domTransform]=parameterToTransform(me._svg_15.ggParameter);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			player.setVariableValue('currentPan', me.ggUserdata.information);
			me._thumbnail_cloner.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._thumbnail_menu.ggUpdatePosition();
			if (player.transitionsDisabled) {
				me._loading_container.style[domTransition]='none';
			} else {
				me._loading_container.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._loading_container.style.opacity='0';
			me._loading_container.style.visibility='hidden';
		});
		player.addListener('beforechangenode', function() {
			player.setVariableValue('currentPan', me.ggUserdata.information);
			player.stopSound("*currentPan");
			player.playSound("*currentPan","1");
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
		me._abouttext.ggUpdateText();
		me._loading_text.ggUpdateText();
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
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 118px;';
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
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI2MnB4IiB2aWV3Qm94PSIwIDAgNDAgNjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+cGluPC90aXRsZT4KICAgIDxnIGlkPSJQYW5vVG91ciIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9InBhbm8tMTkyMHgxMDgwIiB0cmFuc2Zvcm09InRyYW'+
			'5zbGF0ZSgtOTUxLCAtMjYzKSIgZmlsbD0iI0M3MjAzMiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9InBpbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTUxLCAyNjMpIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMCwwIEMzMS4wNDU2OTUsMCA0MCw4LjY4OTU5NjQ4IDQwLDE5LjQwODc1NyBDNDAsMjMuMzQyMDQxMiAzNy41ODY5Njg3LDI4LjAzMTQ3MDUgMzQuMjg1NzE0MywzMi45NDcxMDU1IEMyOC45MjY4NTY1LDQwLjkyNjU1MzggMjEuNjEzNDM1Nyw0OS45NjI4MTI1IDIxLjM1OTAzNzIsNjAuNzYzNDQ0IEMyMS4yMTQ2MDg4LDYxLjY5NzAzMjEgMjAuNDEz'+
			'Mjc1LDYyIDIwLDYyIEMxOS41OTEyMjUyLDYyIDE4LjY4MzQwMjgsNjEuNTQyNjgyOSAxOC42ODM0MDI4LDYwLjc2MzQ0NCBDMTguNjgzNDAyNyw1MS4yMjI5NjM1IDExLjA2MDMyNDgsNDEuMjQ0MDYwNiA1LjYyODUyNDQ0LDMyLjk0NzEwNTUgQzIuMTkwODExMSwyNy42OTYwNzQzIDAsMjMuNDA5NjE4MSAwLDE5LjQwODc1NyBDMCw4LjY4OTU5NjQ4IDguOTU0MzA0OTgsMCAyMCwwIFogTTE5LjUsMTAgQzE0LjI1MzI5NDksMTAgMTAsMTQuMDI5NDM3MyAxMCwxOSBDMTAsMjMuOTcwNTYyNyAxNC4yNTMyOTQ5LDI4IDE5LjUsMjggQzI0Ljc0NjcwNTEsMjggMjksMjMuOTcwNTYyNyAyOSwxOSBDMj'+
			'ksMTQuMDI5NDM3MyAyNC43NDY3MDUxLDEwIDE5LjUsMTAgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
		me._svg_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_1;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI2MnB4IiB2aWV3Qm94PSIwIDAgNDAgNjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+cGluLWhvdmVyPC90aXRsZT4KICAgIDxnIGlkPSJQYW5vVG91ciIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9InBhbm8tMTkyMHgxMDgwIiB0cmFuc2Zvcm'+
			'09InRyYW5zbGF0ZSgtOTUxLCAtMjYzKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9InBpbi1ob3ZlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTUxLCAyNjMpIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMCwwIEMzMS4wNDU2OTUsMCA0MCw4LjY4OTU5NjQ4IDQwLDE5LjQwODc1NyBDNDAsMjMuMzQyMDQxMiAzNy41ODY5Njg3LDI4LjAzMTQ3MDUgMzQuMjg1NzE0MywzMi45NDcxMDU1IEMyOC45MjY4NTY1LDQwLjkyNjU1MzggMjEuNjEzNDM1Nyw0OS45NjI4MTI1IDIxLjM1OTAzNzIsNjAuNzYzNDQ0IEMyMS4yMTQ2MDg4LDYxLjY5NzAzMjEgMjAuNDEzMjc1'+
			'LDYyIDIwLDYyIEMxOS41OTEyMjUyLDYyIDE4LjY4MzQwMjgsNjEuNTQyNjgyOSAxOC42ODM0MDI4LDYwLjc2MzQ0NCBDMTguNjgzNDAyNyw1MS4yMjI5NjM1IDExLjA2MDMyNDgsNDEuMjQ0MDYwNiA1LjYyODUyNDQ0LDMyLjk0NzEwNTUgQzIuMTkwODExMSwyNy42OTYwNzQzIDAsMjMuNDA5NjE4MSAwLDE5LjQwODc1NyBDMCw4LjY4OTU5NjQ4IDguOTU0MzA0OTgsMCAyMCwwIFogTTE5LjUsMTAgQzE0LjI1MzI5NDksMTAgMTAsMTQuMDI5NDM3MyAxMCwxOSBDMTAsMjMuOTcwNTYyNyAxNC4yNTMyOTQ5LDI4IDE5LjUsMjggQzI0Ljc0NjcwNTEsMjggMjksMjMuOTcwNTYyNyAyOSwxOSBDMjksMT'+
			'QuMDI5NDM3MyAyNC43NDY3MDUxLDEwIDE5LjUsMTAgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjQzcyMDMyIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD0ib3ZhbCIgZmlsbD0iI0ZGRkZGRiIgY3g9IjE5LjUiIGN5PSIxOSIgcng9IjguNDQ0NDQ0NDQiIHJ5PSI4Ij48L2VsbGlwc2U+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
		me._svg_1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;svg_1;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
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
		me._svg_1.onmouseover=function (e) {
			me._svg_1__img.style.visibility='hidden';
			me._svg_1__imgo.style.visibility='inherit';
		}
		me._svg_1.onmouseout=function (e) {
			me._svg_1__img.style.visibility='inherit';
			me._svg_1__imgo.style.visibility='hidden';
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me._redpin.appendChild(me._svg_1);
		me.__div = me._redpin;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
			hotspot.skinid = 'Redpin';
			hsinst = new SkinHotspotClass_redpin(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['Redpin']) {
			var i;
			for(i = 0; i < hotspotTemplates['Redpin'].length; i++) {
				hotspotTemplates['Redpin'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope,ggParent,parameter) {
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
		el=me._thumbnail_nodeimage=document.createElement('div');
		els=me._thumbnail_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;thumbnail_nodeimage;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Thumbnail NodeImage";
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
		me._thumbnail_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
			player.setVariableValue('currentPan', "{"+me.ggNodeId+"}");
		}
		me._thumbnail_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		el=me._checkmark_tick=document.createElement('div');
		els=me._checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgWw0KCTwhRU5USVRZIG5zX2Zsb3dzICJodHRwOi8vbnMuYWRvYmUuY29tL0Zsb3dzLzEuMC8iPg0KCTwhRU5USVRZIG5zX2V4dGVuZCAiaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbn'+
			'NpYmlsaXR5LzEuMC8iPg0KCTwhRU5USVRZIG5zX2FpICJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iPg0KCTwhRU5USVRZIG5zX2dyYXBocyAiaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyI+DQpdPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zOng9IiZuc19leHRlbmQ7IiB4bWxuczppPSImbnNfYWk7IiB4bWxuczpncmFwaD0iJm5zX2dyYXBoczsiDQoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRv'+
			'YmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iDQoJIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiINCgkgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBpZD0iTGF5ZXJfMSI+DQo8L2c+DQo8ZyBpZD0iRWJlbmVfMSI+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiI+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC'+
			'43ODdsLTIuMjkxLTIuMjQzDQoJCQkJYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDJjLTAuNTEzLDAuNTI1LTAuNTA0LDEuMzY3LDAuMDIxLDEuODhsMy4yMywzLjE2M2MwLjI1OSwwLjI1MywwLjU5NCwwLjM3OSwwLjkzLDAuMzc5DQoJCQkJYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiLz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4'+
			'Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4DQoJCQkJYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMw0KCQkJCWwtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJCTxnIG9wYWNpdHk9IjAuNCIgIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiPg0KCQkJDQoJCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW'+
			'5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIGQ9Ig0KCQkJCU0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5'+
			'NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQkNCgkJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiICBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgZD0iDQoJCQkJTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC'+
			'42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMNCgkJCQljLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAu'+
			'Mzc5LDAuOTMsMC4zNzkNCgkJCQljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIvPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMC'+
			'wxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYNCgkJCQljLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2'+
			'NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNw0KCQkJCWgtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni'+
			'0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOQ0KCQkJCWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwM2wtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=';
		me._checkmark_tick__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;checkmark_tick;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 26px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick.ggIsActive=function() {
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
		me._checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._checkmark_tick.ggElementNodeId()) == true) || 
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
		me._checkmark_tick.ggUpdatePosition=function (useTransition) {
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
		me._thumbnail_nodeimage.appendChild(me._checkmark_tick);
		el=me._thumbnail_active=document.createElement('div');
		el.ggId="Thumbnail Active";
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
		me._thumbnail_active.ggIsActive=function() {
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
		me._thumbnail_active.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				(me._thumbnail_active.ggIsActive() == true)
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				(me.elementMouseOver['thumbnail_active'] == true)
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active.style[domTransition]='border-color 300ms ease 0ms';
				if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active.style.borderColor="rgba(209,209,209,1)";
				}
			}
		}
		me._thumbnail_active.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active']=true;
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage.appendChild(me._thumbnail_active);
		me.__div.appendChild(me._thumbnail_nodeimage);
	};
	me.addSkin();
	me._map_bg.logicBlock_scaling();
	me._main_menu.logicBlock_scaling();
	me._toggle2.logicBlock_scaling();
	me._arrow_menu.logicBlock_scaling();
	me._top_menu.logicBlock_visible();
	me._abouttext.logicBlock_visible();
	me._gyro.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._map_bg.logicBlock_scaling();me._main_menu.logicBlock_scaling();me._toggle2.logicBlock_scaling();me._arrow_menu.logicBlock_scaling(); });
	player.addListener('changenodeid', function(args) { me._top_menu.logicBlock_visible();me._abouttext.logicBlock_visible(); });
	player.addListener('configloaded', function(args) { me._gyro.logicBlock_visible(); });
	player.addListener('changenodeid', function(args) { me._thumbnail_cloner.callChildLogicBlocks_changenodeid(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenodeid', function(args) { me._thumbnail_cloner.callChildLogicBlocks_active(); });
	document.addEventListener('keydown', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = key;
		if (!player.getLockedKeyboard()) {
			switch(key) {
				case 18:
					var flag=me._map_bg.ggPositonActive;
if (player.transitionsDisabled) {
	me._map_bg.style[domTransition]='none';
} else {
	me._map_bg.style[domTransition]='all 1000ms ease-out 0ms';
}
if (flag) {
	me._map_bg.ggParameter.rx=0;me._map_bg.ggParameter.ry=0;
	me._map_bg.style[domTransform]=parameterToTransform(me._map_bg.ggParameter);
} else {
	me._map_bg.ggParameter.rx=0;me._map_bg.ggParameter.ry=200;
	me._map_bg.style[domTransform]=parameterToTransform(me._map_bg.ggParameter);
}
me._map_bg.ggPositonActive=!flag;
					break;
				case 70:
					player.toggleFullscreen();
					break;
				case 71:
					gyro.toggle();
					break;
				case 72:
					player.moveToDefaultViewEx(1,0);
					break;
				case 82:
					player.toggleAutorotate();
					break;
				case 83:
					player.playPauseSound("_background","1");
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