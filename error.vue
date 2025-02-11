<template>
    <div class="error">
      <div class="error__wrap">
        <div class="error__code">
          <pre><code>
            <span class="green">&lt;!</span><span>DOCTYPE html</span><span class="green">&gt;</span>
            <span class="orange">&lt;html&gt;</span>
            <span class="orange">&lt;style&gt;</span>
            * {
              <span class="green">everything</span>: <span class="blue">awesome</span>;
            }
            <span class="orange">&lt;/style&gt;</span>
            <span class="orange">&lt;body&gt;</span>
            <span class="error__glitch">ERROR 404!</span>
            FILE NOT FOUND!
            <span class="comment">&lt;!-- The file you are looking for, is not where you think it is. --&gt;</span>
            <span class="orange">&lt;/body&gt;</span>
            <span class="orange">&lt;/html&gt;</span>
          </code></pre>
        </div>
  
        <!-- Bouton Retour à l'accueil -->
        <NuxtLink to="/" class="error__button">Retour à l'accueil</NuxtLink>
      </div>
    </div>
  </template>


<style lang="scss">
.error {
  &__wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #000;
    color: #0f0;
    font-family: "Courier New", monospace;
  }

  &__code {
    background: rgba(0, 255, 0, 0.1);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
  }

  &__glitch {
    font-size: 2rem;
    font-weight: bold;
    position: relative;
    display: inline-block;
    color: red;
    
    &::before,
    &::after {
      content: "ERROR 404!";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background: transparent;
    }

    &::before {
      left: 2px;
      text-shadow: -2px 0 red;
      clip-path: inset(0 0 50% 0);
      animation: glitchTop 0.6s infinite alternate;
    }

    &::after {
      left: -2px;
      text-shadow: 2px 0 cyan;
      clip-path: inset(50% 0 0 0);
      animation: glitchBottom 0.6s infinite alternate;
    }
  }

  &__button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #0f0;
    background: transparent;
    border: 2px solid #0f0;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    box-shadow: 0 0 5px #0f0, 0 0 10px #0f0;
    transition: background 0.3s, color 0.3s;
    
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 255, 0, 0);
      clip-path: inset(0 100% 0 0);
      transition: clip-path 0.3s ease-in-out;
    }

    &:hover {
      background: #0f0;
      color: #000;
    }

    &:hover::before {
      clip-path: inset(0 0 0 0);
    }

    &:active {
      box-shadow: 0 0 15px #0f0, 0 0 30px #0f0;
    }
  }
}

@keyframes glitchTop {
  0% { transform: translateX(0); }
  100% { transform: translateX(-3px); }
}

@keyframes glitchBottom {
  0% { transform: translateX(0); }
  100% { transform: translateX(3px); }
}
</style>