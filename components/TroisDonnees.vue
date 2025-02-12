<script setup lang="ts">
import { ref, onMounted } from 'vue';

const valuesSection = ref<HTMLElement | null>(null);
const displayValues = ref({ value1: 0, value2: 0, value3: 0 });
const targetValues = { value1: 30000, value2: 2200000000000, value3: 50000000 };
let hasAnimated = false;

const formatNumber = (num: number) => {
  return new Intl.NumberFormat('fr-FR', { notation: 'compact' }).format(num);
};

const startCounting = () => {
  Object.keys(targetValues).forEach((key) => {
    const target = targetValues[key as keyof typeof targetValues];
    let start = 0;
    const duration = 2000; // 2 secondes
    const stepTime = 10;
    const steps = duration / stepTime;
    const increment = target / steps;

    const interval = setInterval(() => {
      start += increment;
      displayValues.value[key as keyof typeof displayValues.value] = Math.floor(start);
      if (start >= target) {
        displayValues.value[key as keyof typeof displayValues.value] = target;
        clearInterval(interval);
      }
    }, stepTime);
  });
};

const handleScroll = () => {
  if (valuesSection.value) {
    const rect = valuesSection.value.getBoundingClientRect();
    if (rect.top < window.innerHeight && !hasAnimated) {
      hasAnimated = true;
      startCounting();
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});
</script>

<template>
          <h2 class="values__titre1">Les trois données impressionnantes</h2>

  <section class="values" ref="valuesSection">
    <div class="values__container">
      <!-- Donnée 1 -->
      <div class="values__item">
        <div class="values__icon">
          <span class="values__number">{{ formatNumber(displayValues.value1) }}</span>
        </div>
        <h3 class="values__title">Cyberattaques par jour</h3>
        <p class="values__description">
            Dans le monde numérique, les cyberattaques sont en constante augmentation.
          </p>
      </div>

      <!-- Donnée 2 -->
      <div class="values__item">
        <div class="values__icon">
          <span class="values__number">{{ formatNumber(displayValues.value2) }}</span>
        </div>
        <h3 class="values__title">Données volées par an</h3>
        <p class="values__description">
            Les données volées sont une menace massive pour les entreprises et les personnes.
        </p>
      </div>

      <!-- Donnée 3 -->
      <div class="values__item">
        <div class="values__icon">
          <span class="values__number">{{ formatNumber(displayValues.value3) }}</span>
        </div>
        <h3 class="values__title">Comptes piratés</h3>
        <p class="values__description">
            Plus de 800 millions de comptes ont été volés depuis 2009.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.values {
  display: flex;
  justify-content: center;
  padding: 50px 20px;
  background-color: black;

  &__container {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    gap: 20px;

    @include small-down {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;

    @include small-down {
      width: 100%;
    }
  }

  &__icon {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: black;
    border: 1px solid transparent;
    background-image: linear-gradient(black, black), linear-gradient(to bottom, $vert, black);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: inset 0 0 10px rgba(0, 255, 0, 0.7);
    font-size: 24px;
    font-weight: bold;
    color: $vert;
  }

  &__title {
    margin-top: 10px;
    font-size: 18px;
    color: #ccc;
    text-align: center;
  }
}
</style>
