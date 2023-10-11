import { data } from "./product.js";
import { showDisplay } from "./cart.js";
import { cartIconClick } from "./cart-icon.js";
import { btnEvent } from "./add-to-cart.js";
import { clearCash } from "./clear-cash.js";
import { getId } from "./get-id.js";

// show display all products
showDisplay(data);

// add to cart
btnEvent();

// cart icon
cartIconClick;

//clear cash history
clearCash;

// buy now btn
getId("buy-now").addEventListener("click", () => {
  alert("Your Order Successfully Done");
});
