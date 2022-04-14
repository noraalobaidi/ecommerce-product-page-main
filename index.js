//initilize product amount to 0
document.getElementById("amount").innerHTML = 0;

function removeOne(id) {
  let amount = document.getElementById("amount").innerHTML;
  if (amount > 0) {
    amount--;
    document.getElementById("amount").innerHTML = amount;
  }
}

function addOne(id) {
  let amount = document.getElementById("amount").innerHTML;
  amount++;
  document.getElementById("amount").innerHTML = amount;
}

function cartbox(id) {
  var box = document.getElementById("show-cart");
  if (box.className == "showCartnone") {
    box.className = "showCart";
  } else {
    box.className = "showCartnone";
  }
}
