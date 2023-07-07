import { getId } from "./get-id.js";

// product taka
export const productTaka = (price) => {
  setInnerText("price", price);
};

const setInnerText = (id, price) => {
  let productPrice = getId(id).innerText;

  let productPriceNum = parseFloat(productPrice);

  let priceNum = parseFloat(price);

  let count = productPriceNum + priceNum;

  getId(id).innerText = count.toFixed(2);
};
