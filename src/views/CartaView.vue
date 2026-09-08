<script setup>
import { coffeGet } from "@/api/coffee";
import { onBeforeMount, ref, computed } from "vue";
import cardcoffee from "@/components/cardcoffee.vue";

const carta = ref([]);

onBeforeMount(async () => {
  carta.value = await coffeGet();
  console.log(carta);
});

const cartaLimpia = computed(() => {
  const testCafe = [55, 56, 57];
  return carta.value.filter((cafe) => !testCafe.includes(cafe.id));
});
</script>

<template>
  <div>
    <div class="container py-5">
      <h1>Carta</h1>
      <div class="row justify-content-center g-4">
        <div v-for="cafe in cartaLimpia" class="col-md-4 d-flex">
          <cardcoffee
            :image="cafe.image"
            :title="cafe.title"
            :description="cafe.description"
            :ingredients="cafe.ingredients"
            :is-new="cafe.id == 2"
          />
        </div>
      </div>
    </div>
  </div>
</template>
