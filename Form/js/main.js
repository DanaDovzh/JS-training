window.onload = function(e) {

        document.body.classList.add('loaded_hiding');
        window.setTimeout(function () {
          document.body.classList.add('loaded');
          document.body.classList.remove('loaded_hiding');
        }, 500);
      
    let error  = false;
    let countWithoutEr = 0;
    let message;
    let emailValNot = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let inputs = document.querySelectorAll(".form__text--check");
    let messages = document.querySelectorAll(".form__message-check");
    let messagePass =  document.querySelector("#message-confirm-pass");
    let password = document.querySelector("input[name='password']");
    let confirmPassword = document.querySelector("input[name='confirm-password']");

    function isError(message, i) {
        messages[i].innerHTML = message;
        messages[i].classList.remove("form__message-check--good");
        messages[i].classList.add("form__message-check--err");
        inputs[i].classList.add("form__text--err");
        error = true;
    }

    function notError(message, i) {
        inputs[i].classList.remove("form__text--err");
        messages[i].innerHTML = "  &#10004";
        messages[i].classList.remove("form__message-check--err");
        messages[i].classList.add("form__message-check--good");
    }
    document.querySelector('form').onsubmit = function (e) {
        error  = false;
        for (let i = 0; i < inputs.length; i++) {
            
            if(inputs[i].value === "") {
                inputs[i].classList.add("form__text--err");
                messages[i].classList.add("form__message-check--err");
                messages[i].innerHTML = " &#10007;";
                console.log(error, "1");
                error = true;
            } else if ((inputs[i].name === "first-name" || inputs[i].name === "last-name")) {
                if(inputs[i].value.search(/\d/) != -1) {
                    isError("  Enter without numbers", i);
                    console.log(error, "2");
                } else {
                    notError("  &#10004", i);
                    console.log(error, "3");
                }
            } else if(inputs[i].name ==="email"){
                if(inputs[i].value.search(emailValNot) === -1) {
                    isError("  Invalid email", i);
                    console.log(error, "4");
                } else {
                    notError("  &#10004", i);
                    console.log(error, "5");
                }
            } else if(password.value !== confirmPassword.value) {
                isError("  Passwords do not match", i);
                console.log(error, "6");
            } else if(password.value === confirmPassword.value){
                notError("  &#10004", i);
                console.log(error, "7");
            }
        };
        console.log(error);
        document.querySelector("input[type='reset']").addEventListener('click', function(){
            for(let i = 0; i < inputs.length; i++) {
                messages[i].classList.remove("form__message-check--err");
                messages[i].classList.remove("form__message-check--good");
                inputs[i].classList.remove("form__text--err");
                messages[i].innerHTML = "";
            }
        });
        if(error) 
            e.preventDefault();
        else
            alert("You are the best");

    }
}