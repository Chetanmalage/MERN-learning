const product = {
    name: "Cup Mug",
    price: 350
};

localStorage.setItem("product",JSON.stringify(product));

const savedProduct = JSON.parse(localStorage.getItem("product"));

console.log(savedProduct.name);
console.log(savedProduct.price);