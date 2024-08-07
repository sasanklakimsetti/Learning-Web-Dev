import PencilBox from "./pencilBox.js";
const newPencilBox=new PencilBox("Pencil Box",30,"red",12,12,12,false,"2020-05-1 00:00:00");
console.log("The Pencil Box object: ",newPencilBox);
console.log("Size: ",newPencilBox.size);
console.log("Date purchased: ",newPencilBox.datePurchased);
console.log("Age of pencil box:",newPencilBox.pencilBoxAge());

// displaying objects in html document
const content=`
    <main>
        <ul>
            <li>Name: ${newPencilBox.name}</li>
            <li>Size: ${newPencilBox.size}</li>
            <li>Color: ${newPencilBox.color}</li>
            <li>Zip length left: ${newPencilBox.zipLength.left}</li>
            <li>Zip length right: ${newPencilBox.zipLength.right}</li>
            <li>Zip length top: ${newPencilBox.zipLength.top}</li>
            <li>Zip Status: ${newPencilBox.zipOpen ? "The zip is open":"The zip is closed"}</li>
        </ul>
    </main>
`;
document.body.innerHTML=content;
if(newPencilBox.zipOpen==true&&newPencilBox.size()==30) {
    console.log("Yes");
} else{
    console.log("No");
}

let size=30;
let boxSize;
switch(true){
    case size>30:
        boxSize="Large";
        break;
    case size<=30&&size>=20:
        boxSize="Medium";
        break;
    case size<=19&&size>=10:
        boxSize="Small";
        break;
    default:
        boxSize="NA";
        break;
}
console.log("Box size: ",size);
console.log("Status: ",boxSize);