const getCart = () => {
  let data = localStorage.getItem("Productos");
  if (data) {
    return JSON.parse(data);
  }
  return [];
};

const addCart = (Product) => {
  if (!Product || !Product.amount || !Product.id) {
    throw "¡ERROR!";
  }
  let carrito = getCart();
  let pos = carrito.findIndex((ProductFind) => ProductFind.id === Product.id);

  if (pos === -1) {
    carrito.unshift({ id: Product.id, amount: Product.amount });
  } else {
    carrito[pos].amount += Product.amount;
  }
  localStorage.setItem("Productos", JSON.stringify(carrito));
};

const removeCart = (id) => {
  let carrito = getCart();
  let pos = carrito.findIndex((item) => item.id === id);
  if (pos === -1) {
    throw "¡ERROR!";
  }
  carrito.splice(pos, 1);
  localStorage.setItem("Productos", JSON.stringify(carrito));
};

const addProduct = (id) => {
  let carrito = getCart();
  let pos = carrito.findIndex((item) => item.id === id);
  if (pos === -1) {
    throw "¡ERROR!";
  }
  carrito[pos].amount = carrito[pos].amount + 1;
  localStorage.setItem("Productos", JSON.stringify(carrito));
};

const removeProduct = (id) => {
  let carrito = getCart();
  let pos = carrito.findIndex((item) => item.id === id);
  if (pos === -1) {
    throw "¡ERROR!";
  }
  if (carrito[pos].amount > 1) {
    carrito[pos].amount -= 1;
    localStorage.setItem("Productos", JSON.stringify(carrito));
  } else {
    removeCart(id);
  }
};

const deleteCart = () => {
  localStorage.setItem("Productos", JSON.stringify([]));
};

export { getCart, addCart, removeCart, deleteCart, addProduct, removeProduct };
