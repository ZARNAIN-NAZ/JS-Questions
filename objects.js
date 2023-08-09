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
let mainPlane={
    airline:"Fly india",
    iatacode :" FI",
    bookings:[],
    book:function(flightNum , name){
        console.log(`${name} booked flight on ${this.airline} with flight number ${this.iatacode} ${flightNum}`);
        this.bookings.push({flightName:`${this.airline}` , name:name , flightNum:`${this.iatacode} ${flightNum}`})
    }
}
mainPlane.book("678" , "kamran");
mainPlane.book("788" , "jahangir")
console.log(mainPlane);
