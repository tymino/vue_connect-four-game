<template>
  <div class="card" :class="`player-${numberOfPlayer}`">
    <div class="card__title">{{ `player ${numberOfPlayer}` }}</div>
    <div class="card__score">{{ score }}</div>
  </div>
</template>

<script>
export default {
  name: 'iu-card',
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
@mixin myAfterClass($color) {
  --circle-size: 24px;

  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: var(--circle-size);
  height: var(--circle-size);
  background-color: var($color);
  border: 2px solid var(--color-edge);
  border-radius: 50%;

  transform: translate(-50%, -50%);
}

.card {
  --grid-radius: 14%;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  padding-top: 20px;
  max-width: 200px;

  background-color: var(--color-board);
  border: 2px solid var(--color-edge);
  border-radius: var(--grid-radius);
  box-shadow: 0px 6px var(--color-edge);

  user-select: none;

  &.player-1::after {
    @include myAfterClass(--color-player-first);
  }

  &.player-2::after {
    @include myAfterClass(--color-player-second);
  }

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

@media (max-width: 730px) {
  @mixin myAfterClass($color, $sideValue) {
    --circle-size: 40px;

    top: 50%;
    left: $sideValue;
  }

  .card {
    --grid-radius: 16px;

    padding: 0px 30px;
    padding-top: 10px;

    &.player-1::after {
      @include myAfterClass(--color-player-first, 0%);
    }

    &.player-2::after {
      @include myAfterClass(--color-player-second, 100%);
    }

    &__title {
      line-height: 1.1rem;
    }

    &__score {
      line-height: 3rem;
    }
  }
}
</style>
