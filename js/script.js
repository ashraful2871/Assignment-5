// Noakhali Donate
document
  .getElementById("btn-donate-noakhali")
  .addEventListener("click", function () {
    const noakhaliInputField = getInputValueById("noakhali-input-field");
    const noakhaliDonateAmount = getTextValueById("noakhali-donate-amount");
    const mainAccountBalanceEl = getTextValueById("main-account-balance");

    const noakhaliTotalDonateAmount = noakhaliDonateAmount + noakhaliInputField;
    document.getElementById("noakhali-donate-amount").innerText =
      noakhaliTotalDonateAmount;

    const mainAccountBalance = mainAccountBalanceEl - noakhaliInputField;
    document.getElementById("main-account-balance").innerText =
      mainAccountBalance;
  });

// Feni Donate
document
  .getElementById("btn-donate-feni")
  .addEventListener("click", function () {
    const feniInputField = getInputValueById("feni-input-field");
    const feniDonateAmount = getTextValueById("feni-donate-amount");
    const mainAccountBalanceEl = getTextValueById("main-account-balance");

    const feniTotalDonateAmount = feniDonateAmount + feniInputField;
    document.getElementById("feni-donate-amount").innerText =
      feniTotalDonateAmount;

    const mainAccountBalance = mainAccountBalanceEl - feniInputField;
    document.getElementById("main-account-balance").innerText =
      mainAccountBalance;
  });

// Injured Donate

document
  .getElementById("btn-donate-injured")
  .addEventListener("click", function () {
    const injuredInputField = getInputValueById("injured-input-field");
    const injuredDonateAmount = getTextValueById("injured-donate-amount");
    const mainAccountBalanceEl = getTextValueById("main-account-balance");

    const injuredTotalDonateAmount = injuredDonateAmount + injuredInputField;
    document.getElementById("injured-donate-amount").innerText =
      injuredTotalDonateAmount;

    const mainAccountBalance = mainAccountBalanceEl - injuredInputField;
    document.getElementById("main-account-balance").innerText =
      mainAccountBalance;
  });
