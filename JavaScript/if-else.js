const productName = "Cup Mug";
const price = 350;
let quantity = 3;
// let inStock = true;

// if(inStock){
//     console.log(`${quantity} ${productName} is available. You can add it to cart.`);
// }else{
//     console.log("${productName} is currently out of stock.");
// }


if(quantity > 0){
    console.log(`${quantity} ${productName} is available.`);
}else{
    console.log(`${productName} is currently out of stock.`);
}

if(price>300){
    console.log("Premium product");
}else{
    console.log("Affordable product");
}