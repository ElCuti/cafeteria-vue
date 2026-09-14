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
    let existente = carrito[pos];
    let cantidad = Product.amount + existente.amount;
    carrito.splice(pos, 1);
    carrito.unshift({ id: Product.id, amount: cantidad });
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

const addProduct = (id, amount) => {
  let carrito = getCart();
  let pos = carrito.findIndex((item) => item.id === id);
  if (pos === -1) {
    throw "¡ERROR!";
  }
  carrito.splice(pos, 1);
  carrito.unshift({ id: id, amount: amount + 1 });
  localStorage.setItem("Productos", JSON.stringify(carrito));
};

const removeProduct = (id, amount) => {
  let carrito = getCart();
  let currentAmount = amount - 1;
  let pos = carrito.findIndex((item) => item.id === id);
  if (pos === -1) {
    throw "¡ERROR!";
  }
  if (currentAmount > 0) {
    carrito.splice(pos, 1);
    carrito.unshift({ id: id, amount: currentAmount });
    localStorage.setItem("Productos", JSON.stringify(carrito));
  } else {
    removeCart(id);
  }
};

const deleteCart = () => {
  localStorage.setItem("Productos", JSON.stringify([]));
};

export { getCart, addCart, removeCart, deleteCart, addProduct, removeProduct };
