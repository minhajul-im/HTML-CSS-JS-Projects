import { getId } from "./get-id.js";

export const cartIconClick = getId("icon").addEventListener("click", () => {
  if (getId("cart-icon").style.display === "block") {
    getId("cart-icon").style.display = "none";
  } else {
    getId("cart-icon").style.display = "block";
  }
});
