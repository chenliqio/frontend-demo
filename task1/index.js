window.onload=()=>{
 //获取元素
    let doms=document.getElementsByClassName('box')
    //console.log(doms,"doms")
// 随机获取三个元素
function get3RandomElement(){
    let elements = [0,1,2,3,4,5,6,7,8];
    let newelements = [];
    for (let k=0; k<3; k++){
        let index = Math.floor(Math.random()*(8-k));
        newelements.push(elements[index]);
        elements.splice(index,1);
    }
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
    }
    let color1= getRandomColor();
    let color2= getRandomColor();
    let color3= getRandomColor();
    console.log(color1,color2,color3)
    return [color1,color2,color3]
}
let prevEl;
function ChangeColor(el,colors){
     el.forEach((item,index) => {
         item.style.background = colors[index]
     })
     prevEl=el
}
function resetColor(el){
if (el===undefined){
    return;
}else {
    el.forEach((item) => {
        item.style.background = "orange"
    })
}
}

let btn_start = document.getElementById('start');
let btn_end = document.getElementById('end');
let interval;
btn_start.addEventListener('click',()=>{
    console.log("click")
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