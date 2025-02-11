<script setup lang="ts">

</script>

<template>
    <div>
    </div>
    <EmissionDetails/>

        <h2 class="tierlist__title">Les éléments de la tierlist</h2>

    <PodcastDetails/>
</template>

<style lang="scss"scoped>
.tierlist__title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: #00ff00;
    position: relative;
    z-index: 11;

    @include small-down() {
      font-size: 1.5rem;
    }
    // margin-bottom: 20px;
  }
</style>