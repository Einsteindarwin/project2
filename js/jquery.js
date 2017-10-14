/**
 * Created by Administrator on 2017/8/4.
 */
function checkSubmitEmail(){
    if($("#username").val()==""){
        $("#error").html("< color='red'>邮箱地址不能为空！</>");
        $("#username").focus();
        return false;
    }
    if(!$("#username").val().match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)){
        $("#error").html("< color='red'>邮箱格式不正确！请检查");
        $("#username").focus();
        return false;
    }
    return true;
}