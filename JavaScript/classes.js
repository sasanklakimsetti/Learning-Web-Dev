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
            <li>Zip Status: ${newPencilBox.zipOpen}</li>
        </ul>
    </main>
`;
document.body.innerHTML=content;