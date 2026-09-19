<script setup>
import { getIngredientColor } from "@/constants/ingredientColors";
import { getCoffeePrice } from "@/constants/coffeePrices.js";
import { ref } from "vue";
import { addCart } from "@/api/cart.js";

const emit = defineEmits(["add"]);

const props = defineProps({
  id: Number,
  image: String,
  title: String,
  description: String,
  isNew: {
    type: Boolean,
    default: false,
  },
  ingredients: Array,
  price: Number,
});

const amount = ref(0);

function aumentar() {
  if (amount.value < 10) {
    amount.value++;
  }
}

function disminuir() {
  if (amount.value > 0) {
    amount.value--;
  }
}

function add() {
  if (amount.value === 0) {
    console.warn("Tienes 0 cantidades de ese producto");
    return;
  }
  addCart({ id: props.id, amount: amount.value });
  emit("add");
  amount.value = 0;
}
</script>
<template>
  <div class="card product-card border-0 rounded-4 shadow-lg h-100">
    <div class="position-relative">
      <span v-if="isNew" class="fs-6 position-absolute top-0 end-0 badge bg-danger badge-custom"
        >¡NUEVO!</span
      >
      <div class="overflow-hidden">
        <img
          :src="image"
          class="card-img-top product-image object-fit-cover"
          height="450px"
          :alt="'Imagen de ' + title"
        />
      </div>
    </div>

    <div class="card-body d-flex flex-column p-2 px-4">
      <div class="d-flex justify-content-start align-items-center flex-wrap">
        <span
          v-for="ingredient in ingredients"
          :key="ingredient"
          class="badge rounded-pill me-2 mb-2 border border-black"
          :style="
            'background-color: ' +
            getIngredientColor(ingredient).bg +
            '; color: ' +
            getIngredientColor(ingredient).text
          "
          >{{ ingredient }}</span
        >
      </div>
      <h5 class="card-title mb-3 fw-bold">{{ title }} | {{ getCoffeePrice(id) }}€</h5>
      <p class="card-text text-muted mb-4">
        {{ description }}
      </p>
      <div class="d-flex add-bar mt-auto">
        <div class="d-flex align-items-center gap-3 stepper">
          <button type="button" class="btn-step" aria-label="Quitar uno" @click="disminuir">
            −
          </button>
          <span class="amount">{{ amount }}</span>
          <button type="button" class="btn-step" aria-label="Añadir uno" @click="aumentar">
            +
          </button>
          <button type="button" class="btn-add p-3" @click="add">Añadir al Carrito</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-body {
  background-color: #f1e9d7;
}
.add-bar {
  background: #f3f1eb;
  border-radius: 200px;
  padding: 4px;
  width: fit-content;
}
.btn-step {
  border: 0;
  background: transparent;
  color: #7e4a0f;
  font-size: 1.25rem;
  line-height: 1;
}
.amount {
  text-align: center;
  font-size: 1.25rem;
  color: #8d4e21;
}
.btn-add {
  border: 0;
  background: #e07b39;
  color: #fff;
  border-radius: 200px;
}
</style>
