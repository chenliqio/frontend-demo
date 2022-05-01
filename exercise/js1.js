let person ={
    name:'Matt',
    age:28
};
function printPerson(foo,{name,age},bar){
    console.log(arguments);
    console.log(name.age);
}
   
printPerson('1st',person,'2nd');