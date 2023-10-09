<script setup></script>

<template>
  <div class="card__container">
    <div class="card__title">Lorem</div>
    <img src="https://picsum.photos/200" alt="img" />
    <div class="card__content">
      <a href="#">Lorem</a>
      ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, sequi?
    </div>
  </div>
</template>

<style lang="scss">
.card__container {
  width: 240px;
  padding: 20px;
  border: 1px solid var(--card-border-color);
  box-shadow: var(--card-box-shadow);
  background-color: var(--card-background-color);
  border-radius: 16px;

  .card__title {
    line-height: 2;
    font-size: 20px;
    font-weight: 700;
    color: var(--card-title-color);
  }

  .card__content {
    line-height: 1.5;
    font-size: 14px;
    color: var(--card-content-color);
  }
}
</style>
