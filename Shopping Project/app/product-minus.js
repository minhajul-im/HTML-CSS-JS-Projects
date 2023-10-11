import { productTaka } from "./product-taka.js";
import { deliveryAndTaxCharge } from "./delivery-tax.js";
import { totalTaka } from "./total-taka.js";
import { totalProductsMinus } from "./count-minus.js";
import { getId } from "./get-id.js";

// minus button
export const minusBtn = (id, price) => {
  let btn = document.querySelector(`.minus-item[data-id="${id}"]`);

  btn.addEventListener("click", () => {
    let count = document.querySelector(
      `.item-counter-product[data-id="${id}"]`
    );

    let countId = count.dataset.id;

    // total minus counter
    totalProductsMinus();

    if (countId == id) {
      let count = document.querySelector(
        `.item-counter-product[data-id="${id}"]`
      );
      let decrease = parseInt(count.innerHTML);
      let result = decrease - 1;
      let totalCount = (count.innerHTML = result);

      let total = parseInt(totalCount);

      let totalPrice = total * price;

      let prices = document.querySelector(
        `.total-price-multi[data-id="${id}"]`
      );

      let minusPrice = (prices.innerHTML = totalPrice.toFixed(2));

      // product taka empty
      getId("price").innerText = 0;

      // product taka
      productTaka(minusPrice);

      // delivery tax update
      deliveryAndTaxCharge();

      // total taka
      totalTaka();
    }
  });
};
