const form = document.getElementById("form");
const cardholderName = document.getElementById("cardholder-name");
const cardNumber = document.getElementById("card-number");
const expiry = document.getElementById("expiry");
const expyear = document.getElementById("expyear");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateInputs = () => {
  const cardholderName = cardholderName.value.trim();
  const cardNumber = cardNumber.value.trim();
  const expiry = expiry.value.trim();
  const expyear = expyear.value.trim();
  const cvc = cvc.value.trim();

  if (cardholderName === "") {
    setError(cardholderName, "Cardholder Name is required");
  } else {
    setSuccess(cardholderName);
  }

  if (cardNumber === "") {
    setError(cardNumber, "cardNumber is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (expiry === "") {
    setError(expiry, "Expiration Month is required");
  } else if (expiry.length === 2) {
    setError(expiry, "Expiration Month must be at 2 numbers.");
  } else {
    setSuccess(expiry);
  }

  if (expyear === "") {
    setError(expyear, "Expiration Year is required");
  } else if (expyear.length === 2) {
    setError(expyear, "Expiration Year must be at 2 numbers.");
  } else {
    setSuccess(expyear);
  }
};
