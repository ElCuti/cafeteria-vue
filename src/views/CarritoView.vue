<script setup>
import { ref, onMounted, onBeforeMount, computed } from "vue";
import { getCart } from "@/api/cart.js";
import cardCart from "@/components/cardCart.vue";
import { coffeGet } from "@/api/coffee";

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
</script>
<template>
  <div class="container py-5">
    <h1 class="mb-5">Your Shopping Cart</h1>
    <div class="row">
      <div v-for="cafe in itemsCarrito" :key="cafe.id" class="col-lg-8">
        <cardCart
          :id="cafe.id"
          :title="cafe.title"
          :image="cafe.image"
          :price="cafe.price"
          :amount="cafe.amount"
        />
      </div>
    </div>
  </div>
</template>
<style></style>
