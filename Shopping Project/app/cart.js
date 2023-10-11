import { getId } from "./get-id.js";

// show display products
export const showDisplay = (carts) => {
  const getCartSec = getId("cart-section");

  carts.forEach((cart) => {
    const createDiv = document.createElement("div");

    createDiv.classList.add("col");

    createDiv.innerHTML = `
    <div class="card h-100 border-0 shadow ">

      <img src="${cart?.image}" 
      class="card-img-top imageClass" alt="..." />
      <div class="card-body text-secondary">

        <p class="fst-italic">${cart?.category}</p>

        <h4 class="pt-0 text-dark"> $ ${cart?.price} </h4>

        <h6 class="fw-semibold fst-italic
        fs-6 text-end text-dark">
        In-stock ${cart?.rating?.count}
        </h6>

        <h5 class="card-title ">${
          cart?.title ? cart.title.split(" ").slice(0, 5).join() : cart.title
        }..</h5>
        
        <p class="card-text">${
          cart?.description
            ? cart.description.split(" ").slice(0, 10).join()
            : cart.description
        }..... </p>

        <div class="d-flex justify-content-between
         align-items-baseline">

          <button
          type="button"
          class="btn btn-outline-secondary add-to-cart-btn"
          data-id="${cart?.id}"
          data-title="${
            cart?.title ? cart.title.split(" ").slice(0, 3).join() : cart.title
          }"
          data-category="${cart?.category}"
          data-price="${cart?.price}">
            Add to Card
          </button>

          <div class="d-flex ">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star-half-stroke"></i>
            <i class="fa-regular fa-star"></i>
            <code class="text-secondary" >&nbsp; &nbsp; ${
              cart?.rating?.rate
            } </code>
          </div>
        </div>
      </div>
    </div>
    `;

    getCartSec.appendChild(createDiv);
  });
};
