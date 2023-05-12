// TODO: get input id
const getInputId = (id) => {
  const getId = document.getElementById(id);
  const getValue = getId.value;
  getId.value = '';
  return getValue;
}
// TODO: button function 
const productStore = () => {
  // get id function
  const product = getInputId('product');
  const quantity = getInputId('quantity');
  // get local store function
  goToStore(product, quantity);
  // show ui function
  showUI(product, quantity);

}
// TODO: get empty or something return
const getProductItem = () => {
  let shopping = localStorage.getItem('shop');
  let shop = {};
  if (shopping) shop =JSON.parse(shopping);
  return shop;
}
//TODO:  save local store 
const goToStore = (product, quantity) => {
  const shop = getProductItem(product);
  shop[product] = quantity;
  const store = JSON.stringify(shop);
  localStorage.setItem('shop', store);
}
// TODO: show UI
const showUI = (product, quantity) => {
  const getShowContainer = document.getElementById('ul');
  const createLI = document.createElement('li');
  createLI.innerText = `${product} ${quantity}`;
  getShowContainer.appendChild(createLI);
}

// TODO: show all time display
const getAllTime = () => {
  const cart = getProductItem();
  for (const product in cart) {
    const quantity = cart[product];
    showUI(product, quantity);
  }
}
getAllTime();
