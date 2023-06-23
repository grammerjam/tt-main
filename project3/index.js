const form = document.getElementById("form");
const cardholderNameInput = document.getElementById("cardholderName");
const cardNumberInput = document.getElementById("cardNumber");
const expiryInput = document.getElementById("expiry");
const expyearInput = document.getElementById("expyear");
const cvcInput = document.getElementById("cvc");

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
  const cardholderNameValue = cardholderNameInput.value.trim();
  const cardNumberValue = cardNumberInput.value.trim();
  const expiryValue = expiryInput.value.trim();
  const expyearValue = expyearInput.value.trim();
  const cvcValue = cvcInput.value.trim();
  let hasErrors = false;

  if (cardholderNameValue === "") {
    setError(cardholderNameInput, "Can't be blank");
    hasErrors = true;
  } else if (cardholderNameValue.length <= 2) {
    setError(cardholderNameInput, "Must be at least 2 letters");
    hasErrors = true;
  } else {
    setSuccess(cardholderNameInput);
  }

  if (cardNumberValue === "") {
    setError(cardNumberInput, "Can't be blank");
    hasErrors = true;
  } else if (/\D/.test(cardNumberValue)) {
    setError(cardNumberInput, "Wrong format, numbers only");
    hasErrors = true;
  } else {
    setSuccess(cardNumberInput);
  }

  if (cvcValue === "") {
    setError(cvcInput, "Can't be blank");
    hasErrors = true;
  } else if (cvcValue.length !== 3) {
    setError(cvcInput, "Must be 3 numbers");
    hasErrors = true;
  } else if (/\D/.test(cvcValue)) {
    setError(cvcInput, "Wrong format, numbers only");
    hasErrors = true;
  } else {
    setSuccess(cvcInput);
  }

  if (expiryValue === "") {
    setError(expiryInput, "Can't be blank");
    hasErrors = true;
  } else if (/\D/.test(expiryValue)) {
    setError(expiryInput, "Wrong format, numbers only");
    hasErrors = true;
  } else if (expiryValue.length !== 2) {
    setError(expiryInput, "Must be 2 numbers");
    hasErrors = true;
  } else {
    setSuccess(expiryInput);
  }

  if (expyearValue === "") {
    setError(expyearInput, "Can't be blank");
    hasErrors = true;
  } else if (/\D/.test(expyearValue)) {
    setError(expyearInput, "Wrong format, numbers only");
    hasErrors = true;
  } else if (expyearValue.length !== 2) {
    setError(expyearInput, "Must be 2 numbers");
    hasErrors = true;
  } else {
    setSuccess(expyearInput);
  }

  if (!hasErrors) {
    form.style.display = "none";
    const successMessage = document.querySelector(".thank-you-message");
    successMessage.style.display = "block";
  }
};
