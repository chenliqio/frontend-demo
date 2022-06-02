window.onload =()=>{
    let myBtn =document.getElementsByClassName('btn');
    myBtn.addEventListener('click'),() =>{
    //   
    };






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
    xhr.open("get",' http://175.25.23.192:10498/',true);
    // 4.请求体发送数据
    xhr.send(null)
}
 

