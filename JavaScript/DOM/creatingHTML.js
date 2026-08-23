const products = document.querySelector("#products");

const heading = document.createElement("h2");

heading.textContent = "Mug Cup";

// products.appendChild(heading);

products.innerHTML = "<h2>Mug Cup</h2> <p>₹350</p>";

console.log(products.innerHTML);
