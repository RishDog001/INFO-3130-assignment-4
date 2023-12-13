function LoginForm() {
    if (!validate_Login()){
        console.info("Login Form is invalid");
    }

    else {
        alert("Sign in Successful");
    }
}

function RegistrationForm() {
    if (!validate_Registration()){
        console.info("Registration form is invalid");
    }

    else {
        alert("Account Registration Successful");
    }
}

function EventForm() {
    if (!validate_EventDate()){
        console.info("Event form is invalid");
    }

    else {
        alert("Success");
    }
}

function CheckoutForm() {
    if (!validate_Checkout()){
        console.info("Checkout form is invalid");
    }

    else {
        alert("Checkout Successful");
    }
}
