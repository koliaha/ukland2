///CONFIG

const config_list = {
  code_phone: 3,
  code_phone_placeholder: "000",
  minSum: 10384,
};
///sumval
const counerSumVal = document.getElementById("counterSum");
if (counerSumVal) counerSumVal.textContent = config_list.minSum;
//graphic img src

///get route


//////////
let phoneCode = document.getElementById("phoneCode");
phoneCode?.setAttribute("maxlength", config_list.code_phone);
phoneCode?.setAttribute("placeholder", config_list.code_phone_placeholder);
let currencyBtn = document.getElementById("activeCurrencyBtn");

let currencySelect = document.querySelectorAll(".selectCurrentcy");
let activeCurrency = "";

currencySelect.forEach((el) => {
  el.addEventListener("click", () => {
    activeCurrency = el.innerHTML;
    currencySelect.forEach((el) => {
      el.classList.remove("currencySelected");
    });
    el.classList.add("currencySelected");
    if (activeCurrency) {
      currencyBtn.disabled = false;
    } else {
      currencyBtn.disabled = true;
    }
  });
});

function onKeyCardNameInp(e) {
  const allowedCharacters = /^[a-zA-Zа-яА-Я\s]*$/;
  let vax = allowedCharacters.test(e.key);
  return vax;
  // if (!allowedCharacters.test(e.target.value)) {
  //   e.target.value = e.target.value.substring(0, e.target.value.length - 1);
  // }
}
function onlyNumberKey(evt) {
  // Only ASCII charactar in that range allowed
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
  return true;
}
function checkValue() {
  let inputValue = document.getElementById("inputCount").value;
  let buttonValue = document.getElementById("buttonCount");
  let errorMessage = document.getElementById("errorMessage");
  let minErrorCount = document.getElementById("minErrorCount");

  const roundVal = roundByThree(config_list.minSum);
  if (inputValue < roundVal) {
    errorMessage.style.display = "block";
    minErrorCount.textContent = roundVal;
    buttonValue.disabled = true;
  } else {
    errorMessage.style.display = "none";
    buttonValue.disabled = false;
  }
}
function roundByThree(num) {
  return Math.floor(num / 1000) * 1000;
}
// console.log(roundByThree(123344));
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#94C050",
      },
    },
    colors: {
      primary: "#94C050",
      light: "#f7f7f7",
      blue: "#1fb6ff",
      black: "#000",
      white: "#fff",
      purple: "#C873FF",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#A8A8A8",
      "gray-light": "#d3dce6",
    },
    container: {
      center: true,
    },
    screens: {
      sm: "360px",
    },
  },
};
