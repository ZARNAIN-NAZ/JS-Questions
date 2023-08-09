// let result = document.querySelectorAll('p')
// console.log(result);

// let newResult = document.querySelector('#zaini')
// console.log(newResult);
// newResult.forEach(element => {
//     console.log(element);
// });

// let tagName = document.getElementsByTagName('p')
// console.log(tagName);

//updating and chaging content
// let head = document.querySelector('h1')
// console.log(head.innerText); //ignore spaces
// console.log(head.innerHTML); //it doesnot ignore spaces

// let content = document.querySelector(".content")
// console.log(content.innerText);

// let content  = document.querySelector(".content")
// content.innerText += "<h1>great zaini</h1>" //retreive and set
// console.log(content.innerText); //give plain text

// let content  = document.querySelector(".content")
// content.innerHTML+= "<h1>great zaini</h1>" //retreive and set
// console.log(content.innerHTML); // give in HTMl form

//get set attribute
// let myVar = document.querySelector('a')
// console.log(myVar.getAttribute("href"));

//set attribute
// myVar.setAttribute("href", "https://www.google.com/search?q=asar+namaz+time+karachi&oq=asa&gs_lcrp=EgZjaHJvbWUqDAgEEAAYFBiHAhiABDIGCAAQRRg5MgkIARAAGEMYigUyCQgCEAAYQxiKBTIJCAMQLhhDGIoFMgwIBBAAGBQYhwIYgAQyBwgFEAAYgAQyBggGEEUYPDIECAcQBdIBCDM3NDdqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8 ")
// console.log(myVar.getAttribute('href'));
// myVar.innerText="asar namaz time "

// //add styling
// let heading = document.querySelector('h1')
// heading.style.color="red"
// heading.style.background ="yellow"

// let head = document.querySelector("h1");
// head.classList.add("newClass") ///add new class
// console.log(head);
// head.classList.remove("newClass")//remove
// console.log(head);
// head.classList.replace("main" , "newClass") //replace("that removed","kept")

//parent child and sibling element
// let anything = document.querySelector(".content")
// console.log(anything.children);

//1st convert it into array 
// console.log(Array.from(anything.children));
// Array.from(anything.children).forEach(function(element){
//    element.classList.add("coders")
 
// });
// console.log(anything.parentElement);

//parent
// let doc = document.querySelector("h2")
// console.log(doc.parentElement);
// console.log(doc.nextElementSibling); //sibling

//events
// const ul = document.querySelector("ul")
// let event2 = document.querySelector('.clickMe')
// // console.log(event2);
// event2.addEventListener('click' ,function(){
// // let li = document.createElement("p") createElement("any element u can write like p h li etc")
// li.textContent = "something new added"
// // ul.prepend(li)//at top
// ul.append(li)//at bottom
// })

// let elem =  document.querySelectorAll("li")
// // console.log(elem);
// elem.forEach(function(elem)
// {
//     elem.addEventListener('click' , e=>{
        // console.log("item checked");
    //     console.log(e.target);
    // e.target.style.textDecoration ="line-through"
    // e.target.remove()
//     })
//  })

//bubling and delegation
// const ul = document.querySelector("ul")
// ul.addEventListener('click' , (e)=>{
//     if(e.target.nodeName == "LI"){
//         e.target.remove()
//     }
// })  

//SUBMIT FORM
let form = document.querySelector(".sign-up-Form")
// let email  =document.querySelector("#email")
// let password  =document.querySelector("#password")
form.addEventListener("submit" , (e)=>{
    e.preventDefault() //stop event to run continiously
    // console.log("successfully");
// console.log(email.value , password.value);
console.log(form.email.value , form.password.value);
})