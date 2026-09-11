<script setup>
import { getCoffeePrice } from "@/constants/coffeePrices.js";

const props = defineProps({
  id: Number,
  image: String,
  title: String,
  price: Number,
  amount: Number,
});
</script>
<template>
  <div class="card mb-4">
    <div class="card-body">
      <div class="row cart-item mb-3">
        <div class="col-md-3">
          <img :src="image" :alt="'Imagen de ' + title" class="img-fluid rounded" />
        </div>
        <div class="col-md-5">
          <h5 class="card-title">{{ title }}</h5>
        </div>
        <div class="col-md-2">
          <div class="input-group">
            <button class="btn btn-outline-secondary btn-sm" type="button">-</button>
            <input
              style="max-width: 100px"
              type="text"
              class="form-control form-control-sm text-center quantity-input"
              :value="amount"
            />
            <button class="btn btn-outline-secondary btn-sm" type="button">+</button>
          </div>
        </div>
        <div class="col-md-2 text-end">
          <p class="fw-bold">{{ getCoffeePrice(id) }}€</p>
          <button class="btn btn-sm btn-outline-danger">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
