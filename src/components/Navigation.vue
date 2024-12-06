<template>
  <header class="header-navigation" :class="{ scrolled: isScrolled }">
    <nav class="navigation-container container">
      <div class="nav-logo">
        <a href="/"><span>PHD</span> わくわく</a>
      </div>

      <div class="nav-menus">
        <a href="#" class="nav-link">Home</a>
        <a href="#" class="nav-link">Order</a>
        <a href="#" class="nav-link">About</a>
        <a href="#" class="nav-link">Blog</a>
        <a href="#" class="nav-link">Contact</a>
      </div>

      <div class="nav-cta">
        <a href="#">Login</a>
        <a href="#" class="btn btn-primary btn-custom">Register</a>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.nav-logo a,
.nav-menus a,
.nav-cta a:not(.btn) {
  color: #fff;
}

.header-navigation {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  width: 100%;
  transition: background-color 0.3s, color 0.3s;
}

.header-navigation.scrolled {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-navigation.scrolled .nav-logo a,
.header-navigation.scrolled .nav-menus a,
.header-navigation.scrolled .nav-cta a:not(.btn) {
  color: #333;
}

.navigation-container {
  width: 100%;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 1.25rem 1rem;
  gap: 1rem;
}

.nav-logo a {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.05em;
}

.nav-logo a span {
  color: #e77e23;
}

.nav-menus {
  display: none;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
}

.nav-menus a:hover {
  text-decoration: underline !important;
  text-underline-offset: 8px;
}

.nav-cta {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
}

.btn-custom {
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  background: #e77e23;
  color: #fff;
  font-weight: 700;
  border: none;
}

.btn-custom:hover {
  background: #ff9c4f;
}

@media (min-width: 768px) {
  .navigation-container {
    padding: 1.25rem 0;
  }

  .nav-menus {
    display: flex;
  }

  .navigation-container {
    grid-template-columns: 25% 1fr 25%;
  }
}
</style>
