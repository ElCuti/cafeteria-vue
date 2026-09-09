<script setup>
import { getIngredientColor } from "@/constants/ingredientColors";
import { getCoffeePrice } from "@/constants/coffeePrices.js";
import btncoffee from "../components/btncoffee.vue";
import { ref } from "vue";

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
  amount: {
    type: Number,
    default: 0,
  },
});

const amount = ref(props.amount ?? 0);

function aumentar() {
  amount.value++;
}

function disminuir() {
  if (amount.value > 0) {
    amount.value--;
  }
}

function add() {
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
      <p class="card-text text-muted mb-4">{{ description }}</p>
      <div class="d-flex justify-content-end mt-auto">
        <btncoffee class="rounded-pill" path="" color="Primary" size="lg" @click="disminuir"
          ><i class="bi bi-dash-lg"></i
        ></btncoffee>
        <btncoffee class="rounded-pill" path="" color="Primary" size="lg">{{ amount }}</btncoffee>
        <btncoffee class="rounded-pill" path="" color="Primary" size="lg" @click="aumentar"
          ><i class="bi bi-plus-lg"></i
        ></btncoffee>
        <btncoffee class="px-5 py-2 rounded-pill" path="" color="Primary" size="lg" @click="add"
          ><i class="bi bi-basket"></i
        ></btncoffee>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-body {
  background-color: #f1e9d7;
}
</style>
