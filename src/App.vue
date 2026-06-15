<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="Encabezado">
    <nav class="d-flex justify-content-between align-items-center px-4 py-2">
      <div class="p-3 ">
        <h3 class="fuenteEncabezado">Slow Roast</h3>
      </div>
      <div class="p-2 flex-center fuenteEncabezado">
      <RouterLink to="/" class="p-2 navText">Inicio</RouterLink>
      <RouterLink to="/carta" class="p-2 navText">Menu</RouterLink>
      <RouterLink to="/contacto" class="p-2 navText">Contacto</RouterLink>
      
      </div>
      <div class="p-2">
      <button class="btn btn-cafe me-md-2 fuenteEncabezado" type="button">Order Now</button>
      </div>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>

  </footer>

</template>

<style>
.Encabezado{
  background-color: #f5f2ed;
}
.fuenteEncabezado {
  font-family: 'Libre Caslon Text', serif;
}
.fuenteTexto {
  font-family: "DM Sans", serif;
}
.btn-cafe{
  --bs-btn-color: #ffffff;
  --bs-btn-bg: #3e2723; 
  --bs-btn-border-color: #6f4e37;

  --bs-btn-hover-color: #ffffff;
  --bs-btn-hover-bg: #533928; 
  --bs-btn-hover-border-color: #533928;

  --bs-btn-active-bg: #402b1e;
  --bs-btn-active-border-color: #402b1e;
}

.navText{
  color: #2c1e16; 
 
  text-decoration: underline; 
  text-decoration-color: transparent; 
  
  text-underline-offset: 6px; 
  
  transition: color 0.3s ease, text-decoration-color 0.3s ease; 
}

.navText:hover{
  color: #c98a58; 
  text-decoration-color: #c98a58; 
}
</style>
