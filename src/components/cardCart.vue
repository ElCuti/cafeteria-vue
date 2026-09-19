<script setup>
import { removeCart, addProduct, removeProduct } from "@/api/cart";
import { getCoffeePrice } from "@/constants/coffeePrices.js";
import { inject } from "vue";

const refrescarCarrito = inject("refrescarCarrito");

const emit = defineEmits(["change"]);

const props = defineProps({
  id: Number,
  image: String,
  title: String,
  price: Number,
  amount: Number,
});

function eliminar() {
  removeCart(props.id);
  actualizar();
}

function actualizar() {
  emit("change");
  refrescarCarrito();
}

function agregarProducto() {
  addProduct(props.id, props.amount);
  actualizar();
}
function eliminarProducto() {
  removeProduct(props.id, props.amount);
  actualizar();
}
</script>
<template>
  <div class="card mb-4">
    <div class="card-body">
      <div class="row cart-item mb-3 d-flex align-items-center">
        <div class="col-md-3">
          <img
            :src="image"
            class="card-img-top product-image object-fit-cover rounded"
            height="200px"
            :alt="'Imagen de ' + title"
          />
        </div>
        <div class="col-md-5">
          <h5 class="card-title">{{ title }}</h5>
          <p>Precio por unidad: {{ getCoffeePrice(id) }}€</p>
        </div>
        <div class="col-md-2">
          <div class="input-group">
            <button
              class="btn btn-outline-secondary btn-sm"
              type="button"
              @click="eliminarProducto()"
            >
              -
            </button>
            <input
              type="text"
              class="form-control form-control-sm text-center quantity-input"
              :value="amount"
              disabled
            />
            <button
              class="btn btn-outline-secondary btn-sm"
              type="button"
              @click="agregarProducto()"
            >
              +
            </button>
          </div>
        </div>
        <div class="col-md-2 text-end">
          <p class="fw-bold">{{ getCoffeePrice(id) * amount }}€</p>
          <button class="btn btn-sm btn-outline-danger" @click="eliminar()">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
