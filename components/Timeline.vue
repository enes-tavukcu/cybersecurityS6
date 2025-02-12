<script setup lang="ts">
import { ref, onMounted } from "vue";

const facts = ref([
  {
    name: "Naissance des ransomwares (AIDS Trojan)",
    date: "1989",
    description:
      "Le premier ransomware connu, 'AIDS Trojan', est distribué via disquettes. Il exigeait une rançon de 189 $ pour débloquer les fichiers, marquant le début des attaques par rançongiciel.",
  },
  {
    name: "Le premier hacker recherché par le FBI (Kevin Mitnick)",
    date: "1995",
    description:
      "Kevin Mitnick, l'un des hackers les plus célèbres, est arrêté après avoir pénétré plusieurs systèmes gouvernementaux et entreprises. Son arrestation marque un tournant dans la lutte contre le cybercrime.",
  },
  {
    name: "La cyberattaque contre l'Estonie",
    date: "2007",
    description:
      "L'Estonie subit une cyberattaque massive, paralysant les banques, médias et services gouvernementaux. Cet événement est considéré comme l'un des premiers cyber-conflits entre nations.",
  },
  {
    name: "Le piratage de Sony Pictures",
    date: "2014",
    description:
      "Un groupe de hackers lié à la Corée du Nord attaque Sony Pictures, publiant des milliers de documents et menaçant la sortie du film 'The Interview'. Cet incident montre les risques des cyberattaques géopolitiques.",
  },
  {
    name: "La fuite massive de données chez Facebook",
    date: "2019",
    description:
      "Une base de données contenant plus de 540 millions de comptes Facebook fuit sur Internet, exposant les données personnelles des utilisateurs et mettant en lumière les problèmes de confidentialité.",
  },
]);

const revealOnScroll = () => {
  const elements = document.querySelectorAll(".timeline__item");
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      el.classList.add("visible");
    }
  });
};

onMounted(() => {
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
</script>

<template>

<h2 class="values__titre1">L'Histoire de la cybersécurité</h2>

  <div class="timeline">
    <div class="timeline__line"></div>
    <div v-for="(fact, index) in facts" :key="index" class="timeline__item" :class="index % 2 === 0 ? 'left' : 'right'">
      <div class="timeline__content">
        <h3 class="timeline__title">{{ fact.name }}</h3>
        <span class="timeline__date">{{ fact.date }}</span>
        <p class="timeline__desc">{{ fact.description }}</p>
      </div>
      <div class="timeline__point"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes glow {
  0% { box-shadow: 0 0 5px rgba(0, 255, 128, 0.5); }
  50% { box-shadow: 0 0 20px rgba(0, 255, 128, 1); }
  100% { box-shadow: 0 0 5px rgba(0, 255, 128, 0.5); }
}

.timeline {
  position: relative;
  width: 100%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 100px;


  &__line {
    position: absolute;
    width: 1px;
    height: 100%;
    background: linear-gradient(to bottom, transparent, $vert, transparent);
    box-shadow: 0px 0px 8px rgba(0, 255, 0, 0.7);
    left: 50%;
    transform: translateX(-50%);
    @include small-down() {
      left: 15%;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    position: relative;
    width: 80%;
    opacity: 0;
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    transform: translateY(30px);

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }

    &.left {
      flex-direction: row-reverse;

      @include small-down() {
        flex-direction: row-reverse;
      }
    }

    &.right {
      flex-direction: row;

      @include small-down() {
        flex-direction: row-reverse;
      }
      .timeline__content {
        align-items: flex-end;
        text-align: right;

        @include small-down() {
          text-align: left;
          align-items: flex-start;
        }
      }
    }

    @include small-down() {
      flex-direction: column;
      align-items: flex-start;
      width: 90%;
      .timeline__content {
        align-items: flex-start;
        text-align: left;
      }
    }
  }

  &__content {
    background: rgba(0, 255, 128, 0.1);
    border: 1px solid rgba(0, 255, 128, 0.8);
    padding: 20px;
    border-radius: 10px;
    width: 40%;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    position: relative;

    @include small-down() {
      width: 80%;
    }
  }

  &__title {
    font-size: 1.5em;
    font-weight: bold;
    color: $vert;
  }

  &__date {
    font-size: 1.2em;
    color: rgba(0, 255, 128, 0.7);
    font-weight: bold;
  }

  &__desc {
    font-size: 1em;
    color: #fff;
    margin-top: 10px;
  }

  &__point {
    width: 12px;
    height: 12px;
    background: $vert;
    border-radius: 50%;
    box-shadow: 0px 0px 8px rgba(0, 255, 0, 0.7);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    @include small-down() {
      left: 9.5%;
      top: 50%;
      transform: translateX(0);
    }
  }
}
</style>
