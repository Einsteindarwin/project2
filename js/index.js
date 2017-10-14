/**
 * Created by Administrator on 2017/7/29.
 */
window.onload = function() {
	var oList = getId('list');
	var oUl = getId('ul');
	var oList1 = getId('list1');
	var aLi1 = oList1.getElementsByTagName('li');
	var oLeft = getId('left');
	var oRight = getId('right');
	var oD = getId('direction');
	var oBr = getId('banner_right');
	var timer = null;

	var oOther = getId('special_other');
	var oOli = oOther.getElementsByClassName('i');
	var oMenu = getId('list_menu');
	var oMli = oMenu.getElementsByClassName('con');
	var oBtn = getId('bottom');
	var oI = oBtn.getElementsByTagName('i');

	var oContent=document.getElementById('content_body');
	var oImg = oContent.getElementsByTagName('img');

	function getId(obj) {
		return document.getElementById(obj)
	};

 	//头部app
	var oNav=getId('nav_num');
	var oPic=oNav.getElementsByClassName('iconfont')[0];
	oNav.onmouseenter=function(){oPic.style.display='block';}
	oNav.onmouseleave=function(){oPic.style.display='none';}

	//主体内容作品
	var oCon=document.getElementById('control');
	var oCon1=document.getElementById('control1');
	var oUl2=document.getElementById('item_ul');
	var aLi2=oUl2.childNodes;
	var num3=0;
	
	function move2(){
		num3++;
		tab2();
		console.log(num3);
	}
	function tab2(){
		if(num3<0){num3=0}
		if(num3>9){num3=9}
		startmove(oUl2,{left:-250*num3});
		console.log(num3);
	}
	oCon.onclick=function(){
		num3--;
		tab2();
	}
	oCon1.onclick=function(){
		move2();
	}

	//好物推荐左右移动
	var oWrapper = getId('wrapper');
	var aLeft = getId('good_recommand_left');
	var aRight = getId('good_recommand_right');
	var num1 = 0;

	function move(){
		num1++;
		tab1();
	}
	function tab1(){
		if(num1<0){
			num1=0;
		}
		if(num1>2){num1=2;}
		startmove(oWrapper,{left:-980*num1});
	}
	aRight.onclick=function(){
		move();
	}
	aLeft.onclick=function(){
		num1--;
		tab1();
	}

	//大家喜欢
	for(var i = 0; i < oImg.length; i++) {
		oImg[i].onmouseover = function() {
			this.style.opacity='0.9';
		}
		oImg[i].onmouseout = function() {
			this.style.opacity='1';
		}
	}

	//侧边栏关闭
	var oClose = getId('close');
	var oBanner = getId('banner');
	oClose.onclick = function() {
		oBanner.style.display = 'none';
	};

	//移动透明度变化
	oBr.onmouseover = function() {
		oBr.style.opacity = 0.1
	};
	oBr.onmouseout = function() {
		oBr.style.opacity = 0
	};

	//轮播图
	var num = 0;
	auto();

	function auto() {
		timer = setInterval(next, 6000);
	}

	function next() {
		num++;
		tab();
	}

	function tab() {
		if(num < 0) {
			num = aLi1.length-1;
		}
		if(num > aLi1.length-1) {
			num = 0
		}
		for(var i = 0; i < aLi1.length; i++) {
			aLi1[i].className = ''
		}
		aLi1[num].className = 'active';
		startmove(oUl, {
			left: -770 * num
		});
	}
	oList.onmouseover = function() {
		clearInterval(timer);
		oD.style.display = 'block';
	};
	oList.onmouseout = function() {
		auto();
		oD.style.display = 'none';
	};
	oRight.onclick = function() {
		clearInterval(timer);
		next();
		auto();
	};
	oLeft.onclick = function() {
		clearInterval(timer);
		num--;
		tab();
		auto();
	}

	//选项卡
	var oShare=document.getElementsByClassName('shareHover');
	for(var i = 0; i < oOli.length; i++) {
		oOli[i].index = i;
		oOli[i].onmouseover = function() {
			for(var i = 0; i < oOli.length; i++) {
				oOli[i].className = 'i';
				oMli[i].style.display = 'none';
				oShare[i].style.display='none';
				oI[i].className = '';
			}
			oI[this.index].className = 'selected';
			this.className = 'choose i';
			oMli[this.index].style.display = 'block';
			oShare[this.index].style.display='block';
		}
	}

	window.onscroll = function() {
		//回到顶部
		var oBox = document.getElementById('back');
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollTop >= 300) {
			oBox.style.display = 'block';
		} else {
			oBox.style.display = 'none';
		}
		oBox.onclick = function() {
			document.documentElement.scrollTop = document.body.scrollTop = 0;
		}
	}
}