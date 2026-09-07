<script setup>
import { computed, ref } from "vue";
import btncoffee from "../components/btncoffee.vue";

const nombre = ref("");
const email = ref("");
const mensaje = ref("");

const nombreEnviado = ref("");
const emailEnviado = ref("");

const formularioEnviado = ref(false);
const errorFormulario = ref(false);
const colorTextForm = computed(() =>
  !errorFormulario.value ? "green" : "red",
);

const enviarFormulario = () => {
  if (nombre.value !== "" && email.value !== "" && mensaje.value !== "") {
    nombreEnviado.value = nombre.value;
    emailEnviado.value = email.value;

    formularioEnviado.value = true;
    errorFormulario.value = false;

    nombre.value = "";
    email.value = "";
    mensaje.value = "";
  } else {
    errorFormulario.value = true;
    formularioEnviado.value = false;
  }
};
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
        <div>
          <p v-if="formularioEnviado" class="textForm">
            ¡Formulario enviado! Muchas gracias {{ nombreEnviado }} por enviar
            su formulario, le comunicaremos nuestra respuesta a
            {{ emailEnviado }}
          </p>
          <p v-else-if="errorFormulario" class="textForm">
            ¡Error en el formulario! Has dejado un campo sin rellenar, procure
            rellenar todos los parametros
          </p>
        </div>
      </div>
      <div class="col-12 col-sm-6 mb-4">
        <div class="card">
          <div class="card-body">
            <div class="mb-3">
              <label for="NombreInput" class="form-label">Nombre</label>
              <input
                v-model="nombre"
                type="text"
                class="form-control"
                id="NombreInput"
              />
            </div>
            <div class="mb-3">
              <label for="EmailInput" class="form-label">Email</label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="EmailInput"
              />
            </div>
            <div class="mb-3">
              <label for="MensajeInput" class="form-label">Mensaje</label>
              <textarea
                v-model="mensaje"
                class="form-control"
                id="MensajeInput"
                rows="6"
              ></textarea>
            </div>
            <btncoffee @click="enviarFormulario" color="Primary" size="lg"
              >Enviar <i class="bi bi-arrow-down"
            /></btncoffee>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.textForm {
  color: v-bind(colorTextForm);
}
</style>
