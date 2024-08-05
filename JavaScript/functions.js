// functions in js
/* Function declaration  */
function myFunction(b=13, c=18){
    let a = b+c;
    return a;
}
console.log(myFunction());
console.log(myFunction(1));
console.log(myFunction(1,15));

// Immediately invoked function
(function(){
    let b=13;
    let c=18;
    let a = b+c;
    console.log(a);
})();
document.body.innerHTML=myFunction();

/* Standard Functions */
const redPencilBox={
    name:"Red Pencil Box",
    color:"Red",
    size:30,
};
const bluePencilBox={
    name:"Blue Pencil Box",
    color:"Blue",
    size:24,
};
const addPencilBox=function(currentPencilBox){
    const newSection=document.createElement("section");
    newSection.innerHTML=`
    <h1>Name: ${currentPencilBox.name}</h1>
    <ul>
        <li>Color: ${currentPencilBox.color}</li>
        <li>Size: ${currentPencilBox.size}</li>
    </ul>
    `;
    return newSection;
};

document.body.append(addPencilBox(redPencilBox));
document.body.append(addPencilBox(bluePencilBox));

// arrow function: allows us to declare functions without function keyword
// this keyword: this tells the compiler that it belongs to the that scope.
const sum=(a,b)=>{
    return a+b;
};
console.log(sum(4,1));
window.size=13;
const yellowPencilBox={
    name:"Yellow Pencil Box",
    color:"Yellow",
    size:28,
    newSize:function(size){
        console.log(this.size);
        this.size=size;
        console.log(this.size);
        (()=>{
            console.log(this.size);
        })();
    },
};
console.log(yellowPencilBox.newSize(40));

// callback functions
function resultCalculator(result){
    document.querySelector("body").append(result);
}
function calculation(a,b,callback){
    let sum=a+b;
    callback(sum);
}
calculation(5,6,resultCalculator);