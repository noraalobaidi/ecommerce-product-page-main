//initilize product amount to 0
document.getElementById("amount").innerHTML = 0;
let cartElements = 0;

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
    document.getElementById("amount").innerHTML = 0;
  } else if (amount > 0) {
    //for empty cart
    document.getElementById("empty-cart").innerHTML = "";
    cartElements = cartElements + Number(amount); //update cartelements
    document.getElementById("cart-amount").innerHTML = cartElements; // get cart amount box

    cartamountbox.className = "cartAmount"; //display cart amount box by changing it class
    document.getElementById("item-amount").innerHTML = amount;
    document.getElementById("total").innerHTML = `$${calctotalprice}`;

    itemInCart.className = "";
    document.getElementById("checkout").className = "";
    document.getElementById("amount").innerHTML = 0;
  }
}

function deleteitem() {
  document.getElementById("empty-cart").innerHTML = "Your cart is empty.";
  let itemInCart = document.getElementById("item-in-cart");
  itemInCart.className = "displaynone";

  cartElements = 0;
  var cartamountbox = document.getElementById("cart-amount"); //get cart amount box
  cartamountbox.className = "displaynone";
  document.getElementById("checkout").className = "displaynone";
}

function changeimg(id) {
  let bigimg = document.getElementById("big-img"); //get big image

  if (id == document.getElementById("thumb1")) {
    bigimg.src = "../images/image-product-1.jpg"; //change to img 1
    document.getElementById("thumb1").style.borderColor = "hsl(26, 100%, 55%)";
    document.getElementById("thumb2").style.borderColor = "white";
    document.getElementById("thumb3").style.borderColor = "white";
    document.getElementById("thumb4").style.borderColor = "white";
  } else if (id == document.getElementById("thumb2")) {
    bigimg.src = "../images/image-product-2.jpg"; //change to img 2
    document.getElementById("thumb2").style.borderColor = "hsl(26, 100%, 55%)";
    document.getElementById("thumb1").style.borderColor = "white";
    document.getElementById("thumb3").style.borderColor = "white";
    document.getElementById("thumb4").style.borderColor = "white";
  } else if (id == document.getElementById("thumb3")) {
    bigimg.src = "../images/image-product-3.jpg"; //change to img 3
    document.getElementById("thumb3").style.borderColor = "hsl(26, 100%, 55%)";
    document.getElementById("thumb1").style.borderColor = "white";
    document.getElementById("thumb2").style.borderColor = "white";
    document.getElementById("thumb4").style.borderColor = "white";
  } else if (id == document.getElementById("thumb4")) {
    bigimg.src = "../images/image-product-4.jpg"; //change to img 4
    document.getElementById("thumb4").style.borderColor = "hsl(26, 100%, 55%)";
    document.getElementById("thumb1").style.borderColor = "white";
    document.getElementById("thumb2").style.borderColor = "white";
    document.getElementById("thumb3").style.borderColor = "white";
  }
}

function changeimglightbox(id) {
  let bigimg = document.getElementById("lb-big-img"); //get big image

  if (id == document.getElementById("lbthumb1")) {
    bigimg.src = "../images/image-product-1.jpg"; //change to img 1
    document.getElementById("lbthumb1").style.borderColor =
      "hsl(26, 100%, 55%)";
    document.getElementById("lbthumb1").style.opacity = "60%";
    document.getElementById("lbthumb2").style.borderColor = "rgba(0, 0, 0, 0)";
    document.getElementById("lbthumb2").style.opacity = "100%";
    document.getElementById("lbthumb3").style.borderColor = "rgba(0, 0, 0, 0)";
    document.getElementById("lbthumb3").style.opacity = "100%";
    document.getElementById("lbthumb4").style.borderColor = "rgba(0, 0, 0, 0)";
    document.getElementById("lbthumb4").style.opacity = "100%";
  } else if (id == document.getElementById("lbthumb2")) {
    bigimg.src = "../images/image-product-2.jpg"; //change to img 2
    document.getElementById("lbthumb2").style.borderColor =
      "hsl(26, 100%, 55%)";
    document.getElementById("lbthumb2").style.opacity = "60%";
    document.getElementById("lbthumb1").style.borderColor = "rgba(0, 0, 0, 0)";
    document.getElementById("lbthumb1").style.opacity = "100%";
    document.getElementById("lbthumb3").style.borderColor = "rgba(0, 0, 0, 0)";
    document.getElementById("lbthumb3").style.opacity = "100%";
    document.getElementById("lbthumb4").style.borderColor = "rgba(0, 0, 0, 0)";
    document.getElementById("lbthumb4").style.opacity = "100%";
  } else if (id == document.getElementById("lbthumb3")) {
    bigimg.src = "../images/image-product-3.jpg"; //change to img 3
    document.getElementById("lbthumb3").style.borderColor =
      "hsl(26, 100%, 55%)";
    document.getElementById("lbthumb3").style.opacity = "60%";
    document.getElementById("lbthumb1").style.borderColor = "rgba(0, 0, 0, 0)";
    document.getElementById("lbthumb1").style.opacity = "100%";
    document.getElementById("lbthumb2").style.borderColor = "rgba(0, 0, 0, 0)";
    document.getElementById("lbthumb2").style.opacity = "100%";
    document.getElementById("lbthumb4").style.borderColor = "rgba(0, 0, 0, 0)";
    document.getElementById("lbthumb4").style.opacity = "100%";
  } else if (id == document.getElementById("lbthumb4")) {
    bigimg.src = "../images/image-product-4.jpg"; //change to img 4
    document.getElementById("lbthumb4").style.borderColor =
      "hsl(26, 100%, 55%)";
    document.getElementById("lbthumb4").style.opacity = "60%";
    document.getElementById("lbthumb1").style.borderColor = "rgba(0, 0, 0, 0)";
    document.getElementById("lbthumb1").style.opacity = "100%";
    document.getElementById("lbthumb2").style.borderColor = "rgba(0, 0, 0, 0)";
    document.getElementById("lbthumb2").style.opacity = "100%";
    document.getElementById("lbthumb3").style.borderColor = "rgba(0, 0, 0, 0)";
    document.getElementById("lbthumb3").style.opacity = "100%";
  } else {
    console.log("wrong");
  }
}

function openlightbox() {
  document.getElementById("lightbox").className = "lightbox";
}

function closelightbox() {
  document.getElementById("lightbox").className = "displaynone";
}
