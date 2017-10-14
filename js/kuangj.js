/**
 * Created by Administrator on 2017/7/29.
 */
function getStyle(obj,name){
    if(obj.currentStyle){
        return obj.currentStyle[name];
    }else{
        return getComputedStyle(obj,false)[name];
    }
}

function startmove(obj,json,fnend){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var btn=true;
        for(var attr in json){
            var cur=0;
            if(attr=='opacity'){
                cur=getStyle(obj,attr)*100;
            }
            else{
                cur=parseInt(getStyle(obj,attr));
            }
            var speed=(json[attr]-cur)/3;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);

            if(attr=='opacity'){
                obj.style.opacity=(cur+speed)/100;
                obj.style.filter='alpha:(opacity:'+(cur+speed)+')';
            }else{
                obj.style[attr]=cur+speed+'px';
            }
            
            if(cur!=json[attr]){
            	btn=false;
            }
            else{
            	clearInterval(obj.timer);
            }
            
            if(btn){
                btn=true;
                if(fnend){
                	fnend();
                }
            }
        }
    },30)
}









