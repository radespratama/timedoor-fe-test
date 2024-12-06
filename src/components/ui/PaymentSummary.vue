<template>
  <div class="payment-summary">
    <h3 class="title">Payment Summary</h3>
    <ul class="items" v-if="orderItems.length > 0">
      <li v-for="item in orderItems" :key="item.name" class="item">
        <span>{{ item.name }}</span>
        <span>{{ currencyFormatter(item.price, "USD") }}$</span>
      </li>
    </ul>
    <p v-else class="no-data">No items in your order.</p>

    <hr class="divider" v-if="orderItems.length > 0" />
    <div class="total" v-if="orderItems.length > 0">
      <span>Total Price</span>
      <span class="total-price"
        >{{ currencyFormatter(totalPrice, "USD") }}$</span
      >
    </div>

    <button
      class="order-button mt-2"
      :disabled="orderItems.length === 0"
      @click="orderNow"
    >
      Order Now
    </button>
  </div>

  <Modal
    :isVisible="isModalVisible"
    @update:isVisible="isModalVisible = $event"
    :onConfirm="onConfirm"
  />
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

import { currencyFormatter } from "../../utils/helpers";
import Modal from "./Modal.vue";

const store = useStore();
const isModalVisible = ref(false);

const pizzaData = computed(() => store.getters["foods/getSelectedPizza"]);

const orderItems = computed(() => {
  const items = [];

  if (pizzaData.value?.pizza) {
    const pizzaPrice = pizzaData.value.pizza.discount?.is_active
      ? pizzaData.value.pizza.discount.final_price
      : pizzaData.value.pizza.price;
    items.push({ name: pizzaData.value.pizza.name, price: pizzaPrice });
  }

  if (pizzaData.value?.size) {
    items.push({
      name: `Size - ${pizzaData.value.size.name}`,
      price: pizzaData.value.size.extra_price,
    });
  }

  if (pizzaData.value?.new_toppings?.length > 0) {
    pizzaData.value.new_toppings.forEach((topping) => {
      items.push({ name: topping.name, price: topping.price });
    });
  }

  return items;
});

const totalPrice = computed(() =>
  orderItems.value.reduce((acc, item) => acc + item.price, 0)
);

const orderNow = () => {
  isModalVisible.value = true;
  document.body.style.overflow = "hidden";
};

const onConfirm = () => {
  store.dispatch("foods/resetSelectedPizza");
  document.body.style.overflow = "auto";
  isModalVisible.value = false;
};
</script>

<style scoped>
.payment-summary {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02), 0px 2px 6px rgba(0, 0, 0, 0.05);
}

.title {
  font-size: 20px;
  font-weight: bold;
  color: #e77e23;
  margin-bottom: 16px;
}

.items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.item {
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
  font-size: 14px;
  font-weight: 500;
  color: #333333;
}

.divider {
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 16px 0;
}

.total {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 16px;
}

.total-price {
  color: #e77e23;
}

.order-button {
  width: 100%;
  padding: 8px 12px;
  background: #e77e23;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.order-button:disabled {
  background: #e0e0e0;
  cursor: not-allowed;
}

.order-button:hover:disabled {
  background: #e0e0e0;
}

.order-button:hover {
  background: #d3671d;
}
</style>
