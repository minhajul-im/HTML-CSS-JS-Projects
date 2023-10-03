const convertStringToNumber = (num) => parseFloat(num);
const getIdByFunction = (id) => document.getElementById(id);

let count = 0;
const showShoppingProductItemFunc = (productName, showProductName) => {
  const getProductName = getIdByFunction(productName).innerText;
  const showProductNameDiv = getIdByFunction(showProductName);
  const CREATE_i_TAG = document.createElement("p");
  CREATE_i_TAG.classList.add("show-item-product");
  CREATE_i_TAG.innerText = `${++count}. ${getProductName}`;
  showProductNameDiv.appendChild(CREATE_i_TAG);
};

const totalProductPriceFunction = (productPrice, totalPrice) => {
  const productPriceStr = getIdByFunction(productPrice).innerText;
  const totalProductPriceStr = getIdByFunction(totalPrice).innerText;

  const productPriceConvertNum = convertStringToNumber(productPriceStr);
  const totalProductPriceConvertNum =
    convertStringToNumber(totalProductPriceStr);

  const totalProductPrice =
    totalProductPriceConvertNum + productPriceConvertNum;

  return totalProductPrice;
};

const disabledButtonFunction = (totalPrice, rangePrice, btnId) => {
  if (totalPrice > rangePrice) {
    getIdByFunction(btnId).disabled = false;
    const btn = getIdByFunction(btnId);
    btn.style.opacity = "100%";
    btn.style.backgroundColor = "#e527b2";
  }
};

const productBuyNow = (
  productPrice,
  totalPrice,
  productName,
  showProductName,
  totalShopping
) => {
  showShoppingProductItemFunc(productName, showProductName);

  const totalProductPrice = totalProductPriceFunction(productPrice, totalPrice);

  disabledButtonFunction(totalProductPrice, 200, "coupon-btn");
  disabledButtonFunction(totalProductPrice, 0, "make-purchase");

  getIdByFunction(totalPrice).innerText = totalProductPrice.toFixed(2);
  getIdByFunction(totalShopping).innerText = totalProductPrice.toFixed(2);
};

const couponApplyButton = () => {
  const getTotalPriceStr = getIdByFunction("total-price").innerText;
  const getTotalPrice = convertStringToNumber(getTotalPriceStr);

  const getDiscountCoupon = getIdByFunction("couponCode").value;

  if (getDiscountCoupon === "SELL200") {
    getIdByFunction("couponCode").value = "";
    const discountPrice = getTotalPrice * (20 / 100);
    getIdByFunction("discount").innerText = `-${discountPrice.toFixed(2)}`;
    const totalShopping = getTotalPrice - discountPrice;
    getIdByFunction("total").innerText = totalShopping;
  } else {
    alert("Your Coupon is not valid!🥵");
    getIdByFunction("couponCode").value = "";
  }
};
getIdByFunction("coupon-btn").addEventListener("click", couponApplyButton);

getIdByFunction("make-purchase").addEventListener("click", () => {
  getIdByFunction("modal-hide").style.display = "block";
});

getIdByFunction("getBtn1").addEventListener("click", () =>
  productBuyNow(
    "item-price1",
    "total-price",
    "product-name1",
    "show-item-ui",
    "total"
  )
);
getIdByFunction("getBtn2").addEventListener("click", () =>
  productBuyNow(
    "item-price2",
    "total-price",
    "product-name2",
    "show-item-ui",
    "total"
  )
);
getIdByFunction("getBtn3").addEventListener("click", () =>
  productBuyNow(
    "item-price3",
    "total-price",
    "product-name3",
    "show-item-ui",
    "total"
  )
);
getIdByFunction("getBtn4").addEventListener("click", () =>
  productBuyNow(
    "item-price4",
    "total-price",
    "product-name4",
    "show-item-ui",
    "total"
  )
);
getIdByFunction("getBtn5").addEventListener("click", () =>
  productBuyNow(
    "item-price5",
    "total-price",
    "product-name5",
    "show-item-ui",
    "total"
  )
);
getIdByFunction("getBtn6").addEventListener("click", () =>
  productBuyNow(
    "item-price6",
    "total-price",
    "product-name6",
    "show-item-ui",
    "total"
  )
);
getIdByFunction("getBtn7").addEventListener("click", () =>
  productBuyNow(
    "item-price7",
    "total-price",
    "product-name7",
    "show-item-ui",
    "total"
  )
);
getIdByFunction("getBtn8").addEventListener("click", () =>
  productBuyNow(
    "item-price8",
    "total-price",
    "product-name8",
    "show-item-ui",
    "total"
  )
);
getIdByFunction("getBtn9").addEventListener("click", () =>
  productBuyNow(
    "item-price9",
    "total-price",
    "product-name9",
    "show-item-ui",
    "total"
  )
);
