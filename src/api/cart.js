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
  let pos = carrito.indexOf((ProductFind) => ProductFind.id === Product.id);

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

const removeCart = (Product) => {
  let carrito = getCart();
  let pos = carrito.indexOf((ProductFind) => ProductFind.id === Product.id);
  if (pos === -1) {
    throw "¡ERROR!";
  }
  carrito.splice(pos, 1);
  localStorage.setItem("Productos", JSON.stringify(carrito));
};

const deleteCart = () => {
  localStorage.setItem("Productos", JSON.stringify([]));
};

export { getCart, addCart, removeCart, deleteCart };
