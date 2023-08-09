//method is something same like function but the difference is that method ica called within objects
// let obj ={
//      age : function(birthYear){
//         let newAge  =2023 - birthYear;
//      return newAge
//     }
// }
// console.log(`your age is ${obj.age(2004)}`);

//this keyword represent the object calling the method 
// let person={
//     name:"zara",
//     fname:"ali",
//     class:3,
//     section:"d",
//    getSummary:function() {
//     return `i am ${this.name} my father name is ${this.fname} and i am in class ${this.class}`


//    } 
// }
// console.log(person.getSummary());

//function vs method
// var person={
//     name:"alia",
//     address:{
//         street:12,
//         house:34,
//         city:"karachi",
//         country:"pak"
//     },
//     age:34,
//     phone:function(){
//         return this.age
//     }
// }
// console.log(person.phone());

// const person={
//     name:"lora",
//     getName:function(){
//         return this.name
//     }
// }
// console.log(person.getName());

//forEACH METHOD OF ARRAY
//that traverse over the array
// let dishes =   [ "biryani" , "cocktail" , "haleem " , "qorma"]
// for(let i=0; i<dishes.length ; i++){
//     console.log(dishes[i]);
// }

//another way of doing this thing with forEach
// dishes.forEach(function(param1){
//     console.log(param1);
// })

//for each
// const cities = ["pak" , "ind" , "Uk"]
// const newCities  = []
// cities.forEach((city)=>newCities.push(city))
// console.log(newCities);

// const games = ["cricket " , "hockey" , "racket"]
// let newGames =[];
// games.forEach((kchbh)=>newGames.push(kchbh))
// console.log(newGames);

// objects inside array
// let blockList = [
//     {
//         userName: "john",
//         reason: "abusive content"
//     },
//     {
//         userName: "paul",
//         reason: "irrelevant "
//     }
// ]
// console.log(blockList);
// for (let index = 0; index < blockList.length; index++) {
//     console.log( ` user ${blockList[index].userName} blocked due to ${blockList[index].reason} as reason`);
// }

// MATH  OBJECTS
// console.log(Math);
// let number = 23.1;
// console.log(Math.round(number));
// console.log(Math.floor(number)); //round to down
// console.log(Math.ceil(number)); //round to up
// console.log(Math.trunc(number)); //remove decimal after point

//Random
// let random = Math.random()
// console.log(Math.round(random*100)); //1-100

// call and apply method 
//set value of "this" using  call and apply
// let mainPlane={
//     airline:"Fly india",
//     iatacode :" FI",
//     bookings:[],
//     book:function(flightNum , name){
//         console.log(`${name} booked flight on ${this.airline} with flight number ${this.iatacode} ${flightNum}`);
//         this.bookings.push({flightName:`${this.airline}` , name:name , flightNum:`${this.iatacode} ${flightNum}`})
//     }
// }
// mainPlane.book("678" , "kamran");
// mainPlane.book("788" , "jahangir")
// // console.log(mainPlane);

// let childPlane = {
//     airline :"child plane",
//     iatacode : "Cp",
//     bookings:[],
// }
// let book  = mainPlane.book
// book.call( childPlane,45,"zack")
// console.log(childPlane);


// const person ={
//     name: "ali",
//     getName :function(){
//         return this.name
//     }
// }
// const newPerson = {name:"s"}
// console.log(newPerson);
// person.getName.call(newPerson)
// //apply method
// book.apply(childPlane , [9089,"ritesh"])

//bind method
// function greet(){
//     console.log(`welcome ${this.firstName} ${this.lastName}  on my page`);
// }
// let users={
//     firstName:"ali",
//     lastName : 'zaryoon'
// }
// let bindAll  = greet.bind(users)
// bindAll();

//reference passed to array / objects
// let arr = [ 1,2,3,4]
// let newArr = arr;
// console.log("original",arr);
// console.log("copy",newArr);
// newArr.shift()
// console.log(newArr);
// newArr.unshift(23)
// console.log(newArr);
// newArr[5]=34
// console.log(newArr);

//pass by value 
// let getVal = [...arr]
// getVal[3] =8;
// getVal.shift()
// console.log(`get value array ${getVal}`);

//for in loop
// let car = {
//     model:"2022",
//     color:"blue",
//     company:"toyota"
// }
// // console.log(car); // we can used any word instead of key
// let c =""
// for(let key in car){
//     c+=car[key];
// }
// console.log(c); //it gives values of keys
