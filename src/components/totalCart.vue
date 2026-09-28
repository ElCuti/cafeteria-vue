<script setup>
const props = defineProps({
  total: Number,
});
</script>

<template>
  <div class="card cart-summary">
    <div class="card-body">
      <h5 class="card-title mb-4">Total pedido</h5>
      <div class="d-flex justify-content-between mb-3">
        <span>Productos</span>
        <span>{{ (props.total * 0.9).toFixed(2) }}€</span>
      </div>
      <div class="d-flex justify-content-between mb-3">
        <span>Impuestos (I.V.A)</span>
        <span>{{ (props.total * 0.1).toFixed(2) }}€</span>
      </div>
      <hr />
      <div class="d-flex justify-content-between mb-4">
        <strong>Total</strong>
        <strong>{{ props.total }}€</strong>
      </div>
      <button class="btn btn-primary w-100">Proceder al pago</button>
    </div>
  </div>
</template>

<style></style>
