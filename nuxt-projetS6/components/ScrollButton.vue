<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
  <div class="button-arrow">
    <span class="button-arrow__text">En savoir plus</span>
    <div class="button-arrow__icon">
      ↓
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes arrowMove {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(5px);
  }
}

.button-arrow {
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  background-color: rgba(0, 255, 0, 0.2);
  border-radius: 8px;
  border: 1px solid #00ff00;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: rgba(0, 255, 0, 0.3);
  }

  &__text {
    font-size: 1.2rem;
    color: #00ff00;
    font-weight: bold;
  }

  &__icon {
    font-size: 1.5rem;
    color: #00ff00;
    animation: arrowMove 1s infinite ease-in-out;
  }
}

@media (max-width: 768px) {
  .button-arrow {
    padding: 8px 16px;
  }
  .button-arrow__text {
    font-size: 1rem;
  }
  .button-arrow__icon {
    font-size: 1.2rem;
  }
}
</style>