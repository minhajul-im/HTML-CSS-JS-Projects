import { getId } from "./get-id.js";

// dynamic function set inner text
const setInnerText = (id) => {
  let itemsCount = getId(id).innerText;
  let strCount = parseInt(itemsCount);
  let count = strCount + 1;
  getId(id).innerText = count;
};

//notification counter
export const notificationCounter = () => {
  setInnerText("badge");
};

// total product counter
export const totalProductsCounter = () => {
  setInnerText("total-Products");
};
