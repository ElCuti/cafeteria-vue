<script setup>
import { ref, onMounted, onBeforeMount, computed } from "vue";
import { getCart, deleteCart } from "@/api/cart.js";
import cardCart from "@/components/cardCart.vue";
import { coffeGet } from "@/api/coffee";
import { inject } from "vue";
import totalCart from "@/components/totalCart.vue";
import { getCoffeePrice } from "@/constants/coffeePrices";

const refrescarCarrito = inject("refrescarCarrito");
const carta = ref([]);

onBeforeMount(async () => {
  carta.value = await coffeGet();
});

const cartaLimpia = computed(() => {
  const testCafe = [55, 56, 57];
  return carta.value.filter((cafe) => !testCafe.includes(cafe.id));
});

const carrito = ref([]);
onMounted(() => {
  initCarrito();
});

function initCarrito() {
  carrito.value = getCart();
}

function eliminarCarrito() {
  deleteCart();
  initCarrito();
  refrescarCarrito();
}

const itemsCarrito = computed(() =>
  carrito.value.map((item) => {
    const pos = cartaLimpia.value.findIndex((producto) => producto.id === item.id);
    if (pos === -1) {
      console.warn("No encuentro el producto en la carta");
      return;
    }
    let productoCarrito = {
      id: item.id,
      image: cartaLimpia.value[pos].image,
      title: cartaLimpia.value[pos].title,
      price: item.price,
      amount: item.amount,
    };
    return productoCarrito;
  })
);
const totalPrice = computed(() => {
  let precioTotal = 0;
  for (const producto of carrito.value) {
    precioTotal += getCoffeePrice(producto.id) * producto.amount;
  }
  return precioTotal;
});
</script>
<template>
  <div class="container py-5">
    <div class="d-flex align-items-center mb-5">
      <h1 class="">Carrito</h1>
      <button type="button" class="ms-5 btn btn-sm btn-outline-danger" @click="eliminarCarrito()">
        Vaciar carrito
      </button>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <p v-if="itemsCarrito.length === 0">Todavía no has añadido nada al carrito!</p>
          <cardCart
            v-for="cafe in itemsCarrito"
            :id="cafe.id"
            :key="cafe.id"
            :title="cafe.title"
            :image="cafe.image"
            :price="cafe.price"
            :amount="cafe.amount"
            @change="initCarrito"
          />
        </div>
        <div class="col-lg-4">
          <totalCart :total="totalPrice" />
        </div>
      </div>
    </div>
  </div>
</template>
