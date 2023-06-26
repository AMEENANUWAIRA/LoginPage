function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form_message");

    messageElement.textContent = message;
    messageElement.classList.remove("form_message-success", "form_message-error");
    messageElement.classList.add(`form_message-${type}`);
}

function inputErrorMessage(inputElement, message) {
    inputElement.classList.add("form_input-error");
    inputElement.parentElement.querySelector("form_input_error_message").textContent = message;
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#signup");
    const forgotPasswordForm = document.querySelector("#forgotPassword");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
        forgotPasswordForm.classList.add("form-hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
        forgotPasswordForm.classList.add("form-hidden");
    });

    document.querySelector("#linkForgotPassword").addEventListener("click", e => {
        e.preventDefault();
        forgotPasswordForm.classList.remove("form-hidden");
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.add("form-hidden");

    });
    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        setFormMessage(loginForm, "error", "Invalid username/password");
    });

    document.querySelectorAll(".form_input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if(e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value < 10)
            {
                inputErrorMessage(inputElement, "Username invalid");
            }
        });
    });
});