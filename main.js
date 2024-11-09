
let heading=document.getElementById("head");
console.log(heading);
let paragraph=document.getElementById("para");
console.log(paragraph);
let image=document.getElementById("image");
console.log(image);

let head2="Flowers";
let para2="Flowers are the coloured part of a plant or tree from which seeds or fruit grow.";
console.log(head2,para2);

function changetext()
{
    heading.innerText=head2;
    paragraph.innerText=para2;
    image.src="Images/flowers.jpg";
}