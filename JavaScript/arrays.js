// Arrays in js
let arrayItem="book";
const books=["pens","books",4,true];
console.log(books);
console.log(books.length);
// adding an element to the array by indexing
books[4]="pencil";
console.log(books);
console.log(books.length);
// if indexing is wrong not for the next to last one and more than that then it will be empty and the index mentioned will be filled
books[13]="hai";
console.log(books);
console.log(books.length);

// Array methods
let pencilBoxContents=["pen","pencil","eraser"];
console.log(pencilBoxContents.join(" | "));  // the contents will be printed with the delimiter mentioned not with the actual array notation i.e. []
pencilBoxContents.push("sharpener");  // the mentioned content will be added to the last of the array
console.log(pencilBoxContents.join(" | "));
pencilBoxContents.shift();  // the first element of the array will be popped out
console.log(pencilBoxContents.join(" | "));

//for each loop
pencilBoxContents.forEach(function (item){
    item = `<li>${item}</li>`;
    console.log(item);
});
console.log(pencilBoxContents.join(" | "));

let shortItems=pencilBoxContents.find(function (item){
    if(item.length>=5){
        return item;  // only the first found item will be printed
    }
});
console.log(shortItems);