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
let myVar = document.querySelector('a')
// console.log(myVar.getAttribute("href"));

//set attribute
myVar.setAttribute("href", "https://www.google.com/search?q=asar+namaz+time+karachi&oq=asa&gs_lcrp=EgZjaHJvbWUqDAgEEAAYFBiHAhiABDIGCAAQRRg5MgkIARAAGEMYigUyCQgCEAAYQxiKBTIJCAMQLhhDGIoFMgwIBBAAGBQYhwIYgAQyBwgFEAAYgAQyBggGEEUYPDIECAcQBdIBCDM3NDdqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8 ")
console.log(myVar.getAttribute('href'));
myVar.innerText="asar namaz time "