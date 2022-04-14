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
  //if amount id > than 0
  //increase cart elements
  //display cart number
  //add items to cartbox

  //create div box display it
  //then if clicked on trash bin hide it

  // update numbers

  let amount = document.getElementById("amount").innerHTML; //get amount
  var cartamountbox = document.getElementById("cart-amount"); //get cart amount box
  let getshoesname = document
    .getElementById("shoes-name")
    .innerHTML.replace("<br>", " "); //get shoes name
  let getshoesprice = document
    .getElementById("shoes-price")
    .innerHTML.replace("$", ""); //get shoes price
  let calctotalprice = Number(amount) * Number(getshoesprice); //calculate total price

  if (amount > 0) {
    document.getElementById("cart").innerHTML = "";
    cartElements = cartElements + Number(amount); //update cartelements
    document.getElementById("cart-amount").innerHTML = cartElements; // get cart amount box

    cartamountbox.className = "cartAmount"; //display cart amount box by changing it class

    //create new element
    let element = document.createElement("div");
    let trashicon = document.createElement("img");
    let imgthumbnail = document.createElement("img");
    imgthumbnail.src = "../images/image-product-1-thumbnail.jpg";
    trashicon.src = "../images/icon-delete.svg";

    // element.id = id;

    var shoesname = document.createElement("div");
    shoesname.innerHTML = getshoesname;
    var shoesprice = document.createElement("div");
    shoesprice.innerHTML = `$ ${getshoesprice}x${amount}`;
    var totalprice = document.createElement("div");
    totalprice.innerHTML = "$" + calctotalprice;

    //style the divs
    shoesname.style.fontSize = "11px";
    shoesname.style.color = "hsl(220, 14%, 75%)";
    shoesprice.style.fontSize = "11px";
    shoesprice.style.color = "hsl(220, 14%, 75%)";
    totalprice.style.fontSize = "11px";
    totalprice.style.color = "black";
    totalprice.style.display = "inline";
    shoesprice.style.display = "inline";
    imgthumbnail.style.width = "50px";
    imgthumbnail.style.height = "50px";
    imgthumbnail.style.borderRadius = "3px";
    imgthumbnail.style.display = "inline";

    //attach the divs to the parrent div element
    element.append(imgthumbnail);
    element.append(shoesname);
    element.append(shoesprice);
    element.append(totalprice);
    element.append(trashicon);

    document.getElementById("cart").append(element);
  }
}
