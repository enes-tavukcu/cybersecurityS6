<template>
    <section class="cybermap">
      <h1 class="cybermap__title">Carte des Cyberattaques en Temps Réel</h1>
      <iframe
        class="cybermap__iframe"
        src="https://cybermap.kaspersky.com/fr"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </section>
  </template>
  
  <style lang="scss" scoped>
  .cybermap {
    text-align: center;
    padding: 20px;
  
    &__title {
      font-size: 24px;
      margin-bottom: 20px;
      color: white;
    }
  
    &__iframe {
      width: 100%;
      height: 600px;
      border-radius: 10px;
      box-shadow: 0px 0px 20px rgba(0, 142, 236, 0.5);
    }
  }
  </style>
  