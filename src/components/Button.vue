<template>
  <button class="button" :class="className" type="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'c-button',
  props: {
    className: {
      type: String,
      default: 'game-control',
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  padding: 6px 16px;
  border: none;
  border-radius: 20px;

  font-family: var(--font-alkatra);
  letter-spacing: 1px;
  text-transform: uppercase;

  transition: box-shadow ease-out var(--transition-delay);
  cursor: pointer;
  user-select: none;

  &:hover {
    box-shadow: 0px 1px 18px var(--color-board);
  }
}

.prime {
  width: 100%;
}
.second {
  width: 100%;
}
.rules {
  width: 100%;
}
.game-control {
  color: var(--color-board);
  background-color: var(--color-floor);
}
</style>
