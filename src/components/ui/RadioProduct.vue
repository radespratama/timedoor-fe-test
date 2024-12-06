<template>
  <div class="pizza-sizes d-flex flex-wrap gap-4">
    <div
      v-for="size in sizes"
      :key="size.id"
      class="form-check"
      :class="{
        active: selectedSize?.id === size.id,
      }"
    >
      <input
        :id="size.name.toLowerCase()"
        type="radio"
        name="size"
        :value="size.id"
        class="form-check-input"
        :checked="selectedSize?.id === size.id"
        :disabled="!selectedSize"
        @change="handleSelectedSize(size)"
      />
      <label class="form-check-label" :for="size.name.toLowerCase()">
        {{ size.name }}
      </label>
      <span v-if="size.extra_price > 0" class="extra-price">
        (+{{ size.extra_price }}$)
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  sizes: {
    type: Array,
    required: true,
  },
});

const store = useStore();

const selectedSize = computed(
  () => store.getters["foods/getSelectedPizza"]?.size
);

const handleSelectedSize = (size) => {
  store.dispatch("foods/updateSelectedSize", { size });
};
</script>

<style scoped>
.pizza-sizes {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: flex-start;
}

.form-check {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  user-select: none;
}

.form-check-input {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.form-check-input:checked {
  border-color: #e77e23;
  background-color: #e77e23;
}

.form-check-input:checked::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 50%;
}

.form-check-label {
  font-size: 1rem;
  font-weight: 600;
  margin-left: 0.25rem;
}

.extra-price {
  font-size: 0.875rem;
  color: #888;
  margin-left: 0.25rem;
}

@media (min-width: 768px) {
  .pizza-sizes {
    gap: 1rem;
  }

  .form-check-label {
    font-size: 1.25rem;
  }

  .extra-price {
    font-size: 1rem;
  }

  .form-check-input {
    width: 20px;
    height: 20px;
  }
}
</style>
