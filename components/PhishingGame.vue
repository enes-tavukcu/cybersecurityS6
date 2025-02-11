<template>
    <section class="mail-list">
      <div class="mail-list__container">
        <div v-for="mail in emails" :key="mail.id" class="mail-list__item" :class="{ 'mail-list__item--fraud': mail.isFraud }">
          <div class="mail-list__icon">
            <img :src="mail.icon" alt="Email Icon" />
          </div>
          <div class="mail-list__content">
            <h3 class="mail-list__title">{{ mail.sender }}</h3>
            <p class="mail-list__description">{{ mail.subject }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  interface Email {
    id: number;
    sender: string;
    subject: string;
    isFraud: boolean;
    icon: string;
  }
  
  const emails = ref<Email[]>([
    { id: 1, sender: 'Banque Sécurisée', subject: 'Protégez votre compte immédiatement', isFraud: true, icon: '/icons/fraud.svg' },
    { id: 2, sender: 'Service Client', subject: 'Confirmation de votre commande', isFraud: false, icon: '/icons/legit.svg' },
    { id: 3, sender: 'Netflix', subject: 'Votre abonnement expire bientôt', isFraud: true, icon: '/icons/fraud.svg' },
    { id: 4, sender: 'LinkedIn', subject: 'Nouvelle invitation à vous connecter', isFraud: false, icon: '/icons/legit.svg' },
    { id: 5, sender: 'GitHub', subject: 'Nouvelle activité sur votre repo', isFraud: false, icon: '/icons/legit.svg' }
  ]);
  </script>
  
  <style lang="scss">
  .mail-list {
    display: flex;
    justify-content: center;
    padding: 50px 20px;
    background-color: black;
  
    &__container {
      display: flex;
      flex-direction: column;
      max-width: 800px;
      width: 100%;
      gap: 15px;
    }
  
    &__item {
      display: flex;
      align-items: center;
      padding: 15px;
      background: black;
      border: 1px solid transparent;
      background-image: linear-gradient(black, black), linear-gradient(to bottom, #00ff00, black);
      background-origin: border-box;
      background-clip: content-box, border-box;
      box-shadow: inset 0 0 10px rgba(0, 255, 0, 0.7);
      transition: 0.3s;
      cursor: pointer;
      border-radius: 8px;
  
      &:hover {
        box-shadow: inset 0 0 15px rgba(0, 255, 0, 1);
      }
    }
  
    &__item--fraud {
      border: 1px solid red;
      box-shadow: inset 0 0 10px rgba(255, 0, 0, 0.7);
      
      &:hover {
        box-shadow: inset 0 0 15px rgba(255, 0, 0, 1);
      }
    }
  
    &__icon {
      width: 50px;
      height: 50px;
      margin-right: 15px;
  
      img {
        width: 100%;
        height: 100%;
      }
    }
  
    &__title {
      font-size: 16px;
      font-weight: bold;
      color: #00ff00;
    }
  
    &__description {
      font-size: 14px;
      color: #ccc;
    }
  }
  </style>
  