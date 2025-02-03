<script setup lang="ts">
import { ref, onMounted } from "vue";

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 3000); // Durée du chargement
});
</script>

<template>
   <div v-if="isLoading" class="bg">
    <CardChargement />
  </div>

  <div v-else class="bg__home">
    <div class="bg__home__content">
      <p class="bg__home__content-text">
        Découvrez la cybersécurité tout en vous divertissant.
      </p>
      <ScrollButton />
    </div>
    <div class="bg__home__content-banner">  
    <BannerSecurity />
    </div>

   
    
  </div>
</template>

<style lang="scss">
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.bg__home {
  height: 100vh;
  background-color: black;

  &__content {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-90%, -50%);
    display: flex;
    gap: 40px;
    flex-direction: column;
    
    @include small-down() {
      position: absolute;
        top: 10%;
        left: 5%;
        width: 300px;
        transform: translate(0%, 0%);
        display: flex
;
        gap: 40px;
        flex-direction: column;

    }
    
    &-text {
      font-size: 3em;
      font-weight: 1000;
      color: #ffffff;
      animation: slideInLeft 1s ease-in-out;


      @include small-down() {
        font-size: 1.5em;
      }
    }

    // &-banner {
    //   animation: slideInRight 1s ease-in-out;

    // }
  }
}



/* Optionnel : Ajouter une transition fluide */
div {
  transition: opacity 0.5s ease-in-out;
}
.bg {
    background-color: rgba(0, 0, 0, 1.5);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1000;
}
</style>