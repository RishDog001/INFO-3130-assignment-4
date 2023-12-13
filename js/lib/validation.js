function validate_Login() {
    var form = $("#loginForm");
    form.validate({
        rules: {
            txtName: {
                required: true,
                rangelength: [3, 20]
            },

            txtPassword: {
                required: true,
                rangelength: [3, 20]
            }
        },

        messages: {
            txtName: {
                required: "Field is required",
                rangelength: "Username must be between 3-20 characters long"
            },

            txtPassword: {
                required: "Field is required",
                rangelength: "Password must be between 3-20 characters long"
            }
        }
    });

    return form.valid();
}

function validate_Registration() {
    var form = $("#registrationForm");

    form.validate({
        rules: {
            txtUserName: {
                required: true,
                rangelength: [3, 20]
            },

            txtUserPassword: {
                required: true,
                rangelength: [3, 20]
            },

            txtEmail: {
                required: true,
                emailcheck: true
            },

            txtPhoneNumber: {
                required: true,
                maxlength: 10
            },

            txtDOB: {
                required: true
            }
        },

        messages: {
            txtUserName: {
                required: "Field is required",
                rangelength: "Username must be between 3-20 characters long"
            },

            txtUserPassword: {
                required: "Field is required",
                rangelength: "Username must be between 3-20 characters long"
            },

            txtEmail: {
                required: "Field is required",
                emailcheck: "Invalid Email"
            },

            txtPhoneNumber: {
                required: "Field is required",
                maxlength: "Phone Number cannot exceed 10 characters"
            },

            txtDOB: {
                required: "Field is required"
            }
        }
    });

    return form.valid();
}

function validate_EventDate(){
    var form = $("#eventForm");
    form.validate({
        rules: {
            txtEventDate: {
                required: true
            }
        },

        messages: {
            required: "Field is required"
        }
    });

    return form.valid();
}

function validate_Checkout() {
    var form = $("#checkoutForm");
    form.validate({
        rules: {
            txtName1: {
                required: true,
                rangelength: [3, 20]
            },

            txtAddress: {
                required: true,
                minLength: 3
            },

            txtEmail1: {
                required: true,
                emailcheck: true
            },

            txtPhoneNumber1: {
                required: true,
                maxlength: 10
            },

            txtPostalCode: {
                required: true,
                maxlength: 7
            },

            txtCardNumber: {
                required: true,
                maxlength: 16
            },

            txtExpiryDate: {
                required: true,
                maxlength: 5
            },

            txtCVV: {
                required: true,
                maxlength: 3
            }
        },

        messages: {
            txtName1: {
                required: "Field is required",
                rangelength: "Name must be between 3-20 characters long"
            },

            txtAddress: {
                required: "Field is required",
                minLength: "Address must be at least 3 characters long"
            },

            txtEmail1: {
                required: "Field is required",
                emailcheck: "Invalid Email"
            },

            txtPhoneNumber1: {
                required: "Field is required",
                maxlength: "Phone Number cannot exceed 10 characters"
            },

            txtPostalCode: {
                required: "Field is required",
                maxlength: "Postal Code cannot exceed 7 characters"
            },

            txtCardNumber: {
                required: "Field is required",
                maxlength: "Card Number cannot exceed 16 characters"
            },

            txtExpiryDate: {
                required: "Field is required",
                maxlength: "Expiry Date cannot exceed 5 characters"
            },

            txtCVV: {
                required: "Field is required",
                maxlength: "CVV cannot exceed 3 characters"
            }
        }
    });

    return form.valid();
}

jQuery.validator.addMethod("emailcheck",
    function(value, element){
        var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        return this.optional(element) || regex.test(value); //Regex source: https://tutorial.eyehunts.com/js/email-regex-javascript-validation-example-code/
    }, "Invalid email");
