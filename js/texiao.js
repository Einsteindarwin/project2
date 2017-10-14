///**
// * Created by Administrator on 2017/7/26.
// */
//function getByClass(oParent,sClass){
//    var all=document.getElementsByTagName('*');
//    var result=[];
//    for(var i=0;i<all.length;i++){
//        if(all[i].className==sClass){
//            result.push(all[i]);
//        }
//    }
//    return result;
//}
//window.onload=function(){
//    var oList=document.getElementById('playlist');
//    var oPrev=getByClass(oList,'prev')[0];
//    var oNext=getByClass(oList,'next')[0];
//    var oLeft=getByClass(oList,'mark_left')[0];
//    var oRight=getByClass(oList,'mark_right')[0];
//
//    var oSmall=getByClass(oList,'small_pic')[0];
//    var oUlSmall=oSmall.getElementsByTagName('ul')[0];
//    var aLiSmall=oSmall.getElementsByTagName('li');
//
//    var oUlBig=getByClass(oList,'big_pic')[0];
//    var aLiBig=oUlBig.getElementsByTagName('li');
//
//    var nowZIndex=2;
//    var now=0;
//
//    oSmall.style.width=aLiSmall.length*aLiSmall[0].offsetWidth+'px';
//
//    oPrev.onmouseover=oLeft.onmouseover=function ()
//    {
//        startMove(oPrev, 'opacity', 100);
//    };
//    oPrev.onmouseout=oLeft.onmouseout=function ()
//    {
//        startMove(oPrev, 'opacity', 0);
//    };
//    oNext.onmouseover=oRight.onmouseover=function ()
//    {
//        startMove(oNext, 'opacity', 100);
//    };
//    oNext.onmouseout=oRight.onmouseout=function ()
//    {
//        startMove(oNext, 'opacity', 0);
//    };
//
//
//
//}










        window.onload=function(){
            var oDiv1=document.getElementById('play');
            var oTab=document.getElementById('tab');
            var aBtns=oTab.getElementsByTagName('li');
            var oUl=document.getElementById('imglist');
            var oLeft=document.getElementById('left');
            var oRight=document.getElementById('right');

            var timer=null;
            var now=0;
            auto();
            function auto(){
                timer=setInterval(next,2000);
            }
            function next(){
                now++;
                tab();
            }
            function tab(){
                if(now<0){
                    now=4;
                }
                if(now==aBtns.length){
                    now=0;
                }
                for(var i=0;i<aBtns.length;i++){
                    aBtns[i].className='';
                }
                aBtns[now].className='active';
                startMove(oUl,{left:-470*now});

                for(var i=0;i<aBtns.length;i++){
                    aBtns[i].index=i;
                    aBtns[i].onmouseover=function(){
                        now=this.index;
                        tab();
                    }
                }
            }

            oDiv1.onmouseenter=function(){
                clearInterval(timer);
            }

            oDiv1.onmouseleave=function(){
                auto();
            }
            oRight.onclick=function(){
                clearInterval(timer);
                next();
                auto();
            }
            oLeft.onclick=function(){
                clearInterval(timer);
                now--;
                tab();
                auto();
            }
        }