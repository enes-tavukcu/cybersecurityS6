<template>
        <h2 class="values__titre1">Nos trois valeurs</h2>

    <section class="values">
      <div class="values__container">
        
        
        <!-- Sécurité -->
        <div class="values__item">
          <div class="values__icon">
            <img src="@/assets/icons/security.svg" alt="Sécurité" />
          </div>
          <h3 class="values__title">Sécurité</h3>
          <p class="values__description">
            Protégez vos données et défendez-vous contre les cyberattaques.
          </p>
        </div>
  
        <!-- Éducation -->
        <div class="values__item">
          <div class="values__icon">
            <img src="@/assets/icons/education.svg" alt="Éducation" />
          </div>
          <h3 class="values__title">Éducation</h3>
          <p class="values__description">
            Apprenez les meilleures pratiques en cybersécurité.
          </p>
        </div>
  
        <!-- Sensibilisation -->
        <div class="values__item">
          <div class="values__icon">
            <img src="@/assets/icons/sensibility.svg" alt="Sensibilisation" />
          </div>
          <h3 class="values__title">Sensibilisation</h3>
          <p class="values__description">
            Prenez conscience des risques pour naviguer en toute sécurité.
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
  
    &__titre1 {
      font-size: 2em;
      font-weight: 1000;
      color: #ffffff;
      text-align: center;
      margin-top: 20px;
    }
  
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
  background-image: linear-gradient(black, black), linear-gradient(to bottom, #00ff00, black);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: inset 0 0 10px rgba(0, 255, 0, 0.7);
  overflow: hidden; // Empêche l'image d'aller au-delà du cercle

  &:hover {
    background: black;
    border: 1px solid #00ff00;
    box-shadow: inset 0 0 10px rgba(0, 255, 0, 1);
    background-color: rgba(0, 255, 0, 0.1);
    transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border 0.3s ease-in-out;
    
    img {
      transform: scale(1.1); // Agrandit l'icône sans agrandir le cercle
      transition: transform 0.2s ease-in-out;
    }
  }

  img {
    width: 50px;
    height: 50px;
    transition: transform 0.3s ease-in-out;
  }
}

    &__title {
      margin-top: 15px;
      font-size: 18px;
      font-weight: bold;
      color: #00ff00;
    }
  
    &__description {
      margin-top: 8px;
      font-size: 14px;
      color: #ccc;
      text-align: center;
    }
  }
  </style>
  