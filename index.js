//initilize product amount to 0
document.getElementById("amount").innerHTML = 0;
let cartElements = 0;
let id = 0;

//decrese amount of item by 1
function removeOne() {
  let amount = document.getElementById("amount").innerHTML;
  if (amount > 0) {
    amount--;
    document.getElementById("amount").innerHTML = amount;
  }
}
//increase amount of item by 1
function addOne() {
  let amount = document.getElementById("amount").innerHTML;
  amount++;
  document.getElementById("amount").innerHTML = amount;
}

//show or hide cart box
function cartbox() {
  var box = document.getElementById("show-cart");
  if (box.className == "displaynone") {
    box.className = "showCart";
  } else {
    box.className = "displaynone";
  }
}

function addToCart() {
  let itemInCart = document.getElementById("item-in-cart");
  let amount = document.getElementById("amount").innerHTML; //get amount
  var cartamountbox = document.getElementById("cart-amount"); //get cart amount box
  let getshoesprice = document
    .getElementById("shoes-price")
    .innerHTML.replace("$", ""); //get shoes price
  let calctotalprice = Number(amount) * Number(getshoesprice); //calculate total price
  if (cartElements > 0 && amount > 0) {
    //for cart not empty
    cartElements = cartElements + Number(amount);
    document.getElementById("cart-amount").innerHTML = cartElements;
    document.getElementById("item-amount").innerHTML = cartElements;
    let totalbefore = document.getElementById("total").innerHTML;
    totalbefore = totalbefore.replace("$", "");
    document.getElementById("total").innerHTML = `$${
      calctotalprice + Number(totalbefore)
    }`;
  } else if (amount > 0) {
    //for empty cart
    document.getElementById("empty-cart").innerHTML = "";
    cartElements = cartElements + Number(amount); //update cartelements
    document.getElementById("cart-amount").innerHTML = cartElements; // get cart amount box

    cartamountbox.className = "cartAmount"; //display cart amount box by changing it class
    document.getElementById("item-amount").innerHTML = amount;
    document.getElementById("total").innerHTML = `$${calctotalprice}`;

    itemInCart.className = "";
  }
}

function deleteitem() {
  document.getElementById("empty-cart").innerHTML = "Your cart is empty.";
  let itemInCart = document.getElementById("item-in-cart");
  itemInCart.className = "displaynone";

  cartElements = 0;
  var cartamountbox = document.getElementById("cart-amount"); //get cart amount box
  cartamountbox.className = "displaynone";
}
