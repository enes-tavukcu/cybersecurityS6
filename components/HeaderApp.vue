<script setup lang="ts">
import { ref } from "vue";
// import { RouterLink } from "vue-router";

const isOpen = ref(false);

const toggleMobileMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMobileMenu = () => {
  isOpen.value = false;
};
</script>

<template>
  <header class="header">
    <div class="header__container">
      <NuxtLink to="/" class="header__logo">
        <img
          src="@/assets/logo.svg"
          alt="logo du site"
          class="header__logo__img"
        >
      </NuxtLink>

      <button class="header__menu-button md:hidden" @click="toggleMobileMenu">
        <svg v-if="!isOpen" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M3 9h14a1 1 0 110 2H3a1 1 0 110-2zm0-4h14a1 1 0 110 2H3a1 1 0 110-2zm0 8h14a1 1 0 110 2H3a1 1 0 110-2z"
            clip-rule="evenodd"
          />
        </svg>
        <svg v-else viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M6 6a.75.75 0 011.06 0L10 8.94l2.47-2.47a.75.75 0 111.06 1.06L11.06 10l2.47 2.47a.75.75 0 11-1.06 1.06L10 11.06l-2.47 2.47a.75.75 0 01-1.06-1.06L8.94 10 6.47 7.53A.75.75 0 016 6z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <nav class="header__menu">
        <NuxtLink to="/" class="header__menu-item">Accueil</NuxtLink>
        <NuxtLink to="/tableau" class="header__menu-item">Emission</NuxtLink>
        
        
      </nav>

      <div class="header__mobile-menu" :class="{ 'is-open': isOpen }">
        <NuxtLink to="/" class="header__menu-item" @click="closeMobileMenu"
          >Accueil</NuxtLink
        >
        <NuxtLink to="/tableau" class="header__menu-item" @click="closeMobileMenu"
          >Emission</NuxtLink
        >
        
      </div>

      <div class="account">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="account-icon"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M2,20 C2,15 6,12 12,12 C18,12 22,15 22,20" />
        </svg>
      </div>
    </div>
  </header>
</template>

<style setup lang="scss">
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: rgb(0, 0, 0);
  backdrop-filter: blur(10px);
  padding: rem(10px) rem(20px);
  
  /* 🔥 Ajout du trait vert sécurisant */
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px; /* Trait fin */
    background: linear-gradient(to right, transparent, #00ff00, transparent);
    box-shadow: 0px 0px 8px rgba(0, 255, 0, 0.7); /* Effet lumineux */
  }

  &__logo {
    width: 30px;
  }
}


.header__container {
  max-width: rem(1200px);
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20%;
}

.header__logo {
  width: 40px;

  &__img {
    height: 40px;
  }
}

.header__menu-button {
  display: none;
  cursor: pointer;
  background: transparent;
  border: none;

  &:focus {
    outline: none;
  }

  svg {
    width: rem(30px);
    height: rem(30px);
    fill: $white;
  }

  @media (max-width: 768px) {
    display: block;
    position: relative;
    right: -30%;
  }
}

.header__menu {
  display: flex;
  gap: rem(20px);

  &-item {
    color: #ffffff;
    text-decoration: none;
    padding: rem(10px) rem(15px);

    &:hover {

      color: $vert;
      border-radius: rem(5px);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
}

.header__mobile-menu {
  display: none;
  position: absolute;
  top: rem(60px);
  left: 0;
  right: 0;
  //   background: $BlackHeader;
  padding: rem(10px) rem(20px);
  flex-direction: column;
  gap: rem(10px);

  &.is-open {
    display: flex;


    @include medium-up() {
      position: absolute;
      top: 100%;
      background: rgb(0, 0, 0);

      transition: transform 0.3s ease-out;
      transform: translateY(0);

      
    }
  }

  .header__menu-item {
    color: #fff;
    text-decoration: none;
    padding: rem(10px) rem(15px);
    border-radius: rem(5px);
  }
}

@media (max-width: 768px) {
  .header__mobile-menu {
    top: rem(70px);
  }
}

// .account {
//   display: flex;
//   align-items: center;

//   .account-icon {
//     width: 32px;
//     height: 32px;
//     fill: none;
//     stroke: #333;
//     stroke-width: 2;
//   }
// }
</style>
