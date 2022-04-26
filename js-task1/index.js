window.onload =()=>{
    // 1.获取元素
    let doms=[];
    // 2. 获取随机三个元素
    function get3ElementFromDoms(){
        return []
    }
    function get3RandomColor(){
        return [];
    }
    function ChangeColor(el,colors){
        el.forEach((item,index)=>{
            item.style.backgroundColor=colors[index] //卡不懂这个代码的意思
    
        })
    }
    let btn_start = document.getElementById('start');
    let btn_end = document.getElementById('end');
    let interval;
    btn_start.addEventListener('click',()=>{
        interval = setInterval(()=>{
            let threeEl = get3ElementFromDoms()
            let ThreeColor = get3RandomColor();
            ChangeColor(threeEl,ThreeColor)
        }, 2000)
    })
    btn_end.addEventListener('click',()=>{
        clearInterval(interval)
    })
}