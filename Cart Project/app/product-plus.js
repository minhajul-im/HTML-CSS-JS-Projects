import { productTaka } from "./product-taka.js";
import { totalProductsCounter } from "./count-plus.js";
import { deliveryAndTaxCharge } from "./delivery-tax.js";
import { totalTaka } from "./total-taka.js";

// plus button
export const plusBtn = (id, price) => {
  let btn = document.querySelector(`.plus-item[data-id="${id}"]`);

  btn.addEventListener("click", () => {
    let count = document.querySelector(
      `.item-counter-product[data-id="${id}"]`
    );

    let countId = count.dataset.id;

    if (countId == id) {
      let count = document.querySelector(
        `.item-counter-product[data-id="${id}"]`
      );
      let increase = parseInt(count.innerHTML);
      let result = increase + 1;
      let totalCount = (count.innerHTML = result);

      let totalPrice = totalCount * price;

      let prices = document.querySelector(
        `.total-price-multi[data-id="${id}"]`
      );

      prices.innerHTML = totalPrice.toFixed(2);

      // product taka
      productTaka(price);

      // total product counter
      totalProductsCounter();

      // delivery tax update
      deliveryAndTaxCharge();

      // total taka
      totalTaka();
    }
  });
};
