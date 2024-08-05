// creating objects in js
const pencilbox = {
    name: "A Pencil Box",
    size: 30,
    color: "Red",
    zipLength: {
        left:12,
        right: 12,
        top: 24,
    },
    zipOpen: false,
    // method
    toggleZip: function(zipStatus){
        this.zipOpen=zipStatus;
    },
}
console.log(pencilbox);

// accessing objects in js
// dot notation
console.log(pencilbox.color);
console.log(pencilbox.zipLength.left);

// bracket notation
console.log(pencilbox.size);
var sizeValue="size";
console.log(pencilbox[sizeValue]);

console.log(pencilbox.toggleZip(true));
