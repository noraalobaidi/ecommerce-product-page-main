//initilize product amount to 0
document.getElementById("amount").innerHTML = 0;
document.getElementById("mobile-amount").innerHTML = 0;
let cartElements = 0;
let slide = 1;
let mobileSlide = 1;
let mobilecartElements = 0;

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
    slide = 1;
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
    slide = 2;
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
    slide = 3;
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
    slide = 4;
    document.getElementById("lbthumb4").style.opacity = "60%";
    document.getElementById("lbthumb1").style.borderColor = "rgba(0, 0, 0, 0)";
    document.getElementById("lbthumb1").style.opacity = "100%";
    document.getElementById("lbthumb2").style.borderColor = "rgba(0, 0, 0, 0)";
    document.getElementById("lbthumb2").style.opacity = "100%";
    document.getElementById("lbthumb3").style.borderColor = "rgba(0, 0, 0, 0)";
    document.getElementById("lbthumb3").style.opacity = "100%";
  } else {
    // console.log("wrong");
  }
}

function openlightbox() {
  document.getElementById("lightbox").className = "lightbox";
}

function closelightbox() {
  document.getElementById("lightbox").className = "displaynone";
}

function nextimg() {
  if (slide < 4) {
    if (slide == 1) {
      document.getElementById("lb-big-img").src =
        "../images/image-product-2.jpg";
      slide++;
    } else if (slide == 2) {
      document.getElementById("lb-big-img").src =
        "../images/image-product-3.jpg";
      slide++;
    } else if (slide == 3) {
      document.getElementById("lb-big-img").src =
        "../images/image-product-4.jpg";
      slide++;
    }
  } else if (slide == 4) {
    slide = 1;
    document.getElementById("lb-big-img").src = "../images/image-product-1.jpg";
  }
}

function preimg() {
  if (slide == 1) {
    slide = 4;
    document.getElementById("lb-big-img").src = "../images/image-product-4.jpg";
  } else if (slide <= 4) {
    if (slide == 4) {
      document.getElementById("lb-big-img").src =
        "../images/image-product-3.jpg";
      slide--;
    } else if (slide == 3) {
      document.getElementById("lb-big-img").src =
        "../images/image-product-2.jpg";
      slide--;
    } else if (slide == 2) {
      document.getElementById("lb-big-img").src =
        "../images/image-product-1.jpg";
      slide--;
    }
  }
}

/////////////// mobile functions //////////////////
function mobilenextimg() {
  if (mobileSlide < 4) {
    if (mobileSlide == 1) {
      document.getElementById("mobile-img").src =
        "../images/image-product-2.jpg";
      mobileSlide++;
    } else if (mobileSlide == 2) {
      document.getElementById("mobile-img").src =
        "../images/image-product-3.jpg";
      mobileSlide++;
    } else if (mobileSlide == 3) {
      document.getElementById("mobile-img").src =
        "../images/image-product-4.jpg";
      mobileSlide++;
    }
  } else if (mobileSlide == 4) {
    mobileSlide = 1;
    document.getElementById("mobile-img").src = "../images/image-product-1.jpg";
  }
}

function mobilepreimg() {
  if (mobileSlide == 1) {
    mobileSlide = 4;
    document.getElementById("mobile-img").src = "../images/image-product-4.jpg";
  } else if (mobileSlide <= 4) {
    if (mobileSlide == 4) {
      document.getElementById("mobile-img").src =
        "../images/image-product-3.jpg";
      mobileSlide--;
    } else if (mobileSlide == 3) {
      document.getElementById("mobile-img").src =
        "../images/image-product-2.jpg";
      mobileSlide--;
    } else if (mobileSlide == 2) {
      document.getElementById("mobile-img").src =
        "../images/image-product-1.jpg";
      mobileSlide--;
    }
  }
}
//decrese amount of item by 1
function mobileremoveOne() {
  let amount = document.getElementById("mobile-amount").innerHTML;
  if (amount > 0) {
    amount--;
    document.getElementById("mobile-amount").innerHTML = amount;
  }
}
//increase amount of item by 1
function mobileaddOne() {
  let amount = document.getElementById("mobile-amount").innerHTML;
  amount++;
  document.getElementById("mobile-amount").innerHTML = amount;
}
//show or hide cart box
function mobilecartbox() {
  var box = document.getElementById("mobile-show-cart");
  if (box.className == "displaynone") {
    box.className = "mobile-showCart";
  } else {
    box.className = "displaynone";
  }
}

function mobiledeleteitem() {
  document.getElementById("mobile-empty-cart").innerHTML =
    "Your cart is empty.";
  let itemInCart = document.getElementById("mobile-item-in-cart");
  itemInCart.className = "displaynone";

  mobilecartElements = 0;
  var cartamountbox = document.getElementById("mobile-cart-amount"); //get cart amount box
  cartamountbox.className = "displaynone";
  document.getElementById("mobile-checkout").className = "displaynone";
}

function mobileaddToCart() {
  let itemInCart = document.getElementById("mobile-item-in-cart");
  let amount = document.getElementById("mobile-amount").innerHTML; //get amount
  var cartamountbox = document.getElementById("mobile-cart-amount"); //get cart amount box
  let getshoesprice = document
    .getElementById("mobile-shoes-price")
    .innerHTML.replace("$", ""); //get shoes price
  let calctotalprice = Number(amount) * Number(getshoesprice); //calculate total price
  if (mobilecartElements > 0 && amount > 0) {
    //for cart not empty
    mobilecartElements = mobilecartElements + Number(amount);
    document.getElementById("mobile-cart-amount").innerHTML =
      mobilecartElements;
    document.getElementById("mobile-item-amount").innerHTML =
      mobilecartElements;
    let totalbefore = document.getElementById("mobile-total").innerHTML;
    totalbefore = totalbefore.replace("$", "");
    document.getElementById("mobile-total").innerHTML = `$${
      calctotalprice + Number(totalbefore)
    }`;
    document.getElementById("mobile-amount").innerHTML = 0;
  } else if (amount > 0) {
    //for empty cart
    document.getElementById("mobile-empty-cart").innerHTML = "";
    mobilecartElements = mobilecartElements + Number(amount); //update cartelements
    document.getElementById("mobile-cart-amount").innerHTML =
      mobilecartElements; // get cart amount box

    cartamountbox.className = "mobilecartAmount"; //display cart amount box by changing it class
    document.getElementById("mobile-item-amount").innerHTML = amount;
    document.getElementById("mobile-total").innerHTML = `$${calctotalprice}`;

    itemInCart.className = "";
    document.getElementById("mobile-checkout").className = "";
    document.getElementById("mobile-amount").innerHTML = 0;
  }
}
function closemenu() {
  document.getElementById("mobile-menu").className = "displaynone";
}

function openmenu() {
  document.getElementById("mobile-menu").className = "";
}
