const products = document.querySelectorAll('.product');

products.forEach((product)=>{
    product.classList.add("selected");
});

// products.forEach((product)=>{
//     console.log(product.textContent);
// });

const prices = document.querySelectorAll(".price");

prices.forEach((price)=>{
    price.textContent = "Price: " + price.textContent;
});