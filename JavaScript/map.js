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

const newProducts = products.map(
    function(product){
        return product.name;
    }
);

console.log(newProducts);

