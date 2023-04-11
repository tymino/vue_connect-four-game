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
.cell {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6vmin;
  height: 6vmin;
  background-color: var(--color-background);

  border-radius: 50%;
  border: 1px solid black;
  box-shadow: inset 0px 6px var(--color-edge);

  cursor: pointer;
  user-select: none;
}

.player-1 {
  background-color: var(--color-player-first);
  box-shadow: inset 0px 3px var(--color-edge);
}
.player-2 {
  background-color: var(--color-player-second);
}
</style>
