const products = [
    {
        name: "Cup Mug",
        price: 350,
        category: "Daily Product",
        inStock: true
    },
    {
        name: "Keychain",
        price: 80,
        category: "Daily Product",
        inStock: true
    },
    {
        name: "Flower",
        price: 120,
        category: "Flower Gifts",
        inStock: true
    }
];

for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}

for(const product of products){
    console.log(`Product Name: ${product.name}`);
    console.log(`Product Price: ₹${product.price}`);
    console.log();
}