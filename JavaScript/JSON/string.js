const product = {
    name: "Cup Mug",
    price: 350,
    category: "Daily Product"
};

const jsonProduct = JSON.stringify(product);
console.log(jsonProduct);

const backToProductObject = JSON.parse(jsonProduct);
console.log(backToProductObject);