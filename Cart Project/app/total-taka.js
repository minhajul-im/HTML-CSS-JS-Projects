import { getId } from "./get-id.js";

export const totalTaka = () => {
  const price = getId("price").innerText;

  const delivery = getId("delivery-charge").innerText;

  const tax = getId("total-tax").innerText;

  const taka = parseFloat(price) + parseFloat(delivery) + parseFloat(tax);

  getId("total").innerText = taka.toFixed(2);
};
