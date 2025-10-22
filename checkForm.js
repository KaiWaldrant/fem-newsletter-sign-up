document.addEventListener("DOMContentLoaded", function () {

  const submitButton = document.getElementById("signup-button");
  const emailInput = document.getElementById("email");
  function checkEmail() {
    submitButton.disabled = true;
    const emailValue = emailInput.value;
    const errorMessage = document.getElementById("email-error");

    const emailRegex =
      /[a-zA-Z0-9_]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?!([a-zA-Z0-9]*\.[a-zA-Z0-9]*\.[a-zA-Z0-9]*\.))(?:[A-Za-z0-9](?:[a-zA-Z0-9-]*[A-Za-z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;

    // Enable the button if the email is valid, otherwise disable it.
    if (emailValue.match(emailRegex)) {
      submitButton.disabled = false;
      emailInput.classList.remove("error");
      errorMessage.style.removeProperty("display");
      submitButton.classList.add("active");
    } else {
      emailInput.classList.add("error");
      errorMessage.style.display = "block";
    }
  };

  emailInput.addEventListener("input", checkEmail);

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
    signupCard.style.removeProperty("display");
    emailInput.value = "";
  });
  
});
