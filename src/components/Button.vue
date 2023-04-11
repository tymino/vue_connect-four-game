<template>
  <button class="button" :class="className">
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

  text-transform: uppercase;
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
