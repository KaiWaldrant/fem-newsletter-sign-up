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
    // Hide success card and show signup card
    successCard.style.display = "none";
    signupCard.style.removeProperty("display");

    // Reset input field and styles
    emailInput.value = "";
    emailInput.classList.remove("error");

    // Disable the submit button again and remove "active" styling
    submitButton.disabled = true;
    submitButton.classList.remove("active");

    // Hide any previous error message
    const errorMessage = document.getElementById("email-error");
    errorMessage.style.display = "none";
  });
  
});
