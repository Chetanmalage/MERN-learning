const message = document.querySelector('#message');

const removebutton = document.querySelector("#removeButton");

removebutton.addEventListener("click", () => {
    message.remove();
});


const button = document.querySelector(".remove-button");

button.addEventListener("click", () => {
    button.parentElement.remove();
});


const product = document.querySelector("#product-card");

console.log(product.children[0]);
console.log(product.children[1]);
console.log(product.children[2]);


console.log(product.firstElementChild);
console.log(product.lastElementChild);


const productName = document.querySelector("#productName");

productName.style.color = "blue";
productName.style.fontSize = "30px";
productName.style.backgroundColor = "yellow";
