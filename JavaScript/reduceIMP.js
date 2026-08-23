const products = [
    {
        name: "Cup Mug",
        price: 350
    },
    {
        name: "Keychain",
        price: 80
    },
    {
        name: "Flower",
        price: 30
    }
];

const totalPrice = products.reduce((total, product) => {
    return total + product.price;
}, 0);

console.log(totalPrice);



const numbers = [10, 20, 30];

const total = numbers.reduce((total, number) => {
    return total + number;
}, 0);

console.log(total);