<script setup lang="ts">
import { ref, onMounted } from "vue";

const facts = ref([
  {
    name: "Naissance d'Internet",
    date: "1969",
    description:
      "Lancement d'ARPANET, le premier réseau de communication entre ordinateurs, ancêtre d'Internet.",
  },
  {
    name: "Premier Virus Informatique",
    date: "1986",
    description:
      "Création du virus 'Brain', le premier virus informatique connu ciblant les disquettes MS-DOS.",
  },
  {
    name: "Création du Web",
    date: "1989",
    description:
      "Tim Berners-Lee invente le World Wide Web (WWW), marquant le début du web moderne.",
  },
  {
    name: "Lancement de Google",
    date: "1998",
    description:
      "Larry Page et Sergey Brin lancent Google, révolutionnant la recherche d'informations sur Internet.",
  },
  {
    name: "Attaque de Stuxnet",
    date: "2010",
    description:
      "Le malware Stuxnet cible des infrastructures nucléaires, marquant un tournant dans la cyberguerre.",
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
    background: linear-gradient(to bottom, transparent, #00ff00, transparent);
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
    color: #0f0;
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
    background: #00ff00;
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
