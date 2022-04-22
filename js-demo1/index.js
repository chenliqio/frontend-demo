// window.alert(1234)
console.log(4321)
var text =document.getElementById('text');
let links = document.getElementsByClassName('link');
console.log(links[0].href)

var a;
var A;
var _aaaa;
var $a;

window.onload =function(){
    text.innerText = '我通过js改变了文字'
}
/**
 * 
 * @param {*} text 弹窗显示的文字
 * @param {*} text2 控制台显示的文字
 */
let alertText = (text,text2)=>{
    alert(text)
    console.log(text2)
}

alertText('bbb','ccc')
