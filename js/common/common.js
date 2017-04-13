define(['jquery','jqueryCookie'],function($,undefined){
    //判断用户有没有登陆过,没有的话跳转到登陆页
    //var coolieArr =document.cookie.split('; ');
    //var isLogin=false;
     //必须是所有的cookie 都没有PHPSESSID,才算没有登陆过,,那么达到登录页面
     for(var i=0;i<ciikieArr.length;i++){
         if(cookieArr[i],indexOf('PHPSESSID=')===0){
             isLogin=true;
             break;
         }
     }
});