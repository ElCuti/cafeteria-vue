<script setup>
import btncoffee from "../components/btncoffee.vue";
</script>

<template>
  <div class="container">
    <div class="row text-start pt-5">
      <div class="col-12 col-sm-6 mb-4">
        <h1>
          <b>Hablemos</b>
        </h1>
        <p>
          ¿Tienes alguna pregunta sobre nuestros orígenes, quieres reservar un
          espacio para un evento o simplemente saludarnos? Escríbenos.
        </p>
      </div>
      <div class="col-12 col-sm-6 mb-4">
        <div class="card">
          <div class="card-body">
            <div class="mb-3">
              <label for="NombreInput" class="form-label">Nombre</label>
              <input type="email" class="form-control" id="NombreInput" />
            </div>
            <div class="mb-3">
              <label for="EmailInput" class="form-label">Email</label>
              <input type="email" class="form-control" id="EmailInput" />
            </div>
            <div class="mb-3">
              <label for="MensajeInput" class="form-label">Mensaje</label>
              <textarea
                class="form-control"
                id="MensajeInput"
                rows="6"
              ></textarea>
            </div>
            <btncoffee path="/carta" color="Primary" size="lg"
              >Enviar <i class="bi bi-arrow-down"
            /></btncoffee>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
