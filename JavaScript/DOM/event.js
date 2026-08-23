const buttonClick = document.querySelector("#addToCart");
const message = document.querySelector("#message");

buttonClick.addEventListener("click",()=>{
    message.textContent ="Product added to cart! 🛒";
    console.log("Product added to cart!");
});

buttonClick.addEventListener("click",(event)=>{
    console.log(event.target);
});