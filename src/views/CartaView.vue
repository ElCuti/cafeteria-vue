<script setup>
import { coffeGet } from "@/api/coffee";
import { onBeforeMount, ref, computed } from "vue";
import cardcoffee from "@/components/cardcoffee.vue";
const emit = defineEmits(["add"]);
const carta = ref([]);

onBeforeMount(async () => {
  carta.value = await coffeGet();
});

const cartaLimpia = computed(() => {
  const testCafe = [55, 56, 57];
  return carta.value.filter((cafe) => !testCafe.includes(cafe.id));
});
</script>

<template>
  <div class="container py-5">
    <h1>Carta</h1>
    <div class="row justify-content-center g-4">
      <div v-for="cafe in cartaLimpia" :key="cafe.id" class="col-md-4 d-flex">
        <cardcoffee
          :id="cafe.id"
          :image="cafe.image"
          :title="cafe.title"
          :description="cafe.description"
          :ingredients="cafe.ingredients"
          :is-new="cafe.id == 2"
          :price="cafe.price"
          @add="() => emit('add')"
        />
      </div>
    </div>
  </div>
</template>
