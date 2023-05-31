const config_params = {
  default: {
    graphic: "./graphs/Alibaba.svg",
  },
};
let imageElement = document.getElementById("imageGraph");

let currentUrl = window.location.href;
let value = currentUrl.split("?")[1];

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const nameUrl = urlParams.get("name");
const price = +urlParams.get("price");
const up = +urlParams.get("up");

// console.log(nameUrl); // Output: Alibaba
// console.log(price); // Output: 20
// console.log(up); // Output: 20

let selectedCurrency = 1;
selectedCurrency = price
// selectedCurrency = config_params[nameUrl];
if (selectedCurrency) {
  imageElement?.setAttribute("src", `./graphs/${nameUrl}.svg`);
  let currentPrice = document.getElementById("currentPrice");
  if (currentPrice) currentPrice.textContent = selectedCurrency;

  let precent = document.getElementById("precent");
  if (precent) precent.textContent = up;

  let redCurrency = document.getElementById("redCurrency");
  if (redCurrency) redCurrency.textContent = (selectedCurrency * (up/100)).toFixed(2);

  let buyCur = document.getElementById("buyCur");
  const increase = selectedCurrency * 0.02;
  const increasedCount = selectedCurrency + increase;
  if (buyCur) buyCur.textContent = increasedCount;

  let sellCur = document.getElementById("sellCur");
  const decrease = selectedCurrency * 0.02;
const decreasedCount = selectedCurrency - decrease;
  if (sellCur) sellCur.textContent = decreasedCount;
} else {
  imageElement?.setAttribute("src", config_params.default.graphic);
}

const greenArrow = document.getElementById("greenArrow");
const redArrow = document.getElementById("redArrow");


let upClass = document.getElementById("upColor");
if(up>0){
  upClass.classList.add('text-[#94C050]')
  greenArrow.style.display = "block";
}
else{
  upClass.classList.add('text-[#B64C41]')
  redArrow.style.display = "block";
}

