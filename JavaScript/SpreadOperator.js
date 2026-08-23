const products = ["Cup Mug", "Keychain", "Flower"];

const newProducts = [...products, "Photo Frame" ];

console.log(products);
console.log(newProducts);


// with objects
const product = {
    name: "Cup Mug",
    price: 350,
    category: "Daily Product",
    inStock: true
};

const updatedProduct ={
    ...product,
    price: 400
};

console.log(product);
console.log(updatedProduct);
