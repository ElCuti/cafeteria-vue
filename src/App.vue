<script setup>
import { RouterLink, RouterView } from "vue-router";
import btncoffee from "./components/btncoffee.vue";
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <header class="Encabezado">
      <nav class="d-flex justify-content-between align-items-center px-4 py-2">
        <div class="p-3">
          <h3 class="fuenteEncabezado">Slow Roast</h3>
        </div>
        <div class="p-2 flex-center fuenteEncabezado">
          <RouterLink to="/" class="p-2 navText">Inicio</RouterLink>
          <RouterLink to="/carta" class="p-2 navText">Menu</RouterLink>
          <RouterLink to="/contacto" class="p-2 navText">Contacto</RouterLink>
        </div>
        <div class="p-2">
          <RouterLink to="/carrito">
            <btncoffee color="Primary" size="lg">0 <i class="bi bi-cart"></i></btncoffee
          ></RouterLink>
        </div>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="mt-auto py-4 text-white">
      <div class="container">
        <div class="row text-start">
          <div class="col-md-4 mb-4 mb-md-0">
            <h4 class="fuenteEncabezado fw-bold mb-3">Slow Roast</h4>
            <p>
              Artesanía en cada taza. Un espacio para detener el tiempo y disfrutar del buen café.
            </p>
          </div>

          <div class="col-md-4 mb-4 mb-md-0">
            <h6 class="text-uppercase fw-bold mb-3 textFooter">Visítanos</h6>
            <p class="mb-1">Calle del Código 404, Madrid</p>
            <p class="mb-1 pt-3">Lunes a Sábado</p>
            <p class="mb-0">08:00 - 19:00</p>
          </div>

          <div class="col-md-4">
            <h6 class="text-uppercase fw-bold mb-3 textFooter">Legal</h6>
            <a href="#" class="d-block mb-1 legalText">Privacy Policy</a>
            <a href="#" class="d-block mb-1 legalText">Terms of Service</a>
            <a href="#" class="d-block mb-0 legalText">Accessibility</a>
          </div>
        </div>

        <hr class="mt-4 mb-3" style="border-color: #f5f2ed" />
        <div>
          <div class="col-12 text-start textFooter">
            © 2026 Slow Roast Coffee. Crafted for your morning ritual.
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
footer {
  text-align: center;
  padding: 5px;
  background-color: #3e2723;
}
.Encabezado {
  background-color: #f5f2ed;
}
.fuenteEncabezado {
  font-family: "Libre Caslon Text", serif;
}
.fuenteTexto {
  font-family: "DM Sans", serif;
}
.navText {
  color: #2c1e16;

  text-decoration: underline;
  text-decoration-color: transparent;

  text-underline-offset: 6px;

  transition:
    color 0.3s ease,
    text-decoration-color 0.3s ease;
}
.navText:hover {
  color: #c98a58;
  text-decoration-color: #c98a58;
}
.legalText {
  color: white;

  text-decoration: underline;
  text-decoration-color: transparent;

  text-underline-offset: 6px;

  transition:
    color 0.3s ease,
    text-decoration-color 0.3s ease;
}
.legalText:hover {
  color: #c98a58;
  text-decoration-color: #c98a58;
}
.textFooter {
  font-size: 12px;
  color: gray;
}
</style>
