<template>
  <section class="hero" :style="{ backgroundPositionY: backgroundPosition }">
    <div class="hero-content">
      <h1>Pizza Order</h1>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const backgroundPosition = ref("center");

const handleScroll = () => {
  const scrollY = window.scrollY;
  backgroundPosition.value = `${scrollY * 0.5}px`;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.hero {
  background-image: url("../assets/images/hero.webp");
  background-size: cover;
  background-position: center center;
  height: 70dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
}

.hero-content {
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  letter-spacing: -0.03em;
  color: #e77e23;
  user-select: none;
}
</style>
