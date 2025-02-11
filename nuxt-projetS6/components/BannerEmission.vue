<script setup lang="ts">
</script>

<template>
  <div class="banner">
    <!-- Image de fond -->
    <div class="banner__image"></div>
    
    <!-- Dégradé + Contenu -->
    <div class="banner__overlay">
      <h1 class="banner__title">Hack or Safe : L'émission</h1>
      <p class="banner__description">
        Plongez dans le monde de la cybersécurité à travers des analyses captivantes et des discussions sur les hacks les plus marquants. Une immersion unique dans le hacking éthique et les menaces numériques !
      </p>
      <!-- <NuxtLink to="/tableau" class="banner__button">En savoir plus</NuxtLink> -->
      <NuxtLink to="/tableau">
        <ButtonSavoirplus to="/tableau"/>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">
.banner {
  position: relative;
  width: 100%;
  height: 60vh; // Ajustable selon ton design
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @include small-down() {
    height: 40vh; // Réduction de la hauteur sur mobile
  }

  &__image {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('@/assets/MiniaEmission.jpg') center/cover no-repeat;
    z-index: 1;
  }

  &__overlay {

    left: 0%;
    position: absolute;
    width: 90%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
    color: white;
    z-index: 2;

    @include small-down() {
      width: 100%;
      text-align: center;
      padding: 20px;
    }
  }

  &__title {
    font-size: 2.5em;
    font-weight: bold;
    margin-bottom: 10px;

    @include small-down() {
      font-size: 1.8em;
    }
  }

  &__description {
    font-size: 1.2em;
    margin-bottom: 20px;

    @include small-down() {
      font-size: 1em;
    }
  }

  &__button {
    display: inline-block;
    padding: 10px 20px;
    background: #00ff00;
    color: black;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 5px;
    transition: 0.3s;

    &:hover {
      background: #00cc00;
    }
  }
}
</style>
