<script setup>
import { useRouter } from "vue-router";
import { computed } from "vue";

const router = useRouter();

const props = defineProps({
  size: String,
  color: String,
  path: String,
});

const color = computed(() => {
  if (props.color === "Primary") {
    return "primaryColor";
  } else if (props.color === "Secondary") {
    return "secondaryColor";
  } else {
    return "";
  }
});

const size = computed(() => {
  if (props.size === "lg") {
    return "btn-lg";
  } else if (props.size === "md") {
    return "btn-md";
  } else if (props.size === "sm") {
    return "btn-sm";
  } else {
    return "btn-md";
  }
});
const emit = defineEmits(["response"]);
function execute(e) {
  if (props.path) {
    router.push(props.path);
  } else {
    emit("click", e);
  }
}
</script>
<template>
  <button @click="execute" class="btn" :class="color + ' ' + size">
    <slot />
  </button>
</template>
<style>
.primaryColor {
  --bs-btn-color: #ffffff;
  --bs-btn-bg: #3e2723;
  --bs-btn-border-color: #6f4e37;

  --bs-btn-hover-color: #ffffff;
  --bs-btn-hover-bg: #533928;
  --bs-btn-hover-border-color: #533928;

  --bs-btn-active-bg: #402b1e;
  --bs-btn-active-border-color: #402b1e;
}
.secondaryColor {
  --bs-btn-color: #3e2723;
  --bs-btn-bg: #eefebe9;
  --bs-btn-border-color: #d7ccc8;

  --bs-btn-hover-color: #3e2723;
  --bs-btn-hover-bg: #d7ccc8;
  --bs-btn-hover-border-color: #bcaaa4;

  --bs-btn-active-color: #3e2723;
  --bs-btn-active-bg: #bcaaa4;
  --bs-btn-active-border-color: #a1887f;
}
</style>
