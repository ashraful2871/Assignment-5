//get input field value
function getInputValueById(id) {
  const inputValue = document.getElementById(id).value;
  if (inputValue === "" || inputValue !== "number") {
    return inputValue;
  }

  const inputValueNumber = parseFloat(inputValue);
  return inputValueNumber;
}

//get text value
function getTextValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textValueNumber = parseFloat(textValue);
  return textValueNumber;
}

// Show Function by ID
function showFunctionById(id) {
  document.getElementById("donate-container").classList.add("hidden");
  document.getElementById("history-container").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}
