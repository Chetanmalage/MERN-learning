const form = document.querySelector("#orderForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    if (!form.name.value.trim() || !form.email.value.trim() || !form.password.value.trim()) {
        alert("Please fill all the fields");
        isValid = false;
    }

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(form.email.value.trim())) {
        emailError.classList.add("error");
        emailError.textContent = "Please enter a valid email address";
        isValid = false;
    }else{
        emailError.classList.remove("error");
        emailError.textContent = "";
    }

    if (form.password.value.trim().length < 6) {
        passwordError.classList.add("error");
        passwordError.textContent = "Password must be at least 6 characters long";
        isValid = false;
    } else {
        passwordError.classList.remove("error");
        passwordError.textContent = "";
    }

    if (isValid) {
        alert("Form submitted successfully");
    }
});






