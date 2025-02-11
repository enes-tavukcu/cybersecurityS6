<script setup lang="ts">
import { ref } from "vue";

interface Answer {
  text: string;
  correct: boolean;
}

interface Question {
  question: string;
  answers: Answer[];
}

const questions = ref<Question[]>([
    // Questions PlayStation
    {
      question: "Quelle est la meilleure pratique pour sécuriser un compte en ligne ?",
      answers: [
        { text: "Utiliser le même mot de passe partout", correct: false },
        { text: "Activer l’authentification à deux facteurs (2FA)", correct: true },
        { text: "Ne jamais changer son mot de passe", correct: false },
      ],
    },
    {
      question: "Que recommande PlayStation pour sécuriser son compte PSN ?",
      answers: [
        { text: "Désactiver l’authentification à deux facteurs", correct: false },
        { text: "Partager son mot de passe uniquement avec ses amis", correct: false },
        { text: "Créer un mot de passe unique et activer 2FA", correct: true },
      ],
    },
    {
      question: "Pourquoi ne faut-il jamais partager son mot de passe PSN ?",
      answers: [
        { text: "Parce que c’est interdit par Sony", correct: true },
        { text: "Parce que personne ne pourrait deviner un mot de passe", correct: false },
        { text: "Parce que cela ralentit votre connexion", correct: false },
      ],
    },
    {
      question: "Comment détecter une tentative de piratage de votre compte PSN ?",
      answers: [
        { text: "Recevoir un email de connexion inconnue", correct: true },
        { text: "Recevoir des réductions spéciales", correct: false },
        { text: "Avoir un chargement plus lent des jeux", correct: false },
      ],
    },
    // Questions Phishing (Economie.gouv)
    {
      question: "Qu'est-ce que le phishing ?",
      answers: [
        { text: "Une attaque DDoS", correct: false },
        { text: "Une technique pour voler des informations personnelles", correct: true },
        { text: "Un logiciel antivirus", correct: false },
      ],
    },
    {
      question: "Quel est un signe d'un email de phishing ?",
      answers: [
        { text: "Un email avec des fautes d’orthographe", correct: true },
        { text: "Un email avec un logo officiel", correct: false },
        { text: "Un email de votre banque sans faute", correct: false },
      ],
    },
    {
      question: "Quelle est la meilleure réaction face à un email suspect ?",
      answers: [
        { text: "Fournir ses informations pour vérifier", correct: false },
        { text: "Ne pas cliquer sur les liens et contacter l’émetteur officiel", correct: true },
        { text: "Répondre pour demander si c'est légitime", correct: false },
      ],
    },
    {
      question: "Que risque-t-on en cliquant sur un lien frauduleux ?",
      answers: [
        { text: "Une amende de l'État", correct: false },
        { text: "Le vol de vos informations personnelles", correct: true },
        { text: "Un ralentissement temporaire d'internet", correct: false },
      ],
    },
    // Questions Générateur de mots de passe
    {
      question: "Pourquoi faut-il utiliser un mot de passe unique pour chaque site ?",
      answers: [
        { text: "Pour compliquer la tâche des pirates en cas de fuite", correct: true },
        { text: "Parce que c'est une obligation légale", correct: false },
        { text: "Pour pouvoir le partager avec des amis", correct: false },
      ],
    },
    {
      question: "Quelle est la meilleure longueur pour un mot de passe sécurisé ?",
      answers: [
        { text: "4 à 6 caractères", correct: false },
        { text: "8 à 12 caractères", correct: false },
        { text: "Au moins 12 caractères avec majuscules, chiffres et symboles", correct: true },
      ],
    },
    {
      question: "Quelle est la meilleure méthode pour gérer ses mots de passe ?",
      answers: [
        { text: "Les noter sur un papier", correct: false },
        { text: "Utiliser un gestionnaire de mots de passe", correct: true },
        { text: "Utiliser uniquement des mots simples à retenir", correct: false },
      ],
    },
    {
      question: "Un mot de passe comme '123456' est-il sécurisé ?",
      answers: [
        { text: "Oui, s'il n'est utilisé que sur un seul site", correct: false },
        { text: "Non, il est trop facile à deviner", correct: true },
        { text: "Oui, si on ajoute une majuscule", correct: false },
      ],
    },
  ]);

const currentQuestion = ref<number>(0);
const selectedAnswer = ref<number | null>(null);
const score = ref<number>(0);
const feedback = ref<string | null>(null);
const showCorrectAnswer = ref<boolean>(false);

const selectAnswer = (index: number): void => {
  selectedAnswer.value = index;
};

const validateAnswer = (): void => {
  if (selectedAnswer.value !== null) {
    const correctIndex = questions.value[currentQuestion.value].answers.findIndex(
      (answer) => answer.correct
    );

    if (questions.value[currentQuestion.value].answers[selectedAnswer.value].correct) {
      score.value++;
      feedback.value = "Bravo ! ✅";
    } else {
      feedback.value = `❌ Mauvaise réponse ! La bonne réponse était : "${questions.value[currentQuestion.value].answers[correctIndex].text}"`;
    }

    showCorrectAnswer.value = true;
    setTimeout(() => {
      currentQuestion.value++;
      selectedAnswer.value = null;
      feedback.value = null;
      showCorrectAnswer.value = false;
    }, 2000); // Pause de 2 secondes avant de passer à la question suivante
  }
};

const resetQuiz = (): void => {
  currentQuestion.value = 0;
  score.value = 0;
  selectedAnswer.value = null;
  feedback.value = null;
};
</script>

<template>
  <section class="quiz">
    <div class="quiz__container">
      <h2 class="quiz__title">Quiz Cybersécurité</h2>
      <p class="quiz__progress">Question {{ currentQuestion + 1 }} / {{ questions.length }}</p>

      <div v-if="currentQuestion < questions.length" class="quiz__question">
        <h3 class="quiz__question-text">{{ questions[currentQuestion].question }}</h3>
        <div class="quiz__answers">
          <button
            v-for="(answer, index) in questions[currentQuestion].answers"
            :key="index"
            class="quiz__answer"
            :class="{
              'quiz__answer--selected': selectedAnswer === index,
              'quiz__answer--correct': showCorrectAnswer && answer.correct,
              'quiz__answer--wrong': showCorrectAnswer && selectedAnswer === index && !answer.correct
            }"
            @click="selectAnswer(index)"
            :disabled="showCorrectAnswer"
          >
            {{ answer.text }}
          </button>
        </div>

        <p v-if="feedback" class="quiz__feedback">{{ feedback }}</p>
        <button v-if="!showCorrectAnswer" class="quiz__validate" @click="validateAnswer">Valider</button>
      </div>

      <div v-else class="quiz__result">
        <h3 class="quiz__result-text">🎉 Quiz terminé ! Tu as obtenu {{ score }} / {{ questions.length }}</h3>
        <button class="quiz__retry" @click="resetQuiz">Rejouer</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.quiz {
  display: flex;
  justify-content: center;
  padding: 40px 0;

  &__container {
    width: 90%;
    max-width: 600px;
    background: #000000;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgb(145 145 145 / 50%);
    text-align: center;
    border: linear-gradient(to bottom, #00ff00, black);
  }

  &__title {
    font-size: 24px;
    margin-bottom: 10px;
    color: white;
  }

  &__progress {
    font-size: 16px;
    margin-bottom: 15px;
    color: lightgray;
  }

  &__question-text {
    font-size: 18px;
    margin-bottom: 15px;
    color: white;
  }

  &__answers {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__answer {
    background: transparent;
    color: white;
    border: 2px solid rgb(0, 255, 0);
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: rgba(0, 255, 0, 0.5);
    }

    &--selected {
      background: rgba(0, 255, 0, 0.3);
    }

    &--correct {
      background: green !important;
    }

    &--wrong {
      background: red !important;
    }
  }

  &__validate,
  &__retry {
    background: rgb(0, 255, 0);
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    transition: 0.3s;

    &:hover {
      background: rgba(0, 255, 0, 0.5);
    }
  }

  &__feedback {
    margin-top: 10px;
    font-size: 16px;
    color: white;
  }

  &__result-text {
    font-size: 20px;
    color: white;
  }
}

@include small-down(){
  .quiz__container {
    width: 95%;
    padding: 15px;
  }

  .quiz__title {
    font-size: 20px;
  }

  .quiz__question-text {
    font-size: 16px;
  }

  .quiz__answer {
    font-size: 14px;
    padding: 8px;
  }
}
</style>
