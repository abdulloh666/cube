let div = document.querySelector("#div");
let width= prompt ("Enter widht of your square: ");
let height = prompt("Enter height of your square: ");


document.getElementById("div").style.width = width;
document.getElementById("div").style.height = height;


spanOne.innerHTML = width;
spanTwo.innerHTML = height;

hello = (x , y) => {
    let s = (2*(x + y) * 1);
    return s;
  }
let s = hello(width , height)

console.log(`Peremeter of square is ${s}`);
console.log(width);