<template>
  <section class="content-transaction py-5 px-4">
    <div class="container-fluid mx-auto">
      <div class="row">
        <div class="col-12 col-md-8 col-lg-9">
          <div class="pizza-list-container">
            <h3 class="title-menu">Choose your pizza</h3>
            <div class="wrapper-items mt-4">
              <CardProduct :pizzas="pizzaList" />
            </div>
          </div>

          <div class="custom-list-container">
            <h3 class="title-menu">Custom Pizza</h3>

            <div class="mt-4">
              <h6 class="size-menu mb-3">Size</h6>
              <RadioProduct
                :sizes="sizeList"
                :key="selectedCurrentPizza?.size"
              />
            </div>

            <div class="my-5">
              <h6 class="size-menu mb-3">Toppings</h6>
              <CheckboxProduct
                :key="selectedCurrentPizza?.pizza?.id"
                :toppingList="toppingList"
                :enableIds="
                  selectedCurrentPizza?.pizza?.toppings || enabledToppingList
                "
              />
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4 col-lg-3">
          <PaymentSummary :key="selectedCurrentPizza" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CardProduct from "./ui/CardProduct.vue";
import RadioProduct from "./ui/RadioProduct.vue";
import CheckboxProduct from "./ui/CheckboxProduct.vue";
import PaymentSummary from "../components/ui/PaymentSummary.vue";

import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const pizzaList = computed(() => store.state.foods.pizzaList);
const sizeList = computed(() => store.state.foods.sizeList);
const toppingList = computed(() => store.state.foods.toppingList);

const enabledToppingList = toppingList.value.map((topping) => topping);
const selectedCurrentPizza = computed(
  () => store.getters["foods/getSelectedPizza"]
);
</script>

<style scoped>
.content-transaction {
  min-height: 100dvh;
}

.title-menu {
  font-size: 1.5rem;
  font-weight: 700;
  color: #e77e23;
  letter-spacing: -0.03em;
}

.wrapper-items {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
}

.custom-list-container {
  margin-top: 4rem;
}

.size-menu {
  font-size: 1rem;
  font-weight: 700;
  color: #333;
  letter-spacing: -0.01em;
}

@media (min-width: 768px) {
  .custom-list-container {
    margin-top: 8rem;
  }

  .wrapper-items {
    grid-template-columns: repeat(2, 1fr);
  }

  .title-menu {
    font-size: 2.25rem;
  }

  .size-menu {
    font-size: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .wrapper-items {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
