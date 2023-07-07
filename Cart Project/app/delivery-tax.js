import { getId } from "./get-id.js";

// dynamic function
export const setInnerText = (id, taka) => {
  getId(id).innerText = taka;
};

// delivery charge and total Tax
export const deliveryAndTaxCharge = () => {
  const priceId = getId("price").innerText;

  taxAndDel(priceId);
};

const taxAndDel = (prices) => {
  const price = parseFloat(prices);

  if (price > 500) {
    setInnerText("delivery-charge", 70);
    setInnerText("total-tax", (price * 0.2).toFixed(2));
  } else if (price > 400) {
    setInnerText("delivery-charge", 60);
    setInnerText("total-tax", (price * 0.15).toFixed(2));
  } else if (price > 200) {
    setInnerText("delivery-charge", 50);
    setInnerText("total-tax", (price * 0.1).toFixed(2));
  } else if (price > 100) {
    setInnerText("delivery-charge", 45);
    setInnerText("total-tax", (price * 0.05).toFixed(2));
  } else {
    if (price == 0) {
      setInnerText("delivery-charge", 0);
      setInnerText("total-tax", (price * 0).toFixed(2));
    } else {
      setInnerText("delivery-charge", 40);
      setInnerText("total-tax", (price * 0).toFixed(2));
    }
  }
};
