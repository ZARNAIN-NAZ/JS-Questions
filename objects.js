//method is something same like function but the difference is that method ica called within objects
// let obj ={
//      age : function(birthYear){
//         let newAge  =2023 - birthYear;
//      return newAge
//     }
// }
// console.log(`your age is ${obj.age(2004)}`);

//this keyword represent the object calling the method 
let person={
    name:"zara",
    fname:"ali",
    class:3,
    section:"d",
   getSummary:function() {
    return `i am ${name} my father name is ${fname} and i am in class &{class}`
    
   } 
}
console.log(person.getSummary);