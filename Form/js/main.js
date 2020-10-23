window.onload = function(e) {
    let error  = false;
    let countWithoutEr = 0;
    let emailValNot = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let inputs = document.querySelectorAll(".form__text--check");
    let messages = document.querySelectorAll(".form__message-check");
    let messagePass =  document.querySelector("#message-confirm-pass");
    let password = document.querySelector("input[name='password']");
    let confirmPassword = document.querySelector("input[name='confirm-password']");
    document.querySelector('form').onsubmit = function (e) {
        for (let i = 0; i < inputs.length; i++) {
            countWithoutEr = 0;
            if(inputs[i].value === "") {
                inputs[i].classList.add("form__text--err");
                messages[i].classList.add("form__message-check--err");
                messages[i].innerHTML = " &#10007;";
                error = true;
                console.log("1");
            } else if ((inputs[i].name === "first-name" || inputs[i].name === "last-name")) {
                if(inputs[i].value.search(/\d/) != -1) {
                    messages[i].innerHTML = "  Enter without numbers";
                    messages[i].classList.remove("form__message-check--good");
                    messages[i].classList.add("form__message-check--err");
                    inputs[i].classList.add("form__text--err");
                    error = true;
                    console.log("2");
                } else {
                    inputs[i].classList.remove("form__text--err");
                    messages[i].innerHTML = "  &#10004";
                    messages[i].classList.remove("form__message-check--err");
                    messages[i].classList.add("form__message-check--good");
                    console.log("3");
                    
                    countWithoutEr++;
                }
            } else if(inputs[i].name ==="email"){
                if(inputs[i].value.search(emailValNot) === -1) {
                    document.querySelector("#message-email").innerHTML = "  Invalid email";
                    messages[i].classList.remove("form__message-check--good");
                    messages[i].classList.add("form__message-check--err");
                    inputs[i].classList.add("form__text--err");
                    error = true;
                    console.log("4");
                } else {
                    document.querySelector("#message-email").classList.remove("form__message-check--err");
                    document.querySelector("#message-email").classList.add("form__message-check--good");
                    inputs[i].classList.remove("form__text--err");
                    console.log("5");
                    messages[i].innerHTML = " &#10004;";
                    messages[i].classList.remove("form__message-check--err");
                    messages[i].classList.add("form__message-check--good");
                    countWithoutEr++;
                }
            } else if(password.value !== confirmPassword.value) {
                messagePass.innerHTML = "  Passwords do not match";
                messagePass.classList.remove("form__message-check--good");
                messagePass.classList.add("form__message-check--err");
                inputs[i].classList.add("form__text--err");
                error = true;
                console.log("6");
            } else if(password.value === confirmPassword.value){
                messages[i].innerHTML = "  &#10004;";
                messages[i].classList.remove("form__message-check--err");
                messages[i].classList.add("form__message-check--good");
                inputs[i].classList.remove("form__text--err");
                console.log("7");
                console.log("countWithoutEr ", countWithoutEr);
            } else {
                error = false;
                console.log("8");
            }
            
        }
        console.log(error);
        document.querySelector("input[type='reset']").addEventListener('click', function(){
            for(let i = 0; i < inputs.length; i++) {
                messages[i].classList.remove("form__message-check--err");
                messages[i].classList.remove("form__message-check--good");
                inputs[i].classList.remove("form__text--err");
                messages[i].innerHTML = "";
            }
        })
        if(error) 
            e.preventDefault();
        else
            alert("You are the best");

    }
}