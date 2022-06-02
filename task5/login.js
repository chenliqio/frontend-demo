window.onload =()=>{
  function clickLogin(){
    //    获取dom元素的值
       var name = document.getElementsByClassName("username").value
       var pass = documen.getElementsByClassName("password").value
    // 判断非空
    if((name == null ||name == "" )||(pass == null||pass == "")){
        alert("用户名或密码不能为空");
    }
    else{
        // 页面跳转
        if(name == "admin " && pass =="123456"){
            alert("登陆成功");
            window.location.href = "http://dev.admin.carrots.ptteng.com";
        }
        else {
            alert("用户名或密码错误")
            }
        }
     }
    // 1.定义ajax对象
    const xhr = new XMLHttpRequest();
    // 2.设置回调函数
    xhr.onreadystatechange = ()=>{
     if(xhr.readyState == 4){
         if ((xhr.status >= 200 && xhr.status <300) || xhr.status ==304){
             alert (xhr.responseText);
         }
         else{
             alert("Request was unsuccessful:"+xhr.status);
         }
     }
 };
    // 3.打开ajax对象
    xhr.open("post",'http://dev.admin.carrots.ptteng.com',true);
    // 4.请求体发送数据
    xhr.send(null);
   }

    

 

