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

// const affordableProducts = products.filter(
//     function(product){
//         return product.price < 300;
//     }
// );


// const affordableProducts = products.filter(
//     (product) => {
//         return product.price < 300;
//     }
// );

const affordableProducts = products.filter(
    (product) => product.price < 300
);

console.log(affordableProducts);