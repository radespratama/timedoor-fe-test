<template>
  <div v-if="isVisible" class="backdrop">
    <div class="modal" data-bs-backdrop="static" tabindex="-1">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <img src="../../assets/images/success-icon.svg" alt="success-icon" />

          <div class="content-information text-center mt-4">
            <h3>Order Success</h3>
            <p>Thank you, we have received your order successfully.</p>

            <button class="btn btn-warning-custom" @click="confirmAction">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
  onConfirm: {
    type: Function,
    default: () => {},
  },
});

const emit = defineEmits(["update:isVisible"]);

const closeModal = () => {
  emit("update:isVisible", false);
};

const confirmAction = () => {
  props.onConfirm();
  closeModal();
};
</script>

<style scoped>
.overflow-hidden {
  overflow: hidden;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  z-index: 100;
  align-items: center;
}

.modal {
  display: block;
}

.modal-content {
  padding: 1.5rem;
}

.modal-content img {
  width: 6.75rem;
  height: 6.75rem;
  display: block;
  margin: 0 auto;
}

.content-information h3 {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.03em;
}

.content-information p {
  font-size: 1rem;
  color: #333333;
  font-weight: 500;
}

.content-information .btn-warning-custom {
  background-color: #e77e23;
  color: #ffffff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-top: 0.5rem;
  width: 100%;
}
</style>
