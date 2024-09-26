//Palestine
document
  .getElementById("btn-donate-palestine")
  .addEventListener("click", function () {
    const palestineDonateAmount = getTextValueById("palestine-donate-amount");
    const palestineInputField = getInputValueById("palestine-input-field");
    if (palestineInputField === "Amount") {
      alert("Please Enter Your Amount");
      return;
    }
    if (palestineInputField === "invalid" || palestineInputField <= 0) {
      return alert("Please Enter Valid Amount");
    }

    const mainAccountBalanceEl = getTextValueById("main-account-balance");
    if (mainAccountBalanceEl < palestineInputField) {
      alert("you Do Not Have Enough Balance please REcharge Your Account");
      return;
    } else {
      const palestineTotalDonateAmount =
        palestineDonateAmount + palestineInputField;
      document.getElementById("palestine-donate-amount").innerText =
        palestineTotalDonateAmount;

      const mainAccountBalance = mainAccountBalanceEl - palestineInputField;
      document.getElementById("main-account-balance").innerText =
        mainAccountBalance;

      document.getElementById("palestine-input-field").value = "";

      const noHistoryEl = document.getElementById("no-history");
      noHistoryEl.classList.add("hidden");

      const div = document.createElement("div");
      div.classList.add(
        "card-body",
        "shadow-lg",
        "mb-5",
        "border-4",
        "rounded-2xl"
      );
      div.innerHTML = `
      <span class="font-extrabold text-center text-2xl pb-4 text-lime-700">Donated Palestine</span>
      <h2 class="text-center font-semibold text-xl">$ ${palestineInputField} USD is Donated to Starving Children in Gaza, Palestine. Your Current Account Balance: $ ${mainAccountBalance} USD.</h2>
                <p class="text-center">Date: ${new Date().toLocaleDateString()} at Time: ${new Date().toLocaleTimeString()}</p>`;
      document.getElementById("history-container").appendChild(div);
    }

    //open modal
    const modal = document.getElementById("my_modal_5");
    modal.showModal();
  });

// Noakhali Donate
document
  .getElementById("btn-donate-noakhali")
  .addEventListener("click", function () {
    const noakhaliDonateAmount = getTextValueById("noakhali-donate-amount");
    const noakhaliInputField = getInputValueById("noakhali-input-field");
    if (noakhaliInputField === "Amount") {
      alert("Please Enter Your Amount");
      return;
    }
    if (noakhaliInputField === "invalid" || noakhaliInputField <= 0) {
      return alert("Please Enter Valid Amount");
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

      const noHistoryEl = document.getElementById("no-history");
      noHistoryEl.classList.add("hidden");

      const div = document.createElement("div");
      div.classList.add(
        "card-body",
        "shadow-lg",
        "mb-5",
        "border-4",
        "rounded-2xl"
      );
      div.innerHTML = `
      <span class="font-extrabold text-center text-2xl pb-4 text-lime-700">Donated Noakhali</span>
      <h2 class="text-center font-semibold text-xl">$ ${noakhaliInputField} USD is Donated for famine-2024 at Noakhali, Bangladesh. Your Current Account Balance: $ ${mainAccountBalance} USD.</h2>
                <p class="text-center">Date: ${new Date().toLocaleDateString()} at Time: ${new Date().toLocaleTimeString()}</p>`;
      document.getElementById("history-container").appendChild(div);
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
    if (feniInputField === "Amount") {
      alert("Please Enter Your Amount");
      return;
    }
    if (feniInputField === "invalid" || feniInputField <= 0) {
      return alert("Please Enter Valid Amount");
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

      const noHistoryEl = document.getElementById("no-history");
      noHistoryEl.classList.add("hidden");

      const div = document.createElement("div");
      div.classList.add(
        "card-body",
        "shadow-lg",
        "mb-5",
        "border-4",
        "rounded-2xl"
      );
      div.innerHTML = `
      <span class="font-extrabold text-center text-2xl pb-4 text-lime-700">Donated Feni</span>
      <h2 class="text-center font-semibold text-xl">$ ${feniInputField} USD is Donated for Flood Relief in Feni,Bangladesh. Your Current Account Balance: $ ${mainAccountBalance} USD.</h2>
                <p class="text-center">Date: ${new Date().toLocaleDateString()} at Time: ${new Date().toLocaleTimeString()}</p>`;
      document.getElementById("history-container").appendChild(div);
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
    if (injuredInputField === "Amount") {
      alert("Please Enter Your Amount");
      return;
    }
    if (injuredInputField === "invalid" || injuredInputField <= 0) {
      return alert("Please Enter Valid Amount");
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

      const noHistoryEl = document.getElementById("no-history");
      noHistoryEl.classList.add("hidden");

      const div = document.createElement("div");
      div.classList.add(
        "card-body",
        "shadow-lg",
        "mb-5",
        "border-4",
        "rounded-2xl"
      );
      div.innerHTML = `
      <span class="font-extrabold text-center text-2xl pb-4 text-lime-700">Donated Injured People</span>

      <h2 class="text-center font-semibold text-xl">$ ${injuredInputField} USD is Donated for Aid for Injured in the Quota Movement, Bangladesh. Your Current Account Balance: $ ${mainAccountBalance} USD.</h2>

                <p class="text-center">Date: ${new Date().toLocaleDateString()} at Time: ${new Date().toLocaleTimeString()}</p>`;
      document.getElementById("history-container").appendChild(div);
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
