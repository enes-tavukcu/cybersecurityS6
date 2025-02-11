<template>
    <!-- <h2 class="tierlist__title">Podcast</h2> -->
    <div class="tierlist">
      <div class="tierlist__grid">
        <!-- Carte 1 -->
        <div class="tierlist__card" >
            <img class="articles__image" src="@/assets/fifa.webp" alt="Sécuriser ses comptes en ligne" />
          <div class="tierlist__overlay"></div>
          <div class="tierlist__content">
            <h3> Le piratage des emails de la FIFA <span>(2018)</span> </h3>
            <p> Des cyberattaques ont révélé des informations confidentielles sur des affaires de corruption avant la Coupe du Monde en Russie. </p>
          </div>
        </div>
  
        <!-- Carte 2 -->
        <div class="tierlist__card" >
            <img class="articles__image" src="@/assets/cr7.jpg" alt="Sécuriser ses comptes en ligne" />

          <div class="tierlist__overlay"></div>
          <div class="tierlist__content">
            <h3> Scandale des emails de Cristiano Ronaldo <span>(2016)</span> </h3>
            <p> Une fuite ciblant Ronaldo a révélé des informations financières et personnelles, alimentant des polémiques sur la vie privée. </p>
          </div>
        </div>
  
        <!-- Carte 3 -->
        <div class="tierlist__card">
            <img class="articles__image" src="@/assets/lizard.jpeg" alt="Sécuriser ses comptes en ligne" />

          <div class="tierlist__overlay"></div>
          <div class="tierlist__content">
            <h3> Lizard Squad et le hack de Noël <span>(2014)</span> </h3>
            <p> Le groupe Lizard Squad a perturbé PlayStation Network et Xbox Live, empêchant des millions de joueurs de jouer pendant Noël. </p>
          </div>
        </div>
  
        <!-- Carte 4 -->
        <div class="tierlist__card">
            <img class="articles__image" src="@/assets/twitch.png" alt="Sécuriser ses comptes en ligne" />

          <div class="tierlist__overlay"></div>
          <div class="tierlist__content">
            <h3> Vol de données de Twitch <span>(2021)</span> </h3>
            <p> Des pirates ont diffusé les revenus des streamers et le code source de la plateforme, créant un séisme dans l'industrie du streaming. </p>
          </div>
        </div>
  
        <!-- Carte 5 -->
        <div class="tierlist__card">
            <img class="articles__image" src="@/assets/equifax.png" alt="Sécuriser ses comptes en ligne" />

          <div class="tierlist__overlay"></div>
          <div class="tierlist__content">
            <h3> Attaque d’Equifax <span>(2017)</span> </h3>
            <p> 147 millions de personnes touchées par une fuite massive de données personnelles, y compris des numéros de sécurité sociale. </p>
          </div>
        </div>
  
        <!-- Carte 6 -->
        <div class="tierlist__card">
            <img class="articles__image" src="@/assets/wannacry.jpg" alt="Sécuriser ses comptes en ligne" />

          <div class="tierlist__overlay"></div>
          <div class="tierlist__content">
            <h3> WannaCry <span>(2017)</span> </h3>
            <p> Un ransomware a paralysé des hôpitaux et entreprises dans plus de 150 pays, provoquant des pertes financières majeures. </p>
          </div>
        </div>
  
        <!-- Carte 7 -->
        <div class="tierlist__card">
            <img class="articles__image" src="@/assets/yahoo.jpg" alt="Sécuriser ses comptes en ligne" />

          <div class="tierlist__overlay"></div>
          <div class="tierlist__content">
            <h3> Hack de Yahoo <span>(2013)</span> </h3>
            <p> La plus grande violation de données de l’histoire, affectant 3 milliards de comptes et exposant des informations personnelles. </p>
          </div>
        </div>
  
        <!-- Carte 8 -->
        <div class="tierlist__card">
            <img class="articles__image" src="@/assets/twitter2.jpg" alt="Sécuriser ses comptes en ligne" />

          <div class="tierlist__overlay"></div>
          <div class="tierlist__content">
            <h3> Attaque sur Twitter <span>(2020)</span> </h3>
            <p> Des comptes d’Elon Musk, Obama et Apple piratés pour promouvoir une arnaque Bitcoin, révélant des failles critiques. </p>
          </div>
        </div>
  
        <!-- Carte 9 -->
        <div class="tierlist__card">
            <img class="articles__image" src="@/assets/pipeline.webp" alt="Sécuriser ses comptes en ligne" />

          <div class="tierlist__overlay"></div>
          <div class="tierlist__content">
            <h3> Attaque de Colonial Pipeline <span>(2021)</span> </h3>
            <p> Des hackers ont paralysé un pipeline de carburant aux États-Unis, causant des pénuries et une hausse des prix. </p>
          </div>
        </div>
  
        <!-- Carte 10 -->
        <div class="tierlist__card">
            <img class="articles__image" src="@/assets/brad-pitt.jpg" alt="Sécuriser ses comptes en ligne" />

          <div class="tierlist__overlay"></div>
          <div class="tierlist__content">
            <h3> Arnaque Brad Pitt <span>(2024)</span> </h3>
            <p> Une femme a été arnaquée de 800 000€ par un escroc se faisant passer pour Brad Pitt en ligne. </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>

   .tierlist__title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: #00ff00;
    // margin-bottom: 20px;
  }
  .tierlist {
    text-align: center;
    padding: 100px;
    background: black;
    position: absolute;
    z-index: 10;

    @include small-down() {
        padding: 50px;
      }
  }
  
  .tierlist__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-items: center;

    @include small-down() {
        grid-template-columns: repeat(1, 1fr);
      }
  }
  
  .tierlist__card {
    position: relative;
    width: 90%;
    height: 250px;
    background-size: cover;
    background-position: center;
    border: 1px solid rgba(0, 255, 128, 0.8);
    // box-shadow: 0 0 15px #00ff00;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
  
    &:hover {
      transform: scale(1.05);
    }
  }
  
  .tierlist__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
  }
  
  .tierlist__content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 15px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
  color: #fff;
}

  
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    color: #0f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  span {
    font-size: 1rem;
    color: rgba(0, 255, 128, 0.7);
  }
  
  p {
    font-size: 0.9rem;
    margin-top: 10px;
  }

  img {
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    object-fit: cover;
  }
  </style>
  