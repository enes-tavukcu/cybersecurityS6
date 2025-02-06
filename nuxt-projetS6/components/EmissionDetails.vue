<script setup lang="ts">
  import { onMounted } from 'vue';
  
  const handleScroll = () => {
    const parallax = document.querySelector('.emission__parallax') as HTMLElement;
    if (parallax) {
      const scrollPosition = window.scrollY;
      parallax.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
  };
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  </script>

<template>
    <div class="emission">
      <!-- Parallax Header -->
      <div class="emission__parallax">
        <h1 class="emission__title"></h1>
      </div>
  
      <!-- Contenu de l'émission -->
      <div class="emission__content">
        <h2 class="emission__heading">Présentation</h2>
        <p class="emission__description">
          Découvrez notre émission sur la cybersécurité où nous explorons les hacks les plus marquants !
        </p>
        
        <!-- Ajoute ici les autres éléments de l'émission (participants, vidéos, etc.) -->
         <PodcastSection/>
      </div>
    </div>
  </template>
  
  
  
  <style lang="scss" scoped>
  .emission {
    &__parallax {
      position: relative;
      height: 100vh;
      background: url('@/assets/MiniaEmission.jpg') center/cover no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
      z-index: 1;

      @include small-down() {
        height: 50vh;
      }
    }
  
    &__title {
      position: relative;
      z-index: 2;
      text-shadow: rgba(0, 0, 0, 0.8)
    }
  
    &__content {
      position: relative;
      z-index: 10;
      padding: 40px 20px;
      background: #000000;
      color: white;
      box-shadow: 0px 35px 77px 50px rgba(0, 255, 0, 0.8)
    }
  
    &__heading {
      font-size: 24px;
      margin-bottom: 10px;
      text-align: center;
    }
  
    &__description {
      font-size: 18px;
      text-align: center;
    }
  }
  </style>
  