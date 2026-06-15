<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="headerPagina">
    <nav>
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/carta">Nuestra Carta</RouterLink>
      <RouterLink to="/contacto">Contacto</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>

  </footer>

</template>

<style>
</style>
