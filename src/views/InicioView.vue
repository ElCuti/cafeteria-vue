<script setup>
import btncoffee from "../components/btncoffee.vue";
</script>

<template>
  <div class="container">
    <div class="row text-start pt-5">
      <div class="col-12 col-sm-6 mb-4">
        <h1>
          <b>El mejor café de especialidad de la ciudad.</b>
        </h1>
        <p>
          Tostamos nuestros granos a diario para ofrecerte una experiencia única en cada taza. Un
          ambiente relajado para disfrutar del ritual del café
        </p>
        <btncoffee path="/carta" color="Primary" size="lg">
          Ver nuestra carta <i class="bi bi-arrow-down" />
        </btncoffee>
      </div>
      <div class="col imagenColumn">
        <div class="w-100 ratio ratio-1x1">
          <img
            src="../../public/fotoInicio.jpg"
            class="object-fit-cover rounded"
            alt="Imagen café"
          />
        </div>
        <div class="tarjeta card mb-3 rounded-4">
          <div class="row g-0">
            <div class="col-4">
              <i class="colorCafe icono bi bi-cup-hot-fill" />
            </div>
            <div class="col-8">
              <div class="card-body">
                <h5 class="card-title textoTitTarjeta">TUESTE</h5>
                <p class="card-text colorCafe">
                  <b>Diario & Artesanal</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-family: "Libre Caslon Text", serif;
  padding-top: 30%;
}

.tarjeta {
  max-width: 260px;
  background-color: #f1e9d7;
  position: relative;
  bottom: 30px;
  left: -30px;
  flex-wrap: nowrap;

  .row {
    flex-wrap: nowrap;
  }

  .icono {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    --bs-body-font-size: 40px;
    font-size: var(--bs-body-font-size);
  }
}
.textoTitTarjeta {
  color: #919090;
  font-size: 14px;
}
.colorCafe {
  color: #3e2723;
}
@media (width <= 992px) {
  h1 {
    padding-top: 0px;
  }
}

@media (width <= 576px) {
  .tarjeta {
    max-width: 230px;
    font-size: 16px;
    bottom: 70px;
    left: -5px;

    .row {
      flex-wrap: nowrap;
    }

    .icono {
      --bs-body-font-size: 25px;
    }
  }
}
</style>
