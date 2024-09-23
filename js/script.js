// Noakhali Donate
document
  .getElementById("btn-donate-noakhali")
  .addEventListener("click", function () {
    const noakhaliDonateAmount = getTextValueById("noakhali-donate-amount");

    const noakhaliInputField = getInputValueById("noakhali-input-field");
    if (isNaN(noakhaliInputField) || noakhaliInputField <= 0) {
      alert("Invalid Donate Amount, Please Enter Valid Amount");
      return;
    }
    const mainAccountBalanceEl = getTextValueById("main-account-balance");
    if (mainAccountBalanceEl < noakhaliInputField) {
      alert("you Do Not Have Enough Balance please REcharge Your Account");
      return;
    } else {
      const noakhaliTotalDonateAmount =
        noakhaliDonateAmount + noakhaliInputField;
      document.getElementById("noakhali-donate-amount").innerText =
        noakhaliTotalDonateAmount;

      const mainAccountBalance = mainAccountBalanceEl - noakhaliInputField;
      document.getElementById("main-account-balance").innerText =
        mainAccountBalance;

      document.getElementById("noakhali-input-field").value = "";
    }

    //open modal
    const modal = document.getElementById("my_modal_5");
    modal.showModal();
  });

// Feni Donate
document
  .getElementById("btn-donate-feni")
  .addEventListener("click", function () {
    const feniInputField = getInputValueById("feni-input-field");
    const feniDonateAmount = getTextValueById("feni-donate-amount");
    if (isNaN(feniInputField) || feniInputField <= 0) {
      alert("Invalid Donate Amount, Please Enter Valid Amount");
      return;
    }
    const mainAccountBalanceEl = getTextValueById("main-account-balance");
    if (mainAccountBalanceEl < feniInputField) {
      alert("you Do Not Have Enough Balance please REcharge Your Account");
      return;
    } else {
      const feniTotalDonateAmount = feniDonateAmount + feniInputField;
      document.getElementById("feni-donate-amount").innerText =
        feniTotalDonateAmount;

      const mainAccountBalance = mainAccountBalanceEl - feniInputField;
      document.getElementById("main-account-balance").innerText =
        mainAccountBalance;

      document.getElementById("feni-input-field").value = "";
    }

    //open modal
    const modal = document.getElementById("my_modal_5");
    modal.showModal();
  });

// Injured Donate
document
  .getElementById("btn-donate-injured")
  .addEventListener("click", function () {
    const injuredInputField = getInputValueById("injured-input-field");
    const injuredDonateAmount = getTextValueById("injured-donate-amount");
    const mainAccountBalanceEl = getTextValueById("main-account-balance");

    if (isNaN(injuredInputField) || injuredInputField <= 0) {
      alert("Invalid Donate Amount, Please Enter Valid Amount");
      return;
    }
    if (mainAccountBalanceEl < injuredInputField) {
      alert("you Do Not Have Enough Balance please REcharge Your Account");
      return;
    } else {
      const injuredTotalDonateAmount = injuredDonateAmount + injuredInputField;
      document.getElementById("injured-donate-amount").innerText =
        injuredTotalDonateAmount;

      const mainAccountBalance = mainAccountBalanceEl - injuredInputField;
      document.getElementById("main-account-balance").innerText =
        mainAccountBalance;

      document.getElementById("injured-input-field").value = "";
    }

    //open modal
    const modal = document.getElementById("my_modal_5");
    modal.showModal();
  });

// Show History Section
document.getElementById("btn-history").addEventListener("click", function () {
  showFunctionById("history-container");

  document.getElementById("btn-history").classList.add("bg-lime-400");
  document.getElementById("btn-donate").classList.remove("bg-[#B4F461]");
});

// show Donate Container
document
  .getElementById("btn-donate")
  .addEventListener("click", function (event) {
    showFunctionById("donate-container");

    document.getElementById("btn-history").classList.remove("bg-lime-400");
    document.getElementById("btn-donate").classList.add("bg-[#B4F461]");
  });
