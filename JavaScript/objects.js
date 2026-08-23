const product ={
    name: "Cup Mug",
    price: 350,
    category: "Daily Product",
    inStock: true,
    description : "Cup can be customized"
};

console.log(product);


// Array + objects
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
        price: 120,
        category: "Flower Gifts",
        inStock: true
    }
];

console.log(products)
console.log(`Name of First Product: ${products[0].name}`);
console.log(`Price of ${products[1].name}: ${products[1].price}`);
console.log(`category of ${products[2].name}: ${products[2].category}`);
console.log(`Is ${products[0].name} in stock: ${products[0].inStock}`);


