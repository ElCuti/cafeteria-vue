<script setup>
import btncoffee from "../components/btncoffee.vue";
</script>

<template>
  <div class="container">
    <div class="row text-start pt-5">
      <div class="col">
        <h1>El mejor café de especialidad de la ciudad.</h1>
        <p>
          Tostamos nuestros granos a diario para ofrecerte una experiencia única
          en cada taza. Un ambiente relajado para disfrutar del ritual del café
        </p>
        <btncoffee path="/carta" color="Primary" size="lg"
          >Ver nuestra carta <i class="bi bi-arrow-down"
        /></btncoffee>
      </div>
      <div class="col">
        <div class="w-75 ratio ratio-1x1">
          <img
            src="../../public/fotoInicio.jpg"
            class="object-fit-cover rounded"
            alt="Imagen café"
          />
        </div>
      </div>
    </div>
  </div>
</template>
