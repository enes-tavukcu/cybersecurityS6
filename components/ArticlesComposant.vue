<template>
    <section class="articles">
        <h1 class="articles__titre">Les derniers articles</h1>
      <div class="articles__container">
        <!-- Sécuriser ses comptes en ligne -->
        <div class="articles__card">
          <img class="articles__image" src="@/assets/jeuvideo.png" alt="Sécuriser ses comptes en ligne" />
          <div class="articles__content">
            <h1 class="articles__title">Sécuriser ses comptes en ligne</h1>
            <h2 class="articles__subtitle">Protéger vos données de vos consoles</h2>
            <p class="articles__description">
              La sécurisation de vos comptes en ligne est essentielle pour éviter le vol de données personnelles. Utilisez l’authentification à deux facteurs et des mots de passe uniques pour chaque plateforme afin de limiter les risques de piratage.
            </p>
            <NuxtLink class="articles__button" to="https://www.playstation.com/fr-fr/support/account/security-best-practice-psn/">Savoir plus</NuxtLink>
          </div>
        </div>
  
        <!-- Phishing -->
        <div class="articles__card">
          <img class="articles__image" src="https://www.malwarebytes.com/wp-content/uploads/sites/2/2024/05/phishing.webp?w=1024" alt="Phishing" />
          <div class="articles__content">
            <h1 class="articles__title">Phishing</h1>
            <h2 class="articles__subtitle">Mails frauduleux..</h2>
            <p class="articles__description">
              Le phishing est une technique de cyberattaque visant à récupérer vos informations personnelles via des e-mails frauduleux. Apprenez à détecter les signes d’une tentative d’hameçonnage, comme les fautes d’orthographe et les liens suspects.
            </p>
            <NuxtLink class="articles__button" to="https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/phishing-hameconnage-soyez-vigilant-sur-les-informations-que-vous#:~:text=Acc%C3%A8s%20frauduleux%20%C3%A0%20un%20syst%C3%A8me,de%2060.000%20euros%20d'amende.">Savoir plus</NuxtLink>
          </div>
        </div>
  
        <!-- Mot de passe -->
        <div class="articles__card">
          <img class="articles__image" src="https://www.protegez-vous.ca/var/protegez_vous/storage/images/7/9/5/4/3254597-1-fre-CA/b52f71cf80bf-motes-de-passe.png" alt="Mot de passe" />
          <div class="articles__content">
            <h1 class="articles__title">Mot de passe</h1>
            <h2 class="articles__subtitle">Sécurisation de vos Mots de Passe</h2>
            <p class="articles__description">
              Un mot de passe sécurisé est la première ligne de défense contre le piratage. Privilégiez des combinaisons longues et complexes et utilisez un gestionnaire de mots de passe pour ne jamais réutiliser les mêmes identifiants.
            </p>
            <NuxtLink class="articles__button" to="https://www.mailinblack.com/generateur-de-mots-de-passe/">Savoir plus</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style lang="scss" scoped>
  .articles {
    gap: 20px;
    display: flex;
    justify-content: center;
    padding: 50px 0;
    flex-direction: column;
    align-items: center;
  
    &__titre {
        text-align: center;

    }
    &__container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      max-width: 1200px;
      justify-content: center;
    }
  
    &__card {
      width: 380px;
      height: 380px;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      background-size: cover;
      transition: all 0.4s ease-out;
      box-shadow: 0px 35px 77px -17px rgba(0, 0, 0, 0.44);
      color: white;
      font-family: 'Roboto', sans-serif;
      
      &:hover {
        transform: scale(1.05);
        box-shadow: 0px 35px 77px -17px rgba(0, 0, 0, 0.64);
  
        .articles__image {
          opacity: 0.2;
        }
  
        .articles__subtitle,
        .articles__description {
          transform: translateX(0);
          opacity: 1;
        }
      }
    }
  
    &__image {
      width: 100%;
      height: 100%;
      position: absolute;
      object-fit: cover;
      transition: all 0.4s ease-out;
    }
  
    &__content {
      position: absolute;
      padding: 30px;
      height: calc(100% - 60px);
    }
  
    &__title {
      font-weight: 600;
      margin: 0;
      text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
      font-family: 'Fira Sans', sans-serif;
    }
  
    &__subtitle {
      font-weight: 100;
      margin: 20px 0 0 0;
      font-style: italic;
      opacity: 0;
      transform: translateX(200px);
      transition: all 0.6s ease-in-out;
      font-family: 'Fira Sans', sans-serif;
    }
  
    &__description {
      font-weight: 300;
      margin: 20px 0 0 0;
      line-height: 25px;
      opacity: 0;
      transform: translateX(-200px);
      transition: all 0.6s ease-in-out 0.2s;
      font-family: 'Fira Sans', sans-serif;
    }
  
    &__button {
      position: absolute;
      bottom: -50px;
      right: 10px;
      padding: 10px 20px;
      border-radius: 7px;
      border: 1px solid $vert;
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 2px;
      background: transparent;
      color: #fff;
      text-decoration: none;
      transition: all 0.2s ease-in;
  
      &:hover {
        background: rgb(0, 255, 0, 0.4);
        box-shadow: 0 0 30px 5px rgba(0, 255, 0, 0.815);
      }
    }
  }
  </style>