<template>
  <label
    v-for="(pizza, index) in pizzas"
    :key="pizza.id"
    class="pizza-card"
    :class="{ active: selectedPizza?.pizza?.id === pizza.id }"
    :for="pizza.name"
  >
    <div class="pizza-img">
      <img :src="imagesList[index]" alt="Pizza Image" />
    </div>
    <div class="pizza-price">
      <h3>{{ pizza.name || "-" }}</h3>
      <div class="price-info">
        <span class="price">{{
          currencyFormatter(pizza.price || 0, "USD")
        }}</span>
        <span v-if="pizza.discount?.is_active" class="old-price">
          {{ currencyFormatter(pizza.discount?.final_price || 0, "USD") }}
        </span>
      </div>
    </div>
    <div v-if="pizza.discount?.is_active" class="ribbon-banner">
      <img src="../../assets/images/ribbon.svg" alt="ribbon-offer" />
    </div>

    <input
      :id="pizza.name"
      type="radio"
      name="pizza"
      class="visual-hidden"
      :checked="selectedPizza?.pizza?.id === pizza.id"
      @change="handleSelectedPizza(pizza)"
    />
  </label>
</template>

<script setup>
import { currencyFormatter } from "../../utils/helpers";

import CheesePizza from "../../assets/images/pizza/Cheese Pizza.png";
import VeggiePizza from "../../assets/images/pizza/Veggie Pizza.png";
import ClassicalPizza from "../../assets/images/pizza/Classical Pizza.png";

import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const selectedPizza = computed(() => store.state.foods.selectedPizza);
const currentSize = computed(() => store.state.foods.sizeList);

const imagesList = [CheesePizza, VeggiePizza, ClassicalPizza];

defineProps({
  pizzas: {
    type: Array,
    required: true,
  },
});

const handleSelectedPizza = (pizza) => {
  const defaultSize = currentSize.value.find((size) => size.name === "Small");

  const payload = {
    pizza: pizza,
    size: defaultSize || null,
    new_toppings: [],
  };

  store.dispatch("foods/updateSelectedPizza", payload);
};
</script>

<style scoped>
.visual-hidden {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}

.pizza-card {
  position: relative;
  user-select: none;
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f8f8f6;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.pizza-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #e77e234d;
  border-color: #e77e23;
}

.pizza-card.active {
  background-color: #e77e23;
  color: #fff;
}

.pizza-img img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  transition: transform 0.3s;
}

.pizza-card:hover .pizza-img img {
  transform: rotate(20deg);
}

.pizza-price {
  margin-left: 0.5rem;
}

.pizza-price h3 {
  font-size: 1rem;
  font-weight: bold;
}

.price-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.price {
  font-size: 1rem;
  font-weight: bold;
}

.old-price {
  font-size: 0.9rem;
  color: #aaa;
  text-decoration: line-through;
}

.ribbon-banner {
  position: absolute;
  top: 0;
  right: 0;
}

.ribbon-banner img {
  height: 70px;
}
</style>
