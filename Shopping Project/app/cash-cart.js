import { getId } from "./get-id.js";

const items = [1];

// show history product
export const cashCart = (id, title, category, price) => {
  items.forEach((_item) => {
    const div = document.createElement("div");
    div.classList.add(
      "d-flex",
      "justify-content-around",
      "align-baseline",
      "py-2",
      "new-div-history"
    );

    div.id = `${id}`;

    div.innerHTML = `
        <h5>${title}</h5>
        <p class="fst-italic"> ${category}</p>
        <h5>

        <span><i class="fa-solid fa-minus curPointer minus-item"
         data-price="${price}" data-id="${id}"></i></span> 

        <span class="item-counter-product" data-id="${id}">0</span> 
        
        <span><i class="fa-solid fa-plus curPointer plus-item" 
        data-price="${price}" data-id="${id}"></i></span>

         </h5>
        <h5>$ <span class="total-price-multi"
         data-id="${id}">${price}</span></h5>
         
        <p>
        <i class="fa-solid fa-trash-can
        curPointer text-danger delete-history"
         data-price="${price}" data-id="${id}"
         ></i>
        </p>
        `;

    getId("cart-cash-section").appendChild(div);
  });
};
