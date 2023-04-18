<template>
  <div class="card">
    <div class="card__title">{{ `player ${numberOfPlayer}` }}</div>
    <div class="card__score">{{ score }}</div>
  </div>
</template>

<script>
export default {
  name: 'c-card',
  props: {
    numberOfPlayer: {
      Number,
      default: 0,
    },
    score: {
      Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  --grid-radius: 14%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  max-width: 200px;

  background-color: var(--color-board);
  border: 2px solid var(--color-edge);
  border-radius: var(--grid-radius);
  box-shadow: 0px 6px var(--color-edge);

  user-select: none;

  &__title {
    font-size: 1.1rem;
    font-weight: var(--font-bold);
    text-transform: uppercase;
  }

  &__score {
    width: 100%;
    font-size: 2.2rem;
    font-weight: var(--font-bold);
    text-align: center;
  }
}
</style>
