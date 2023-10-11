import { getId } from "./get-id.js";

export const clearCash = getId("clear-cash").addEventListener("click", () => {
  //total products count clear
  getId("total-Products").innerText = "00";

  // price clear
  getId("price").innerText = "00";

  // delivery charge clear
  getId("delivery-charge").innerText = "00";

  //total tax clear
  getId("total-tax").innerText = "00";

  // total taka clear
  getId("total").innerText = "00";

  // clear cash clear
  getId("cart-cash-section").innerHTML = "";

  // notification clear
  getId("badge").style.display = "none";
});
