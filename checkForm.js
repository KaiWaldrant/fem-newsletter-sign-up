document.addEventListener("DOMContentLoaded", function () {

const submitButton = document.getElementById("signup-button");
  function checkEmail() {
    submitButton.disabled = true;
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;

    // A simple regex for email validation. For more complex validation, consider a library.
    const emailRegex =
      /[a-zA-Z0-9_]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?!([a-zA-Z0-9]*\.[a-zA-Z0-9]*\.[a-zA-Z0-9]*\.))(?:[A-Za-z0-9](?:[a-zA-Z0-9-]*[A-Za-z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;

    // Enable the button if the email is valid, otherwise disable it.
    if (emailValue.match(emailRegex)) {
      submitButton.disabled = false;
    }

    if (!emailValue.match(emailRegex)) {
      emailInput.className = "error";
    }
  };

  const signupCard = document.getElementById("signup_card");
  const successCard = document.getElementById("success-card");

  submitButton.addEventListener("click", function () {
    signupCard.style.display = "none";
    successCard.style.display = "flex";

    document.getElementById("signup-email").innerHTML = emailInput.value;
  });

  const dismissButton = document.getElementById("dismiss-button");

  dismissButton.addEventListener("click", function () {
    successCard.style.display = "none";
    signupCard.style.display = "flex";
    emailInput.value = "";
  });
  
});
