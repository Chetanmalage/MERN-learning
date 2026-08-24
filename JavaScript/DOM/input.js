// const customerName = document.querySelector("#customerName");

// const button = document.querySelector("#submitButton");

// button.addEventListener("click",()=>{
//     console.log(customerName.value); 
// });

const form = document.querySelector("#orderForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(`Order submitted successfully!
        Customer: ${customerName.value}`);
});