/**
 * Created by Administrator on 2017/8/1.
 */
window.onload=function(){
    var oUser=document.getElementById('username');
    var oKey=document.getElementById('keyword');
    var oError=document.getElementById('error');
    var oLogin=document.getElementById('login');

    oUser.onkeydown=function(){
        if(!/[0-9]/.test(oUser.value)){
            checkEmail();
        }
        else{
            checkphone();
        }
    };
    oLogin.onclick=function(){checkkey();};
    function checkEmail(){
        var re=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        if(re.test(oUser.value)){
            oError.innerHTML='';
        }
        else{oError.innerHTML='请填写正确的邮箱地址';}
    }
    function checkphone(){
        var num=/^[1][34578]\d{8}$/;
        if(num.test(oUser.value)){oError.innerHTML='';}
        else{oError.innerHTML='请填写正确的手机号码';}
    }

    function checkkey(){
        var Ep=/^[0-9A-Za-z]*[*+-/!@#$%^&(){}?<>]{6,16}$/
        if(Ep.test(oKey.value)){oError.innerHTML=''}
        else{oError.innerHTML=''}
    }

}











