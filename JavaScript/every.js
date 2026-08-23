const products =[
    {
        name:"Cup Mug",
        price: 350,
        category: "Daily Product",
        inStock: true
    },
    {
        name:"Keychain",
        price: 80,
        category: "Daily Product",
        inStock: true
    },
    {
        name:"Flower",
        price: 30,
        category: "Flower Gifts",
        inStock: true
    }
];


const allProductsAffordable = products.every((product)=> product.price<500);

console.log(allProductsAffordable);