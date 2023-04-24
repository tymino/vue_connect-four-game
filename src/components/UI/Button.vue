<template>
  <button
    :class="`button button-${className}`"
    type="button"
    :disabled="isDisable"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'c-button',
  props: {
    className: {
      type: String,
      default: 'game',
    },
    isDisable: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  font-family: var(--font-alkatra);
  letter-spacing: 1px;
  text-transform: uppercase;

  cursor: pointer;
  user-select: none;
}

.button-game {
  padding: 6px 16px;
  background-color: var(--color-floor);
  border: none;
  border-radius: 20px;

  color: var(--color-board);

  transition: box-shadow ease-out var(--transition-delay);

  &:hover {
    box-shadow: 0px 1px 18px var(--color-board);
  }

  &.contrast:hover {
    box-shadow: 0px 1px 14px var(--color-floor);
  }
}

.button-menu {
  width: 100%;
  padding: 10px;

  border: 2px solid var(--color-edge);
  border-radius: 10px;
  box-shadow: 0px 4px var(--color-edge);

  font-weight: var(--font-bold);

  &.vscpu {
    background-color: var(--color-player-first);
    color: var(--color-board);

    &:disabled {
      opacity: 0.4;
      cursor: default;
    }
  }

  &.vsplayer {
    background-color: var(--color-player-second);
    color: var(--color-edge);
  }

  &.rules {
    background-color: var(--color-board);
    color: var(--color-edge);
  }

  &:hover {
    filter: opacity(92%);
  }
}

.button-confirm {
  position: absolute;
  bottom: 0;
  left: 50%;

  width: 48px;
  height: 48px;

  background-color: var(--color-player-first);
  border-radius: 50%;

  color: var(--color-board);
  font-size: 1.8rem;
  font-weight: var(--font-bold);

  transform: translate(-50%, 50%);
}
</style>
