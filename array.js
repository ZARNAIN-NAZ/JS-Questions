//array 
//reverse
// let array = ["a" , "b" ,"c"]
// console.log(array.reverse());

//concat
// let num =[1,2,3,4]
// console.log(num.concat(array));
// console.log(...num , ...array);

//join
// console.log(num.join("-"));
// console.log(typeof num);

//splice()
//used to extract  part of the array
//.slice(startIndex,ladtIndex(excluded))
// return new array fo extracted elements

// let num =[ 3,45,3,5,7]
// let newNum = num.slice(1,4) // 45,3,5
// console.log(`original num ${num}`);
// console.log(`extracted num ${newNum}`);

//SPlicE()
// used to add new elements into array
// .splice(index,deleteValue , valuetoBEAdded)
//return deleted items in the form of array

// let num =[2,4,5,6,3]
// let newNum = num.splice(2,2,3,3) at index2, two values will be added , and that values are 3 and 3 
// console.log("orginal array" , num);
// console.log("updated array" , newNum);

//at method
// let nums =[23,4,65,64]
// console.log(nums.length);
// console.log(nums[0]);
// console.log(nums.at(3));
// console.log(nums.at(-2));
// console.log(nums[nums.length-1]);
// console.log(nums.slice(-1)[0]);

//at at strings
// let name1 = "lilly"
// console.log(name1.at(-1));

//map fucntion 
// create new array from original array by applying 
// transfromation function 
// let salaries = [3000,4000,5000,6000,7000]
// let newSalaries = salaries.map(salary=>{
//     let increment = salary/2;
//     return salary  + increment
// })
// console.log(newSalaries);

//FILTER METHOD
// let gifts= ["ring" , "car" , "doll","cup", "doll","ring"]
// let filtered = gifts.filter(gift=>{
// if(gift=="ring" || gift =="doll"){
//     return gift;
// }
// })
// console.log(filtered);

//reduce method
// .reduce(function(total ,currentValue),initialValue)
//  let num=[3,34,2,3,56]
//  let sum = num.reduce(function(total , currentValue){
//     return total+currentValue
//  },0)
//  console.log(sum);

//find method //only gives 1st matching element
// let students = [
//     {
//     id:4,
//     name:"alia"}
//      ,{
//         id:43,
//         name:"naina"
//      }]
//      let result = students.find(students=>{
// return students.id ===4
//      })
//      console.log(result);

//findIndex METHOD
// return inedex who 1st pass otherwise  return -1
// let ages = [11,34,44,23]
// let result = ages.findIndex(age=>{
//     return age>15
// })
// console.log(result);

//some and every method
