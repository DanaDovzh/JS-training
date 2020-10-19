window.onload = function(e) {
    let error  = false;
    let inputs = document.querySelectorAll(".form__text--check");
    let messagePass =  document.querySelector("#message-confirm-pass");
    let password = document.querySelector("input[name='password']");
    let confirmPassword = document.querySelector("input[name='confirm-password']");
    document.querySelector('form').onsubmit = function (e) {
        console.log(password.value, confirmPassword.value);
        for (let i = 0; i < inputs.length; i++) {
            if(inputs[i].value === "") {
                inputs[i].classList.add("form__text--err");
                error = true;
            } else if ((inputs[i].name === "first-name" || inputs[i].name === "last-name")) {
                if(inputs[i].value.search(/\d/) != -1) {
                    alert(`Find number in \"${inputs[i].placeholder}\"`);
                    inputs[i].classList.add("form__text--err");
                } else {
                    inputs[i].classList.remove("form__text--err");
                    alert(`OK in \"${inputs[i].placeholder}\"`);
                }
                } 
                else if(password.value != confirmPassword.value) {
                    messagePass.innerHTML = "Passwords do not match";
                    messagePass.classList.remove("form__text-pass--good");
                    messagePass.classList.add("form__text-pass--err");
                    inputs[i].classList.add("form__text--err");
                } else if(password.value === confirmPassword.value){
                    messagePass.innerHTML = "Passwords match";
                    messagePass.classList.remove("form__text-pass--err");
                    messagePass.classList.add("form__text-pass--good");
                    inputs[i].classList.remove("form__text--err");
                } 
                else {
                    error = false;
                    // inputs[i].classList.remove("form__text--err");
                }
            
        }

        if(error) 
            e.preventDefault();
        else
            alert("You are the best");
    
    }
}