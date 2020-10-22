window.onload = function(e) {
    let error  = false;
    let countWithoutEr = 0;
    let emailValNot = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
                console.log("1");
            } else if ((inputs[i].name === "first-name" || inputs[i].name === "last-name")) {
                if(inputs[i].value.search(/\d/) != -1) {
                    alert(`Find number in \"${inputs[i].placeholder}\"`);
                    inputs[i].classList.add("form__text--err");
                    error = true;
                    console.log("2");
                } else {
                    inputs[i].classList.remove("form__text--err");
                    console.log("3");
                    
                    countWithoutEr++;
                }
            } else if(inputs[i].name ==="email"){
                if(inputs[i].value.search(emailValNot) === -1) {
                    document.querySelector("#message-email").innerHTML = "  Invalid email";
                    document.querySelector("#message-email").classList.add("form__text-invalid--err");
                    inputs[i].classList.add("form__text--err");
                    error = true;
                    console.log("4");
                } else {
                    document.querySelector("#message-email").innerHTML = "  Invalid email";
                    document.querySelector("#message-email").classList.remove("form__text-invalid--err");
                    document.querySelector("#message-email").classList.add("form__text-invalid--good");
                    inputs[i].classList.remove("form__text--err");
                    console.log("5");
                    countWithoutEr++;
                }
            } else if(password.value != confirmPassword.value) {
                messagePass.innerHTML = "  Passwords do not match";
                messagePass.classList.remove("form__text-invalid--good");
                messagePass.classList.add("form__text-invalid--err");
                inputs[i].classList.add("form__text--err");
                error = true;
                console.log("6");
            } else if(password.value === confirmPassword.value){
                messagePass.innerHTML = "  Passwords match";
                messagePass.classList.remove("form__text-invalid--err");
                messagePass.classList.add("form__text-invalid--good");
                inputs[i].classList.remove("form__text--err");
                console.log("7");
                countWithoutEr++;
                console.log("countWithoutEr ", countWithoutEr);
            } else if (countWithoutEr === 3) {
                error = false;
                console.log("8");
            }
            
        }
        console.log(error);
        if(error) 
            e.preventDefault();
        else
            alert("You are the best");
    
    }
}