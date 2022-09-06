const btnConfirm = document.getElementById("btn-confirm");

const cardName = document.getElementById("card-name");
const cardNumber = document.getElementById("card-number");
const cardMonth = document.getElementById("card-month");
const cardYear = document.getElementById("card-year");
const cardCvc = document.getElementById("card-cvc");

const errorName = document.getElementById("error-name");
const errorNumber = document.getElementById("error-number");
const errorDate = document.getElementById("error-date");
const errorCvc = document.getElementById("error-cvc");

btnConfirm.addEventListener("click", () => {
  if (cardName.innerHTML == "") {
    errorName.classList.remove("hidden");
  }
  if (!isNAN(cardNumber.innerHTML)) {
    errorNumber.classList.remove("hidden");
  }
  if (cardMonth.innerHTML == "" || cardYear.innerHTML == "") {
    errorDate.classList.remove("hidden");
  }
  if (cardCvc.textContent == "") {
    errorCvc.classList.remove("hidden");
  }
});
