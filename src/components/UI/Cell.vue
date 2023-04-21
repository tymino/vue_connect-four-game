<template>
  <div class="cell" :class="`player-${value}`" :data-column="column"></div>
</template>

<script>
export default {
  name: 'c-cell',
  props: {
    value: {
      type: Number,
      default: 0,
    },
    column: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin cellFilled($color) {
  position: relative;
  box-shadow: inset 0px 3px var(--color-edge);
  background-color: var($color);
}
@mixin cellWinner {
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;

    width: var(--cell-size-winner-circle);
    height: var(--cell-size-winner-circle);

    border: 4px solid var(--color-board);
    border-radius: 50%;

    transform: translate(-50%, -50%);
  }
}

.cell {
  --cell-size: 54px;
  --cell-size-winner-circle: calc(var(--cell-size) / 2.4);

  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--cell-size);
  height: var(--cell-size);

  background-color: var(--color-background);
  border: 1px solid black;
  border-radius: 50%;
  box-shadow: inset 0px 6px var(--color-edge);

  cursor: pointer;
  user-select: none;
}

.player-1 {
  @include cellFilled(--color-player-first);
}

.player-2 {
  @include cellFilled(--color-player-second);
}

.player-3 {
  @include cellFilled(--color-player-first);
  @include cellWinner;
}
.player-4 {
  @include cellFilled(--color-player-second);
  @include cellWinner;
}
</style>
