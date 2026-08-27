const products = [
    { name: "Cup Mug", price: 350 },
    { name: "Keychain", price: 80 },
    { name: "Flower", price: 120 }
];

let cart = [];

const cartContainer = document.querySelector("#cart");

const productsContainer = document.querySelector("#products");


products.forEach(product => {

    const productCard = document.createElement("div");
    productCard.classList.add("product");

    const productName = document.createElement("h2");
    productName.textContent = product.name;
    productCard.appendChild(productName);

    const productPrice = document.createElement("p");
    productPrice.textContent = `₹${product.price}`;
    productCard.appendChild(productPrice);


    const button = document.createElement("button");
    button.textContent = "Add to Cart";
    productCard.appendChild(button);

    button.addEventListener("click", () => {
        cart.push(product);
        renderCart();

    });

    productsContainer.appendChild(productCard);
});



function renderCart() {
    cartContainer.innerHTML = "";

    cart.forEach(product => {
        const contentProduct = document.createElement("p");
        contentProduct.textContent = `${product.name} - ₹${product.price}`;
        cartContainer.appendChild(contentProduct);

        const button = document.createElement("button");
        button.textContent = "Remove";
        cartContainer.appendChild(button);

        button.addEventListener("click", () => {
            const productToRemove = product;
            cart = cart.filter(product => product !== productToRemove);
            renderCart();
        });
    });

    const total = cart.reduce((total, product) => {
        return total + product.price;
    }, 0);
    const totalElement = document.createElement("p");

    totalElement.textContent = `Total: ₹${total}`;

    cartContainer.appendChild(totalElement);
}
