//functions

// let fun=function(name , fname){
//     console.log("my name is " ,name ,"my father name is " ,fname);

// }

// fun("zarnain" , "abid");
// fun("harry")

// let age = function(birthYear){
//     let myage= 2023-birthYear;
//     console.log(myage);
// }
// age(2004)

//same for return 
// let age = function(birthYear ,currentYear=2023){
//     let myage = currentYear - birthYear;
//     return myage
// }
// // console.log(age(2004));
// // let final = age(2004)
// // console.log(final)

//ARROW FUNCTION
//   let invitation = name=> `welcome ${name}`
//   console.log(invitation("java"))

//passing function as an argument higher order function
// let upperCase = function(str){
//     return str.toUpperCase()
// }
// let lowerCase  =function(str){
//     return str.toLowerCase()
// }
// let sumUp = function(str , anything){
//     return anything(str)
// }
// console.log(sumUp("zarnain" , upperCase));

//one function return another function
// let com = function(msg){
//     return function(name){
//         console.log(`${msg} ${name}`);
//     }

// }
// console.log(com("hello")("my"));

//callback function
// var talk = function (fx) {
//     fx()
    
// }
// var sayHi = function(){
//     console.log("hi");
// }
// talk(sayHi)

// var calc = function(fx,a,b){
//     return fx(a,b)
// }
// var sum = function(a,b){
//     return a+b;
// }
// calc(sum,4,5)

function make() {
    let name  = "alina"
    function displayName() {
        console.log(name);
    }
   return displayName  
}
let anyword = make()
anyword()

//second method
// let newCom = com("hello")
// newCom('how r u ')
// console.log(newCom);


//immediately invoked funciton expression
// executed only once
// (function(name){
//     console.log("this will only run at once " , name);
// })("zarnain")

//setTimeOut and setInterval
// function greeting(name) {
//     console.log("hello i am zarnain" , name);
    
// }
// setTimeout(greeting,4000,"maya")

//2nd method
// setTimeout(function greeting(){
//     console.log("this is another way");
// }
// ,8000)

//setInterval
// setInterval(greeting , 3000,"john")
// clearInterval(greeting)

//HOISTING-------
// test()
// let test = function(){
//     console.log("hello");
// }

// test()
// function test(){
//     console.log("hello");
// }