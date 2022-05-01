window.onload = ()=>{
    // 获取元素
    let doms = document.getElementsByClassName("square");
    // 获取三个随机数，还只是元素对应的索引值
    // let get3RandomElement = function(){}  函数不用定义，这个写法不合适
    // 思路是先定义一个索引值的集合，随机取出一个，然后将它从集合中剔除，同时还要改变集合的长度
    function  get3RandomElement (){
    let elements = [0,1,2,3,4,5,6,7,8];/*定义数组时，要用中括号,接下来就是要不断的取元素，相当于是在循环*/
    let newElment = [];
    for(let k=0;k<3;k++){
        let index = Math.floor(Math.random()*(8-k));/*注意Math方法的首字母大写 */
        newElment.push(elements[index]) ;
        elements.splice(index,1);
    }
    // 接下来就是要让这个索引值和dom元素一一对应起来，因为后面会修改，所以使用Map
    let el3 = newElment.map(function(el){
         return doms[el];
    })
         return el;
    }
    function get3RandomColor(){
        function getRandomColor(){
            let num1 = parseInt(Math.random()*255);
            let num2 = parseInt(Math.random()*255);
            let num3 = parseInt(Math.random()*255);
            return "rgb("+num1+","+num2+","+num3+")";
    }
   let color1=getRandomColor();
   let color2=getRandomColor();
   let color3=getRandomColor();
   return [color1.color2,color3];
   console.log(color1.color2,color3);
}
let prevE1;
function changeColor(){
    el.forEach((item,index)=>{
item.style.background = colors[index];
    })
}
function reSetColor(){
    if(el===undefined){
        return;
    }
    else{
        el.forEach((item)=>{
            item.style.background = "orange";
        })
    }
}
let btn_start = document.getElementById("start");
let btn_end = document.getElementById("end");
let interval;
btn_start.addEventListener ('click',()=>{
    interval = setInterval(()=>{
        reSetColor(prevE1);
        let threeE1 = get3RandomElement();
        let threeColor = get3RandomColor();
        changeColor(threeE1,threeColor);
    },2000)
})
btn_end.addEventListener ('click',()=>{
    clearInterval(interval);
})
}