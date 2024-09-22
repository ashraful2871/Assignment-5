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
