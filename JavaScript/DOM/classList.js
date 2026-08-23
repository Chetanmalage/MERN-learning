const buttonClick = document.querySelector("#addToCart");

// buttonClick.addEventListener("click",()=>{
//     buttonClick.classList.add("added");
// });

buttonClick.addEventListener("click",()=>{
    buttonClick.classList.toggle("added");
});


const favoriteButton = document.querySelector("#favoriteButton");

favoriteButton.addEventListener("click",()=>{
    favoriteButton.classList.toggle("favorite");
});