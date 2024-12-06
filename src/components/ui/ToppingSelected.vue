<template>
  <div class="checkbox-container">
    <label
      v-for="topping in toppingList"
      :key="topping.id"
      class="checkbox"
      :class="{
        active: isSelected(topping.id),
        disabled: isDisabled(topping.id),
      }"
    >
      <input
        type="checkbox"
        :value="topping.id"
        :disabled="isDisabled(topping.id)"
        :checked="isSelected(topping.id)"
        @change="toggleSelection(topping)"
      />
      {{ topping.name }}
    </label>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  toppingList: {
    type: Array,
    required: true,
  },
  enableIds: {
    type: Array,
    default: () => [],
  },
});

const store = useStore();
const selectedToppings = ref([]);

const getCurrentSelectedPizza = computed(
  () => store.getters["pizza/getSelectedPizza"]
);

watch(getCurrentSelectedPizza, () => {
  selectedToppings.value = [];
});

const isSelected = (id) =>
  selectedToppings.value.some((topping) => topping.id === id);

const isDisabled = (id) => {
  if (props.enableIds.length === 0) return true;

  return !props.enableIds.includes(id);
};

const toggleSelection = (topping) => {
  if (isDisabled(topping.id)) return;

  if (isSelected(topping.id)) {
    selectedToppings.value = selectedToppings.value.filter(
      (selected) => selected.id !== topping.id
    );
  } else {
    selectedToppings.value.push(topping);
  }

  store.dispatch("foods/updateSelectedToppings", {
    new_toppings: selectedToppings.value,
  });
};
</script>

<style scoped>
.checkbox-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

@media (min-width: 768px) {
  .checkbox-container {
    grid-template-columns: repeat(6, 1fr);
  }
}

.checkbox {
  display: flex;
  align-items: center;
  user-select: none;
  justify-content: center;
  padding: 8px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  font-weight: 600;
  cursor: pointer;
  background: #ffffff;
  transition: all 0.2s ease-in-out;
}

.checkbox.active {
  background: #e77e234d;
  color: #333;
  border-color: #e77e23;
}

.checkbox.disabled {
  background: #d3d3d3;
  cursor: not-allowed;
}

.checkbox input {
  display: none;
}

.checkbox:hover {
  background: #e77e234d;
  color: #333;
  border-color: #e77e23;
}
</style>
