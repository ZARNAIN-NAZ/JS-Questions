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

//some and every method //gives true and false
// let scores = [34,343,53,34]
// let result = scores.every(score=>{
//     return score >50
// })
// console.log(result);

//flat method
// let arr = [1,2,3,[4,5,[6,7]]]
// console.log("before flat" , arr);
// let result = arr.flat(2)  (depth no of array)//by default 1 value
// console.log("after flat",result);

//flatMap
// let cart = [{
//     name:"mobile phone"
//     ,qty:2,
//     price:3232
// },
// {
//     name:"tablet"
//     ,qty:2,
//     price:3232
// }]

// let newCart = cart.flatMap(item=>{
//     if(item.name ==="mobile phone"){
//         return [item,{
//             name:"screen protector",
//             qty:1,
//             price:0
//         }]
//     }
//     else{
//         return [item]
//     }
// })
// console.log(newCart);

//sort //converts everything in strings
// let letters = ["ariba" , "jamshed" , "liaquat"]
// console.log(letters.sort());
// console.log(letters.reverse());

// let nums = [2,4,5,-33,-11]
// // console.log(nums.sort());
// console.log(nums);
// nums.sort((a,b)=>{
//     if(a<b){
//         return -1
//     }
//     if(a>b){
//         return 1
//     }
// })
// console.log(nums);

//function chaining
// let num = [1,2,3,4,5,6,7]
// let result = num.slice(0,3).splice(2,1,7).push(8)
// console.log(result );

var word= "hello"
var split = word.split("")
console.log(split);
var reverse = split.reverse()
console.log(reverse);
var join = reverse.join("-")
console.log(join);