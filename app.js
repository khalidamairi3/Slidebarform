
let toggle = document.getElementById("toggle-checkbox");
toggle.addEventListener("click", yearlyBilling);
function yearlyBilling() {
  if (toggle.checked) {
    price = document.getElementById("priceNo").innerText;
    price = price.substring(1);
    price = price * 12 * 0.75;
    price = price.toFixed(2);
  } else {
    price = document.getElementById("priceNo").innerText;
    price = price.substring(1);
    if (price > 36) {
      price = (price * (10 / 7.5)) / 12;
      price = price.toFixed(2);
    }
  }


  document.getElementById("priceNo").innerText = "$" + price;
}
console.log(toggle);


document.getElementById("slider").addEventListener("input", function () {

  let options = [10, 50, 100, 500, 1000];
  let prices = [8, 12, 16, 24, 36];
  let value = this.value;
  price = document.getElementById("priceNo");
  let message = ""
  // values to reflect the range of values 
  if (value < 200) {
    this.value = 100
    message = options[0] + 'K';
    price.innerText = '$' + prices[0].toFixed(2)
  }
  else if (value < 400) {
    this.value = 400
    message = options[1] + 'K';
    price.innerText = '$' + prices[1].toFixed(2)
  }
  else if (value < 600) {
    this.value = 600
    message = options[2] + 'K';
    price.innerText = '$' + prices[2].toFixed(2)
  }
  else if (value < 800) {
    this.value = 800
    message = options[3] + 'K';
    price.innerText = '$' + prices[3].toFixed(2)
  }
  else if (value <= 1000) {
    this.value = 1000
    message = options[4] / 1000 + 'M';
    price.innerText = '$' + prices[4].toFixed(2)
  }
  document.getElementById("viewsNo").innerText = message;
  yearlyBilling() 

})
