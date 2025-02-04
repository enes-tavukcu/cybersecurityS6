<template>
    <div class="ligne-separe"></div>
  </template>
  
  <style lang="scss">
  .ligne-separe {
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, transparent, #00ff00, transparent);
    box-shadow: 0px 0px 8px rgba(0, 255, 0, 0.7);
    margin: 20px 0;
  
    @include small-down() {
      margin: 10px 0;
    }
  }
  </style>
  