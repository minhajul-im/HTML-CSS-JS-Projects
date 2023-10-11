import { cashCart } from "./cash-cart.js";
import { notificationCounter, totalProductsCounter } from "./count-plus.js";
import { getId } from "./get-id.js";
import { productTaka } from "./product-taka.js";
import { deliveryAndTaxCharge } from "./delivery-tax.js";
import { totalTaka } from "./total-taka.js";
import { deleteHistory } from "./delete-history.js";
import { dataSet } from "./data-set.js";
import { plusBtn } from "./product-plus.js";
import { minusBtn } from "./product-minus.js";

export const btnEvent = () => {
  document.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      // set notification
      getId("badge").style.display = "block";

      // get product all dataset
      const id = btn.dataset.id;
      const title = btn.dataset.title;
      const category = btn.dataset.category;
      const price = btn.dataset.price;

      // data set
      if (dataSet.find((e) => e === id)) {
        return;
      }
      dataSet.push(id);

      // notification count
      notificationCounter();

      //product count
      totalProductsCounter();

      // show cash history
      cashCart(id, title, category, price);

      // delete history
      deleteHistory(id, price);

      //product price
      productTaka(price);

      //delivery & tax
      deliveryAndTaxCharge();

      // total taka
      totalTaka();

      // plus button
      plusBtn(id, price);

      //get dataset id
      let count = document.querySelector(
        `.item-counter-product[data-id="${id}"]`
      );

      let countId = count.dataset.id;

      if (countId == id) {
        let count = document.querySelector(
          `.item-counter-product[data-id="${id}"]`
        );
        count.innerHTML = 1;
      }

      // minus button
      minusBtn(id, price);
    });
  });
};
