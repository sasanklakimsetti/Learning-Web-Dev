// accessing elements
let type=document.querySelector("header");
console.log(type);

let classSelector=document.querySelector(".header-content");
console.log(classSelector);

let idSelector=document.querySelector("#header");
console.log(idSelector);

let descendant=document.querySelector(".header-content p");
console.log(descendant);

let all=document.querySelectorAll("main p");
console.log(all);

let bg=document.querySelectorAll("main p:last-child")
.forEach((item) => (item.style.color="blue"));

// older methods
let oldType=document.getElementsByTagName("header");
console.log(oldType);

let oldType2=document.getElementsByClassName("header-content");
console.log(oldType2);

let oldType3=document.getElementById("header");
console.log(oldType3);

// modifying the classes
// let className=document.querySelector("header").className;
// console.log(className);

let classList=document.querySelector("header").classList;
console.log(classList);

let methodOne=document.querySelector("main p").classList.add("newClass");
// let methodTwo=document.querySelector("main p").classList.remove("newClass");
let methodThree=document.querySelector("main p").classList.replace("newClass","oldClass");

// modifying the attributes
let attribute=document.querySelector("img").attributes;
console.log(attribute);
let attribute2=document.querySelector("img").hasAttribute("src");  // tells whether the attribute is present in the tag or not
console.log(attribute2);
let attribute3=document.querySelector("img").getAttribute("src");  // gives the attribute mentioned if present in the tag
console.log(attribute3);
let attribute4=document.querySelector("img").setAttribute("src","wallpaperflare.com_wallpaper (4).jpg");  // changes the present attribute with the new one

let attribute5=document.querySelector("img").removeAttribute("src","wallpaperflare.com_wallpaper (4).jpg");  // removes the present one

// modifying inline styling in js
let footer=document.querySelector("footer").style;
console.log(footer);
let footerStyle=document.querySelector("footer").style.backgroundColor="orange";

// adding DOM elements in js
let content="This is the Bootcamp";
let header=document.querySelector("header");
let container = document.createElement("section");
container.classList.add("pencil-box");
container.setAttribute("id","pencil");
container.innerHTML=content;
header.append(container);  // if we want the same before the header, we can use prepend instead of append
header.appendChild(container);
