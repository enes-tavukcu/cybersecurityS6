<template>
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__row">
          <div class="footer__section footer__section--about">
            <h6 class="footer__title">À propos</h6>
            <p class="footer__text">
                Ce site à pour but instructif, educatif, pour sensibiliser chacun d'entre nous pour éviter de nous prendre des attaques chaque jour et de sécuriser ses comptes.
            </p>
          </div>
  
          <div class="footer__section footer__section--categories">
            <h6 class="footer__title">Catégories</h6>
            <ul class="footer__links">
              <li><a href="#">C</a></li>
              <li><a href="#">UI Design</a></li>
              <li><a href="#">PHP</a></li>
              <li><a href="#">Java</a></li>
              <li><a href="#">Android</a></li>
              <li><a href="#">Templates</a></li>
            </ul>
          </div>
  
          <div class="footer__section footer__section--links">
            <h6 class="footer__title">Liens rapides</h6>
            <ul class="footer__links">
              <li><a href="#">À propos</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Contribuer</a></li>
              <li><a href="#">Politique de confidentialité</a></li>
              <li><a href="#">Plan du site</a></li>
            </ul>
          </div>
        </div>
        <hr class="footer__divider" />
        <div class="footer__row footer__row--bottom">
          <p class="footer__copyright">&copy; 2025 Tous droits réservés.</p>
          <FooterRS/>
        </div>
      </div>
    </footer>
  </template>
  
  <style lang="scss">
  .footer {
    background-color: #26272b;
    padding: 45px 20px;
    color: #737373;
  
    &__container {
      max-width: 1200px;
      margin: auto;
    }
  
    &__row {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
  
      &--bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
      }
    }
  
    &__section {
      flex: 1;
      min-width: 250px;
      margin-bottom: 20px;
    }
  
    &__title {
      color: #fff;
      font-size: 16px;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
  
    &__links {
      list-style: none;
      padding: 0;
  
      li {
        margin-bottom: 5px;
      }
  
      a {
        color: #737373;
        text-decoration: none;
        &:hover {
          color: #00ff00;
        }
      }
    }
  
    &__divider {
      border-top: 1px solid #bbb;
      margin: 20px 0;
      opacity: 0.5;
    }
  
    &__copyright {
      font-size: 14px;
    }
  
    &__social {
      list-style: none;
      display: flex;
      gap: 10px;
  
      &-link {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #33353d;
        color: #fff;
        text-decoration: none;
        font-size: 14px;
        transition: background-color 0.3s;
  
        &--facebook:hover { background-color: #3b5998; }
        &--twitter:hover { background-color: #00aced; }
        &--linkedin:hover { background-color: #007bb6; }
        &--dribbble:hover { background-color: #ea4c89; }
      }
    }
  }
  </style>
  