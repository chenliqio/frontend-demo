window.onload=()=>{
 //获取元素
    let doms=document.getElementsByClassName('box') 
    //console.log(doms,"doms")
// 随机获取三个元素
function get3RandomElement(){
    let elements = [0,1,2,3,4,5,6,7,8];
    // 拿到的是序号，不是dom元素，dom元素代表9个box，map就用来链接dom元素
    let newelements = [];
    for (let k=0; k<3; k++){
        let index = Math.floor(Math.random()*(8-k));
        newelements.push(elements[index]);
        elements.splice(index,1);
    }
    // map映射  
    let el3= newelements.map(function(el){
        return doms[el]
    });
    // console.log(el3,"3dom")
    return el3
}
function get3RandomColor(){
    function getRandomColor(){
        let num1=parseInt(Math.random()*255);
        let num2=parseInt(Math.random()*255);
        let num3=parseInt(Math.random()*255);
        return "rgb("+num1+","+num2+","+num3+")";
        // 第二种
        // let color = 'rgb($(num1),)$的意思是变量
    }
    let color1= getRandomColor();
    // 这个就是在调用函数
    let color2= getRandomColor();
    let color3= getRandomColor();
    console.log(color1,color2,color3)
    // 检查代码有没有执行的方法，就看这个代码有没有在控制台打印出来 
    return [color1,color2,color3]
}
let prevEl;
function ChangeColor(el,colors){
     el.forEach((item,index) => {
         item.style.background = colors[index]
        //  这一行代码可以代替css里面的样式 
     })
    //  colors[index]颜色和box一一对应的组合 
     prevEl=el
}
function resetColor(el){
if (el===undefined){
    return;
}
else {
    el.forEach((item) => {
        item.style.background = "orange"
    })
}
}
// 第一四循环时，前面没有没有数据，所以返回这个函数的开头，第二次之后就有第一次的变色的数据了，此时将变了颜色的方块变成橙色

let btn_start = document.getElementById('start');
let btn_end = document.getElementById('end');
let interval;
// 回调函数，一般都得用匿名函数，没有名字的函数
btn_start.addEventListener('click',()=>{
    console.log("click")
    // 定时器内的函数才会重复执行
    // 
    interval = setInterval(()=>{
        resetColor(prevEl)
        let threeEl = get3RandomElement();
        let threeColor = get3RandomColor();
        ChangeColor(threeEl,threeColor)
}, 2000)

})
btn_end.addEventListener('click',()=>{
    clearInterval(interval)
})
}