let data = [];

export function setCart(item) {
  data = item;
}

export function getCart() {
  return data;
}

export default {
  setCart,
  getCart,
};
